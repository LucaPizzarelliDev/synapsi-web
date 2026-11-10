"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

// Ambiente di esempio: l'accesso porta direttamente al portale, senza verifica.
export function LoginForm() {
  const router = useRouter();
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    router.push("/portal");
  }
  const field = "h-12 w-full rounded-xl bg-white px-4 text-[15px] ring-1 ring-inset ring-ink/15 transition-shadow placeholder:text-body/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet";
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-[14px] font-medium">
          Email aziendale
        </label>
        <input id="email" type="email" autoComplete="email" defaultValue="c.venturi@esempio.it" className={field} />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between">
          <label htmlFor="password" className="text-[14px] font-medium">
            Password
          </label>
          <span className="text-[13px] text-violet underline underline-offset-4">Password dimenticata?</span>
        </div>
        <input id="password" type="password" autoComplete="current-password" defaultValue="esempio-portale" className={field} />
      </div>
      <button type="submit" className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-violet text-[15px] font-medium text-white transition-colors hover:bg-violet-dark">
        Accedi
      </button>
      <p className="text-center text-[13px] text-body">Dopo la password vi chiederemo un codice inviato via email.</p>
    </form>
  );
}
