import type { Metadata } from "next";
import { ReportTable } from "@/components/portal/ReportTable";
import { PageHeader } from "@/components/portal/ui";

export const metadata: Metadata = { title: "Report e documenti" };

export default function ReportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Archivio"
        title="Report e documenti"
        lead="Tutti i documenti consegnati, firmati dallo psicologo responsabile. Ogni download viene registrato per la tracciabilità."
      />
      <ReportTable />
    </>
  );
}
