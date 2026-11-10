import type { Metadata } from "next";
import { fontVariables } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: { default: "Portale clienti · Synapsi Analytics", template: "%s · Synapsi Analytics" },
  robots: { index: false, follow: false },
};

// Il portale ha un suo root layout: è solo in italiano e non usa header e footer del sito
export default function PortalRootLayout({ children }: LayoutProps<"/portal">) {
  return (
    <html lang="it" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-ob focus:px-4 focus:py-2 focus:font-medium"
        >
          Vai al contenuto
        </a>
        {children}
      </body>
    </html>
  );
}
