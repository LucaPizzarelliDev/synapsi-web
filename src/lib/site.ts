/** Cosa facciamo, detto con il problema del cliente. Il nome del prodotto viene dopo. */
export const services = [
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
] as const;

export const nav = [
  { href: "/metodo", label: "Come lavoriamo" },
  { href: "/studio", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
] as const;

export const contact = {
  email: "info@synapsi-analytics.it", // TODO: confermare l'indirizzo definitivo
  address: "Via Cesare Guerini 22, Brescia",
};

export type Code = "OB" | "PS" | "AC" | "IP";

export const codes: { code: Code; name: string; text: string }[] = [
  { code: "OB", name: "Osservabile", text: "Ciò che è successo, con tempi e persone." },
  { code: "PS", name: "Schema", text: "Vissuti, motivazioni, modi di reagire." },
  { code: "AC", name: "Competenza", text: "Ciò che la persona sa fare, agito." },
  { code: "IP", name: "Ipotesi", text: "Una lettura, dichiarata e da verificare." },
];

export const codeBg: Record<Code, string> = {
  OB: "bg-ob",
  PS: "bg-ps",
  AC: "bg-ac",
  IP: "bg-ip",
};

export const viseriaFactors = [
  { id: "F1", name: "Autoefficacia operativa", question: "Riesco a far fronte alle richieste del lavoro?" },
  { id: "F2", name: "Autonomia / Agency", question: "Agisco di mia iniziativa o solo se guidato?" },
  { id: "F3", name: "Regolazione emotiva nella performance", question: "Resto funzionale sotto carico?" },
  { id: "F4", name: "Motivazione – Direzione", question: "La mia energia ha una direzione chiara?" },
  { id: "F5", name: "Risorse – Quantità", question: "Quante risorse ho oggi?" },
  { id: "F6", name: "Risorse – Qualità", question: "Queste risorse mi reggono nel tempo?" },
  { id: "F7", name: "Competenza relazionale nella performance", question: "Come uso le relazioni per far funzionare il lavoro?" },
] as const;

// Ordine canonico del modello Burke-Litwin: cultura (1–4), clima (5–11), esito (12)
export const chimeriaCriteria = [
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
] as const;

export const prismiaDimensions = [
  { id: "D1", name: "Decidere" },
  { id: "D2", name: "Reggere il disaccordo" },
  { id: "D3", name: "Far crescere e trattenere" },
  { id: "D4", name: "Tenuta sotto pressione" },
  { id: "D5", name: "Parola e coerenza" },
] as const;

/** La famiglia di prodotti: ognuno legge un livello diverso */
export const products = [
  { slug: "viseria", name: "Viseria", level: "La persona", line: "Come funziona oggi una persona nel suo ruolo, in quel contesto.", figure: "Scouting Card" },
  { slug: "prismia", name: "Prismia", level: "Il manager", line: "Che effetto fa un manager su chi lavora con lui. Un 360 a intervista.", figure: "Card Prismia" },
  { slug: "chimeria", name: "Chimeria", level: "L'organizzazione", line: "In che campo organizzativo tutto questo accade: dodici aree, reparto per reparto.", figure: "Mappa a 12 aree" },
  { slug: "iridium", name: "Iridium", level: "La rete commerciale", line: "Persona, squadra e leader letti insieme, in un'unica seduta. Per reti di consulenti.", figure: "Tre card integrate" },
] as const;

export const methodSteps = [
  { n: "01", who: "Psicologo", title: "Colloquio", text: "Fatti già accaduti, non opinioni. Registrato solo con consenso." },
  { n: "02", who: "AI", title: "Trascrizione", text: "Automatica, separata per parlanti, con dati che restano in UE." },
  { n: "03", who: "AI + regole", title: "Codifica", text: "Ogni evidenza marcata con un codice. Dieci indici di validità prima di ogni punteggio." },
  { n: "04", who: "Psicologo", title: "Firma", text: "Nessun report esce senza la revisione e la firma di uno psicologo iscritto all'Albo." },
] as const;

export const notWeDo = [
  { what: "Test di personalità", why: "nessuna etichetta" },
  { what: "Diagnosi cliniche", why: "finalità organizzativa" },
  { what: "Classifiche fra persone", why: "nessun ranking" },
  { what: "Analisi di voce e volto", why: "AI Act, art. 5" },
  { what: "Decidere al posto vostro", why: "la scelta resta a voi" },
] as const;

export const team = [
  { name: "Alessandro Gilli", role: "Psicologo, psicoterapeuta, executive coach", tag: "Assessor", code: "PS" as Code },
  { name: "Mattia Odolini", role: "Psicologo", tag: "Assessor", code: "PS" as Code },
  { name: "Giovanni Bena", role: "Developer e AI specialist", tag: "AI", code: "AC" as Code },
  { name: "Luca Pizzarelli", role: "Developer e AI specialist", tag: "AI", code: "AC" as Code },
];
