"use client";

import { RelaisShell } from "@/components/relais/RelaisShell";
import { useDictionary } from "@/i18n/LocaleContext";
import { CtaSection } from "./CtaSection";
import { HeroSection } from "./HeroSection";
import { HowSection } from "./HowSection";
import { StatsSection } from "./StatsSection";
import { ServicesMenuSection } from "./ServicesMenuSection";
import { BeforeAfterSection } from "./BeforeAfterSection";
import { TestimonialsSection } from "./TestimonialsSection";

export function HomePageView() {
  const dict = useDictionary();

    return (
    <RelaisShell>
      <HeroSection dict={dict} />
      <StatsSection dict={dict} />
      <ServicesMenuSection dict={dict} />
      <HowSection dict={dict} />
      <BeforeAfterSection dict={dict} />
      <TestimonialsSection dict={dict} />
      <CtaSection dict={dict} />
    </RelaisShell>
  );
}
