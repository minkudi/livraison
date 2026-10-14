export const locales = ["fr", "en", "nl", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  nl: "NL",
  de: "DE",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
