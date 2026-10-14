"use client";

import Link from "next/link";
import { RelaisShell } from "@/components/relais/RelaisShell";
import { useDictionary, useLocale } from "@/i18n/LocaleContext";
import { getDemoParcels } from "@/lib/get-demo-parcels";
import { CtaSection } from "./CtaSection";
import { HeroSection } from "./HeroSection";
import { HowSection } from "./HowSection";
import { ServicesSection } from "./ServicesSection";
import { StatsSection } from "./StatsSection";

export function HomePageView() {
  const dict = useDictionary();
  const locale = useLocale();
  const { delivered, inTransit } = getDemoParcels(dict);

  return (
    <RelaisShell>
      <HeroSection dict={dict} />
      <StatsSection dict={dict} />
      <ServicesSection dict={dict} />
      <HowSection dict={dict} />
      <CtaSection dict={dict} locale={locale} />
      <section className="border-t border-g200 bg-g50 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-4 text-sm sm:px-8">
          <DemoLink href={`/${locale}/suivi/${delivered.trackingNumber}`} label={dict.demos.delivered} />
          <DemoLink href={`/${locale}/suivi/${inTransit.trackingNumber}`} label={dict.demos.inTransit} />
          <DemoLink href={`/${locale}/preview/email`} label={dict.demos.email} />
        </div>
      </section>
    </RelaisShell>
  );
}

function DemoLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-full border border-g200 bg-white px-4 py-2 font-semibold text-denim transition hover:border-denim/40 hover:text-heading"
    >
      {label}
    </Link>
  );
}
