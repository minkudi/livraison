"use client";

import { useEffect, useMemo, useState } from "react";
import { useDictionary } from "@/i18n/LocaleContext";

export function CheckingScene({ compact = false }: { compact?: boolean }) {
  const dict = useDictionary();
  const messages = useMemo(
    () => [dict.search.checkMsg1, dict.search.checkMsg2, dict.search.checkMsg3],
    [dict],
  );
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 450);
    return () => clearInterval(t);
  }, [messages.length]);

  return (
    <div
      className={`check-scene overflow-hidden rounded-2xl border border-g200 bg-white ${compact ? "px-4 py-5" : "px-6 py-8"}`}
      role="status"
      aria-live="polite"
    >
      <div className={`relative mx-auto ${compact ? "h-[88px] max-w-sm" : "h-[110px] max-w-md"}`}>
        <div className="check-warehouse absolute bottom-6 left-[8%] w-[72px]">
          <div className="h-10 rounded-t-md border-2 border-denim/30 bg-denim/10" />
          <div className="mx-auto h-8 w-10 rounded-sm border-2 border-t-0 border-denim/25 bg-denim/5" />
          <div className="check-worker absolute -right-2 bottom-0 text-denim">
            <svg viewBox="0 0 40 52" className="h-12 w-10" aria-hidden>
              <circle cx="20" cy="7" r="5" fill="currentColor" />
              <rect x="13" y="14" width="14" height="20" rx="2" fill="currentColor" opacity="0.9" />
              <g className="check-arm">
                <path d="M26 18h10v-6" stroke="#C8973E" strokeWidth="3" fill="none" strokeLinecap="round" />
                <rect className="check-box" x="32" y="6" width="7" height="7" rx="1" fill="#C8973E" />
              </g>
              <path d="M14 36v12M26 36v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 border-t-2 border-dashed border-denim/20" />
        <div className="check-van absolute bottom-5 left-0 w-full">
          <svg viewBox="0 0 56 32" className="h-8 w-14 text-navy" aria-hidden>
            <rect x="4" y="10" width="28" height="14" rx="2" fill="currentColor" />
            <path d="M32 12h14v12H32z" fill="#1B3558" />
            <rect x="36" y="14" width="8" height="6" rx="1" fill="#94A3B8" />
            <circle cx="14" cy="26" r="4" fill="#C8973E" />
            <circle cx="40" cy="26" r="4" fill="#C8973E" />
          </svg>
        </div>
      </div>
      <p key={msgIndex} className={`check-msg text-center font-medium text-denim ${compact ? "text-xs" : "text-sm"}`}>
        {messages[msgIndex]}
      </p>
    </div>
  );
}
