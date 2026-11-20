import { contact, footer, site } from "@/data/site-content";
import { container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-solar bg-carvao text-areia">
      <div className={`${container} flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between`}>
        <div>
          <p className="font-display text-3xl uppercase tracking-wide">{site.name}</p>
          <p className="mt-2 text-sm font-semibold">
            {site.org} · {site.campus}
          </p>
        </div>

        <div className="sm:text-right">
          <p className="text-lg font-bold text-solar">{footer.tagline}</p>
          {contact.confirmed && (
            <p className="mt-3 text-sm">
              Contato:{" "}
              <a href={`mailto:${contact.email}`} className="font-semibold underline underline-offset-4 hover:text-solar">
                {contact.email}
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
