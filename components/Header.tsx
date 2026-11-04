import Link from "next/link";
import { profile } from "@/content/site";
import { type Locale, ui } from "@/lib/i18n";
import { LangSwitch } from "./LangSwitch";
import { Playhead } from "./Playhead";
import { SiteNav } from "./SiteNav";

export function Header({ lang }: { lang: Locale }) {
  const items = [
    { key: "work", href: `/${lang}#work`, label: ui.nav.work[lang] },
    { key: "lab", href: `/${lang}#lab`, label: ui.nav.lab[lang] },
    { key: "story", href: `/${lang}#story`, label: ui.nav.story[lang] },
    { key: "services", href: `/${lang}#services`, label: ui.nav.services[lang] },
    { key: "contact", href: `/${lang}#contact`, label: ui.nav.contact[lang] },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-[2px]">
      <div className="wrap flex h-14 items-center justify-between gap-3 md:h-16">
        <Link href={`/${lang}`} className="flex min-h-11 flex-col justify-center leading-tight">
          <span className="text-[1.0625rem] font-semibold tracking-tight text-ink">{profile.name[lang]}</span>
          <span className="hidden text-[0.8125rem] text-muted sm:block">
            {lang === "ar" ? "بانٍ لمنتجات الذكاء الاصطناعي" : "AI product builder"}
          </span>
        </Link>
        <div className="flex items-center gap-1 md:gap-3">
          <SiteNav lang={lang} items={items} menuLabel={lang === "ar" ? "القائمة" : "Menu"} />
          <LangSwitch lang={lang} />
        </div>
      </div>
      <Playhead />
    </header>
  );
}
