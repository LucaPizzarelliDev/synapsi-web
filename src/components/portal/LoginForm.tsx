"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

// Ambiente di esempio: l'accesso porta direttamente al portale, senza verifica.
export function LoginForm() {
  const router = useRouter();
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    router.push("/portale");
  }
  const field = "h-11 w-full border-[1.5px] border-ink bg-paper px-3.5 text-[15px] placeholder:text-body/70";
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
          <span className="text-[13px] underline underline-offset-4">Password dimenticata?</span>
        </div>
        <input id="password" type="password" autoComplete="current-password" defaultValue="esempio-portale" className={field} />
      </div>
      <button type="submit" className="mt-2 inline-flex h-11 items-center justify-center bg-primary text-[15px] font-medium text-paper transition-colors hover:bg-primary-dark">
        Accedi
      </button>
      <p className="text-center text-[13px] text-body">Dopo la password vi chiederemo un codice inviato via email.</p>
    </form>
  );
}
