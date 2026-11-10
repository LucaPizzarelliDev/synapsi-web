import { client as ome, psychologists, users as omeUsers } from "./portal";

// Dati di esempio della console superadmin. Come il portale, saranno sostituiti dal database.
// Il flusso è a cascata: azienda → trattativa → (solo se vinta) area nel portale → utenti e ruoli di quell'area.

export const products = ["Viseria", "Prismia", "Chimeria", "Iridium", "Sport"] as const;
export type Product = (typeof products)[number];

/** Lo stesso colore dei servizi sul sito */
export const productBg: Record<Product, string> = {
  Viseria: "bg-ob",
  Prismia: "bg-ps",
  Chimeria: "bg-ac",
  Iridium: "bg-ip",
  Sport: "bg-sand",
};

export const dealStages = ["Primo contatto", "Proposta inviata", "Trattativa", "Vinta", "Persa"] as const;
export type DealStage = (typeof dealStages)[number];

/** Solo una trattativa vinta permette di aprire aree nel portale */
export const canOpenAreas = (stage: DealStage) => stage === "Vinta";

/** Ruoli dentro un'area: valgono solo per quell'area, la stessa persona può avere ruoli diversi in aree diverse */
export const areaRoles = ["Amministratore", "Direzione · sola lettura", "HR · report persone", "Referente di reparto"] as const;
export type AreaRole = (typeof areaRoles)[number];

export const roleNotes: Record<AreaRole, string> = {
  Amministratore: "Vede tutti i report dell'area e può chiedere di aggiungere utenti.",
  "Direzione · sola lettura": "Vede sintesi e report di organizzazione, non i report sulle singole persone.",
  "HR · report persone": "Vede i report Viseria. I report Prismia solo con il consenso della persona.",
  "Referente di reparto": "Vede la scheda del proprio reparto e il calendario dei colloqui.",
};

export type AreaUser = { name: string; email: string; role: AreaRole; last: string };

export type AreaStatus = "Attiva" | "In configurazione" | "Sospesa";

/** Area = uno spazio del portale (es. una per stabilimento o per società del gruppo) */
export type Area = {
  id: string;
  name: string;
  products: Product[];
  status: AreaStatus;
  referent: keyof typeof psychologists;
  created: string;
  assessments: number;
  users: AreaUser[];
};

export type Company = {
  id: string;
  name: string;
  short: string;
  sector: string;
  contact: { name: string; role: string; email: string };
  deal: { stage: DealStage; interest: Product[]; updated: string; note: string; contractEnd?: string };
  areas: Area[];
};

