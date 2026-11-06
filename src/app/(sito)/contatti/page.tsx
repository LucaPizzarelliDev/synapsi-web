import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container, Display, Mark } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Fissate un primo colloquio con Synapsi Analytics: mezz'ora con uno psicologo per capire se e come possiamo esservi utili.",
};

export default function ContattiPage() {
  return (
    <section>
      <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[13px]">§ Contatti</p>
          <Display as="h1" className="mt-7 text-[clamp(3rem,4.8vw,4.5rem)]">
            Raccontateci <Mark code="OB">un episodio.</Mark>
          </Display>
          <p className="mt-8 max-w-md text-lg leading-relaxed">
            Il primo colloquio dura mezz&apos;ora, è con uno psicologo e non vi impegna a nulla. Serve a capire la vostra domanda e se uno dei nostri
            strumenti è quello giusto.
          </p>
          <dl className="mt-12">
            {[
              ["Email", <a key="e" href={`mailto:${contact.email}`} className="underline underline-offset-4 hover:bg-ob">{contact.email}</a>],
              ["Sede", contact.address],
              ["Riservatezza", "Ciò che ci raccontate resta coperto dal segreto professionale."],
            ].map(([k, v], i) => (
              <div key={i} className="grid grid-cols-[120px_1fr] gap-4 border-t-[1.5px] border-ink py-4 last:border-b-[1.5px]">
                <dt className="font-mono text-[13px] uppercase">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
