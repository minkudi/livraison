import type { Dictionary } from "@/i18n/types";
import type { Parcel } from "@/lib/demo-parcel";

const tone: Record<Parcel["status"], string> = {
  delivered: "border-gold/40 bg-white",
  in_transit: "border-navy/15 bg-white",
  processing: "border-g200 bg-white",
};

export function StatusHero({ parcel, dict }: { parcel: Parcel; dict: Dictionary }) {
  const t = dict.tracking;
  return (
    <div className={`card overflow-hidden rounded-2xl border shadow-sm ${tone[parcel.status]}`}>
      <div className="border-b border-g200 px-6 py-6 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-wide text-denim">{t.currentStatus}</p>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
          {parcel.statusTitle}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-denim sm:text-base">{parcel.statusDetail}</p>
      </div>
      <dl className="grid gap-4 px-6 py-5 sm:grid-cols-3 sm:px-8">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-g400">{t.trackingNumber}</dt>
          <dd className="mt-1 font-mono text-sm font-bold text-navy">{parcel.trackingNumber}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-g400">{t.estimated}</dt>
          <dd className="mt-1 text-sm font-semibold text-heading">{parcel.estimatedDelivery}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-g400">{t.destination}</dt>
          <dd className="mt-1 text-sm font-semibold text-heading">{parcel.destination}</dd>
        </div>
      </dl>
    </div>
  );
}
