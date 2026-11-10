const it = {
  meta: {
    title: "Prismia",
    description:
      "Prismia è il feedback multi-fonte a intervista: restituisce a un manager come viene visto da chi lavora con lui, su cinque dimensioni. Solo per lo sviluppo.",
  },
  intro: {
    title: { before: "Come vi vedono ", mark: "quelli che lavorano con voi.", after: "" },
    lead: "Prismia confronta ciò che un manager racconta di sé con ciò che raccontano capo, colleghi e collaboratori. Il dato è un episodio raccontato, non una crocetta. Lo scarto fra sé e gli altri non è un errore da mediare: dice dove si trova la persona nel sistema.",
  },
  quadrant: {
    title: "Card Prismia · Colpo d'occhio",
    meta: "Esempio",
    cells: [
      { t: "Accordo alto", d: "si vede come lo vedono" },
      { t: "Sovrastima", d: "punto cieco" },
      { t: "Sottostima", d: "forza nascosta" },
      { t: "Accordo basso", d: "concordano: da sviluppare" },
    ],
    sources: "fonti raccolte: capo 1/1 · pari 3/3 · collaboratori 3/4",
  },
  dimensions: {
    label: "Cinque dimensioni",
    title: "L’impatto, non la personalità.",
    text: "Ogni dimensione è letta su quattro livelli, mai su una scala continua. Nessuna media, nessuna norma di popolazione: il confronto si fa con le altre fonti e, se c’è, con il check-up Chimeria.",
    levels: ["Forza", "Presente", "Attenzione", "Non osservabile"],
  },
  sources: {
    label: "Le fonti",
    title: "Da sette a dieci interviste, in due settimane.",
    text: "Circa quattro ore di raccolta in una finestra di 14 giorni. Il capo e i collaboratori li sceglie l’HR; i pari li propone la persona e li conferma l’HR.",
    caption: "Fonti, numero di interviste e durata",
    rows: [
      ["Sé", "1 intervista", "45 min"],
      ["Capo", "1, o 2 se matriciale", "30 min"],
      ["Pari", "2–3", "25 min"],
      ["Collaboratori", "3–4, tutti se il team è di 5 o meno", "25 min"],
    ] as [string, string, string][],
  },
  card: {
    label: "La card",
    title: "Un verdetto in parole e un piano di sviluppo.",
    page: "Pagina",
    pages: [
      ["01", "Colpo d'occhio", "Il quadrante e il verdetto in tre-quattro righe."],
      ["02", "Da continuare", "I comportamenti che funzionano, con l'effetto che hanno avuto."],
      ["03", "Da guardare", "Dove lo scarto fra come si racconta e come lo raccontano è più ampio."],
      ["04", "Visto da dove", "Il confronto fra sé e gli altri, fonte per fonte."],
      ["05", "Nel contesto", "La lettura dentro la mappa Chimeria, se c'è."],
      ["06", "Piano di sviluppo", "Compilato insieme, durante il colloquio di restituzione."],
    ] as [string, string, string][],
    note: "Ogni frase descrive un comportamento in una situazione, con l’effetto che ha avuto. Nessun termine clinico, nessun aggettivo sulla persona, nessun punteggio. La card non si consegna mai a freddo: sempre in un colloquio, con follow-up a sei mesi.",
  },
  privacy: {
    label: "Riservatezza",
    title: { before: "Non promettiamo l’anonimato assoluto. ", mark: "Promettiamo la procedura.", after: "" },
    text: "Card e piano vanno alla persona. All’HR solo con il suo consenso scritto; altrimenti l’HR riceve un allegato di una pagina con interviste, date e soglie rispettate. Il capo non ha accesso. Prismia si usa per lo sviluppo, mai per decisioni retributive, di promozione o disciplinari.",
    rules: [
      ["Collaboratori", "Mai restituiti sotto le tre interviste, solo in forma aggregata, con gli episodi riscritti senza dettagli riconoscibili."],
      ["Pari", "Con due soli colleghi si scrive «i colleghi» e si riportano solo gli episodi che concordano."],
      ["Capo", "Non è anonimizzabile, e lo sa fin dall'inizio."],
      ["Trascrizioni", "Non lasciano mai il sistema. Nella card non c'è nessuna frase testuale."],
    ] as [string, string][],
  },
  cta: { title: "Parliamo di un manager.", button: "Richiedi un colloquio" },
};

