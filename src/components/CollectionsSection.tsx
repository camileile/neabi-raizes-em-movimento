import { acervos, digitalCollections, sectionIds } from "@/data/site-content";
import { ArrowIcon, ExternalLink } from "./ExternalLink";
import { button, container, eyebrow } from "./ui";

export function CollectionsSection() {
  return (
    <section id={sectionIds.acervos} aria-labelledby="titulo-acervos" className="relative bg-floresta py-16 text-areia sm:py-24">
      <div aria-hidden="true" className="halftone absolute right-0 top-0 h-40 w-1/3 text-areia/10" />
      <div className={`${container} relative`}>
        <div className="max-w-3xl">
          <p className={`${eyebrow} text-solar`}>
            <span aria-hidden="true" className="h-0.5 w-10 bg-solar" />
            Acervos digitais
          </p>
          <h2 id="titulo-acervos" className="mt-5 font-display text-[clamp(2.5rem,8vw,4.5rem)] uppercase leading-[0.98]">
            {acervos.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed">{acervos.text}</p>
        </div>

        <ul className="mt-12 divide-y-2 divide-areia/25 border-y-2 border-areia/25">
          {digitalCollections.map((item, index) => (
            <li key={item.name} className="grid gap-5 py-8 md:grid-cols-[4rem_1fr_auto] md:items-center md:gap-8">
              <span aria-hidden="true" className="font-display text-4xl text-solar">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-bold leading-tight">{item.name}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-areia/90">{item.description}</p>
                <p className="mt-2 text-sm font-semibold text-areia/80">{item.link.source}</p>
              </div>
              <ExternalLink href={item.link.href} className={`${button.solar} self-start md:self-center`}>
                {item.link.label}
                <ArrowIcon />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
