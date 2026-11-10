import type { Metadata } from "next";
import { PitchDiagram } from "@/components/graphics";
import { ProductGlyph } from "@/components/ProductGlyph";
import { Arrow, Button, Container, CtaBand, Display, DotGrid, Heading } from "@/components/ui";
import { sport } from "@/content/sport";
import { localize } from "@/lib/i18n";
import { getLang, pageMetadata } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata(lang, "/sport", sport[lang].meta);
}

const readingBg = ["bg-ob", "bg-ps", "bg-ac"];

export default async function SportPage() {
  const lang = await getLang();
  const t = sport[lang];
  return (
    <>
      <section className="relative isolate overflow-hidden bg-night text-white">
        <DotGrid className="text-white/[0.07]" />
        <Container className="flex flex-wrap items-center gap-x-[clamp(40px,5vw,80px)] gap-y-12 py-16 sm:py-24">
          <div className="min-w-0 flex-[1.2_1_520px]">
            <p className="text-[14px] font-medium text-ob">{t.hero.kicker}</p>
            <Display as="h1" className="mt-5 text-[clamp(2.75rem,5.4vw,5rem)]">
              {t.hero.title.before}
              <span className="text-ob">{t.hero.title.accent}</span>
            </Display>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">{t.hero.lead}</p>
            <div className="mt-9">
              <Button href={localize(lang, "/contact")} variant="ob">
                {t.hero.button} <Arrow className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <PitchDiagram lang={lang} className="max-w-[400px] flex-[1_1_300px]" />
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container className="grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col rounded-[28px] bg-ob p-7 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[14px] font-medium text-ink/70">
                {t.viseria.frameTitle} · {t.viseria.frameMeta}
              </p>
              <ProductGlyph product="Viseria" className="h-14 w-14 shrink-0 text-violet-dark/80" />
            </div>
            <h2 className="display mt-6 text-[clamp(28px,3.2vw,40px)]">{t.viseria.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{t.viseria.text}</p>
            <p className="mt-4 text-lg leading-relaxed">
              <span className="rounded-md bg-white px-1 [box-decoration-break:clone]">{t.viseria.mark}</span>
              {t.viseria.after}
            </p>
          </article>
          <article className="flex flex-col rounded-[28px] bg-ac p-7 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[14px] font-medium text-ink/70">
                {t.chimeria.frameTitle} · {t.chimeria.frameMeta}
              </p>
              <ProductGlyph product="Chimeria" className="h-14 w-14 shrink-0 text-violet-dark/80" />
            </div>
            <h2 className="display mt-6 text-[clamp(28px,3.2vw,40px)]">{t.chimeria.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{t.chimeria.text}</p>
            <p className="mt-4 text-lg leading-relaxed">
              <span className="rounded-md bg-white px-1 [box-decoration-break:clone]">{t.chimeria.mark}</span>
            </p>
          </article>
        </Container>
      </section>

      <section className="mt-20 bg-cream-2 py-20 sm:mt-28 sm:py-28">
        <Container>
          <Heading label={t.readings.label} className="max-w-3xl">
            {t.readings.title}
          </Heading>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {t.readings.items.map((r, i) => (
              <li key={r.title} className="flex flex-col rounded-[24px] bg-white p-7">
                <span className={`display flex h-12 w-12 items-center justify-center rounded-full text-[20px] ${readingBg[i % readingBg.length]}`}>{i + 1}</span>
                <h3 className="display mt-6 text-[24px]">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{r.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Heading label={t.cases.label}>{t.cases.title}</Heading>
          <ul className="grid gap-3">
            {t.cases.items.map((c, i) => (
              <li key={c} className="flex items-start gap-4 rounded-[20px] bg-white p-5 text-lg leading-relaxed">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet text-[14px] font-semibold text-white">{i + 1}</span>
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="pt-20 sm:pt-28">
        <section className="relative isolate overflow-hidden rounded-[28px] bg-night px-6 py-14 text-white sm:px-12 sm:py-20">
          <DotGrid className="text-white/[0.07]" />
          <p className="text-[14px] font-medium text-ob">{t.steps.label}</p>
          <h2 className="display mt-3 max-w-3xl text-balance text-[clamp(32px,4.2vw,48px)]">{t.steps.title}</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.items.map(([k, d], i) => (
              <li key={k} className="flex flex-col gap-3 rounded-[20px] bg-white/10 p-6 ring-1 ring-white/15">
                <span className="display flex h-10 w-10 items-center justify-center rounded-full bg-ob text-[17px] text-ink">{i + 1}</span>
                <h3 className="display mt-2 text-[22px]">{k}</h3>
                <p className="text-[15px] leading-relaxed text-white/80">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl leading-relaxed text-white/80">{t.steps.note}</p>
        </section>
      </Container>

      <CtaBand lang={lang} title={t.cta.title} button={t.cta.button} />
    </>
  );
}
