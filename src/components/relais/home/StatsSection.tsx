import type { Dictionary } from "@/i18n/types";

export function StatsSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-g50 py-20">
      {/* Decorative soft circles */}
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-navy/5 blur-3xl" aria-hidden />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center">
          <p className="inline-block rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold-ink">
            {dict.statsSection.tag}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-heading">
            {dict.statsSection.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(11,26,51,0.04)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(11,26,51,0.08)] hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Soft gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
              
              <div className="relative text-center">
                <dt className="text-4xl font-semibold text-heading">
                  {stat.value}
                  <span className="text-gold">{stat.suffix}</span>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-denim">{stat.label}</dd>
              </div>

              {/* Soft bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
