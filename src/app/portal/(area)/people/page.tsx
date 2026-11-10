import type { Metadata } from "next";
import { PeopleTable } from "@/components/portal/PeopleTable";
import { PageHeader } from "@/components/portal/ui";

export const metadata: Metadata = { title: "Persone" };

export default function PersonePage() {
  return (
    <>
      <PageHeader
        eyebrow="Viseria"
        title="Persone"
        lead="Gli assessment individuali richiesti, con la fase in cui si trovano. Il report diventa scaricabile solo dopo la revisione e la firma dello psicologo."
      />
      <PeopleTable />
    </>
  );
}
