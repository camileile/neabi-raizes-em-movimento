import Image from "next/image";
import { assistaELeia, films, sectionIds, type Film } from "@/data/site-content";
import { ArrowIcon, ExternalLink } from "./ExternalLink";
import { button, container, eyebrow } from "./ui";

export function FilmsSection() {
  return (
    <section
      id={sectionIds.assistaELeia}
      aria-labelledby="titulo-assista"
      className="border-t-2 border-carvao/10 bg-areia-escura py-16 sm:py-24"
    >
      <div className={container}>
        <div className="max-w-3xl">
          <p className={`${eyebrow} text-terracota`}>
            <span aria-hidden="true" className="h-0.5 w-10 bg-terracota" />
            Assista e leia
          </p>
          <h2 id="titulo-assista" className="mt-5 text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-tight">
            {assistaELeia.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed">{assistaELeia.intro}</p>
        </div>

        <ul className="mt-12 space-y-16 sm:mt-16 sm:space-y-20">
          {films.map((film, index) => (
            <li key={film.title}>
              <FilmItem film={film} reversed={index % 2 === 1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const paper = {
  floresta: "bg-floresta",
  terracota: "bg-terracota",
  carvao: "bg-carvao",
};

function FilmItem({ film, reversed }: { film: Film; reversed: boolean }) {
  const tilt = reversed ? "rotate-2" : "-rotate-2";
  return (
    <article
      className={`grid gap-8 sm:items-center md:gap-14 ${
        reversed ? "sm:grid-cols-[1fr_minmax(0,15rem)] md:grid-cols-[1fr_minmax(0,17rem)]" : "sm:grid-cols-[minmax(0,15rem)_1fr] md:grid-cols-[minmax(0,17rem)_1fr]"
      }`}
    >
      <figure className={`mx-auto w-full max-w-[15rem] sm:max-w-none ${reversed ? "sm:order-2" : ""}`}>
        <div className="relative px-3 pt-3">
          {/* Papel colorido atrás do pôster */}
          <div aria-hidden="true" className={`paper-cut absolute inset-0 ${paper[film.accent]} ${tilt}`} />
          <Image
            src={film.poster.src}
            width={film.poster.width}
            height={film.poster.height}
            alt={film.poster.alt}
            sizes="(min-width: 768px) 17rem, 15rem"
            className="relative h-auto w-full shadow-[0_2px_0_rgba(28,27,26,0.25)]"
          />
          <span aria-hidden="true" className="relative mx-auto -mt-1 block h-1.5 w-16 bg-solar" />
        </div>
        <figcaption className="mt-3 text-xs text-carvao/75">{film.poster.credit}</figcaption>
      </figure>

      <div className={`max-w-xl ${reversed ? "sm:order-1 sm:justify-self-end" : ""}`}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracota">{film.kind}</p>
        <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">{film.title}</h3>
        <p className="mt-4 text-lg leading-relaxed">{film.description}</p>
        <div className="mt-6 flex flex-col items-start gap-2">
          <ExternalLink href={film.link.href} className={button.dark}>
            {film.link.label}
            <ArrowIcon />
          </ExternalLink>
          <p className="text-sm text-carvao/80">{film.link.source}</p>
        </div>
      </div>
    </article>
  );
}
