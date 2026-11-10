const it = {
  meta: {
    title: "Sport",
    description: "Viseria e Chimeria per le società sportive: atleti, allenatori e staff nel loro ruolo, il club come organizzazione.",
  },
  hero: {
    kicker: "Sport · nuova divisione",
    title: { before: "Si vede in campo. ", accent: "Nasce fuori." },
    lead: "Un club conosce bene risultati, classifica e minuti giocati. Conosce meno come funzionano le persone nei loro ruoli, e come funziona la società come organizzazione.",
    button: "Diventa club pilota",
  },
  viseria: {
    frameTitle: "Viseria · per lo sport",
    frameMeta: "Persone",
    title: "La persona nel ruolo",
    text: "Atleti, allenatori, preparatori, area medica, direttori sportivi. In particolare chi è in transizione: da giocatore ad allenatore, da assistente a capo, da capitano a dirigente.",
    mark: "Il report di uno scout che ha visto la persona lavorare",
    after: ", non una card da videogioco.",
  },
  chimeria: {
    frameTitle: "Chimeria · per lo sport",
    frameMeta: "Club",
    title: "Il club come organizzazione",
    text: "Dodici aree lette dalla direzione (proprietà, direzione sportiva, capo allenatore) fino all’operatività (staff, squadra, uffici). Per la società intera, un’area o un’interfaccia fra aree.",
    mark: "Un club non ha un voto, ha una mappa.",
  },
  readings: {
    label: "Letture specifiche per lo sport",
    title: "Tre domande che il tabellino non fa.",
    items: [
      { title: "Prontezza al cambiamento", text: "Quanto il club è pronto a un nuovo allenatore, a un nuovo progetto tecnico, a un cambio di proprietà." },
      { title: "Domino", text: "Dove le persone collocano l'insuccesso, il campo, il mercato, la società, e dove invece stanno i segnali." },
      { title: "Interfacce", text: "Lo stesso passaggio raccontato da due aree: il rientro da infortunio visto dall'area medica e dallo staff tecnico." },
    ],
  },
  cases: {
    label: "Esempi d’uso",
    title: "Situazioni che ogni direttore sportivo riconosce.",
    items: [
      "Un assistente promosso a capo allenatore: cosa gli serve per far valere lo standard che già conosce.",
      "Un capitano di lungo corso che il club vorrebbe nello staff: quali condizioni rendono il passaggio sostenibile.",
      "Un settore giovanile con 30 allenatori che non condividono uno standard: dove si rompe la trasmissione.",
      "Un club appena acquistato: cosa la nuova proprietà eredita davvero.",
    ],
  },
  steps: {
    label: "Come si lavora",
    title: "Dentro il calendario sportivo.",
    items: [
      ["Mandato", "Con la proprietà o la direzione sportiva: cosa si legge, chi, con quali limiti d'uso."],
      ["Interviste", "In sede, nelle finestre del calendario: ritiro, soste, fine stagione."],
      ["Analisi", "Trascrizione e codifica assistite; ogni valutazione rivista e firmata dal professionista."],
      ["Restituzione", "Alla direzione la mappa anonimizzata; a ogni persona la propria Scouting Card, in colloquio."],
    ],
    note: "Niente arriva alla direzione con un nome sopra senza il consenso della persona. Sotto i tre rispondenti per area non si produce una lettura. I report decadono dopo dodici mesi senza riassessment.",
  },
  cta: { title: "Proponete il vostro club.", button: "Diventa club pilota" },
};

export type SportContent = typeof it;

const en: SportContent = {
  meta: {
    title: "Sport",
    description: "Viseria and Chimeria for sports clubs: athletes, coaches and staff in their roles, the club as an organisation.",
  },
  hero: {
    kicker: "Sport · new division",
    title: { before: "It shows on the pitch. ", accent: "It starts off it." },
    lead: "A club knows its results, its league position and its minutes played. It knows less about how people work in their roles, and how the club works as an organisation.",
    button: "Become a pilot club",
  },
  viseria: {
    frameTitle: "Viseria · for sport",
    frameMeta: "People",
    title: "The person in the role",
    text: "Athletes, coaches, fitness staff, medical staff, sporting directors. Above all, those in transition: from player to coach, from assistant to head coach, from captain to executive.",
    mark: "The report of a scout who has watched the person at work",
    after: ", not a video-game card.",
  },
  chimeria: {
    frameTitle: "Chimeria · for sport",
    frameMeta: "Club",
    title: "The club as an organisation",
    text: "Twelve areas read from the top (ownership, sporting director, head coach) down to day-to-day operations (staff, squad, offices). For the whole club, one area or an interface between areas.",
    mark: "A club doesn’t get a score. It gets a map.",
  },
  readings: {
    label: "Readings specific to sport",
    title: "Three questions the match report doesn’t ask.",
    items: [
      { title: "Readiness for change", text: "How ready the club is for a new head coach, a new technical project, a change of ownership." },
      { title: "Domino", text: "Where people place the blame for failure, the pitch, the transfer market, the club, and where the signals actually are." },
      { title: "Interfaces", text: "The same hand-off told by two areas: the return from injury as seen by the medical staff and by the coaching staff." },
    ],
  },
  cases: {
    label: "Examples of use",
    title: "Situations every sporting director will recognise.",
    items: [
      "An assistant promoted to head coach: what he needs to enforce the standard he already knows.",
      "A long-serving captain the club would like on the staff: which conditions make the move sustainable.",
      "A youth academy with 30 coaches who do not share a standard: where the hand-down breaks.",
      "A club that has just been bought: what the new owners really inherit.",
    ],
  },
  steps: {
    label: "How we work",
    title: "Within the sporting calendar.",
    items: [
      ["Mandate", "With the owners or the sporting director: what is read, who, and within which limits of use."],
      ["Interviews", "On site, in the gaps in the calendar: pre-season camp, breaks, end of season."],
      ["Analysis", "Assisted transcription and coding; every assessment reviewed and signed by the professional."],
      ["Feedback", "The board receives the anonymised map; each person receives their own Scouting Card, in a one-to-one meeting."],
    ],
    note: "Nothing reaches the board with a name on it without the person’s consent. Below three respondents per area, no reading is produced. Reports expire after twelve months without a reassessment.",
  },
  cta: { title: "Put your club forward.", button: "Become a pilot club" },
};

export const sport = { it, en };
