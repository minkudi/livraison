"use client";

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

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = fd.get("tracking_number");
    const tracking = typeof raw === "string" ? raw.trim() : "";
    if (!tracking) return;
    startTrackingLoad();
    router.push(`${trackBase}/${encodeURIComponent(tracking)}`);
  }

  const btnClass =
    variant === "hero"
      ? "bg-gold hover:bg-gold-lt text-white"
      : "bg-navy hover:bg-navy-2 text-white";

  return (
    <form
      onSubmit={onSubmit}
      className={compact ? "flex flex-col gap-3 sm:flex-row" : "flex flex-col gap-3 sm:flex-row sm:items-stretch"}
    >
      <label className="sr-only" htmlFor="tracking_number">{dict.search.label}</label>
      <input
        id="tracking_number"
        name="tracking_number"
        type="text"
        required
        autoComplete="off"
        placeholder={dict.search.placeholder}
        className="flex-1 rounded-[10px] border-2 border-g200 bg-white px-4 py-3.5 text-sm text-heading outline-none transition placeholder:text-denim/50 focus:border-denim focus:ring-2 focus:ring-denim/20"
      />
      <button
        type="submit"
        className={`btn-search shrink-0 rounded-[10px] px-6 py-3.5 text-sm font-bold transition active:scale-[0.98] ${btnClass}`}
      >
        {dict.search.submit}
      </button>
    </form>
  );
}
