"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { assessments, client, prismiaCycles, psychologists, reports } from "@/lib/portal";
import { Icon, icons } from "./icons";

// Gruppi della barra laterale. Il pallino colorato è il prodotto (stessi colori dei codici sul sito)
const groups: { label?: string; items: { href: string; label: string; hint?: string; dot?: string; icon: string; count?: number }[] }[] = [
  { items: [{ href: "/portal", label: "Panoramica", icon: icons.home }] },
  {
    label: "Assessment",
    items: [
      { href: "/portal/people", label: "Persone", hint: "Viseria", dot: "bg-ob", icon: icons.people, count: assessments.length },
      { href: "/portal/managers", label: "Manager", hint: "Prismia", dot: "bg-ps", icon: icons.user, count: prismiaCycles.length },
      { href: "/portal/organization", label: "Organizzazione", hint: "Chimeria", dot: "bg-ac", icon: icons.org },
    ],
  },
  {
    label: "Archivio",
    items: [
      { href: "/portal/reports", label: "Report e documenti", icon: icons.doc, count: reports.length },
      { href: "/portal/account", label: "Account e privacy", icon: icons.lock },
    ],
  },
];

const titles: Record<string, string> = Object.fromEntries(groups.flatMap((g) => g.items.map((i) => [i.href, i.label])));

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-5">
      {groups.map((g, gi) => (
        <div key={gi}>
          {g.label && <p className="px-3 pb-1.5 text-[12px] font-medium text-body/70">{g.label}</p>}
          <ul className="flex flex-col gap-0.5">
            {g.items.map((item) => {
              const active = item.href === "/portal" ? pathname === "/portal" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={`group flex min-h-9 items-center gap-2.5 rounded-xl px-3 text-[14px] transition-colors ${
                      active ? "bg-white font-medium text-ink shadow-[0_1px_2px_rgba(28,26,24,0.06)]" : "text-body hover:bg-white/60 hover:text-ink"
                    }`}
                  >
                    <span className={active ? "text-violet" : "text-body/70 group-hover:text-ink"}>
                      <Icon d={item.icon} className="h-[17px] w-[17px]" />
                    </span>
                    <span className="flex-1">{item.label}</span>
                    {item.dot && (
                      <span className="flex items-center gap-1.5 text-[11px] text-body/70">
                        <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} aria-hidden="true" />
                        {item.hint}
                      </span>
                    )}
                    {!item.dot && item.count !== undefined && <span className="text-[12px] tabular-nums text-body/70">{item.count}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function PortalShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = psychologists.gilli;
  const section = Object.entries(titles)
    .filter(([href]) => (href === "/portal" ? pathname === "/portal" : pathname.startsWith(href)))
    .map(([, label]) => label)[0];

  return (
    <div className="min-h-full bg-cream-2/60 lg:grid lg:grid-cols-[260px_1fr] print:bg-white">
      {/* Barra laterale */}
      <aside className="hidden flex-col gap-5 px-3 py-4 print:hidden lg:sticky lg:top-0 lg:flex lg:h-screen">
        <div className="px-2 pt-1">
          <Logo href="/portal" />
        </div>

        {/* Spazio di lavoro: il cliente */}
        <div className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-[0_1px_2px_rgba(28,26,24,0.06)]">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet text-[13px] font-semibold text-white" aria-hidden="true">
            {client.short}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[14px] font-medium leading-tight">{client.name}</span>
            <span className="block truncate text-[12px] text-body">{client.sector}</span>
          </span>
        </div>

        <nav aria-label="Portale" className="flex-1 overflow-y-auto">
          <NavList />
        </nav>

        {/* Il referente: una persona, non un servizio clienti */}
        <div className="rounded-2xl bg-white p-4 shadow-[0_1px_2px_rgba(28,26,24,0.06)]">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ps text-[14px] font-semibold text-violet-dark" aria-hidden="true">
              AG
            </span>
            <span>
              <span className="block text-[14px] font-medium leading-tight">{ref.name}</span>
              <span className="block text-[12px] text-body">Il vostro psicologo referente</span>
            </span>
          </div>
          <a
            href="mailto:info@synapsi-analytics.it"
            className="mt-3 flex min-h-9 items-center justify-center rounded-xl bg-cream text-[13px] font-medium text-ink transition-colors hover:bg-lavender hover:text-violet-dark"
          >
            Scrivi al referente
          </a>
        </div>
      </aside>

      <div className="flex min-w-0 flex-col lg:py-2 lg:pr-2">
        {/* Pannello di lavoro */}
        <div className="flex min-h-full flex-1 flex-col bg-snow lg:rounded-[20px] lg:shadow-[0_0_0_1px_rgba(28,26,24,0.05),0_2px_8px_-2px_rgba(28,26,24,0.06)] print:bg-white print:shadow-none">
          <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b border-line/70 bg-snow/90 px-4 backdrop-blur print:hidden sm:px-6 lg:top-2 lg:rounded-t-[20px] lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cream lg:hidden"
                aria-expanded={open}
                aria-controls="portale-menu"
                aria-label={open ? "Chiudi menu" : "Apri menu"}
                onClick={() => setOpen((v) => !v)}
              >
                <Icon d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
              </button>
              <span className="lg:hidden">
                <Logo href="/portal" />
              </span>
              <p className="hidden min-w-0 items-center gap-2 truncate text-[14px] lg:flex">
                <span className="text-body">{client.short}</span>
                <span className="text-body/40" aria-hidden="true">/</span>
                <span className="font-medium">{section ?? "Portale"}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-1.5 rounded-full bg-ob/70 px-2.5 py-1 text-[12px] font-medium text-ink sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-ink/60" aria-hidden="true" />
                Ambiente di esempio
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet text-[12px] font-semibold text-white" aria-hidden="true">
                  {client.user.initials}
                </span>
                <span className="hidden text-[13px] leading-tight xl:block">
                  <span className="block font-medium">{client.user.name}</span>
                  <span className="block text-body">{client.user.role}</span>
                </span>
              </span>
              <Link href="/portal/login" className="hidden rounded-lg px-2 py-1 text-[13px] text-body hover:bg-cream hover:text-ink sm:inline">
                Esci
              </Link>
            </div>
          </header>

          {open && (
            <nav id="portale-menu" aria-label="Portale mobile" className="border-b border-line bg-cream-2/60 px-3 py-4 lg:hidden">
              <NavList onNavigate={() => setOpen(false)} />
              <Link href="/portal/login" className="mt-3 flex min-h-9 items-center rounded-xl px-3 text-[14px] text-body hover:bg-white">
                Esci
              </Link>
            </nav>
          )}

          <main id="contenuto" className="flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10 print:p-0">
            <div className="mx-auto max-w-[1160px]">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
