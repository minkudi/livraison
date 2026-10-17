"use client";

import type { Dictionary } from "@/i18n/types";
import { useState } from "react";

const icons = [
  { before: "📦", after: "✓" },
  { before: "⏳", after: "🎯" },
  { before: "📞", after: "📧" },
];

export function BeforeAfterSection({ dict }: { dict: Dictionary }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ba = dict.beforeAfter;

  return (
    <section className="relative overflow-hidden bg-g50 py-24">
      {/* Soft decorative gradient */}
      <div className="absolute left-1/2 top-0 h-full w-full max-w-4xl -translate-x-1/2 bg-gradient-radial from-gold/5 via-transparent to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center">
          <p className="inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-navy shadow-sm">
            {ba.tag}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-heading">
            {ba.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-denim">
            {ba.subtitle}
          </p>
        </div>

        {/* Before/After Cards */}
        <div className="mt-16 space-y-6">
          {ba.items.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className={`relative grid gap-6 overflow-hidden rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(11,26,51,0.04)] transition-all duration-500 md:grid-cols-2 ${
                activeIndex === index
                  ? "shadow-[0_20px_50px_rgba(11,26,51,0.12)] scale-[1.02]"
                  : "hover:shadow-[0_12px_40px_rgba(11,26,51,0.08)]"
              }`}>
                {/* Before */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-g100">
                      <span className="text-2xl opacity-60" aria-hidden>
                        {icons[index].before}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-denim opacity-60">
                        {ba.before}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-heading">
                        {item.beforeTitle}
                      </h3>
                      <p className="mt-2 text-sm text-denim">
                        {item.beforeText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow/Divider */}
                <div className="hidden items-center justify-center md:flex md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-lt shadow-lg">
                    <span className="text-xl text-white" aria-hidden>→</span>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-2">
                      <span className="text-2xl text-gold" aria-hidden>
                        {icons[index].after}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-gold-ink">
                        {ba.after}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-heading">
                        {item.afterTitle}
                      </h3>
                      <p className="mt-2 text-sm text-denim">
                        {item.afterText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active indicator */}
                {activeIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-lt to-gold" aria-hidden />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="mt-8 flex justify-center gap-2">
          {ba.items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-gold"
                  : "w-2 bg-g300 hover:bg-gold/50"
              }`}
              aria-label={`${ba.viewLabel} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
