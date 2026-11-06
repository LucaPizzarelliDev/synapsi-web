import Link from "next/link";
import { EvidenceFlow, HeroFlow } from "@/components/graphics";
import { Button, Container, CtaBand, Display, Mark, Section } from "@/components/ui";
import { services, team } from "@/lib/site";

const steps = [
  { n: "1", title: "Ci dite cosa dovete decidere", text: "Un primo incontro: la domanda, le persone coinvolte, i tempi. Vi diciamo se e come possiamo aiutarvi." },
  { n: "2", title: "Uno psicologo ascolta le persone", text: "Colloqui di 45–60 minuti su episodi reali di lavoro. L'AI trascrive e organizza il materiale, lo psicologo lo legge." },
  { n: "3", title: "Ricevete un report e ne parliamo", text: "Un documento chiaro, firmato da uno psicologo, con la prova di ogni conclusione. Poi una restituzione a voce." },
];

const reasons = [
  ["Fatti, non opinioni", "Chiediamo cosa è successo, non cosa la persona pensa di sé. Un questionario vi dà un numero, un colloquio vi dice perché."],
  ["Ogni conclusione ha la sua prova", "Nel report, accanto a ogni giudizio, c'è l'episodio da cui nasce. Potete sempre verificare."],
  ["Firma di uno psicologo", "L'AI rende il lavoro veloce. Il giudizio e la firma restano di uno psicologo iscritto all'Albo."],
  ["Confini chiari", "Niente test di personalità, diagnosi cliniche o classifiche fra persone. La decisione resta vostra."],
];

