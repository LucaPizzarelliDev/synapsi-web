import type { Metadata } from "next";
import { Container, CtaBand, Display, DocFrame, Mark, PageIntro, Section } from "@/components/ui";
import { prismiaDimensions, services } from "@/lib/site";

const service = services.find((s) => s.href === "/prismia")!;

export const metadata: Metadata = {
  title: "Prismia",
  description:
    "Prismia è il feedback multi-fonte a intervista: restituisce a un manager come viene visto da chi lavora con lui, su cinque dimensioni. Solo per lo sviluppo.",
};

const sources = [
  ["Sé", "1 intervista", "45 min"],
  ["Capo", "1, o 2 se matriciale", "30 min"],
  ["Pari", "2–3", "25 min"],
  ["Collaboratori", "3–4, tutti se il team è di 5 o meno", "25 min"],
];

const levels = ["Forza", "Presente", "Attenzione", "Non osservabile"];

const pages = [
  ["01", "Colpo d'occhio", "Il quadrante e il verdetto in tre-quattro righe."],
  ["02", "Da continuare", "I comportamenti che funzionano, con l'effetto che hanno avuto."],
  ["03", "Da guardare", "Dove lo scarto fra come si racconta e come lo raccontano è più ampio."],
  ["04", "Visto da dove", "Il confronto fra sé e gli altri, fonte per fonte."],
  ["05", "Nel contesto", "La lettura dentro la mappa Chimeria, se c'è."],
  ["06", "Piano di sviluppo", "Compilato insieme, durante il colloquio di restituzione."],
];

const rules = [
  ["Collaboratori", "Mai restituiti sotto le tre interviste, solo in forma aggregata, con gli episodi riscritti senza dettagli riconoscibili."],
  ["Pari", "Con due soli colleghi si scrive «i colleghi» e si riportano solo gli episodi che concordano."],
  ["Capo", "Non è anonimizzabile, e lo sa fin dall'inizio."],
  ["Trascrizioni", "Non lasciano mai il sistema. Nella card non c'è nessuna frase testuale."],
];

