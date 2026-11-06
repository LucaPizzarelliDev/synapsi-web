// Dati di esempio del portale clienti. Saranno sostituiti dal database quando colleghiamo accesso e archivio.

export const client = {
  name: "Officine Meccaniche Esempio S.p.A.",
  short: "OME",
  sector: "Manifattura · 420 dipendenti",
  contract: "Viseria · Prismia · Chimeria Core · 2026",
  user: { name: "Chiara Venturi", role: "Direttrice HR", initials: "CV" },
};

export const psychologists = {
  gilli: { name: "Dott. Alessandro Gilli", short: "A. Gilli" },
  odolini: { name: "Dott. Mattia Odolini", short: "M. Odolini" },
} as const;

export const stages = ["Pianificato", "Colloqui", "Codifica", "Revisione", "Consegnato"] as const;
export type Stage = (typeof stages)[number];

export type Assessment = {
  id: string;
  name: string;
  role: string;
  department: string;
  stage: Stage;
  started: string;
  delivered?: string;
  psychologist: keyof typeof psychologists;
  /** Assetto di sostenibilità: lettura temporanea, senza punteggio */
  profile?: "sostenibile" | "ipercompensativo" | "sovraccaricato" | "fragile" | "dipendente dal contesto";
  /** Indice globale di validità del colloquio, 0–100 */
  vgi?: number;
  scores?: number[];
  confidence?: ("Alta" | "Media" | "Bassa")[];
  roleScores: number[];
  verdict?: string;
  interviews: { who: string; date: string; minutes: number; done: boolean }[];
  evidence?: { code: "OB" | "PS" | "AC" | "IP"; factor: string; text: string; source: string }[];
};

