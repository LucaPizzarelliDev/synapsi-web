import { Button, Container, Display, Mark, Section } from "@/components/ui";
import { shared } from "@/content/shared";
import { localize } from "@/lib/i18n";
import { getLang } from "@/lib/locale";

export default async function NotFound() {
  const lang = await getLang();
  const t = shared[lang].notFound;
  return (
    <section>
      <Container className="py-24 sm:py-36">
        <Section>{t.label}</Section>
        <Display as="h1" className="mt-5 text-[clamp(3rem,5.4vw,5rem)]">
          {t.before} <Mark code="IP">{t.mark}</Mark>
        </Display>
        <div className="mt-10">
          <Button href={localize(lang, "/")}>{t.button}</Button>
        </div>
      </Container>
    </section>
  );
}
