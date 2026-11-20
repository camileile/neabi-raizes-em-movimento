import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Link externo: abre em nova aba com rel seguro e aviso para leitores de tela. */
export function ExternalLink({ href, children, className }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}

export function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3 13 13 3M6 3h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}
