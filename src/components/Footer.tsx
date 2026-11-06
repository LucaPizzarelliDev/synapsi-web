import Link from "next/link";
import { contact, nav, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10">
        <div className="flex flex-col gap-3">
          <Link href="/" className="logotype w-fit text-[34px] hover:text-ob">
            [synapsi]
          </Link>
          <p className="max-w-xs text-[15px] leading-relaxed text-body-dark">
            Psicologi del lavoro e AI. Valutiamo persone, manager e organizzazioni con colloqui, e consegniamo report firmati.
          </p>
        </div>
        <div>
          <h2 className="font-normal text-[12px] uppercase tracking-[0.08em] text-ob">Cosa facciamo</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {[...services, ...nav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ob">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-normal text-[12px] uppercase tracking-[0.08em] text-ob">Contatti</h2>
          <ul className="mt-4 flex flex-col gap-2 text-body-dark">
            <li>
              <a href={`mailto:${contact.email}`} className="text-paper underline underline-offset-4 hover:text-ob">
                {contact.email}
              </a>
            </li>
            <li>{contact.address}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-normal text-[12px] uppercase tracking-[0.08em] text-ob">Garanzie</h2>
          <ul className="mt-4 flex flex-col gap-2 text-body-dark">
            <li>Psicologi iscritti all’Albo</li>
            <li>GDPR · dati in UE</li>
            <li>AI Act · supervisione umana</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule-dark">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-2 px-4 py-6 font-medium text-[12px] text-body-dark sm:flex-row sm:px-6 lg:px-10">
          <span>© Synapsi Analytics</span>
          <span>Brescia, Italia</span>
        </div>
      </div>
    </footer>
  );
}
