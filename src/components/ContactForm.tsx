"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "@/components/ui";
import type { ContattiContent } from "@/content/contatti";
import { contact } from "@/lib/site";

const field =
  "w-full rounded-xl bg-white px-4 py-3.5 text-base ring-1 ring-ink/15 transition-shadow placeholder:text-body/70 hover:ring-ink/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet";
const label = "text-[14px] font-medium text-ink/70";

// Finché non c'è un servizio di invio, il modulo prepara una email nel client di posta dell'utente.
export function ContactForm({ t }: { t: ContattiContent["form"] }) {
  const areas = t.areas;
  const [area, setArea] = useState(areas[0]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `${t.mail.subject} ${data.get("org") || data.get("name")}`;
    const body = [
      `${t.mail.name} ${data.get("name")}`,
      `${t.mail.org} ${data.get("org")}`,
      `${t.mail.email} ${data.get("email")}`,
      `${t.mail.area} ${area}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[20px] bg-cream-2 p-2 sm:p-3">
      <div className="flex justify-between gap-3 px-4 pb-3 pt-3 text-[14px] font-medium text-body sm:px-5">
        <span>{t.header}</span>
        <span className="rounded-full bg-white px-2.5 py-0.5 normal-case tracking-normal text-ink">{t.duration}</span>
      </div>
      <div className="rounded-[22px] bg-white/60 p-5 sm:p-7">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={label}>
              {t.name}
            </label>
            <input id="name" name="name" required autoComplete="name" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="org" className={label}>
              {t.org}
            </label>
            <input id="org" name="org" autoComplete="organization" className={field} />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="email" className={label}>
              {t.email}
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" className={field} />
          </div>

          <fieldset className="sm:col-span-2">
            <legend className={label}>{t.areasLegend}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {areas.map((a) => (
                <label
                  key={a}
                  className={`flex min-h-11 cursor-pointer items-center rounded-lg px-4 text-[15px] transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-violet ${
                    area === a ? "bg-violet text-white" : "bg-white ring-1 ring-ink/15 hover:bg-lavender"
                  }`}
                >
                  <input type="radio" name="area" value={a} checked={area === a} onChange={() => setArea(a)} className="sr-only" />
                  {a}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="message" className={label}>
              {t.message}
            </label>
            <textarea id="message" name="message" rows={6} required placeholder={t.messagePlaceholder} className={`${field} rounded-2xl`} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <p className="max-w-sm text-sm text-body">{t.help}</p>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-violet px-6 font-medium text-white transition-colors hover:bg-violet-dark"
        >
          {t.submit}
          <Arrow className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
