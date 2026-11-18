import type { Metadata } from "next";
import { ScoutingCard } from "@/components/graphics";
import { Container, CtaBand, DocFrame, DotGrid, Heading, Mark, PageIntro, Section } from "@/components/ui";
import { shared } from "@/content/shared";
import { viseria } from "@/content/viseria";
import { getLang, pageMetadata } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata(lang, "/viseria", viseria[lang].meta);
}

// Un colore per riquadro: i quattro codici più la sabbia, a rotazione
const tileBg = ["bg-ob", "bg-ps", "bg-ac", "bg-ip", "bg-sand"];

export default async function ViseriaPage() {
  const lang = await getLang();
  const t = viseria[lang];
  const { viseriaFactors, services } = shared[lang];
  const service = services.find((s) => s.href === "/viseria")!;
  const assetti = t.sustainability.states;
  const { client, person, validity } = t.collection;
  const collection = [
    {
      ...client,
      body: (
        <>
          {client.text.before}
          <strong className="font-semibold">{client.text.strong}</strong>
          {client.text.after}
        </>
      ),
    },
    { ...person, body: person.text },
    { ...validity, body: validity.text },
  ];
  return (
    <>
      <PageIntro
        lang={lang}
        label={<>{service.label} · {service.product}</>}
        service={service}
        title={
          <>
            {t.intro.title.before}
            <Mark code="OB">{t.intro.title.mark}</Mark>
            {t.intro.title.after}
          </>
        }
        lead={t.intro.lead}
        aside={<ScoutingCard lang={lang} meta={t.intro.cardMeta} />}
      />

      <section className="pt-20 sm:pt-28">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Heading label={t.factors.label}>{t.factors.title}</Heading>
            <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-body">{t.factors.text}</p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {viseriaFactors.map((f) => (
              <li key={f.id} className="flex flex-col rounded-2xl bg-white p-6">
                <span className="inline-flex h-9 min-w-9 items-center justify-center self-start rounded-full bg-violet px-2.5 font-mono text-[13px] font-medium text-white">
                  {f.id}
                </span>
                <h3 className="display mt-5 text-[22px]">{f.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">
                  {t.factors.quoteOpen}
                  {f.question}
                  {t.factors.quoteClose}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container>
          <div className="relative isolate grid gap-10 overflow-hidden rounded-[20px] bg-night px-6 py-12 text-white sm:px-12 lg:grid-cols-2 lg:items-end lg:py-16">
            <DotGrid className="text-white/[0.07]" />
            <div>
              <Section dark>{t.sustainability.label}</Section>
              <h2 className="display mt-3 text-balance text-[clamp(32px,4.2vw,48px)]">{t.sustainability.title}</h2>
              <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-white/80">{t.sustainability.text}</p>
            </div>
            <ul className="grid gap-3">
              {assetti.map((a, i) => (
                <li
                  key={a}
                  className={`flex items-center justify-between gap-4 rounded-[20px] px-5 py-4 ${i === 0 ? "bg-ac text-ink" : "bg-white/10 ring-1 ring-white/15"}`}
                >
                  <span className="display text-[clamp(1.4rem,2.4vw,2rem)]">{a}</span>
                  <span className={`text-[13px] font-medium ${i === 0 ? "text-ink/70" : "text-white/60"}`}>
                    {t.sustainability.stateLabel}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container>
          <Heading label={t.collection.label} className="max-w-4xl">
            {t.collection.title}
          </Heading>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {collection.map((c) => (
              <DocFrame key={c.title} title={c.title} meta={c.meta}>
                <p className="px-5 py-5 text-[16px] leading-relaxed">{c.body}</p>
              </DocFrame>
            ))}
          </div>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            {t.collection.rules.map(([k, d]) => (
              <div key={k} className="rounded-2xl bg-cream-2 p-6">
                <dt className="display text-[22px]">{k}</dt>
                <dd className="mt-2 leading-relaxed text-body">{d}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="mt-20 bg-cream-2 py-20 sm:mt-28 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <div>
            <Heading label={t.deliverable.label}>
              {t.deliverable.title.before}
              <Mark code="OB">{t.deliverable.title.mark}</Mark>
              {t.deliverable.title.after}
            </Heading>
            <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-body">{t.deliverable.text}</p>
            <dl className="mt-8 divide-y divide-line overflow-hidden rounded-2xl bg-white">
              {t.deliverable.scale.map(([n, l]) => (
                <div key={n} className="flex items-center gap-4 px-5 py-3">
                  <dt className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lavender font-mono text-[13px] font-medium text-violet-dark">
                    {n}
                  </dt>
                  <dd>{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <DocFrame
              title={t.deliverable.cardTitle}
              meta={t.deliverable.cardMeta}
              caption={<p className="text-[13px] leading-relaxed text-body">{t.deliverable.cardCaption}</p>}
            >
              <dl className="divide-y divide-line">
                {t.deliverable.card.map(([k, v]) => (
                  <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                    <dt className="display text-[18px]">{k}</dt>
                    <dd className="leading-relaxed text-body">{v}</dd>
                  </div>
                ))}
              </dl>
            </DocFrame>
            <p className="mt-4 rounded-2xl bg-ip px-4 py-3 text-[14px] leading-relaxed">{t.deliverable.forbidden}</p>
          </div>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container>
          <Heading label={t.uses.label} className="max-w-3xl">
            {t.uses.title}
          </Heading>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.uses.items.map((u, i) => (
              <li key={u} className={`flex flex-col gap-5 rounded-2xl p-6 ${tileBg[i % tileBg.length]}`}>
                <span className="display flex h-10 w-10 items-center justify-center rounded-full bg-white text-[17px]">{i + 1}</span>
                <p className="text-[17px] leading-snug">{u}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand lang={lang} title={t.cta.title} button={t.cta.button} />
    </>
  );
}
