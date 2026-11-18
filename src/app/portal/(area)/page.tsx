import Link from "next/link";
import { Icon, icons } from "@/components/portal/icons";
import { ActionLink, Card, CardLink, DownloadLink, Initials, PageHeader, StageBadge, StageTrack, Stat } from "@/components/portal/ui";
import { DotGrid } from "@/components/ui";
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
        title={`Ciao, ${client.user.name.split(" ")[0]}`}
        lead={`Lo stato dei lavori per ${client.name}: assessment in corso, report consegnati e prossimi colloqui.`}
        actions={<ActionLink href="/portal/reports" variant="solid">Tutti i report</ActionLink>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1.45fr_1fr_1fr_1fr]">
        {/* In evidenza: la prossima cosa che succede */}
        <section aria-label="Prossimo colloquio" className="relative isolate overflow-hidden rounded-2xl bg-night p-5 text-white sm:col-span-2 xl:col-span-1">
          <DotGrid className="text-white/[0.07]" />
          <p className="flex items-center gap-2 text-[13px] font-medium text-white/70">
            <Icon d={icons.clock} className="h-4 w-4" />
            Prossimo colloquio
          </p>
          {next ? (
            <>
              <p className="display mt-4 text-[34px] leading-none">{formatDate(next.date).replace(/ \d{4}$/, "")}</p>
              <p className="mt-3 text-[15px] font-medium">{next.person}</p>
              <p className="text-[13px] text-white/70">
                {next.who !== next.person && `${next.who} · `}
                {next.minutes} min
              </p>
            </>
          ) : (
            <p className="mt-4 text-[15px] text-white/80">Nessun colloquio in calendario.</p>
          )}
        </section>
        <Stat tone="bg-ps" icon={icons.people} label="Assessment in corso" value={active.length} note={`${delivered.length} già consegnati`} />
        <Stat tone="bg-ac" icon={icons.doc} label="Report disponibili" value={reports.length} note="Firmati dallo psicologo" />
        <Stat tone="bg-ob" icon={icons.check} label="Colloqui svolti" value={interviewsDone} note="Dall'inizio del contratto" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Card title="Assessment in corso" action={<CardLink href="/portal/people">Vedi tutti</CardLink>} flush>
          <ul className="divide-y divide-line">
            {active.map((a) => (
              <li key={a.id}>
                <Link href={`/portal/people/${a.id}`} className="grid gap-3 px-5 py-4 transition-colors hover:bg-cream sm:grid-cols-[1fr_200px] sm:items-center">
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

        <Card title="Ultimi documenti" action={<CardLink href="/portal/reports">Archivio</CardLink>} flush>
          <ul className="divide-y divide-line">
            {latest.map((r) => (
              <li key={r.id} className="flex items-center gap-3 px-5 py-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-lavender text-violet">
                  <Icon d={icons.doc} />
                </span>
                <Link href={`/portal/reports/${r.id}`} className="min-w-0 flex-1 hover:text-violet">
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
          <p className="display mt-0.5 text-[20px]">{checkup.label}</p>
          <dl className="mt-4 grid grid-cols-3 gap-3">
            {[
              ["Reparti", checkup.departments, "bg-ob"],
              ["Colloqui", checkup.interviews, "bg-ps"],
              ["Criteri", 12, "bg-ac"],
            ].map(([k, v, bg]) => (
              <div key={k} className={`rounded-xl p-3.5 ${bg}`}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/70">{k}</dt>
                <dd className="display mt-3 text-[32px] leading-none">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex flex-wrap gap-2">
            <ActionLink href="/portal/organization">Apri la mappa</ActionLink>
            <DownloadLink id={checkup.id} />
          </div>
        </Card>

        <Card title="Attività recente">
          <ol className="relative flex flex-col gap-4 border-l border-line pl-5">
            {activity.map((e) => (
              <li key={e.date + e.text} className="relative">
                <span className="absolute -left-[26px] top-1.5 h-2 w-2 rounded-full bg-violet ring-4 ring-white" aria-hidden="true" />
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
