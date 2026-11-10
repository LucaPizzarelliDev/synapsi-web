import type { Metadata } from "next";
import { Container, CtaBand, DotGrid, Mark, PageIntro } from "@/components/ui";
import { shared } from "@/content/shared";
import { studio } from "@/content/studio";
import { codeBg } from "@/lib/site";
import { getLang, pageMetadata } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata(lang, "/about", studio[lang].meta);
}

const initials = (name: string) =>
  name.startsWith("[")
    ? "··"
    : name
        .split(" ")
        .filter((w) => !w.startsWith("["))
        .map((w) => w[0])
        .join("");

export default async function StudioPage() {
  const lang = await getLang();
  const t = studio[lang];
  const { team } = shared[lang];
  return (
    <>
      <PageIntro
        lang={lang}
        label={t.intro.label}
        title={
          <>
            {t.intro.title.before}
            <Mark code="AC">{t.intro.title.mark}</Mark>
          </>
        }
        lead={t.intro.lead}
      />

      <section className="pt-12 sm:pt-16">
        <Container>
          <h2 className="text-[14px] font-medium text-violet">{t.founders.label}</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((p) => (
              <li key={p.name} className="flex flex-col overflow-hidden rounded-[24px] bg-white">
                <div className={`relative flex aspect-[4/5] items-center justify-center ${codeBg[p.code]}`}>
                  <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[13px] font-medium">{p.tag}</span>
                  <span className="display flex h-28 w-28 items-center justify-center rounded-full bg-white/70 text-[40px]" aria-hidden="true">
                    {initials(p.name)}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 px-5 py-5">
                  <h3 className="display text-[22px]">{p.name}</h3>
                  <p className="text-[15px] leading-relaxed text-body">{p.role}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[14px] text-body">{t.founders.photoNote}</p>
        </Container>
      </section>

      <Container className="pt-20 sm:pt-28">
        <section className="relative isolate grid gap-12 overflow-hidden rounded-[28px] bg-night px-6 py-14 text-white sm:px-12 sm:py-20 lg:grid-cols-2">
          <DotGrid className="text-white/[0.07]" />
          <div>
            <p className="text-[14px] font-medium text-ob">{t.research.label}</p>
            <h2 className="display mt-3 text-balance text-[clamp(32px,4.2vw,48px)]">{t.research.title}</h2>
          </div>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-white/80">
            {t.research.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      </Container>

      <CtaBand lang={lang} title={t.cta.title} button={t.cta.button} />
    </>
  );
}
