import type { Metadata } from "next";
import { Suspense } from "react";
import { NewAreaForm } from "@/components/admin/NewAreaForm";
import { PageHeader } from "@/components/portal/ui";

export const metadata: Metadata = { title: "Nuova area" };

export default function NuovaAreaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Console superadmin"
        title="Nuova area"
        lead="Un'area si apre per un'azienda con la trattativa vinta. Scegli prodotti e psicologo referente; gli utenti e i loro ruoli si aggiungono poi dentro l'area."
      />
      {/* L'azienda può arrivare già scelta dalla sua scheda (?company=…) */}
      <Suspense>
        <NewAreaForm />
      </Suspense>
    </>
  );
}
