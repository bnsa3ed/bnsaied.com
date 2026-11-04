"use client";

import { useEffect, useRef, useState } from "react";

type Marker = { id: string; label: string; at: number };

/**
 * Page scroll drawn as a timeline ruler under the header.
 * Section markers come from [data-section] elements; J / L jump between them.
 */
export function Playhead() {
  const head = useRef<HTMLDivElement>(null);
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    const sections = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));

    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return setMarkers([]);
      setMarkers(
        sections().map((el) => ({
          id: el.id,
          label: el.dataset.section ?? el.id,
          at: Math.min(0.995, Math.max(0, (el.offsetTop - 80) / max)),
        })),
      );
    };

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        head.current?.style.setProperty("--p", String(p));
      });
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, select, [contenteditable='true']")) return;
      const key = e.key.toLowerCase();
      if (key !== "j" && key !== "l") return;
      const list = sections();
      // Sections land 80px below the top because of scroll-padding-top.
      const y = window.scrollY + 80;
      const next =
        key === "l"
          ? list.find((el) => el.offsetTop > y + 12)
          : [...list].reverse().find((el) => el.offsetTop < y - 12);
      if (next) {
        e.preventDefault();
        next.scrollIntoView({ block: "start" });
        next.focus({ preventScroll: true });
      }
    };

    measure();
    update();
    const ro = new ResizeObserver(() => {
      measure();
      update();
    });
    ro.observe(document.body);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div aria-hidden="true" className="relative h-2 w-full overflow-hidden">
      {/* ruler */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
      {markers.map((m) => (
        <span
          key={m.id}
          title={m.label}
          className="absolute bottom-0 h-2 w-px bg-line-strong"
          style={{ insetInlineStart: `${m.at * 100}%` }}
        />
      ))}
      {/* played range + head */}
      <div
        ref={head}
        className="absolute inset-0"
        style={{ ["--p" as string]: 0 }}
      >
        <div
          className="absolute bottom-0 start-0 h-[2px] bg-ink"
          style={{ width: "calc(var(--p) * 100%)" }}
        />
        <div
          className="absolute bottom-0 h-2 w-[3px] -translate-x-1/2 bg-rec rtl:translate-x-1/2"
          style={{ insetInlineStart: "calc(var(--p) * 100%)" }}
        />
      </div>
    </div>
  );
}
