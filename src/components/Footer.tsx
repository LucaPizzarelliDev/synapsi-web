import Link from "next/link";
import { Logo } from "./Logo";
import { shared } from "@/content/shared";
import { localize, type Locale } from "@/lib/i18n";
import { contact } from "@/lib/site";

export function Footer({ lang }: { lang: Locale }) {
  const { footer, services, nav, header } = shared[lang];
  return (
    <footer className="bg-night text-white/80">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo href={localize(lang, "/")} light />
          <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed">{footer.claim}</p>
        </div>
        <FooterList title={footer.services} items={services.map((s) => ({ href: localize(lang, s.href), label: s.label }))} />
        <FooterList
          title={footer.explore}
          items={[...nav.map((n) => ({ href: localize(lang, n.href), label: n.label })), { href: "/portal/login", label: header.clientArea }]}
        />
        <div>
          <h2 className="text-[14px] font-medium text-white">{footer.contacts}</h2>
          <address className="mt-4 space-y-2 text-[15px] not-italic">
            <p>
              <a href={`mailto:${contact.email}`} className="text-white underline underline-offset-4 hover:text-ob">
                {contact.email}
              </a>
            </p>
            <p>{contact.address}</p>
            <p>{footer.place}</p>
          </address>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-4 border-t border-white/15 px-4 py-6 text-[13px] sm:px-8">
        <ul aria-label={footer.guarantees} className="flex flex-wrap gap-2">
          {footer.guaranteeItems.map((g) => (
            <li key={g} className="rounded-full bg-white/10 px-3 py-1">
              {g}
            </li>
          ))}
        </ul>
        <p>© Synapsi Analytics</p>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-[14px] font-medium text-white">{title}</h2>
      <ul className="mt-4 space-y-2 text-[15px]">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="hover:text-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
