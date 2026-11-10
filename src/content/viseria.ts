const it = {
  meta: {
    title: "Viseria",
    description:
      "Viseria è un sistema di assessment qualitativo strutturato: legge come una persona funziona oggi nel lavoro reale, in un contesto aziendale preciso. Sette fattori, revisione obbligatoria dello psicologo.",
  },
  intro: {
    title: { before: "Cosa succede se questa persona ", mark: "si ferma?", after: "" },
    lead: "Viseria legge come funziona oggi una persona nel lavoro reale, in un contesto aziendale preciso: punti di forza, fragilità, costi nascosti e sostenibilità dell'assetto attuale. Ogni punteggio rimanda a un episodio concreto.",
    cardMeta: "Capo reparto · esempio",
  },
  factors: {
    label: "I sette fattori",
    title: "La performance non è un blocco unico.",
    text: "Sette dimensioni che possono essere disallineate: molto efficace ma poco sostenibile, molta iniziativa ma poche risorse. Ognuna letta contro il profilo che quel ruolo richiede, in quella azienda.",
    quoteOpen: "«",
    quoteClose: "»",
  },
  sustainability: {
    label: "Sostenibilità",
    title: "Efficacia apparente o tenuta reale?",
    text: "Due letture trasversali, senza punteggio: l’intensità con cui la persona sta lavorando, e se quel ritmo regge. Le etichette descrivono assetti temporanei, mai caratteristiche della persona: «assetto attuale prevalentemente ipercompensativo».",
    states: ["sostenibile", "ipercompensativo", "sovraccaricato", "fragile", "dipendente dal contesto"],
    stateLabel: "assetto attuale",
  },
  collection: {
    label: "Raccolta e validità",
    title: "Due fonti che si controllano a vicenda.",
    client: {
      title: "Intervista al committente",
      meta: "30–40 min",
      text: { before: "Costruisce il contesto: cosa fa funzionare una persona qui, le sfide attuali, i ", strong: "non negoziabili", after: " del ruolo." },
    },
    person: {
      title: "Intervista alla persona",
      meta: "30–60 min",
      text: "Principio anamnestico: fatti già accaduti, non opinioni. «Sono resiliente» non vale come evidenza senza un episodio.",
    },
    validity: {
      title: "Validity Dashboard",
      meta: "VGI 0–100",
      text: "Prima dei punteggi, indici di qualità del dato e un semaforo globale. Se la validità è bassa, i punteggi hanno un tetto e si consiglia un secondo colloquio.",
    },
    rules: [
      ["Regola del 3", "Un punteggio adeguato vale solo se sostenuto da almeno un episodio concreto."],
      ["Regola del 5", "Il massimo solo se il funzionamento non dipende da iperintensità e non ha costi nascosti."],
      ["Red flag con tetti", "«Stringo i denti» vale al massimo 2 sulla regolazione. Un'autovalutazione senza esempi non supera il 3."],
      ["Tracciabilità", "Ogni punteggio è ricondotto ad almeno un episodio e motivato per iscritto."],
      ["Non valutabile", "Se il materiale non basta, il fattore si dichiara non valutabile: non è mai un punteggio basso. Sotto quattro fattori su sette, la Scouting Card non si emette."],
      ["Revisione dello psicologo", "L'intelligenza artificiale propone, lo psicologo verifica ogni punteggio e scrive il verdetto. Nessun report esce senza la sua firma."],
    ] as [string, string][],
  },
  deliverable: {
    label: "Cosa ricevete",
    title: { before: "Una pagina per decidere. ", mark: "Nessun punteggio complessivo.", after: "" },
    text: "La Scouting Card apre ogni report. La versione LITE, di una-due pagine, va al committente e all’HR ed è sempre consegnata con uno psicologo. La versione CORE, tecnica, resta allo psicologo.",
    scale: [
      ["1", "Assente o disfunzionale"],
      ["2", "Presente ma fragile o reattivo"],
      ["3", "Adeguato, situazionale"],
      ["4", "Solido, funzionale"],
      ["5", "Elevato e sostenibile"],
    ] as [string, string][],
    cardTitle: "Viseria · Scouting Card",
    cardMeta: "Struttura",
    cardCaption:
      "Lettura del funzionamento attuale in questo contesto. Non è un test, non è una diagnosi, non è una previsione. Revisione dello psicologo: [nome], [data].",
    card: [
      ["Testata", "Persona (iniziali o codice), ruolo, organizzazione, data, assessor e l'indice di validità del colloquio con il suo semaforo."],
      ["Radar a sette assi", "Linea piena per la persona, tratteggiata per il profilo che il ruolo richiede. È evidenziata solo l'area sotto il richiesto."],
      ["Verdetto", "Quattro-sei righe scritte dall'assessor, senza numeri, e una riga di raccomandazione operativa."],
      ["Tabella dei fattori", "Punteggio, richiesto, confidenza ed evidenza chiave con la sua data, fattore per fattore."],
    ] as [string, string][],
    forbidden: "Vietati: punteggio complessivo, medie, percentili, stelle.",
  },
  uses: {
    label: "Quando usarlo",
    title: "Quando sostituire è difficile, conta capire chi c’è già.",
    items: [
      "Ruoli chiave ad alta esposizione o con responsabilità non formalizzate",
      "Ruoli in cui il carico è cresciuto oltre ciò che l'organizzazione sostiene",
      "Riorganizzazioni, mobilità interna, passaggi generazionali",
      "Progettazione mirata di formazione e coaching",
      "Lettura aggregata per reparto, senza confronti fra persone",
    ],
  },
  cta: { title: "Parliamo di un ruolo.", button: "Richiedi un assessment" },
};

