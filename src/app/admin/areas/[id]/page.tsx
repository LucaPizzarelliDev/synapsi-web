import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AreaUsers } from "@/components/admin/AreaUsers";
import { AreaStatusBadge, CompanyMark, ProductChips } from "@/components/admin/ui";
import { Icon } from "@/components/portal/icons";
import { Card } from "@/components/portal/ui";
import { allAreas, areaRoles, findArea, roleNotes } from "@/lib/admin";
import { formatDate, psychologists } from "@/lib/portal";

export function generateStaticParams() {
  return allAreas.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: PageProps<"/admin/areas/[id]">): Promise<Metadata> {
  const { id } = await params;
  return { title: findArea(id)?.name ?? "Area" };
}

export default async function AreaPage({ params }: PageProps<"/admin/areas/[id]">) {
  const { id } = await params;
  const a = findArea(id);
  if (!a) notFound();

  return (
    <>
      <Link href={`/admin/companies/${a.company.id}`} className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white py-1 pl-1.5 pr-3.5 text-[14px] text-body transition-colors hover:text-ink">
        <Icon d="M19 12H5M11 18l-6-6 6-6" className="h-4 w-4" />
        <CompanyMark short={a.company.short} className="h-6 w-6 rounded-md text-[9px]" />
        {a.company.name}
      </Link>

      <div className="flex flex-wrap items-end justify-between gap-4 pb-8 pt-6">
        <div>
          <p className="text-[13px] font-medium text-violet">Area nel portale</p>
          <h1 className="display mt-1.5 text-[clamp(1.75rem,2.6vw,2.25rem)]">{a.name}</h1>
          <p className="mt-1 font-mono text-[12px] text-body">{a.id}</p>
        </div>
        <AreaStatusBadge status={a.status} />
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-[1.6fr_1fr]">
        <AreaUsers areaName={a.name} initial={a.users} suspended={a.status === "Sospesa"} />

        <div className="flex flex-col gap-6">
          <Card title="Impostazioni">
            <dl className="grid grid-cols-[100px_1fr] gap-y-2.5 text-[14px]">
              <dt className="text-body">Prodotti</dt>
              <dd>
                <ProductChips products={a.products} />
              </dd>
              <dt className="text-body">Referente</dt>
              <dd>{psychologists[a.referent].name}</dd>
              <dt className="text-body">Aperta il</dt>
              <dd>{formatDate(a.created)}</dd>
              <dt className="text-body">Assessment</dt>
              <dd className="tabular-nums">{a.assessments}</dd>
            </dl>
          </Card>
          <Card title="Ruoli in quest'area">
            <dl className="flex flex-col gap-3">
              {areaRoles.map((r) => (
                <div key={r}>
                  <dt className="text-[14px] font-medium">{r}</dt>
                  <dd className="text-[13px] leading-relaxed text-body">{roleNotes[r]}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 rounded-2xl bg-cream p-3 text-[13px] text-body">Un ruolo vale solo per questa area: la stessa persona può avere ruoli diversi in aree diverse.</p>
          </Card>
        </div>
      </div>
    </>
  );
}
