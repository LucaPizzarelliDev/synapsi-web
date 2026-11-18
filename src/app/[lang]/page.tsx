import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceFlow } from "@/components/graphics";
import { ProductGlyph } from "@/components/ProductGlyph";
import { ProductPreview } from "@/components/ProductPreview";
import { Arrow, Button, Check, Container, CtaBand, DotGrid, Evidence, Heading, Section } from "@/components/ui";
import { graphics } from "@/content/graphics";
import { home } from "@/content/home";
import { shared } from "@/content/shared";
import { localize, type Locale } from "@/lib/i18n";
import { getLang, pageMetadata } from "@/lib/locale";
import { codeBg, type Code } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata(lang, "/", home[lang].meta);
}

// Un colore per servizio, quelli dei quattro codici
const serviceBg = ["bg-ob", "bg-ps", "bg-ac", "bg-ip"];
const factBar = ["bg-violet", "bg-ob", "bg-ac", "bg-ip"];
const reasonBg = ["bg-ob", "bg-ac", "bg-ip", "bg-ps"];
const codedBg = ["bg-ob", "bg-ps", "bg-ip"];
const docShadow = "shadow-[0_0_0_1px_rgba(28,26,24,0.06),0_30px_60px_-30px_rgba(0,0,0,0.55)]";
const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("");

