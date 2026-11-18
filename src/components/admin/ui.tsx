import { productBg, type AreaStatus, type DealStage, type Product } from "@/lib/admin";

export function ProductChips({ products }: { products: readonly Product[] }) {
  return (
    <span className="flex flex-wrap gap-1">
      {products.map((p) => (
        <span key={p} className={`rounded-md px-2 py-0.5 text-[12px] font-medium text-ink ${productBg[p]}`}>
          {p}
        </span>
      ))}
    </span>
  );
}

const statusStyle: Record<AreaStatus, { bg: string; dot: string }> = {
  Attiva: { bg: "bg-ac text-ink", dot: "bg-ink/70" },
  "In configurazione": { bg: "bg-ob/80 text-ink", dot: "bg-ink/70" },
  Sospesa: { bg: "bg-cream-2 text-body", dot: "bg-body/50" },
};

export function AreaStatusBadge({ status }: { status: AreaStatus }) {
  const s = statusStyle[status];
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-0.5 text-[12px] font-medium ${s.bg}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
      {status}
    </span>
  );
}

export const dealStyle: Record<DealStage, string> = {
  "Primo contatto": "bg-cream-2 text-body",
  "Proposta inviata": "bg-ps/70 text-violet-dark",
  Trattativa: "bg-ob/80 text-ink",
  Vinta: "bg-ac text-ink",
  Persa: "bg-ip/70 text-ink",
};

export function DealBadge({ stage }: { stage: DealStage }) {
  return <span className={`inline-flex whitespace-nowrap rounded-md px-2.5 py-0.5 text-[12px] font-medium ${dealStyle[stage]}`}>{stage}</span>;
}

/** Sigla dell'azienda: tessera scura, per distinguerla dagli avatar delle persone */
export function CompanyMark({ short, className = "" }: { short: string; className?: string }) {
  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-night font-mono text-[11px] font-medium text-white ${className}`} aria-hidden="true">
      {short}
    </span>
  );
}

export const field =
  "mt-1.5 block w-full rounded-lg bg-white px-3.5 py-2.5 text-[15px] font-normal shadow-[0_0_0_1px_rgba(28,26,24,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet";
