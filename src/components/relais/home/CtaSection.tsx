import type { Dictionary } from "@/i18n/types";

export function CtaSection({ dict }: { dict: Dictionary }) {
  const points = dict.services.items.slice(0, 4);

    return (
    <section className="relative overflow-hidden bg-gradient-to-b from-g50 to-white py-24">
      {/* Soft decorative elements */}
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-navy/5 blur-3xl" aria-hidden />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-navy via-navy-2 to-navy-3 p-10 shadow-[0_30px_80px_rgba(11,26,51,0.2)] transition-all duration-500 hover:shadow-[0_40px_100px_rgba(11,26,51,0.25)] lg:min-h-96">
            {/* Soft grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" aria-hidden />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" aria-hidden />
            
            {/* Decorative circles */}
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:scale-150" aria-hidden />
            <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-gold-lt/10 blur-2xl" aria-hidden />
            
            <div className="relative">
              <p className="max-w-md text-3xl font-semibold leading-tight text-white lg:text-4xl">{dict.cta.title}</p>
              <p className="mt-6 max-w-md leading-relaxed text-white/80">{dict.footer.about}</p>
              
              {/* Soft accent line */}
              <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-gold via-gold-lt to-transparent" aria-hidden />
            </div>
          </div>
                  <div>
            <p className="inline-block rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold-ink">{dict.nav.network}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-heading lg:text-5xl">{dict.services.title}</h2>
            <p className="mt-4 leading-relaxed text-denim">{dict.cta.text}</p>
            <p className="mt-3 leading-relaxed text-denim">{dict.services.subtitle}</p>
            
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {points.map((item, index) => (
                <li 
                  key={item.title} 
                  className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(11,26,51,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(11,26,51,0.08)] hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-lt text-white shadow-md transition-transform duration-300 group-hover:scale-110" aria-hidden>✓</span>
                  <span className="pt-1 text-sm font-semibold leading-relaxed text-heading">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
