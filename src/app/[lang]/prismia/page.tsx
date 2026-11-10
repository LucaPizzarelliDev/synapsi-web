import type { Metadata } from "next";
import { Container, CtaBand, DocFrame, DotGrid, Heading, Mark, PageIntro, Section } from "@/components/ui";
import { prismia, type PrismiaContent } from "@/content/prismia";
import { shared } from "@/content/shared";
import { getLang, pageMetadata } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata(lang, "/prismia", prismia[lang].meta);
}

// Dimensioni e colore di ogni cella del quadrante, nell'ordine di quadrant.cells
const cellLayout = [
  { dims: ["D1", "D5"], cls: "bg-ac" },
  { dims: ["D2"], cls: "bg-ip" },
  { dims: ["D3"], cls: "bg-ps" },
  { dims: ["D4"], cls: "bg-ob" },
];

/** Quadrante sé-altri: dove si collocano le cinque dimensioni (esempio) */
function Quadrant({ t, dimensions }: { t: PrismiaContent["quadrant"]; dimensions: { id: string; name: string }[] }) {
  const cells = t.cells.map((c, i) => ({ ...c, ...cellLayout[i] }));
  return (
    <DocFrame title={t.title} meta={t.meta} caption={<p className="text-[13px] leading-relaxed text-body">{t.sources}</p>}>
      <div className="grid grid-cols-2 gap-2 p-4">
        {cells.map((c) => (
          <div key={c.t} className={`flex min-h-36 flex-col justify-between gap-3 rounded-2xl p-4 ${c.cls}`}>
            <div>
              <p className="display text-[20px]">{c.t}</p>
              <p className="mt-1 text-[13px] leading-snug text-ink/75">{c.d}</p>
            </div>
            <p className="flex flex-wrap gap-1.5">
              {c.dims.map((d) => (
                <span key={d} className="rounded-full bg-white px-2.5 py-1 text-[12px] font-medium">
                  <span className="font-mono">{d}</span> {dimensions.find((x) => x.id === d)?.name}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </DocFrame>
  );
}

export default async function PrismiaPage() {
  const lang = await getLang();
  const t = prismia[lang];
  const { prismiaDimensions, services } = shared[lang];
  const service = services.find((s) => s.href === "/prismia")!;
  return (
    <>
      <PageIntro
        lang={lang}
        label={<>{service.label} · {service.product}</>}
        service={service}
        title={
          <>
            {t.intro.title.before}
            <Mark code="PS">{t.intro.title.mark}</Mark>
            {t.intro.title.after}
          </>
        }
        lead={t.intro.lead}
        aside={<Quadrant t={t.quadrant} dimensions={prismiaDimensions} />}
      />

      <section className="pt-20 sm:pt-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-14">
          <div>
            <Heading label={t.dimensions.label}>{t.dimensions.title}</Heading>
            <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-body">{t.dimensions.text}</p>
            <p className="mt-6 flex flex-wrap gap-2">
              {t.dimensions.levels.map((l) => (
                <span key={l} className="rounded-full bg-lavender px-3.5 py-1.5 text-[14px] font-medium text-violet-dark">
                  {l}
                </span>
              ))}
            </p>
          </div>
          <ol className="grid gap-3">
            {prismiaDimensions.map((d) => (
              <li key={d.id} className="flex items-center gap-5 rounded-[24px] bg-white px-6 py-5">
                <span className="inline-flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-violet px-2.5 font-mono text-[13px] font-medium text-white">
                  {d.id}
                </span>
                <span className="display text-[24px]">{d.name}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container>
          <div className="relative isolate grid gap-10 overflow-hidden rounded-[28px] bg-night px-6 py-12 text-white sm:px-12 lg:grid-cols-2 lg:items-end lg:py-16">
            <DotGrid className="text-white/[0.07]" />
            <div>
              <Section dark>{t.sources.label}</Section>
              <h2 className="display mt-3 text-balance text-[clamp(32px,4.2vw,48px)]">{t.sources.title}</h2>
              <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-white/80">{t.sources.text}</p>
            </div>
            <div className="overflow-hidden rounded-[24px] bg-white text-ink">
              <table className="w-full text-left">
                <caption className="sr-only">{t.sources.caption}</caption>
                <tbody className="divide-y divide-line">
                  {t.sources.rows.map(([s, n, m]) => (
                    <tr key={s}>
                      <th scope="row" className="display py-4 pl-5 pr-4 text-[clamp(1.25rem,2vw,1.6rem)] font-semibold">
                        {s}
                      </th>
                      <td className="py-4 pr-4 text-body">{n}</td>
                      <td className="py-4 pr-5 text-right">
                        <span className="inline-block rounded-full bg-lavender px-2.5 py-1 font-mono text-[12px] text-violet-dark">{m}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container>
          <Heading label={t.card.label} className="max-w-3xl">
            {t.card.title}
          </Heading>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.card.pages.map(([n, title, d]) => (
              <li key={n} className={`flex flex-col gap-3 rounded-[24px] p-6 ${n === "06" ? "bg-ob" : "bg-white"}`}>
                <span
                  className={`self-start rounded-full px-3 py-1 text-[13px] font-medium ${n === "06" ? "bg-white text-ink" : "bg-lavender text-violet-dark"}`}
                >
                  {t.card.page} {n}
                </span>
                <h3 className="display mt-2 text-[24px]">{title}</h3>
                <p className={`leading-relaxed ${n === "06" ? "text-ink/80" : "text-body"}`}>{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl leading-relaxed text-body">{t.card.note}</p>
        </Container>
      </section>

      <section className="mt-20 bg-cream-2 py-20 sm:mt-28 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <div>
            <Heading label={t.privacy.label}>
              {t.privacy.title.before}
              <Mark code="OB">{t.privacy.title.mark}</Mark>
              {t.privacy.title.after}
            </Heading>
            <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-body">{t.privacy.text}</p>
          </div>
          <dl className="grid gap-3">
            {t.privacy.rules.map(([k, v]) => (
              <div key={k} className="grid gap-1 rounded-[24px] bg-white p-6 sm:grid-cols-[160px_1fr] sm:gap-6">
                <dt className="display text-[22px]">{k}</dt>
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