/** Quadrante sé-altri: dove si collocano le cinque dimensioni (esempio) */
function Quadrant() {
  const cells = [
    { t: "Accordo alto", d: "si vede come lo vedono", dims: ["D1", "D5"], cls: "bg-ac" },
    { t: "Sovrastima", d: "punto cieco", dims: ["D2"], cls: "bg-ip" },
    { t: "Sottostima", d: "forza nascosta", dims: ["D3"], cls: "bg-ps" },
    { t: "Accordo basso", d: "concordano: da sviluppare", dims: ["D4"], cls: "bg-ob" },
  ];
  return (
    <DocFrame title="Card Prismia · Colpo d'occhio" meta="Esempio">
      <div className="p-4.5">
        <div className="grid grid-cols-2 gap-[1.5px] border-[1.5px] border-ink bg-ink">
          {cells.map((c) => (
            <div key={c.t} className={`flex min-h-36 flex-col justify-between p-4 ${c.cls}`}>
              <div>
                <p className="display text-[20px]">{c.t}</p>
                <p className="font-mono text-[12px]">{c.d}</p>
              </div>
              <p className="flex flex-wrap gap-1.5">
                {c.dims.map((d) => (
                  <span key={d} className="bg-paper px-1.5 py-0.5 font-mono text-[12px]">
                    {d} {prismiaDimensions.find((x) => x.id === d)?.name}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[12px]">fonti raccolte: capo 1/1 · pari 3/3 · collaboratori 3/4</p>
      </div>
    </DocFrame>
  );
}

export default function PrismiaPage() {
  return (
    <>
      <PageIntro
        label={<>{service.label} · [prismia]</>}
        service={service}
        title={
          <>
            Come vi vedono <Mark code="PS">quelli che lavorano con voi.</Mark>
          </>
        }
        lead="Prismia confronta ciò che un manager racconta di sé con ciò che raccontano capo, colleghi e collaboratori. Il dato è un episodio raccontato, non una crocetta. Lo scarto fra sé e gli altri non è un errore da mediare: dice dove si trova la persona nel sistema."
        aside={<Quadrant />}
      />

      <section>
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Section n="01">Cinque dimensioni</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">L&apos;impatto, non la personalità.</Display>
            <p className="mt-6 text-[17px] leading-relaxed text-body">
              Ogni dimensione è letta su quattro livelli, mai su una scala continua. Nessuna media, nessuna norma di popolazione: il confronto si fa con le
              altre fonti e, se c&apos;è, con il check-up Chimeria.
            </p>
            <p className="mt-6 flex flex-wrap gap-1.5">
              {levels.map((l) => (
                <span key={l} className="frame px-2.5 py-1 font-mono text-[13px]">
                  {l}
                </span>
              ))}
            </p>
          </div>
          <ol className="lg:col-span-8">
            {prismiaDimensions.map((d) => (
              <li key={d.id} className="grid gap-2 border-t-[1.5px] border-ink py-5 last:border-b-[1.5px] sm:grid-cols-[64px_1fr] sm:items-baseline sm:gap-6">
                <span className="font-mono text-sm">{d.id}</span>
                <span className="display text-[26px]">{d.name}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-ink text-paper">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Section n="02" dark>
              Le fonti
            </Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Da sette a dieci interviste, in due settimane.</Display>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-body-dark">
              Circa quattro ore di raccolta in una finestra di 14 giorni. Il capo e i collaboratori li sceglie l&apos;HR; i pari li propone la persona e li
              conferma l&apos;HR.
            </p>
          </div>
          <table className="self-end text-left">
            <caption className="sr-only">Fonti, numero di interviste e durata</caption>
            <tbody>
              {sources.map(([s, n, m]) => (
                <tr key={s} className="border-t border-rule-dark last:border-b">
                  <th scope="row" className="display py-4 pr-4 text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold">
                    {s}
                  </th>
                  <td className="py-4 pr-4 text-body-dark">{n}</td>
                  <td className="py-4 text-right font-mono text-[13px] text-body-dark">{m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-28">
          <Section n="03">La card</Section>
          <Display className="mt-4.5 max-w-3xl text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">Un verdetto in parole e un piano di sviluppo.</Display>
          <ol className="mt-12 grid gap-[1.5px] border-[1.5px] border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
            {pages.map(([n, t, d]) => (
              <li key={n} className={`flex flex-col gap-3 p-6 ${n === "06" ? "bg-ob" : "bg-paper"}`}>
                <span className="font-mono text-[12px]">PAGINA {n}</span>
                <h3 className="display text-[24px]">{t}</h3>
                <p className="leading-relaxed text-body">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl leading-relaxed text-body">
            Ogni frase descrive un comportamento in una situazione, con l&apos;effetto che ha avuto. Nessun termine clinico, nessun aggettivo sulla
            persona, nessun punteggio. La card non si consegna mai a freddo: sempre in un colloquio, con follow-up a sei mesi.
          </p>
        </Container>
      </section>

      <section className="border-t-[1.5px] border-ink bg-paper-2">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Section n="04">Riservatezza</Section>
            <Display className="mt-4.5 text-[clamp(2.25rem,3.4vw,3.25rem)] leading-[1.05]">
              Non promettiamo l&apos;anonimato assoluto. <Mark code="OB">Promettiamo la procedura.</Mark>
            </Display>
            <p className="mt-6 text-[17px] leading-relaxed text-body">
              Card e piano vanno alla persona. All&apos;HR solo con il suo consenso scritto; altrimenti l&apos;HR riceve un allegato di una pagina con
              interviste, date e soglie rispettate. Il capo non ha accesso. Prismia si usa per lo sviluppo, mai per decisioni retributive, di promozione o
              disciplinari.
            </p>
          </div>
          <dl className="lg:col-span-7">
            {rules.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-t-[1.5px] border-ink py-5 last:border-b-[1.5px] sm:grid-cols-[160px_1fr] sm:gap-6">
                <dt className="display text-[22px]">{k}</dt>
                <dd className="leading-relaxed text-body">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand title="Parliamo di un manager." button="Richiedi un colloquio" />
    </>
  );
}
