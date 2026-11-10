import type { Metadata } from "next";
import Link from "next/link";
import { AreaStatusBadge, CompanyMark, ProductChips } from "@/components/admin/ui";
import { ActionLink, PageHeader, surface } from "@/components/portal/ui";
import { allAreas } from "@/lib/admin";
import { formatDate, psychologists } from "@/lib/portal";

export const metadata: Metadata = { title: "Aree e utenti" };

export default function AreePage() {
  return (
    <>
      <PageHeader
        eyebrow="Console superadmin"
        title="Aree e utenti"
        lead="Un'area è uno spazio del portale con i suoi prodotti e il suo psicologo referente. Utenti e ruoli valgono per l'area: si gestiscono aprendola."
        actions={
          <ActionLink href="/admin/areas/new" variant="solid">
            Apri un&apos;area
          </ActionLink>
        }
      />
      <div className={`overflow-x-auto ${surface}`}>
        <table className="w-full min-w-[820px] text-left text-[14px]">
          <thead className="text-[13px] text-body">
            <tr className="border-b border-line">
              <th className="px-5 py-3 font-medium">Area</th>
              <th className="px-3 py-3 font-medium">Prodotti</th>
              <th className="px-3 py-3 font-medium">Referente</th>
              <th className="px-3 py-3 font-medium">Utenti</th>
              <th className="px-3 py-3 font-medium">Aperta il</th>
              <th className="px-5 py-3 font-medium">Stato</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {allAreas.map((a) => (
              <tr key={a.id} className="transition-colors hover:bg-cream">
                <td className="px-5 py-3.5">
                  <Link href={`/admin/areas/${a.id}`} className="flex items-center gap-3">
                    <CompanyMark short={a.company.short} />
                    <span className="min-w-0">
                      <span className="block font-medium">{a.name}</span>
                      <span className="block text-[13px] text-body">{a.company.name}</span>
                    </span>
                  </Link>
                </td>
                <td className="px-3 py-3.5">
                  <ProductChips products={a.products} />
                </td>
                <td className="px-3 py-3.5">{psychologists[a.referent].short}</td>
                <td className="px-3 py-3.5 tabular-nums">{a.users.length}</td>
                <td className="px-3 py-3.5 text-body">{formatDate(a.created)}</td>
                <td className="px-5 py-3.5">
                  <AreaStatusBadge status={a.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
