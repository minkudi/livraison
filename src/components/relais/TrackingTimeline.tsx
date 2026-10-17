import type { StepState, TrackingEvent } from "@/lib/demo-parcel";
import { TimelineStepIcon } from "./icons/LogisticsIcons";

export function TrackingTimeline({
  events,
  states,
  labels,
}: {
  events: TrackingEvent[];
  states: StepState[];
  labels: { done: string; current: string; upcoming: string };
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
            <StepMarker state={state} icon={event.icon} labels={labels} />
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
  labels,
}: {
  state: StepState;
  icon: TrackingEvent["icon"];
  labels: { done: string; current: string; upcoming: string };
}) {
  const base =
    "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 transition-colors";

  if (state === "done") {
    return (
      <span className={`${base} border-gold bg-gold text-black`} aria-label={labels.done}>
        <TimelineStepIcon id={icon} className="h-5 w-5" />
        <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-gold-ink">
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden>
            <path d="M2.5 6.2 4.8 8.5 9.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    );
  }
  if (state === "current") {
    return (
      <span
        className={`step-current ${base} border-gold bg-white text-gold-ink`}
        aria-label={labels.current}
      >
        <TimelineStepIcon id={icon} className="h-5 w-5" />
      </span>
    );
  }
  return (
    <span
      className={`${base} border-g200 bg-g50 text-g400`}
      aria-label={labels.upcoming}
    >
      <TimelineStepIcon id={icon} className="h-5 w-5 opacity-60" />
    </span>
  );
}
