const it = {
  meta: {
    title: "Iridium",
    description:
      "Iridium è l'assessment integrato per le reti commerciali: persona, squadra e leader letti in un'unica seduta e in un'unica diagnosi. Per reti di consulenti finanziari, private banker, agenti.",
  },
  intro: {
    title: { before: "Colleghi che collaborano ", mark: "e insieme competono." },
    lead: "Nelle reti commerciali l'assessment è quasi sempre individuale. Nessuno guarda in modo strutturato la cultura dell'ufficio: le regole non dette sull'aiuto, la rivalità, il manager come arbitro o come parte. Iridium legge persona, squadra e leader in un'unica seduta e in un'unica diagnosi.",
  },
  audience: {
    label: "Per chi",
    title: "Produttori individuali, nella stessa struttura.",
    text: "Consulenti finanziari, private banker, agenti assicurativi, forze vendita a mandato. Il committente è la direzione rete o l’HR. Lo scopo è lo sviluppo dell’ufficio: affiancamenti e coppie di lavoro, mai incentivi, classifiche o decisioni contrattuali.",
    levels: [
      {
        n: "A",
        level: "Persona",
        tool: "Viseria",
        text: "I sette fattori, più alcune domande sul mestiere. Ne escono la Scouting Card e la propensione a collaborare.",
      },
      {
        n: "B",
        level: "Squadra",
        tool: "Chimeria · Coopetition",
        text: "Cinque blocchi: regole ed equità, sicurezza, reciprocità, identità, rivalità. Ognuno condiviso o contestato.",
      },
      {
        n: "C",
        level: "Leader",
        tool: "Prismia",
        text: "Il manager letto da chi lavora con lui, da sé e dal responsabile di area: equità, protezione, regia, squadra, conflitto, coaching.",
      },
    ],
  },
  session: {
    label: "La seduta",
    title: "Un’ora per consulente. Tre strumenti.",
    ariaLabel: "Seduta di 60 minuti: Viseria 30, Chimeria Coopetition 25, Prismia 5",
    min: "MIN",
    // stesso ordine di colori e minuti nella pagina: Viseria, Chimeria, Prismia
    blocks: [
      { name: "Viseria", what: "La persona nel mestiere" },
      { name: "Chimeria · Coopetition", what: "Le regole dell'ufficio" },
      { name: "Prismia", what: "Il manager, visto dal basso" },
    ],
    note: "Dopo la seduta, una breve scheda sul clima competitivo e sulle collaborazioni. Il manager è intervistato per primo, poi il responsabile di area, poi i consulenti. Ogni livello ha una lettura qualitativa, dall’intervista, e una quantitativa, da scale e reti di collaborazione.",
  },
  outputs: {
    label: "Cosa ricevete",
    title: "Tre card, una diagnosi.",
    text: "Il prodotto è l’incrocio: quanto ogni persona è in tensione con il campo in cui lavora, e quanto il manager legge l’ufficio come lo legge il gruppo.",
    cards: [
      { title: "Scouting Card", meta: "Persona", text: "Radar a sette fattori e verdetto in parole. Nessun punteggio complessivo." },
      { title: "Quadro dell'ufficio", meta: "Squadra", text: "I cinque blocchi, la mappa delle collaborazioni senza nomi, la distribuzione della tensione." },
      { title: "Quadro sul ruolo del manager", meta: "Leader", text: "Sei criteri per tre fonti, una sintesi e una domanda: vede quello che vedono loro?" },
    ],
  },
  access: {
    label: "Chi vede cosa",
    title: "Tre consensi distinti, per ogni persona.",
    text: "Ognuno può dire sì a una parte e no a un’altra, e ritirarsi fino alla chiusura del campo. La rete delle rivalità non compare mai con i nomi. Sotto le soglie minime di partecipazione un dato non si mostra. Si lavora a progetto, con un pilota su un solo ufficio.",
    rows: [
      ["Consulente", "La propria Scouting Card"],
      ["Manager", "Le Scouting Card di chi ha acconsentito, la card di squadra, la propria card"],
      ["Responsabile di area", "La card di squadra e la card del manager; mai le Scouting Card"],
      ["Ufficio, in workshop", "La card di squadra, anonimizzata"],
    ],
  },
  cta: { title: "Proponete un ufficio pilota.", button: "Parliamone" },
};

