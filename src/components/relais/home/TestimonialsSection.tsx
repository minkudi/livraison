"use client";

import type { Dictionary } from "@/i18n/types";
import { useState } from "react";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection({ dict }: { dict: Dictionary }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const t = dict.testimonials;
  const active = t.items[activeTestimonial];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-g50 to-white py-24">
      {/* Soft decorative elements */}
      <div className="absolute left-1/4 top-0 h-64 w-64 -translate-y-1/2 rounded-full bg-navy/5 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 translate-y-1/2 rounded-full bg-gold/5 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center">
          <p className="inline-block rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold-ink">
            {t.tag}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-heading">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-denim">
            {t.subtitle}
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="mt-16">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white p-10 shadow-[0_20px_60px_rgba(11,26,51,0.08)] md:p-16">
            {/* Rating stars */}
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-2xl text-gold" aria-hidden>
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-8 text-center">
              <p className="text-2xl font-light leading-relaxed text-heading">
                &ldquo;{active.content}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-10 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-2 text-xl font-semibold text-gold shadow-lg">
                {initials(active.name)}
              </div>
              <p className="mt-4 text-lg font-semibold text-heading">
                {active.name}
              </p>
              <p className="mt-1 text-sm text-denim">
                {active.role}
              </p>
            </div>

            {/* Decorative accent */}
            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden />
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          {t.items.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
                activeTestimonial === index
                  ? "bg-navy shadow-lg"
                  : "bg-white hover:bg-g50 shadow-sm"
              }`}
              aria-label={`${t.viewLabel} ${testimonial.name}`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
                activeTestimonial === index
                  ? "bg-gold text-white"
                  : "bg-g100 text-heading group-hover:bg-g200"
              }`}>
                {initials(testimonial.name)}
              </div>

              {/* Active indicator */}
              {activeTestimonial === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-lt to-gold" aria-hidden />
              )}
            </button>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 text-center shadow-[0_8px_30px_rgba(11,26,51,0.04)]">
            <p className="text-3xl font-semibold text-gold">98.2%</p>
            <p className="mt-2 text-sm text-denim">{t.trust.deliveries}</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-[0_8px_30px_rgba(11,26,51,0.04)]">
            <p className="text-3xl font-semibold text-gold">4.6/5</p>
            <p className="mt-2 text-sm text-denim">{t.trust.satisfaction}</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-[0_8px_30px_rgba(11,26,51,0.04)]">
            <p className="text-3xl font-semibold text-gold">2.4M</p>
            <p className="mt-2 text-sm text-denim">{t.trust.parcels}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
