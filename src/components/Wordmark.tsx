/**
 * Assinatura tipográfica PROVISÓRIA do NEABI.
 * Substituir pelo arquivo oficial da marca (SVG ou PNG transparente) quando disponível.
 */
export function Wordmark({ org, campus }: { org: string; campus: string }) {
  return (
    <span className="flex items-center gap-3 leading-none">
      <span className="border-b-4 border-solar pb-0.5 font-display text-2xl tracking-wide">{org}</span>
      <span className="text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.12em] text-areia/85">
        IFPE
        <br />
        {campus.replace(/^IFPE\s*/, "")}
      </span>
    </span>
  );
}
