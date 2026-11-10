const it = {
  meta: {
    title: "Contatti",
    description: "Fissate un primo colloquio con Synapsi Analytics: mezz'ora con uno psicologo per capire se e come possiamo esservi utili.",
  },
  label: "Contatti",
  title: { before: "Raccontateci ", mark: "un episodio." },
  lead: "Il primo colloquio dura mezz’ora, è con uno psicologo e non vi impegna a nulla. Serve a capire la vostra domanda e se uno dei nostri strumenti è quello giusto.",
  details: {
    email: "Email",
    address: "Sede",
    privacy: "Riservatezza",
    privacyText: "Ciò che ci raccontate resta coperto dal segreto professionale.",
  },
  form: {
    header: "Modulo · primo colloquio",
    duration: "30 min",
    name: "Nome e cognome",
    org: "Azienda o club",
    email: "Email",
    areasLegend: "Di cosa volete parlare",
    areas: ["Una persona nel ruolo (Viseria)", "Un manager (Prismia)", "L'organizzazione (Chimeria)", "Una rete commerciale (Iridium)", "Una società sportiva", "Non lo so ancora"],
    message: "Cosa sta succedendo?",
    messagePlaceholder: "Un episodio recente, anche breve, ci aiuta più di una descrizione generale.",
    help: "Il modulo apre il vostro programma di posta con il messaggio già compilato.",
    submit: "Invia la richiesta",
    mail: {
      subject: "Primo colloquio:",
      name: "Nome:",
      org: "Organizzazione:",
      email: "Email:",
      area: "Ambito:",
    },
  },
};

export type ContattiContent = typeof it;

const en: ContattiContent = {
  meta: {
    title: "Contact",
    description: "Book a first conversation with Synapsi Analytics: half an hour with a psychologist to see whether and how we can help you.",
  },
  label: "Contact",
  title: { before: "Tell us about ", mark: "an episode." },
  lead: "The first conversation lasts half an hour, is with a psychologist and commits you to nothing. It is there to understand your question and whether one of our tools is the right one.",
  details: {
    email: "Email",
    address: "Office",
    privacy: "Confidentiality",
    privacyText: "What you tell us is covered by professional confidentiality.",
  },
  form: {
    header: "Form · first conversation",
    duration: "30 min",
    name: "Full name",
    org: "Company or club",
    email: "Email",
    areasLegend: "What would you like to talk about",
    areas: ["A person in a role (Viseria)", "A manager (Prismia)", "The organisation (Chimeria)", "A sales network (Iridium)", "A sports club", "I don't know yet"],
    message: "What is happening?",
    messagePlaceholder: "A recent episode, even a short one, helps us more than a general description.",
    help: "The form opens your email program with the message already filled in.",
    submit: "Send the request",
    mail: {
      subject: "First conversation:",
      name: "Name:",
      org: "Organisation:",
      email: "Email:",
      area: "Area:",
    },
  },
};

export const contatti = { it, en };
