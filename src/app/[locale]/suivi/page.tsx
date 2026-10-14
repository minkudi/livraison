import Link from "next/link";
import { RelaisShell } from "@/components/relais/RelaisShell";
import { TrackingSearch } from "@/components/relais/TrackingSearch";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

export const instant = false;

export default async function SuiviPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const { error } = await searchParams;
  const t = dict.tracking;

  return (
    <RelaisShell>
      <main className="content flex flex-1 items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-lg">
          <Link href={`/${locale}/preview`} className="text-sm font-semibold text-navy hover:underline">
            {t.back}
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold text-heading">{t.pageTitle}</h1>
          <p className="mt-2 text-sm text-denim">{t.pageHint}</p>
          {error === "missing" && (
            <p className="mt-4 rounded-[10px] border border-g200 bg-white px-3 py-2 text-sm text-denim">
              {t.missing}
            </p>
          )}
          <div className="mt-8 rounded-2xl border border-g200 bg-white p-6 shadow-sm">
            <TrackingSearch />
          </div>
        </div>
      </main>
    </RelaisShell>
  );
}
