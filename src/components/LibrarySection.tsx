import { authors, biblioteca, sectionIds } from "@/data/site-content";
import { AuthorList } from "./AuthorList";
import { container, eyebrow } from "./ui";

const spines = [
  { name: "Carolina", tone: "bg-areia text-carvao", h: "h-[92%]" },
  { name: "Machado", tone: "bg-carvao text-areia", h: "h-[80%]" },
  { name: "Conceição", tone: "bg-solar text-carvao", h: "h-full" },
  { name: "Milton", tone: "bg-floresta text-areia", h: "h-[74%]" },
  { name: "Lélia", tone: "bg-areia-escura text-carvao", h: "h-[86%]" },
];

export function LibrarySection() {
  return (
    <section id={sectionIds.biblioteca} aria-labelledby="titulo-biblioteca">
      <div className="relative overflow-hidden bg-terracota text-areia">
        <div className={`${container} grid gap-10 py-16 sm:py-20 md:grid-cols-[1.3fr_1fr] md:items-end`}>
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

          {/* Estante: lombadas com nomes de autores da seleção (decorativa) */}
          <div aria-hidden="true" className="flex h-56 items-end gap-2 border-b-4 border-carvao sm:h-72">
            {spines.map((spine) => (
              <span
                key={spine.name}
                className={`flex w-12 items-center justify-center sm:w-14 ${spine.tone} ${spine.h}`}
              >
                <span className="rotate-180 font-display text-lg uppercase tracking-wider [writing-mode:vertical-rl] sm:text-xl">
                  {spine.name}
                </span>
              </span>
            ))}
          </div>
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