export const companies: Company[] = [
  {
    id: "ome",
    name: ome.name,
    short: ome.short,
    sector: ome.sector,
    contact: { name: ome.user.name, role: ome.user.role, email: "c.venturi@esempio.it" },
    deal: { stage: "Vinta", interest: ["Viseria", "Prismia", "Chimeria", "Iridium"], updated: "2026-08-28", note: "Contratto annuale firmato. Iridium aggiunto a novembre.", contractEnd: "2026-12-31" },
    areas: [
      {
        id: "ome-plant",
        name: "Stabilimento principale",
        products: ["Viseria", "Prismia", "Chimeria"],
        status: "Attiva",
        referent: "gilli",
        created: "2026-09-01",
        assessments: 6,
        users: omeUsers.map((u) => ({ ...u, role: u.role as AreaRole })),
      },
      {
        id: "ome-sales",
        name: "Rete commerciale",
        products: ["Iridium"],
        status: "In configurazione",
        referent: "odolini",
        created: "2026-11-04",
        assessments: 0,
        users: [{ name: "Giorgio Sala", email: "g.sala@esempio.it", role: "Amministratore", last: "Mai" }],
      },
    ],
  },
  {
    id: "lne",
    name: "Logistica Nord Esempio S.r.l.",
    short: "LNE",
    sector: "Logistica · 180 dipendenti",
    contact: { name: "Marta Conti", role: "Responsabile HR", email: "m.conti@esempio.it" },
    deal: { stage: "Vinta", interest: ["Viseria", "Chimeria"], updated: "2026-07-10", note: "Partenza con Chimeria, Viseria sulle nuove assunzioni.", contractEnd: "2027-06-30" },
    areas: [
      {
        id: "lne-hq",
        name: "Sede e magazzini",
        products: ["Viseria", "Chimeria"],
        status: "Attiva",
        referent: "odolini",
        created: "2026-07-14",
        assessments: 9,
        users: [
          { name: "Marta Conti", email: "m.conti@esempio.it", role: "Amministratore", last: "Ieri" },
          { name: "Ivan Bassi", email: "i.bassi@esempio.it", role: "Referente di reparto", last: "3 giorni fa" },
        ],
      },
    ],
  },
  {
    id: "fce",
    name: "FC Esempio",
    short: "FCE",
    sector: "Calcio · settore giovanile",
    contact: { name: "Simone Riva", role: "Direttore sportivo", email: "s.riva@esempio.it" },
    deal: { stage: "Vinta", interest: ["Sport"], updated: "2026-11-05", note: "Club pilota per il progetto Sport.", contractEnd: "2027-06-30" },
    areas: [
      {
        id: "fce-youth",
        name: "Settore giovanile",
        products: ["Sport"],
        status: "In configurazione",
        referent: "gilli",
        created: "2026-11-06",
        assessments: 0,
        users: [],
      },
    ],
  },
  {
    id: "hel",
    name: "Hotel Esempio Lago",
    short: "HEL",
    sector: "Ospitalità · 95 dipendenti",
    contact: { name: "Davide Marchi", role: "General manager", email: "d.marchi@esempio.it" },
    deal: { stage: "Trattativa", interest: ["Chimeria"], updated: "2026-11-03", note: "Chiedono una versione ridotta per la stagione invernale." },
    areas: [],
  },
  {
    id: "ste",
    name: "Studio Tecnico Esempio",
    short: "STE",
    sector: "Ingegneria · 40 dipendenti",
    contact: { name: "Paola Ferri", role: "Socia fondatrice", email: "p.ferri@esempio.it" },
    deal: { stage: "Proposta inviata", interest: ["Viseria"], updated: "2026-10-29", note: "Due selezioni per capi commessa entro gennaio." },
    areas: [],
  },
  {
    id: "mes",
    name: "Metalli Esempio S.p.A.",
    short: "MES",
    sector: "Siderurgia · 600 dipendenti",
    contact: { name: "Franco Galli", role: "Direttore del personale", email: "f.galli@esempio.it" },
    deal: { stage: "Primo contatto", interest: ["Prismia", "Chimeria"], updated: "2026-11-07", note: "Arrivati dal sito, chiamata fissata il 14 novembre." },
    areas: [],
  },
  {
    id: "gre",
    name: "Gruppo Retail Esempio",
    short: "GRE",
    sector: "Distribuzione · 1.100 dipendenti",
    contact: { name: "Elisa Moro", role: "HR director", email: "e.moro@esempio.it" },
    deal: { stage: "Vinta", interest: ["Prismia", "Iridium"], updated: "2025-09-30", note: "Contratto scaduto, rinnovo non confermato.", contractEnd: "2026-10-31" },
    areas: [
      {
        id: "gre-hq",
        name: "Sede centrale",
        products: ["Prismia"],
        status: "Sospesa",
        referent: "odolini",
        created: "2025-10-02",
        assessments: 4,
        users: [{ name: "Elisa Moro", email: "e.moro@esempio.it", role: "Amministratore", last: "1 mese fa" }],
      },
    ],
  },
  {
    id: "aes",
    name: "Assicurazioni Esempio",
    short: "AES",
    sector: "Assicurazioni · 300 dipendenti",
    contact: { name: "Roberto Pini", role: "Responsabile formazione", email: "r.pini@esempio.it" },
    deal: { stage: "Persa", interest: ["Iridium"], updated: "2026-10-12", note: "Hanno scelto un fornitore interno al gruppo." },
    areas: [],
  },
];

/** Chi lavora dentro la console: lo staff Synapsi */
export const staff = [
  { name: psychologists.gilli.name, role: "Superadmin · psicologo", email: "a.gilli@synapsi-analytics.it" },
  { name: psychologists.odolini.name, role: "Psicologo", email: "m.odolini@synapsi-analytics.it" },
];

// Registro: ogni azione della console resta tracciata, con chi l'ha fatta
export const auditLog = [
  { date: "2026-11-07", who: "A. Gilli", text: "Creata l'azienda Metalli Esempio S.p.A.", company: "mes" },
  { date: "2026-11-06", who: "A. Gilli", text: "Creata l'area «Settore giovanile» per FC Esempio", company: "fce" },
  { date: "2026-11-05", who: "A. Gilli", text: "Trattativa con FC Esempio vinta", company: "fce" },
  { date: "2026-11-04", who: "M. Odolini", text: "Creata l'area «Rete commerciale» per OME, prodotto Iridium", company: "ome" },
  { date: "2026-11-04", who: "M. Odolini", text: "Aggiunto Giorgio Sala come amministratore di «Rete commerciale»", company: "ome" },
  { date: "2026-11-03", who: "A. Gilli", text: "Trattativa con Hotel Esempio Lago passata a «Trattativa»", company: "hel" },
  { date: "2026-11-01", who: "Sistema", text: "Contratto scaduto: area «Sede centrale» di Gruppo Retail Esempio sospesa", company: "gre" },
  { date: "2026-10-12", who: "M. Odolini", text: "Trattativa con Assicurazioni Esempio persa", company: "aes" },
];

export const allAreas = companies.flatMap((c) => c.areas.map((a) => ({ ...a, company: c })));
export const findArea = (id: string) => allAreas.find((a) => a.id === id);
