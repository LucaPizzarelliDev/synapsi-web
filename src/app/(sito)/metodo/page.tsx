import type { Metadata } from "next";
import { MethodSteps, NotWeDoList, Transcript } from "@/components/graphics";
import { Container, CtaBand, Display, Mark, PageIntro, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Metodo",
  description: "Colloqui clinici strutturati, codifica tracciabile, revisione obbligatoria dello psicologo. Conforme a GDPR e AI Act.",
};

const layers = [
  ["L1", "Rigore clinico", "Modelli di personalità, schemi comportamentali, regolazione emotiva sotto stress."],
  ["L2", "Executive coaching", "Competenze strategiche, decisioni, impatto relazionale: la traduzione in piani di sviluppo."],
  ["L3", "Metodologia della ricerca", "Tracciabilità, validità di contenuto, saturazione, riduzione dei bias."],
];

const guarantees = [
  ["Psicologi iscritti all'Albo", "Conducono e valutano solo professionisti vincolati al segreto professionale."],
  ["AI Act", "Sorveglianza umana strutturale e tracciabilità di ogni punteggio, come richiesto ai sistemi che valutano persone."],
  ["GDPR e consenso", "Informativa e consenso esplicito per ogni persona. Al committente arrivano solo informazioni pertinenti al ruolo."],
  ["Validità a tempo", "I report descrivono una situazione attuale e decadono dopo dodici mesi senza riassessment."],
];

export default function MetodoPage() {
  return (
    <>
      <PageIntro
        label="§ Metodo"
        title={
          <>
            Qualitativo, <Mark code="PS">con rigore quantitativo.</Mark>
          </>
        }
        lead="Il dato nasce dal colloquio con uno psicologo, viene codificato con una tassonomia fissa e letto con griglie di costrutto validate in letteratura. L'intelligenza artificiale rende il processo veloce; il giudizio resta umano."
        aside={<Transcript />}
      />

      <section>
        <Container className="py-20 sm:py-28">
          <Section n="01">Il flusso</Section>
          <Display className="mt-4.5 max-w-[900px] text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Dalla voce alla firma, in quattro passaggi.</Display>
          <div className="mt-12">
            <MethodSteps />
          </div>
        </Container>
      </section>

      <section className="border-y-[1.5px] border-ink bg-paper-2">
        <Container className="py-20 sm:py-28">
          <Section n="02">Architettura</Section>
          <Display className="mt-4.5 max-w-3xl text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Tre livelli, ognuno con un compito.</Display>
          <div className="mt-12 grid gap-[1.5px] border-[1.5px] border-ink bg-ink md:grid-cols-3">
            {layers.map(([id, t, d]) => (
              <div key={id} className="flex flex-col gap-4 bg-paper p-7">
                <span className="logotype text-[44px]">[{id}]</span>
                <h3 className="display text-[24px]">{t}</h3>
                <p className="leading-relaxed text-body">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-body">
            Ogni modello teorico usato in uno strumento ha un solo ruolo dichiarato: cornice, griglia di codifica, blocco di intervista o lente
            analitica. Nessuna scatola nera.
          </p>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Section n="03" dark>
              Garanzie
            </Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">L&apos;AI trascrive e organizza. Non decide.</Display>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {guarantees.map(([t, d]) => (
              <div key={t} className="border border-rule-dark p-6">
                <dt className="display text-[22px]">{t}</dt>
                <dd className="mt-2 leading-relaxed text-body-dark">{d}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section>
        <Container className="flex flex-wrap gap-12 py-20 sm:py-28">
          <div className="flex-[1_1_360px]">
            <Section n="04">Confini</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Ciò che lo strumento non fa è parte del valore.</Display>
          </div>
          <div className="min-w-0 flex-[1.3_1_520px]">
            <NotWeDoList />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
