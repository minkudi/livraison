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

export function buildDefaultEvents(dict: Dictionary, baseDate = new Date()) {
  const labels = dict.parcel.events;
  return labels.map((e, i) => {
    const d = new Date(baseDate);
    d.setDate(d.getDate() - (labels.length - 1 - i));
    d.setHours(8 + i, 12, 0, 0);
    return {
      sortOrder: i,
      icon: EVENT_ICONS[i],
      label: e.label,
      location: e.location,
      occurredAt: d,
    };
  });
}

export function formatEventAt(d: Date, locale: Locale) {
  const date = d.toLocaleDateString(locale === "en" ? "en-GB" : locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const time = d.toLocaleTimeString(locale === "en" ? "en-GB" : locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${date} — ${time}`;
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
