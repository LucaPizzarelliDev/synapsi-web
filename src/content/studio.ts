const it = {
  meta: {
    title: "Studio",
    description: "Quattro soci: due psicologi assessor e due developer specializzati in intelligenza artificiale.",
  },
  intro: {
    label: "Lo studio",
    title: { before: "Due psicologi. ", mark: "Due specialisti AI." },
    lead: "Chi conduce i colloqui e legge le organizzazioni lavora accanto a chi costruisce gli strumenti che rendono quel lavoro più rapido e più tracciabile. Esperienza e nuove competenze, con lo stesso metodo.",
  },
  founders: { label: "Soci fondatori", photoNote: "Foto ritratto in arrivo." },
  research: {
    label: "Ricerca",
    title: "Università Cattolica del Sacro Cuore, Brescia.",
    paragraphs: [
      "Lo strumento individuale, allora chiamato Hermia e oggi Viseria, è stato oggetto di una tesi discussa all’Università Cattolica di Brescia, che ne ha studiato l’applicazione in un’azienda reale. È la prima validazione esterna e accademica del metodo.",
      "La collaborazione prosegue con nuove tesi e studi di validazione, a partire dall’accordo fra valutatori.",
    ],
  },
  cta: { title: "Lavoriamo insieme.", button: "Scrivici" },
};

export type StudioContent = typeof it;

const en: StudioContent = {
  meta: {
    title: "About us",
    description: "Four partners: two assessor psychologists and two developers specialised in artificial intelligence.",
  },
  intro: {
    label: "The studio",
    title: { before: "Two psychologists. ", mark: "Two AI specialists." },
    lead: "The people who run the interviews and read organisations work alongside the people who build the tools that make that work faster and more traceable. Experience and new skills, with the same method.",
  },
  founders: { label: "Founding partners", photoNote: "Portrait photos coming soon." },
  research: {
    label: "Research",
    title: "Università Cattolica del Sacro Cuore, Brescia.",
    paragraphs: [
      "The individual tool, then called Hermia and now Viseria, was the subject of a thesis defended at the Università Cattolica in Brescia, which studied its application in a real company. It is the first external, academic validation of the method.",
      "The collaboration continues with new theses and validation studies, starting with inter-rater agreement.",
    ],
  },
  cta: { title: "Let's work together.", button: "Write to us" },
};

export const studio = { it, en };
