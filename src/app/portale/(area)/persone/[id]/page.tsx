import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScoutingCard } from "@/components/graphics";
import { Icon, icons } from "@/components/portal/icons";
import { Card, DownloadLink, PageHeader, StageBadge, StageTrack } from "@/components/portal/ui";
import { CodeTag } from "@/components/ui";
import { assessments, formatDate, psychologists, reports } from "@/lib/portal";
import { viseriaFactors } from "@/lib/site";

export function generateStaticParams() {
  return assessments.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: PageProps<"/portale/persone/[id]">): Promise<Metadata> {
  const { id } = await params;
  const a = assessments.find((x) => x.id === id);
  return { title: a ? a.name : "Persona" };
}

const nextStep: Record<string, string> = {
  Pianificato: "I colloqui sono in calendario. Vi avviseremo quando inizia la raccolta.",
  Colloqui: "Stiamo raccogliendo gli episodi con la persona e con chi la vede lavorare.",
  Codifica: "Le interviste sono trascritte; ogni frase viene codificata e collegata ai sette fattori.",
  Revisione: "Lo psicologo responsabile sta verificando la codifica e scrivendo il verdetto.",
};

export default async function PersonaPage({ params }: PageProps<"/portale/persone/[id]">) {
  const { id } = await params;
  const a = assessments.find((x) => x.id === id);
  if (!a) notFound();
  const report = reports.find((r) => r.assessmentId === a.id);
  const delivered = a.stage === "Consegnato" && a.scores;

  return (
    <>
      <Link href="/portale/persone" className="inline-flex items-center gap-1.5 text-[14px] text-body hover:text-ink">
        <span aria-hidden="true">←</span> Persone
      </Link>
      <div className="mt-4">
        <PageHeader
          eyebrow={`Viseria · ${a.department}`}
          title={a.name}
          lead={`${a.role}. Psicologo responsabile: ${psychologists[a.psychologist].name}.`}
          actions={report && <DownloadLink id={report.id} variant="solid" label="Scarica la Scouting Card" />}
        />
      </div>

      <Card className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
          <div className="flex items-center gap-3">
            <StageBadge stage={a.stage} />
            <span className="text-[14px] text-body">
              Avviato il {formatDate(a.started)}
              {a.delivered && ` · consegnato il ${formatDate(a.delivered)}`}
            </span>
          </div>
          <span className="flex flex-wrap items-center gap-4 text-[14px]">
            {a.profile && (
              <span>
                Assetto attuale prevalentemente <strong className="font-semibold">{a.profile}</strong>
              </span>
            )}
            {a.vgi && (
              <span className="flex items-center gap-2 font-mono text-[12px] uppercase">
                <span className={`h-3 w-3 ${a.vgi >= 75 ? "bg-ac" : a.vgi >= 60 ? "bg-ob" : "bg-ip"} border border-ink`} aria-hidden="true" />
                Validità del colloquio {a.vgi}/100
              </span>
            )}
          </span>
        </div>
        <StageTrack stage={a.stage} labels />
        {!delivered && <p className="mt-5 bg-paper-2 px-4 py-3 text-[14px] leading-relaxed">{nextStep[a.stage]}</p>}
      </Card>

      {delivered && a.scores ? (
        <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
          <ScoutingCard meta={`${a.role} · ${formatDate(a.delivered!)}`} person={a.scores} role={a.roleScores} verdict={a.verdict} />
          <Card title="Fattori: persona e richiesto" flush>
            <table className="w-full text-[14px]">
              <caption className="sr-only">Punteggio della persona e profilo richiesto dal ruolo per ciascuno dei sette fattori</caption>
              <thead className="text-[12px] uppercase tracking-[0.06em] text-body">
                <tr className="border-b-[1.5px] border-ink">
                  <th scope="col" className="px-5 py-2.5 text-left font-medium">Fattore</th>
                  <th scope="col" className="px-3 py-2.5 text-right font-medium">Persona</th>
                  <th scope="col" className="px-3 py-2.5 text-right font-medium">Richiesto</th>
                  <th scope="col" className="px-5 py-2.5 text-right font-medium">Confidenza</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {viseriaFactors.map((f, i) => {
                  const gap = a.scores![i] - a.roleScores[i];
                  return (
                    <tr key={f.id}>
                      <th scope="row" className="px-5 py-2.5 text-left font-normal">
                        <span className="font-mono text-[12px] text-body">{f.id}</span> {f.name}
                      </th>
                      <td className={`px-3 py-2.5 text-right font-mono ${gap < 0 ? "font-medium text-[#b54708]" : ""}`}>{a.scores![i]} / 5</td>
                      <td className="px-3 py-2.5 text-right font-mono text-body">{a.roleScores[i]}</td>
                      <td className="px-5 py-2.5 text-right text-[13px] text-body">{a.confidence?.[i]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="border-t-[1.5px] border-ink px-5 py-3 text-[13px] text-body">In arancio i fattori sotto il profilo richiesto dal ruolo. Lettura del funzionamento attuale in questo contesto: non è un test, non è una diagnosi, non è una previsione.</p>
          </Card>
        </div>
      ) : null}

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        {a.evidence ? (
          <Card title="Evidenze principali" flush>
            <ul className="divide-y divide-line">
              {a.evidence.map((e) => (
                <li key={e.text} className="flex gap-3 px-5 py-3.5">
                  <CodeTag code={e.code} className="mt-0.5 shrink-0 self-start" />
                  <div>
                    <p className="text-[14px] leading-snug">{e.text}</p>
                    <p className="mt-1 text-[12px] text-body">
                      {e.factor} · {e.source}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        ) : (
          <Card title="Evidenze principali">
            <p className="flex items-center gap-2.5 text-[14px] text-body">
              <Icon d={icons.lock} className="h-4 w-4" />
              Visibili dopo la firma dello psicologo.
            </p>
          </Card>
        )}

        <Card title="Colloqui" flush>
          <ul className="divide-y divide-line">
            {a.interviews.map((i) => (
              <li key={i.who} className="flex items-start gap-3 px-5 py-3.5">
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center ${i.done ? "bg-ac" : "bg-paper-2 text-body"}`}>
                  <Icon d={i.done ? icons.check : icons.clock} className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-[14px] font-medium">{i.who}</p>
                  <p className="text-[12px] text-body">
                    {formatDate(i.date)} · {i.done ? `${i.minutes} min` : `previsto, ${i.minutes} min`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
