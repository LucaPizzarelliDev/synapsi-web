import type { Metadata } from "next";
import Link from "next/link";
import { CompanyMark, DealBadge, ProductChips } from "@/components/admin/ui";
import { ActionLink, PageHeader } from "@/components/portal/ui";
import { companies, dealStages } from "@/lib/admin";
import { formatDate } from "@/lib/portal";

export const metadata: Metadata = { title: "Aziende e trattative" };

export default function AziendePage() {
  return (
    <>
      <PageHeader
        eyebrow="Console superadmin"
        title="Aziende e trattative"
        lead="Ogni azienda parte da una trattativa. Quando è vinta diventa cliente e dalla sua scheda si aprono le aree nel portale."
        actions={
          <ActionLink href="/admin/companies/new" variant="solid">
            Nuova azienda
          </ActionLink>
        }
      />

      {/* Pipeline: una colonna per fase, scorre in orizzontale sugli schermi stretti */}
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <div className="grid min-w-[1050px] grid-cols-5 gap-3">
          {dealStages.map((stage) => {
            const list = companies.filter((c) => c.deal.stage === stage);
            return (
              <section key={stage} aria-label={stage} className="rounded-[20px] bg-cream-2/70 p-2.5">
                <h2 className="flex items-center justify-between px-1.5 pb-2.5 pt-1">
                  <DealBadge stage={stage} />
                  <span className="text-[13px] tabular-nums text-body">{list.length}</span>
                </h2>
                <ul className="flex flex-col gap-2">
                  {list.map((c) => (
                    <li key={c.id}>
                      <Link href={`/admin/companies/${c.id}`} className="block rounded-2xl bg-white p-3.5 shadow-[0_0_0_1px_rgba(28,26,24,0.06)] transition-transform hover:-translate-y-0.5">
                        <span className="flex items-center gap-2.5">
                          <CompanyMark short={c.short} className="h-8 w-8 rounded-lg text-[11px]" />
                          <span className="min-w-0 text-[14px] font-medium leading-tight">{c.name}</span>
                        </span>
                        <span className="mt-2.5 block">
                          <ProductChips products={c.deal.interest} />
                        </span>
                        <span className="mt-2.5 flex justify-between gap-2 text-[12px] text-body">
                          <span>{formatDate(c.deal.updated).replace(/ \d{4}$/, "")}</span>
                          {stage === "Vinta" && <span>{c.areas.length ? `${c.areas.length} ${c.areas.length === 1 ? "area" : "aree"}` : "Nessuna area"}</span>}
                        </span>
                      </Link>
                    </li>
                  ))}
                  {list.length === 0 && <li className="px-2 py-3 text-[13px] text-body">Nessuna azienda</li>}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
