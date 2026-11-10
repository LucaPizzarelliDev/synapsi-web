const it = {
  meta: {
    title: "Chimeria",
    description:
      "Chimeria: capire come funziona un'organizzazione, far crescere chi la guida. Interviste strutturate condotte da psicologi, dodici aree, una mappa reparto per reparto con le leve di sviluppo.",
  },
  intro: {
    title: { before: "Capire come funziona un’organizzazione. ", mark: "Far crescere chi la guida." },
    lead: "Interviste strutturate di 45 minuti condotte da psicologi: domande fisse, si chiedono episodi e non giudizi. Chimeria non valuta le persone: dice a che livello nasce un problema, nella cultura o nel clima, e per ogni criticità indica una leva.",
  },
  map: {
    label: "La mappa",
    title: "Un’azienda non ha un voto. Ha una mappa.",
    text: "Ogni area, in ogni reparto, è collocata in uno stato, con la sua forza: condivisa fra chi ha risposto, o divisa. I numeri ci sono, e ognuno porta la sua base: quante persone hanno parlato, su quante.",
    // stesso ordine degli stili nella pagina: Tenuta, Attenzione, Sviluppo, Non rilevata
    states: [
      { s: "Tenuta", client: "Funziona" },
      { s: "Attenzione", client: "Funziona a tratti, o dipende da una persona" },
      { s: "Sviluppo", client: "Non funziona, o manca" },
      { s: "Non rilevata", client: "Il materiale raccolto non basta per dirlo" },
    ],
  },
  areas: {
    label: "Le dodici aree",
    title: "Il clima si regola, la cultura si cambia.",
    text: "Il modello di Burke e Litwin, nell’ordine in cui le cause producono gli effetti: dalla cultura, al clima, alla performance.",
    // stesso ordine dei gruppi nella pagina: Cultura, Clima, Esito
    groups: [
      { label: "Cultura", note: "il modo di guidare · si cambia" },
      { label: "Clima", note: "il modo di lavorare · si regola" },
      { label: "Esito", note: "ciò che ne risulta" },
    ],
  },
  lines: {
    label: "Le linee",
    title: "Un metodo, tre formati.",
    items: [
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
    ],
  },
  outputs: {
    label: "Cosa ricevete",
    title: "Contenuto da diagnosi, confezione da prodotto.",
    text: "Nei documenti non compaiono mai nomi, citazioni riconoscibili, giudizi sulle persone o confronti con altre aziende.",
    frameTitle: "Consegna · Chimeria Core",
    frameMeta: "4 documenti",
    items: [
      ["Scheda di reparto", "Verdetto in due righe, mappa a 12 aree con le quote, indici di cultura e di clima, ruoli non coperti, la leva."],
      ["Report per il committente", "Da 8 a 14 pagine: il quadro in una pagina, i numeri, dove si generano i problemi, le interfacce, le leve, i limiti."],
      ["Fascicolo per la direzione", "Il racconto dell'azienda e dei reparti, con i nomi oscurati, pronto per essere discusso."],
      ["Restituzione", "Due ore con lo psicologo: il report non si consegna a freddo."],
    ],
  },
  registers: {
    label: "Tre registri",
    title: "Ogni frase dice da dove viene.",
    frame: "Registro",
    open: "«",
    close: "»",
    items: [
      ["Risulta da episodi", "Ciò che più persone hanno raccontato con fatti, tempi e persone."],
      ["È percepito", "Ciò che le persone vivono, anche senza un episodio che lo provi."],
      ["La nostra lettura è", "L'interpretazione dello psicologo, dichiarata come tale."],
    ],
  },
  cta: { title: "Dal «come stiamo» al «come funzioniamo».", button: "Pianifica un check-up" },
};

export type ChimeriaContent = typeof it;

