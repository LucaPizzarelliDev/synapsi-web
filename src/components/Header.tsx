"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { nav, services } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const onService = services.some((s) => s.href === pathname);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServicesOpen(false);
    const onClick = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setServicesOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [servicesOpen]);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header ref={ref} className="sticky top-0 z-40 border-b-[1.5px] border-ink bg-paper">
      <div className="mx-auto flex min-h-18 max-w-[1320px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <Logo />

        <nav aria-label="Principale" className="hidden items-center gap-7 font-normal text-[13px] uppercase tracking-[0.06em] lg:flex">
          <button
            type="button"
            aria-expanded={servicesOpen}
            aria-controls="menu-servizi"
            onClick={() => setServicesOpen((v) => !v)}
            className={`inline-flex items-center gap-2 py-2.5 uppercase ${servicesOpen || onService ? "marker bg-ob" : "hover:bg-ob"}`}
          >
            Cosa facciamo
            <svg viewBox="0 0 12 12" className={`h-2.5 w-2.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true">
              <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`py-2.5 ${active ? "marker bg-ob" : "hover:bg-ob"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/portale/accesso" className="hidden min-h-11.5 items-center px-3 font-normal text-[13px] uppercase tracking-[0.06em] hover:bg-ob xl:inline-flex">
            Area clienti
          </Link>
          <Link
            href="/contatti"
            className="hidden min-h-11.5 items-center gap-2.5 bg-primary px-5 text-[15px] font-medium text-paper transition-colors hover:bg-primary-dark sm:inline-flex"
          >
            Parliamone <span aria-hidden="true">→</span>
          </Link>
          <button
            type="button"
            className="frame inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {servicesOpen && (
        <div id="menu-servizi" className="absolute inset-x-0 top-full hidden border-b-[1.5px] border-ink bg-paper lg:block">
          <ul className="mx-auto grid max-w-[1320px] grid-cols-5 px-10">
            {services.map((s) => (
              <li key={s.href} className="border-l-[1.5px] border-ink last:border-r-[1.5px]">
                <Link href={s.href} onClick={close} className="group flex h-full flex-col gap-2 p-5 hover:bg-primary-soft">
                  <span className="font-normal text-[12px] uppercase tracking-[0.06em] text-primary">{s.product}</span>
                  <span className="display text-[22px]">{s.label}</span>
                  <span className="text-[14px] leading-snug text-body">{s.need}</span>
                  <span aria-hidden="true" className="mt-auto pt-2 text-primary transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {open && (
        <nav id="menu-mobile" aria-label="Principale mobile" className="border-t-[1.5px] border-ink lg:hidden">
          <p className="border-b-[1.5px] border-ink px-4 pb-2 pt-4 font-normal text-[12px] uppercase tracking-[0.06em]">Cosa facciamo</p>
          <ul>
            {services.map((s) => (
              <li key={s.href} className="border-b-[1.5px] border-ink">
                <Link href={s.href} onClick={close} className="flex items-baseline justify-between gap-4 px-4 py-3.5 hover:bg-ob">
                  <span className="display text-2xl">{s.label}</span>
                  <span className="font-normal text-[12px] uppercase">{s.product}</span>
                </Link>
              </li>
            ))}
            {[...nav, { href: "/portale/accesso", label: "Area clienti" }].map((item) => (
              <li key={item.href} className="border-b-[1.5px] border-ink last:border-b-0">
                <Link href={item.href} onClick={close} className="flex px-4 py-3.5 font-normal text-[13px] uppercase tracking-[0.06em] hover:bg-ob">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
