import Link from "next/link";
import { Icon, icons } from "@/components/portal/icons";
import { ActionLink, Card, DownloadLink, Initials, PageHeader, StageBadge, StageTrack, Stat } from "@/components/portal/ui";
import { activity, assessments, checkups, client, formatDate, psychologists, reports } from "@/lib/portal";

export default function PanoramicaPage() {
  const active = assessments.filter((a) => a.stage !== "Consegnato");
  const delivered = assessments.filter((a) => a.stage === "Consegnato");
  const interviewsDone = assessments.flatMap((a) => a.interviews).filter((i) => i.done).length;
  const next = assessments
    .flatMap((a) => a.interviews.filter((i) => !i.done).map((i) => ({ ...i, person: a.name })))
    .sort((a, b) => a.date.localeCompare(b.date))[0];
  const latest = [...reports].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
  const checkup = checkups[0];

  return (
    <>
      <PageHeader
        eyebrow={client.contract}
        title="Panoramica"
        lead={`Lo stato dei lavori per ${client.name}: assessment in corso, report consegnati e prossimi colloqui.`}
        actions={<ActionLink href="/portale/report" variant="solid">Tutti i report</ActionLink>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat label="Assessment in corso" value={active.length} note={`${delivered.length} già consegnati`} />
        <Stat label="Report disponibili" value={reports.length} note="Firmati dallo psicologo" />
        <Stat label="Colloqui svolti" value={interviewsDone} note="Dall'inizio del contratto" />
        <Stat label="Prossimo colloquio" value={next ? formatDate(next.date).replace(/ \d{4}$/, "") : "N/D"} note={next?.person} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Card title="Assessment in corso" action={<Link href="/portale/persone" className="text-[14px] underline underline-offset-4 hover:bg-ob">Vedi tutti</Link>} flush>
          <ul className="divide-y divide-line">
            {active.map((a) => (
              <li key={a.id}>
                <Link href={`/portale/persone/${a.id}`} className="grid gap-3 px-5 py-4 transition-colors hover:bg-paper-2 sm:grid-cols-[1fr_200px] sm:items-center">
                  <span className="flex items-center gap-3">
                    <Initials name={a.name} />
                    <span>
                      <span className="block text-[15px] font-medium">{a.name}</span>
                      <span className="block text-[13px] text-body">
                        {a.role} · {a.department}
                      </span>
                    </span>
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="flex items-center justify-between gap-2">
                      <StageBadge stage={a.stage} />
                      <span className="text-[12px] text-body">{psychologists[a.psychologist].short}</span>
                    </span>
                    <StageTrack stage={a.stage} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Ultimi documenti" action={<Link href="/portale/report" className="text-[14px] underline underline-offset-4 hover:bg-ob">Archivio</Link>} flush>
          <ul className="divide-y divide-line">
            {latest.map((r) => (
              <li key={r.id} className="flex items-center gap-3 px-5 py-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-ob text-accent">
                  <Icon d={icons.doc} />
                </span>
                <Link href={`/portale/report/${r.id}`} className="min-w-0 flex-1 hover:underline">
                  <span className="block truncate text-[14px] font-medium">{r.title}</span>
                  <span className="block text-[12px] text-body">
                    {r.product} · {r.kind} · {formatDate(r.date)}
                  </span>
                </Link>
                <DownloadLink id={r.id} label="PDF" variant="ghost" />
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_1.5fr]">
        <Card title="Check-up organizzativo">
          <p className="text-[13px] text-body">Ultimo consegnato</p>
          <p className="mt-0.5 text-[17px] font-medium">{checkup.label}</p>
          <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              ["Reparti", checkup.departments],
              ["Colloqui", checkup.interviews],
              ["Criteri", 12],
            ].map(([k, v]) => (
              <div key={k} className="bg-paper-2 py-3">
                <dt className="text-[12px] text-body">{k}</dt>
                <dd className="display text-[22px]">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex flex-wrap gap-2">
            <ActionLink href="/portale/organizzazione">Apri la mappa</ActionLink>
            <DownloadLink id={checkup.id} />
          </div>
        </Card>

        <Card title="Attività recente">
          <ol className="relative flex flex-col gap-4 border-l-[1.5px] border-ink pl-5">
            {activity.map((e) => (
              <li key={e.date + e.text} className="relative">
                <span className="absolute -left-[25px] top-1.5 h-2 w-2 bg-ink ring-4 ring-paper" aria-hidden="true" />
                <p className="text-[14px]">{e.text}</p>
                <p className="text-[12px] text-body">
                  {formatDate(e.date)} · {e.who}
                </p>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </>
  );
}
