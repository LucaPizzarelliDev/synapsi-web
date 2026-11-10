import type { Metadata } from "next";
import { OrgMap } from "@/components/graphics";
import { Container, CtaBand, DocFrame, DotGrid, Heading, Mark, PageIntro, Section } from "@/components/ui";
import { chimeria } from "@/content/chimeria";
import { shared } from "@/content/shared";
import { getLang, pageMetadata } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata(lang, "/chimeria", chimeria[lang].meta);
}

// stili degli stati, nello stesso ordine di chimeria[lang].map.states
// Stessi colori degli stati di OrgMap (graphics.tsx)
const stateCls = ["bg-violet", "bg-ob", "bg-ip", "border border-dashed border-ink/30 bg-white"];

// intervalli delle aree per gruppo e colore dei riquadri, nello stesso ordine di chimeria[lang].areas.groups
const groupLayout = [
  { from: 0, to: 4, bg: "bg-ob" },
  { from: 4, to: 11, bg: "bg-ps" },
  { from: 11, to: 12, bg: "bg-ac" },
];

const registerBg = ["bg-ob", "bg-ps", "bg-ip"];

export default async function ChimeriaPage() {
  const lang = await getLang();
  const t = chimeria[lang];
  const { chimeriaCriteria, services } = shared[lang];
  const service = services.find((s) => s.href === "/chimeria")!;
  return (
    <>
      <PageIntro
        lang={lang}
        label={<>{service.label} · {service.product}</>}
        service={service}
        title={
          <>
            {t.intro.title.before}
            <Mark code="AC">{t.intro.title.mark}</Mark>
          </>
        }
        lead={t.intro.lead}
      />

      <section className="mt-12 bg-cream-2 py-20 sm:mt-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:items-center">
          <div>
            <Heading label={t.map.label}>{t.map.title}</Heading>
            <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-body">{t.map.text}</p>
            <ul className="mt-8 grid gap-2.5">
              {t.map.states.map((s, i) => (
                <li key={s.s} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3">
                  <span className={`mt-1 h-4 w-4 shrink-0 rounded-full ${stateCls[i]}`} aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">{s.s}.</strong> <span className="text-body">{s.client}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <OrgMap lang={lang} />
          </div>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container>
          <Heading label={t.areas.label} className="max-w-3xl">
            {t.areas.title}
          </Heading>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-body">{t.areas.text}</p>
          <div className="mt-12 flex flex-col gap-10">
            {t.areas.groups.map((group, gi) => ({ ...group, ...groupLayout[gi] })).map((g) => (
              <div key={g.label}>
                <p className="text-[15px] leading-relaxed">
                  <span className="mr-2 text-[14px] font-medium text-violet">{g.label}</span>
                  <span className="text-body">{g.note}</span>
                </p>
                <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {chimeriaCriteria.slice(g.from, g.to).map((c, i) => (
                    <li key={c} className={`flex min-h-32 flex-col justify-between gap-5 rounded-[24px] p-5 ${g.bg}`}>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-mono text-[13px] font-medium">
                        {String(g.from + i + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-[22px] leading-tight">{c}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-night px-6 py-12 text-white sm:px-12 lg:py-16">
            <DotGrid className="text-white/[0.07]" />
            <Section dark>{t.lines.label}</Section>
            <h2 className="display mt-3 max-w-3xl text-balance text-[clamp(32px,4.2vw,48px)]">{t.lines.title}</h2>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {t.lines.items.map((l) => (
                <article key={l.name} className="flex flex-col gap-3 rounded-[24px] bg-white/[0.07] p-7 ring-1 ring-white/15">
                  <span className="text-[13px] font-medium text-ob">{l.meta}</span>
                  <h3 className="display text-[30px]">{l.name}</h3>
                  <p className="leading-relaxed text-white/80">{l.text}</p>
                  <dl className="mt-auto divide-y divide-white/15 pt-4">
                    {l.rows.map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 py-2.5 text-[14px]">
                        <dt className="text-white/65">{k}</dt>
                        <dd className="text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div>
            <Heading label={t.outputs.label}>{t.outputs.title}</Heading>
            <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-body">{t.outputs.text}</p>
          </div>
          <DocFrame title={t.outputs.frameTitle} meta={t.outputs.frameMeta}>
            <dl className="divide-y divide-line">
              {t.outputs.items.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                  <dt className="display text-[18px]">{k}</dt>
                  <dd className="leading-relaxed text-body">{v}</dd>
                </div>
              ))}
            </dl>
          </DocFrame>
        </Container>
      </section>

      <section className="mt-20 bg-cream-2 py-20 sm:mt-28 sm:py-28">
        <Container>
          <Heading label={t.registers.label} className="max-w-3xl">
            {t.registers.title}
          </Heading>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.registers.items.map(([k, v], i) => (
              <div key={k} className={`flex flex-col rounded-[24px] p-7 ${registerBg[i % registerBg.length]}`}>
                <span className="text-[13px] font-medium text-ink/70">
                  {t.registers.frame} {i + 1}
                </span>
                <p className="display mt-4 text-[24px] leading-snug">
                  {t.registers.open}
                  {k}
                  {t.registers.close}
                </p>
                <p className="mt-3 leading-relaxed text-ink/80">{v}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand lang={lang} title={t.cta.title} button={t.cta.button} />
    </>
  );
}
