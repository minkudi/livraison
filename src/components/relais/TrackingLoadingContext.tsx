"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useDictionary } from "@/i18n/LocaleContext";
import { CheckingScene } from "./CheckingScene";

const Ctx = createContext<{
  startTrackingLoad: (trackingNumber: string) => void;
  endTrackingLoad: () => void;
  cancelTrackingLoad: () => void;
  takeCancelled: () => boolean;
} | null>(null);

export function TrackingLoadingProvider({ children }: { children: React.ReactNode }) {
  const dict = useDictionary();
  const [trackingNumber, setTrackingNumber] = useState<string | null>(null);
  const cancelledRef = useRef(false);

  const startTrackingLoad = useCallback((number: string) => {
    cancelledRef.current = false;
    setTrackingNumber(number);
  }, []);

  const endTrackingLoad = useCallback(() => {
    setTrackingNumber(null);
  }, []);

  const cancelTrackingLoad = useCallback(() => {
    cancelledRef.current = true;
    setTrackingNumber(null);
  }, []);

  const takeCancelled = useCallback(() => {
    const cancelled = cancelledRef.current;
    cancelledRef.current = false;
    return cancelled;
  }, []);

  useEffect(() => {
    if (!trackingNumber) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") cancelTrackingLoad();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [trackingNumber, cancelTrackingLoad]);

  return (
    <Ctx.Provider value={{ startTrackingLoad, endTrackingLoad, cancelTrackingLoad, takeCancelled }}>
      {children}
      {trackingNumber && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-g50/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tracking-wait-title"
        >
          <div className="w-full max-w-md">
            <CheckingScene trackingNumber={trackingNumber} />
            <button
              type="button"
              className="mt-3 flex h-11 w-full items-center justify-center rounded-[10px] border border-g300 bg-white text-sm font-bold text-navy"
              onClick={cancelTrackingLoad}
            >
              {dict.search.cancel}
            </button>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}

export function useTrackingLoading() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTrackingLoading outside provider");
  return v;
}
