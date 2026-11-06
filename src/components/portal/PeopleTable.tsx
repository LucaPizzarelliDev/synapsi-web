"use client";

import Link from "next/link";
import { useState } from "react";
import { assessments, formatDate, psychologists, reports } from "@/lib/portal";
import { DownloadLink, Initials, StageBadge, StageTrack } from "./ui";

const filters = ["Tutti", "In corso", "Consegnati"] as const;

export function PeopleTable() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tutti");
  const rows = assessments.filter((a) =>
    filter === "Tutti" ? true : filter === "Consegnati" ? a.stage === "Consegnato" : a.stage !== "Consegnato",
  );

  return (
    <section className="border-[1.5px] border-ink bg-paper">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-[1.5px] border-ink px-5 py-3">
        <div role="tablist" aria-label="Filtra assessment" className="flex gap-1 border-[1.5px] border-ink p-1">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              type="button"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-8 px-3 text-[14px] transition-colors ${filter === f ? "bg-ink font-medium text-paper" : "text-body hover:text-ink"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="text-[13px] text-body">{rows.length} persone</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-[14px]">
          <thead className="text-[12px] uppercase tracking-[0.06em] text-body">
            <tr className="border-b-[1.5px] border-ink">
              <th scope="col" className="px-5 py-3 font-medium">Persona</th>
              <th scope="col" className="px-3 py-3 font-medium">Stato</th>
              <th scope="col" className="w-[180px] px-3 py-3 font-medium">Avanzamento</th>
              <th scope="col" className="px-3 py-3 font-medium">Psicologo</th>
              <th scope="col" className="px-3 py-3 font-medium">Avvio</th>
              <th scope="col" className="px-5 py-3 text-right font-medium">Report</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((a) => {
              const report = reports.find((r) => r.assessmentId === a.id);
              return (
                <tr key={a.id} className="hover:bg-paper-2">
                  <td className="px-5 py-3.5">
                    <Link href={`/portale/persone/${a.id}`} className="flex items-center gap-3">
                      <Initials name={a.name} />
                      <span>
                        <span className="block font-medium hover:underline">{a.name}</span>
                        <span className="block text-[13px] text-body">
                          {a.role} · {a.department}
                        </span>
                      </span>
                    </Link>
                  </td>
                  <td className="px-3 py-3.5">
                    <StageBadge stage={a.stage} />
                  </td>
                  <td className="px-3 py-3.5">
                    <StageTrack stage={a.stage} />
                  </td>
                  <td className="px-3 py-3.5 text-body">{psychologists[a.psychologist].short}</td>
                  <td className="px-3 py-3.5 text-body">{formatDate(a.started)}</td>
                  <td className="px-5 py-3.5 text-right">
                    {report ? <DownloadLink id={report.id} label="PDF" variant="ghost" /> : <span className="text-[13px] text-body">Non ancora</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
