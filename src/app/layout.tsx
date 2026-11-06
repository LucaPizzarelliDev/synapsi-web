import type { Metadata } from "next";
import { Hanken_Grotesk, Schibsted_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const spline = Spline_Sans_Mono({
  variable: "--font-spline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Synapsi Analytics. Ascoltiamo episodi, restituiamo evidenze.",
    template: "%s · Synapsi Analytics",
  },
  description:
    "Assessment individuale e diagnosi organizzativa basati su colloqui condotti da psicologi, con l'intelligenza artificiale a supporto della trascrizione e della codifica. Viseria, Prismia, Chimeria, Iridium.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${schibsted.variable} ${hanken.variable} ${spline.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ob focus:px-4 focus:py-2 focus:font-medium"
        >
          Vai al contenuto
        </a>
        {children}
      </body>
    </html>
  );
}
