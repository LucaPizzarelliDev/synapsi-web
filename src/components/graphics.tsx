import type { ReactNode } from "react";
import { graphics } from "@/content/graphics";
import { shared } from "@/content/shared";
import type { Locale } from "@/lib/i18n";
import { codeBg, type Code } from "@/lib/site";
import { Check, CodeTag, Container, DocFrame } from "./ui";

/* ---------- Trascritto annotato ---------- */

function Said({ code, children }: { code: Code; children: ReactNode }) {
  return <span className={`marker py-px text-ink ${codeBg[code]}`}>{children}</span>;
}

/** Bollino "rivisto/firmato" in salvia, come nel report d'esempio della home */
function Stamp({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-ac px-3 py-1 text-[12px] font-semibold text-ink">
      <Check />
      {children}
    </span>
  );
}

function Speaker({ children, strong = false }: { children: ReactNode; strong?: boolean }) {
  return (
    <span
      className={`mt-1 inline-flex h-6 items-center justify-center self-start rounded-full px-2 font-mono text-[11px] font-medium ${
        strong ? "bg-violet text-white" : "bg-cream-2 text-body"
      }`}
    >
      {children}
    </span>
  );
}

export function Transcript({ lang = "it" }: { lang?: Locale }) {
  const t = graphics[lang].transcript;
  const c = graphics[lang].check;
  return (
    <DocFrame
      title={t.title}
      meta="00:12:41"
      caption={
        <span className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-body">
          <span>{c.sample}</span>
          <Stamp>{c.reviewedByPsychologist}</Stamp>
        </span>
      }
    >
      <div className="grid grid-cols-[40px_1fr_44px] gap-x-3 gap-y-4 px-5 py-6 text-[16px] leading-[1.75]">
        <Speaker>{t.interviewer}</Speaker>
        <span className="text-body">{t.q1}</span>
        <span />
        <Speaker strong>{t.person}</Speaker>
        <span>
          {t.a1.lead}
          <Said code="OB">{t.a1.ob}</Said> <Said code="PS">{t.a1.ps}</Said>
          {t.a1.mid}
          <Said code="IP">{t.a1.ip}</Said>
        </span>
        <span className="mt-1 flex flex-col gap-1.5">
          <CodeTag code="OB" className="text-center" />
          <CodeTag code="PS" className="text-center" />
          <CodeTag code="IP" className="text-center" />
        </span>
        <Speaker>{t.interviewer}</Speaker>
        <span className="text-body">{t.q2}</span>
        <span />
        <Speaker strong>{t.person}</Speaker>
        <span>
          <Said code="AC">{t.a2.ac}</Said>
          {t.a2.tail}
        </span>
        <span className="mt-1 flex flex-col">
          <CodeTag code="AC" className="text-center" />
        </span>
      </div>
    </DocFrame>
  );
}

/* ---------- Legenda dei codici ---------- */

