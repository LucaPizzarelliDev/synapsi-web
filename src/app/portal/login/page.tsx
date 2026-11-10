import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { LoginForm } from "@/components/portal/LoginForm";
import { DotGrid } from "@/components/ui";

export const metadata: Metadata = { title: "Accesso al portale clienti", robots: { index: false, follow: false } };

export default function AccessoPage() {
  return (
    <main id="contenuto" className="grid min-h-screen bg-cream lg:grid-cols-[1fr_1.1fr] lg:gap-4 lg:p-4">
      <div className="flex flex-col px-6 py-8 sm:px-12 lg:py-4">
        <Logo />
        <div className="mx-auto flex w-full max-w-[380px] flex-1 flex-col justify-center py-12">
          <p className="text-[13px] font-medium text-violet">Portale clienti</p>
          <h1 className="display mt-2 text-[clamp(2.25rem,4vw,2.75rem)]">Accedi</h1>
          <p className="mb-8 mt-2 text-[15px] leading-relaxed text-body">Report, mappe e stato dei lavori della vostra azienda, in un unico posto.</p>
          <LoginForm />
          <p className="mt-8 rounded-2xl bg-ob px-4 py-3 text-[13px] leading-relaxed text-ink/80">
            Ambiente di esempio con dati fittizi: premete <strong className="font-medium text-ink">Accedi</strong> per entrare.
          </p>
        </div>
        <p className="text-[13px] text-body">
          Non avete un accesso? <Link href="/contact" className="font-medium text-violet underline underline-offset-4 hover:text-violet-dark">Contattateci</Link>
        </p>
      </div>
      <div className="relative isolate hidden flex-col justify-between overflow-hidden rounded-[28px] bg-night p-12 text-white lg:flex">
        <DotGrid className="text-white/[0.07]" />
        <p className="text-[13px] font-medium text-ob">Synapsi Analytics</p>
        <div>
          <p className="display max-w-md text-balance text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.1]">Ogni conclusione rimanda a un fatto. Ogni report porta una firma.</p>
          {/* Anteprima del portale: come appare un assessment seguito da qui */}
          <div aria-hidden="true" className="relative mt-10 max-w-md">
            <div className="rotate-[-1.5deg] rounded-[20px] bg-white p-5 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ob text-[13px] font-semibold">MB</span>
                <span className="flex-1">
                  <span className="block text-[14px] font-medium">Marco Bellini</span>
                  <span className="block text-[12px] text-body">Capo reparto · Produzione</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ac px-2.5 py-0.5 text-[12px] font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink/70" />
                  Consegnato
                </span>
              </div>
              <div className="mt-4 flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="h-1.5 flex-1 rounded-full bg-violet" />
                ))}
              </div>
              <p className="mt-4 rounded-xl bg-cream px-3.5 py-2.5 text-[13px] leading-snug">Funziona nel ruolo, se il carico viene redistribuito.</p>
            </div>
            <div className="absolute -bottom-5 -right-4 flex rotate-[2deg] items-center gap-2 rounded-full bg-ps px-3.5 py-2 text-[13px] font-medium text-violet-dark shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)]">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="m3.5 8.5 3 3 6-7" />
              </svg>
              Firmato dallo psicologo
            </div>
          </div>
          <ul className="mt-12 flex max-w-md flex-wrap gap-2 text-[13px] text-white/80">
            <li className="rounded-full bg-white/10 px-3 py-1.5">Stato di ogni assessment, dal colloquio alla consegna</li>
            <li className="rounded-full bg-white/10 px-3 py-1.5">Scouting Card e check-up organizzativi da scaricare</li>
            <li className="rounded-full bg-white/10 px-3 py-1.5">Dati conservati in UE, accessi registrati</li>
          </ul>
        </div>
        <p className="text-[13px] text-white/70">Via Cesare Guerini 22, Brescia</p>
      </div>
    </main>
  );
}
