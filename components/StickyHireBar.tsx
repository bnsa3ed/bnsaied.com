"use client";

import { useEffect, useState } from "react";

/**
 * Phones only: once the hero (and its buttons) scrolls away, keep CV, WhatsApp
 * and email one tap away. Hidden again near the contact section, which has them.
 */
export function StickyHireBar({
  heroId,
  contactId,
  cv,
  whatsapp,
  mailto,
  labels,
}: {
  heroId: string;
  contactId: string;
  cv: string;
  whatsapp: string;
  mailto: string;
  labels: { cv: string; whatsapp: string; email: string };
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const contact = document.getElementById(contactId);
    if (!hero || !contact) return;
    let pastHero = false;
    let atContact = false;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
        if (e.target === contact) atContact = e.isIntersecting;
      }
      setShow(pastHero && !atContact);
    });
    io.observe(hero);
    io.observe(contact);
    return () => io.disconnect();
  }, [heroId, contactId]);

  const btn = "flex min-h-11 flex-1 items-center justify-center rounded-full text-[0.9375rem] font-medium";

  return (
    <div
      aria-hidden={!show}
      inert={!show}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 px-4 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-[2px] transition-transform duration-300 motion-reduce:transition-none md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2">
        <a href={cv} download className={`${btn} bg-ink text-panel`}>
          {labels.cv}
        </a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`${btn} text-ink ring-1 ring-line-strong`}>
          {labels.whatsapp}
        </a>
        <a href={mailto} className={`${btn} text-ink ring-1 ring-line-strong`}>
          {labels.email}
        </a>
      </div>
    </div>
  );
}
