"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

/** Copies the email address and confirms it in place, for people who don't use mail links. */
export function CopyEmail({ email, lang }: { email: string; lang: Locale }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line-strong px-4 font-medium text-ink hover:border-ink"
    >
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
        {copied ? (
          <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" />
        ) : (
          <>
            <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.5 5V3.5A1.5 1.5 0 009 2H3.5A1.5 1.5 0 002 3.5V9A1.5 1.5 0 003.5 10.5H5" stroke="currentColor" strokeWidth="1.5" />
          </>
        )}
      </svg>
      <span aria-live="polite">
        {copied ? (lang === "ar" ? "تم النسخ" : "Copied") : lang === "ar" ? "انسخ البريد" : "Copy email"}
      </span>
    </button>
  );
}

/** The current time where Mohamed works, so visitors know when to expect a reply. */
export function LocalTime({ lang, timeZone, city }: { lang: Locale; timeZone: string; city: string }) {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(lang === "ar" ? "ar-AE-u-nu-latn" : "en-US", {
      timeZone,
      hour: "numeric",
      minute: "2-digit",
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [lang, timeZone]);

  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--wave)]" />
      <span>
        {city}
        {now && (
          <>
            {lang === "ar" ? "، " : ", "}
            <time dir="ltr">{now}</time>
          </>
        )}
      </span>
    </span>
  );
}
