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

        <ul className="mt-12 space-y-14 sm:mt-16 sm:space-y-20">
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

function FilmItem({ film, reversed }: { film: Film; reversed: boolean }) {
  return (
    <article className="grid items-center gap-7 md:grid-cols-2 md:gap-12">
      <div className={reversed ? "md:order-2" : undefined}>
        <FilmPoster film={film} />
      </div>
      <div className={reversed ? "md:order-1" : undefined}>
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

/** Composição tipográfica no lugar de capas (sem imagens de terceiros). */
function FilmPoster({ film }: { film: Film }) {
  const isGreen = film.accent === "floresta";
  return (
    <div
      aria-hidden="true"
      className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden p-6 sm:p-8 ${
        isGreen ? "bg-floresta text-areia" : "bg-carvao text-areia"
      }`}
    >
      {isGreen ? (
        <>
          {/* Faixas sonoras: referência à música */}
          <div className="absolute inset-y-0 right-6 flex items-center gap-1.5 opacity-90">
            {[40, 72, 55, 88, 46, 64, 30].map((h, i) => (
              <span key={i} className="w-2 bg-solar" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="halftone absolute -left-6 bottom-0 h-24 w-40 text-areia/20" />
        </>
      ) : (
        <>
          {/* Órbita e estrelas: referência à exploração espacial */}
          <div className="absolute -right-16 -top-16 size-64 rounded-full border-2 border-areia/25" />
          <div className="absolute -right-4 -top-4 size-40 rounded-full border border-areia/20" />
          <span className="absolute right-20 top-14 size-3 rounded-full bg-solar" />
          <span className="absolute right-40 top-8 size-1.5 rounded-full bg-areia" />
          <span className="absolute right-10 top-40 size-1.5 rounded-full bg-areia" />
          <div className="absolute bottom-0 left-0 h-3 w-1/2 bg-terracota" />
        </>
      )}

      <p className="relative text-xs font-bold uppercase tracking-[0.25em]">{film.kind}</p>
      <p className="relative max-w-[75%] font-display text-[clamp(2rem,7vw,3.5rem)] uppercase leading-[0.95]">
        {film.title}
      </p>
    </div>
  );
}
