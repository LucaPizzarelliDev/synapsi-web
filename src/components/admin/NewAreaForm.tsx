"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { Icon, icons } from "@/components/portal/icons";
import { surface } from "@/components/portal/ui";
import { field } from "./ui";
import { BrandMark } from "@/components/ui";
import { canOpenAreas, companies, productBg, products, type Product } from "@/lib/admin";
import { psychologists } from "@/lib/portal";


function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <fieldset className={`${surface} p-5 sm:p-6`}>
      <legend className="float-left mb-4 flex w-full items-center gap-3 text-[15px] font-semibold">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-night text-[13px] text-white">{n}</span>
        {title}
      </legend>
      <div className="clear-both">{children}</div>
    </fieldset>
  );
}

// Si possono aprire aree solo per le aziende con la trattativa vinta
const clients = companies.filter((c) => canOpenAreas(c.deal.stage));

export function NewAreaForm() {
  const preset = useSearchParams().get("company");
  const presetClient = clients.find((c) => c.id === preset);
  const [clientId, setClientId] = useState(presetClient?.id ?? clients[0].id);
  const [name, setName] = useState("");
  const [chosen, setChosen] = useState<Product[]>(presetClient?.deal.interest ?? ["Viseria"]);
  const [referent, setReferent] = useState<keyof typeof psychologists>("gilli");
  const [done, setDone] = useState(false);

  const clientName = clients.find((c) => c.id === clientId)!.name;
  const toggle = (p: Product) => setChosen((v) => (v.includes(p) ? v.filter((x) => x !== p) : [...v, p]));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <div className={`${surface} p-6 sm:p-8`} role="status">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ac">
          <Icon d={icons.check} />
        </span>
        <h2 className="display mt-4 text-[28px]">Area «{name}» pronta</h2>
        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-body">
          {clientName} · {chosen.join(", ")} · referente {psychologists[referent].name}. Il passo successivo è aggiungere gli utenti dell&apos;area, ognuno con il suo ruolo.
        </p>
        <p className="mt-4 max-w-xl rounded-2xl bg-ob/60 px-4 py-3 text-[14px]">
          Ambiente di esempio: l&apos;area non viene salvata finché non colleghiamo il database.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" onClick={() => setDone(false)} className="inline-flex min-h-10 items-center rounded-lg bg-white px-4 text-[14px] font-medium shadow-[0_0_0_1px_rgba(28,26,24,0.1)] hover:bg-cream">
            Crea un&apos;altra area
          </button>
          <Link href="/admin/areas" className="inline-flex min-h-10 items-center rounded-lg bg-violet px-4 text-[14px] font-medium text-white hover:bg-violet-dark">
            Torna alle aree
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid items-start gap-6 xl:grid-cols-[1.4fr_1fr]">
      <div className="flex flex-col gap-4">
        <Step n={1} title="Azienda">
          <label className="block text-[14px] font-medium">
            Azienda
            <select value={clientId} onChange={(e) => setClientId(e.target.value)} className={field}>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <span className="mt-1.5 block text-[13px] font-normal text-body">Solo aziende con la trattativa vinta.</span>
          </label>
          <label className="mt-4 block text-[14px] font-medium">
            Nome dell&apos;area
            <input required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Es. Stabilimento di Brescia" />
            <span className="mt-1.5 block text-[13px] font-normal text-body">Serve se il cliente ha più sedi, società o reti. Altrimenti usa il nome dell&apos;azienda.</span>
          </label>
        </Step>

        <Step n={2} title="Prodotti attivi">
          <div className="grid gap-2 sm:grid-cols-2">
            {products.map((p) => {
              const on = chosen.includes(p);
              return (
                <label key={p} className={`flex cursor-pointer items-center gap-3 rounded-2xl p-3.5 text-[14px] font-medium transition-colors ${on ? productBg[p] : "bg-cream hover:bg-cream-2"}`}>
                  <input type="checkbox" checked={on} onChange={() => toggle(p)} className="h-4 w-4 accent-violet" />
                  {p}
                </label>
              );
            })}
          </div>
          {chosen.length === 0 && <p className="mt-3 text-[13px] text-body">Scegli almeno un prodotto.</p>}
        </Step>

        <Step n={3} title="Psicologo referente">
          <div className="grid gap-2 sm:grid-cols-2">
            {(Object.keys(psychologists) as (keyof typeof psychologists)[]).map((k) => (
              <label key={k} className={`flex cursor-pointer items-center gap-3 rounded-2xl p-3.5 text-[14px] transition-colors ${referent === k ? "bg-lavender font-medium text-violet-dark" : "bg-cream hover:bg-cream-2"}`}>
                <input type="radio" name="referent" checked={referent === k} onChange={() => setReferent(k)} className="h-4 w-4 accent-violet" />
                {psychologists[k].name}
              </label>
            ))}
          </div>
        </Step>


        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={chosen.length === 0}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-violet px-5 text-[15px] font-medium text-white transition-colors hover:bg-violet-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icon d={icons.plus} className="h-4 w-4" />
            Crea area
          </button>
          <Link href="/admin/areas" className="inline-flex min-h-11 items-center rounded-lg px-4 text-[15px] text-body hover:bg-white">
            Annulla
          </Link>
        </div>
      </div>

      {/* Anteprima: come il cliente vedrà la sua area nel portale */}
      <aside className="xl:sticky xl:top-20">
        <p className="pb-3 text-[13px] font-medium text-body">Cosa vedrà il cliente</p>
        <div className="overflow-hidden rounded-2xl bg-cream-2/70 shadow-[0_0_0_1px_rgba(28,26,24,0.06)]">
          <div className="flex items-center gap-2 px-4 py-3">
            <BrandMark className="h-5 w-5" />
            <span className="logotype text-[15px]">synapsi</span>
            <span className="ml-auto rounded-md bg-white px-2 py-0.5 text-[11px] text-body">Portale</span>
          </div>
          <div className="mx-3 mb-3 rounded-2xl bg-white p-3 shadow-[0_1px_2px_rgba(28,26,24,0.06)]">
            <p className="truncate text-[14px] font-medium">{clientName}</p>
            <p className="truncate text-[12px] text-body">{name || "Nome dell'area"}</p>
          </div>
          <ul className="flex flex-col gap-0.5 px-3 pb-3 text-[13px]">
            <li className="rounded-lg bg-white px-3 py-2 font-medium">Panoramica</li>
            {chosen.map((p) => (
              <li key={p} className="flex items-center gap-2 px-3 py-2 text-body">
                <span className={`h-2 w-2 rounded-full ${productBg[p]}`} aria-hidden="true" />
                {p}
              </li>
            ))}
            <li className="px-3 py-2 text-body">Report e documenti</li>
          </ul>
          <div className="border-t border-line/70 bg-white/60 px-4 py-3 text-[12px] text-body">
            Referente: <span className="font-medium text-ink">{psychologists[referent].name}</span>
          </div>
        </div>
      </aside>
    </form>
  );
}
