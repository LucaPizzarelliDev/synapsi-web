"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { Arrow } from "./ui";
import type { SharedContent } from "@/content/shared";
import { localeNames, locales, localize, switchLabels, unlocalize, type Locale } from "@/lib/i18n";

type Props = { lang: Locale; t: Pick<SharedContent, "header" | "services" | "nav"> };

export function Header({ lang, t }: Props) {
  const { header, services, nav } = t;
  // Percorso senza lingua: confrontabile con gli href dei contenuti e riusabile per cambiare lingua
  const pathname = unlocalize(usePathname());
  const [open, setOpen] = useState(false);
  return (
    // Due livelli: in alto la notizia e i link di servizio, sotto i cinque servizi sempre in vista
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_rgba(28,26,24,0.06)]">
      <div className="bg-violet text-[13px] text-white">
        <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8">
          <Link href={localize(lang, header.news.href)} className="flex min-w-0 items-center gap-2.5 hover:underline">
            <span className="shrink-0 rounded-full bg-ob px-2 py-0.5 text-[12px] font-medium text-ink">{header.news.tag}</span>
            <span className="truncate">{header.news.text}</span>
            <Arrow className="h-3.5 w-3.5 shrink-0" />
          </Link>
          <span className="hidden items-center gap-1 sm:flex">
            <LanguageLink lang={lang} pathname={pathname} className="inline-flex h-7 rounded-full px-2.5" />
            <Link href="/portal/login" className="inline-flex h-7 items-center rounded-full px-2.5 text-white/85 hover:bg-white/10 hover:text-white">
              {header.clientArea}
            </Link>
          </span>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-8">
        <Logo href={localize(lang, "/")} size="lg" />

        <nav aria-label={header.navLabel} className="hidden items-center gap-0.5 text-[14px] font-medium xl:flex">
          {services.map((s, i) => {
            const active = pathname === s.href;
            return (
              <Link
                key={s.href}
                href={localize(lang, s.href)}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-10 items-center gap-2 rounded-full px-3.5 transition-colors ${active ? "bg-cream text-ink" : "text-ink hover:bg-cream"}`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${tileBg[i]} ${active ? "ring-2 ring-violet/30" : ""}`} aria-hidden="true" />
                {s.product}
              </Link>
            );
          })}
          <span className="mx-2 h-5 w-px bg-line" aria-hidden="true" />
          {nav.filter((item) => item.inHeader).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={localize(lang, item.href)}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-10 items-center rounded-full px-3.5 transition-colors ${active ? "bg-cream text-ink" : "text-body hover:bg-cream hover:text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={localize(lang, "/contact")}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-[14px] font-medium text-white transition-colors hover:bg-violet"
          >
            {header.cta}
            <Arrow className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? header.closeMenu : header.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label={header.navMobileLabel} className="anim-drop max-h-[calc(100svh-7rem)] overflow-y-auto border-t border-cream-2 bg-white px-4 pb-5 xl:hidden">
          <p className="px-3 pb-2 pt-4 text-[13px] font-medium text-violet">{header.services}</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {services.map((s, i) => (
              <li key={s.href}>
                <Link href={localize(lang, s.href)} onClick={() => setOpen(false)} className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 ${tileBg[i]}`}>
                  <span className="display text-[20px]">{s.label}</span>
                  <span className="text-[13px] font-medium text-ink/70">{s.product}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-3">
            {[...nav.map((n) => ({ ...n, href: localize(lang, n.href) })), { href: "/portal/login", label: header.clientArea }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="flex rounded-xl px-3 py-3 text-[16px] font-medium hover:bg-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageLink lang={lang} pathname={pathname} className="flex rounded-xl px-3 py-3 text-body hover:bg-cream sm:hidden" />
        </nav>
      )}
    </header>
  );
}

// Un colore per servizio, come nelle tessere della home
const tileBg = ["bg-ob", "bg-ps", "bg-ac", "bg-ip", "bg-sand"];

/** Link alle altre lingue (oggi una sola): porta alla stessa pagina tradotta */
function LanguageLink({ lang, pathname, className = "" }: { lang: Locale; pathname: string; className?: string }) {
  return (
    <>
      {locales
        .filter((l) => l !== lang)
        .map((l) => (
          <Link
            key={l}
            href={localize(l, pathname)}
            hrefLang={l}
            lang={l}
            aria-label={switchLabels[l]}
            title={localeNames[l]}
            className={`items-center font-medium ${className}`}
          >
            {l.toUpperCase()}
          </Link>
        ))}
    </>
  );
}
