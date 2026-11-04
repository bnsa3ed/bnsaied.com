"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, ui } from "@/lib/i18n";

export function LangSwitch({ lang }: { lang: Locale }) {
  const pathname = usePathname() ?? `/${lang}`;
  const other: Locale = lang === "en" ? "ar" : "en";
  const href = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);

  return (
    <Link
      href={href}
      hrefLang={other}
      lang={other}
      aria-label={ui.switchLangLabel[lang]}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-2 text-[0.9375rem] font-medium text-ink hover:bg-panel ${
        other === "ar" ? "font-arabic" : "font-sans"
      }`}
    >
      {ui.switchLang[lang]}
    </Link>
  );
}
