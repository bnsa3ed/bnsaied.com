"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Poster first, real video on click. Nothing downloads until the visitor asks,
 * starting one video pauses any other, and focus moves to the video so keyboard
 * users keep their place.
 */
export function VideoPlayer({
  src,
  srcSmall,
  poster,
  label,
  duration,
  playLabel,
  errorLabel,
  ratio,
  priority,
  bleed,
}: {
  src: string;
  /** Lighter file for phones, chosen when playback starts. */
  srcSmall?: string;
  poster: string;
  label: string;
  duration: string;
  playLabel: string;
  errorLabel: string;
  ratio: "16/9" | "9/16";
  priority?: boolean;
  /** Edge to edge on phones (cancels the 1rem page gutter), rounded from sm up. */
  bleed?: boolean;
}) {
  const [file, setFile] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const wide = ratio === "16/9";

  useEffect(() => {
    if (file) video.current?.focus();
  }, [file]);

  const start = () => {
    const small = srcSmall && window.matchMedia("(max-width: 767px)").matches;
    setFile(small ? srcSmall : src);
  };

  const pauseOthers = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    document.querySelectorAll("video").forEach((v) => {
      if (v !== e.currentTarget) v.pause();
    });
  };

  const frame = !wide
    ? "aspect-[9/16] rounded-2xl"
    : bleed
      ? "aspect-video -mx-4 sm:mx-0 sm:rounded-2xl md:rounded-[20px]"
      : "aspect-video rounded-2xl md:rounded-[20px]";

  return (
    <div className={`relative overflow-hidden bg-ink ${frame}`}>
      {file && !failed ? (
        <video
          ref={video}
          src={file}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="none"
          aria-label={label}
          onPlay={pauseOthers}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full bg-ink object-contain focus-inset"
        />
      ) : failed ? (
        <p className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-[0.9375rem] text-panel">
          {errorLabel}
          <a href={src} className="font-medium underline underline-offset-4">
            {label} ↗
          </a>
        </p>
      ) : (
        <button
          type="button"
          onClick={start}
          aria-label={`${playLabel}: ${label} (${duration})`}
          className="group absolute inset-0 block h-full w-full cursor-pointer text-start focus-inset"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <span
            aria-hidden="true"
            className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink shadow-[0_8px_30px_rgb(0_0_0/0.35)] transition-transform group-hover:scale-110 motion-reduce:transition-none ${
              wide ? "h-20 w-20 md:h-24 md:w-24" : "h-14 w-14"
            }`}
          >
            {/* The triangle points right in every language, so the optical nudge is physical. */}
            <svg width={wide ? 28 : 20} height={wide ? 28 : 20} viewBox="0 0 24 24" fill="currentColor" className="translate-x-[2px]">
              <path d="M7 4.5v15a1 1 0 0 0 1.52.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5z" />
            </svg>
          </span>
          <span
            dir="ltr"
            aria-hidden="true"
            className={`tc absolute end-3 rounded-md bg-black/70 px-2 py-0.5 text-[0.75rem] font-medium text-white ${
              wide ? "top-3" : "bottom-3"
            }`}
          >
            {duration}
          </span>
        </button>
      )}
    </div>
  );
}
