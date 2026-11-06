import type { Metadata } from "next";
import { ScoutingCard } from "@/components/graphics";
import { Container, CtaBand, Display, DocFrame, Mark, PageIntro, Section } from "@/components/ui";
import { viseriaFactors, services } from "@/lib/site";

const service = services.find((s) => s.href === "/viseria")!;

export const metadata: Metadata = {
  title: "Viseria",
  description:
    "Viseria è un sistema di assessment qualitativo strutturato: legge come una persona funziona oggi nel lavoro reale, in un contesto aziendale preciso. Sette fattori, revisione obbligatoria dello psicologo.",
};

const assetti = ["sostenibile", "ipercompensativo", "sovraccaricato", "fragile", "dipendente dal contesto"];

const scale = [
  ["1", "Assente o disfunzionale"],
  ["2", "Presente ma fragile o reattivo"],
  ["3", "Adeguato, situazionale"],
  ["4", "Solido, funzionale"],
  ["5", "Elevato e sostenibile"],
];

const card = [
  ["Testata", "Persona (iniziali o codice), ruolo, organizzazione, data, assessor e l'indice di validità del colloquio con il suo semaforo."],
  ["Radar a sette assi", "Linea piena per la persona, tratteggiata per il profilo che il ruolo richiede. È evidenziata solo l'area sotto il richiesto."],
  ["Verdetto", "Quattro-sei righe scritte dall'assessor, senza numeri, e una riga di raccomandazione operativa."],
  ["Tabella dei fattori", "Punteggio, richiesto, confidenza ed evidenza chiave con la sua data, fattore per fattore."],
];

const rules = [
  ["Regola del 3", "Un punteggio adeguato vale solo se sostenuto da almeno un episodio concreto."],
  ["Regola del 5", "Il massimo solo se il funzionamento non dipende da iperintensità e non ha costi nascosti."],
  ["Red flag con tetti", "«Stringo i denti» vale al massimo 2 sulla regolazione. Un'autovalutazione senza esempi non supera il 3."],
  ["Tracciabilità", "Ogni punteggio è ricondotto ad almeno un episodio e motivato per iscritto."],
  ["Non valutabile", "Se il materiale non basta, il fattore si dichiara non valutabile: non è mai un punteggio basso. Sotto quattro fattori su sette, la Scouting Card non si emette."],
  ["Revisione dello psicologo", "L'intelligenza artificiale propone, lo psicologo verifica ogni punteggio e scrive il verdetto. Nessun report esce senza la sua firma."],
];

const uses = [
  "Ruoli chiave ad alta esposizione o con responsabilità non formalizzate",
  "Ruoli in cui il carico è cresciuto oltre ciò che l'organizzazione sostiene",
  "Riorganizzazioni, mobilità interna, passaggi generazionali",
  "Progettazione mirata di formazione e coaching",
  "Lettura aggregata per reparto, senza confronti fra persone",
];

