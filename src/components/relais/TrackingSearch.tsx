"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDictionary, useLocalizedPath } from "@/i18n/LocaleContext";
import { useTrackingLoading } from "./TrackingLoadingContext";

export function TrackingSearch({
  compact = false,
  variant = "default",
}: {
  compact?: boolean;
  variant?: "default" | "hero";
}) {
  const router = useRouter();
  const dict = useDictionary();
  const { startTrackingLoad } = useTrackingLoading();
  const trackBase = useLocalizedPath("/suivi");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = fd.get("tracking_number");
    const tracking = typeof raw === "string" ? raw.trim() : "";
    if (!tracking) {
      setError(dict.tracking.missing);
      return;
    }
    setError(null);
    startTrackingLoad(tracking);
    router.push(`${trackBase}/${encodeURIComponent(tracking)}`);
  }

  const btnClass =
    variant === "hero"
      ? "rounded-full bg-gold hover:bg-gold-lt text-navy"
      : "rounded-full bg-gold hover:bg-gold-lt text-navy";

  return (
    <form onSubmit={onSubmit} className={compact ? "flex flex-col gap-3" : "flex flex-col gap-3"}>
      <label htmlFor="tracking_number" className="text-sm font-semibold text-heading">
        {dict.search.label}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <input
          id="tracking_number"
          name="tracking_number"
          type="text"
          autoComplete="off"
          placeholder={dict.search.placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "tracking-error" : undefined}
          onChange={() => {
            if (error) setError(null);
          }}
          className="h-12 flex-1 rounded-[10px] border-2 border-g200 bg-white px-4 text-sm text-heading outline-none transition placeholder:text-denim focus:border-navy"
        />
        <button
          type="submit"
          className={`h-12 shrink-0 rounded-full px-6 text-sm font-bold transition ${btnClass}`}
        >
          {dict.search.submit}
        </button>
      </div>
      {error ? (
        <p id="tracking-error" role="alert" className="text-sm font-semibold text-[#8f1d1d]">
          {error}
        </p>
      ) : null}
    </form>
  );
}
