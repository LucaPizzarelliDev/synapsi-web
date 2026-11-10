import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pagina non trovata · Page not found",
  robots: { index: false },
};

// Indirizzi che non corrispondono a nessuna pagina: non sappiamo la lingua, quindi le mostriamo entrambe
export default function GlobalNotFound() {
  return (
    <html lang="it" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col">
        <main className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-center gap-12 px-4 py-24 sm:px-8">
          <Logo />
          <div>
            <p className="text-[14px] font-medium text-violet">Errore 404</p>
            <h1 className="display mt-5 text-[clamp(2.5rem,5vw,4.5rem)]">
              Questa pagina <span className="marker bg-ip">non è nel trascritto.</span>
            </h1>
            <Link href="/" className="mt-7 inline-flex min-h-11 items-center rounded-2xl bg-violet px-5 font-medium text-white hover:bg-violet-dark">
              Torna alla home
            </Link>
          </div>
          <div lang="en" className="rounded-[24px] bg-white p-8">
            <p className="text-[14px] font-medium text-violet">Error 404</p>
            <p className="display mt-5 text-[clamp(1.75rem,3vw,2.5rem)]">
              This page <span className="marker bg-ip">isn&apos;t in the transcript.</span>
            </p>
            <Link href="/en" className="mt-7 inline-flex min-h-11 items-center rounded-2xl bg-violet px-5 font-medium text-white hover:bg-violet-dark">
              Back to the home page
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