export default function ViseriaPage() {
  return (
    <>
      <PageIntro
        label={<>{service.label} · [viseria]</>}
        service={service}
        title={
          <>
            Cosa succede se questa persona <Mark code="OB">si ferma?</Mark>
          </>
        }
        lead="Viseria legge come funziona oggi una persona nel lavoro reale, in un contesto aziendale preciso: punti di forza, fragilità, costi nascosti e sostenibilità dell'assetto attuale. Ogni punteggio rimanda a un episodio concreto."
        aside={<ScoutingCard meta="Capo reparto · esempio" />}
      />

      <section>
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Section n="01">I sette fattori</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">La performance non è un blocco unico.</Display>
            <p className="mt-6 text-[17px] leading-relaxed text-body">
              Sette dimensioni che possono essere disallineate: molto efficace ma poco sostenibile, molta iniziativa ma poche risorse. Ognuna letta
              contro il profilo che quel ruolo richiede, in quella azienda.
            </p>
          </div>
          <ol className="lg:col-span-8">
            {viseriaFactors.map((f, i) => (
              <li
                key={f.id}
                className={`grid gap-2 border-t-[1.5px] border-ink py-5 sm:grid-cols-[64px_1fr_1.2fr] sm:items-baseline sm:gap-6 ${
                  i === viseriaFactors.length - 1 ? "border-b-[1.5px]" : ""
                }`}
              >
                <span className="font-mono text-sm">{f.id}</span>
                <span className="display text-[22px] font-bold tracking-[-0.02em]" style={{ fontStretch: "105%" }}>
                  {f.name}
                </span>
                <span className="text-body">«{f.question}»</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Section n="02" dark>
              Sostenibilità
            </Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Efficacia apparente o tenuta reale?</Display>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-body-dark">
              Due letture trasversali, senza punteggio: l’intensità con cui la persona sta lavorando, e se quel ritmo regge. Le etichette
              descrivono assetti temporanei, mai caratteristiche della persona: «assetto attuale prevalentemente ipercompensativo».
            </p>
          </div>
          <ul className="flex flex-col self-end">
            {assetti.map((a, i) => (
              <li
                key={a}
                className={`flex items-baseline justify-between border-t border-rule-dark py-4 ${i === assetti.length - 1 ? "border-b-[1.5px]" : ""}`}
              >
                <span className="display text-[clamp(1.6rem,2.6vw,2.25rem)] font-bold tracking-[-0.02em]">
                  {i === 0 ? <span className="marker bg-ac text-ink">{a}</span> : a}
                </span>
                <span className="text-[11px] font-normal uppercase tracking-[0.12em] text-body-dark">assetto attuale</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-28">
          <Section n="03">Raccolta e validità</Section>
          <Display className="mt-4.5 max-w-4xl text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">
            Due fonti che si controllano a vicenda.
          </Display>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <DocFrame title="Intervista al committente" meta="30–40 min">
              <p className="px-4.5 py-5 leading-relaxed">
                Costruisce il contesto: cosa fa funzionare una persona qui, le sfide attuali, i <strong>non negoziabili</strong> del ruolo.
              </p>
            </DocFrame>
            <DocFrame title="Intervista alla persona" meta="30–60 min">
              <p className="px-4.5 py-5 leading-relaxed">
                Principio anamnestico: fatti già accaduti, non opinioni. «Sono resiliente» non vale come evidenza senza un episodio.
              </p>
            </DocFrame>
            <DocFrame title="Validity Dashboard" meta="VGI 0–100">
              <p className="px-4.5 py-5 leading-relaxed">
                Prima dei punteggi, indici di qualità del dato e un semaforo globale. Se la validità è bassa, i punteggi hanno un tetto e si consiglia
                un secondo colloquio.
              </p>
            </DocFrame>
          </div>
          <dl className="mt-12 grid gap-px border-[1.5px] border-ink bg-ink sm:grid-cols-2">
            {rules.map(([t, d]) => (
              <div key={t} className="bg-paper p-6">
                <dt className="display text-[22px] font-bold tracking-[-0.02em]">{t}</dt>
                <dd className="mt-2 leading-relaxed text-body">{d}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t-[1.5px] border-ink">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Section n="04">Cosa ricevete</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">
              Una pagina per decidere. <Mark code="OB">Nessun punteggio complessivo.</Mark>
            </Display>
            <p className="mt-6 text-[17px] leading-relaxed text-body">
              La Scouting Card apre ogni report. La versione LITE, di una-due pagine, va al committente e all’HR ed è sempre consegnata con uno
              psicologo. La versione CORE, tecnica, resta allo psicologo.
            </p>
            <dl className="mt-10 border-[1.5px] border-ink">
              {scale.map(([n, l]) => (
                <div key={n} className="flex gap-4 border-b-[1.5px] border-ink px-4.5 py-2.5 last:border-b-0">
                  <dt className="w-6 font-mono">{n}</dt>
                  <dd>{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-7">
            <DocFrame
              title="Viseria · Scouting Card"
              meta="Struttura"
              caption={
                <p className="font-mono text-[12px] leading-relaxed">
                  Lettura del funzionamento attuale in questo contesto. Non è un test, non è una diagnosi, non è una previsione. Revisione dello psicologo:
                  [nome], [data].
                </p>
              }
            >
              <dl>
                {card.map(([k, v]) => (
                  <div key={k} className="grid gap-1 border-b-[1.5px] border-ink px-4.5 py-4 last:border-b-0 sm:grid-cols-[180px_1fr] sm:gap-6">
                    <dt className="display text-[18px]">{k}</dt>
                    <dd className="leading-relaxed text-body">{v}</dd>
                  </div>
                ))}
              </dl>
            </DocFrame>
            <p className="mt-4 font-mono text-[12px]">Vietati: punteggio complessivo, medie, percentili, stelle.</p>
          </div>
        </Container>
      </section>

      <section className="border-t-[1.5px] border-ink bg-paper-2">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Section n="05">Quando usarlo</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">
              Quando sostituire è difficile, conta capire chi c’è già.
            </Display>
          </div>
          <ul>
            {uses.map((u, i) => (
              <li key={u} className={`flex gap-4 border-t-[1.5px] border-ink py-5 text-lg ${i === uses.length - 1 ? "border-b-[1.5px]" : ""}`}>
                <span className="font-mono text-[13px]">0{i + 1}</span>
                {u}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title="Parliamo di un ruolo." button="Richiedi un assessment" />
    </>
  );
}
