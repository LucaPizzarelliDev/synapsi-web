import type { ReactNode } from "react";
import { chimeriaCriteria, codeBg, codes, viseriaFactors, methodSteps, notWeDo, type Code } from "@/lib/site";
import { CodeTag, Container, DocFrame } from "./ui";

/* ---------- Trascritto annotato ---------- */

function Said({ code, children }: { code: Code; children: ReactNode }) {
  return <span className={`marker py-px ${codeBg[code]}`}>{children}</span>;
}

export function Transcript() {
  return (
    <DocFrame
      shadow
      title="Trascritto · Intervista 04"
      meta="00:12:41"
      caption={
        <span className="flex flex-wrap justify-between gap-2 font-mono text-[12px]">
          <span>Estratto illustrativo, anonimizzato</span>
          <span>Codifica rivista: ✓ psicologo</span>
        </span>
      }
    >
      <div
        className="grid grid-cols-[34px_1fr_52px] gap-x-3 gap-y-3.5 px-4.5 pb-2 pt-5.5 text-base leading-[1.75]"
        style={{ backgroundImage: "repeating-linear-gradient(transparent 0 27px, #ededed 27px 28px)" }}
      >
        <span className="font-mono text-[12px] text-body">INT</span>
        <span className="text-body">Mi racconta un momento recente in cui il carico è aumentato?</span>
        <span />
        <span className="font-mono text-[12px]">P.</span>
        <span>
          Quando il collega si è ammalato <Said code="OB">ho coperto anche il suo turno, per tre settimane.</Said>{" "}
          <Said code="PS">Non volevo che il reparto si fermasse per colpa mia.</Said> Alla fine{" "}
          <Said code="IP">nessuno se n&apos;è accorto.</Said>
        </span>
        <span className="flex flex-col gap-1.5">
          <CodeTag code="OB" className="text-center" />
          <CodeTag code="PS" className="text-center" />
          <CodeTag code="IP" className="text-center" />
        </span>
        <span className="font-mono text-[12px] text-body">INT</span>
        <span className="text-body">E come l&apos;ha gestito?</span>
        <span />
        <span className="font-mono text-[12px]">P.</span>
        <span>
          <Said code="AC">Ho riorganizzato i cambi con due operatori più giovani</Said>, ma non l&apos;ho detto al responsabile.
        </span>
        <span className="flex flex-col">
          <CodeTag code="AC" className="text-center" />
        </span>
      </div>
    </DocFrame>
  );
}

/* ---------- Legenda dei codici ---------- */

