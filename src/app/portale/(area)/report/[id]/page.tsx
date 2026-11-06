import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { OrgMap, ScoutingCard } from "@/components/graphics";
import { Logo } from "@/components/Logo";
import { PrintButton } from "@/components/portal/PrintButton";
import { CodeTag } from "@/components/ui";
import { assessments, client, formatDate, psychologists, reports } from "@/lib/portal";
import { viseriaFactors } from "@/lib/site";

export function generateStaticParams() {
  return reports.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: PageProps<"/portale/report/[id]">): Promise<Metadata> {
  const { id } = await params;
  const r = reports.find((x) => x.id === id);
  return { title: r ? `${r.id} · ${r.title}` : "Documento" };
}

export default async function DocumentoPage({ params }: PageProps<"/portale/report/[id]">) {
  const { id } = await params;
  const r = reports.find((x) => x.id === id);
  if (!r) notFound();
  const a = assessments.find((x) => x.id === r.assessmentId);
  const signer = psychologists[r.signedBy];

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 print:hidden">
        <Link href="/portale/report" className="inline-flex items-center gap-1.5 text-[14px] text-body hover:text-ink">
          <span aria-hidden="true">←</span> Report e documenti
        </Link>
        <Suspense>
          <PrintButton />
        </Suspense>
      </div>

      <article className="mx-auto max-w-[860px] border-[1.5px] border-ink bg-paper print:max-w-none print:border-0">
        <header className="flex flex-wrap items-start justify-between gap-4 border-b-[1.5px] border-ink px-8 py-6 sm:px-12">
          <Logo />
          <dl className="grid grid-cols-[auto_auto] gap-x-4 gap-y-0.5 text-[12px]">
            <dt className="text-body">Documento</dt>
            <dd className="font-mono">{r.id}</dd>
            <dt className="text-body">Data</dt>
            <dd>{formatDate(r.date)}</dd>
            <dt className="text-body">Riservatezza</dt>
            <dd>Riservato · uso interno</dd>
          </dl>
        </header>

        <div className="px-8 py-10 sm:px-12">
          <p className="font-normal text-[12px] uppercase tracking-[0.06em]">
            {r.product} · {r.kind}
          </p>
          <h1 className="display mt-2 text-[32px]">{r.title}</h1>
          <p className="mt-2 text-[15px] text-body">
            {client.name} · {r.subject}
          </p>

          {a?.scores ? (
            <>
              <section className="mt-8 flex flex-wrap items-center gap-4 border-[1.5px] border-ink px-4 py-3 font-normal text-[12px] uppercase">
                <span>Persona: {r.title.split("· ")[1]}</span>
                <span>Assessor: {signer.short}</span>
                {a.vgi && (
                  <span className="flex items-center gap-2">
                    <span className={`h-3 w-3 border border-ink ${a.vgi >= 75 ? "bg-ac" : a.vgi >= 60 ? "bg-ob" : "bg-ip"}`} aria-hidden="true" />
                    Validità {a.vgi}/100
                  </span>
                )}
              </section>
              <section className="mt-8 break-inside-avoid">
                <ScoutingCard meta={`${a.role} · ${formatDate(a.delivered!)}`} person={a.scores} role={a.roleScores} verdict={a.verdict} />
              </section>
              <section className="mt-8 break-inside-avoid">
                <h2 className="text-[17px] font-semibold">Fattori</h2>
                <table className="mt-3 w-full text-[14px]">
                  <thead className="font-normal text-[11px] uppercase">
                    <tr className="border-b-[1.5px] border-ink">
                      <th scope="col" className="py-2 text-left font-normal">Fattore</th>
                      <th scope="col" className="py-2 text-right font-normal">Punteggio</th>
                      <th scope="col" className="py-2 text-right font-normal">Richiesto</th>
                      <th scope="col" className="py-2 text-right font-normal">Confidenza</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {viseriaFactors.map((f, i) => (
                      <tr key={f.id}>
                        <th scope="row" className="py-2 text-left font-normal">
                          <span className="font-mono text-[12px]">{f.id}</span> {f.name}
                        </th>
                        <td className="py-2 text-right font-mono">{a.scores![i]}</td>
                        <td className="py-2 text-right font-mono">{a.roleScores[i]}</td>
                        <td className="py-2 text-right">{a.confidence?.[i]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-3 text-[14px] text-body">Assetto attuale prevalentemente {a.profile}.</p>
              </section>
              {a.evidence && (
                <section className="mt-8 break-inside-avoid">
                  <h2 className="text-[17px] font-semibold">Evidenze chiave</h2>
                  <ul className="mt-3 divide-y divide-line border-y-[1.5px] border-ink">
                    {a.evidence.map((e) => (
                      <li key={e.text} className="flex gap-3 py-3">
                        <CodeTag code={e.code} className="mt-0.5 shrink-0 self-start" />
                        <p className="text-[14px] leading-snug">
                          {e.text} <span className="text-body">({e.factor} · {e.source})</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              <p className="mt-8 border-t-[1.5px] border-ink pt-3 font-mono text-[12px] leading-relaxed">
                Lettura del funzionamento attuale in questo contesto. Non è un test, non è una diagnosi, non è una previsione. Revisione dello psicologo:{" "}
                {signer.name}, {formatDate(r.date)}.
              </p>
            </>
          ) : r.kind === "Report committente" || r.kind === "Scheda reparto" || r.kind === "Fascicolo direzione" ? (
            <>
              <section className="mt-10">
                <h2 className="text-[17px] font-semibold">Il quadro in una pagina</h2>
                <p className="mt-2 text-[15px] leading-relaxed">
                  L’organizzazione tiene su struttura e sistemi. I punti di sviluppo si concentrano nei passaggi fra reparti e nel modo in cui le priorità
                  arrivano dalla direzione alle linee operative.
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-[1.5px] border-[1.5px] border-ink bg-ink sm:grid-cols-4">
                  {[
                    ["Indice di cultura", "62", "n = 18"],
                    ["Indice di clima", "54", "n = 18"],
                    ["Aree divise", "3", "su 12"],
                    ["Celle in sviluppo", "8", "su 60"],
                  ].map(([k, v, n]) => (
                    <div key={k} className="bg-paper p-3.5">
                      <dt className="font-normal text-[11px] uppercase">{k}</dt>
                      <dd className="display mt-1 text-[26px]">{v}</dd>
                      <dd className="font-mono text-[11px] text-body">{n}</dd>
                    </div>
                  ))}
                </dl>
              </section>
              <section className="mt-8 break-inside-avoid">
                <h2 className="mb-3 text-[17px] font-semibold">Mappa reparti × 12 aree</h2>
                <OrgMap />
              </section>
              <section className="mt-8">
                <h2 className="text-[17px] font-semibold">Le leve</h2>
                <ol className="mt-3 divide-y divide-line border-y-[1.5px] border-ink text-[14px]">
                  <li className="py-2.5"><span className="font-mono text-[12px]">01</span> Passaggi di consegna tra turni: uno strumento scritto condiviso fra produzione e logistica.</li>
                  <li className="py-2.5"><span className="font-mono text-[12px]">02</span> Priorità trimestrali comunicate una volta sola, uguali per tutti i reparti.</li>
                  <li className="py-2.5"><span className="font-mono text-[12px]">03</span> Deleghe in amministrazione, per non dipendere da due persone.</li>
                </ol>
                <p className="mt-4 text-[13px] text-body">
                  Registri: «Risulta da episodi» · «È percepito» · «La nostra lettura è». Ogni numero porta la sua base. Nessun nome, nessuna citazione
                  riconoscibile, nessun confronto con altre aziende.
                </p>
              </section>
            </>
          ) : r.kind === "Allegato HR" ? (
            <section className="mt-10">
              <h2 className="text-[17px] font-semibold">Allegato per l’HR · ciclo Prismia</h2>
              <dl className="mt-4 divide-y divide-line border-y-[1.5px] border-ink text-[14px]">
                {[
                  ["Interviste svolte", "6 su 8"],
                  ["Periodo di raccolta", "13–27 ottobre 2026"],
                  ["Fonti", "capo 1/1 · pari 2/3 · collaboratori 3/4"],
                  ["Soglia di anonimato", "rispettata (collaboratori ≥ 3)"],
                  ["Debrief con la persona", "fissato"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-body">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[14px] leading-relaxed">
                Questo allegato non contiene episodi né valutazioni. Card e piano di sviluppo sono della persona e arrivano all’HR solo con il suo consenso
                scritto.
              </p>
            </section>
          ) : r.kind === "Card Prismia" ? (
            <section className="mt-10">
              <h2 className="text-[17px] font-semibold">Colpo d’occhio</h2>
              <p className="mt-2 text-[15px] leading-relaxed">
                Decide con rapidità ed è visto come coerente fra ciò che dice e ciò che fa. Lo scarto più ampio è sul disaccordo: si racconta più aperto di
                come lo raccontano i collaboratori.
              </p>
              <dl className="mt-5 grid gap-[1.5px] border-[1.5px] border-ink bg-ink sm:grid-cols-2">
                {[
                  ["Accordo alto", "D1 Decidere · D5 Parola e coerenza", "bg-ac"],
                  ["Sovrastima", "D2 Reggere il disaccordo", "bg-ip"],
                  ["Sottostima", "D3 Far crescere e trattenere", "bg-ps"],
                  ["Accordo basso", "D4 Tenuta sotto pressione", "bg-ob"],
                ].map(([k, v, c]) => (
                  <div key={k} className={`${c} p-4`}>
                    <dt className="display text-[18px]">{k}</dt>
                    <dd className="mt-1 font-mono text-[12px]">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 font-mono text-[12px]">fonti raccolte: capo 1/1 · pari 3/3 · collaboratori 4/4 · condivisa con l’HR con consenso scritto</p>
            </section>
          ) : (
            <section className="mt-10">
              <h2 className="text-[17px] font-semibold">Contenuto</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-body">
                Documento di {r.pages} pagine. In questo ambiente di esempio è mostrata solo l’intestazione; il file originale sarà disponibile
                con l’attivazione dell’archivio.
              </p>
            </section>
          )}

          <footer className="mt-12 grid gap-6 border-t-[1.5px] border-ink pt-6 text-[14px] sm:grid-cols-2">
            <div>
              <p className="text-[12px] text-body">Firmato da</p>
              <p className="mt-1 font-medium">{signer.name}</p>
              <p className="text-body">Psicologo iscritto all’Albo · Synapsi Analytics</p>
            </div>
            <p className="text-[12px] leading-relaxed text-body">
              Le conclusioni descrivono un assetto temporaneo nel contesto indicato, non caratteristiche stabili della persona. Ogni affermazione rimanda a
              un episodio raccolto nei colloqui. Documento coperto da segreto professionale.
            </p>
          </footer>
        </div>
      </article>
    </>
  );
}
