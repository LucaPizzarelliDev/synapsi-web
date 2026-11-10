"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Icon, icons } from "@/components/portal/icons";
import { surface } from "@/components/portal/ui";
import { dealStages, productBg, products, type DealStage, type Product } from "@/lib/admin";
import { dealStyle, field } from "./ui";

// Una nuova azienda non può nascere già «persa»: si parte da una delle fasi aperte o da una trattativa già chiusa
const startStages = dealStages.filter((s) => s !== "Persa");

export function NewCompanyForm() {
  const [name, setName] = useState("");
  const [stage, setStage] = useState<DealStage>("Primo contatto");
  const [interest, setInterest] = useState<Product[]>([]);
  const [done, setDone] = useState(false);
  const toggle = (p: Product) => setInterest((v) => (v.includes(p) ? v.filter((x) => x !== p) : [...v, p]));

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
        <h2 className="display mt-4 text-[28px]">{name} aggiunta</h2>
        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-body">
          Trattativa in fase «{stage}».{" "}
          {stage === "Vinta" ? "Dalla scheda dell'azienda puoi già aprire la prima area nel portale." : "Quando la trattativa sarà vinta potrai aprire le aree nel portale."}
        </p>
        <p className="mt-4 max-w-xl rounded-2xl bg-ob/60 px-4 py-3 text-[14px]">Ambiente di esempio: l&apos;azienda non viene salvata finché non colleghiamo il database.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" onClick={() => setDone(false)} className="inline-flex min-h-10 items-center rounded-xl bg-white px-4 text-[14px] font-medium shadow-[0_0_0_1px_rgba(28,26,24,0.1)] hover:bg-cream">
            Aggiungi un&apos;altra azienda
          </button>
          <Link href="/admin/companies" className="inline-flex min-h-10 items-center rounded-xl bg-violet px-4 text-[14px] font-medium text-white hover:bg-violet-dark">
            Torna alle aziende
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex max-w-3xl flex-col gap-4">
      <fieldset className={`${surface} p-5 sm:p-6`}>
        <legend className="float-left w-full pb-4 text-[15px] font-semibold">Azienda</legend>
        <div className="clear-both" />
        <div className="grid gap-4 sm:grid-cols-[1fr_120px]">
          <label className="block text-[14px] font-medium">
            Ragione sociale
            <input required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Es. Rossi Impianti S.r.l." />
          </label>
          <label className="block text-[14px] font-medium">
            Sigla
            <input required maxLength={4} className={`${field} uppercase`} placeholder="RIS" />
          </label>
        </div>
        <label className="mt-4 block text-[14px] font-medium">
          Settore e dimensione
          <input className={field} placeholder="Es. Impiantistica · 120 dipendenti" />
        </label>
      </fieldset>

      <fieldset className={`${surface} p-5 sm:p-6`}>
        <legend className="float-left w-full pb-4 text-[15px] font-semibold">Contatto in azienda</legend>
        <div className="clear-both" />
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-[14px] font-medium">
            Nome e cognome
            <input required className={field} autoComplete="off" />
          </label>
          <label className="block text-[14px] font-medium">
            Ruolo
            <input className={field} placeholder="Es. Direttrice HR" />
          </label>
          <label className="block text-[14px] font-medium sm:col-span-2">
            Email
            <input required type="email" className={field} autoComplete="off" />
          </label>
        </div>
        <p className="mt-3 text-[13px] text-body">È il contatto commerciale, non un utente del portale: gli utenti si creano dentro ogni area.</p>
      </fieldset>

      <fieldset className={`${surface} p-5 sm:p-6`}>
        <legend className="float-left w-full pb-4 text-[15px] font-semibold">Trattativa</legend>
        <div className="clear-both" />
        <p className="text-[14px] font-medium">Fase</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {startStages.map((s) => (
            <label key={s} className={`inline-flex min-h-9 cursor-pointer items-center rounded-full px-3.5 text-[13px] font-medium transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-violet ${stage === s ? dealStyle[s] + " ring-2 ring-ink/15" : "bg-cream text-body hover:bg-cream-2"}`}>
              <input type="radio" name="stage" checked={stage === s} onChange={() => setStage(s)} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
        <p className="mt-5 text-[14px] font-medium">Prodotti di interesse</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {products.map((p) => {
            const on = interest.includes(p);
            return (
              <label key={p} className={`inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-full px-3.5 text-[13px] font-medium transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-violet ${on ? productBg[p] : "bg-cream text-body hover:bg-cream-2"}`}>
                <input type="checkbox" checked={on} onChange={() => toggle(p)} className="sr-only" />
                {on && <Icon d={icons.check} className="h-3.5 w-3.5" />}
                {p}
              </label>
            );
          })}
        </div>
        <label className="mt-5 block text-[14px] font-medium">
          Note
          <textarea rows={3} className={field} placeholder="Cosa chiedono, prossimo passo, scadenze" />
        </label>
      </fieldset>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-violet px-5 text-[15px] font-medium text-white transition-colors hover:bg-violet-dark">
          <Icon d={icons.plus} className="h-4 w-4" />
          Crea azienda
        </button>
        <Link href="/admin/companies" className="inline-flex min-h-11 items-center rounded-xl px-4 text-[15px] text-body hover:bg-white">
          Annulla
        </Link>
      </div>
    </form>
  );
}
