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
    // Una sola riga: marchio, servizi e pagine, poi lingua, area clienti e contatto
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-8">
        <Logo href={localize(lang, "/")} />

        <nav aria-label={header.navLabel} className="hidden items-center gap-1 text-[14px] font-medium xl:flex">
          {services.map((s) => {
            const active = pathname === s.href;
            return (
              <Link
                key={s.href}
                href={localize(lang, s.href)}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-10 items-center px-3 transition-colors ${active ? "text-violet underline decoration-2 underline-offset-[10px]" : "text-ink hover:text-violet"}`}
              >
                {s.product}
              </Link>
            );
          })}
          <span className="mx-3 h-5 w-px bg-ink/15" aria-hidden="true" />
          {nav.filter((item) => item.inHeader).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={localize(lang, item.href)}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-10 items-center px-3 transition-colors ${active ? "text-violet underline decoration-2 underline-offset-[10px]" : "text-body hover:text-violet"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <span className="mr-2 hidden items-center gap-1 text-[14px] font-medium text-body sm:flex">
            <LanguageLink lang={lang} pathname={pathname} className="inline-flex h-10 px-2.5 hover:text-violet" />
            <Link href="/portal/login" className="inline-flex h-10 items-center px-2.5 hover:text-violet">
              {header.clientArea}
            </Link>
          </span>
          <Link
            href={localize(lang, "/contact")}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-violet px-5 text-[14px] font-medium text-white transition-colors hover:bg-violet-dark"
          >
            {header.cta}
            <Arrow className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cream-2 xl:hidden"
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
        <nav id="menu-mobile" aria-label={header.navMobileLabel} className="anim-drop max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-cream px-4 pb-5 xl:hidden">
          <p className="px-3 pb-2 pt-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-violet">{header.services}</p>
          <ul className="divide-y divide-line rounded-xl bg-white">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={localize(lang, s.href)} onClick={() => setOpen(false)} className="flex items-center justify-between gap-4 px-4 py-3.5">
                  <span className="display text-[19px]">{s.label}</span>
                  <span className="text-[13px] font-medium text-body">{s.product}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-3">
            {[...nav.map((n) => ({ ...n, href: localize(lang, n.href) })), { href: "/portal/login", label: header.clientArea }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="flex rounded-xl px-3 py-3 text-[16px] font-medium hover:bg-cream-2">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageLink lang={lang} pathname={pathname} className="flex rounded-xl px-3 py-3 text-body hover:bg-cream-2 sm:hidden" />
        </nav>
      )}
    </header>
  );
}

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
