import { hero, playlist, sectionIds, spotifyPlaylistUrl } from "@/data/site-content";
import { ExternalLink } from "./ExternalLink";
import { HeroVaral } from "./HeroVaral";
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

        <HeroVaral />
      </div>
    </section>
  );
}

