import type { Metadata } from "next";
import { OrgMap } from "@/components/graphics";
import { Card, DownloadLink, PageHeader, Stat } from "@/components/portal/ui";
import { checkups, formatDate } from "@/lib/portal";

export const metadata: Metadata = { title: "Organizzazione" };

const priorities = [
  {
    area: "Produzione · Logistica",
    title: "Passaggi di consegna tra turni",
    text: "In 11 episodi su 18 le informazioni sui fermi macchina arrivano al turno successivo solo a voce. È il punto che genera più attriti.",
    level: "Sviluppo",
  },
  {
    area: "Direzione",
    title: "Priorità comunicate in modo diverso ai reparti",
    text: "Produzione e commerciale descrivono obiettivi trimestrali diversi per gli stessi clienti.",
    level: "Attenzione",
  },
  {
    area: "Amministrazione",
    title: "Procedure solide, poco delegate",
    text: "Le procedure tengono, ma dipendono da due persone chiave: se si fermano, si ferma la chiusura mensile.",
    level: "Attenzione",
  },
];

export default function OrganizzazionePage() {
  const current = checkups[0];
  return (
    <>
      <PageHeader
        eyebrow="Chimeria"
        title="Organizzazione"
        lead="Chimeria Core: ogni reparto letto sulle dodici aree. Ogni numero porta la sua base, ogni cella rimanda agli episodi raccolti nei colloqui."
        actions={<DownloadLink id={current.id} variant="solid" label="Scarica il report" />}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat label="Indice di cultura" value="62" note="Aree 1–4 · n = 18" />
        <Stat label="Indice di clima" value="54" note="Aree 5–11 · n = 18" />
        <Stat label="Colloqui" value={current.interviews} note={`${current.departments} reparti · consegnato il ${formatDate(current.date)}`} />
        <Stat label="Aree divise" value="3" note="Giudizio contestato fra chi ha risposto" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        <OrgMap />
        <Card title="Le leve indicate dallo psicologo" flush>
          <ol className="divide-y divide-line">
            {priorities.map((p, i) => (
              <li key={p.title} className="px-5 py-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[12px] text-body">
                    {String(i + 1).padStart(2, "0")} · {p.area}
                  </span>
                  <span className={` px-2 py-0.5 text-[11px] font-medium ${p.level === "Sviluppo" ? "bg-ip" : "bg-ob"}`}>{p.level}</span>
                </div>
                <p className="mt-1.5 text-[15px] font-medium">{p.title}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-body">{p.text}</p>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      <Card title="Schede di reparto" className="mt-6" flush>
        <ul className="divide-y divide-line">
          {[
            ["Produzione", "6 colloqui su 7", "CH-2026-004"],
            ["Logistica", "3 colloqui su 4", null],
            ["Commerciale", "3 colloqui su 3", null],
            ["Amministrazione", "3 colloqui su 3", null],
            ["Direzione", "3 colloqui su 3", null],
          ].map(([name, n, id]) => (
            <li key={name} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
              <span>
                <span className="block text-[15px] font-medium">{name}</span>
                <span className="font-mono text-[12px] text-body">{n}</span>
              </span>
              {id ? <DownloadLink id={id} label="Scheda PDF" variant="ghost" /> : <span className="text-[13px] text-body">Nel report per il committente</span>}
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Storico" className="mt-6" flush>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-[14px]">
            <thead className="text-[12px] uppercase tracking-[0.06em] text-body">
              <tr className="border-b-[1.5px] border-ink">
                <th scope="col" className="px-5 py-2.5 font-medium">Check-up</th>
                <th scope="col" className="px-3 py-2.5 font-medium">Consegna</th>
                <th scope="col" className="px-3 py-2.5 font-medium">Reparti</th>
                <th scope="col" className="px-3 py-2.5 font-medium">Colloqui</th>
                <th scope="col" className="px-5 py-2.5 text-right font-medium">Report</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {checkups.map((c) => (
                <tr key={c.id}>
                  <td className="px-5 py-3 font-medium">{c.label}</td>
                  <td className="px-3 py-3 text-body">{formatDate(c.date)}</td>
                  <td className="px-3 py-3 text-body">{c.departments}</td>
                  <td className="px-3 py-3 text-body">{c.interviews}</td>
                  <td className="px-5 py-3 text-right">
                    <DownloadLink id={c.id} label="PDF" variant="ghost" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
