import Link from "next/link";
import type { ReactNode } from "react";
import { codeBg, type Code } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 ${className}`}>{children}</div>;
}

/** Etichetta di sezione in stile referto: «§ 01 — Persone» */
export function Section({ n, children, dark = false }: { n?: string; children: ReactNode; dark?: boolean }) {
  return (
    <p className={`font-mono text-[13px] ${dark ? "text-ob" : ""}`}>
      {n && <>§ {n} — </>}
      {children}
    </p>
  );
}

export function Display({
  as: Tag = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "p";
  children: ReactNode;
  className?: string;
}) {
  return <Tag className={`display text-balance ${className}`}>{children}</Tag>;
}

/** Evidenziatore con il colore di uno dei quattro codici */
export function Mark({ code = "OB", children }: { code?: Code; children: ReactNode }) {
  const colors: Record<Code, string> = {
    OB: "var(--color-ob)",
    PS: "var(--color-ps)",
    AC: "var(--color-ac)",
    IP: "var(--color-ip)",
  };
  const c = colors[code];
  return (
    <span className="marker" style={{ background: `linear-gradient(transparent 58%, ${c} 58%, ${c} 92%, transparent 92%)` }}>
      {children}
    </span>
  );
}

export function CodeTag({ code, className = "" }: { code: Code; className?: string }) {
  return <span className={`inline-block px-1.5 py-0.5 font-mono text-[12px] leading-none ${codeBg[code]} ${className}`}>[{code}]</span>;
}

export function Chip({ children }: { children: ReactNode }) {
  return <li className="frame bg-paper px-2.5 py-1.5 font-mono text-[13px]">{children}</li>;
}

export function Button({
  href,
  children,
  variant = "ink",
}: {
  href: string;
  children: ReactNode;
  variant?: "ink" | "outline" | "ob" | "paper";
}) {
  const styles = {
    ink: "bg-primary text-paper hover:bg-primary-dark",
    outline: "frame hover:bg-ob",
    ob: "bg-ob text-ink hover:bg-paper",
    paper: "bg-paper text-ink hover:bg-ob",
  }[variant];
  return (
    <Link href={href} className={`inline-flex min-h-13 items-center gap-2.5 px-6 font-medium transition-colors ${styles}`}>
      {children}
    </Link>
  );
}

/** Cornice "documento": barra in alto in mono, contenuto, didascalia */
export function DocFrame({
  title,
  meta,
  caption,
  children,
  shadow = false,
  className = "",
}: {
  title: string;
  meta?: string;
  caption?: ReactNode;
  children: ReactNode;
  shadow?: boolean;
  className?: string;
}) {
  return (
    <figure className={`m-0 bg-paper ${shadow ? "frame-shadow" : "frame"} ${className}`}>
      <div className="flex justify-between gap-3 border-b-[1.5px] border-ink px-4.5 py-3 font-mono text-[12px] uppercase tracking-[0.06em]">
        <span>{title}</span>
        {meta && <span>{meta}</span>}
      </div>
      {children}
      {caption && <figcaption className="border-t-[1.5px] border-ink px-4.5 py-3.5">{caption}</figcaption>}
    </figure>
  );
}

export function PageIntro({
  label,
  title,
  lead,
  aside,
  service,
}: {
  label: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  aside?: ReactNode;
  /** Pagine prodotto: riassunto in chiaro di per chi è, cosa facciamo e cosa si riceve */
  service?: { need: string; what: string; get: string };
}) {
  return (
    <>
    <section className="border-b-[1.5px] border-ink">
      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:items-end">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-10"}>
          <p className="font-mono text-[13px]">{label}</p>
          <Display as="h1" className="mt-7 text-[clamp(3rem,6.4vw,6.25rem)]">
            {title}
          </Display>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">{lead}</p>
        </div>
        {aside && <div className="lg:col-span-5">{aside}</div>}
      </Container>
    </section>
    {service && (
      <section className="border-b-[1.5px] border-ink bg-paper-2">
        <Container className="grid gap-8 py-10 md:grid-cols-3">
          {(
            [
              ["Per chi è", service.need],
              ["Cosa facciamo", service.what],
              ["Cosa ricevete", service.get],
            ] as const
          ).map(([k, v]) => (
            <div key={k}>
              <p className="font-mono text-[12px] uppercase tracking-[0.06em]">{k}</p>
              <p className="mt-2.5 leading-relaxed">{v}</p>
            </div>
          ))}
        </Container>
      </section>
    )}
    </>
  );
}

export function CtaBand({ title = "Raccontateci un episodio.", button = "Fissa un primo colloquio" }: { title?: string; button?: string }) {
  return (
    <section className="border-t-[1.5px] border-ink bg-paper-2">
      <Container className="flex flex-col justify-between gap-8 py-20 sm:py-28 lg:flex-row lg:items-end">
        <p className="display max-w-4xl text-[clamp(2.5rem,5vw,4.5rem)]">
          {title}
        </p>
        <Button href="/contatti">
          {button} <span aria-hidden="true">→</span>
        </Button>
      </Container>
    </section>
  );
}
