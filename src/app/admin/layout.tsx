import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/Shell";
import { fontVariables } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: { default: "Console", template: "%s · Console · Synapsi Analytics" },
  robots: { index: false, follow: false },
};

// La console dello staff Synapsi ha un suo root layout: separata dal sito e dal portale clienti
export default function AdminRootLayout({ children }: LayoutProps<"/admin">) {
  return (
    <html lang="it" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-ob focus:px-4 focus:py-2 focus:font-medium"
        >
          Vai al contenuto
        </a>
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
