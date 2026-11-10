// Dati indipendenti dalla lingua. Testi e contenuti tradotti stanno in src/content.

export const contact = {
  email: "info@synapsi-analytics.it", // TODO: confermare l'indirizzo definitivo
  address: "Via Cesare Guerini 22, Brescia",
};

export type Code = "OB" | "PS" | "AC" | "IP";

export const codeBg: Record<Code, string> = {
  OB: "bg-ob",
  PS: "bg-ps",
  AC: "bg-ac",
  IP: "bg-ip",
};
