import type { ParcelStatus } from "@/lib/admin-order-spec";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Parcel, TrackingEvent } from "@/lib/demo-parcel";
import type { TimelineIconId } from "@/components/relais/icons/LogisticsIcons";
import { prisma } from "@/lib/prisma";
import {
  buildDefaultEvents,
  formatEventAt,
  generateTrackingNumber,
  parcelStatusIsValid,
  statusCopy,
  trackingStatusForUi,
} from "@/lib/parcel-status";

export type ParcelWithRelations = Awaited<ReturnType<typeof getParcelByTracking>>;

export async function getParcelByTracking(trackingNumber: string) {
  return prisma.parcel.findUnique({
    where: { trackingNumber },
    include: { events: { orderBy: { sortOrder: "asc" } }, emailLogs: { orderBy: { createdAt: "desc" }, take: 20 } },
  });
}

export async function listParcels() {
  return prisma.parcel.findMany({
    orderBy: { updatedAt: "desc" },
    include: { events: { orderBy: { sortOrder: "asc" }, take: 1 } },
  });
}

export function mapDbParcelToUi(
  row: NonNullable<ParcelWithRelations>,
  siteLocale: Locale,
): Parcel {
  const dict = getDictionary(siteLocale);
  const displayLocale = (row.notificationLocale as Locale) || siteLocale;
  const eventLocale = siteLocale;

  const events: TrackingEvent[] = row.events.map((ev) => ({
    id: ev.id,
    icon: ev.icon as TimelineIconId,
    label: ev.label,
    location: ev.location,
    at: formatEventAt(ev.occurredAt, eventLocale),
  }));

  return {
    trackingNumber: row.trackingNumber,
    status: trackingStatusForUi(row.status as ParcelStatus),
    statusTitle: row.statusTitle || statusCopy(dict, row.status as ParcelStatus).title,
    statusDetail: row.statusDetail || statusCopy(dict, row.status as ParcelStatus).detail,
    estimatedDelivery: row.estimatedDelivery ?? "—",
    destination: row.destination,
    events,
  };
}

export type CreateParcelInput = {
  recipientEmail: string;
  notificationLocale: Locale;
  destination: string;
  estimatedDelivery?: string;
  status?: ParcelStatus;
  autoNotify?: boolean;
  trackingNumber?: string;
};

export async function createParcel(input: CreateParcelInput) {
  const dict = getDictionary(input.notificationLocale);
  const status = input.status ?? "processing";
  const copy = statusCopy(dict, status);
  let trackingNumber = input.trackingNumber?.trim() || generateTrackingNumber();

  for (let attempt = 0; attempt < 5; attempt++) {
    const existing = await prisma.parcel.findUnique({ where: { trackingNumber } });
    if (!existing) break;
    trackingNumber = generateTrackingNumber();
  }

  const events = buildDefaultEvents(dict);

  return prisma.parcel.create({
    data: {
      trackingNumber,
      recipientEmail: input.recipientEmail.trim(),
      notificationLocale: input.notificationLocale,
      status,
      autoNotify: input.autoNotify ?? false,
      destination: input.destination.trim() || dict.parcel.destination,
      estimatedDelivery: input.estimatedDelivery?.trim() || undefined,
      statusTitle: copy.title,
      statusDetail: copy.detail,
      events: {
        create: events.map((e) => ({
          sortOrder: e.sortOrder,
          icon: e.icon,
          label: e.label,
          location: e.location,
          occurredAt: e.occurredAt,
        })),
      },
    },
    include: { events: { orderBy: { sortOrder: "asc" } } },
  });
}

export type UpdateParcelInput = {
  recipientEmail?: string;
  notificationLocale?: Locale;
  destination?: string;
  estimatedDelivery?: string;
  autoNotify?: boolean;
  statusTitle?: string;
  statusDetail?: string;
};

export async function updateParcel(id: string, input: UpdateParcelInput) {
  return prisma.parcel.update({
    where: { id },
    data: {
      recipientEmail: input.recipientEmail?.trim(),
      notificationLocale: input.notificationLocale,
      destination: input.destination?.trim(),
      estimatedDelivery: input.estimatedDelivery?.trim(),
      autoNotify: input.autoNotify,
      statusTitle: input.statusTitle?.trim(),
      statusDetail: input.statusDetail?.trim(),
    },
    include: { events: { orderBy: { sortOrder: "asc" } }, emailLogs: { orderBy: { createdAt: "desc" }, take: 20 } },
  });
}

export async function setParcelStatus(
  id: string,
  status: ParcelStatus,
  options?: { refreshCopy?: boolean },
) {
  const row = await prisma.parcel.findUnique({ where: { id } });
  if (!row) return null;
  if (!parcelStatusIsValid(status)) return null;

  const locale = row.notificationLocale as Locale;
  const dict = getDictionary(locale);
  const copy = options?.refreshCopy ? statusCopy(dict, status) : null;

  return prisma.parcel.update({
    where: { id },
    data: {
      status,
      ...(copy
        ? { statusTitle: copy.title, statusDetail: copy.detail }
        : {}),
    },
    include: { events: { orderBy: { sortOrder: "asc" } }, emailLogs: { orderBy: { createdAt: "desc" }, take: 20 } },
  });
}

export async function logEmailAttempt(
  parcelId: string,
  locale: string,
  status: string,
  result: { success: boolean; providerId?: string; error?: string },
) {
  return prisma.emailLog.create({
    data: {
      parcelId,
      locale,
      status,
      success: result.success,
      providerId: result.providerId,
      error: result.error,
    },
  });
}
