import type { Dictionary } from "@/i18n/types";
import { TrackingSearch } from "../TrackingSearch";

export function HeroSection({ dict }: { dict: Dictionary }) {
  const h = dict.hero;
  const proof = dict.stats.slice(0, 3);
  const rating = dict.stats[3];

    return (
    <section className="hero relative overflow-hidden bg-gradient-to-b from-white via-g50 to-white">
      {/* Soft background elements */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-navy/5 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-gold/5 blur-3xl" aria-hidden />
      
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:py-24">
        <div>
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-heading shadow-[0_8px_30px_rgba(11,26,51,0.08)]">
            <span className="text-gold" aria-hidden>★</span>
            {h.badge2}
          </p>
                    <h1 className="mt-8 max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight text-heading sm:text-6xl">
            {h.title}{" "}
            <span className="bg-gradient-to-r from-gold to-gold-lt bg-clip-text text-transparent">{h.titleEm}</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-denim">{h.subtitle}</p>
          <div className="mt-8 max-w-xl">
            <TrackingSearch variant="hero" />
            <p className="mt-3 text-sm text-denim">{h.searchHelp}</p>
          </div>
          <dl className="mt-10 flex flex-wrap gap-8">
            {proof.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold text-heading">
                  {stat.value}
                  <span className="text-gold-ink">{stat.suffix}</span>
                </dt>
                <dd className="mt-1 max-w-[9rem] text-xs text-denim">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
                    <div className="relative min-h-[420px] overflow-hidden rounded-[32px] bg-gradient-to-br from-navy via-navy-2 to-navy-3 shadow-[0_30px_80px_rgba(11,26,51,0.2)]">
            {/* Soft grid pattern */}
            <div className="hero-grid absolute inset-0 opacity-40" aria-hidden />
            
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" aria-hidden />
            
            {/* Route path with soft glow */}
            <svg viewBox="0 0 480 560" className="absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M70 420C140 300 180 260 250 210C320 160 360 120 420 70" fill="none" stroke="#e0b866" strokeWidth="3" opacity="0.6" filter="url(#glow)" />
              <circle cx="250" cy="210" r="10" fill="#c8973e" opacity="0.9" />
              <circle cx="420" cy="70" r="8" fill="#e0b866" opacity="0.8" />
              <circle cx="70" cy="420" r="8" fill="#fff" opacity="0.7" />
            </svg>
          </div>
                    {rating ? (
            <div className="absolute right-4 top-4 rounded-2xl bg-white/95 backdrop-blur-sm px-5 py-4 shadow-[0_12px_40px_rgba(11,26,51,0.12)]">
              <p className="text-sm tracking-widest text-gold" aria-hidden>★★★★★</p>
              <p className="mt-1 text-sm font-semibold text-heading">
                {rating.value}{rating.suffix}
              </p>
              <p className="text-xs text-denim">{rating.label}</p>
            </div>
          ) : null}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm px-5 py-4 shadow-[0_12px_40px_rgba(11,26,51,0.12)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-lt text-white shadow-lg" aria-hidden>✓</span>
            <span className="text-sm font-semibold text-heading">{h.badge1}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
