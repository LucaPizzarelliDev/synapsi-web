import type { Metadata } from "next";
import { OrgMap } from "@/components/graphics";
import { Container, CtaBand, Display, DocFrame, Mark, PageIntro, Section } from "@/components/ui";
import { chimeriaCriteria, services } from "@/lib/site";

const service = services.find((s) => s.href === "/chimeria")!;

export const metadata: Metadata = {
  title: "Chimeria",
  description:
    "Chimeria: capire come funziona un'organizzazione, far crescere chi la guida. Interviste strutturate condotte da psicologi, dodici aree, una mappa reparto per reparto con le leve di sviluppo.",
};

const states = [
  { s: "Tenuta", client: "Funziona", cls: "bg-ink text-paper" },
  { s: "Attenzione", client: "Funziona a tratti, o dipende da una persona", cls: "bg-ob frame" },
  { s: "Sviluppo", client: "Non funziona, o manca", cls: "bg-ip frame" },
  { s: "Non rilevata", client: "Il materiale raccolto non basta per dirlo", cls: "border border-dashed border-ink" },
];

const groups = [
  { label: "Cultura", note: "il modo di guidare · si cambia", from: 0, to: 4 },
  { label: "Clima", note: "il modo di lavorare · si regola", from: 4, to: 11 },
  { label: "Esito", note: "ciò che ne risulta", from: 11, to: 12 },
];

const lines = [
  {
    name: "Chimeria Core",
    meta: "24 domande · 45 min · OPQ",
    text: "Il modulo base: dodici aree lette per l'azienda, per reparto e nei passaggi fra reparti. Ai colloqui si affianca un questionario di 67 affermazioni.",
    rows: [
      ["Un'interfaccia", "6–8 colloqui · 2 settimane"],
      ["Azienda", "8–10 colloqui · 3 settimane"],
      ["Azienda e reparti", "15–20 colloqui · 4 settimane"],
    ],
  },
  {
    name: "Chimeria Lean",
    meta: "22 domande · 45 min",
    text: "Per le aziende manifatturiere tra 50 e 500 addetti con un programma Lean: quanto costa, in un gruppo, dire che qualcosa non va.",
    rows: [
      ["Gruppi", "almeno 3, da 5 persone"],
      ["Durata", "4–6 settimane"],
      ["Restituzione", "prima ai gruppi, poi alla direzione"],
    ],
  },
  {
    name: "Coopetition",
    meta: "Modulo di Core",
    text: "Per le reti commerciali, dove i colleghi collaborano e insieme competono: regole ed equità, sicurezza, reciprocità, identità, rivalità.",
    rows: [
      ["Blocchi", "5, ciascuno condiviso o contestato"],
      ["Dove si usa", "dentro Iridium"],
    ],
  },
];

const outputs = [
  ["Scheda di reparto", "Verdetto in due righe, mappa a 12 aree con le quote, indici di cultura e di clima, ruoli non coperti, la leva."],
  ["Report per il committente", "Da 8 a 14 pagine: il quadro in una pagina, i numeri, dove si generano i problemi, le interfacce, le leve, i limiti."],
  ["Fascicolo per la direzione", "Il racconto dell'azienda e dei reparti, con i nomi oscurati, pronto per essere discusso."],
  ["Restituzione", "Due ore con lo psicologo: il report non si consegna a freddo."],
];

const registers = [
  ["Risulta da episodi", "Ciò che più persone hanno raccontato con fatti, tempi e persone."],
  ["È percepito", "Ciò che le persone vivono, anche senza un episodio che lo provi."],
  ["La nostra lettura è", "L'interpretazione dello psicologo, dichiarata come tale."],
];

