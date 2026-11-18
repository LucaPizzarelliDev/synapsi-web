"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon, icons } from "@/components/portal/icons";
import { surface } from "@/components/portal/ui";
import { canOpenAreas, dealStages, type DealStage } from "@/lib/admin";
import { dealStyle } from "./ui";

/** Fase della trattativa e cancello delle aree: «Apri un'area» si sblocca solo a trattativa vinta */
export function DealPanel({ companyId, initial, hasAreas }: { companyId: string; initial: DealStage; hasAreas: boolean }) {
  const [stage, setStage] = useState(initial);
  const changed = stage !== initial;
  const open = canOpenAreas(stage);

  return (
    <section className={`${surface} p-5`}>
      <h2 className="text-[15px] font-semibold">Trattativa</h2>
      <div className="mt-4 flex flex-wrap gap-1.5" role="radiogroup" aria-label="Fase della trattativa">
        {dealStages.map((s) => (
          <button
            key={s}
            type="button"
            role="radio"
            aria-checked={stage === s}
            onClick={() => setStage(s)}
            className={`min-h-9 rounded-lg px-3.5 text-[13px] font-medium transition-colors ${stage === s ? dealStyle[s] + " ring-2 ring-ink/15" : "bg-cream text-body hover:bg-cream-2"}`}
          >
            {s}
          </button>
        ))}
      </div>
      {changed && <p className="mt-3 rounded-xl bg-ob/60 px-3 py-2 text-[13px]">Ambiente di esempio: il cambio di fase non viene salvato.</p>}

      <div className="mt-5 rounded-2xl bg-cream p-4">
        {open ? (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[14px]">{hasAreas ? "Cliente attivo: puoi aprire altre aree nel portale." : "Trattativa vinta: apri la prima area nel portale."}</p>
            <Link
              href={`/admin/areas/new?company=${companyId}`}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-violet px-4 text-[14px] font-medium text-white transition-colors hover:bg-violet-dark"
            >
              <Icon d={icons.plus} className="h-4 w-4" />
              Apri un&apos;area
            </Link>
          </div>
        ) : (
          <p className="flex items-start gap-2.5 text-[14px] text-body">
            <Icon d={icons.lock} className="mt-0.5 h-4 w-4 shrink-0" />
            {stage === "Persa" ? "Trattativa persa: nessuna area da aprire." : "Le aree nel portale si aprono quando la trattativa è vinta."}
          </p>
        )}
      </div>
    </section>
  );
}