export const assessments: Assessment[] = [
  {
    id: "bellini-marco",
    name: "Marco Bellini",
    role: "Capo reparto",
    department: "Produzione",
    stage: "Consegnato",
    started: "2026-09-08",
    delivered: "2026-10-02",
    psychologist: "gilli",
    profile: "ipercompensativo",
    vgi: 81,
    scores: [4, 5, 3, 4, 2, 3, 4],
    confidence: ["Alta", "Alta", "Media", "Media", "Alta", "Media", "Alta"],
    roleScores: [4, 4, 4, 3, 4, 4, 4],
    verdict: "Funziona nel ruolo, a condizione che il carico sulle risorse venga redistribuito entro il primo trimestre.",
    interviews: [
      { who: "Committente (Direzione di stabilimento)", date: "2026-09-08", minutes: 38, done: true },
      { who: "Marco Bellini", date: "2026-09-15", minutes: 54, done: true },
    ],
    evidence: [
      { code: "OB", factor: "F5", text: "Ha coperto un doppio turno per tre settimane durante un'assenza.", source: "Intervista 02 · min. 12" },
      { code: "PS", factor: "F5", text: "Si fa carico per non fermare il reparto, senza chiedere supporto.", source: "Intervista 02 · min. 13" },
      { code: "AC", factor: "F2", text: "Ha riorganizzato i cambi con due operatori junior in autonomia.", source: "Intervista 02 · min. 15" },
      { code: "IP", factor: "F3", text: "Il sovraccarico non viene segnalato: rischio di calo nel medio periodo.", source: "Sintesi psicologo" },
    ],
  },
  {
    id: "ferraro-giulia",
    name: "Giulia Ferraro",
    role: "Responsabile qualità",
    department: "Qualità",
    stage: "Consegnato",
    started: "2026-09-10",
    delivered: "2026-10-06",
    psychologist: "odolini",
    profile: "sostenibile",
    vgi: 77,
    scores: [4, 4, 4, 4, 4, 4, 3],
    confidence: ["Alta", "Media", "Media", "Alta", "Media", "Media", "Alta"],
    roleScores: [4, 3, 4, 4, 3, 4, 4],
    verdict: "Funziona nel ruolo con margine. Unico punto da presidiare: la gestione dei rapporti con i fornitori esterni.",
    interviews: [
      { who: "Committente (Direzione HR)", date: "2026-09-10", minutes: 32, done: true },
      { who: "Giulia Ferraro", date: "2026-09-18", minutes: 49, done: true },
    ],
    evidence: [
      { code: "OB", factor: "F1", text: "Ha chiuso l'audit ISO senza non conformità maggiori.", source: "Intervista 02 · min. 8" },
      { code: "AC", factor: "F7", text: "Media tra produzione e commerciale sulle priorità dei lotti.", source: "Intervista 02 · min. 21" },
      { code: "IP", factor: "F7", text: "Con i fornitori tende ad assumere un ruolo esecutivo più che negoziale.", source: "Sintesi psicologo" },
    ],
  },
  {
    id: "colombo-davide",
    name: "Davide Colombo",
    role: "Area manager",
    department: "Commerciale",
    stage: "Revisione",
    started: "2026-10-01",
    psychologist: "gilli",
    roleScores: [4, 4, 3, 4, 4, 3, 5],
    interviews: [
      { who: "Committente (Direzione commerciale)", date: "2026-10-01", minutes: 35, done: true },
      { who: "Davide Colombo", date: "2026-10-09", minutes: 58, done: true },
    ],
  },
  {
    id: "lombardi-sara",
    name: "Sara Lombardi",
    role: "Controller",
    department: "Amministrazione",
    stage: "Codifica",
    started: "2026-10-12",
    psychologist: "odolini",
    roleScores: [4, 3, 4, 3, 4, 4, 3],
    interviews: [
      { who: "Committente (CFO)", date: "2026-10-12", minutes: 30, done: true },
      { who: "Sara Lombardi", date: "2026-10-27", minutes: 51, done: true },
    ],
  },
  {
    id: "moretti-luca",
    name: "Luca Moretti",
    role: "Responsabile logistica",
    department: "Logistica",
    stage: "Colloqui",
    started: "2026-10-20",
    psychologist: "gilli",
    roleScores: [4, 4, 4, 3, 4, 4, 4],
    interviews: [
      { who: "Committente (Direzione di stabilimento)", date: "2026-10-20", minutes: 36, done: true },
      { who: "Luca Moretti", date: "2026-11-12", minutes: 60, done: false },
    ],
  },
  {
    id: "galli-elena",
    name: "Elena Galli",
    role: "HR business partner",
    department: "Risorse umane",
    stage: "Pianificato",
    started: "2026-11-18",
    psychologist: "odolini",
    roleScores: [3, 4, 4, 4, 3, 4, 5],
    interviews: [
      { who: "Committente (Direzione HR)", date: "2026-11-18", minutes: 40, done: false },
      { who: "Elena Galli", date: "2026-11-25", minutes: 60, done: false },
    ],
  },
];

export type Report = {
  id: string;
  title: string;
  product: "Viseria" | "Prismia" | "Chimeria";
  kind: "Scouting Card LITE" | "Card Prismia" | "Allegato HR" | "Report committente" | "Scheda reparto" | "Fascicolo direzione" | "Report Lean" | "Consensi";
  subject: string;
  date: string;
  pages: number;
  signedBy: keyof typeof psychologists;
  assessmentId?: string;
  cycleId?: string;
};

export const reports: Report[] = [
  { id: "VS-2026-014", title: "Scouting Card · M. B.", product: "Viseria", kind: "Scouting Card LITE", subject: "Capo reparto · Produzione", date: "2026-10-02", pages: 2, signedBy: "gilli", assessmentId: "bellini-marco" },
  { id: "VS-2026-015", title: "Scouting Card · G. F.", product: "Viseria", kind: "Scouting Card LITE", subject: "Responsabile qualità", date: "2026-10-06", pages: 2, signedBy: "odolini", assessmentId: "ferraro-giulia" },
  { id: "CH-2026-003", title: "Report per il committente · Core", product: "Chimeria", kind: "Report committente", subject: "Azienda e reparti · 5 reparti", date: "2026-10-21", pages: 14, signedBy: "odolini" },
  { id: "CH-2026-004", title: "Scheda di reparto · Produzione", product: "Chimeria", kind: "Scheda reparto", subject: "Produzione · 6 colloqui su 7", date: "2026-10-21", pages: 5, signedBy: "odolini" },
  { id: "CH-2026-005", title: "Fascicolo per la direzione", product: "Chimeria", kind: "Fascicolo direzione", subject: "Racconto dell'azienda e dei reparti", date: "2026-10-24", pages: 11, signedBy: "gilli" },
  { id: "PR-2026-002", title: "Allegato HR · ciclo R. T.", product: "Prismia", kind: "Allegato HR", subject: "Responsabile commerciale", date: "2026-10-28", pages: 1, signedBy: "gilli", cycleId: "pr-02" },
  { id: "PR-2026-001", title: "Card Prismia · A. S.", product: "Prismia", kind: "Card Prismia", subject: "Direttore di stabilimento · con consenso", date: "2026-10-15", pages: 6, signedBy: "odolini", cycleId: "pr-01" },
  { id: "CH-2025-007", title: "Report Lean · baseline", product: "Chimeria", kind: "Report Lean", subject: "Produzione e logistica · 3 gruppi", date: "2025-11-14", pages: 12, signedBy: "odolini" },
  { id: "AL-2026-001", title: "Informativa e moduli di consenso", product: "Viseria", kind: "Consensi", subject: "Versione 1.2 · in uso", date: "2026-09-01", pages: 3, signedBy: "gilli" },
];

