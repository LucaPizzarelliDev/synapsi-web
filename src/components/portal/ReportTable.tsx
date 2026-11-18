"use client";

import Link from "next/link";
import { useState } from "react";
import { formatDate, psychologists, reports, type Report } from "@/lib/portal";
import { Icon, icons } from "./icons";
import { DownloadLink, surface } from "./ui";

const kinds = ["Tutti", "Viseria", "Prismia", "Chimeria"] as const;

export function ReportTable() {
  const [kind, setKind] = useState<(typeof kinds)[number]>("Tutti");
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const rows = [...reports]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((r: Report) => (kind === "Tutti" || r.product === kind) && (!q || `${r.title} ${r.subject} ${r.id} ${r.kind}`.toLowerCase().includes(q)));

  return (
    <section className={`overflow-hidden ${surface}`}>
      <div className="flex flex-wrap items-center gap-3 border-b border-line px-5 py-4">
        <label className="relative min-w-[220px] flex-1">
          <span className="sr-only">Cerca nei documenti</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca per nome, ruolo o codice"
            className="h-10 w-full rounded-lg bg-cream px-4 text-[14px] ring-1 ring-inset ring-ink/10 placeholder:text-body/70"
          />
        </label>
        <label className="flex items-center gap-2 text-[14px] text-body">
          Prodotto
          <select value={kind} onChange={(e) => setKind(e.target.value as (typeof kinds)[number])} className="h-10 rounded-xl bg-cream px-3 text-ink ring-1 ring-inset ring-ink/10">
            {kinds.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-[14px]">
          <thead className="text-[12px] font-medium text-body">
            <tr className="border-b border-line">
              <th scope="col" className="px-5 py-3 font-semibold">Documento</th>
              <th scope="col" className="px-3 py-3 font-semibold">Tipo</th>
              <th scope="col" className="px-3 py-3 font-semibold">Data</th>
              <th scope="col" className="px-3 py-3 font-semibold">Firmato da</th>
              <th scope="col" className="px-5 py-3 text-right font-semibold">Azioni</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-cream">
                <td className="px-5 py-3.5">
                  <Link href={`/portal/reports/${r.id}`} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ob text-violet-dark">
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
                  <span className="inline-flex rounded-md bg-lavender px-2.5 py-0.5 text-[12px] font-semibold text-violet-dark">{r.product}</span>
                  <span className="mt-1 block text-[13px] text-body">{r.kind}</span>
                </td>
                <td className="px-3 py-3.5 text-body">{formatDate(r.date)}</td>
                <td className="px-3 py-3.5 text-body">{psychologists[r.signedBy].short}</td>
                <td className="px-5 py-3.5">
                  <span className="flex justify-end gap-1">
                    <Link href={`/portal/reports/${r.id}`} className="inline-flex min-h-9 items-center rounded-lg px-3 text-[14px] font-medium hover:bg-cream-2">
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
