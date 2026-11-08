"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Item = { key: string; href: string; label: string };

/** Tracks which nav group the reader is in, using data-nav on each section. */
function useActiveNav(enabled: boolean, page: string) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    if (!enabled) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav]"));
    const visible = new Map<HTMLElement, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target as HTMLElement, e.isIntersecting);
        const current = sections.find((s) => visible.get(s));
        setActive(current?.dataset.nav ?? "");
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [enabled, page]);
  return enabled ? active : "";
}

export function SiteNav({
  lang,
  items: homeItems,
  videoItems,
  menuLabel,
}: {
  lang: Locale;
  items: Item[];
  videoItems: Item[];
  menuLabel: string;
}) {
  const pathname = usePathname() ?? "";
  const onHome = /^\/(en|ar)\/?$/.test(pathname);
  const onVideo = /^\/(en|ar)\/video\/?$/.test(pathname);
  const items = onVideo ? videoItems : homeItems;
  const active = useActiveNav(onHome || onVideo, pathname);
  const [open, setOpen] = useState(false);
  const id = useId();
  const button = useRef<HTMLButtonElement>(null);
  const activeItem = items.find((i) => i.key === active);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Desktop */}
      <nav aria-label={lang === "ar" ? "الرئيسية" : "Main"} className="hidden md:block">
        <ul className="flex items-center gap-1 text-[0.9375rem]">
          {items.map((item) => {
            const isActive = item.key === active;
            return (
              <li key={item.key}>
                <a
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative inline-flex min-h-11 items-center rounded-md px-3 transition-colors ${
                    isActive ? "font-medium text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-px h-[2px] bg-rec transition-opacity motion-reduce:transition-none ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile: the button names the section you are in */}
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line-strong/40 px-3 text-[0.9375rem] font-medium text-ink md:hidden"
      >
        <span>{activeItem ? activeItem.label : menuLabel}</span>
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className={open ? "rotate-180" : ""}>
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>
      <nav
        id={id}
        hidden={!open}
        aria-label={lang === "ar" ? "الرئيسية" : "Main"}
        className="absolute inset-x-0 top-full border-b border-line bg-paper shadow-[0_12px_24px_-16px_rgb(21_23_28/0.35)] md:hidden"
      >
        <ul className="wrap flex flex-col py-2">
          {items.map((item) => {
            const isActive = item.key === active;
            return (
              <li key={item.key}>
                <a
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-between text-xl font-medium text-ink"
                >
                  {item.label}
                  {isActive && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-rec" />}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
