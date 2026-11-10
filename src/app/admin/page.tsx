import Link from "next/link";
import { AreaStatusBadge, CompanyMark, DealBadge, ProductChips } from "@/components/admin/ui";
import { icons } from "@/components/portal/icons";
import { ActionLink, Card, CardLink, PageHeader, Stat } from "@/components/portal/ui";
import { allAreas, auditLog, companies, dealStages } from "@/lib/admin";
import { formatDate } from "@/lib/portal";

export default function ConsolePage() {
  const open = companies.filter((c) => c.deal.stage !== "Vinta" && c.deal.stage !== "Persa");
  const won = companies.filter((c) => c.deal.stage === "Vinta");
  const setup = allAreas.filter((a) => a.status === "In configurazione");
  const users = allAreas.reduce((n, a) => n + a.users.length, 0);
  // Vinte senza aree: il prossimo passo è aprirne una
  const toOpen = won.filter((c) => c.areas.length === 0);

  return (
    <>
      <PageHeader
        eyebrow="Console superadmin"
        title="Panoramica"
        lead="Le trattative aperte, le aziende diventate clienti e le aree del portale da completare."
        actions={
          <ActionLink href="/admin/companies/new" variant="solid">
            Nuova azienda
          </ActionLink>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat tone="bg-ob" icon={icons.clock} label="Trattative aperte" value={open.length} note={`${companies.length} aziende in tutto`} />
        <Stat tone="bg-ac" icon={icons.check} label="Clienti" value={won.length} note="Trattative vinte" />
        <Stat tone="bg-ps" icon={icons.layers} label="Aree nel portale" value={allAreas.length} note={`${setup.length} da completare`} />
        <Stat tone="bg-sand" icon={icons.people} label="Utenti" value={users} note="Somma degli utenti di ogni area" />
      </div>

      <Card title="Trattative" action={<CardLink href="/admin/companies">Tutte le aziende</CardLink>} className="mt-6">
        <ol className="grid gap-2 sm:grid-cols-5">
          {dealStages.map((s) => {
            const n = companies.filter((c) => c.deal.stage === s).length;
            return (
              <li key={s} className="rounded-2xl bg-cream p-4">
                <DealBadge stage={s} />
                <p className="display mt-3 text-[30px] leading-none">{n}</p>
              </li>
            );
          })}
        </ol>
      </Card>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card title="Aree da completare" action={<CardLink href="/admin/areas">Tutte le aree</CardLink>} flush>
          <ul className="divide-y divide-line">
            {setup.map((a) => (
              <li key={a.id}>
                <Link href={`/admin/areas/${a.id}`} className="flex flex-wrap items-center gap-3 px-5 py-4 transition-colors hover:bg-cream">
                  <CompanyMark short={a.company.short} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] font-medium">{a.name}</span>
                    <span className="block truncate text-[13px] text-body">
                      {a.company.name} · {a.users.length ? `${a.users.length} utenti` : "nessun utente"}
                    </span>
                  </span>
                  <ProductChips products={a.products} />
                  <AreaStatusBadge status={a.status} />
                </Link>
              </li>
            ))}
          </ul>
          <p className="border-t border-line px-5 py-3.5 text-[13px] text-body">Un&apos;area diventa attiva quando almeno un utente ha fatto il primo accesso.</p>
        </Card>

        <Card title="Trattative in corso" flush>
          <ul className="divide-y divide-line">
            {open.map((c) => (
              <li key={c.id}>
                <Link href={`/admin/companies/${c.id}`} className="flex flex-wrap items-center gap-3 px-5 py-4 transition-colors hover:bg-cream">
                  <CompanyMark short={c.short} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] font-medium">{c.name}</span>
                    <span className="block truncate text-[13px] text-body">{c.deal.note}</span>
                  </span>
                  <DealBadge stage={c.deal.stage} />
                </Link>
              </li>
            ))}
          </ul>
          {toOpen.length > 0 && <p className="border-t border-line px-5 py-3.5 text-[13px] text-body">{toOpen.length} clienti senza aree: aprile dalla loro scheda.</p>}
        </Card>
      </div>

      <Card title="Ultime attività" action={<CardLink href="/admin/activity">Registro completo</CardLink>} className="mt-6" flush>
        <ul className="divide-y divide-line">
          {auditLog.slice(0, 5).map((e) => (
            <li key={e.date + e.text} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 px-5 py-3.5 text-[14px]">
              <span className="w-24 shrink-0 text-[13px] text-body">{formatDate(e.date).replace(/ \d{4}$/, "")}</span>
              <span className="min-w-0 flex-1">{e.text}</span>
              <span className="text-[13px] text-body">{e.who}</span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
