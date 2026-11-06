import type { Metadata } from "next";
import { services } from "@/lib/site";
import { Container, CtaBand, Display, DocFrame, Mark, PageIntro, Section } from "@/components/ui";

const service = services.find((s) => s.href === "/iridium")!;

export const metadata: Metadata = {
  title: "Iridium",
  description:
    "Iridium è l'assessment integrato per le reti commerciali: persona, squadra e leader letti in un'unica seduta e in un'unica diagnosi. Per reti di consulenti finanziari, private banker, agenti.",
};

const session = [
  { name: "Viseria", what: "La persona nel mestiere", min: 30, cls: "bg-ob" },
  { name: "Chimeria · Coopetition", what: "Le regole dell'ufficio", min: 25, cls: "bg-ac" },
  { name: "Prismia", what: "Il manager, visto dal basso", min: 5, cls: "bg-ps" },
];

const levels = [
  {
    n: "A",
    level: "Persona",
    tool: "Viseria",
    text: "I sette fattori, più alcune domande sul mestiere. Ne escono la Scouting Card e la propensione a collaborare.",
  },
  {
    n: "B",
    level: "Squadra",
    tool: "Chimeria · Coopetition",
    text: "Cinque blocchi: regole ed equità, sicurezza, reciprocità, identità, rivalità. Ognuno condiviso o contestato.",
  },
  {
    n: "C",
    level: "Leader",
    tool: "Prismia",
    text: "Il manager letto da chi lavora con lui, da sé e dal responsabile di area: equità, protezione, regia, squadra, conflitto, coaching.",
  },
];

const access = [
  ["Consulente", "La propria Scouting Card"],
  ["Manager", "Le Scouting Card di chi ha acconsentito, la card di squadra, la propria card"],
  ["Responsabile di area", "La card di squadra e la card del manager; mai le Scouting Card"],
  ["Ufficio, in workshop", "La card di squadra, anonimizzata"],
];

export default function IridiumPage() {
  return (
    <>
      <PageIntro
        label={<>{service.label} · [iridium]</>}
        service={service}
        title={
          <>
            Colleghi che collaborano <Mark code="IP">e insieme competono.</Mark>
          </>
        }
        lead="Nelle reti commerciali l'assessment è quasi sempre individuale. Nessuno guarda in modo strutturato la cultura dell'ufficio: le regole non dette sull'aiuto, la rivalità, il manager come arbitro o come parte. Iridium legge persona, squadra e leader in un'unica seduta e in un'unica diagnosi."
      />

      <section>
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Section n="01">Per chi</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Produttori individuali, nella stessa struttura.</Display>
            <p className="mt-6 text-[17px] leading-relaxed text-body">
              Consulenti finanziari, private banker, agenti assicurativi, forze vendita a mandato. Il committente è la direzione rete o l&apos;HR. Lo scopo è lo
              sviluppo dell&apos;ufficio: affiancamenti e coppie di lavoro, mai incentivi, classifiche o decisioni contrattuali.
            </p>
          </div>
          <ol className="grid gap-[1.5px] border-[1.5px] border-ink bg-ink lg:col-span-8">
            {levels.map((l) => (
              <li key={l.n} className="grid gap-3 bg-paper p-6 sm:grid-cols-[48px_160px_1fr] sm:items-baseline sm:gap-6">
                <span className="font-mono text-sm">{l.n}</span>
                <span>
                  <span className="display block text-[26px]">{l.level}</span>
                  <span className="font-mono text-[12px]">{l.tool}</span>
                </span>
                <span className="leading-relaxed text-body">{l.text}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="py-20 sm:py-28">
          <Section n="02" dark>
            La seduta
          </Section>
          <Display className="mt-4.5 max-w-3xl text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Un&apos;ora per consulente. Tre strumenti.</Display>
          <div className="mt-12 flex flex-col gap-[1.5px] border-[1.5px] border-paper bg-paper sm:flex-row" role="img" aria-label="Seduta di 60 minuti: Viseria 30, Chimeria Coopetition 25, Prismia 5">
            {session.map((s) => (
              <div key={s.name} className={`${s.cls} p-5 text-ink`} style={{ flexGrow: s.min, flexBasis: 0, minWidth: 140 }}>
                <p className="font-mono text-[12px]">{s.min} MIN</p>
                <p className="display mt-6 text-[22px]">{s.name}</p>
                <p className="text-[14px]">{s.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-body-dark">
            Dopo la seduta, una breve scheda sul clima competitivo e sulle collaborazioni. Il manager è intervistato per primo, poi il responsabile di area,
            poi i consulenti. Ogni livello ha una lettura qualitativa, dall&apos;intervista, e una quantitativa, da scale e reti di collaborazione.
          </p>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Section n="03">Cosa ricevete</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Tre card, una diagnosi.</Display>
            <p className="mt-6 text-[17px] leading-relaxed text-body">
              Il prodotto è l&apos;incrocio: quanto ogni persona è in tensione con il campo in cui lavora, e quanto il manager legge l&apos;ufficio come lo
              legge il gruppo.
            </p>
          </div>
          <div className="grid gap-6 lg:col-span-7">
            <DocFrame title="Scouting Card" meta="Persona">
              <p className="px-4.5 py-4 leading-relaxed">Radar a sette fattori e verdetto in parole. Nessun punteggio complessivo.</p>
            </DocFrame>
            <DocFrame title="Quadro dell'ufficio" meta="Squadra">
              <p className="px-4.5 py-4 leading-relaxed">I cinque blocchi, la mappa delle collaborazioni senza nomi, la distribuzione della tensione.</p>
            </DocFrame>
            <DocFrame title="Quadro sul ruolo del manager" meta="Leader">
              <p className="px-4.5 py-4 leading-relaxed">Sei criteri per tre fonti, una sintesi e una domanda: vede quello che vedono loro?</p>
            </DocFrame>
          </div>
        </Container>
      </section>

      <section className="border-t-[1.5px] border-ink bg-paper-2">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Section n="04">Chi vede cosa</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Tre consensi distinti, per ogni persona.</Display>
            <p className="mt-6 text-[17px] leading-relaxed text-body">
              Ognuno può dire sì a una parte e no a un&apos;altra, e ritirarsi fino alla chiusura del campo. La rete delle rivalità non compare mai con i nomi.
              Sotto le soglie minime di partecipazione un dato non si mostra. Si lavora a progetto, con un pilota su un solo ufficio.
            </p>
          </div>
          <dl className="lg:col-span-7">
            {access.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-t-[1.5px] border-ink py-5 last:border-b-[1.5px] sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="display text-[22px]">{k}</dt>
                <dd className="leading-relaxed text-body">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand title="Proponete un ufficio pilota." button="Parliamone" />
    </>
  );
}
