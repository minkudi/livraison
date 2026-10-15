import type { ParcelStatus } from "@/lib/admin-order-spec";
import type { Parcel } from "@/lib/demo-parcel";
import type { TimelineIconId } from "@/components/relais/icons/LogisticsIcons";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const EVENT_ICONS: TimelineIconId[] = [
  "pickup",
  "sort",
  "depot",
  "out_for_delivery",
  "delivered",
];

export function trackingStatusForUi(status: ParcelStatus): Parcel["status"] {
  if (status === "exception") return "processing";
  return status;
}

export function statusCopy(dict: Dictionary, status: ParcelStatus) {
  switch (status) {
    case "delivered":
      return { title: dict.parcel.deliveredTitle, detail: dict.parcel.deliveredDetail };
    case "in_transit":
      return { title: dict.parcel.inTransitTitle, detail: dict.parcel.inTransitDetail };
    case "exception":
      return {
        title: dict.parcel.exceptionTitle,
        detail: dict.parcel.exceptionDetail,
      };
    default:
      return {
        title: dict.parcel.processingTitle,
        detail: dict.parcel.processingDetail,
      };
  }
}

export const APP_TIME_ZONE = "Europe/Amsterdam";

function localeForDates(locale: Locale) {
  return locale === "en" ? "en-GB" : locale;
}

export function eventLocationForDisplay(icon: string, location: string, destination: string) {
  if (icon === "delivered") {
    const d = destination.trim();
    if (d) return d;
  }
  return location;
}

export function buildDefaultEvents(dict: Dictionary, baseDate = new Date(), destination?: string) {
  const labels = dict.parcel.events;
  const deliveredLocation = destination?.trim() || dict.parcel.destination;
  return labels.map((e, i) => {
    const d = new Date(baseDate);
    d.setDate(d.getDate() - (labels.length - 1 - i));
    d.setHours(8 + i, 12, 0, 0);
    const isDelivered = i === labels.length - 1;
    return {
      sortOrder: i,
      icon: EVENT_ICONS[i],
      label: e.label,
      location: isDelivered ? deliveredLocation : e.location,
      occurredAt: d,
    };
  });
}

export function formatEventAt(d: Date, locale: Locale) {
  const loc = localeForDates(locale);
  const date = d.toLocaleDateString(loc, {
    timeZone: APP_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const time = d.toLocaleTimeString(loc, {
    timeZone: APP_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${date} — ${time}`;
}

export function formatDateTimeAdmin(d: Date) {
  return d.toLocaleString("fr-FR", {
    timeZone: APP_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function generateTrackingNumber() {
  const digits = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join("");
  return `ER${digits}FR`;
}

export function notificationLocaleIsValid(value: string): value is Locale {
  return value === "fr" || value === "en" || value === "nl" || value === "de";
}

export function parcelStatusIsValid(value: string): value is ParcelStatus {
  return (
    value === "processing" ||
    value === "in_transit" ||
    value === "delivered" ||
    value === "exception"
  );
}

export const STATUS_LABELS_FR: Record<ParcelStatus, string> = {
  processing: "Préparation",
  in_transit: "En transit",
  delivered: "Livré",
  exception: "Anomalie",
};
