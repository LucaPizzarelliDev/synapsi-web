// Testi dei grafici illustrativi (src/components/graphics.tsx). Esempi anonimizzati, non casi reali.

const it = {
  check: { signedByPsychologist: "Firmato dallo psicologo", reviewedByPsychologist: "Codifica rivista dallo psicologo", sample: "Estratto illustrativo, anonimizzato" },

  transcript: {
    title: "Trascritto · Intervista 04",
    interviewer: "INT",
    person: "P.",
    q1: "Mi racconta un momento recente in cui il carico è aumentato?",
    a1: {
      lead: "Quando il collega si è ammalato ",
      ob: "ho coperto anche il suo turno, per tre settimane.",
      ps: "Non volevo che il reparto si fermasse per colpa mia.",
      mid: " Alla fine ",
      ip: "nessuno se n’è accorto.",
    },
    q2: "E come l’ha gestito?",
    a2: { ac: "Ho riorganizzato i cambi con due operatori più giovani", tail: ", ma non l’ho detto al responsabile." },
  },

  scoutingCard: {
    title: "Viseria · Scouting Card",
    meta: "Capo reparto · esempio",
    verdictLabel: "Verdetto",
    verdict: "Funziona nel ruolo, a condizione che il carico sulle risorse venga redistribuito. Nessun punteggio complessivo.",
    radarLabel: "Radar a sette fattori: profilo della persona, pieno, sovrapposto al profilo richiesto dal ruolo, tratteggiato",
  },

  orgMap: {
    title: "Mappa · reparti × 12 aree",
    meta: "Esempio",
    caption: "Esempio di mappa: cinque reparti per dodici aree, ogni cella in tenuta, attenzione, sviluppo o non rilevata",
    states: { T: "Tenuta", A: "Attenzione", S: "Sviluppo", N: "Non rilevata" },
    departments: ["Direzione", "Produzione", "Amministrazione", "Commerciale", "Logistica"],
  },

  pitch: {
    label: "Schema di un campo da calcio: direzione, staff tecnico, area medica e settore giovanile collegati fra loro",
    tags: ["DIREZIONE", "STAFF TECNICO", "AREA MEDICA", "SETT. GIOVANILE"],
  },

  evidenceFlow: {
    title: "Dal colloquio al report",
    meta: "Esempio",
    step1: { title: "Lo psicologo ascolta un episodio", meta: "Colloquio · 45 min" },
    quote: { lead: "«Quando il collega si è ammalato ", ob: "ho coperto anche il suo turno, per tre settimane.", ps: "Non volevo che il reparto si fermasse.", mid: " Alla fine ", ip: "nessuno se n’è accorto.", end: "»" },
    step2: { title: "L'AI trascrive e codifica ogni frase", meta: "Codifica" },
    coded: [
      ["Fatto", "Ha coperto un doppio turno per 3 settimane"],
      ["Schema", "Si fa carico per non fermare il reparto"],
      ["Ipotesi", "Il sovraccarico non viene segnalato"],
    ],
    step3: { title: "Il report: un'evidenza, una firma", meta: "Restituzione" },
    factor: "F5 · Risorse – Quantità",
    score: "2 / 5 · ruolo 4",
    finding: "Funziona nel ruolo se il carico viene redistribuito.",
    source: "Fonte: intervista 04, min. 12",
  },

  heroFlow: {
    label:
      "Il flusso: una frase del colloquio viene codificata nei quattro codici (fatto, schema, ipotesi), diventa un report firmato con la sua prova, e infine una decisione.",
    interview: "Colloquio",
    minutes: "45 min",
    quote: { lead: "«Quando il collega si è ammalato ", ob: "ho coperto anche il suo turno, per tre settimane.", ps: "Non volevo che il reparto si fermasse.", end: "»" },
    arrow1: "L’AI trascrive, lo psicologo legge",
    coding: "Codifica",
    codes: "4 codici",
    coded: [
      ["Fatto", "Doppio turno per tre settimane"],
      ["Schema", "Si fa carico per non fermare il reparto"],
      ["Ipotesi", "Il sovraccarico non viene segnalato"],
    ],
    arrow2: "Un’evidenza, una firma",
    report: "Report",
    signed: "Firmato",
    finding: "Funziona nel ruolo, se il carico viene redistribuito.",
    proof: "Prova: colloquio, min. 12",
    toDecide: "Per decidere",
    decisions: ["chi scegliere", "chi far crescere", "dove intervenire"],
  },

  portalPreview: {
    label: "Anteprima del portale clienti: lo stato degli assessment, il prossimo colloquio e i report firmati",
    sample: "Ambiente di esempio",
    nav: ["Panoramica", "Persone", "Manager", "Organizzazione", "Report"],
    hello: "Ciao, Chiara",
    lead: "Lo stato dei lavori, aggiornato a ogni passaggio.",
    next: "Prossimo colloquio",
    nextDate: "12 nov",
    stats: [
      ["Assessment in corso", "4"],
      ["Report firmati", "9"],
    ],
    list: "Assessment in corso",
    people: [
      ["Davide Colombo", "Area manager", "Revisione", 4],
      ["Sara Lombardi", "Controller", "Codifica", 3],
      ["Luca Moretti", "Responsabile logistica", "Colloqui", 2],
    ] as [string, string, string, number][],
    signed: "Firmato",
    toast: ["Report firmato", "Scouting Card · M. B."],
  },
};

