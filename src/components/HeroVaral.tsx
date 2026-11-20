import Image from "next/image";
import { hero, personalities, sectionIds } from "@/data/site-content";

/*
 * Ilustração da abertura: um varal em curva com retratos do
 * Varal de Personalidades Negras, sobre papéis recortados.
 * Coordenadas em unidades de um quadro 100 × 80 (mesma proporção do bloco).
 */
const W = 100;
const H = 80;

/** Altura da corda em cada ponto: curva caída no meio, como um varal. */
const cordY = (x: number) => 9 + 0.0036 * (2500 - (x - 50) ** 2);

const cordPath = Array.from({ length: 21 }, (_, i) => {
  const x = i * 5;
  return `${i === 0 ? "M" : "L"}${x} ${cordY(x).toFixed(2)}`;
}).join(" ");

/** Posição de cada retrato: centro na corda, comprimento do fio, inclinação. */
const slots = [
  { cx: 14, drop: 5, tilt: -3 },
  { cx: 38, drop: 12, tilt: 2 },
  { cx: 62, drop: 4, tilt: -2 },
  { cx: 86, drop: 10, tilt: 3 },
];
const CARD_W = 23;

export function HeroVaral() {
  const people = hero.featuredPersonalities
    .map((name) => personalities.find((p) => p.name === name))
    .filter((p): p is (typeof personalities)[number] & { photo: NonNullable<(typeof personalities)[number]["photo"]> } =>
      Boolean(p?.photo),
    )
    .slice(0, slots.length);

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div aria-hidden="true" className="relative aspect-[10/8] w-full">
        {/* Papéis recortados ao fundo */}
        <div className="paper-cut absolute left-0 top-[44%] h-[48%] w-[58%] bg-floresta" />
        <div className="halftone absolute left-[4%] top-[62%] h-[28%] w-[38%] text-areia/20" />
        <div className="paper-cut-alt absolute bottom-0 right-0 flex h-[44%] w-[58%] items-end justify-end bg-terracota p-[4%]">
          <p className="text-right font-display text-[clamp(1rem,3.4vw,1.75rem)] uppercase leading-[0.95] text-areia">
            Varal de
            <br />
            personalidades
            <br />
            <span className="text-solar">negras</span>
          </p>
        </div>
        <span className="absolute bottom-[5%] left-[6%] h-1 w-[32%] -rotate-3 bg-solar" />

        {/* Corda e fios */}
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
          <path d={cordPath} fill="none" stroke="var(--color-solar)" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          {people.map((person, i) => {
            const { cx, drop } = slots[i];
            const y = cordY(cx);
            return (
              <line
                key={person.name}
                x1={cx}
                y1={y}
                x2={cx}
                y2={y + drop + 1}
                stroke="var(--color-areia)"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        {/* Retratos pendurados */}
        {people.map((person, i) => {
          const { cx, drop, tilt } = slots[i];
          const top = ((cordY(cx) + drop) / H) * 100;
          return (
            <figure
              key={person.name}
              className="absolute origin-top bg-areia p-[3%] pb-0 shadow-[0_3px_0_rgba(0,0,0,0.35)]"
              style={{ left: `${cx - CARD_W / 2}%`, top: `${top}%`, width: `${CARD_W}%`, transform: `rotate(${tilt}deg)` }}
            >
              <span className="absolute -top-[9%] left-1/2 h-[14%] w-[16%] -translate-x-1/2 rounded-[2px] bg-areia-escura ring-2 ring-carvao" />
              <Image
                src={person.photo.src}
                width={person.photo.width}
                height={person.photo.height}
                alt=""
                loading="eager"
                sizes="(min-width: 1024px) 7rem, 22vw"
                className="aspect-[4/5] h-auto w-full object-cover object-top"
              />
              <figcaption className="py-[6%] text-center font-display text-[clamp(0.55rem,1.6vw,0.8rem)] uppercase leading-none text-carvao">
                {person.name.split(" ")[0]}
              </figcaption>
            </figure>
          );
        })}
      </div>

      <a
        href={`#${sectionIds.personalidades}`}
        className="relative mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-areia underline decoration-solar decoration-2 underline-offset-4 hover:text-solar lg:float-right"
      >
        {hero.varalLink}
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
