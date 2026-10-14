import type { Dictionary } from "@/i18n/types";
import { TrackingSearch } from "../TrackingSearch";

export function HeroSection({ dict }: { dict: Dictionary }) {
  const h = dict.hero;
  return (
    <section className="hero relative overflow-hidden bg-navy">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <div className="mb-8 flex flex-wrap gap-3">
            <span className="hero-pill">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
              {h.badge1}
            </span>
            <span className="hero-pill">
              <span className="h-2 w-2 rounded-full bg-gold" aria-hidden />
              {h.badge2}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {h.title} <span className="text-gold-lt">{h.titleEm}</span> {h.titleRest}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">{h.subtitle}</p>
        </div>
        <div className="search-card rounded-2xl bg-white p-7 shadow-[0_25px_60px_rgba(0,0,0,0.22)] sm:p-9">
          <h2 className="text-xl font-bold text-heading">{h.searchTitle}</h2>
          <p className="mt-1 text-sm text-denim">{h.searchHint}</p>
          <div className="mt-6">
            <TrackingSearch variant="hero" />
          </div>
          <p className="mt-3 text-center text-[11px] text-denim/70">{h.searchHelp}</p>
        </div>
      </div>
    </section>
  );
}
