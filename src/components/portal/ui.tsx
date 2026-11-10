import Link from "next/link";
import type { ReactNode } from "react";
import { stages, type Stage } from "@/lib/portal";
import { Icon, icons } from "./icons";

/** Bordo e ombra dei riquadri del portale: leggeri, da strumento di lavoro */
export const surface = "rounded-[20px] bg-white shadow-[0_0_0_1px_rgba(28,26,24,0.06),0_1px_3px_rgba(28,26,24,0.04)]";

export function PageHeader({ eyebrow, title, lead, actions }: { eyebrow?: string; title: string; lead?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
      <div className="min-w-0">
        {eyebrow && <p className="text-[13px] font-medium text-violet">{eyebrow}</p>}
        <h1 className="display mt-1.5 text-[clamp(1.75rem,2.6vw,2.25rem)]">{title}</h1>
        {lead && <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-body">{lead}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Card({ title, action, children, className = "", flush = false }: { title?: string; action?: ReactNode; children: ReactNode; className?: string; flush?: boolean }) {
  return (
    <section className={`overflow-hidden ${surface} ${className}`}>
      {title && (
        <div className="flex items-center justify-between gap-3 px-5 pb-1 pt-4">
          <h2 className="text-[15px] font-semibold">{title}</h2>
          {action}
        </div>
      )}
      <div className={flush ? "pt-2" : "p-5"}>{children}</div>
    </section>
  );
}

/** Link discreto nella testata di un riquadro ("Vedi tutti") */
export function CardLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[13px] font-medium text-violet hover:bg-lavender">
      {children}
      <Icon d={icons.arrow} className="h-3.5 w-3.5" />
    </Link>
  );
}

/** Numero chiave. `tone` è il colore del codice che fa da bollino all'icona */
export function Stat({ label, value, note, tone = "bg-lavender", icon }: { label: string; value: ReactNode; note?: string; tone?: string; icon?: string }) {
  return (
    <div className={`${surface} p-5`}>
      <div className="flex items-center gap-2.5">
        <span className={`flex h-8 w-8 items-center justify-center rounded-xl text-ink ${tone}`}>
          <Icon d={icon ?? icons.check} className="h-4 w-4" />
        </span>
        <p className="text-[13px] font-medium text-body">{label}</p>
      </div>
      <p className="display mt-4 text-[34px] leading-none tabular-nums">{value}</p>
      {note && <p className="mt-2 text-[13px] text-body">{note}</p>}
    </div>
  );
}

const stageStyle: Record<Stage, { bg: string; dot: string }> = {
  Pianificato: { bg: "bg-cream text-body", dot: "bg-body/50" },
  Colloqui: { bg: "bg-ps/70 text-violet-dark", dot: "bg-violet" },
  Codifica: { bg: "bg-ps/70 text-violet-dark", dot: "bg-violet" },
  Revisione: { bg: "bg-ob/80 text-ink", dot: "bg-ink/70" },
  Consegnato: { bg: "bg-ac text-ink", dot: "bg-ink/70" },
};

export function StageBadge({ stage }: { stage: Stage }) {
  const s = stageStyle[stage];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[12px] font-medium ${s.bg}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
      {stage}
    </span>
  );
}

/** Avanzamento: cinque tacche, dal pianificato al consegnato */
export function StageTrack({ stage, labels = false }: { stage: Stage; labels?: boolean }) {
  const current = stages.indexOf(stage);
  return (
    <div>
      <div className="flex gap-1" role="img" aria-label={`Fase ${current + 1} di ${stages.length}: ${stage}`}>
        {stages.map((s, i) => (
          <span key={s} className={`h-1.5 flex-1 rounded-full ${i < current ? "bg-violet" : i === current ? "bg-violet/60" : "bg-cream-2"}`} />
        ))}
      </div>
      {labels && (
        <ol className="mt-2.5 grid grid-cols-5 gap-1 text-[12px]">
          {stages.map((s, i) => (
            <li key={s} className={i === current ? "font-medium text-violet" : i < current ? "text-body" : "text-body/50"}>
              {s}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export function ActionLink({ href, children, variant = "outline" }: { href: string; children: ReactNode; variant?: "solid" | "outline" | "ghost" }) {
  const styles = {
    solid: "rounded-xl bg-violet text-white shadow-[0_1px_2px_rgba(58,43,117,0.3)] hover:bg-violet-dark",
    outline: "rounded-xl bg-white text-ink shadow-[0_0_0_1px_rgba(28,26,24,0.1)] hover:bg-cream",
    ghost: "rounded-lg px-2! text-violet hover:bg-lavender",
  }[variant];
  return (
    <Link href={href} className={`inline-flex min-h-9 items-center gap-2 px-3.5 text-[14px] font-medium transition-colors ${styles}`}>
      {children}
    </Link>
  );
}

export function DownloadLink({ id, label = "Scarica PDF", variant = "outline" }: { id: string; label?: string; variant?: "solid" | "outline" | "ghost" }) {
  return (
    <ActionLink href={`/portal/reports/${id}?download=1`} variant={variant}>
      <Icon d={icons.download} className="h-4 w-4" />
      {label}
    </ActionLink>
  );
}

// Avatar: il colore dipende dal nome, così la stessa persona ha sempre lo stesso colore
const avatarTones = ["bg-ob text-ink", "bg-ps text-violet-dark", "bg-ac text-ink", "bg-ip text-ink"];

export function Initials({ name, className = "" }: { name: string; className?: string }) {
  const i = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  const tone = avatarTones[[...name].reduce((n, c) => n + c.charCodeAt(0), 0) % avatarTones.length];
  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold ${tone} ${className}`} aria-hidden="true">
      {i}
    </span>
  );
}
