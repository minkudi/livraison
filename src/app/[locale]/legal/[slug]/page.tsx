import { notFound } from "next/navigation";
import { LegalPage } from "@/components/relais/LegalPage";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  const slugs = [
    "qui-sommes-nous",
    "contact",
    "carrieres",
    "livraison",
    "delais",
    "emballage",
    "cgu",
    "confidentialite",
    "cookies",
    "faq",
    "reclamations",
  ];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function LegalSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const page = dict.legal.pages[slug];
  if (!page) notFound();

  return (
    <LegalPage title={page.title} backHref={`/${locale}`} backLabel={dict.legal.back}>
      {page.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </LegalPage>
  );
}
