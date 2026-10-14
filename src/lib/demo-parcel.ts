import type { TimelineIconId } from "@/components/relais/icons/LogisticsIcons";

export type StepState = "done" | "current" | "upcoming";

export type TrackingEvent = {
  id: string;
  icon: TimelineIconId;
  label: string;
  location: string;
  at: string;
};

export type Parcel = {
  trackingNumber: string;
  status: "delivered" | "in_transit" | "processing";
  statusTitle: string;
  statusDetail: string;
  estimatedDelivery: string;
  destination: string;
  events: TrackingEvent[];
};

export function getEventStates(parcel: Parcel): StepState[] {
  const n = parcel.events.length;
  if (parcel.status === "delivered") {
    return parcel.events.map(() => "done");
  }
  if (parcel.status === "processing") {
    return parcel.events.map((_, i) => (i === 0 ? "current" : "upcoming"));
  }
  const currentIndex = Math.min(n - 2, 3);
  return parcel.events.map((_, i) => {
    if (i < currentIndex) return "done";
    if (i === currentIndex) return "current";
    return "upcoming";
  });
}
