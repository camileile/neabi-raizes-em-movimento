/** Classes compartilhadas de botões e marcadores. */

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide transition-colors";

export const button = {
  solar: `${buttonBase} bg-solar text-carvao hover:bg-areia`,
  outlineLight: `${buttonBase} border-2 border-areia text-areia hover:bg-areia hover:text-carvao`,
  dark: `${buttonBase} bg-carvao text-areia hover:bg-floresta`,
};

export const eyebrow = "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]";

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
