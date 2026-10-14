import { Suspense } from "react";
import { notFound } from "next/navigation";
import { LocaleShell } from "@/i18n/LocaleShell";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

function LocaleFallback() {
  return <div className="min-h-screen bg-g50" aria-busy="true" aria-label="Loading" />;
}

async function LocaleLayoutInner({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <LocaleShell locale={locale} dict={dict}>
      {children}
    </LocaleShell>
  );
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <Suspense fallback={<LocaleFallback />}>
      <LocaleLayoutInner params={params}>{children}</LocaleLayoutInner>
    </Suspense>
  );
}

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "nl" }, { locale: "de" }];
}
