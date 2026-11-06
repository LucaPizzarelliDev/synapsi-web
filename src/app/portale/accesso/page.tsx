import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { LoginForm } from "@/components/portal/LoginForm";

export const metadata: Metadata = { title: "Accesso al portale clienti", robots: { index: false, follow: false } };

export default function AccessoPage() {
  return (
    <main id="contenuto" className="grid min-h-screen lg:grid-cols-[1fr_1.1fr]">
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <Logo />
        <div className="mx-auto flex w-full max-w-[380px] flex-1 flex-col justify-center py-12">
          <p className="font-normal text-[12px] uppercase tracking-[0.06em]">Portale clienti</p>
          <h1 className="display mt-2 text-[32px]">Accedi</h1>
          <p className="mb-8 mt-2 text-[15px] leading-relaxed text-body">Report, mappe e stato dei lavori della vostra azienda, in un unico posto.</p>
          <LoginForm />
          <p className="mt-8 bg-paper-2 px-4 py-3 text-[13px] leading-relaxed text-body">
            Ambiente di esempio con dati fittizi: premete <strong className="font-medium text-ink">Accedi</strong> per entrare.
          </p>
        </div>
        <p className="text-[13px] text-body">
          Non avete un accesso? <Link href="/contatti" className="underline underline-offset-4 hover:bg-ob">Contattateci</Link>
        </p>
      </div>
      <div className="hidden flex-col justify-between bg-ink p-12 text-paper lg:flex">
        <p className="font-normal text-[12px] uppercase tracking-[0.06em] text-body-dark">Synapsi Analytics</p>
        <div>
          <p className="display max-w-md text-[40px]">Ogni conclusione rimanda a un fatto. Ogni report porta una firma.</p>
          <ul className="mt-10 grid max-w-md gap-4 text-[15px] text-body-dark">
            <li className="border-t border-rule-dark pt-4">Stato di ogni assessment, dal colloquio alla consegna</li>
            <li className="border-t border-rule-dark pt-4">Scouting Card e check-up organizzativi da scaricare</li>
            <li className="border-t border-rule-dark pt-4">Dati conservati in UE, accessi registrati</li>
          </ul>
        </div>
        <p className="text-[13px] text-body-dark">Via Cesare Guerini 22, Brescia</p>
      </div>
    </main>
  );
}
