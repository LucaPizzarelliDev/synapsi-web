import Link from "next/link";
import type { ReactNode } from "react";
import { stages, type Stage } from "@/lib/portal";
import { Icon, icons } from "./icons";

export function PageHeader({ eyebrow, title, lead, actions }: { eyebrow?: string; title: string; lead?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
      <div className="min-w-0">
        {eyebrow && <p className="font-normal text-[12px] uppercase tracking-[0.06em]">{eyebrow}</p>}
        <h1 className="display mt-2 text-[clamp(2rem,3.4vw,2.75rem)]">{title}</h1>
        {lead && <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-body">{lead}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Card({ title, action, children, className = "", flush = false }: { title?: string; action?: ReactNode; children: ReactNode; className?: string; flush?: boolean }) {
  return (
    <section className={`border-[1.5px] border-ink bg-paper ${className}`}>
      {title && (
        <div className="flex items-center justify-between gap-3 border-b-[1.5px] border-ink px-5 py-3 font-normal text-[12px] uppercase tracking-[0.06em]">
          <h2 className="font-normal">{title}</h2>
          {action}
        </div>
      )}
      <div className={flush ? "" : "p-5"}>{children}</div>
    </section>
  );
}

export function Stat({ label, value, note }: { label: string; value: ReactNode; note?: string }) {
  return (
    <div className="border-[1.5px] border-ink bg-paper px-5 py-4">
      <p className="font-normal text-[12px] uppercase tracking-[0.06em]">{label}</p>
      <p className="display mt-2 text-[32px]">{value}</p>
      {note && <p className="mt-0.5 text-[13px] text-body">{note}</p>}
    </div>
  );
}

const stageStyle: Record<Stage, string> = {
  Pianificato: "border border-ink text-ink",
  Colloqui: "bg-ps text-ink",
  Codifica: "bg-ps text-ink",
  Revisione: "bg-ip text-ink",
  Consegnato: "bg-ac text-ink",
};

export function StageBadge({ stage }: { stage: Stage }) {
  return <span className={`inline-flex items-center px-2 py-0.5 font-normal text-[11px] uppercase tracking-[0.04em] ${stageStyle[stage]}`}>{stage}</span>;
}

/** Avanzamento: cinque tacche, dal pianificato al consegnato */
export function StageTrack({ stage, labels = false }: { stage: Stage; labels?: boolean }) {
  const current = stages.indexOf(stage);
  return (
    <div>
      <div className="flex gap-1" role="img" aria-label={`Fase ${current + 1} di ${stages.length}: ${stage}`}>
        {stages.map((s, i) => (
          <span key={s} className={`h-1.5 flex-1 ${i <= current ? "bg-accent" : "bg-line"}`} />
        ))}
      </div>
      {labels && (
        <ol className="mt-2.5 grid grid-cols-5 gap-1 text-[12px]">
          {stages.map((s, i) => (
            <li key={s} className={i === current ? "font-medium text-ink" : i < current ? "text-body" : "text-body/60"}>
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
    solid: "bg-primary text-paper hover:bg-primary-dark",
    outline: "border-[1.5px] border-ink bg-paper hover:bg-ob",
    ghost: "text-primary underline underline-offset-4 hover:text-primary-dark",
  }[variant];
  return (
    <Link href={href} className={`inline-flex min-h-9 items-center gap-2 px-3.5 text-[14px] font-medium transition-colors ${styles}`}>
      {children}
    </Link>
  );
}

export function DownloadLink({ id, label = "Scarica PDF", variant = "outline" }: { id: string; label?: string; variant?: "solid" | "outline" | "ghost" }) {
  return (
    <ActionLink href={`/portale/report/${id}?scarica=1`} variant={variant}>
      <Icon d={icons.download} className="h-4 w-4" />
      {label}
    </ActionLink>
  );
}

export function Initials({ name, className = "" }: { name: string; className?: string }) {
  const i = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center border-[1.5px] border-ink bg-paper text-[13px] font-medium text-ink ${className}`} aria-hidden="true">
      {i}
    </span>
  );
}
