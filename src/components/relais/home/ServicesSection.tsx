import type { Dictionary } from "@/i18n/types";
import { ServiceIcon } from "../icons/LogisticsIcons";

export function ServicesSection({ dict }: { dict: Dictionary }) {
  const s = dict.services;
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8" id="services">
      <div className="text-center">
        <span className="tag-gold">{s.tag}</span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-heading">{s.title}</h2>
        <p className="mt-2 text-denim">{s.subtitle}</p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((item) => (
          <article
            key={item.title}
            className="svc-card rounded-xl border border-g200 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:border-g300 hover:shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-g100 text-denim">
              <ServiceIcon id={item.icon} className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-heading">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-denim">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
