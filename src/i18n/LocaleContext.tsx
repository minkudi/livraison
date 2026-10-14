"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

const Ctx = createContext<{ locale: Locale; dict: Dictionary } | null>(null);

export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  const value = useMemo(() => ({ locale, dict }), [locale, dict]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLocale() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLocale outside LocaleProvider");
  return v.locale;
}

export function useDictionary() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useDictionary outside LocaleProvider");
  return v.dict;
}

export function useLocalizedPath(path: string) {
  const locale = useLocale();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}
