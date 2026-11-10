const it = {
  meta: {
    description:
      "Psicologi del lavoro e intelligenza artificiale. Valutiamo persone, manager e organizzazioni con colloqui e consegniamo report chiari e firmati, per decidere chi scegliere, chi far crescere e dove intervenire.",
  },
  hero: {
    kicker: "Psicologi del lavoro + intelligenza artificiale · Brescia",
    title: { before: "Vi aiutiamo a capire ", mark: "come lavorano davvero", after: " le vostre persone." },
    lead: "Valutiamo persone, manager e organizzazioni con colloqui condotti da psicologi. Vi consegniamo un report chiaro e firmato, per decidere chi scegliere, chi far crescere e dove intervenire.",
    primary: "Parliamo del vostro caso",
    secondary: "Cosa possiamo fare per voi",
  },
  services: {
    label: "Cosa possiamo fare per voi",
    title: "Partite dalla vostra domanda.",
    what: "Cosa facciamo",
    get: "Cosa ricevete",
    intro: "Quattro domande che ci fanno spesso. Scegliete la vostra: per ognuna sapete cosa facciamo e cosa vi consegniamo.",
    more: "Scopri",
  },
  report: {
    label: "Cosa ricevete",
    title: "Un report che si legge in cinque minuti.",
    text: "Ogni conclusione ha accanto l’episodio da cui nasce. Lo firma uno psicologo iscritto all’Albo, poi ne parliamo insieme a voce.",
  },
  how: {
    label: "Come funziona",
    title: "Tre passaggi, sempre gli stessi.",
    steps: [
      { n: "1", title: "Ci dite cosa dovete decidere", text: "Un primo incontro: la domanda, le persone coinvolte, i tempi. Vi diciamo se e come possiamo aiutarvi." },
      { n: "2", title: "Uno psicologo ascolta le persone", text: "Colloqui di 45–60 minuti su episodi reali di lavoro. L'AI trascrive e organizza il materiale, lo psicologo lo legge." },
      { n: "3", title: "Ricevete un report e ne parliamo", text: "Un documento chiaro, firmato da uno psicologo, con la prova di ogni conclusione. Poi una restituzione a voce." },
    ],
  },
  trust: {
    label: "Perché fidarvi",
    title: "Non vi diamo un punteggio. Vi diamo le prove.",
    reasons: [
      ["Fatti, non opinioni", "Chiediamo cosa è successo, non cosa la persona pensa di sé. Un questionario vi dà un numero, un colloquio vi dice perché."],
      ["Ogni conclusione ha la sua prova", "Nel report, accanto a ogni giudizio, c'è l'episodio da cui nasce. Potete sempre verificare."],
      ["Firma di uno psicologo", "L'AI rende il lavoro veloce. Il giudizio e la firma restano di uno psicologo iscritto all'Albo."],
      ["Confini chiari", "Niente test di personalità, diagnosi cliniche o classifiche fra persone. La decisione resta vostra."],
    ],
    link: "Come lavoriamo, nel dettaglio",
    example: "Un esempio: dalla frase al report",
  },
  about: {
    label: "Chi siamo",
    title: "Due psicologi. Due specialisti AI.",
    text: "Chi conduce i colloqui lavora accanto a chi costruisce gli strumenti. Il metodo è stato oggetto di una tesi all’Università Cattolica di Brescia, applicato in un’azienda reale.",
    link: "Conosci lo studio",
  },
  cta: { label: "Il primo passo è un incontro", title: "Avete una decisione da prendere su una persona o un'organizzazione?", button: "Parliamone" },
};

export type HomeContent = typeof it;

const en: HomeContent = {
  meta: {
    description:
      "Work psychologists and artificial intelligence. We assess people, managers and organisations through interviews and deliver clear, signed reports, so you can decide who to choose, who to develop and where to act.",
  },
  hero: {
    kicker: "Work psychologists + artificial intelligence · Brescia",
    title: { before: "We help you understand ", mark: "how your people really work.", after: "" },
    lead: "We assess people, managers and organisations through interviews led by psychologists. You receive a clear, signed report to decide who to choose, who to develop and where to act.",
    primary: "Tell us about your case",
    secondary: "What we can do for you",
  },
  services: {
    label: "What we can do for you",
    title: "Start from your question.",
    what: "What we do",
    get: "What you receive",
    intro: "Four questions we are often asked. Pick yours: for each one you know what we do and what we deliver.",
    more: "Find out more",
  },
  report: {
    label: "What you receive",
    title: "A report you can read in five minutes.",
    text: "Every conclusion sits next to the episode it comes from. It is signed by a registered psychologist, then we talk it through with you.",
  },
  how: {
    label: "How it works",
    title: "Three steps, always the same.",
    steps: [
      { n: "1", title: "You tell us what you need to decide", text: "A first meeting: the question, the people involved, the timing. We tell you whether and how we can help." },
      { n: "2", title: "A psychologist listens to your people", text: "45–60 minute interviews about real work episodes. AI transcribes and organises the material, the psychologist reads it." },
      { n: "3", title: "You receive a report and we discuss it", text: "A clear document, signed by a psychologist, with the proof behind every conclusion. Then a spoken debrief." },
    ],
  },
  trust: {
    label: "Why trust us",
    title: "We don't give you a score. We give you the evidence.",
    reasons: [
      ["Facts, not opinions", "We ask what happened, not what people think of themselves. A questionnaire gives you a number, an interview tells you why."],
      ["Every conclusion has its proof", "In the report, next to every judgement, is the episode it comes from. You can always check."],
      ["Signed by a psychologist", "AI makes the work fast. The judgement and the signature stay with a registered psychologist."],
      ["Clear boundaries", "No personality tests, clinical diagnoses or rankings of people. The decision stays yours."],
    ],
    link: "How we work, in detail",
    example: "An example: from a sentence to the report",
  },
  about: {
    label: "About us",
    title: "Two psychologists. Two AI specialists.",
    text: "The people who run the interviews work alongside the people who build the tools. The method was the subject of a thesis at the Università Cattolica in Brescia, applied in a real company.",
    link: "Meet the studio",
  },
  cta: { label: "The first step is a meeting", title: "Do you have a decision to make about a person or an organisation?", button: "Let's talk" },
};

export const home = { it, en };
