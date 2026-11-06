import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function SitoLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main id="contenuto" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
