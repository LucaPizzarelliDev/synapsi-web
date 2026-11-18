import type { Code } from "@/lib/site";

// Testi e dati comuni a tutto il sito. Gli href sono senza prefisso di lingua: li localizza chi li usa.

const it = {
  meta: {
    title: "Synapsi Analytics. Ascoltiamo episodi, restituiamo evidenze.",
    description:
      "Assessment individuale e diagnosi organizzativa basati su colloqui condotti da psicologi, con l'intelligenza artificiale a supporto della trascrizione e della codifica. Viseria, Prismia, Chimeria, Iridium.",
  },
  skipLink: "Vai al contenuto",

  /** Cosa facciamo, detto con il problema del cliente. Il nome del prodotto viene dopo. */
  services: [
    {
      href: "/viseria",
      product: "Viseria",
      label: "Valutare una persona",
      need: "Dovete scegliere, promuovere o confermare una persona in un ruolo chiave.",
      what: "Uno psicologo la intervista sugli episodi reali del suo lavoro e parla con chi la vede nel ruolo. Leggiamo come funziona oggi e cosa il ruolo le chiede.",
      get: "Scouting Card di due pagine: sette fattori, punti di forza, rischi e il verdetto dello psicologo.",
    },
    {
      href: "/prismia",
      product: "Prismia",
      label: "Far crescere un manager",
      need: "Volete far crescere un manager e capire che effetto fa su chi lavora con lui.",
      what: "Intervistiamo il manager, il suo capo, i colleghi e i collaboratori. Un 360 fatto di colloqui, non di crocette. Serve allo sviluppo, mai alla valutazione.",
      get: "Card di sei pagine che resta alla persona, e un piano di sviluppo con follow-up.",
    },
    {
      href: "/chimeria",
      product: "Chimeria",
      label: "Capire l'organizzazione",
      need: "Qualcosa non funziona in azienda o in un reparto, e non è chiaro perché.",
      what: "Colloqui reparto per reparto su dodici aree, dalla strategia al clima. Diciamo dove nasce il problema e su quale leva agire.",
      get: "Mappa dell'organizzazione, schede per reparto, report per la direzione e una restituzione di due ore.",
    },
    {
      href: "/iridium",
      product: "Iridium",
      label: "Reti commerciali",
      need: "Guidate una rete di consulenti o venditori che collaborano e competono fra loro.",
      what: "Persona, squadra e leader letti insieme, in un'unica seduta di 60 minuti per ogni consulente.",
      get: "Tre card integrate: per il consulente, per il team leader e per la direzione.",
    },
    {
      href: "/sport",
      product: "Sport",
      label: "Club sportivi",
      need: "Siete un club e dovete scegliere un allenatore, promuovere qualcuno nello staff o far parlare le aree.",
      what: "Lo stesso metodo, applicato allo staff tecnico, alla direzione e al settore giovanile.",
      get: "Report per la direzione sportiva. Stiamo cercando i primi club pilota.",
    },
  ],
  serviceLabels: { need: "Per chi è", what: "Cosa facciamo", get: "Cosa ricevete" },

  nav: [
    { href: "/method", label: "Come lavoriamo", inHeader: true },
    { href: "/about", label: "Chi siamo", inHeader: true },
    // Nell'header c'è già il pulsante "Parliamone": Contatti resta nel footer e nel menu mobile
    { href: "/contact", label: "Contatti", inHeader: false },
  ],

  header: {
    navLabel: "Principale",
    navMobileLabel: "Principale mobile",
    services: "Cosa facciamo",
    clientArea: "Area clienti",
    cta: "Parliamone",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
  },

  footer: {
    claim: "Psicologi del lavoro e AI. Valutiamo persone, manager e organizzazioni con colloqui, e consegniamo report firmati.",
    services: "Cosa facciamo",
    explore: "Il sito",
    contacts: "Contatti",
    guarantees: "Garanzie",
    guaranteeItems: ["Psicologi iscritti all’Albo", "GDPR · dati in UE", "AI Act · supervisione umana"],
    place: "Brescia, Italia",
  },

  cta: { title: "Raccontateci un episodio.", button: "Fissa un primo colloquio" },

  notFound: {
    label: "Errore 404",
    before: "Questa pagina",
    mark: "non è nel trascritto.",
    button: "Torna alla home",
  },

  codes: [
    { code: "OB" as Code, name: "Osservabile", text: "Ciò che è successo, con tempi e persone." },
    { code: "PS" as Code, name: "Schema", text: "Vissuti, motivazioni, modi di reagire." },
    { code: "AC" as Code, name: "Competenza", text: "Ciò che la persona sa fare, agito." },
    { code: "IP" as Code, name: "Ipotesi", text: "Una lettura, dichiarata e da verificare." },
  ],

  viseriaFactors: [
    { id: "F1", name: "Autoefficacia operativa", question: "Riesco a far fronte alle richieste del lavoro?" },
    { id: "F2", name: "Autonomia / Agency", question: "Agisco di mia iniziativa o solo se guidato?" },
    { id: "F3", name: "Regolazione emotiva nella performance", question: "Resto funzionale sotto carico?" },
    { id: "F4", name: "Motivazione – Direzione", question: "La mia energia ha una direzione chiara?" },
    { id: "F5", name: "Risorse – Quantità", question: "Quante risorse ho oggi?" },
    { id: "F6", name: "Risorse – Qualità", question: "Queste risorse mi reggono nel tempo?" },
    { id: "F7", name: "Competenza relazionale nella performance", question: "Come uso le relazioni per far funzionare il lavoro?" },
  ],

  // Ordine canonico del modello Burke-Litwin: cultura (1–4), clima (5–11), esito (12)
  chimeriaCriteria: [
    "Ambiente esterno",
    "Missione e strategia",
    "Leadership",
    "Cultura",
    "Struttura",
    "Pratiche gestionali",
    "Sistemi",
    "Clima dell'unità",
    "Mansioni e competenze",
    "Bisogni e valori",
    "Motivazione",
    "Performance",
  ],

  prismiaDimensions: [
    { id: "D1", name: "Decidere" },
    { id: "D2", name: "Reggere il disaccordo" },
    { id: "D3", name: "Far crescere e trattenere" },
    { id: "D4", name: "Tenuta sotto pressione" },
    { id: "D5", name: "Parola e coerenza" },
  ],

  methodSteps: [
    { n: "01", who: "Psicologo", title: "Colloquio", text: "Fatti già accaduti, non opinioni. Registrato solo con consenso.", coding: false },
    { n: "02", who: "AI", title: "Trascrizione", text: "Automatica, separata per parlanti, con dati che restano in UE.", coding: false },
    { n: "03", who: "AI + regole", title: "Codifica", text: "Ogni evidenza marcata con un codice. Dieci indici di validità prima di ogni punteggio.", coding: true },
    { n: "04", who: "Psicologo", title: "Firma", text: "Nessun report esce senza la revisione e la firma di uno psicologo iscritto all'Albo.", coding: false },
  ],

  notWeDo: [
    { what: "Test di personalità", why: "nessuna etichetta" },
    { what: "Diagnosi cliniche", why: "finalità organizzativa" },
    { what: "Classifiche fra persone", why: "nessun ranking" },
    { what: "Analisi di voce e volto", why: "AI Act, art. 5" },
    { what: "Decidere al posto vostro", why: "la scelta resta a voi" },
  ],
  notWeDoPrefix: "Non facciamo: ",

  team: [
    { name: "Alessandro Gilli", role: "Psicologo, psicoterapeuta, executive coach", tag: "Assessor", code: "PS" as Code },
    { name: "Mattia Odolini", role: "Psicologo", tag: "Assessor", code: "PS" as Code },
    { name: "Giovanni Bena", role: "Developer e AI specialist", tag: "AI", code: "AC" as Code },
    { name: "Luca Pizzarelli", role: "Developer e AI specialist", tag: "AI", code: "AC" as Code },
  ],
};

