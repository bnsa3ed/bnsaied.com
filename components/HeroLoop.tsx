"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative, muted event montage for the hero. The showreel below is the real,
 * accessible video, so this one is hidden from assistive tech. It stays on its
 * poster for visitors who ask for reduced motion.
 */
export function HeroLoop({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) v.pause();
      else v.play().catch(() => {});
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <div aria-hidden="true" className="relative aspect-video overflow-hidden rounded-2xl bg-ink md:rounded-[20px]">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute start-3 bottom-3 flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 text-[0.75rem] font-medium text-white">
        <span className="h-2 w-2 rounded-full bg-rec" />
        REC
      </span>
    </div>
  );
}
