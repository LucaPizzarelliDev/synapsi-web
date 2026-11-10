const it = {
  meta: {
    title: "Metodo",
    description: "Colloqui clinici strutturati, codifica tracciabile, revisione obbligatoria dello psicologo. Conforme a GDPR e AI Act.",
  },
  intro: {
    label: "Il metodo",
    title: { before: "Qualitativo, ", mark: "con rigore quantitativo." },
    lead: "Il dato nasce dal colloquio con uno psicologo, viene codificato con una tassonomia fissa e letto con griglie di costrutto validate in letteratura. L'intelligenza artificiale rende il processo veloce; il giudizio resta umano.",
  },
  flow: { label: "Il flusso", title: "Dalla voce alla firma, in quattro passaggi." },
  architecture: {
    label: "Architettura",
    title: "Tre livelli, ognuno con un compito.",
    layers: [
      ["L1", "Rigore clinico", "Modelli di personalità, schemi comportamentali, regolazione emotiva sotto stress."],
      ["L2", "Executive coaching", "Competenze strategiche, decisioni, impatto relazionale: la traduzione in piani di sviluppo."],
      ["L3", "Metodologia della ricerca", "Tracciabilità, validità di contenuto, saturazione, riduzione dei bias."],
    ],
    note: "Ogni modello teorico usato in uno strumento ha un solo ruolo dichiarato: cornice, griglia di codifica, blocco di intervista o lente analitica. Nessuna scatola nera.",
  },
  guarantees: {
    label: "Garanzie",
    title: "L’AI trascrive e organizza. Non decide.",
    items: [
      ["Psicologi iscritti all'Albo", "Conducono e valutano solo professionisti vincolati al segreto professionale."],
      ["AI Act", "Sorveglianza umana strutturale e tracciabilità di ogni punteggio, come richiesto ai sistemi che valutano persone."],
      ["GDPR e consenso", "Informativa e consenso esplicito per ogni persona. Al committente arrivano solo informazioni pertinenti al ruolo."],
      ["Validità a tempo", "I report descrivono una situazione attuale e decadono dopo dodici mesi senza riassessment."],
    ],
  },
  limits: { label: "Confini", title: "Ciò che lo strumento non fa è parte del valore." },
};

export type MetodoContent = typeof it;

const en: MetodoContent = {
  meta: {
    title: "Method",
    description: "Structured clinical interviews, traceable coding, mandatory review by a psychologist. Compliant with GDPR and the AI Act.",
  },
  intro: {
    label: "The method",
    title: { before: "Qualitative, ", mark: "with quantitative rigour." },
    lead: "The data comes from an interview with a psychologist, is coded with a fixed taxonomy and read through construct grids validated in the literature. Artificial intelligence makes the process fast; the judgement stays human.",
  },
  flow: { label: "The flow", title: "From voice to signature, in four steps." },
  architecture: {
    label: "Architecture",
    title: "Three layers, each with one job.",
    layers: [
      ["L1", "Clinical rigour", "Personality models, behavioural patterns, emotional regulation under stress."],
      ["L2", "Executive coaching", "Strategic skills, decisions, impact on others: the translation into development plans."],
      ["L3", "Research methodology", "Traceability, content validity, saturation, bias reduction."],
    ],
    note: "Every theoretical model used in a tool has a single declared role: framework, coding grid, interview block or analytical lens. No black box.",
  },
  guarantees: {
    label: "Guarantees",
    title: "AI transcribes and organises. It does not decide.",
    items: [
      ["Registered psychologists", "Only professionals bound by professional confidentiality conduct and assess."],
      ["AI Act", "Built-in human oversight and traceability of every score, as required of systems that assess people."],
      ["GDPR and consent", "Information and explicit consent for every person. The client receives only information relevant to the role."],
      ["Limited validity", "Reports describe a current situation and expire after twelve months without reassessment."],
    ],
  },
  limits: { label: "Boundaries", title: "What the tool does not do is part of its value." },
};

export const metodo = { it, en };