export type IridiumContent = typeof it;

const en: IridiumContent = {
  meta: {
    title: "Iridium",
    description:
      "Iridium is the integrated assessment for commercial networks: person, team and leader read in a single session and a single diagnosis. For networks of financial advisors, private bankers and agents.",
  },
  intro: {
    title: { before: "Colleagues who cooperate ", mark: "and compete at the same time." },
    lead: "In commercial networks, assessment is almost always individual. No one looks in a structured way at the culture of the office: the unwritten rules about helping, the rivalry, the manager as referee or as one of the players. Iridium reads person, team and leader in a single session and a single diagnosis.",
  },
  audience: {
    label: "Who it is for",
    title: "Individual producers, within the same structure.",
    text: "Financial advisors, private bankers, insurance agents, commissioned sales forces. The client is the network management or HR. The aim is to develop the office: shadowing and working pairs, never incentives, rankings or contractual decisions.",
    levels: [
      {
        n: "A",
        level: "Person",
        tool: "Viseria",
        text: "The seven factors, plus a few questions on the job. They produce the Scouting Card and the inclination to cooperate.",
      },
      {
        n: "B",
        level: "Team",
        tool: "Chimeria · Coopetition",
        text: "Five blocks: rules and fairness, safety, reciprocity, identity, rivalry. Each one shared or contested.",
      },
      {
        n: "C",
        level: "Leader",
        tool: "Prismia",
        text: "The manager as seen by the people who work with them, by themselves and by the area manager: fairness, protection, direction, team, conflict, coaching.",
      },
    ],
  },
  session: {
    label: "The session",
    title: "One hour per advisor. Three tools.",
    ariaLabel: "60-minute session: Viseria 30, Chimeria Coopetition 25, Prismia 5",
    min: "MIN",
    blocks: [
      { name: "Viseria", what: "The person in the job" },
      { name: "Chimeria · Coopetition", what: "The rules of the office" },
      { name: "Prismia", what: "The manager, seen from below" },
    ],
    note: "After the session, a short form on the competitive climate and on collaborations. The manager is interviewed first, then the area manager, then the advisors. Each level has a qualitative reading, from the interview, and a quantitative one, from scales and collaboration networks.",
  },
  outputs: {
    label: "What you receive",
    title: "Three cards, one diagnosis.",
    text: "The product is the cross-reading: how much each person is in tension with the field they work in, and how far the manager reads the office the way the group reads it.",
    cards: [
      { title: "Scouting Card", meta: "Person", text: "A seven-factor radar and a verdict in words. No overall score." },
      { title: "Office overview", meta: "Team", text: "The five blocks, the map of collaborations without names, the distribution of tension." },
      { title: "Overview of the manager’s role", meta: "Leader", text: "Six criteria from three sources, a summary and one question: do they see what their people see?" },
    ],
  },
  access: {
    label: "Who sees what",
    title: "Three separate consents, for each person.",
    text: "Everyone can say yes to one part and no to another, and withdraw until fieldwork closes. The rivalry network never appears with names. Below the minimum participation thresholds, a figure is not shown. We work by project, with a pilot in a single office.",
    rows: [
      ["Advisor", "Their own Scouting Card"],
      ["Manager", "The Scouting Cards of those who consented, the team card, their own card"],
      ["Area manager", "The team card and the manager’s card; never the Scouting Cards"],
      ["Office, in a workshop", "The team card, anonymised"],
    ],
  },
  cta: { title: "Propose a pilot office.", button: "Let's talk" },
};

export const iridium = { it, en };
