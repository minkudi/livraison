import type { Dictionary } from "@/i18n/types";

export function ServicesMenuSection({ dict }: { dict: Dictionary }) {
  const services = dict.services.items;

  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center">
          <p className="inline-block rounded-full bg-navy/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-navy">
            {dict.nav.services}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-heading">
            {dict.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-denim">
            {dict.services.subtitle}
          </p>
        </div>

        {/* Services Grid - Menu Style */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-g50 to-white p-8 shadow-[0_8px_30px_rgba(11,26,51,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(11,26,51,0.1)]"
            >
              {/* Decorative element */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" aria-hidden />
              
              <div className="relative">
                {/* Icon placeholder - soft circle */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-2 shadow-lg">
                  <span className="text-2xl text-gold" aria-hidden>
                    {index === 0 && "📦"}
                    {index === 1 && "⚡"}
                    {index === 2 && "🌍"}
                    {index === 3 && "✓"}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-heading">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-denim">
                  {service.text}
                </p>

                {/* Soft accent line */}
                <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-lt transition-all duration-500 group-hover:w-24" aria-hidden />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}