export type ViseriaContent = typeof it;

const en: ViseriaContent = {
  meta: {
    title: "Viseria",
    description:
      "Viseria is a structured qualitative assessment system: it reads how a person works today, in real work, within a specific company context. Seven factors, mandatory review by a psychologist.",
  },
  intro: {
    title: { before: "What happens if this person ", mark: "stops?", after: "" },
    lead: "Viseria reads how a person works today, in real work, within a specific company context: strengths, weak points, hidden costs and how sustainable the current set-up is. Every score points back to a concrete episode.",
    cardMeta: "Department head · example",
  },
  factors: {
    label: "The seven factors",
    title: "Performance is not a single block.",
    text: "Seven dimensions that can be out of line with each other: highly effective but not sustainable, plenty of initiative but few resources. Each one is read against the profile that the role requires, in that company.",
    quoteOpen: "“",
    quoteClose: "”",
  },
  sustainability: {
    label: "Sustainability",
    title: "Apparent effectiveness or real staying power?",
    text: "Two cross-cutting readings, with no score: how intensely the person is working, and whether that pace can hold. The labels describe temporary patterns, never traits of the person: “current pattern mainly overcompensating”.",
    states: ["sustainable", "overcompensating", "overloaded", "fragile", "context-dependent"],
    stateLabel: "current pattern",
  },
  collection: {
    label: "Collection and validity",
    title: "Two sources that check each other.",
    client: {
      title: "Interview with the client",
      meta: "30–40 min",
      text: { before: "Builds the context: what makes a person work well here, the current challenges, the role's ", strong: "non-negotiables", after: "." },
    },
    person: {
      title: "Interview with the person",
      meta: "30–60 min",
      text: "Anamnestic principle: things that have already happened, not opinions. “I'm resilient” does not count as evidence without an episode.",
    },
    validity: {
      title: "Validity Dashboard",
      meta: "VGI 0–100",
      text: "Before any score, data-quality indices and an overall traffic light. If validity is low, scores are capped and a second interview is recommended.",
    },
    rules: [
      ["Rule of 3", "An adequate score only stands if it is backed by at least one concrete episode."],
      ["Rule of 5", "The top score only if functioning does not depend on over-intensity and carries no hidden costs."],
      ["Red flags with caps", "“I just grit my teeth” scores at most 2 on regulation. A self-assessment without examples does not go above 3."],
      ["Traceability", "Every score is traced back to at least one episode and justified in writing."],
      ["Not assessable", "If the material is not enough, the factor is declared not assessable: it is never a low score. With fewer than four factors out of seven, no Scouting Card is issued."],
      ["Psychologist review", "Artificial intelligence proposes, the psychologist checks every score and writes the verdict. No report leaves without their signature."],
    ],
  },
  deliverable: {
    label: "What you receive",
    title: { before: "One page to decide. ", mark: "No overall score.", after: "" },
    text: "The Scouting Card opens every report. The LITE version, one to two pages, goes to the client and to HR and is always delivered with a psychologist. The technical CORE version stays with the psychologist.",
    scale: [
      ["1", "Absent or dysfunctional"],
      ["2", "Present but fragile or reactive"],
      ["3", "Adequate, situational"],
      ["4", "Solid, functional"],
      ["5", "High and sustainable"],
    ],
    cardTitle: "Viseria · Scouting Card",
    cardMeta: "Structure",
    cardCaption:
      "A reading of current functioning in this context. It is not a test, not a diagnosis, not a prediction. Psychologist review: [name], [date].",
    card: [
      ["Header", "Person (initials or code), role, organisation, date, assessor and the interview validity index with its traffic light."],
      ["Seven-axis radar", "Solid line for the person, dashed for the profile the role requires. Only the area below the requirement is highlighted."],
      ["Verdict", "Four to six lines written by the assessor, with no numbers, and one line of practical recommendation."],
      ["Factor table", "Score, requirement, confidence and key evidence with its date, factor by factor."],
    ],
    forbidden: "Not allowed: overall score, averages, percentiles, stars.",
  },
  uses: {
    label: "When to use it",
    title: "When replacing someone is hard, it matters to understand who you already have.",
    items: [
      "Key roles with high exposure or with responsibilities that are not formalised",
      "Roles where the workload has grown beyond what the organisation supports",
      "Reorganisations, internal mobility, generational handovers",
      "Targeted design of training and coaching",
      "Aggregate reading by department, with no comparisons between people",
    ],
  },
  cta: { title: "Let's talk about a role.", button: "Request an assessment" },
};

export const viseria = { it, en };
