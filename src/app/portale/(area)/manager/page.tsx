import type { Metadata } from "next";
import { Icon, icons } from "@/components/portal/icons";
import { Card, DownloadLink, PageHeader } from "@/components/portal/ui";
import { formatDate, prismiaCycles, prismiaStages, psychologists, reports } from "@/lib/portal";

export const metadata: Metadata = { title: "Manager" };

const sourceLabels = { capo: "capo", pari: "pari", collaboratori: "collaboratori" } as const;

export default function ManagerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Prismia"
        title="Manager"
        lead="I cicli di feedback a intervista in corso. La card e il piano di sviluppo appartengono alla persona: li vedete solo se ha dato il consenso scritto. Il capo diretto non ha accesso."
      />

      <div className="flex flex-col gap-6">
        {prismiaCycles.map((c) => {
          const current = prismiaStages.indexOf(c.stage);
          const docs = reports.filter((r) => r.cycleId === c.id);
          const belowThreshold = c.sources.collaboratori[0] < 3;
          return (
            <Card key={c.id} title={`Ciclo ${c.person} · ${c.role}`} action={<span className="font-mono text-[12px]">{psychologists[c.psychologist].short}</span>}>
              <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="font-mono text-[12px] uppercase">Fase: {c.stage}</p>
                  <div className="mt-2 flex gap-1" role="img" aria-label={`Fase ${current + 1} di ${prismiaStages.length}: ${c.stage}`}>
                    {prismiaStages.map((s, i) => (
                      <span key={s} title={s} className={`h-1.5 flex-1 ${i <= current ? "bg-ink" : "bg-line"}`} />
                    ))}
                  </div>
                  <p className="mt-4 font-mono text-[12px]">
                    fonti raccolte:{" "}
                    {(Object.keys(sourceLabels) as (keyof typeof sourceLabels)[]).map((k, i) => (
                      <span key={k}>
                        {i > 0 && " · "}
                        {sourceLabels[k]} {c.sources[k][0]}/{c.sources[k][1]}
                      </span>
                    ))}
                  </p>
                  {belowThreshold && (
                    <p className="mt-3 bg-paper-2 px-4 py-3 text-[14px] leading-relaxed">
                      Collaboratori sotto la soglia di tre interviste: finché non si raggiunge, la loro voce non viene restituita.
                    </p>
                  )}
                  {c.followUp && <p className="mt-3 text-[14px] text-body">Follow-up previsto il {formatDate(c.followUp)}.</p>}
                </div>
                <div className="flex flex-col gap-2">
                  {docs.map((r) => (
                    <div key={r.id} className="flex items-center justify-between gap-3 border-[1.5px] border-ink px-3.5 py-2.5">
                      <span className="text-[14px]">
                        <span className="block font-medium">{r.kind}</span>
                        <span className="text-[12px] text-body">{formatDate(r.date)}</span>
                      </span>
                      <DownloadLink id={r.id} label="PDF" variant="ghost" />
                    </div>
                  ))}
                  {!c.consentHR && (
                    <p className="flex items-start gap-2.5 border-[1.5px] border-dashed border-ink px-3.5 py-3 text-[14px] leading-snug">
                      <Icon d={icons.lock} className="mt-0.5 h-4 w-4 shrink-0" />
                      Card e piano di sviluppo sono della persona. Visibili all&apos;HR solo con il suo consenso scritto.
                    </p>
                  )}
                  {docs.length === 0 && c.consentHR && <p className="text-[14px] text-body">Nessun documento ancora.</p>}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <p className="mt-6 max-w-3xl text-[13px] leading-relaxed text-body">
        Prismia si usa per lo sviluppo, mai per decisioni retributive, di promozione o disciplinari. Le trascrizioni non lasciano mai il sistema.
      </p>
    </>
  );
}