export default function Home() {
  return (
    <>
      {/* HERO: chi siamo e cosa facciamo, in una frase */}
      <section className="border-b-[1.5px] border-ink">
        <Container className="flex flex-wrap items-center gap-x-[clamp(40px,5vw,72px)] gap-y-12 pb-16 pt-12 sm:pt-20 lg:pb-24">
          <div className="min-w-0 flex-[1.2_1_520px]">
          <p className="text-[11px] font-normal uppercase tracking-[0.12em] text-body">Psicologi del lavoro + intelligenza artificiale · Brescia</p>
          <Display as="h1" className="mt-7 text-[clamp(2.5rem,4.1vw,4rem)]">
            Vi aiutiamo a capire <Mark code="OB">come lavorano davvero</Mark> le vostre persone.
          </Display>
          <p className="mt-8 max-w-[680px] text-[clamp(17px,1.4vw,20px)] leading-relaxed">
            Valutiamo persone, manager e organizzazioni con colloqui condotti da psicologi. Vi consegniamo un report chiaro e firmato, per decidere chi
            scegliere, chi far crescere e dove intervenire.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contatti">
              Parliamo del vostro caso <span aria-hidden="true">→</span>
            </Button>
            <Button href="#servizi" variant="outline">
              Cosa possiamo fare per voi
            </Button>
          </div>
          </div>
          <div className="min-w-0 flex-[1_1_400px]">
            <HeroFlow />
          </div>
        </Container>
      </section>

      {/* SERVIZI: partono dal problema del cliente */}
      <section id="servizi" className="scroll-mt-20">
        <Container className="py-20 sm:py-28">
          <Section n="01">Cosa possiamo fare per voi</Section>
          <Display className="mt-4.5 max-w-[900px] text-[clamp(2.25rem,3.6vw,3.25rem)] leading-[1.05]">Partite dalla vostra domanda.</Display>
          <ul className="mt-12 border-t-[1.5px] border-ink">
            {services.map((s) => (
              <li key={s.href} className="border-b-[1.5px] border-ink">
                <Link
                  href={s.href}
                  className="group grid gap-x-10 gap-y-4 py-8 transition-colors hover:bg-primary-soft lg:grid-cols-[1.15fr_1fr_1fr_auto] lg:px-4"
                >
                  <div>
                    <p className="text-[11px] font-normal uppercase tracking-[0.12em]">{s.label}</p>
                    <p className="display mt-3 text-[clamp(1.5rem,2vw,1.875rem)] leading-[1.15]">{s.need}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-normal uppercase tracking-[0.12em]">Cosa facciamo</p>
                    <p className="mt-3 leading-relaxed text-body">{s.what}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-normal uppercase tracking-[0.12em]">Cosa ricevete</p>
                    <p className="mt-3 leading-relaxed text-body">{s.get}</p>
                  </div>
                  <span className="flex items-center gap-3 self-end text-[13px] font-normal uppercase tracking-[0.08em] text-primary lg:self-center">
                    {s.product}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* COME FUNZIONA */}
      <section className="bg-ink text-paper">
        <Container className="py-20 sm:py-28">
          <Section n="02" dark>
            Come funziona
          </Section>
          <Display className="mt-4.5 text-[clamp(2.25rem,3.6vw,3.25rem)] leading-[1.05]">Tre passaggi, sempre gli stessi.</Display>
          <ol className="mt-12 grid gap-8 border-t border-rule-dark pt-8 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n}>
                <span className="flex h-10 w-10 items-center justify-center bg-primary text-[15px] font-medium text-paper">{s.n}</span>
                <h3 className="display mt-5 text-[24px]">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-body-dark">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* PERCHÉ NOI, con un esempio concreto */}
      <section>
        <Container className="flex flex-wrap items-start gap-x-[clamp(40px,5vw,80px)] gap-y-12 py-20 sm:py-28">
          <div className="min-w-0 flex-[1_1_440px]">
            <Section n="03">Perché fidarvi</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.6vw,3.25rem)] leading-[1.05]">Non vi diamo un punteggio. Vi diamo le prove.</Display>
            <dl className="mt-10 border-t-[1.5px] border-ink">
              {reasons.map(([t, d]) => (
                <div key={t} className="border-b-[1.5px] border-ink py-5">
                  <dt className="font-semibold">{t}</dt>
                  <dd className="mt-1.5 leading-relaxed text-body">{d}</dd>
                </div>
              ))}
            </dl>
            <Link href="/metodo" className="mt-8 inline-flex font-semibold text-primary underline underline-offset-[6px] hover:text-primary-dark">
              Come lavoriamo, nel dettaglio →
            </Link>
          </div>
          <div className="min-w-0 flex-[1_1_440px]">
            <p className="pb-3 text-[11px] font-normal uppercase tracking-[0.12em]">Un esempio: dalla frase al report</p>
            <EvidenceFlow />
          </div>
        </Container>
      </section>

      {/* CHI SIAMO */}
      <section className="border-t-[1.5px] border-ink">
        <Container className="flex flex-wrap gap-12 py-20 sm:py-28">
          <div className="flex-[1_1_360px]">
            <Section n="04">Chi siamo</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.6vw,3.25rem)] leading-[1.05]">Due psicologi. Due specialisti AI.</Display>
            <p className="mt-4.5 max-w-[440px] text-[17px] leading-relaxed text-body">
              Chi conduce i colloqui lavora accanto a chi costruisce gli strumenti. Il metodo è stato oggetto di una tesi all’Università Cattolica di
              Brescia, applicato in un’azienda reale.
            </p>
            <Link href="/studio" className="mt-8 inline-flex font-semibold text-primary underline underline-offset-[6px] hover:text-primary-dark">
              Conosci lo studio →
            </Link>
          </div>
          <ul className="min-w-0 flex-[1.3_1_520px] self-end">
            {team.map((p, i) => (
              <li
                key={p.name}
                className={`grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-t-[1.5px] border-ink py-4 ${i === team.length - 1 ? "border-b-[1.5px]" : ""}`}
              >
                <span className="display text-[21px] font-bold tracking-[-0.02em]">{p.name}</span>
                <span className="text-body">{p.role}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title="Avete una decisione da prendere su una persona o un'organizzazione?" button="Parliamone" />
    </>
  );
}
