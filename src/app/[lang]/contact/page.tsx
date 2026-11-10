import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container, Display, Mark, Section } from "@/components/ui";
import { contatti } from "@/content/contatti";
import { contact } from "@/lib/site";
import { getLang, pageMetadata } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return pageMetadata(lang, "/contact", contatti[lang].meta);
}

export default async function ContattiPage() {
  const lang = await getLang();
  const t = contatti[lang];
  return (
    <section>
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div>
          <Section>{t.label}</Section>
          <Display as="h1" className="mt-5 text-[clamp(2.75rem,4.8vw,4.5rem)]">
            {t.title.before}
            <Mark code="OB">{t.title.mark}</Mark>
          </Display>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-body">{t.lead}</p>
          <dl className="mt-10 grid gap-3">
            {[
              [
                t.details.email,
                <a key="e" href={`mailto:${contact.email}`} className="font-medium text-violet underline underline-offset-4 hover:text-violet-dark">
                  {contact.email}
                </a>,
                "bg-white",
              ],
              [t.details.address, contact.address, "bg-cream-2"],
              [t.details.privacy, t.details.privacyText, "bg-ac"],
            ].map(([k, v, bg], i) => (
              <div key={i} className={`rounded-[20px] px-5 py-4 ${bg}`}>
                <dt className="text-[14px] font-medium text-ink/70">{k}</dt>
                <dd className="mt-1.5 leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ContactForm t={t.form} />
      </Container>
    </section>
  );
}
