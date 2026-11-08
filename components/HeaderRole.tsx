"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

/** The line under the name follows the page: video work or AI products. */
export function HeaderRole({ lang }: { lang: Locale }) {
  const onVideo = /\/video\/?$/.test(usePathname() ?? "");
  const ar = lang === "ar";
  const text = onVideo
    ? ar
      ? "مونتير ومحرر فيديو بالذكاء الاصطناعي"
      : "Video editor · Generative AI video"
    : ar
      ? "بانٍ لمنتجات الذكاء الاصطناعي"
      : "AI product builder";
  return <span className="hidden text-[0.8125rem] text-muted sm:block">{text}</span>;
}
