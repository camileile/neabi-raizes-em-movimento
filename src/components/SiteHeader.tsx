"use client";

import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/data/site-content";
import { container } from "./ui";
import { Wordmark } from "./Wordmark";

type Props = {
  nav: NavItem[];
  org: string;
  campus: string;
};

export function SiteHeader({ nav, org, campus }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-solar bg-carvao text-areia">
      <div className={`${container} flex h-16 items-center justify-between gap-4`}>
        <a href="#inicio" className="shrink-0" aria-label={`${org} · ${campus}, ir para o início`}>
          <Wordmark org={org} campus={campus} />
        </a>

        <nav aria-label="Seções da página" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block px-3 py-2 text-sm font-semibold transition-colors hover:text-solar"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex min-h-11 items-center gap-2 border-2 border-areia/70 px-3 text-sm font-bold uppercase tracking-wide xl:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="flex w-4 flex-col gap-1">
            <span className={`h-0.5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-current ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Seções da página"
        hidden={!open}
        className="border-t border-areia/20 bg-carvao xl:hidden"
      >
        <ul className={`${container} grid grid-cols-1 py-2 sm:grid-cols-2`}>
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-areia/10 font-semibold hover:text-solar"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
