"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleContext";

export function LocaleSwitcher() {
  const current = useLocale();
  const pathname = usePathname();

  function hrefFor(locale: Locale) {
    const parts = pathname.split("/");
    if (locales.includes(parts[1] as Locale)) {
      parts[1] = locale;
      if (parts[2] === "preview" && parts.length === 3) {
        return `/${locale}`;
      }
      const href = parts.join("/");
      return href || `/${locale}`;
    }
    return `/${locale}`;
  }

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-g200 bg-g50 p-0.5 text-xs font-bold">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={hrefFor(locale)}
          className={`rounded-md px-2.5 py-1.5 transition ${
            locale === current
              ? "bg-white text-heading shadow-sm"
              : "text-denim hover:text-heading"
          }`}
          hrefLang={locale}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
}
