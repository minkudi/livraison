import type { TimelineIconId } from "@/components/relais/icons/LogisticsIcons";
import type { Dictionary } from "@/i18n/types";
import type { Parcel, TrackingEvent } from "@/lib/demo-parcel";

const EVENT_ICONS: TimelineIconId[] = [
  "pickup",
  "sort",
  "depot",
  "out_for_delivery",
  "delivered",
];

const EVENT_DATES = [
  "2026-09-28 — 05:41",
  "2026-09-29 — 11:09",
  "2026-10-05 — 07:35",
  "2026-10-06 — 07:16",
  "2026-10-06 — 11:16",
];

export function getDemoParcels(dict: Dictionary): {
  delivered: Parcel;
  inTransit: Parcel;
} {
  const events: TrackingEvent[] = dict.parcel.events.map((e, i) => ({
    id: String(i + 1),
    icon: EVENT_ICONS[i],
    label: e.label,
    location: e.location,
    at: EVENT_DATES[i],
  }));

  const delivered: Parcel = {
    trackingNumber: "ER680145741921FR",
    status: "delivered",
    statusTitle: dict.parcel.deliveredTitle,
    statusDetail: dict.parcel.deliveredDetail,
    estimatedDelivery: "2026-10-06",
    destination: dict.parcel.destination,
    events,
  };

  const inTransit: Parcel = {
    ...delivered,
    trackingNumber: "ER999000111222FR",
    status: "in_transit",
    statusTitle: dict.parcel.inTransitTitle,
    statusDetail: dict.parcel.inTransitDetail,
    estimatedDelivery: "2026-10-14",
  };

  return { delivered, inTransit };
}
