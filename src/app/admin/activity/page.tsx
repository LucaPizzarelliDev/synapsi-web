import type { Metadata } from "next";
import { CompanyMark } from "@/components/admin/ui";
import { PageHeader, surface } from "@/components/portal/ui";
import { auditLog, companies } from "@/lib/admin";
import { formatDate } from "@/lib/portal";

export const metadata: Metadata = { title: "Registro attività" };

export default function RegistroPage() {
  return (
    <>
      <PageHeader
        eyebrow="Console superadmin"
        title="Registro attività"
        lead="Ogni azione fatta dalla console resta qui, con data e autore: aziende e trattative, aree aperte o sospese, utenti e ruoli."
      />
      <ol className={`divide-y divide-line ${surface}`}>
        {auditLog.map((e) => {
          const c = companies.find((x) => x.id === e.company);
          return (
            <li key={e.date + e.text} className="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-4 text-[14px]">
              <span className="w-28 shrink-0 text-[13px] text-body">{formatDate(e.date)}</span>
              {c && <CompanyMark short={c.short} />}
              <span className="min-w-0 flex-1">{e.text}</span>
              <span className="rounded-md bg-cream px-2.5 py-0.5 text-[12px] text-body">{e.who}</span>
            </li>
          );
        })}
      </ol>
    </>
  );
}