export function CodeLegend({ lang = "it" }: { lang?: Locale }) {
  const { codes } = shared[lang];
  return (
    <section className="py-6">
      <Container>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {codes.map((c) => (
            <li key={c.code} className={`flex items-start gap-3.5 rounded-2xl p-5 ${codeBg[c.code]}`}>
              <span className="shrink-0 rounded-full bg-white px-2.5 py-1 font-mono text-[13px] font-medium leading-none">{c.code}</span>
              <p className="text-[15px] leading-normal text-ink/80">
                <strong className="text-ink">{c.name}.</strong> {c.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- Scouting Card ---------- */

const C = 160;
const R = 118;
function xy(i: number, score: number) {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / 7;
  const r = (score / 5) * R;
  return [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
}
const pt = (i: number, score: number) => xy(i, score).map((n) => n.toFixed(1)).join(",");
const poly = (s: readonly number[]) => s.map((v, i) => pt(i, v)).join(" ");

// Profilo illustrativo, non un caso reale
const ROLE = [4, 4, 4, 3, 4, 4, 4];
const PERSON = [4, 5, 3, 4, 2, 3, 4];

export function ScoutingCard({
  lang = "it",
  meta,
  person = PERSON,
  role = ROLE,
  verdict,
}: {
  lang?: Locale;
  meta?: string;
  person?: readonly number[];
  role?: readonly number[];
  verdict?: string;
}) {
  const t = graphics[lang].scoutingCard;
  const { viseriaFactors } = shared[lang];
  const low = person.indexOf(Math.min(...person));
  return (
    <DocFrame
      title={t.title}
      meta={meta ?? t.meta}
      caption={
        <div className="rounded-2xl bg-cream px-4 py-3.5">
          <span className="block text-[13px] font-medium text-violet">{t.verdictLabel}</span>
          <p className="display mt-1.5 text-[19px] leading-snug">{verdict ?? t.verdict}</p>
        </div>
      }
    >
      <div className="flex flex-wrap items-center gap-6 px-5 py-6">
        <svg viewBox="0 0 320 320" className="max-w-[280px] flex-[1_1_220px]" role="img" aria-label={t.radarLabel}>
          {[1, 2, 3, 4, 5].map((l) => (
            <polygon
              key={l}
              points={poly(Array(7).fill(l))}
              fill={l === 5 ? "var(--color-cream)" : "none"}
              stroke="var(--color-line)"
              strokeWidth={l === 5 ? 1.5 : 1}
              strokeLinejoin="round"
            />
          ))}
          {viseriaFactors.map((f, i) => {
            const [x, y] = xy(i, 5);
            return <line key={f.id} x1={C} y1={C} x2={x} y2={y} stroke="var(--color-line)" />;
          })}
          <polygon
            points={poly(person)}
            fill="var(--color-violet)"
            fillOpacity="0.16"
            stroke="var(--color-violet)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <polygon
            points={poly(role)}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {person.map((v, i) => {
            const [x, y] = xy(i, v);
            return <circle key={i} cx={x} cy={y} r={i === low ? 5 : 3.5} fill={i === low ? "var(--color-ip)" : "var(--color-violet)"} stroke={i === low ? "var(--color-ink)" : "none"} strokeWidth="1.5" />;
          })}
          {viseriaFactors.map((f, i) => {
            const [x, y] = xy(i, 6);
            return (
              <g key={f.id}>
                <rect x={x - 14} y={y - 10} width="28" height="20" rx="10" fill={i === low ? "var(--color-ip)" : "var(--color-lavender)"} />
                <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="500" fontFamily="var(--font-spline)" fill="var(--color-ink)">
                  {f.id}
                </text>
              </g>
            );
          })}
        </svg>
        <ol className="flex flex-[1_1_180px] flex-col gap-1 text-[14px] leading-snug">
          {viseriaFactors.map((f, i) => (
            <li key={f.id} className={`flex items-start gap-2.5 rounded-xl px-2 py-1 ${i === low ? "bg-ip" : ""}`}>
              <span className="mt-px shrink-0 font-mono text-[12px] font-medium text-violet">{f.id}</span>
              <span>{f.name}</span>
            </li>
          ))}
        </ol>
      </div>
    </DocFrame>
  );
}

/* ---------- Mappa Chimeria ---------- */

type State = "T" | "A" | "S" | "N";
const stateStyle: Record<State, string> = {
  T: "bg-violet text-white",
  A: "bg-ob text-ink",
  S: "bg-ip text-ink",
  N: "border border-dashed border-ink/30 bg-white text-body",
};

// Mappa illustrativa, non un caso reale: una riga per reparto, nell'ordine di orgMap.departments
const MAP = ["TTATTATTSTAT", "ATSATTSATTAA", "TTTATTATTNAT", "TATSAATTATSN", "ASSATAATSATA"];

export function OrgMap({ lang = "it" }: { lang?: Locale }) {
  const t = graphics[lang].orgMap;
  const { chimeriaCriteria } = shared[lang];
  return (
    <DocFrame
      title={t.title}
      meta={t.meta}
      caption={
        <span className="flex flex-wrap gap-2 text-[13px]">
          {(Object.keys(stateStyle) as State[]).map((s) => (
            <span key={s} className="inline-flex items-center gap-2 rounded-full bg-cream py-1 pl-1.5 pr-3">
              <span className={`h-4 w-4 rounded-[5px] ${stateStyle[s]}`} aria-hidden="true" />
              {t.states[s]}
            </span>
          ))}
        </span>
      }
    >
      <div className="overflow-x-auto px-5 py-5">
        <table className="w-full min-w-[480px] border-separate border-spacing-1 text-center">
          <caption className="sr-only">{t.caption}</caption>
          <thead>
            <tr>
              <th scope="col" className="w-28" />
              {chimeriaCriteria.map((c, i) => (
                <th key={c} scope="col" title={c} className="pb-1 font-mono text-[11px] font-medium text-body">
                  {String(i + 1).padStart(2, "0")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MAP.map((row, r) => {
              const name = t.departments[r];
              return (
                <tr key={name}>
                  <th scope="row" className="pr-2 text-left text-[13px] font-medium">
                    {name}
                  </th>
                  {(row.split("") as State[]).map((s, i) => (
                    <td key={i} className={`h-8 rounded-lg font-mono text-[10px] ${stateStyle[s]}`}>
                      <span aria-hidden="true">{s}</span>
                      <span className="sr-only">{t.states[s]}</span>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </DocFrame>
  );
}

/* ---------- Schema campo (Sport) ---------- */

// Disegnato per fondo scuro: linee bianche sottili, etichette come chip nei colori dei codici
export function PitchDiagram({ lang = "it", className = "" }: { lang?: Locale; className?: string }) {
  const t = graphics[lang].pitch;
  const tags = [
    { x: 44, y: 148, w: 120, label: t.tags[0], fill: "var(--color-ob)" },
    { x: 232, y: 194, w: 136, label: t.tags[1], fill: "var(--color-ps)" },
    { x: 40, y: 358, w: 128, label: t.tags[2], fill: "var(--color-ac)" },
    { x: 218, y: 398, w: 158, label: t.tags[3], fill: "var(--color-ip)" },
  ];
  const nodes = [
    [164, 163, 232, 207],
    [104, 176, 104, 358],
    [168, 371, 218, 411],
    [300, 222, 300, 398],
  ];
  return (
    <svg viewBox="0 0 400 560" className={className} role="img" aria-label={t.label}>
      <rect x="12" y="12" width="376" height="536" rx="28" fill="var(--color-violet)" fillOpacity="0.35" />
      <g fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.5">
        <rect x="28" y="28" width="344" height="504" rx="16" />
        <line x1="28" y1="280" x2="372" y2="280" />
        <circle cx="200" cy="280" r="52" />
        <path d="M120 28 V88 Q120 100 132 100 H268 Q280 100 280 88 V28" />
        <path d="M120 532 V472 Q120 460 132 460 H268 Q280 460 280 472 V532" />
      </g>
      <circle cx="200" cy="280" r="3" fill="#fff" fillOpacity="0.7" />
      <g stroke="var(--color-lavender)" strokeWidth="1.5" strokeDasharray="2 6" strokeLinecap="round" fill="none">
        {nodes.map(([x1, y1, x2, y2]) => (
          <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <g fontFamily="var(--font-spline)" fontSize="12" fontWeight="500">
        {tags.map((g) => (
          <g key={g.label}>
            <rect x={g.x} y={g.y} width={g.w} height="28" rx="14" fill={g.fill} />
            <text x={g.x + g.w / 2} y={g.y + 18} textAnchor="middle" fill="var(--color-ink)">
              {g.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ---------- Metodo in 4 passaggi ---------- */

export function MethodSteps({ lang = "it" }: { lang?: Locale }) {
  const { methodSteps, codes } = shared[lang];
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {methodSteps.map((s, i) => {
        const last = i === methodSteps.length - 1;
        return (
          <li key={s.n} className={`flex flex-col gap-3 rounded-2xl p-7 ${last ? "bg-ob" : "bg-white"}`}>
            <div className="flex items-center justify-between gap-3">
              <span className="display flex h-12 w-12 items-center justify-center rounded-full bg-violet text-[18px] text-white">{s.n}</span>
              <span className={`rounded-full px-3 py-1 text-[13px] font-medium ${last ? "bg-white/70 text-ink" : "bg-lavender text-violet-dark"}`}>
                {s.who}
              </span>
            </div>
            <h3 className="display mt-3 text-[24px]">{s.title}</h3>
            {s.coding && (
              <span className="flex flex-wrap gap-1.5">
                {codes.map((c) => (
                  <CodeTag key={c.code} code={c.code} />
                ))}
              </span>
            )}
            <p className={`text-[15px] leading-relaxed ${last ? "text-ink/80" : "text-body"}`}>{s.text}</p>
          </li>
        );
      })}
    </ol>
  );
}

/* ---------- Cosa non facciamo (barrato) ---------- */

export function NotWeDoList({ lang = "it" }: { lang?: Locale }) {
  const { notWeDo, notWeDoPrefix } = shared[lang];
  return (
    <ul className="divide-y divide-line rounded-2xl bg-white px-6 sm:px-8">
      {notWeDo.map((n) => (
        <li key={n.what} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-4.5">
          <s className="display text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.2] decoration-violet/60 decoration-2">
            <span className="sr-only">{notWeDoPrefix}</span>
            {n.what}
          </s>
          <span className="shrink-0 rounded-full bg-ip px-3 py-1 text-[13px] text-ink">{n.why}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Dal colloquio all'evidenza ---------- */

function FlowStep({ n, title, meta, last = false, children }: { n: string; title: string; meta: string; last?: boolean; children: ReactNode }) {
  return (
    <li className="relative grid grid-cols-[36px_1fr] gap-x-4">
      <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-violet text-[14px] font-semibold text-white">{n}</span>
      {!last && <span aria-hidden="true" className="absolute bottom-1 left-[17px] top-11 w-0.5 rounded-full bg-lavender" />}
      <div className={last ? "" : "pb-7"}>
        <div className="flex min-h-9 flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <h3 className="display text-[18px]">{title}</h3>
          <span className="text-[13px] font-medium text-body">{meta}</span>
        </div>
        <div className="mt-3">{children}</div>
      </div>
    </li>
  );
}

function CodedList({ items, codes }: { items: readonly (readonly string[])[]; codes: Code[] }) {
  return (
    <ul className="flex flex-col gap-2.5 text-[15px] leading-snug">
      {items.map(([k, v], i) => (
        <li key={codes[i]} className="flex items-start gap-3">
          <span className={`shrink-0 rounded-lg px-2 py-0.5 text-[12px] font-semibold ${codeBg[codes[i]]}`}>{k}</span>
          <span>{v}</span>
        </li>
      ))}
    </ul>
  );
}

export function EvidenceFlow({ lang = "it" }: { lang?: Locale }) {
  const t = graphics[lang].evidenceFlow;
  const c = graphics[lang].check;
  const codes: Code[] = ["OB", "PS", "IP"];
  return (
    <DocFrame
      title={t.title}
      meta={t.meta}
      caption={
        <span className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-body">
          <span>{c.sample}</span>
          <Stamp>{c.signedByPsychologist}</Stamp>
        </span>
      }
    >
      <ol className="px-5 pb-6 pt-6">
        <FlowStep n="1" title={t.step1.title} meta={t.step1.meta}>
          <blockquote className="rounded-2xl bg-cream px-4 py-3.5 text-[15px] leading-[1.75]">
            {t.quote.lead}
            <Said code="OB">{t.quote.ob}</Said> <Said code="PS">{t.quote.ps}</Said>
            {t.quote.mid}
            <Said code="IP">{t.quote.ip}</Said>
            {t.quote.end}
          </blockquote>
        </FlowStep>
        <FlowStep n="2" title={t.step2.title} meta={t.step2.meta}>
          <CodedList items={t.coded} codes={codes} />
        </FlowStep>
        <FlowStep n="3" title={t.step3.title} meta={t.step3.meta} last>
          <div className="rounded-2xl bg-ob px-4 py-4">
            <div className="flex items-baseline justify-between gap-3 text-[14px]">
              <span className="font-semibold">{t.factor}</span>
              <span className="font-mono text-[12px]">{t.score}</span>
            </div>
            <div className="mt-2.5 flex gap-1" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className={`h-2 flex-1 rounded-full ${s <= 2 ? "bg-violet" : "bg-white/80"}`} />
              ))}
            </div>
            <p className="display mt-3.5 text-[18px] leading-snug">{t.finding}</p>
            <p className="mt-1.5 font-mono text-[12px] text-ink/70">{t.source}</p>
          </div>
        </FlowStep>
      </ol>
    </DocFrame>
  );
}

/* ---------- Hero: il flusso a step ---------- */

const card = "rounded-2xl bg-white p-5 shadow-[0_0_0_1px_rgba(28,26,24,0.06),0_16px_40px_-24px_rgba(34,26,66,0.3)]";

function CardHead({ children, aside }: { children: ReactNode; aside: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 text-[13px] font-medium text-body">
      <span>{children}</span>
      {aside}
    </div>
  );
}

// Connettore fra due stadi del flusso: freccia viola e didascalia
function FlowArrow({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-3 py-2.5 ${className}`}>
      <svg viewBox="0 0 24 40" className="h-8 w-5 shrink-0 overflow-visible" fill="none" stroke="var(--color-violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 V31" />
        <path d="M6 26 L12 33 L18 26" />
      </svg>
      <span className="rounded-full bg-lavender px-3 py-1 text-[12px] font-medium text-violet-dark">{label}</span>
    </div>
  );
}

// Il flusso: colloquio, codifica, report firmato, e le decisioni che ne derivano
export function HeroFlow({ lang = "it" }: { lang?: Locale }) {
  const t = graphics[lang].heroFlow;
  const codes: Code[] = ["OB", "PS", "IP"];
  return (
    <figure className="m-0" aria-label={t.label}>
      <div className={`${card} mr-[12%]`}>
        <CardHead aside={<span className="rounded-full bg-cream-2 px-2.5 py-0.5 font-mono text-[11px] normal-case tracking-normal">{t.minutes}</span>}>
          {t.interview}
        </CardHead>
        <blockquote className="mt-3 text-[16px] leading-[1.7]">
          {t.quote.lead}
          <Said code="OB">{t.quote.ob}</Said> <Said code="PS">{t.quote.ps}</Said>
          {t.quote.end}
        </blockquote>
      </div>

      <FlowArrow label={t.arrow1} className="pl-[10%]" />

      <div className={`${card} mx-[6%]`}>
        <CardHead aside={<span className="normal-case tracking-normal text-violet">{t.codes}</span>}>{t.coding}</CardHead>
        <div className="mt-3.5">
          <CodedList items={t.coded} codes={codes} />
        </div>
      </div>

      <FlowArrow label={t.arrow2} className="pl-[16%]" />

      <div className={`${card} ml-[12%]`}>
        <CardHead aside={<Stamp>{t.signed}</Stamp>}>{t.report}</CardHead>
        <p className="display mt-3.5 rounded-2xl bg-ob px-4 py-3 text-[19px] leading-snug">{t.finding}</p>
        <p className="mt-3 flex flex-wrap justify-between gap-2 text-[13px] text-body">
          <span>{t.proof}</span>
          <span>Dott. A. Gilli</span>
        </p>
      </div>

      <div className="ml-[12%] mt-4 rounded-[20px] bg-night p-5 text-white">
        <p className="text-[13px] font-medium text-white/70">{t.toDecide}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {t.decisions.map((d) => (
            <li key={d} className="rounded-full bg-white/15 px-3 py-1.5 text-[14px]">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
