import { consciencia, sectionIds } from "@/data/site-content";
import { container, eyebrow } from "./ui";

export function ConscienciaSection() {
  return (
    <section id={sectionIds.consciencia} aria-labelledby="titulo-consciencia" className="py-16 sm:py-24">
      <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
        <div className="lg:col-span-7">
          <p className={`${eyebrow} text-terracota`}>
            <span aria-hidden="true" className="h-0.5 w-10 bg-terracota" />
            Dia da Consciência Negra
          </p>
          <h2
            id="titulo-consciencia"
            className="mt-5 text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-tight"
          >
            {consciencia.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{consciencia.text}</p>
        </div>

        <aside className="relative self-end lg:col-span-5" aria-label="Destaque">
          <div aria-hidden="true" className="halftone absolute -right-3 -top-3 h-24 w-24 text-terracota/40" />
          <div className="relative bg-floresta px-7 py-9 text-areia sm:px-9">
            <span aria-hidden="true" className="mb-5 block h-1 w-16 bg-solar" />
            <p className="font-display text-[clamp(1.9rem,5vw,2.75rem)] uppercase leading-[1.02]">
              {consciencia.callout}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
