import { profile } from "@/content/site";
import { type Locale, ui } from "@/lib/i18n";
import { KeysTip } from "./KeysTip";

export function Footer({ lang }: { lang: Locale }) {
  const links = profile.links.filter((l) => l.href);
  return (
    <footer className="border-t border-line py-8">
      <div className="wrap flex flex-col gap-4 text-[0.875rem] text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 {profile.name[lang]}{" "}
          <span dir="ltr" className="ms-1">
            {profile.handle}
          </span>
        </p>
        <nav aria-label={lang === "ar" ? "حسابات التواصل" : "Social profiles"}>
          <ul className="flex flex-wrap gap-x-5">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex min-h-11 items-center text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <KeysTip text={ui.keys[lang]} />
      </div>
    </footer>
  );
}
