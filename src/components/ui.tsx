import Link from "next/link";
import type { ReactNode } from "react";
import { shared } from "@/content/shared";
import { localize, type Locale } from "@/lib/i18n";
import { codeBg, type Code } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-8 ${className}`}>{children}</div>;
}

/** Etichetta di sezione: i quattro punti del marchio, poi il maiuscoletto viola su chiaro, giallo su scuro */
export function Section({ children, dark = false }: { n?: string; children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] ${dark ? "text-ob" : "text-violet"}`}>
      <span className="grid shrink-0 grid-cols-2 gap-[2px]" aria-hidden="true">
        <span className="h-[5px] w-[5px] rounded-full bg-ob" />
        <span className="h-[5px] w-[5px] rounded-full bg-ps" />
        <span className="h-[5px] w-[5px] rounded-full bg-ac" />
        <span className="h-[5px] w-[5px] rounded-full bg-ip" />
      </span>
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
  return <span className={`marker text-ink ${codeBg[code]}`}>{children}</span>;
}

const hl: Record<Code, string> = {
  OB: "[--hl:var(--color-ob)]",
  PS: "[--hl:var(--color-ps)]",
  AC: "[--hl:var(--color-ac)]",
  IP: "[--hl:var(--color-ip)]",
};

/**
 * Affermazione annotata come in un trascritto: sottolineata col colore del codice e con il codice in apice.
 * Il sito fa quello che fa il metodo: ogni frase che conta porta la sua evidenza.
 */
export function Evidence({ code, name, dark = false, children }: { code: Code; name: string; dark?: boolean; children: ReactNode }) {
  // Su fondo scuro l'evidenziatore coprirebbe il testo chiaro: diventa colore del testo e riga sottile sotto
  const onDark = { OB: "text-ob", PS: "text-ps", AC: "text-ac", IP: "text-ip" }[code];
  return (
    <>
      <span className={`underlight ${hl[code]} ${dark ? `${onDark} [background-position:0_100%] [background-size:100%_0.06em]` : ""}`}>{children}</span>
      <abbr
        title={name}
        className={`relative -top-[0.75em] ml-[0.12em] inline-block rounded-[0.18em] px-[0.28em] py-[0.16em] align-baseline font-mono text-[max(12px,0.26em)] font-medium leading-none tracking-normal text-ink no-underline ${codeBg[code]}`}
      >
        {code}
      </abbr>
    </>
  );
}

export function CodeTag({ code, className = "" }: { code: Code; className?: string }) {
  return <span className={`inline-block rounded-md px-1.5 py-0.5 font-mono text-[12px] font-medium leading-none ${codeBg[code]} ${className}`}>{code}</span>;
}

const pill = {
  ink: "bg-ink text-white hover:bg-violet-dark",
  solid: "bg-violet text-white hover:bg-violet-dark",
  outline: "bg-transparent text-ink ring-1 ring-inset ring-ink/25 hover:bg-ink/5",
  paper: "bg-white text-ink hover:bg-cream-2",
  soft: "bg-lavender text-violet-dark hover:bg-ps/70",
  ob: "bg-ob text-ink hover:bg-white",
  ghost: "bg-transparent text-white ring-1 ring-inset ring-white/35 hover:bg-white/10",
};

/** Bottone del sito: rettangolo con angoli contenuti */
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-[15px] font-medium transition-colors ${pill[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/**
 * Il marchio: una S fatta di due archi che non si toccano, come i due lati di una sinapsi
 * (chi parla e chi ascolta). Il quadratino giallo è il codice in apice che il metodo mette
 * accanto a ogni affermazione.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" className="fill-violet" />
      <g fill="none" className="stroke-white" strokeWidth="3.6" strokeLinecap="round">
        <path d="M25.08 10.24A6.2 6.2 0 1 0 17.09 19.27" />
        <path d="M22.91 20.73A6.2 6.2 0 1 1 14.92 29.76" />
      </g>
      <rect x="28.5" y="5.5" width="6" height="6" rx="1.6" className="fill-ob" />
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
    <figure className={`m-0 flex h-full flex-col overflow-hidden rounded-2xl bg-white text-ink shadow-[0_0_0_1px_rgba(28,26,24,0.06),0_16px_40px_-24px_rgba(34,26,66,0.3)] ${className}`}>
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
      <div className="relative isolate overflow-hidden bg-night text-white">
        <DotGrid className="text-white/[0.06]" />
        <Container className="grid gap-12 pb-16 pt-16 sm:pb-24 sm:pt-24 lg:grid-cols-12 lg:items-center">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-10"}>
            <div className="anim-rise">
              <Section dark>{label}</Section>
            </div>
            {/* Sul fondo scuro l'evidenziatore diventa colore del testo: più leggibile, meno pesante */}
            <Display as="h1" className="anim-rise [--d:80ms] mt-6 text-[clamp(2.75rem,5.6vw,4.75rem)] [&_.marker]:bg-transparent [&_.marker]:p-0 [&_.marker]:text-ps">
              {title}
            </Display>
            <p className="anim-rise [--d:160ms] mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{lead}</p>
          </div>
          {aside && <div className="anim-rise [--d:260ms] lg:col-span-5">{aside}</div>}
        </Container>
      </div>
      {service && (
        <div className="border-b border-line bg-white">
          <Container>
            <dl className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
              {(
                [
                  [labels.need, service.need, "bg-ob", "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5v5m0 3.5v.5"],
                  [labels.what, service.what, "bg-ps", "M4 5h16v11H9l-5 4V5Zm4 5h8M8 13h5"],
                  [labels.get, service.get, "bg-ac", "M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6M10 17h4"],
                ] as const
              ).map(([k, v, bg, d]) => (
                <div key={k} className="flex gap-5 py-8 md:px-8 md:first:pl-0 md:last:pr-0">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg}`} aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-violet-dark" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={d} />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-violet">{k}</dt>
                    <dd className="mt-2.5 text-[16px] leading-relaxed">{v}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      )}
    </section>
  );
}

/** Chiusura delle pagine: riquadro scuro con l'invito a contattarci */
export function CtaBand({ lang, title, button, label }: { lang: Locale; title?: string; button?: string; label?: string }) {
  const t = shared[lang].cta;
  return (
    <Container className="py-20 sm:py-28">
      <div className="reveal relative isolate grid gap-8 overflow-hidden rounded-[20px] bg-night px-6 py-14 text-white sm:px-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end">
        <DotGrid className="text-white/[0.06]" />
        <div>
          {label && <Section dark>{label}</Section>}
          <p className={`display max-w-[22ch] text-[clamp(30px,4vw,48px)] ${label ? "mt-4" : ""}`}>{title ?? t.title}</p>
        </div>
        <Button href={localize(lang, "/contact")} variant="paper" className="justify-self-start">
          {button ?? t.button}
          <Arrow className="h-4 w-4" />
        </Button>
      </div>
    </Container>
  );
}
