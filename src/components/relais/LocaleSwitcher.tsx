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

  function renderLinks(compact: boolean) {
    return locales.map((locale) => (
      <Link
        key={locale}
        href={hrefFor(locale)}
        hrefLang={locale}
        aria-current={locale === current ? "true" : undefined}
        className={`flex h-11 items-center rounded-md text-xs font-bold ${
          compact ? "px-3" : "px-3"
        } ${locale === current ? "bg-white text-heading shadow-sm" : "text-denim hover:text-heading"}`}
      >
        {localeLabels[locale]}
      </Link>
    ));
  }

  return (
    <>
      <details className="relative md:hidden">
        <summary className="flex h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-g200 bg-g50 px-3 text-xs font-bold text-heading marker:content-none [&::-webkit-details-marker]:hidden">
          {localeLabels[current]}
        </summary>
        <div className="absolute right-0 z-20 mt-1 min-w-28 rounded-lg border border-g200 bg-white p-1 shadow-sm">
          {renderLinks(true)}
        </div>
      </details>
      <div className="hidden items-center gap-0.5 rounded-lg border border-g200 bg-g50 p-0.5 md:flex">
        {renderLinks(false)}
      </div>
    </>
  );
}
