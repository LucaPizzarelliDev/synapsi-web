import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { shared } from "@/content/shared";
import { locales } from "@/lib/i18n";
import { getLang } from "@/lib/locale";
import { fontVariables } from "../fonts";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = shared[await getLang()];
  return {
    metadataBase: new URL("https://synapsi-web.vercel.app"),
    title: { default: meta.title, template: "%s · Synapsi Analytics" },
    description: meta.description,
  };
}

export default async function SiteLayout({ children }: LayoutProps<"/[lang]">) {
  const lang = await getLang();
  const t = shared[lang];
  return (
    <html lang={lang} className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-ob focus:px-4 focus:py-2 focus:font-medium"
        >
          {t.skipLink}
        </a>
        <Header lang={lang} t={{ header: t.header, services: t.services, nav: t.nav }} />
        <main id="contenuto" className="flex-1">
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
