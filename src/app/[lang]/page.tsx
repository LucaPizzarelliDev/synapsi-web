import type { Metadata } from "next";
import Link from "next/link";
import { ProductGlyph } from "@/components/ProductGlyph";
import { ProductPreview } from "@/components/ProductPreview";
import { Arrow, Button, Check, Container, CtaBand, DotGrid, Heading, Section } from "@/components/ui";
import { graphics } from "@/content/graphics";
import { home } from "@/content/home";
import { shared } from "@/content/shared";
import { localize, type Locale } from "@/lib/i18n";
import { getLang, pageMetadata } from "@/lib/locale";
import { codeBg } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata(lang, "/", home[lang].meta);
}

// Un colore per servizio: quelli dei quattro codici più la sabbia
const tileBg = ["bg-ob", "bg-ps", "bg-ac", "bg-ip", "bg-sand"];
const codedBg = ["bg-ob", "bg-ps", "bg-ip"];
// Ogni grafico dei servizi ha un suo movimento lento
const glyphMotion = ["anim-breathe", "anim-spin", "anim-breathe [--d:-3s]", "anim-bob"];
const reasonBg = ["bg-ob", "bg-ac", "bg-ip", "bg-white"];
const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("");

export default async function Home() {
  const lang = await getLang();
  const t = home[lang];
  const g = graphics[lang];
  const { services, team, serviceLabels, codes, footer, methodSteps } = shared[lang];
  return (
    <>
      {/* Hero: la promessa in una frase, poi il prodotto (il portale) con intorno i pezzi del metodo */}
      <section className="relative overflow-hidden pb-6">
        <Container className="pt-14 text-center sm:pt-20">
          <h1 className="anim-rise [--d:80ms] display mx-auto max-w-[18ch] text-balance text-[clamp(42px,6.4vw,80px)]">
            {t.hero.title.before}
            <span className="highlight text-violet">{t.hero.title.mark}</span>
            {t.hero.title.after}
          </h1>
          <p className="anim-rise [--d:160ms] mx-auto mt-6 max-w-[58ch] text-[clamp(16px,1.4vw,19px)] leading-relaxed text-body">{t.hero.lead}</p>
          <div className="anim-rise [--d:240ms] mt-8 flex flex-wrap justify-center gap-3">
            <Button href={localize(lang, "/contact")}>
              {t.hero.primary}
              <Arrow className="h-4 w-4" />
            </Button>
            <Button href="#services" variant="outline">
              {t.hero.secondary}
            </Button>
          </div>
          <ul className="anim-rise [--d:320ms] mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px] text-body">
            {footer.guaranteeItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ac text-ink">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>

        <Container className="anim-rise [--d:420ms] relative mt-14 sm:mt-16">
          {/* Fondale colorato dietro la finestra */}
          <div aria-hidden="true" className="absolute inset-x-4 bottom-0 top-16 -z-10 rounded-[32px] bg-lavender sm:inset-x-8" />
          <div className="relative mx-auto max-w-[1040px] px-0 pb-10 sm:px-10 sm:pb-14">
            <ProductPreview lang={lang} />
            {/* Pezzi del metodo, intorno al prodotto */}
            <div aria-hidden="true" className="pointer-events-none hidden xl:block">
              <p className="anim-float absolute -left-36 top-44 w-[230px] -rotate-3 rounded-[20px] rounded-bl-md bg-white p-4 text-left text-[14px] leading-snug shadow-[0_20px_40px_-20px_rgba(34,26,66,0.35)]">
                <span className="mb-1.5 block text-[12px] font-medium text-body">{g.transcript.person}</span>
                {g.transcript.a1.lead}
                <span className="marker bg-ob">{g.transcript.a1.ob}</span>
              </p>
              <ul className="anim-float [--d:-2.5s] absolute -right-32 top-28 flex w-[170px] rotate-2 flex-col items-start gap-2">
                {codes.map((c) => (
                  <li key={c.code} className={`rounded-full px-3 py-1.5 text-[13px] font-medium shadow-[0_10px_24px_-14px_rgba(34,26,66,0.5)] ${codeBg[c.code]}`}>
                    {c.code} · {c.name}
                  </li>
                ))}
              </ul>
              <p className="anim-float [--d:-5s] absolute -right-20 bottom-4 flex -rotate-2 items-center gap-2 rounded-full bg-night px-4 py-2 text-[14px] font-medium text-white shadow-[0_16px_32px_-16px_rgba(34,26,66,0.6)]">
                <Check />
                {g.check.signedByPsychologist}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Nastro: i passaggi e i codici del metodo, senza fine */}
      <div className="relative mt-4 overflow-hidden border-y border-line bg-white py-4" aria-hidden="true">
        <div className="anim-marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center gap-10 pr-10">
              {[...methodSteps.map((m) => ({ k: m.title, bg: "bg-lavender" })), ...codes.map((c) => ({ k: `${c.code} · ${c.name}`, bg: codeBg[c.code] })), { k: g.check.signedByPsychologist, bg: "bg-ac" }].map(
                (item) => (
                  <li key={item.k} className="flex items-center gap-3 whitespace-nowrap">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.bg}`} />
                    <span className="display text-[22px] text-ink/80">{item.k}</span>
                  </li>
                ),
              )}
            </ul>
          ))}
        </div>
      </div>

      {/* Cosa ricevete: testo e un report di esempio */}
      <Container className="pt-20 sm:pt-28">
        <div className="reveal grid items-center gap-12 overflow-hidden rounded-[28px] bg-cream-2 px-6 py-12 sm:px-12 lg:grid-cols-[1fr_1.05fr] lg:py-16">
          <div>
            <Heading label={t.report.label}>{t.report.title}</Heading>
            <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-body">{t.report.text}</p>
            <Button href={localize(lang, "/method")} className="mt-8">
              {t.trust.example}
            </Button>
          </div>
          <ReportMock lang={lang} />
        </div>
      </Container>

      {/* Servizi: una tessera per domanda */}
      <section id="services" className="scroll-mt-32 pt-20 sm:pt-28">
        <Container className="flex flex-wrap items-end justify-between gap-6">
          <Heading label={t.services.label}>{t.services.title}</Heading>
          <p className="reveal max-w-[44ch] text-[16px] leading-relaxed text-body">{t.services.intro}</p>
        </Container>
        <Container className="mt-10">
          <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0 xl:grid-cols-4">
            {services.slice(0, 4).map((s, i) => (
              <li key={s.href} className="reveal w-[78vw] max-w-[300px] shrink-0 snap-start lg:w-auto lg:max-w-none">
                <Link
                  href={localize(lang, s.href)}
                  className={`group flex h-full min-h-[420px] flex-col rounded-[24px] ${tileBg[i]} p-6 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[14px] font-medium text-ink/70">{s.product}</p>
                    <ProductGlyph product={s.product} className={`h-16 w-16 shrink-0 text-violet-dark/80 ${glyphMotion[i]}`} />
                  </div>
                  <h3 className="display mt-auto pt-4 text-[26px]">{s.label}</h3>
                  <p className="mt-3 text-[15px] leading-snug text-ink/80">{s.need}</p>
                  <p className="mt-4 border-t border-ink/15 pt-3 text-[13px] leading-snug text-ink/70">
                    <span className="font-semibold text-ink">{serviceLabels.get}:</span> {s.get}
                  </p>
                  <span className="mt-5 inline-flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-full bg-ink text-white transition-colors group-hover:bg-violet">
                    <Arrow className="h-4 w-4" />
                    <span className="sr-only">{t.services.more}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Come funziona */}
      <section id="how" className="mt-20 scroll-mt-32 bg-cream-2 py-20 sm:mt-28 sm:py-28">
        <Container>
          <Heading label={t.how.label} className="mx-auto max-w-[760px] text-center">
            {t.how.title}
          </Heading>
          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {t.how.steps.map((s) => (
              <li key={s.n} className="reveal rounded-[24px] bg-white p-7">
                <span className="display flex h-12 w-12 items-center justify-center rounded-full bg-violet text-[22px] text-white">{s.n}</span>
                <h3 className="display mt-6 text-[24px]">{s.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-body">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Perché fidarvi: una tessera grande con l'esempio, quattro piccole con le ragioni */}
      <section id="why" className="scroll-mt-32 pt-20 sm:pt-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Heading label={t.trust.label} className="max-w-[640px]">
              {t.trust.title}
            </Heading>
            <Button href={localize(lang, "/method")} variant="soft">
              {t.trust.link}
            </Button>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.25fr_1fr_1fr] lg:grid-rows-2">
            <figure className="reveal relative isolate flex flex-col justify-end overflow-hidden rounded-[24px] bg-night p-7 text-white lg:row-span-2">
              <DotGrid className="text-white/[0.07]" />
              <figcaption className="text-[14px] font-medium text-white/70">
                {g.heroFlow.interview} · {g.heroFlow.minutes}
              </figcaption>
              <blockquote className="display mt-4 text-[clamp(22px,2.4vw,30px)] leading-snug">
                {g.heroFlow.quote.lead}
                <span className="rounded-md bg-ob px-1 text-ink [box-decoration-break:clone]">{g.heroFlow.quote.ob}</span>{" "}
                <span className="rounded-md bg-ps px-1 text-ink [box-decoration-break:clone]">{g.heroFlow.quote.ps}</span>
                {g.heroFlow.quote.end}
              </blockquote>
              <p className="mt-5 text-[14px] text-white/70">{g.check.sample}</p>
            </figure>
            {t.trust.reasons.map(([title, text], i) => (
              <div key={title} className={`reveal rounded-[24px] p-7 ${reasonBg[i]}`}>
                <h3 className="display text-[22px]">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Chi siamo */}
      <section id="team" className="scroll-mt-32 pt-20 sm:pt-28">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Heading label={t.about.label}>{t.about.title}</Heading>
            <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-body">{t.about.text}</p>
            <Button href={localize(lang, "/about")} variant="soft" className="mt-8">
              {t.about.link}
            </Button>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {team.map((p) => (
              <li key={p.name} className="reveal flex items-center gap-4 rounded-[20px] bg-white p-4">
                <span className={`display flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[18px] ${codeBg[p.code]}`} aria-hidden="true">
                  {initials(p.name)}
                </span>
                <span>
                  <span className="block font-semibold">{p.name}</span>
                  <span className="block text-[14px] leading-snug text-body">{p.role}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand lang={lang} label={t.cta.label} title={t.cta.title} button={t.cta.button} />
    </>
  );
}

/** Esempio di report, impaginato come una scheda: frase codificata, conclusione, decisioni */
function ReportMock({ lang }: { lang: Locale }) {
  const g = graphics[lang].heroFlow;
  return (
    <div className="relative mx-auto w-full max-w-[480px] py-6">
      <div className="relative rotate-[-1.5deg] rounded-[24px] bg-white p-6 shadow-[0_24px_60px_-30px_rgba(34,26,66,0.45)]">
        <div className="flex items-center justify-between">
          <Section>{g.report} · Viseria</Section>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ac px-3 py-1 text-[12px] font-semibold">
            <Check />
            {g.signed}
          </span>
        </div>
        <ul className="mt-5 space-y-2.5">
          {g.coded.map(([code, text], i) => (
            <li key={code} className="flex items-start gap-3">
              <span className={`shrink-0 rounded-lg px-2 py-0.5 text-[12px] font-semibold ${codedBg[i]}`}>{code}</span>
              <span className="text-[15px] leading-snug">{text}</span>
            </li>
          ))}
        </ul>
        <p className="display mt-6 rounded-2xl bg-cream px-4 py-3 text-[19px] leading-snug">{g.finding}</p>
        <p className="mt-3 text-[13px] text-body">{g.proof}</p>
      </div>
      <div className="relative -mt-4 ml-auto w-[78%] rotate-[2deg] rounded-[20px] bg-night p-5 text-white">
        <p className="text-[13px] font-medium text-white/70">{g.toDecide}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {g.decisions.map((d) => (
            <li key={d} className="rounded-full bg-white/15 px-3 py-1.5 text-[14px]">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