export function CodeLegend() {
  return (
    <section className="border-y-[1.5px] border-ink">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4">
        {codes.map((c) => (
          <div key={c.code} className="flex items-start gap-3.5 py-5.5 pr-5">
            <CodeTag code={c.code} className="text-[13px]" />
            <p className="text-[15px] leading-normal">
              <strong>{c.name}.</strong> {c.text}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}

/* ---------- Scouting Card ---------- */

const C = 160;
const R = 120;
function pt(i: number, score: number) {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / 7;
  const r = (score / 5) * R;
  return `${(C + r * Math.cos(a)).toFixed(1)},${(C + r * Math.sin(a)).toFixed(1)}`;
}
const poly = (s: readonly number[]) => s.map((v, i) => pt(i, v)).join(" ");

// Profilo illustrativo, non un caso reale
const ROLE = [4, 4, 4, 3, 4, 4, 4];
const PERSON = [4, 5, 3, 4, 2, 3, 4];

export function ScoutingCard({
  meta = "Capo reparto · esempio",
  person = PERSON,
  role = ROLE,
  verdict = "Funziona nel ruolo, a condizione che il carico sulle risorse venga redistribuito. Nessun punteggio complessivo.",
}: {
  meta?: string;
  person?: readonly number[];
  role?: readonly number[];
  verdict?: string;
}) {
  const low = person.indexOf(Math.min(...person));
  return (
    <DocFrame
      title="Viseria · Scouting Card"
      meta={meta}
      caption={
        <p className="text-[17px] leading-normal">
          <span className="mb-1.5 block font-mono text-[12px]">VERDETTO</span>
          {verdict}
        </p>
      }
    >
      <div className="flex flex-wrap items-center gap-5 px-4.5 py-6">
        <svg viewBox="0 0 320 320" className="max-w-[280px] flex-[1_1_220px]" role="img" aria-label="Radar a sette fattori: profilo della persona, pieno, sovrapposto al profilo richiesto dal ruolo, tratteggiato">
          <polygon points={poly(Array(7).fill(5))} fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />
          <polygon points={poly(Array(7).fill(3))} fill="none" stroke="var(--color-ink)" strokeOpacity="0.2" />
          <polygon points={poly(person)} fill="var(--color-ob)" stroke="var(--color-ink)" strokeWidth="2" strokeLinejoin="round" />
          <polygon points={poly(role)} fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeDasharray="6 5" />
          {viseriaFactors.map((f, i) => {
            const [x, y] = pt(i, 5.9).split(",").map(Number);
            return (
              <text key={f.id} x={x} y={y + 4} textAnchor="middle" fontSize="12" fontFamily="var(--font-spline)">
                {f.id}
              </text>
            );
          })}
        </svg>
        <ol className="flex flex-[1_1_180px] flex-col gap-1.5 text-sm leading-snug">
          {viseriaFactors.map((f, i) => (
            <li key={f.id}>
              <span className={i === low ? "marker bg-ip" : ""}>
                <span className="font-mono">{f.id}</span> {f.name}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </DocFrame>
  );
}

/* ---------- Mappa Chimeria ---------- */

type State = "T" | "A" | "S" | "N";
const stateStyle: Record<State, { cls: string; label: string }> = {
  T: { cls: "bg-ink text-paper", label: "Tenuta" },
  A: { cls: "bg-ob frame", label: "Attenzione" },
  S: { cls: "bg-ip frame", label: "Sviluppo" },
  N: { cls: "border border-dashed border-ink text-body", label: "Non rilevata" },
};

// Mappa illustrativa, non un caso reale
const MAP: [string, string][] = [
  ["Direzione", "TTATTATTSTAT"],
  ["Produzione", "ATSATTSATTAA"],
  ["Amministrazione", "TTTATTATTNAT"],
  ["Commerciale", "TATSAATTATSN"],
  ["Logistica", "ASSATAATSATA"],
];

export function OrgMap() {
  return (
    <DocFrame
      title="Mappa · reparti × 12 aree"
      meta="Esempio"
      caption={
        <span className="flex flex-wrap gap-4.5 text-sm">
          {(Object.keys(stateStyle) as State[]).map((s) => (
            <span key={s} className="flex items-center gap-2">
              <span className={`h-4.5 w-4.5 ${stateStyle[s].cls}`} aria-hidden="true" />
              {stateStyle[s].label}
            </span>
          ))}
        </span>
      }
    >
      <div className="overflow-x-auto px-4.5 py-5">
        <table className="w-full min-w-[480px] border-separate border-spacing-1 text-center">
          <caption className="sr-only">Esempio di mappa: cinque reparti per dodici aree, ogni cella in tenuta, attenzione, sviluppo o non rilevata</caption>
          <thead>
            <tr>
              <th scope="col" className="w-28" />
              {chimeriaCriteria.map((c, i) => (
                <th key={c} scope="col" title={c} className="font-mono text-[11px] font-normal">
                  {String(i + 1).padStart(2, "0")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MAP.map(([name, row]) => (
              <tr key={name}>
                <th scope="row" className="pr-2 text-left text-[13px] font-normal">
                  {name}
                </th>
                {(row.split("") as State[]).map((s, i) => (
                  <td key={i} className={`h-7 font-mono text-[10px] ${stateStyle[s].cls}`}>
                    <span aria-hidden="true">{s}</span>
                    <span className="sr-only">{stateStyle[s].label}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DocFrame>
  );
}

/* ---------- Schema campo (Sport) ---------- */

export function PitchDiagram({ className = "" }: { className?: string }) {
  const tags = [
    { x: 48, y: 150, w: 112, label: "DIREZIONE", fill: "var(--color-ob)" },
    { x: 240, y: 196, w: 128, label: "STAFF TECNICO", fill: "var(--color-ps)" },
    { x: 44, y: 360, w: 120, label: "AREA MEDICA", fill: "var(--color-ac)" },
    { x: 226, y: 400, w: 148, label: "SETT. GIOVANILE", fill: "var(--color-ip)" },
  ];
  return (
    <svg viewBox="0 0 400 560" className={className} role="img" aria-label="Schema di un campo da calcio: direzione, staff tecnico, area medica e settore giovanile collegati fra loro">
      <g fill="none" stroke="#fff" strokeWidth="1.5">
        <rect x="20" y="20" width="360" height="520" />
        <line x1="20" y1="280" x2="380" y2="280" />
        <circle cx="200" cy="280" r="56" />
        <rect x="110" y="20" width="180" height="80" />
        <rect x="110" y="460" width="180" height="80" />
      </g>
      <g stroke="#fff" strokeWidth="1" strokeDasharray="4 4" fill="none">
        <path d="M160 163 L240 209" />
        <path d="M104 176 L104 360" />
        <path d="M164 373 L226 413" />
        <path d="M300 222 L300 400" />
      </g>
      <g fontFamily="var(--font-spline)" fontSize="12">
        {tags.map((t) => (
          <g key={t.label}>
            <rect x={t.x} y={t.y} width={t.w} height="26" fill={t.fill} />
            <text x={t.x + 8} y={t.y + 17} fill="#111">
              {t.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ---------- Metodo in 4 passaggi ---------- */

export function MethodSteps() {
  return (
    <ol className="frame grid gap-[1.5px] bg-ink sm:grid-cols-2 lg:grid-cols-4">
      {methodSteps.map((s, i) => {
        const last = i === methodSteps.length - 1;
        return (
          <li key={s.n} className={`flex flex-col gap-3 px-6 py-7 ${last ? "bg-ob" : "bg-paper"}`}>
            <span className="font-mono text-[12px] uppercase">
              {s.n} · {s.who}
            </span>
            <h3 className="display text-[26px] font-bold tracking-[-0.02em]">{s.title}</h3>
            {s.title === "Codifica" && (
              <span className="flex flex-wrap gap-1">
                {codes.map((c) => (
                  <CodeTag key={c.code} code={c.code} />
                ))}
              </span>
            )}
            <p className={`text-[15px] leading-relaxed ${last ? "" : "text-body"}`}>{s.text}</p>
          </li>
        );
      })}
    </ol>
  );
}

/* ---------- Cosa non facciamo (barrato) ---------- */

export function NotWeDoList() {
  return (
    <ul className="display text-[clamp(1.6rem,2.6vw,2.4rem)] font-bold leading-[1.2] tracking-[-0.02em]" style={{ fontStretch: "105%" }}>
      {notWeDo.map((n, i) => (
        <li
          key={n.what}
          className={`flex items-baseline justify-between gap-4 border-t-[1.5px] border-ink py-3.5 ${i === notWeDo.length - 1 ? "border-b-[1.5px]" : ""}`}
        >
          <s className="decoration-ip decoration-[3px]">
            <span className="sr-only">Non facciamo: </span>
            {n.what}
          </s>
          <span className="shrink-0 font-mono text-[13px] font-normal tracking-normal">{n.why}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Dal colloquio all'evidenza (hero) ---------- */

function FlowStep({ n, title, meta, last = false, children }: { n: string; title: string; meta: string; last?: boolean; children: ReactNode }) {
  return (
    <li className="relative grid grid-cols-[36px_1fr] gap-x-4">
      <span className="relative z-10 flex h-9 w-9 items-center justify-center bg-ink font-mono text-[13px] text-paper">{n}</span>
      {!last && <span aria-hidden="true" className="absolute bottom-0 left-[17px] top-9 w-[1.5px] bg-ink" />}
      <div className={last ? "" : "pb-6"}>
        <div className="flex min-h-9 flex-wrap items-baseline justify-between gap-x-3">
          <h3 className="display pt-1.5 text-[18px]">{title}</h3>
          <span className="font-mono text-[11px] uppercase tracking-[0.06em]">{meta}</span>
        </div>
        <div className="mt-2.5">{children}</div>
      </div>
    </li>
  );
}

export function EvidenceFlow() {
  return (
    <DocFrame
      title="Dal colloquio al report"
      meta="Esempio"
      caption={
        <span className="flex flex-wrap justify-between gap-2 font-mono text-[12px]">
          <span>Estratto illustrativo, anonimizzato</span>
          <span>Firma: ✓ psicologo</span>
        </span>
      }
    >
      <ol className="px-4.5 pb-6 pt-5">
        <FlowStep n="1" title="Lo psicologo ascolta un episodio" meta="Colloquio · 45 min">
          <blockquote className="border-l-[3px] border-ink bg-paper-2 px-4 py-3 text-[15px] leading-[1.75]">
            «Quando il collega si è ammalato <Said code="OB">ho coperto anche il suo turno, per tre settimane.</Said>{" "}
            <Said code="PS">Non volevo che il reparto si fermasse.</Said> Alla fine <Said code="IP">nessuno se n&apos;è accorto.</Said>»
          </blockquote>
        </FlowStep>
        <FlowStep n="2" title="L'AI trascrive e codifica ogni frase" meta="Codifica">
          <ul className="flex flex-col gap-1.5 text-[14px] leading-snug">
            {(
              [
                ["OB", "Fatto", "Ha coperto un doppio turno per 3 settimane"],
                ["PS", "Schema", "Si fa carico per non fermare il reparto"],
                ["IP", "Ipotesi", "Il sovraccarico non viene segnalato"],
              ] as [Code, string, string][]
            ).map(([c, k, v]) => (
              <li key={c} className="flex items-start gap-2.5">
                <CodeTag code={c} className="mt-0.5 shrink-0 self-start" />
                <span>
                  <span className="font-mono text-[12px] uppercase">{k}</span> {v}
                </span>
              </li>
            ))}
          </ul>
        </FlowStep>
        <FlowStep n="3" title="Il report: un'evidenza, una firma" meta="Restituzione" last>
          <div className="frame bg-ob px-4 py-3.5">
            <div className="flex items-baseline justify-between gap-3 text-[14px]">
              <span className="font-medium">F5 · Risorse – Quantità</span>
              <span className="font-mono text-[12px]">2 / 5 · ruolo 4</span>
            </div>
            <div className="mt-2 flex gap-1" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className={`h-2 flex-1 ${s <= 2 ? "bg-ink" : "border border-ink"}`} />
              ))}
            </div>
            <p className="mt-3 text-[14px] leading-snug">
              Funziona nel ruolo se il carico viene redistribuito. <span className="font-mono text-[12px]">Fonte: intervista 04, min. 12</span>
            </p>
          </div>
        </FlowStep>
      </ol>
    </DocFrame>
  );
}

/* ---------- Hero: una frase del colloquio diventa una conclusione firmata, poi una decisione ---------- */

export function HeroDiagram() {
  return (
    <figure
      className="m-0"
      aria-label="Esempio: una frase raccontata in colloquio diventa una conclusione del report, con la sua prova e la firma dello psicologo. Su quella base decidete voi."
    >
      <div className="frame mr-[12%] bg-paper">
        <div className="flex justify-between gap-3 border-b-[1.5px] border-ink px-4.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.06em]">
          <span>Ascoltiamo · colloquio</span>
          <span>Capo reparto · 45 min</span>
        </div>
        <blockquote className="px-4.5 py-4.5 text-[16px] leading-[1.75]">
          «Quando il collega si è ammalato <Said code="OB">ho coperto anche il suo turno, per tre settimane.</Said>{" "}
          <Said code="PS">Non volevo che il reparto si fermasse.</Said>»
        </blockquote>
      </div>

      <div className="flex items-stretch gap-3 py-1 pl-[calc(44%-1px)]" aria-hidden="true">
        <span className="w-[1.5px] bg-ink" />
        <span className="py-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.06em]">
          lo psicologo legge
          <br />
          l&apos;AI trascrive e organizza
        </span>
      </div>

      <div className="frame ml-[12%] bg-ob">
        <div className="flex justify-between gap-3 border-b-[1.5px] border-ink px-4.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.06em]">
          <span>Restituiamo · report</span>
          <span>✓ firmato</span>
        </div>
        <div className="px-4.5 py-4.5">
          <p className="display text-[22px] leading-[1.2]">Funziona nel ruolo, se il carico viene redistribuito.</p>
          <p className="mt-3 flex flex-wrap justify-between gap-2 font-mono text-[11px]">
            <span>Prova: colloquio, min. 12</span>
            <span>Dott. A. Gilli, psicologo</span>
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 pl-[12%] text-[13px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.06em]">Per decidere</span>
        {["chi scegliere", "chi far crescere", "dove intervenire"].map((t) => (
          <span key={t} className="bg-primary px-2.5 py-1 font-medium text-paper">
            {t}
          </span>
        ))}
      </div>
    </figure>
  );
}
