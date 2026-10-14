"use client";

import { useEffect } from "react";
import { useDictionary } from "@/i18n/LocaleContext";

/** Titre / description par langue sans bloquer le préfetch (pas de generateMetadata sur params). */
export function DocumentMeta() {
  const dict = useDictionary();

  useEffect(() => {
    document.title = dict.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict.meta.description);
  }, [dict.meta.title, dict.meta.description]);

  return null;
}
