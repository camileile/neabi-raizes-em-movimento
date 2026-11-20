import { hero, playlist, sectionIds, spotifyPlaylistUrl } from "@/data/site-content";
import { ExternalLink } from "./ExternalLink";
import { button, container, eyebrow } from "./ui";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-principal" className="relative overflow-hidden bg-carvao text-areia">
      <div className={`${container} relative grid gap-10 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:pb-24 lg:pt-20`}>
        <div className="relative z-10">
          <p className={`${eyebrow} text-solar`}>
            <span aria-hidden="true" className="h-0.5 w-10 bg-solar" />
            {hero.marker}
          </p>

          <h1
            id="titulo-principal"
            className="mt-5 font-display text-[clamp(3.25rem,14vw,7.5rem)] uppercase leading-[0.92] tracking-tight"
          >
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-xl font-bold leading-snug text-solar sm:text-2xl">{hero.subtitle}</p>

          <div className="mt-6 max-w-xl space-y-3 text-base leading-relaxed text-areia/90 sm:text-lg">
            <p>{hero.text}</p>
            <p>{hero.complement}</p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={`#${sectionIds.consciencia}`} className={button.solar}>
              {hero.primaryCta}
            </a>
            {spotifyPlaylistUrl ? (
              <ExternalLink href={spotifyPlaylistUrl} className={button.outlineLight}>
                {hero.playlistCta}
              </ExternalLink>
            ) : (
              <p className="inline-flex min-h-12 items-center justify-center gap-2 px-2 text-sm font-semibold text-areia/80 sm:justify-start">
                <span aria-hidden="true" className="size-2 rounded-full border border-solar" />
                {playlist.pendingLabel}
              </p>
            )}
          </div>
        </div>

        <HeroComposition />
      </div>
    </section>
  );
}

/** Composição decorativa: papéis recortados, disco e lombadas. Ignorada por leitores de tela. */
function HeroComposition() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-56 w-full max-w-md sm:h-72 lg:h-[26rem]">
      <div className="paper-cut absolute left-0 top-6 h-[70%] w-[62%] bg-floresta" />
      <div className="paper-cut-alt absolute bottom-0 right-0 h-[58%] w-[56%] bg-terracota" />
      <div className="halftone absolute left-[8%] top-[14%] h-[44%] w-[40%] text-areia/25" />

      {/* Disco */}
      <div className="absolute right-[8%] top-0 aspect-square w-[42%] rounded-full bg-carvao ring-2 ring-areia/30">
        <div className="absolute inset-[12%] rounded-full border border-areia/15" />
        <div className="absolute inset-[24%] rounded-full border border-areia/15" />
        <div className="absolute inset-[36%] rounded-full bg-solar" />
        <div className="absolute inset-[47%] rounded-full bg-carvao" />
      </div>

      {/* Lombadas de livros */}
      <div className="absolute bottom-[10%] left-[10%] flex h-[42%] items-end gap-1.5">
        <span className="h-[78%] w-4 bg-areia sm:w-5" />
        <span className="h-full w-5 bg-solar sm:w-6" />
        <span className="h-[64%] w-3 bg-areia/80 sm:w-4" />
        <span className="h-[88%] w-5 bg-carvao ring-1 ring-areia/40 sm:w-6" />
      </div>

      <span className="absolute -right-4 bottom-[46%] h-1 w-[70%] rotate-[-8deg] bg-solar" />
    </div>
  );
}
