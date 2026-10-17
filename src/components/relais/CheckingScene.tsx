"use client";

import { useDictionary } from "@/i18n/LocaleContext";

export function CheckingScene({ trackingNumber }: { trackingNumber?: string | null }) {
  const dict = useDictionary();

  return (
    <div
      className="rounded-2xl border border-g200 bg-white px-6 py-8 text-center"
      role="status"
      aria-live="polite"
    >
      <p id="tracking-wait-title" className="text-base font-semibold text-heading">{dict.search.searching}</p>
      {trackingNumber ? (
        <p className="mt-2 font-mono text-sm font-bold text-navy">{trackingNumber}</p>
      ) : null}
    </div>
  );
}
