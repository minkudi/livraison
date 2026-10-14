"use client";

import { DocumentMeta } from "@/components/relais/DocumentMeta";
import { TrackingLoadingProvider } from "@/components/relais/TrackingLoadingContext";
import type { Locale } from "./config";
import { LocaleProvider } from "./LocaleContext";
import type { Dictionary } from "./types";

/** Locale + overlay de suivi (CheckingScene doit être sous LocaleProvider). */
export function LocaleShell({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider locale={locale} dict={dict}>
      <DocumentMeta />
      <TrackingLoadingProvider>{children}</TrackingLoadingProvider>
    </LocaleProvider>
  );
}
