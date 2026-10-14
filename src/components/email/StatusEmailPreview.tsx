import { TimelineStepIcon } from "@/components/relais/icons/LogisticsIcons";
import type { Dictionary } from "@/i18n/types";
import { getEventStates, type Parcel, type TrackingEvent } from "@/lib/demo-parcel";

function EmailStep({
  event,
  state,
}: {
  event: TrackingEvent;
  state: "done" | "current" | "upcoming";
}) {
  const muted = state === "upcoming";
  return (
    <tr>
      <td className="py-2 pr-3 align-top">
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border-2 ${
            state === "done"
              ? "border-[#0B1A33] bg-[#0B1A33] text-[#C8973E]"
              : state === "current"
                ? "email-step-current border-[#C8973E] bg-white text-[#C8973E]"
                : "border-[#E2E8F0] bg-[#F8FAFC] text-[#94A3B8]"
          }`}
        >
          <TimelineStepIcon id={event.icon} className="h-4 w-4" />
        </span>
      </td>
      <td className={`py-2 text-sm ${muted ? "text-[#94A3B8]" : "text-[#2e4a66]"}`}>
        <strong className={muted ? "font-medium" : "font-semibold"}>{event.label}</strong>
        <br />
        <span className="text-xs">{event.location} · {event.at}</span>
      </td>
    </tr>
  );
}

export function StatusEmailPreview({ parcel, dict }: { parcel: Parcel; dict: Dictionary }) {
  const states = getEventStates(parcel);
  const e = dict.emailPreview;

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] shadow-sm">
      <div className="border-b border-[#E2E8F0] bg-white px-5 py-4">
        <table role="presentation" className="w-full">
          <tbody>
            <tr>
              <td className="w-10">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-denim" aria-hidden>
                  <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
                    <circle cx="16" cy="20" r="2.5" fill="#C8973E" />
                    <path d="M16 20V9M16 9l3 1.5M16 9l-3 1.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M9 13c2-2 4-3 7-3s5 1 7 3" stroke="#E0B866" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                </div>
              </td>
              <td className="pl-3">
                <p className="text-sm font-extrabold text-[#2e4a66]">{dict.brand.name}</p>
                <p className="text-xs text-[#5b7c9a]">{e.updateSubject}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white px-5 py-5 text-sm text-[#5b7c9a]">
        <p>{e.hello}</p>
        <p className="mt-2 font-semibold text-[#2e4a66]">{parcel.statusTitle}</p>
        <p className="mt-1">{parcel.statusDetail}</p>
        <p className="mt-3 font-mono text-xs">{parcel.trackingNumber}</p>

        <table className="mt-5 w-full border-collapse" role="presentation">
          <tbody>
            {parcel.events.map((ev, i) => (
              <EmailStep key={ev.id} event={ev} state={states[i]} />
            ))}
          </tbody>
        </table>

        <p className="mt-6 text-center">
          <span className="inline-block rounded-[10px] bg-[#0B1A33] px-5 py-3 text-sm font-bold text-white">
            {e.cta}
          </span>
        </p>
      </div>
      <p className="px-5 py-3 text-center text-[10px] leading-relaxed text-[#94A3B8]">{e.footer}</p>
    </div>
  );
}
