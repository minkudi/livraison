import type { Dictionary } from "@/i18n/types";
import type { Parcel } from "@/lib/demo-parcel";

export function StatusHero({ parcel, dict }: { parcel: Parcel; dict: Dictionary }) {
  const t = dict.tracking;
  return (
    <section className="overflow-hidden rounded-2xl border border-g200 bg-white shadow-[0_18px_40px_rgba(131,24,67,0.08)]">
      <div className="px-6 py-8 sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
          {parcel.statusTitle}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-denim">{parcel.statusDetail}</p>
      </div>
      <dl className="grid border-t border-g200 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,1.4fr)]">
        <Fact label={t.trackingNumber} value={parcel.trackingNumber} mono />
        <Fact label={t.estimated} value={parcel.estimatedDelivery} />
        <Fact label={t.destination} value={parcel.destination} />
      </dl>
    </section>
  );
}

function Fact({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="border-t border-g200 px-6 py-5 sm:border-t-0 sm:border-l sm:px-8 first:border-l-0">
      <dt className="text-xs font-bold tracking-wide text-gold-ink">{label}</dt>
      <dd className={`mt-1 text-sm font-semibold text-heading ${mono ? "font-mono tabular-nums" : ""}`}>
        {value}
      </dd>
    </div>
  );
}
