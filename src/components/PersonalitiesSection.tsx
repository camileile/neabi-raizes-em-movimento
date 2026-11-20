import Image from "next/image";
import { personalidades, personalities, sectionIds, type Personality } from "@/data/site-content";
import { container, eyebrow } from "./ui";

/**
 * Varal de personalidades negras: cartões pendurados numa linha amarela.
 * No celular a fileira desliza na horizontal (dentro do próprio bloco);
 * a partir de telas largas vira duas fileiras de cinco.
 */
export function PersonalitiesSection() {
  return (
    <section
      id={sectionIds.personalidades}
      aria-labelledby="titulo-personalidades"
      className="relative overflow-hidden bg-carvao py-16 text-areia sm:py-24"
    >
      <div aria-hidden="true" className="halftone absolute left-0 top-0 h-48 w-1/4 text-areia/10" />
      <div className={`${container} relative`}>
        <div className="max-w-3xl">
          <p className={`${eyebrow} text-solar`}>
            <span aria-hidden="true" className="h-0.5 w-10 bg-solar" />
            {personalidades.eyebrow}
          </p>
          <h2
            id="titulo-personalidades"
            className="mt-5 font-display text-[clamp(2.5rem,8vw,4.5rem)] uppercase leading-[0.98]"
          >
            {personalidades.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-areia/90">{personalidades.intro}</p>
        </div>

        <div
          role="region"
          aria-label={personalidades.eyebrow}
          tabIndex={0}
          className="-mx-4 mt-12 overflow-x-auto px-4 pb-6 [scrollbar-color:var(--color-solar)_transparent] sm:-mx-6 sm:px-6 xl:mx-0 xl:overflow-visible xl:px-0 xl:pb-0"
        >
          <ul className="flex w-max snap-x snap-mandatory gap-5 pt-2 xl:grid xl:w-auto xl:grid-cols-5 xl:gap-y-16">
            {personalities.map((person, index) => (
              <li key={person.name} className="relative w-[15.5rem] shrink-0 snap-start pt-7 xl:w-auto">
                {/* Trecho da corda do varal + prendedor */}
                <span aria-hidden="true" className="absolute -left-2.5 -right-2.5 top-3 h-0.5 bg-solar" />
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 z-10 h-8 w-3 -translate-x-1/2 rounded-[2px] bg-areia-escura ring-2 ring-carvao"
                />
                <PersonCard person={person} tilt={index % 2 === 0 ? "-rotate-1" : "rotate-1"} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-col gap-2 text-sm text-areia/80 sm:flex-row sm:justify-between">
          <p className="xl:hidden">{personalidades.scrollHint}</p>
          <p className="xl:ml-auto">{personalidades.photoCredit}</p>
        </div>
      </div>
    </section>
  );
}

function PersonCard({ person, tilt }: { person: Personality; tilt: string }) {
  return (
    <article className={`h-full origin-top bg-areia p-3 pb-5 text-carvao ${tilt}`}>
      {person.photo ? (
        <Image
          src={person.photo.src}
          width={person.photo.width}
          height={person.photo.height}
          alt={person.photo.alt}
          sizes="(min-width: 1280px) 13rem, 15rem"
          className="aspect-[4/5] h-auto w-full object-cover object-top"
        />
      ) : (
        <div className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-terracota p-4 text-areia">
          <div aria-hidden="true" className="halftone absolute inset-0 text-areia/15" />
          <span aria-hidden="true" className="relative font-display text-4xl uppercase leading-none">
            Século
            <br />
            XVIII
          </span>
          <p className="relative mt-3 text-xs font-semibold leading-snug">{person.noPhotoNote}</p>
        </div>
      )}

      <p className="mt-4 inline-block bg-solar px-2 py-1 text-[0.7rem] font-bold uppercase tracking-wider">
        {person.area}
      </p>
      <h3 className="mt-3 font-display text-2xl uppercase leading-none">{person.name}</h3>
      <p className="mt-3 text-sm font-bold leading-snug text-floresta">{person.headline}</p>
      <p className="mt-2 text-sm leading-relaxed">{person.text}</p>
    </article>
  );
}
