import type { Metadata } from "next";
import { NewCompanyForm } from "@/components/admin/NewCompanyForm";
import { PageHeader } from "@/components/portal/ui";

export const metadata: Metadata = { title: "Nuova azienda" };

export default function NuovaAziendaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Console superadmin"
        title="Nuova azienda"
        lead="Si parte da qui: l'azienda con il suo contatto e la trattativa. Le aree nel portale si aprono dopo, quando la trattativa è vinta."
      />
      <NewCompanyForm />
    </>
  );
}
