import type { Dictionary } from "@/i18n/types";

export function StatsSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-g200 bg-white py-9">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-8 lg:grid-cols-4">
        {dict.stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {s.value}
              <span className="text-gold">{s.suffix}</span>
            </p>
            <p className="mt-1 text-sm font-medium text-denim">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