export default async function Home() {
  const lang = await getLang();
  const t = home[lang];
  const g = graphics[lang];
  const { services, team, serviceLabels, footer, codes } = shared[lang];
  const codeName = (code: Code) => codes.find((c) => c.code === code)!.name;
  return (
    <>
      {/* Hero: la promessa a sinistra, a destra il percorso dalla voce alla firma */}
      <section className="relative isolate overflow-hidden bg-night text-white">
        <DotGrid className="text-white/[0.06]" />
        <Container className="grid gap-16 pb-16 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:pb-24">
          <div>
            <div className="anim-rise">
              <Section dark>{t.hero.kicker}</Section>
            </div>
            <h1 className="anim-rise [--d:80ms] display mt-6 max-w-[18ch] text-balance text-[clamp(42px,5.4vw,76px)]">
              {t.hero.title.before}
              <Evidence code={t.hero.title.code} name={codeName(t.hero.title.code)} dark>
                {t.hero.title.mark}
              </Evidence>
              {t.hero.title.after}
            </h1>
            <p className="anim-rise [--d:160ms] mt-7 max-w-[52ch] text-[clamp(17px,1.4vw,19px)] leading-relaxed text-white/75">{t.hero.lead}</p>
            <div className="anim-rise [--d:240ms] mt-10 flex flex-wrap gap-3">
              <Button href={localize(lang, "/contact")} variant="paper">
                {t.hero.primary}
                <Arrow className="h-4 w-4" />
              </Button>
              <Button href="#services" variant="ghost">
                {t.hero.secondary}
              </Button>
            </div>
          </div>
          <div className="anim-rise [--d:320ms]">
            <HeroDocuments lang={lang} />
          </div>
        </Container>
        <Container>
          <ul className="grid gap-x-8 gap-y-3 border-t border-white/15 py-6 text-[14px] text-white/75 sm:grid-cols-3">
            {footer.guaranteeItems.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ac text-ink">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Il metodo in cifre: solo numeri che il cliente ritrova nel lavoro */}
      <section className="bg-white">
        <Container>
          <dl className="grid divide-line sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {t.facts.map(([n, text], i) => (
              <div key={n} className="reveal border-b border-line py-10 sm:px-8 sm:first:pl-0 lg:border-b-0 lg:last:pr-0">
                <span className={`block h-1.5 w-10 rounded-full ${factBar[i]}`} aria-hidden="true" />
                <dt className="display mt-5 text-[clamp(44px,4.4vw,60px)] leading-none">{n}</dt>
                <dd className="mt-3 max-w-[28ch] text-[15px] leading-snug text-body">{text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Il principio: la frase più nostra, annotata come in un trascritto, con la legenda dei codici */}
      <section className="pt-24 sm:pt-32">
        <Container>
          <div className="reveal">
            <Section>{t.manifesto.label}</Section>
          </div>
          <p className="reveal display mt-8 max-w-[22ch] text-[clamp(40px,6.4vw,92px)] leading-[1.02]">
            <span className="text-ink/35">{t.manifesto.before}</span>
            <Evidence code={t.manifesto.code} name={codeName(t.manifesto.code)}>
              {t.manifesto.mark}
            </Evidence>
          </p>
          <div className="reveal mt-12 grid gap-8 border-t border-ink/15 pt-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <p className="max-w-[40ch] text-[17px] leading-relaxed text-body">{t.manifesto.note}</p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {codes.map((c) => (
                <li key={c.code} className={`rounded-2xl p-4 ${codeBg[c.code]}`}>
                  <span className="font-mono text-[13px] font-medium">{c.code}</span>
                  <span className="display mt-6 block text-[19px]">{c.name}</span>
                  <span className="mt-1 block text-[13px] leading-snug text-ink/70">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Servizi: una scheda per domanda, con il segno del prodotto */}
      <section id="services" className="scroll-mt-24 pt-20 sm:pt-28">
        <Container className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Heading label={t.services.label}>{t.services.title}</Heading>
          <p className="reveal max-w-[44ch] text-[16px] leading-relaxed text-body">{t.services.intro}</p>
        </Container>
        <Container className="mt-12">
          <ul className="grid gap-5 md:grid-cols-2">
            {services.slice(0, 4).map((s, i) => (
              <li key={s.href} className="reveal">
                <Link
                  href={localize(lang, s.href)}
                  className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_0_0_1px_rgba(28,26,24,0.05)] transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(28,26,24,0.05),0_30px_60px_-30px_rgba(34,26,66,0.35)]"
                >
                  <div className={`relative flex h-[200px] items-end justify-between overflow-hidden p-7 ${serviceBg[i]}`}>
                    <span className="rounded-md bg-white/70 px-2.5 py-1 font-mono text-[12px] font-medium uppercase tracking-[0.08em]">{s.product}</span>
                    <ProductGlyph
                      product={s.product}
                      className="absolute -right-4 -top-4 h-[220px] w-[220px] text-violet-dark/70 transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="display text-[clamp(24px,2.4vw,30px)]">{s.label}</h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-body">{s.need}</p>
                    <p className="mt-5 flex gap-3 border-t border-line pt-5 text-[15px] leading-relaxed">
                      <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${serviceBg[i]}`}>
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>
                        <span className="font-semibold">{serviceLabels.get}:</span> {s.get}
                      </span>
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-semibold text-violet">
                      {t.services.more} {s.product}
                      <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Come funziona: i tre passaggi accanto all'esempio dal colloquio al report */}
      <section id="how" className="mt-20 scroll-mt-24 bg-cream-2 py-20 sm:mt-28 sm:py-28">
        <Container className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Heading label={t.how.label}>{t.how.title}</Heading>
            <ol className="mt-12">
              {t.how.steps.map((s, i) => (
                <li key={s.n} className="reveal relative grid grid-cols-[48px_1fr] gap-5 pb-10 last:pb-0">
                  {i < t.how.steps.length - 1 && <span className="absolute bottom-0 left-[23px] top-12 w-0.5 bg-violet/20" aria-hidden="true" />}
                  <span className="display flex h-12 w-12 items-center justify-center rounded-full bg-violet text-[20px] text-white">{s.n}</span>
                  <div className="pt-2">
                    <h3 className="display text-[22px]">{s.title}</h3>
                    <p className="mt-2 max-w-[44ch] text-[16px] leading-relaxed text-body">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal lg:sticky lg:top-28">
            <EvidenceFlow lang={lang} />
          </div>
        </Container>
      </section>

      {/* Cosa ricevete: il report e il posto dove arriva */}
      <section className="pt-20 sm:pt-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Heading label={t.report.label}>{t.report.title}</Heading>
            <p className="reveal mt-6 max-w-[46ch] text-[17px] leading-relaxed text-body">{t.report.text}</p>
            <p className="reveal mt-4 max-w-[46ch] text-[17px] leading-relaxed text-body">{t.report.portal}</p>
            <Button href={localize(lang, "/method")} variant="outline" className="mt-9">
              {t.trust.example}
            </Button>
          </div>
          <div className="reveal relative">
            <div aria-hidden="true" className="absolute -bottom-6 -right-4 left-10 top-10 rounded-[20px] bg-lavender sm:-right-6" />
            <div className="relative">
              <ProductPreview lang={lang} />
            </div>
          </div>
        </Container>
      </section>

      {/* Perché fidarvi: un estratto di colloquio e le quattro ragioni */}
      <section id="why" className="scroll-mt-24 pt-24 sm:pt-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <Heading label={t.trust.label} className="max-w-[680px]">
              {t.trust.title.before}
              <Evidence code={t.trust.title.code} name={codeName(t.trust.title.code)}>
                {t.trust.title.mark}
              </Evidence>
            </Heading>
            <Button href={localize(lang, "/method")} variant="outline">
              {t.trust.link}
            </Button>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_1fr_1fr] lg:grid-rows-2">
            <figure className="reveal relative isolate m-0 flex flex-col justify-between overflow-hidden rounded-[20px] bg-night p-8 text-white sm:p-10 lg:row-span-2">
              <DotGrid className="text-white/[0.06]" />
              <figcaption className="font-mono text-[12px] uppercase tracking-[0.08em] text-white/60">
                {g.heroFlow.interview} · {g.heroFlow.minutes}
              </figcaption>
              <blockquote className="display mt-10 text-[clamp(22px,2.4vw,30px)] leading-snug">
                {g.heroFlow.quote.lead}
                <span className="rounded bg-ob px-1 text-ink [box-decoration-break:clone]">{g.heroFlow.quote.ob}</span>{" "}
                <span className="rounded bg-ps px-1 text-ink [box-decoration-break:clone]">{g.heroFlow.quote.ps}</span>
                {g.heroFlow.quote.end}
              </blockquote>
              <p className="mt-10 text-[14px] text-white/60">{g.check.sample}</p>
            </figure>
            {t.trust.reasons.map(([title, text], i) => (
              <div key={title} className={`reveal flex flex-col rounded-[20px] p-7 ${reasonBg[i]}`}>
                <span className="font-mono text-[12px] font-medium text-ink/60">0{i + 1}</span>
                <h3 className="display mt-auto pt-8 text-[22px]">{title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink/75">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Chi siamo */}
      <section id="team" className="scroll-mt-24 pt-24 sm:pt-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Heading label={t.about.label}>{t.about.title}</Heading>
            <p className="reveal mt-6 max-w-[48ch] text-[17px] leading-relaxed text-body">{t.about.text}</p>
            <Button href={localize(lang, "/about")} variant="outline" className="mt-9">
              {t.about.link}
            </Button>
          </div>
          <ul className="reveal grid gap-4 sm:grid-cols-2">
            {team.map((p) => (
              <li key={p.name} className="flex flex-col rounded-[20px] bg-white p-6 shadow-[0_0_0_1px_rgba(28,26,24,0.05)]">
                <span className={`display flex h-16 w-16 items-center justify-center rounded-2xl text-[22px] ${codeBg[p.code]}`} aria-hidden="true">
                  {initials(p.name)}
                </span>
                <span className="mt-8 text-[18px] font-semibold">{p.name}</span>
                <span className="mt-1 text-[14px] leading-snug text-body">{p.role}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand lang={lang} label={t.cta.label} title={t.cta.title} button={t.cta.button} />
    </>
  );
}

/** Due documenti sovrapposti: l'estratto del colloquio dietro, il report firmato davanti */
function HeroDocuments({ lang }: { lang: Locale }) {
  const g = graphics[lang].heroFlow;
  const c = graphics[lang].check;
  return (
    <figure className="relative m-0 mx-auto w-full max-w-[520px] pb-4" aria-label={g.label}>
      {/* Foglio viola di fondo, per dare spessore alla composizione */}
      <div aria-hidden="true" className="absolute bottom-0 left-[14%] right-0 top-[18%] rounded-[20px] bg-violet" />

      <div className={`relative mr-[14%] rounded-2xl bg-white p-6 pb-14 text-ink ${docShadow}`}>
        <div className="flex items-center justify-between text-[12px]">
          <span className="font-mono uppercase tracking-[0.08em] text-body">
            {g.interview} · {g.minutes}
          </span>
          <span className="font-mono text-body">00:12:41</span>
        </div>
        <blockquote className="mt-4 text-[16px] leading-[1.75]">
          {g.quote.lead}
          <span className="marker bg-ob py-px">{g.quote.ob}</span> <span className="marker bg-ps py-px">{g.quote.ps}</span>
          {g.quote.end}
        </blockquote>
      </div>

      <div className={`relative z-10 -mt-8 ml-[14%] overflow-hidden rounded-2xl bg-white text-ink ${docShadow}`}>
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-body">{g.report} · Viseria</span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-ac px-2.5 py-1 text-[12px] font-semibold">
            <Check />
            {g.signed}
          </span>
        </div>
        <div className="p-6">
          <ul className="space-y-2.5">
            {g.coded.map(([code, text], i) => (
              <li key={code} className="grid grid-cols-[68px_1fr] items-start gap-3">
                <span className={`rounded-md px-2 py-0.5 text-center text-[12px] font-semibold ${codedBg[i]}`}>{code}</span>
                <span className="text-[14px] leading-snug">{text}</span>
              </li>
            ))}
          </ul>
          <p className="display mt-5 rounded-xl bg-cream px-4 py-3.5 text-[19px] leading-snug">{g.finding}</p>
          <p className="mt-3 flex flex-wrap justify-between gap-2 font-mono text-[12px] text-body">
            <span>{g.proof}</span>
            <span>{c.signedByPsychologist}</span>
          </p>
        </div>
      </div>
    </figure>
  );
}
