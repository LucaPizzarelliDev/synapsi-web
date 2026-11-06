"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { client, psychologists } from "@/lib/portal";
import { Icon, icons } from "./icons";

const nav = [
  { href: "/portale", label: "Panoramica", icon: icons.home },
  { href: "/portale/persone", label: "Persone", hint: "Viseria", icon: icons.people },
  { href: "/portale/manager", label: "Manager", hint: "Prismia", icon: icons.user },
  { href: "/portale/organizzazione", label: "Organizzazione", hint: "Chimeria", icon: icons.org },
  { href: "/portale/report", label: "Report e documenti", icon: icons.doc },
  { href: "/portale/account", label: "Account e privacy", icon: icons.lock },
];

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-0.5">
      {nav.map((item) => {
        const active = item.href === "/portale" ? pathname === "/portale" : pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-10 items-center gap-3 px-3 text-[15px] transition-colors ${
                active ? "bg-primary-soft font-medium text-primary" : "text-body hover:bg-paper-2 hover:text-ink"
              }`}
            >
              <Icon d={item.icon} />
              <span className="flex-1">{item.label}</span>
              {item.hint && <span className="font-mono text-[11px] text-body">{item.hint}</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function PortalShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = psychologists.gilli;

  return (
    <div className="min-h-full bg-paper-2 lg:grid lg:grid-cols-[264px_1fr]">
      {/* Barra laterale */}
      <aside className="hidden flex-col border-r-[1.5px] border-ink bg-paper print:hidden lg:sticky lg:top-0 lg:flex lg:h-screen">
        <div className="flex h-16 items-center border-b-[1.5px] border-ink px-5">
          <Logo />
        </div>
        <div className="border-b-[1.5px] border-ink px-5 py-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.06em]">Cliente</p>
          <p className="mt-1 text-[14px] font-medium leading-snug">{client.name}</p>
          <p className="mt-0.5 text-[13px] text-body">{client.sector}</p>
        </div>
        <nav aria-label="Portale" className="flex-1 overflow-y-auto px-3 py-4">
          <NavList />
        </nav>
        <div className="border-t-[1.5px] border-ink p-4">
          <div className="bg-paper-2 p-3.5">
            <p className="font-mono text-[12px] uppercase tracking-[0.06em]">Il vostro referente</p>
            <p className="mt-1 text-[14px] font-medium">{ref.name}</p>
            <a href="mailto:info@synapsi-analytics.it" className="mt-1 inline-block text-[13px] underline underline-offset-4 hover:bg-ob">
              Scrivi al referente
            </a>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-col">
        {/* Barra superiore */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b-[1.5px] border-ink bg-paper px-4 print:hidden sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border-[1.5px] border-ink lg:hidden"
              aria-expanded={open}
              aria-controls="portale-menu"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </button>
            <span className="lg:hidden">
              <Logo />
            </span>
            <span className="hidden border-[1.5px] border-ink px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-body sm:inline lg:inline">
              Ambiente di esempio
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-[14px] font-medium leading-tight">{client.user.name}</p>
              <p className="text-[12px] text-body">{client.user.role}</p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center bg-ink text-[13px] font-medium text-paper" aria-hidden="true">
              {client.user.initials}
            </span>
            <Link href="/portale/accesso" className="hidden text-[14px] text-body hover:text-ink sm:inline">
              Esci
            </Link>
          </div>
        </header>

        {open && (
          <nav id="portale-menu" aria-label="Portale mobile" className="border-b-[1.5px] border-ink bg-paper px-3 py-3 lg:hidden">
            <NavList onNavigate={() => setOpen(false)} />
            <Link href="/portale/accesso" className="mt-2 flex min-h-10 items-center px-3 text-[15px] text-body">
              Esci
            </Link>
          </nav>
        )}

        <main id="contenuto" className="flex-1 px-4 py-8 sm:px-6 lg:px-8 lg:py-10 print:p-0">
          <div className="mx-auto max-w-[1180px]">{children}</div>
        </main>
      </div>
    </div>
  );
}

