import { CollectionsSection } from "@/components/CollectionsSection";
import { ConscienciaSection } from "@/components/ConscienciaSection";
import { FilmsSection } from "@/components/FilmsSection";
import { Hero } from "@/components/Hero";
import { LibrarySection } from "@/components/LibrarySection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { nav, site } from "@/data/site-content";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 bg-solar px-4 py-3 font-bold text-carvao focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader nav={nav} org={site.org} campus={site.campus} />
      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <ConscienciaSection />
        <FilmsSection />
        <LibrarySection />
        <CollectionsSection />
      </main>
      <SiteFooter />
    </>
  );
}
