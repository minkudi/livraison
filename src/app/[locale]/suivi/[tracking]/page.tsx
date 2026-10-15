import Link from "next/link";
import { RelaisShell } from "@/components/relais/RelaisShell";
import { StatusHero } from "@/components/relais/StatusHero";
import { TrackingLoadDone } from "@/components/relais/TrackingLoadDone";
import { TrackingSearch } from "@/components/relais/TrackingSearch";
import { TrackingTimeline } from "@/components/relais/TrackingTimeline";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getEventStates } from "@/lib/demo-parcel";
import { getParcelForTracking } from "@/lib/get-parcel-for-tracking";
import { getDemoParcels } from "@/lib/get-demo-parcels";
import { notFound } from "next/navigation";

export const instant = false;

export default async function TrackingDetailPage({
  params,
}: {
  params: Promise<{ locale: string; tracking: string }>;
}) {
  const { locale: raw, tracking } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const { delivered } = getDemoParcels(dict);

  const decoded = decodeURIComponent(tracking);
  const parcel = await getParcelForTracking(decoded, locale);
  const t = dict.tracking;

  if (!parcel) {
    return (
      <RelaisShell>
        <TrackingLoadDone />
        <main className="content flex flex-1 items-center justify-center px-4 py-16">
          <div className="w-full max-w-lg text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white ring-1 ring-g200" aria-hidden>
              <svg className="h-7 w-7 text-g400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3-3" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="mt-4 text-2xl font-extrabold text-heading">{t.notFoundTitle}</h1>
            <p className="mt-2 text-sm text-denim">
              {t.notFoundText}{" "}
              <span className="font-mono font-bold text-heading">{decoded}</span>.
              <br />
              {t.notFoundDemo} <span className="font-mono">{delivered.trackingNumber}</span>
            </p>
            <div className="mt-8 rounded-2xl border border-g200 bg-white p-6 text-left shadow-sm">
              <TrackingSearch compact />
            </div>
            <Link href={`/${locale}`} className="mt-6 inline-block text-sm font-bold text-navy">
              {t.backHome}
            </Link>
          </div>
        </main>
      </RelaisShell>
    );
  }

  const states = getEventStates(parcel);

  return (
    <RelaisShell>
      <TrackingLoadDone />
      <main className="content flex-1">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
          <Link href={`/${locale}/suivi`} className="text-sm font-semibold text-navy hover:underline">
            {t.newSearch}
          </Link>
          <div className="mt-6 space-y-8">
            <StatusHero parcel={parcel} dict={dict} />
            <section className="rounded-2xl border border-g200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-bold text-heading">{t.history}</h2>
              <div className="mt-6">
                <TrackingTimeline events={parcel.events} states={states} />
              </div>
            </section>
          </div>
        </div>
      </main>
    </RelaisShell>
  );
}
