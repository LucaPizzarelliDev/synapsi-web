import type { Metadata } from "next";
import { Container, CtaBand, Display, DocFrame, Mark, PageIntro, Section } from "@/components/ui";
import { codeBg, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description: "Quattro soci: due psicologi assessor e due developer specializzati in intelligenza artificiale.",
};

const initials = (name: string) =>
  name.startsWith("[")
    ? "··"
    : name
        .split(" ")
        .filter((w) => !w.startsWith("["))
        .map((w) => w[0])
        .join("");

export default function StudioPage() {
  return (
    <>
      <PageIntro
        label="Lo studio"
        title={
          <>
            Due psicologi. <Mark code="AC">Due specialisti AI.</Mark>
          </>
        }
        lead="Chi conduce i colloqui e legge le organizzazioni lavora accanto a chi costruisce gli strumenti che rendono quel lavoro più rapido e più tracciabile. Esperienza e nuove competenze, con lo stesso metodo."
      />

      <section>
        <Container className="py-20 sm:py-28">
          <Section n="01">Soci fondatori</Section>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((p) => (
              <li key={p.name}>
                <DocFrame title={p.tag} meta={`[${p.code}]`}>
                  <div className={`flex aspect-[4/5] items-center justify-center ${codeBg[p.code]}`} aria-hidden="true">
                    <span className="logotype text-[52px]">{initials(p.name)}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 border-t-[1.5px] border-ink px-4.5 py-4">
                    <h2 className="display text-[22px]">{p.name}</h2>
                    <p className="text-[15px] leading-relaxed text-body">{p.role}</p>
                  </div>
                </DocFrame>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[12px] text-body">Foto ritratto in arrivo.</p>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Section n="02" dark>
              Ricerca
            </Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Università Cattolica del Sacro Cuore, Brescia.</Display>
          </div>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-body-dark">
            <p>
              Lo strumento individuale, allora chiamato Hermia e oggi Viseria, è stato oggetto di una tesi discussa all’Università Cattolica di Brescia, che ne ha studiato l’applicazione in
              un’azienda reale. È la prima validazione esterna e accademica del metodo.
            </p>
            <p>La collaborazione prosegue con nuove tesi e studi di validazione, a partire dall’accordo fra valutatori.</p>
          </div>
        </Container>
      </section>

      <CtaBand title="Lavoriamo insieme." button="Scrivici" />
    </>
  );
}
