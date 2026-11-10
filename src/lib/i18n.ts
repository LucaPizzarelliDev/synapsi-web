// L'italiano vive senza prefisso (/viseria), le altre lingue sotto il loro (/en/viseria).
// Il proxy riscrive gli indirizzi italiani su /it/... per l'albero app/[lang].
export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

export const localeNames: Record<Locale, string> = { it: "Italiano", en: "English" };

/** Etichetta del link per passare a una lingua, scritta nella lingua di arrivo */
export const switchLabels: Record<Locale, string> = { it: "Leggi in italiano", en: "Read in English" };

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Percorso pubblico di una pagina nella lingua data: localize("en", "/viseria") → "/en/viseria" */
export function localize(lang: Locale, path: string) {
  if (lang === defaultLocale) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** Il percorso senza prefisso di lingua, per passare da una lingua all'altra */
export function unlocalize(pathname: string) {
  for (const l of locales) {
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}
