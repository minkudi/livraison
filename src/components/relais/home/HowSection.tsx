import type { Dictionary } from "@/i18n/types";

export function HowSection({ dict }: { dict: Dictionary }) {
  const h = dict.how;
  return (
    <section className="bg-navy py-16" id="reseau">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center">
          <span className="tag-gold-dark">{h.tag}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">{h.title}</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.steps.map((step, i) => (
            <div key={step.title} className="px-2 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-lg font-extrabold text-gold-lt">
                {i + 1}
              </div>
              <h4 className="mt-4 font-bold text-white">{step.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