/** Prismia: il ciclo appartiene alla persona. L'HR vede la card solo con il suo consenso scritto; il capo non ha accesso. */
export const prismiaStages = ["Mandato", "Avvio", "Raccolta", "Codifica", "Confronto", "Card", "Debrief", "Piano", "Follow-up", "Chiuso"] as const;

export const prismiaCycles = [
  {
    id: "pr-01",
    person: "A. S.",
    role: "Direttore di stabilimento",
    stage: "Follow-up" as (typeof prismiaStages)[number],
    sources: { capo: [1, 1], pari: [3, 3], collaboratori: [4, 4] },
    consentHR: true,
    psychologist: "odolini" as keyof typeof psychologists,
    followUp: "2027-04-15",
  },
  {
    id: "pr-02",
    person: "R. T.",
    role: "Responsabile commerciale",
    stage: "Debrief" as (typeof prismiaStages)[number],
    sources: { capo: [1, 1], pari: [2, 3], collaboratori: [3, 4] },
    consentHR: false,
    psychologist: "gilli" as keyof typeof psychologists,
  },
  {
    id: "pr-03",
    person: "F. M.",
    role: "Capo turno senior",
    stage: "Raccolta" as (typeof prismiaStages)[number],
    sources: { capo: [1, 1], pari: [1, 2], collaboratori: [1, 3] },
    consentHR: false,
    psychologist: "gilli" as keyof typeof psychologists,
  },
];

export const checkups = [
  { id: "CH-2026-003", label: "Chimeria Core · azienda e reparti · 2026", status: "Consegnato", date: "2026-10-21", interviews: 18, departments: 5 },
  { id: "CH-2025-007", label: "Chimeria Lean · 2025", status: "Consegnato", date: "2025-11-14", interviews: 15, departments: 2 },
];

export const activity = [
  { date: "2026-11-03", text: "Colloquio con Sara Lombardi trascritto e in codifica", who: "Sistema" },
  { date: "2026-10-30", text: "Assessment di Davide Colombo passato in revisione", who: "A. Gilli" },
  { date: "2026-10-28", text: "Prismia: allegato HR del ciclo R. T. disponibile", who: "A. Gilli" },
  { date: "2026-10-24", text: "Pubblicata la sintesi per la direzione Q3", who: "A. Gilli" },
  { date: "2026-10-21", text: "Consegnato il report Chimeria Core al committente", who: "M. Odolini" },
  { date: "2026-10-20", text: "Avviato l'assessment di Luca Moretti", who: "A. Gilli" },
];

export const users = [
  { name: "Chiara Venturi", email: "c.venturi@esempio.it", role: "Amministratore", last: "Oggi" },
  { name: "Paolo Rinaldi", email: "p.rinaldi@esempio.it", role: "Direzione · sola lettura", last: "2 giorni fa" },
  { name: "Anna Fumagalli", email: "a.fumagalli@esempio.it", role: "HR · report persone", last: "1 settimana fa" },
];

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("it-IT", { day: "numeric", month: "short", year: "numeric" });
}
