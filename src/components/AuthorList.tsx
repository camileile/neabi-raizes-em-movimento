"use client";

import { useRef, useState } from "react";
import type { Author } from "@/data/site-content";

type Props = {
  authors: Author[];
  initialCount: number;
  suggestionsLabel: string;
};

const spineColors = ["bg-floresta", "bg-terracota", "bg-carvao"];

export function AuthorList({ authors, initialCount, suggestionsLabel }: Props) {
  const [expanded, setExpanded] = useState(false);
  const firstRevealed = useRef<HTMLElement>(null);
  const hasMore = authors.length > initialCount;

  const toggle = () => {
    const next = !expanded;
    setExpanded(next);
    // Ao expandir, leva o foco ao primeiro autor revelado.
    if (next) requestAnimationFrame(() => firstRevealed.current?.focus());
  };

  return (
    <>
      <ol id="lista-autores" className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {authors.map((author, index) => {
          const hidden = !expanded && index >= initialCount;
          return (
            <li key={author.name} hidden={hidden}>
              <article
                ref={index === initialCount ? firstRevealed : undefined}
                tabIndex={index === initialCount ? -1 : undefined}
                aria-labelledby={`autor-${index}`}
                className="flex h-full gap-4"
              >
                <span aria-hidden="true" className={`w-2 shrink-0 ${spineColors[index % spineColors.length]}`} />
                <div className="flex flex-col">
                  <p aria-hidden="true" className="font-display text-xl text-terracota">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4 id={`autor-${index}`} className="mt-1 text-xl font-bold leading-tight">
                    {author.name}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-carvao/80">
                    {author.years} · {author.field}
                  </p>
                  <p className="mt-3 leading-relaxed">{author.bio}</p>
                  <div className="mt-4 border-t border-carvao/20 pt-3">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-floresta">{suggestionsLabel}</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      {author.suggestions.map((book) => (
                        <li key={book} className="flex gap-2">
                          <span aria-hidden="true" className="mt-2 h-0.5 w-3 shrink-0 bg-solar" />
                          <cite className="not-italic">{book}</cite>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={expanded}
            aria-controls="lista-autores"
            className="inline-flex min-h-12 items-center gap-3 border-2 border-carvao px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-carvao hover:text-areia"
          >
            {expanded ? "Mostrar menos autores" : `Ver todos os autores (${authors.length})`}
            <span aria-hidden="true" className={`text-lg leading-none ${expanded ? "rotate-180" : ""}`}>
              ↓
            </span>
          </button>
        </div>
      )}
    </>
  );
}
