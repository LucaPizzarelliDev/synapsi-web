import type { Metadata } from "next";
import { MethodSteps, NotWeDoList, Transcript } from "@/components/graphics";
import { Container, CtaBand, DotGrid, Heading, Mark, PageIntro } from "@/components/ui";
import { metodo } from "@/content/metodo";
import { getLang, pageMetadata } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata(lang, "/method", metodo[lang].meta);
}

const layerBg = ["bg-ps", "bg-ob", "bg-ac"];

export default async function MetodoPage() {
  const lang = await getLang();
  const t = metodo[lang];
  return (
    <>
      <PageIntro
        lang={lang}
        label={t.intro.label}
        title={
          <>
            {t.intro.title.before}
            <Mark code="PS">{t.intro.title.mark}</Mark>
          </>
        }
        lead={t.intro.lead}
        aside={<Transcript lang={lang} />}
      />

      <section className="pt-20 sm:pt-28">
        <Container>
          <Heading label={t.flow.label} className="max-w-[900px]">
            {t.flow.title}
          </Heading>
          <div className="mt-12">
            <MethodSteps lang={lang} />
          </div>
        </Container>
      </section>

      <section className="mt-20 bg-cream-2 py-20 sm:mt-28 sm:py-28">
        <Container>
          <Heading label={t.architecture.label} className="max-w-3xl">
            {t.architecture.title}
          </Heading>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {t.architecture.layers.map(([id, title, d], i) => (
              <li key={id} className={`flex flex-col rounded-[24px] p-7 ${layerBg[i % layerBg.length]}`}>
                <span className="inline-flex h-12 w-fit items-center rounded-full bg-white px-4 font-mono text-[15px] font-medium">{id}</span>
                <h3 className="display mt-6 text-[24px]">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink/80">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl leading-relaxed text-body">{t.architecture.note}</p>
        </Container>
      </section>

      <Container className="pt-20 sm:pt-28">
        <section className="relative isolate grid gap-12 overflow-hidden rounded-[28px] bg-night px-6 py-14 text-white sm:px-12 sm:py-20 lg:grid-cols-[1fr_1.4fr]">
          <DotGrid className="text-white/[0.07]" />
          <div>
            <p className="text-[14px] font-medium text-ob">{t.guarantees.label}</p>
            <h2 className="display mt-3 text-balance text-[clamp(32px,4.2vw,48px)]">{t.guarantees.title}</h2>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {t.guarantees.items.map(([title, d]) => (
              <div key={title} className="rounded-[20px] bg-white/10 p-6 ring-1 ring-white/15">
                <dt className="display text-[21px]">{title}</dt>
                <dd className="mt-2 leading-relaxed text-white/80">{d}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Container>

      <section className="pt-20 sm:pt-28">
        <Container className="flex flex-wrap gap-12">
          <Heading label={t.limits.label} className="flex-[1_1_360px]">
            {t.limits.title}
          </Heading>
          <div className="min-w-0 flex-[1.3_1_520px]">
            <NotWeDoList lang={lang} />
          </div>
        </Container>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
