import Link from "next/link";
import { profile } from "@/content/site";
import { type Locale, ui } from "@/lib/i18n";
import { HeaderRole } from "./HeaderRole";
import { LangSwitch } from "./LangSwitch";
import { Playhead } from "./Playhead";
import { SiteNav } from "./SiteNav";

export function Header({ lang }: { lang: Locale }) {
  const items = [
    { key: "work", href: `/${lang}#work`, label: ui.nav.work[lang] },
    { key: "video", href: `/${lang}/video`, label: ui.nav.video[lang] },
    { key: "lab", href: `/${lang}#lab`, label: ui.nav.lab[lang] },
    { key: "story", href: `/${lang}#story`, label: ui.nav.story[lang] },
    { key: "services", href: `/${lang}#services`, label: ui.nav.services[lang] },
    { key: "contact", href: `/${lang}#contact`, label: ui.nav.contact[lang] },
  ];

  // On the video page the menu jumps between its own sections.
  const videoItems = [
    { key: "reel", href: "#reel", label: ui.videoNav.reel[lang] },
    { key: "ai", href: "#ai", label: ui.videoNav.ai[lang] },
    { key: "social", href: "#social", label: ui.videoNav.social[lang] },
    { key: "filming", href: "#filming", label: ui.videoNav.filming[lang] },
    { key: "contact", href: "#contact", label: ui.nav.contact[lang] },
    { key: "products", href: `/${lang}`, label: ui.videoNav.products[lang] },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-[2px]">
      <div className="wrap flex h-14 items-center justify-between gap-3 md:h-16">
        <Link href={`/${lang}`} className="flex min-h-11 flex-col justify-center leading-tight">
          <span className="text-[1.0625rem] font-semibold tracking-tight text-ink">{profile.name[lang]}</span>
          <HeaderRole lang={lang} />
        </Link>
        <div className="flex items-center gap-1 md:gap-3">
          <SiteNav lang={lang} items={items} videoItems={videoItems} menuLabel={lang === "ar" ? "القائمة" : "Menu"} />
          <LangSwitch lang={lang} />
        </div>
      </div>
      <Playhead />
    </header>
  );
}
