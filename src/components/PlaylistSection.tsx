import QRCode from "qrcode";
import { getSpotifyEmbedUrl, playlist, sectionIds, spotifyPlaylistUrl } from "@/data/site-content";
import { ArrowIcon, ExternalLink } from "./ExternalLink";
import { button, container, eyebrow } from "./ui";

export async function PlaylistSection() {
  const embedUrl = getSpotifyEmbedUrl(spotifyPlaylistUrl);
  // QR code gerado no build, a partir do link real (sem JavaScript no navegador).
  const qrSvg = spotifyPlaylistUrl
    ? await QRCode.toString(spotifyPlaylistUrl, {
        type: "svg",
        margin: 2,
        errorCorrectionLevel: "M",
        color: { dark: "#1c1b1aff", light: "#f2e6d6ff" },
      })
    : null;

  return (
    <section id={sectionIds.playlist} aria-labelledby="titulo-playlist" className="relative overflow-hidden bg-carvao py-16 text-areia sm:py-24">
      <div className={`${container} grid gap-12 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-14`}>
        {embedUrl && (
          <div className="relative order-2 md:order-1">
            <div aria-hidden="true" className="paper-cut-alt absolute -left-3 -top-4 h-[70%] w-[75%] bg-terracota" />
            <div aria-hidden="true" className="halftone absolute -bottom-5 -right-3 h-24 w-32 text-areia/20" />
            <iframe
              title={`Player da playlist ${playlist.title} no Spotify`}
              src={embedUrl}
              width="100%"
              height="420"
              loading="lazy"
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="relative block h-[420px] w-full rounded-xl border-0 bg-floresta"
            />
          </div>
        )}

        <div className={embedUrl ? "order-1 md:order-2" : "md:col-span-2 md:max-w-2xl"}>
          <p className={`${eyebrow} text-solar`}>
            <span aria-hidden="true" className="h-0.5 w-10 bg-solar" />
            Playlist
          </p>
          <h2 id="titulo-playlist" className="mt-5 font-display text-[clamp(3rem,11vw,5.5rem)] uppercase leading-[0.92]">
            {playlist.title}
          </h2>
          <p className="mt-4 text-xl font-bold text-solar">{playlist.subtitle}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-areia/90">{playlist.text}</p>

          <div className="mt-8">
            {spotifyPlaylistUrl ? (
              <div className="flex flex-wrap items-center gap-6">
                <ExternalLink href={spotifyPlaylistUrl} className={button.solar}>
                  {playlist.cta}
                  <ArrowIcon />
                </ExternalLink>
                {qrSvg && (
                  <figure className="flex items-center gap-4">
                    <div
                      role="img"
                      aria-label={`QR code que abre a playlist ${playlist.title} no Spotify`}
                      className="size-28 shrink-0 [&_svg]:size-full"
                      dangerouslySetInnerHTML={{ __html: qrSvg }}
                    />
                    <figcaption className="max-w-[10rem] text-sm leading-snug text-areia/85">
                      Aponte a câmera do celular para abrir a playlist.
                    </figcaption>
                  </figure>
                )}
              </div>
            ) : (
              <p className="inline-flex items-center gap-3 border border-areia/30 px-4 py-3 text-sm font-semibold text-areia/85">
                <span aria-hidden="true" className="size-2 rounded-full border border-solar" />
                {playlist.pendingLabel}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

