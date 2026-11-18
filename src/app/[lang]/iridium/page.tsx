import type { Metadata } from "next";
import { ProductGlyph } from "@/components/ProductGlyph";
import { Container, CtaBand, DocFrame, DotGrid, Heading, Mark, PageIntro } from "@/components/ui";
import { iridium } from "@/content/iridium";
import { shared } from "@/content/shared";
import { getLang, pageMetadata } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata(lang, "/iridium", iridium[lang].meta);
}

// colori e minuti della seduta, nello stesso ordine di iridium[lang].session.blocks
const sessionStyle = [
  { min: 30, cls: "bg-ob" },
  { min: 25, cls: "bg-ac" },
  { min: 5, cls: "bg-ps" },
];

// un colore per livello della rete: consulente, team leader, direzione
const levelBg = ["bg-ip", "bg-ob", "bg-ps"];

export default async function IridiumPage() {
  const lang = await getLang();
  const t = iridium[lang];
  const { services } = shared[lang];
  const service = services.find((s) => s.href === "/iridium")!;
  return (
    <>
      <PageIntro
        lang={lang}
        label={service.label}
        service={service}
        title={
          <>
            {t.intro.title.before}
            <Mark code="IP">{t.intro.title.mark}</Mark>
          </>
        }
        lead={t.intro.lead}
        aside={
          <div className="mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center rounded-[20px] bg-ip">
            <ProductGlyph product="Iridium" className="h-3/5 w-3/5 text-violet-dark/80" />
          </div>
        }
      />

      <section className="pt-20 sm:pt-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Heading label={t.audience.label}>{t.audience.title}</Heading>
            <p className="mt-5 text-[17px] leading-relaxed text-body">{t.audience.text}</p>
          </div>
          <ol className="grid gap-4">
            {t.audience.levels.map((l, i) => (
              <li key={l.n} className={`grid gap-3 rounded-2xl p-6 sm:grid-cols-[48px_170px_1fr] sm:items-start sm:gap-6 ${levelBg[i % levelBg.length]}`}>
                <span className="display flex h-12 w-12 items-center justify-center rounded-full bg-violet text-[18px] text-white">{l.n}</span>
                <span>
                  <span className="display block text-[24px]">{l.level}</span>
                  <span className="mt-1 inline-block rounded-full bg-white/70 px-2.5 py-0.5 font-mono text-[12px]">{l.tool}</span>
                </span>
                <span className="leading-relaxed text-ink/80">{l.text}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container className="pt-20 sm:pt-28">
        <section className="relative isolate overflow-hidden rounded-[20px] bg-night px-6 py-14 text-white sm:px-12 sm:py-20">
          <DotGrid className="text-white/[0.07]" />
          <p className="text-[14px] font-medium text-ob">{t.session.label}</p>
          <h2 className="display mt-3 max-w-3xl text-balance text-[clamp(32px,4.2vw,48px)]">{t.session.title}</h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row" role="img" aria-label={t.session.ariaLabel}>
            {t.session.blocks
              .map((b, i) => ({ ...b, ...sessionStyle[i] }))
              .map((s) => (
                <div key={s.name} className={`${s.cls} rounded-[20px] p-5 text-ink`} style={{ flexGrow: s.min, flexBasis: 0, minWidth: 140 }}>
                  <p className="inline-block rounded-full bg-white/70 px-2.5 py-0.5 font-mono text-[12px]">
                    {s.min} {t.session.min}
                  </p>
                  <p className="display mt-6 text-[22px]">{s.name}</p>
                  <p className="mt-1 text-[14px] text-ink/80">{s.what}</p>
                </div>
              ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-white/80">{t.session.note}</p>
        </section>
      </Container>

      <section className="pt-20 sm:pt-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <Heading label={t.outputs.label}>{t.outputs.title}</Heading>
            <p className="mt-5 text-[17px] leading-relaxed text-body">{t.outputs.text}</p>
          </div>
          <div className="grid gap-5">
            {t.outputs.cards.map((c) => (
              <DocFrame key={c.title} title={c.title} meta={c.meta}>
                <p className="px-5 py-5 leading-relaxed">{c.text}</p>
              </DocFrame>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20 bg-cream-2 py-20 sm:mt-28 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Heading label={t.access.label}>{t.access.title}</Heading>
            <p className="mt-5 text-[17px] leading-relaxed text-body">{t.access.text}</p>
          </div>
          <dl className="divide-y divide-line overflow-hidden rounded-2xl bg-white">
            {t.access.rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 px-6 py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="display text-[20px]">{k}</dt>
                <dd className="leading-relaxed text-body">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand lang={lang} title={t.cta.title} button={t.cta.button} />
    </>
  );
}
