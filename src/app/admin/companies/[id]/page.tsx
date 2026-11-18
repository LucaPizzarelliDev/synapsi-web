import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DealPanel } from "@/components/admin/DealPanel";
import { AreaStatusBadge, CompanyMark, ProductChips } from "@/components/admin/ui";
import { Icon } from "@/components/portal/icons";
import { Card } from "@/components/portal/ui";
import { auditLog, companies } from "@/lib/admin";
import { formatDate, psychologists } from "@/lib/portal";

export function generateStaticParams() {
  return companies.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: PageProps<"/admin/companies/[id]">): Promise<Metadata> {
  const { id } = await params;
  return { title: companies.find((c) => c.id === id)?.name ?? "Azienda" };
}

export default async function AziendaPage({ params }: PageProps<"/admin/companies/[id]">) {
  const { id } = await params;
  const c = companies.find((x) => x.id === id);
  if (!c) notFound();
  const log = auditLog.filter((e) => e.company === c.id);

  return (
    <>
      <Link href="/admin/companies" className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-white px-3.5 text-[14px] text-body transition-colors hover:text-ink">
        <Icon d="M19 12H5M11 18l-6-6 6-6" className="h-4 w-4" />
        Aziende
      </Link>

      <div className="flex items-center gap-4 pb-8 pt-6">
        <CompanyMark short={c.short} className="h-14 w-14 rounded-2xl text-[15px]" />
        <div>
          <h1 className="display text-[clamp(1.75rem,2.6vw,2.25rem)]">{c.name}</h1>
          <p className="mt-1 text-[15px] text-body">
            {c.sector}
            {c.deal.contractEnd && ` · contratto fino al ${formatDate(c.deal.contractEnd)}`}
          </p>
        </div>
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-[1.4fr_1fr]">
        <DealPanel companyId={c.id} initial={c.deal.stage} hasAreas={c.areas.length > 0} />
        <Card title="Contatto e note">
          <dl className="grid grid-cols-[90px_1fr] gap-y-2 text-[14px]">
            <dt className="text-body">Contatto</dt>
            <dd>
              {c.contact.name} · {c.contact.role}
            </dd>
            <dt className="text-body">Email</dt>
            <dd className="truncate">{c.contact.email}</dd>
            <dt className="text-body">Interesse</dt>
            <dd>
              <ProductChips products={c.deal.interest} />
            </dd>
            <dt className="text-body">Aggiornata</dt>
            <dd>{formatDate(c.deal.updated)}</dd>
          </dl>
          <p className="mt-4 rounded-2xl bg-cream p-3.5 text-[14px] leading-relaxed">{c.deal.note}</p>
        </Card>
      </div>

      {c.areas.length > 0 && (
        <>
          <h2 className="pb-3 pt-8 text-[15px] font-semibold">Aree nel portale</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {c.areas.map((a) => (
              <Link key={a.id} href={`/admin/areas/${a.id}`} className="block rounded-2xl bg-white p-5 shadow-[0_0_0_1px_rgba(28,26,24,0.06)] transition-transform hover:-translate-y-0.5">
                <span className="flex items-start justify-between gap-3">
                  <span>
                    <span className="display block text-[22px]">{a.name}</span>
                    <span className="mt-0.5 block font-mono text-[12px] text-body">{a.id}</span>
                  </span>
                  <AreaStatusBadge status={a.status} />
                </span>
                <span className="mt-4 block">
                  <ProductChips products={a.products} />
                </span>
                <span className="mt-5 grid grid-cols-3 gap-3 rounded-2xl bg-cream p-4 text-[13px]">
                  <span>
                    <span className="block text-body">Utenti</span>
                    <span className="display mt-1 block text-[22px] leading-none">{a.users.length}</span>
                  </span>
                  <span>
                    <span className="block text-body">Assessment</span>
                    <span className="display mt-1 block text-[22px] leading-none">{a.assessments}</span>
                  </span>
                  <span>
                    <span className="block text-body">Referente</span>
                    <span className="mt-1.5 block font-medium">{psychologists[a.referent].short}</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </>
      )}

      <Card title="Registro" className="mt-6">
        {log.length ? (
          <ol className="flex flex-col gap-3 text-[14px]">
            {log.map((e) => (
              <li key={e.date + e.text}>
                <p>{e.text}</p>
                <p className="text-[13px] text-body">
                  {formatDate(e.date)} · {e.who}
                </p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-[14px] text-body">Nessuna attività registrata.</p>
        )}
      </Card>
    </>
  );
}
