import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button, Container, Display, Mark } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="contenuto" className="flex-1">
        <section>
          <Container className="py-24 sm:py-36">
            <p className="font-mono text-[13px]">Errore 404</p>
            <Display as="h1" className="mt-7 text-[clamp(3rem,5.4vw,5rem)]">
              Questa pagina <Mark code="IP">non è nel trascritto.</Mark>
            </Display>
            <div className="mt-10">
              <Button href="/">Torna alla home →</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
