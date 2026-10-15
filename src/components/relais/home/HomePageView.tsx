"use client";

import { RelaisShell } from "@/components/relais/RelaisShell";
import { useDictionary, useLocale } from "@/i18n/LocaleContext";
import { CtaSection } from "./CtaSection";
import { HeroSection } from "./HeroSection";
import { HowSection } from "./HowSection";
import { ServicesSection } from "./ServicesSection";
import { StatsSection } from "./StatsSection";

export function HomePageView() {
  const dict = useDictionary();
  const locale = useLocale();

  return (
    <RelaisShell>
      <HeroSection dict={dict} />
      <StatsSection dict={dict} />
      <ServicesSection dict={dict} />
      <HowSection dict={dict} />
      <CtaSection dict={dict} locale={locale} />
    </RelaisShell>
  );
}