export type SharedContent = typeof it;

const en: SharedContent = {
  meta: {
    title: "Synapsi Analytics. We listen to episodes, we return evidence.",
    description:
      "Individual assessment and organisational diagnosis based on interviews led by psychologists, with artificial intelligence supporting transcription and coding. Viseria, Prismia, Chimeria, Iridium.",
  },
  skipLink: "Skip to content",

  services: [
    {
      href: "/viseria",
      product: "Viseria",
      label: "Assess a person",
      need: "You need to choose, promote or confirm someone in a key role.",
      what: "A psychologist interviews them about real episodes from their work and talks to the people who see them in the role. We read how they work today and what the role asks of them.",
      get: "A two-page Scouting Card: seven factors, strengths, risks and the psychologist's verdict.",
    },
    {
      href: "/prismia",
      product: "Prismia",
      label: "Develop a manager",
      need: "You want to develop a manager and understand the effect they have on the people who work with them.",
      what: "We interview the manager, their boss, their peers and their team. A 360 made of conversations, not tick boxes. It is for development, never for appraisal.",
      get: "A six-page card that belongs to the person, and a development plan with follow-up.",
    },
    {
      href: "/chimeria",
      product: "Chimeria",
      label: "Understand the organisation",
      need: "Something isn't working in the company or in a department, and it isn't clear why.",
      what: "Interviews department by department across twelve areas, from strategy to climate. We tell you where the problem starts and which lever to pull.",
      get: "A map of the organisation, department sheets, a report for management and a two-hour debrief.",
    },
    {
      href: "/iridium",
      product: "Iridium",
      label: "Sales networks",
      need: "You lead a network of advisors or salespeople who both cooperate and compete.",
      what: "Person, team and leader read together, in a single 60-minute session per advisor.",
      get: "Three integrated cards: for the advisor, for the team leader and for management.",
    },
    {
      href: "/sport",
      product: "Sport",
      label: "Sports clubs",
      need: "You are a club and need to choose a coach, promote someone within the staff or get departments talking.",
      what: "The same method, applied to the coaching staff, the board and the youth academy.",
      get: "A report for the sporting director. We are looking for our first pilot clubs.",
    },
  ],
  serviceLabels: { need: "Who it's for", what: "What we do", get: "What you receive" },

  nav: [
    { href: "/method", label: "How we work", inHeader: true },
    { href: "/about", label: "About us", inHeader: true },
    { href: "/contact", label: "Contact", inHeader: false },
  ],

  header: {
    navLabel: "Main",
    navMobileLabel: "Main mobile",
    services: "What we do",
    clientArea: "Client area",
    cta: "Let's talk",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  footer: {
    claim: "Work psychologists and AI. We assess people, managers and organisations through interviews, and deliver signed reports.",
    services: "What we do",
    explore: "The site",
    contacts: "Contact",
    guarantees: "Safeguards",
    guaranteeItems: ["Registered psychologists", "GDPR · data stays in the EU", "AI Act · human oversight"],
    place: "Brescia, Italy",
  },

  cta: { title: "Tell us about an episode.", button: "Book a first conversation" },

  notFound: {
    label: "Error 404",
    before: "This page",
    mark: "isn't in the transcript.",
    button: "Back to the home page",
  },

  codes: [
    { code: "OB", name: "Observable", text: "What happened, with times and people." },
    { code: "PS", name: "Pattern", text: "Feelings, motives, ways of reacting." },
    { code: "AC", name: "Competence", text: "What the person can do, in action." },
    { code: "IP", name: "Hypothesis", text: "A reading, stated and open to checking." },
  ],

  viseriaFactors: [
    { id: "F1", name: "Operational self-efficacy", question: "Can I cope with what the job demands?" },
    { id: "F2", name: "Autonomy / Agency", question: "Do I act on my own initiative, or only when guided?" },
    { id: "F3", name: "Emotional regulation in performance", question: "Do I stay effective under load?" },
    { id: "F4", name: "Motivation – Direction", question: "Does my energy have a clear direction?" },
    { id: "F5", name: "Resources – Quantity", question: "How many resources do I have today?" },
    { id: "F6", name: "Resources – Quality", question: "Will these resources hold up over time?" },
    { id: "F7", name: "Relational competence in performance", question: "How do I use relationships to make the work happen?" },
  ],

  chimeriaCriteria: [
    "External environment",
    "Mission and strategy",
    "Leadership",
    "Culture",
    "Structure",
    "Management practices",
    "Systems",
    "Work unit climate",
    "Tasks and skills",
    "Needs and values",
    "Motivation",
    "Performance",
  ],

  prismiaDimensions: [
    { id: "D1", name: "Deciding" },
    { id: "D2", name: "Handling disagreement" },
    { id: "D3", name: "Growing and keeping people" },
    { id: "D4", name: "Holding up under pressure" },
    { id: "D5", name: "Word and consistency" },
  ],

  methodSteps: [
    { n: "01", who: "Psychologist", title: "Interview", text: "Things that actually happened, not opinions. Recorded only with consent.", coding: false },
    { n: "02", who: "AI", title: "Transcription", text: "Automatic, split by speaker, with data that stays in the EU.", coding: false },
    { n: "03", who: "AI + rules", title: "Coding", text: "Every piece of evidence tagged with a code. Ten validity checks before any score.", coding: true },
    { n: "04", who: "Psychologist", title: "Signature", text: "No report leaves without the review and signature of a registered psychologist.", coding: false },
  ],

  notWeDo: [
    { what: "Personality tests", why: "no labels" },
    { what: "Clinical diagnoses", why: "organisational purpose" },
    { what: "Rankings of people", why: "no league tables" },
    { what: "Voice and face analysis", why: "AI Act, art. 5" },
    { what: "Deciding for you", why: "the choice stays yours" },
  ],
  notWeDoPrefix: "We don't do: ",

  team: [
    { name: "Alessandro Gilli", role: "Psychologist, psychotherapist, executive coach", tag: "Assessor", code: "PS" },
    { name: "Mattia Odolini", role: "Psychologist", tag: "Assessor", code: "PS" },
    { name: "Giovanni Bena", role: "Developer and AI specialist", tag: "AI", code: "AC" },
    { name: "Luca Pizzarelli", role: "Developer and AI specialist", tag: "AI", code: "AC" },
  ],
};

export const shared = { it, en };
