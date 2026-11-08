"use client";

import { usePathname } from "next/navigation";

/** The J / L tip suits the homepage; recruiters on /video don't need it. */
export function KeysTip({ text }: { text: string }) {
  if (/\/video\/?$/.test(usePathname() ?? "")) return null;
  return <p className="hidden lg:block">{text}</p>;
}
