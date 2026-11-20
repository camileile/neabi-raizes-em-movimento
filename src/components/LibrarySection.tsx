import Image from "next/image";
import { authors, biblioteca, sectionIds } from "@/data/site-content";
import { AuthorList } from "./AuthorList";
import { container, eyebrow } from "./ui";

export function LibrarySection() {
  return (
    <section id={sectionIds.biblioteca} aria-labelledby="titulo-biblioteca">
      <div className="relative overflow-hidden bg-terracota text-areia">
        <div className={`${container} grid gap-10 py-16 sm:py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-14`}>
          <div>
            <p className={`${eyebrow} text-areia`}>
              <span aria-hidden="true" className="h-0.5 w-10 bg-solar" />
              Exposição na biblioteca
            </p>
            <h2
              id="titulo-biblioteca"
              className="mt-5 font-display text-[clamp(3rem,11vw,6rem)] uppercase leading-[0.92]"
            >
              {biblioteca.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{biblioteca.text}</p>
            <p className="mt-8 max-w-xl border-l-4 border-solar pl-5 text-xl font-bold leading-snug">
              {biblioteca.callout}
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-sm md:max-w-none">
            {/* Bloco carvão deslocado, como papel recortado atrás da foto */}
            <div aria-hidden="true" className="paper-cut-alt absolute -bottom-4 -right-3 h-[88%] w-[88%] bg-carvao" />
            <div className="relative bg-areia p-2.5 pb-3 md:rotate-[1.5deg]">
              <span aria-hidden="true" className="absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-3 bg-solar/90" />
              <Image
                src={biblioteca.photo.src}
                width={biblioteca.photo.width}
                height={biblioteca.photo.height}
                alt={biblioteca.photo.alt}
                sizes="(min-width: 768px) 26rem, 90vw"
                className="aspect-[4/5] h-auto w-full object-cover object-top"
              />
              <figcaption className="mt-2.5 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 px-1 text-carvao">
                <span className="text-sm font-semibold">{biblioteca.photoCaption}</span>
                <span className="text-xs text-carvao/80">{biblioteca.photo.credit}</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>

      <div className={`${container} py-16 sm:py-20`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="font-display text-4xl uppercase leading-none sm:text-5xl">{biblioteca.authorsTitle}</h3>
          <p className="max-w-md text-sm leading-relaxed text-carvao/80">{biblioteca.availabilityNote}</p>
        </div>
        <AuthorList
          authors={authors}
          initialCount={biblioteca.initialAuthors}
          suggestionsLabel={biblioteca.suggestionsLabel}
        />
      </div>
    </section>
  );
}