export default function ChimeriaPage() {
  return (
    <>
      <PageIntro
        label={<>{service.label} · [chimeria]</>}
        service={service}
        title={
          <>
            Capire come funziona un&apos;organizzazione. <Mark code="AC">Far crescere chi la guida.</Mark>
          </>
        }
        lead="Interviste strutturate di 45 minuti condotte da psicologi: domande fisse, si chiedono episodi e non giudizi. Chimeria non valuta le persone: dice a che livello nasce un problema, nella cultura o nel clima, e per ogni criticità indica una leva."
      />

      <section className="bg-paper-2">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <Section n="01">La mappa</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Un&apos;azienda non ha un voto. Ha una mappa.</Display>
            <p className="mt-6 text-[17px] leading-relaxed text-body">
              Ogni area, in ogni reparto, è collocata in uno stato, con la sua forza: condivisa fra chi ha risposto, o divisa. I numeri ci sono, e ognuno
              porta la sua base: quante persone hanno parlato, su quante.
            </p>
            <ul className="mt-8 flex flex-col gap-2.5">
              {states.map((s) => (
                <li key={s.s} className="flex items-start gap-3">
                  <span className={`mt-1 h-4.5 w-4.5 shrink-0 ${s.cls}`} aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">{s.s}.</strong> <span className="text-body">{s.client}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <OrgMap />
          </div>
        </Container>
      </section>

      <section className="border-t-[1.5px] border-ink">
        <Container className="py-20 sm:py-28">
          <Section n="02">Le dodici aree</Section>
          <Display className="mt-4.5 max-w-3xl text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Il clima si regola, la cultura si cambia.</Display>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-body">
            Il modello di Burke e Litwin, nell&apos;ordine in cui le cause producono gli effetti: dalla cultura, al clima, alla performance.
          </p>
          <div className="mt-12 flex flex-col gap-8">
            {groups.map((g) => (
              <div key={g.label}>
                <p className="mb-3 font-mono text-[13px]">
                  {g.label.toUpperCase()} — {g.note}
                </p>
                <ol className="grid gap-[1.5px] border-[1.5px] border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
                  {chimeriaCriteria.slice(g.from, g.to).map((c, i) => (
                    <li key={c} className="flex min-h-28 flex-col justify-between gap-5 bg-paper p-5">
                      <span className="font-mono text-[13px]">{String(g.from + i + 1).padStart(2, "0")}</span>
                      <span className="display text-[22px]">{c}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="py-20 sm:py-28">
          <Section n="03" dark>
            Le linee
          </Section>
          <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Un metodo, tre formati.</Display>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {lines.map((l) => (
              <article key={l.name} className="flex flex-col gap-3 border border-rule-dark p-7">
                <span className="font-mono text-[12px] uppercase text-ob">{l.meta}</span>
                <h3 className="display text-[30px]">{l.name}</h3>
                <p className="leading-relaxed text-body-dark">{l.text}</p>
                <dl className="mt-auto pt-4">
                  {l.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-t border-rule-dark py-2.5 text-[14px]">
                      <dt className="text-body-dark">{k}</dt>
                      <dd className="text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Section n="04">Cosa ricevete</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Contenuto da diagnosi, confezione da prodotto.</Display>
            <p className="mt-6 text-[17px] leading-relaxed text-body">
              Nei documenti non compaiono mai nomi, citazioni riconoscibili, giudizi sulle persone o confronti con altre aziende.
            </p>
          </div>
          <div className="lg:col-span-7">
            <DocFrame title="Consegna · Chimeria Core" meta="4 documenti">
              <dl>
                {outputs.map(([k, v]) => (
                  <div key={k} className="grid gap-1 border-b-[1.5px] border-ink px-4.5 py-4 last:border-b-0 sm:grid-cols-[200px_1fr] sm:gap-6">
                    <dt className="display text-[18px]">{k}</dt>
                    <dd className="leading-relaxed text-body">{v}</dd>
                  </div>
                ))}
              </dl>
            </DocFrame>
          </div>
        </Container>
      </section>

      <section className="border-t-[1.5px] border-ink bg-paper-2">
        <Container className="py-20 sm:py-28">
          <Section n="05">Tre registri</Section>
          <Display className="mt-4.5 max-w-3xl text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Ogni frase dice da dove viene.</Display>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {registers.map(([k, v], i) => (
              <DocFrame key={k} title={`Registro 0${i + 1}`}>
                <div className="px-4.5 py-5">
                  <p className="display text-[24px]">«{k}»</p>
                  <p className="mt-3 leading-relaxed text-body">{v}</p>
                </div>
              </DocFrame>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Dal «come stiamo» al «come funzioniamo»." button="Pianifica un check-up" />
    </>
  );
}
