import type { Locale } from "./config";
import type { Dictionary } from "./types";
import de from "./dictionaries/de";
import en from "./dictionaries/en";
import fr from "./dictionaries/fr";
import nl from "./dictionaries/nl";

const dictionaries: Record<Locale, Dictionary> = { fr, en, nl, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
