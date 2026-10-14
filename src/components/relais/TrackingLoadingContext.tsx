"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { CheckingScene } from "./CheckingScene";

const MIN_OVERLAY_MS = 5000;

const Ctx = createContext<{
  startTrackingLoad: () => void;
  endTrackingLoad: () => void;
} | null>(null);

export function TrackingLoadingProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false);
  const startedAtRef = useRef<number | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const startTrackingLoad = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    startedAtRef.current = Date.now();
    setActive(true);
  }, []);

  const endTrackingLoad = useCallback(() => {
    const started = startedAtRef.current;
    if (started == null) return;

    const elapsed = Date.now() - started;
    const remaining = Math.max(0, MIN_OVERLAY_MS - elapsed);

    hideTimerRef.current = setTimeout(() => {
      setActive(false);
      startedAtRef.current = null;
      hideTimerRef.current = null;
    }, remaining);
  }, []);

  return (
    <Ctx.Provider value={{ startTrackingLoad, endTrackingLoad }}>
      {children}
      {active && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-g50/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Chargement du suivi"
        >
          <div className="w-full max-w-md shadow-lg">
            <CheckingScene />
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
