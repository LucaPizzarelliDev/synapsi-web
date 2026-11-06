"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/site";

const areas = ["Una persona nel ruolo (Viseria)", "Un manager (Prismia)", "L'organizzazione (Chimeria)", "Una rete commerciale (Iridium)", "Una società sportiva", "Non lo so ancora"];

const field = "frame w-full bg-paper px-4 py-3.5 text-base placeholder:text-body/70";
const label = "font-normal text-[12px] uppercase tracking-[0.06em]";

// Finché non c'è un servizio di invio, il modulo prepara una email nel client di posta dell'utente.
export function ContactForm() {
  const [area, setArea] = useState(areas[0]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Primo colloquio: ${data.get("org") || data.get("name")}`;
    const body = [
      `Nome: ${data.get("name")}`,
      `Organizzazione: ${data.get("org")}`,
      `Email: ${data.get("email")}`,
      `Ambito: ${area}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="frame bg-paper">
      <div className="flex justify-between gap-3 border-b-[1.5px] border-ink px-5 py-3 font-normal text-[12px] uppercase tracking-[0.06em]">
        <span>Modulo · primo colloquio</span>
        <span>30 min</span>
      </div>
      <div className="grid gap-6 p-5 sm:grid-cols-2 sm:p-7">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={label}>
            Nome e cognome
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="org" className={label}>
            Azienda o club
          </label>
          <input id="org" name="org" autoComplete="organization" className={field} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={label}>Di cosa volete parlare</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {areas.map((a) => (
              <label key={a} className={`frame flex min-h-11 cursor-pointer items-center px-3.5 text-[15px] ${area === a ? "bg-ob" : "hover:bg-ob"}`}>
                <input type="radio" name="area" value={a} checked={area === a} onChange={() => setArea(a)} className="sr-only" />
                {a}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className={label}>
            Cosa sta succedendo?
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Un episodio recente, anche breve, ci aiuta più di una descrizione generale."
            className={field}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t-[1.5px] border-ink p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p className="max-w-sm text-sm text-body">Il modulo apre il vostro programma di posta con il messaggio già compilato.</p>
        <button type="submit" className="inline-flex min-h-13 items-center gap-2.5 bg-primary px-6 font-medium text-paper transition-colors hover:bg-primary-dark">
          Invia la richiesta <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
