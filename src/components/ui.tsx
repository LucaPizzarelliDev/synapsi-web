import Link from "next/link";
import type { ReactNode } from "react";
import { shared } from "@/content/shared";
import { localize, type Locale } from "@/lib/i18n";
import { codeBg, type Code } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-8 ${className}`}>{children}</div>;
}

/** Etichetta di sezione: maiuscoletto viola su chiaro, giallo su scuro */
export function Section({ children, dark = false }: { n?: string; children: ReactNode; dark?: boolean }) {
  return <p className={`text-[14px] font-medium ${dark ? "text-ob" : "text-violet"}`}>{children}</p>;
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

/** Etichetta e titolo di sezione insieme, la forma più comune */
export function Heading({ label, children, className = "" }: { label?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`reveal ${className}`}>
      {label && <Section>{label}</Section>}
      <Display className={`text-[clamp(32px,4.2vw,48px)] ${label ? "mt-3" : ""}`}>{children}</Display>
    </div>
  );
}

/** Evidenziatore con il colore di uno dei quattro codici */
export function Mark({ code = "OB", children }: { code?: Code; children: ReactNode }) {
  return <span className={`marker ${codeBg[code]}`}>{children}</span>;
}

export function CodeTag({ code, className = "" }: { code: Code; className?: string }) {
  return <span className={`inline-block rounded-md px-1.5 py-0.5 font-mono text-[12px] font-medium leading-none ${codeBg[code]} ${className}`}>{code}</span>;
}

const pill = {
  ink: "bg-violet text-white hover:bg-violet-dark",
  solid: "bg-violet text-white hover:bg-violet-dark",
  outline: "bg-white text-ink ring-1 ring-ink/15 hover:bg-cream-2",
  paper: "bg-white text-ink hover:bg-cream-2",
  soft: "bg-lavender text-violet-dark hover:bg-ps/70",
  ob: "bg-ob text-ink hover:bg-white",
  ghost: "bg-white/10 text-white ring-1 ring-white/40 hover:bg-white/20",
};

/** Bottone a pillola. `ink` è il nome storico della variante principale */
export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof pill;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-5 text-[15px] font-medium transition-colors ${pill[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Il marchio: quattro punti, uno per codice del metodo */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="8" className="fill-ob" />
      <circle cx="29" cy="11" r="8" className="fill-ps" />
      <circle cx="11" cy="29" r="8" className="fill-ac" />
      <circle cx="29" cy="29" r="8" className="fill-ip" />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function Check({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="m3.5 8.5 3 3 6-7" />
    </svg>
  );
}

/** Trama di punti leggera, per i fondi scuri. Il genitore deve essere `relative isolate` */
export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`} aria-hidden="true">
      <defs>
        <pattern id="dot-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
    </svg>
  );
}

/** Contenitore illustrativo: riquadro bianco arrotondato con barra del titolo e didascalia */
export function DocFrame({
  title,
  meta,
  caption,
  children,
  className = "",
}: {
  title: string;
  meta?: string;
  caption?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={`m-0 flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_0_0_1px_rgba(28,26,24,0.06),0_16px_40px_-24px_rgba(34,26,66,0.3)] ${className}`}>
      <div className="flex justify-between gap-3 border-b border-line px-5 py-3.5 text-[13px] font-medium text-body">
        <span>{title}</span>
        {meta && <span>{meta}</span>}
      </div>
      {children}
      {caption && <figcaption className="mt-auto border-t border-line px-5 py-3.5">{caption}</figcaption>}
    </figure>
  );
}

/** Usato dalla prima versione per l'effetto estruso: ora è un semplice contenitore */
export function Extruded({ className = "", children }: { depth?: number; className?: string; children: ReactNode }) {
  return <div className={className}>{children}</div>;
}

export function PageIntro({
  lang,
  label,
  title,
  lead,
  aside,
  service,
}: {
  lang: Locale;
  label: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  aside?: ReactNode;
  /** Pagine prodotto: riassunto in chiaro di per chi è, cosa facciamo e cosa si riceve */
  service?: { need: string; what: string; get: string };
}) {
  const labels = shared[lang].serviceLabels;
  return (
    <section>
      <Container className="grid gap-12 pb-12 pt-14 sm:pt-20 lg:grid-cols-12 lg:items-center">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-10"}>
          <div className="anim-rise">
            <Section>{label}</Section>
          </div>
          <Display as="h1" className="anim-rise [--d:80ms] mt-5 text-[clamp(2.75rem,5.6vw,5rem)]">
            {title}
          </Display>
          <p className="anim-rise [--d:160ms] mt-7 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">{lead}</p>
        </div>
        {aside && <div className="anim-rise [--d:260ms] lg:col-span-5">{aside}</div>}
      </Container>
      {service && (
        <Container className="pb-8">
          <dl className="grid gap-4 md:grid-cols-3">
            {(
              [
                [labels.need, service.need, "bg-ob"],
                [labels.what, service.what, "bg-ps"],
                [labels.get, service.get, "bg-ac"],
              ] as const
            ).map(([k, v, bg]) => (
              <div key={k} className={`reveal rounded-[24px] p-6 ${bg}`}>
                <dt className="text-[14px] font-medium text-ink/70">{k}</dt>
                <dd className="mt-2.5 text-[16px] leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      )}
    </section>
  );
}

/** Chiusura delle pagine: riquadro viola con l'invito a contattarci */
export function CtaBand({ lang, title, button, label }: { lang: Locale; title?: string; button?: string; label?: string }) {
  const t = shared[lang].cta;
  return (
    <Container className="py-20 sm:py-28">
      <div className="reveal relative isolate overflow-hidden rounded-[28px] bg-violet px-6 py-16 text-center text-white sm:py-24">
        <DotGrid className="text-white/10" />
        {label && <Section dark>{label}</Section>}
        <p className={`display mx-auto max-w-[20ch] text-[clamp(30px,4.4vw,52px)] ${label ? "mt-3" : ""}`}>{title ?? t.title}</p>
        <Button href={localize(lang, "/contact")} variant="paper" className="mt-9">
          {button ?? t.button}
        </Button>
      </div>
    </Container>
  );
}
