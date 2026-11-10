import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale, locales, localize, type Locale } from "./i18n";

/** Lingua della pagina corrente, letta dal segmento [lang]. Solo lato server. */
export async function getLang(): Promise<Locale> {
  const value = await lang();
  if (!value || !hasLocale(value)) notFound();
  return value;
}

/** Titolo, descrizione e indirizzi alternativi (hreflang) di una pagina del sito */
export function pageMetadata(current: Locale, path: string, meta: { title?: string; description: string }): Metadata {
  return {
    ...(meta.title ? { title: meta.title } : {}),
    description: meta.description,
    alternates: {
      canonical: localize(current, path),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localize(l, path)])),
        "x-default": localize("it", path),
      },
    },
    openGraph: { locale: current === "it" ? "it_IT" : "en_GB" },
  };
}