export type PrismiaContent = typeof it;

const en: PrismiaContent = {
  meta: {
    title: "Prismia",
    description:
      "Prismia is interview-based multi-source feedback: it shows a manager how they are seen by the people who work with them, across five dimensions. For development only.",
  },
  intro: {
    title: { before: "How you are seen by ", mark: "the people who work with you.", after: "" },
    lead: "Prismia compares what a manager says about themselves with what their boss, peers and team members say. The data is an episode someone tells, not a tick in a box. The gap between self and others is not an error to average out: it shows where the person sits in the system.",
  },
  quadrant: {
    title: "Prismia Card · At a glance",
    meta: "Example",
    cells: [
      { t: "High agreement", d: "sees themselves as others do" },
      { t: "Overestimate", d: "blind spot" },
      { t: "Underestimate", d: "hidden strength" },
      { t: "Low agreement", d: "they agree: to develop" },
    ],
    sources: "sources collected: boss 1/1 · peers 3/3 · team members 3/4",
  },
  dimensions: {
    label: "Five dimensions",
    title: "Impact, not personality.",
    text: "Each dimension is read on four levels, never on a continuous scale. No averages, no population norms: the comparison is with the other sources and, where there is one, with the Chimeria check-up.",
    levels: ["Strength", "Present", "Watch", "Not observable"],
  },
  sources: {
    label: "The sources",
    title: "Seven to ten interviews, in two weeks.",
    text: "About four hours of collection within a 14-day window. HR chooses the boss and the team members; the person proposes the peers and HR confirms them.",
    caption: "Sources, number of interviews and duration",
    rows: [
      ["Self", "1 interview", "45 min"],
      ["Boss", "1, or 2 in a matrix structure", "30 min"],
      ["Peers", "2–3", "25 min"],
      ["Team members", "3–4, all of them if the team is 5 or fewer", "25 min"],
    ],
  },
  card: {
    label: "The card",
    title: "A verdict in words and a development plan.",
    page: "Page",
    pages: [
      ["01", "At a glance", "The quadrant and the verdict in three or four lines."],
      ["02", "Keep doing", "The behaviours that work, with the effect they had."],
      ["03", "Look at", "Where the gap between how they describe themselves and how others describe them is widest."],
      ["04", "Seen from where", "Self compared with others, source by source."],
      ["05", "In context", "The reading within the Chimeria map, if there is one."],
      ["06", "Development plan", "Filled in together, during the feedback meeting."],
    ],
    note: "Every sentence describes a behaviour in a situation, with the effect it had. No clinical terms, no adjectives about the person, no scores. The card is never handed over cold: always in a meeting, with a follow-up after six months.",
  },
  privacy: {
    label: "Confidentiality",
    title: { before: "We don't promise absolute anonymity. ", mark: "We promise the procedure.", after: "" },
    text: "The card and the plan go to the person. To HR only with their written consent; otherwise HR receives a one-page appendix with the interviews, dates and thresholds met. The boss has no access. Prismia is used for development, never for pay, promotion or disciplinary decisions.",
    rules: [
      ["Team members", "Never reported with fewer than three interviews, only in aggregate form, with episodes rewritten without recognisable details."],
      ["Peers", "With only two colleagues we write “colleagues” and report only the episodes on which they agree."],
      ["Boss", "Cannot be anonymised, and knows this from the start."],
      ["Transcripts", "Never leave the system. The card contains no verbatim quotes."],
    ],
  },
  cta: { title: "Let's talk about a manager.", button: "Request a meeting" },
};

export const prismia = { it, en };
