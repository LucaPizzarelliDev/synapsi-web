"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { Icon, icons } from "@/components/portal/icons";
import { DotGrid } from "@/components/ui";
import { allAreas, companies, staff } from "@/lib/admin";

// La console si distingue dal portale a colpo d'occhio: barra laterale scura, etichetta «Console», accento giallo
const nav = [
  { href: "/admin", label: "Panoramica", icon: icons.home },
  { href: "/admin/companies", label: "Aziende e trattative", icon: icons.org, count: companies.length },
  { href: "/admin/areas", label: "Aree e utenti", icon: icons.layers, count: allAreas.length },
  { href: "/admin/activity", label: "Registro attività", icon: icons.log },
];

const creating = (pathname: string) => pathname.endsWith("/new");
const isActive = (href: string, pathname: string) => (href === "/admin" ? pathname === "/admin" : pathname.startsWith(href) && !creating(pathname));

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-0.5">
      {nav.map((item) => {
        const active = isActive(item.href, pathname);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-10 items-center gap-3 rounded-lg px-3 text-[14px] transition-colors ${
                active ? "bg-white/[0.12] font-medium text-white" : "text-white/65 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              <span className={active ? "text-ob" : ""}>
                <Icon d={item.icon} className="h-[17px] w-[17px]" />
              </span>
              <span className="flex-1">{item.label}</span>
              {item.count !== undefined && <span className="text-[12px] tabular-nums text-white/50">{item.count}</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// Si parte sempre da un'azienda: le aree si aprono dalla sua scheda, a trattativa vinta
function NewCompanyButton({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/admin/companies/new"
      onClick={onNavigate}
      className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ob text-[14px] font-medium text-ink transition-colors hover:bg-white"
    >
      <Icon d={icons.plus} className="h-4 w-4" />
      Nuova azienda
    </Link>
  );
}

export function AdminShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const me = staff[0];
  const section = pathname === "/admin/companies/new" ? "Nuova azienda" : pathname === "/admin/areas/new" ? "Nuova area" : nav.filter((n) => isActive(n.href, pathname)).map((n) => n.label)[0];

  return (
    <div className="min-h-full bg-cream lg:grid lg:grid-cols-[264px_1fr]">
      <aside className="relative isolate hidden flex-col gap-6 bg-night px-4 py-5 text-white lg:sticky lg:top-0 lg:flex lg:h-screen">
        <DotGrid className="text-white/[0.05]" />
        <div className="flex items-center justify-between px-1">
          <Logo href="/admin" light />
          <span className="rounded-md bg-ip px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink">Console</span>
        </div>

        <NewCompanyButton />

        <nav aria-label="Console" className="flex-1 overflow-y-auto">
          <NavList />
        </nav>

        <Link href="/portal" className="flex min-h-10 items-center gap-3 rounded-lg px-3 text-[14px] text-white/65 transition-colors hover:bg-white/[0.06] hover:text-white">
          <Icon d={icons.external} className="h-[17px] w-[17px]" />
          Apri il portale clienti
        </Link>

        <div className="flex items-center gap-3 rounded-xl bg-white/[0.07] p-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-ob text-[13px] font-semibold text-ink" aria-hidden="true">
            AG
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[14px] font-medium leading-tight">{me.name}</span>
            <span className="block truncate text-[12px] text-white/60">{me.role}</span>
          </span>
        </div>
      </aside>

      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b border-sand/60 bg-cream/90 px-4 backdrop-blur sm:px-6 lg:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-night text-white lg:hidden"
              aria-expanded={open}
              aria-controls="console-menu"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </button>
            <p className="flex min-w-0 items-center gap-2 truncate text-[14px]">
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-body">Console</span>
              <span className="text-body/40" aria-hidden="true">/</span>
              <span className="font-medium">{section ?? "Console"}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-md bg-ip px-2.5 py-1 text-[12px] font-medium text-ink sm:inline-flex">
              <Icon d={icons.shield} className="h-3.5 w-3.5" />
              Superadmin
            </span>
            <span className="hidden rounded-md bg-white px-2.5 py-1 text-[12px] text-body sm:inline">Dati di esempio</span>
          </div>
        </header>

        {open && (
          <nav id="console-menu" aria-label="Console mobile" className="flex flex-col gap-4 bg-night px-3 py-4 text-white lg:hidden">
            <NewCompanyButton onNavigate={() => setOpen(false)} />
            <NavList onNavigate={() => setOpen(false)} />
          </nav>
        )}

        <main id="contenuto" className="flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
          <div className="mx-auto max-w-[1160px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
