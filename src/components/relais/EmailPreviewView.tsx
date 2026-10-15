"use client";

import Link from "next/link";
import { StatusEmailPreview } from "@/components/email/StatusEmailPreview";
import { RelaisShell } from "@/components/relais/RelaisShell";
import { useDictionary, useLocale } from "@/i18n/LocaleContext";
import { getDemoParcels } from "@/lib/get-demo-parcels";

export function EmailPreviewView() {
  const dict = useDictionary();
  const locale = useLocale();
  const { delivered, inTransit } = getDemoParcels(dict);
  const e = dict.emailPreview;

  return (
    <RelaisShell>
      <main className="content flex-1">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-8">
          <Link href={`/${locale}`} className="text-sm font-semibold text-navy hover:underline">
            {dict.tracking.back}
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold text-heading">{e.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-denim">{e.subtitle}</p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-g400">{e.delivered}</p>
              <StatusEmailPreview parcel={delivered} dict={dict} />
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-g400">{e.inTransit}</p>
              <StatusEmailPreview parcel={inTransit} dict={dict} />
            </div>
          </div>
        </div>
      </main>
    </RelaisShell>
  );
}