const en: ChimeriaContent = {
  meta: {
    title: "Chimeria",
    description:
      "Chimeria: understand how an organisation works, and develop the people who lead it. Structured interviews led by psychologists, twelve areas, a department-by-department map with the levers for development.",
  },
  intro: {
    title: { before: "Understand how an organisation works. ", mark: "Develop the people who lead it." },
    lead: "Structured 45-minute interviews led by psychologists: fixed questions, asking for episodes rather than opinions. Chimeria does not assess people: it shows at what level a problem arises, in the culture or in the climate, and for each weak point it names a lever.",
  },
  map: {
    label: "The map",
    title: "A company doesn’t get a score. It gets a map.",
    text: "Every area, in every department, is placed in a state, with its strength: shared among those who answered, or divided. The numbers are there, and each carries its base: how many people spoke, out of how many.",
    states: [
      { s: "Holding", client: "It works" },
      { s: "Attention", client: "It works at times, or depends on one person" },
      { s: "To develop", client: "It doesn’t work, or it is missing" },
      { s: "Not observed", client: "The material gathered is not enough to say" },
    ],
  },
  areas: {
    label: "The twelve areas",
    title: "Climate can be adjusted. Culture has to be changed.",
    text: "The Burke-Litwin model, in the order in which causes produce effects: from culture, to climate, to performance.",
    groups: [
      { label: "Culture", note: "the way of leading · it is changed" },
      { label: "Climate", note: "the way of working · it is adjusted" },
      { label: "Outcome", note: "what results from it" },
    ],
  },
  lines: {
    label: "The lines",
    title: "One method, three formats.",
    items: [
      {
        name: "Chimeria Core",
        meta: "24 questions · 45 min · OPQ",
        text: "The base module: twelve areas read for the company, for each department and across the hand-offs between departments. The interviews are paired with a questionnaire of 67 statements.",
        rows: [
          ["One interface", "6–8 interviews · 2 weeks"],
          ["Company", "8–10 interviews · 3 weeks"],
          ["Company and departments", "15–20 interviews · 4 weeks"],
        ],
      },
      {
        name: "Chimeria Lean",
        meta: "22 questions · 45 min",
        text: "For manufacturers with 50 to 500 employees running a Lean programme: what it costs, within a group, to say that something is wrong.",
        rows: [
          ["Groups", "at least 3, of 5 people"],
          ["Duration", "4–6 weeks"],
          ["Feedback", "first to the groups, then to management"],
        ],
      },
      {
        name: "Coopetition",
        meta: "Core module",
        text: "For commercial networks, where colleagues cooperate and compete at the same time: rules and fairness, safety, reciprocity, identity, rivalry.",
        rows: [
          ["Blocks", "5, each one shared or contested"],
          ["Where it is used", "within Iridium"],
        ],
      },
    ],
  },
  outputs: {
    label: "What you receive",
    title: "The substance of a diagnosis, the finish of a product.",
    text: "The documents never contain names, recognisable quotations, judgements on individuals or comparisons with other companies.",
    frameTitle: "Delivery · Chimeria Core",
    frameMeta: "4 documents",
    items: [
      ["Department sheet", "A two-line verdict, a 12-area map with the shares, culture and climate indices, uncovered roles, the lever."],
      ["Report for the client", "8 to 14 pages: the picture on one page, the numbers, where problems arise, the interfaces, the levers, the limits."],
      ["File for management", "The account of the company and its departments, with names redacted, ready to be discussed."],
      ["Feedback session", "Two hours with the psychologist: the report is never handed over cold."],
    ],
  },
  registers: {
    label: "Three registers",
    title: "Every sentence says where it comes from.",
    frame: "Register",
    open: "“",
    close: "”",
    items: [
      ["It emerges from episodes", "What several people described with facts, times and people."],
      ["It is perceived", "What people experience, even without an episode to prove it."],
      ["Our reading is", "The psychologist’s interpretation, stated as such."],
    ],
  },
  cta: { title: "From “how are we doing” to “how do we work”.", button: "Plan a check-up" },
};

export const chimeria = { it, en };
