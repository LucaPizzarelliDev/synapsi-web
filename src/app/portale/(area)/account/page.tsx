import type { Metadata } from "next";
import { Card, Initials, PageHeader } from "@/components/portal/ui";
import { client, users } from "@/lib/portal";

export const metadata: Metadata = { title: "Account e privacy" };

export default function AccountPage() {
  return (
    <>
      <PageHeader eyebrow={client.name} title="Account e privacy" lead="Chi può accedere al portale, con quali permessi, e come trattiamo i dati raccolti nei colloqui." />

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Card title="Utenti con accesso" action={<span className="text-[13px] text-body">Gestiti dall’amministratore</span>} flush>
          <ul className="divide-y divide-line">
            {users.map((u) => (
              <li key={u.email} className="flex flex-wrap items-center gap-3 px-5 py-3.5">
                <Initials name={u.name} />
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-medium">{u.name}</p>
                  <p className="truncate text-[13px] text-body">{u.email}</p>
                </div>
                <span className="bg-paper-2 px-2.5 py-0.5 text-[12px]">{u.role}</span>
                <span className="w-24 text-right text-[12px] text-body">{u.last}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="flex flex-col gap-6">
          <Card title="Contratto">
            <dl className="grid grid-cols-[110px_1fr] gap-y-2 text-[14px]">
              <dt className="text-body">Servizi</dt>
              <dd>{client.contract}</dd>
              <dt className="text-body">Settore</dt>
              <dd>{client.sector}</dd>
              <dt className="text-body">Referente</dt>
              <dd>Dott. Alessandro Gilli</dd>
            </dl>
          </Card>
          <Card title="Sicurezza">
            <ul className="flex flex-col gap-2 text-[14px]">
              <li>Accesso con verifica in due passaggi</li>
              <li>Ogni apertura e download dei report è registrato</li>
              <li>I report sulle persone sono visibili solo ai ruoli autorizzati</li>
            </ul>
          </Card>
        </div>
      </div>

      <Card title="Trattamento dei dati" className="mt-6">
        <div className="grid gap-5 text-[14px] leading-relaxed sm:grid-cols-3">
          <div>
            <p className="font-medium">Dove</p>
            <p className="text-body">Registrazioni, trascrizioni e report sono conservati su server nell’Unione Europea.</p>
          </div>
          <div>
            <p className="font-medium">Per quanto</p>
            <p className="text-body">Le registrazioni audio vengono cancellate dopo la trascrizione validata; i report restano disponibili per la durata del contratto.</p>
          </div>
          <div>
            <p className="font-medium">Chi decide</p>
            <p className="text-body">L’intelligenza artificiale supporta trascrizione e codifica. Ogni conclusione è rivista e firmata da uno psicologo.</p>
          </div>
        </div>
      </Card>
    </>
  );
}
