import Link from "next/link";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

export function CtaSection({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-navy-2 px-8 py-12 sm:flex-row sm:px-14">
        <div>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{dict.cta.title}</h2>
          <p className="mt-2 text-white/55">{dict.cta.text}</p>
        </div>
        <Link
          href={`/${locale}/suivi`}
          className="shrink-0 rounded-[10px] bg-gold px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold-lt"
        >
          {dict.cta.button}
        </Link>
      </div>
    </section>
  );
}
