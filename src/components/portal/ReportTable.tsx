"use client";

import Link from "next/link";
import { useState } from "react";
import { formatDate, psychologists, reports, type Report } from "@/lib/portal";
import { Icon, icons } from "./icons";
import { DownloadLink } from "./ui";

const kinds = ["Tutti", "Viseria", "Prismia", "Chimeria"] as const;

export function ReportTable() {
  const [kind, setKind] = useState<(typeof kinds)[number]>("Tutti");
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const rows = [...reports]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((r: Report) => (kind === "Tutti" || r.product === kind) && (!q || `${r.title} ${r.subject} ${r.id} ${r.kind}`.toLowerCase().includes(q)));

  return (
    <section className="border-[1.5px] border-ink bg-paper">
      <div className="flex flex-wrap items-center gap-3 border-b-[1.5px] border-ink px-5 py-3">
        <label className="relative min-w-[220px] flex-1">
          <span className="sr-only">Cerca nei documenti</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca per nome, ruolo o codice"
            className="h-9 w-full border-[1.5px] border-ink bg-paper px-3 text-[14px] placeholder:text-body/70"
          />
        </label>
        <label className="flex items-center gap-2 text-[14px] text-body">
          Prodotto
          <select value={kind} onChange={(e) => setKind(e.target.value as (typeof kinds)[number])} className="h-9 border-[1.5px] border-ink bg-paper px-2 text-ink">
            {kinds.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-[14px]">
          <thead className="text-[12px] uppercase tracking-[0.06em] text-body">
            <tr className="border-b-[1.5px] border-ink">
              <th scope="col" className="px-5 py-3 font-medium">Documento</th>
              <th scope="col" className="px-3 py-3 font-medium">Tipo</th>
              <th scope="col" className="px-3 py-3 font-medium">Data</th>
              <th scope="col" className="px-3 py-3 font-medium">Firmato da</th>
              <th scope="col" className="px-5 py-3 text-right font-medium">Azioni</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-paper-2">
                <td className="px-5 py-3.5">
                  <Link href={`/portale/report/${r.id}`} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-ob text-accent">
                      <Icon d={icons.doc} />
                    </span>
                    <span>
                      <span className="block font-medium hover:underline">{r.title}</span>
                      <span className="block text-[13px] text-body">
                        {r.subject} · <span className="font-mono text-[12px]">{r.id}</span> · {r.pages} pp.
                      </span>
                    </span>
                  </Link>
                </td>
                <td className="px-3 py-3.5">
                  <span className="font-normal text-[12px] uppercase">{r.product}</span>
                  <span className="block text-[13px] text-body">{r.kind}</span>
                </td>
                <td className="px-3 py-3.5 text-body">{formatDate(r.date)}</td>
                <td className="px-3 py-3.5 text-body">{psychologists[r.signedBy].short}</td>
                <td className="px-5 py-3.5">
                  <span className="flex justify-end gap-1">
                    <Link href={`/portale/report/${r.id}`} className="inline-flex min-h-9 items-center px-3 text-[14px] font-medium hover:bg-paper-2">
                      Apri
                    </Link>
                    <DownloadLink id={r.id} label="PDF" variant="ghost" />
                  </span>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-body">
                  Nessun documento corrisponde alla ricerca.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
