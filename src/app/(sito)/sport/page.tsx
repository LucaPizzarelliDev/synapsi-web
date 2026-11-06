import type { Metadata } from "next";
import { PitchDiagram } from "@/components/graphics";
import { Button, Container, CtaBand, Display, DocFrame, Mark, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sport",
  description: "Viseria e Chimeria per le società sportive: atleti, allenatori e staff nel loro ruolo, il club come organizzazione.",
};

const readings = [
  { title: "Prontezza al cambiamento", text: "Quanto il club è pronto a un nuovo allenatore, a un nuovo progetto tecnico, a un cambio di proprietà." },
  { title: "Domino", text: "Dove le persone collocano l'insuccesso, il campo, il mercato, la società, e dove invece stanno i segnali." },
  { title: "Interfacce", text: "Lo stesso passaggio raccontato da due aree: il rientro da infortunio visto dall'area medica e dallo staff tecnico." },
];

const cases = [
  "Un assistente promosso a capo allenatore: cosa gli serve per far valere lo standard che già conosce.",
  "Un capitano di lungo corso che il club vorrebbe nello staff: quali condizioni rendono il passaggio sostenibile.",
  "Un settore giovanile con 30 allenatori che non condividono uno standard: dove si rompe la trasmissione.",
  "Un club appena acquistato: cosa la nuova proprietà eredita davvero.",
];

const steps = [
  ["Mandato", "Con la proprietà o la direzione sportiva: cosa si legge, chi, con quali limiti d'uso."],
  ["Interviste", "In sede, nelle finestre del calendario: ritiro, soste, fine stagione."],
  ["Analisi", "Trascrizione e codifica assistite; ogni valutazione rivista e firmata dal professionista."],
  ["Restituzione", "Alla direzione la mappa anonimizzata; a ogni persona la propria Scouting Card, in colloquio."],
];

export default function SportPage() {
  return (
    <>
      <section className="overflow-hidden bg-ink text-paper">
        <Container className="flex flex-wrap items-center gap-x-[clamp(40px,5vw,80px)] gap-y-12 py-16 sm:py-24">
          <div className="min-w-0 flex-[1.2_1_520px]">
            <p className="font-mono text-[13px] text-ob">[sport] · nuova divisione</p>
            <Display as="h1" className="mt-7 text-[clamp(3rem,5.4vw,5.25rem)]">
              Si vede in campo. <span className="text-ob">Nasce fuori.</span>
            </Display>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-body-dark sm:text-xl">
              Un club conosce bene risultati, classifica e minuti giocati. Conosce meno come funzionano le persone nei loro ruoli, e come funziona la
              società come organizzazione.
            </p>
            <div className="mt-10">
              <Button href="/contatti" variant="ob">
                Diventa club pilota <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
          <PitchDiagram className="max-w-[400px] flex-[1_1_300px]" />
        </Container>
      </section>

      <section>
        <Container className="grid gap-6 py-20 sm:py-28 lg:grid-cols-2">
          <DocFrame title="[viseria] · per lo sport" meta="Persone">
            <div className="flex flex-col gap-4 px-6 py-7">
              <h2 className="display text-[clamp(2rem,3.4vw,3rem)]">La persona nel ruolo</h2>
              <p className="text-lg leading-relaxed text-body">
                Atleti, allenatori, preparatori, area medica, direttori sportivi. In particolare chi è in transizione: da giocatore ad allenatore,
                da assistente a capo, da capitano a dirigente.
              </p>
              <p className="text-lg leading-relaxed">
                <Mark code="OB">Il report di uno scout che ha visto la persona lavorare</Mark>, non una card da videogioco.
              </p>
            </div>
          </DocFrame>
          <DocFrame title="[chimeria] · per lo sport" meta="Club">
            <div className="flex flex-col gap-4 px-6 py-7">
              <h2 className="display text-[clamp(2rem,3.4vw,3rem)]">Il club come organizzazione</h2>
              <p className="text-lg leading-relaxed text-body">
                Dodici aree lette dalla direzione (proprietà, direzione sportiva, capo allenatore) fino all&apos;operatività (staff,
                squadra, uffici). Per la società intera, un&apos;area o un&apos;interfaccia fra aree.
              </p>
              <p className="text-lg leading-relaxed">
                <Mark code="AC">Un club non ha un voto, ha una mappa.</Mark>
              </p>
            </div>
          </DocFrame>
        </Container>
      </section>

      <section className="border-y-[1.5px] border-ink bg-paper-2">
        <Container className="py-20 sm:py-28">
          <Section n="01">Letture specifiche per lo sport</Section>
          <Display className="mt-4.5 max-w-3xl text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Tre domande che il tabellino non fa.</Display>
          <div className="mt-12 grid gap-[1.5px] border-[1.5px] border-ink bg-ink md:grid-cols-3">
            {readings.map((r, i) => (
              <div key={r.title} className="flex flex-col gap-4 bg-paper p-7">
                <span className="font-mono text-[13px]">0{i + 1}</span>
                <h3 className="display text-[26px]">{r.title}</h3>
                <p className="leading-relaxed text-body">{r.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Section n="02">Esempi d&apos;uso</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">
              Situazioni che ogni direttore sportivo riconosce.
            </Display>
          </div>
          <ul>
            {cases.map((c, i) => (
              <li key={c} className={`flex gap-4 border-t-[1.5px] border-ink py-5 text-lg leading-relaxed ${i === cases.length - 1 ? "border-b-[1.5px]" : ""}`}>
                <span className="font-mono text-[13px] leading-[1.9]">0{i + 1}</span>
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="py-20 sm:py-28">
          <Section n="03" dark>
            Come si lavora
          </Section>
          <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Dentro il calendario sportivo.</Display>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="flex flex-col gap-3 border border-rule-dark p-6">
                <span className="font-mono text-[12px] text-ob">0{i + 1}</span>
                <h3 className="display text-[24px]">{t}</h3>
                <p className="text-[15px] leading-relaxed text-body-dark">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl leading-relaxed text-body-dark">
            Niente arriva alla direzione con un nome sopra senza il consenso della persona. Sotto i tre rispondenti per area non si produce una
            lettura. I report decadono dopo dodici mesi senza riassessment.
          </p>
        </Container>
      </section>

      <CtaBand title="Proponete il vostro club." button="Diventa club pilota" />
    </>
  );
}
