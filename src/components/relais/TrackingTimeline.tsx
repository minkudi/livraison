import type { StepState, TrackingEvent } from "@/lib/demo-parcel";
import { TimelineStepIcon } from "./icons/LogisticsIcons";

export function TrackingTimeline({
  events,
  states,
}: {
  events: TrackingEvent[];
  states: StepState[];
}) {
  return (
    <ol className="timeline space-y-0">
      {events.map((event, index) => {
        const state = states[index];
        const isLast = index === events.length - 1;
        return (
          <li key={event.id} className="relative flex gap-4 pb-8 last:pb-0">
            {!isLast && (
              <span
                className={`timeline-line absolute left-[19px] top-11 h-[calc(100%-20px)] w-0.5 ${
                  state === "done" ? "bg-gold/60" : "bg-g200"
                }`}
                aria-hidden
              />
            )}
            <StepMarker state={state} icon={event.icon} />
            <div
              className={`min-w-0 flex-1 pt-0.5 transition-opacity duration-300 ${
                state === "upcoming" ? "opacity-45" : "opacity-100"
              }`}
            >
              <p
                className={`font-semibold ${
                  state === "upcoming" ? "text-g400" : "text-heading"
                }`}
              >
                {event.label}
              </p>
              <p className="text-sm text-denim">{event.location}</p>
              <p className="mt-1 text-xs font-medium text-g400">{event.at}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function StepMarker({
  state,
  icon,
}: {
  state: StepState;
  icon: TrackingEvent["icon"];
}) {
  const base =
    "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 transition-colors";

  if (state === "done") {
    return (
      <span className={`${base} border-navy bg-navy text-gold`} aria-label="Étape terminée">
        <TimelineStepIcon id={icon} className="h-5 w-5" />
        <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-white">
          ✓
        </span>
      </span>
    );
  }
  if (state === "current") {
    return (
      <span
        className={`step-current ${base} border-gold bg-white text-gold`}
        aria-label="Étape en cours"
      >
        <TimelineStepIcon id={icon} className="h-5 w-5" />
      </span>
    );
  }
  return (
    <span
      className={`${base} border-g200 bg-g50 text-g400`}
      aria-label="Étape à venir"
    >
      <TimelineStepIcon id={icon} className="h-5 w-5 opacity-60" />
    </span>
  );
}