export type GraphicsContent = typeof it;

const en: GraphicsContent = {
  check: { signedByPsychologist: "Signed by the psychologist", reviewedByPsychologist: "Coding reviewed by the psychologist", sample: "Illustrative, anonymised extract" },

  transcript: {
    title: "Transcript · Interview 04",
    interviewer: "INT",
    person: "P.",
    q1: "Can you tell me about a recent time when the workload went up?",
    a1: {
      lead: "When my colleague fell ill ",
      ob: "I covered his shift as well, for three weeks.",
      ps: "I didn’t want the department to stop because of me.",
      mid: " In the end ",
      ip: "nobody noticed.",
    },
    q2: "And how did you handle it?",
    a2: { ac: "I reorganised the shifts with two younger operators", tail: ", but I didn’t tell my manager." },
  },

  scoutingCard: {
    title: "Viseria · Scouting Card",
    meta: "Department head · example",
    verdictLabel: "Verdict",
    verdict: "Works in the role, provided the load on their resources is redistributed. No overall score.",
    radarLabel: "Seven-factor radar: the person's profile, solid, over the profile the role requires, dashed",
  },

  orgMap: {
    title: "Map · departments × 12 areas",
    meta: "Example",
    caption: "Example map: five departments across twelve areas, each cell holding, needs attention, to develop or not observed",
    states: { T: "Holding", A: "Attention", S: "To develop", N: "Not observed" },
    departments: ["Management", "Production", "Administration", "Sales", "Logistics"],
  },

  pitch: {
    label: "Diagram of a football pitch: board, coaching staff, medical area and youth academy connected to each other",
    tags: ["BOARD", "COACHING STAFF", "MEDICAL AREA", "YOUTH ACADEMY"],
  },

  evidenceFlow: {
    title: "From interview to report",
    meta: "Example",
    step1: { title: "The psychologist listens to an episode", meta: "Interview · 45 min" },
    quote: { lead: "“When my colleague fell ill ", ob: "I covered his shift as well, for three weeks.", ps: "I didn’t want the department to stop.", mid: " In the end ", ip: "nobody noticed.", end: "”" },
    step2: { title: "AI transcribes and codes every sentence", meta: "Coding" },
    coded: [
      ["Fact", "Covered a double shift for 3 weeks"],
      ["Pattern", "Takes the load so the department doesn't stop"],
      ["Hypothesis", "The overload goes unreported"],
    ],
    step3: { title: "The report: one piece of evidence, one signature", meta: "Feedback" },
    factor: "F5 · Resources – Quantity",
    score: "2 / 5 · role 4",
    finding: "Works in the role if the load is redistributed.",
    source: "Source: interview 04, min. 12",
  },

  heroFlow: {
    label:
      "The flow: a sentence from the interview is coded with the evidence codes (fact, pattern, hypothesis), becomes a signed report with its proof, and finally a decision.",
    interview: "Interview",
    minutes: "45 min",
    quote: { lead: "“When my colleague fell ill ", ob: "I covered his shift as well, for three weeks.", ps: "I didn’t want the department to stop.", end: "”" },
    arrow1: "AI transcribes, the psychologist reads",
    coding: "Coding",
    codes: "4 codes",
    coded: [
      ["Fact", "Double shift for three weeks"],
      ["Pattern", "Takes the load so the department doesn't stop"],
      ["Hypothesis", "The overload goes unreported"],
    ],
    arrow2: "One piece of evidence, one signature",
    report: "Report",
    signed: "Signed",
    finding: "Works in the role, if the load is redistributed.",
    proof: "Proof: interview, min. 12",
    toDecide: "To decide",
    decisions: ["who to choose", "who to develop", "where to act"],
  },

  portalPreview: {
    label: "Preview of the client portal: assessment status, the next interview and signed reports",
    sample: "Sample environment",
    nav: ["Overview", "People", "Managers", "Organisation", "Reports"],
    hello: "Hi, Chiara",
    lead: "Where the work stands, updated at every step.",
    next: "Next interview",
    nextDate: "12 Nov",
    stats: [
      ["Assessments in progress", "4"],
      ["Signed reports", "9"],
    ],
    list: "Assessments in progress",
    people: [
      ["Davide Colombo", "Area manager", "Review", 4],
      ["Sara Lombardi", "Controller", "Coding", 3],
      ["Luca Moretti", "Logistics manager", "Interviews", 2],
    ],
    signed: "Signed",
    toast: ["Report signed", "Scouting Card · M. B."],
  },
};

export const graphics = { it, en };
