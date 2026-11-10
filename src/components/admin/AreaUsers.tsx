"use client";

import { useState, type FormEvent } from "react";
import { Icon, icons } from "@/components/portal/icons";
import { Initials, surface } from "@/components/portal/ui";
import { areaRoles, type AreaRole, type AreaUser } from "@/lib/admin";
import { field } from "./ui";

/** Utenti dell'area: si creano qui e il ruolo vale solo per questa area */
export function AreaUsers({ areaName, initial, suspended }: { areaName: string; initial: AreaUser[]; suspended: boolean }) {
  const [list, setList] = useState(initial);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState<{ name: string; email: string; role: AreaRole }>({ name: "", email: "", role: initial.length ? "HR · report persone" : "Amministratore" });
  const added = list.length - initial.length;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setList((v) => [...v, { ...draft, last: "Mai" }]);
    setDraft({ name: "", email: "", role: "HR · report persone" });
    setAdding(false);
  };

  return (
    <section className={`overflow-hidden ${surface}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 pb-1 pt-4">
        <h2 className="text-[15px] font-semibold">Utenti di «{areaName}»</h2>
        {!suspended && !adding && (
          <button
            type="button"
            onClick={() => setAdding(true)}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-xl bg-violet px-3.5 text-[14px] font-medium text-white transition-colors hover:bg-violet-dark"
          >
            <Icon d={icons.plus} className="h-4 w-4" />
            Aggiungi utente
          </button>
        )}
      </div>

      {adding && (
        <form onSubmit={submit} className="mx-5 mt-3 rounded-2xl bg-cream p-4">
          <div className="grid gap-3 md:grid-cols-[1fr_1fr_220px]">
            <label className="block text-[13px] font-medium">
              Nome e cognome
              <input required autoFocus value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} className={field} autoComplete="off" />
            </label>
            <label className="block text-[13px] font-medium">
              Email aziendale
              <input required type="email" value={draft.email} onChange={(e) => setDraft({ ...draft, email: e.target.value })} className={field} autoComplete="off" />
            </label>
            <label className="block text-[13px] font-medium">
              Ruolo in quest&apos;area
              <select value={draft.role} onChange={(e) => setDraft({ ...draft, role: e.target.value as AreaRole })} className={field}>
                {areaRoles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button type="submit" className="inline-flex min-h-9 items-center rounded-xl bg-violet px-3.5 text-[14px] font-medium text-white hover:bg-violet-dark">
              Crea utente e invia invito
            </button>
            <button type="button" onClick={() => setAdding(false)} className="inline-flex min-h-9 items-center rounded-xl px-3.5 text-[14px] text-body hover:bg-white">
              Annulla
            </button>
          </div>
        </form>
      )}

      {list.length ? (
        <ul className="mt-2 divide-y divide-line">
          {list.map((u) => (
            <li key={u.email} className="flex flex-wrap items-center gap-3 px-5 py-3.5">
              <Initials name={u.name} />
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-medium">{u.name}</p>
                <p className="truncate text-[13px] text-body">{u.email}</p>
              </div>
              <span className="rounded-full bg-lavender px-2.5 py-0.5 text-[12px] font-semibold text-violet-dark">{u.role}</span>
              <span className={`w-28 text-right text-[12px] ${u.last === "Mai" ? "font-medium text-ink" : "text-body"}`}>{u.last === "Mai" ? "Invito inviato" : u.last}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-5 pb-5 pt-3 text-[14px] text-body">Nessun utente. Il primo di solito è l&apos;amministratore del cliente.</p>
      )}

      {added > 0 && <p className="border-t border-line bg-ob/40 px-5 py-3 text-[13px]">Ambiente di esempio: i nuovi utenti non vengono salvati e nessun invito parte.</p>}
      {suspended && <p className="border-t border-line px-5 py-3 text-[13px] text-body">Area sospesa: nessun utente può accedere e non se ne possono aggiungere.</p>}
    </section>
  );
}
