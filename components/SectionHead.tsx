import type { ReactNode } from "react";

/** A section as its own rounded panel, so each one clearly starts and ends. */
export function Panel({
  id,
  nav,
  children,
  tone = "light",
}: {
  id: string;
  nav: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <section
      id={id}
      data-section={id}
      data-nav={nav}
      tabIndex={-1}
      aria-labelledby={`${id}-title`}
      className="wrap scroll-mt-20 outline-none"
    >
      <div
        className={`rounded-[28px] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20 ${
          tone === "dark" ? "bg-ink text-panel" : "bg-panel"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHead({
  id,
  title,
  intro,
  aside,
  tone = "light",
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-10">
      <div className="max-w-2xl">
        <h2 id={`${id}-title`} className="text-[2rem] font-semibold leading-[1.1] tracking-tight md:text-[2.75rem]">
          {title}
        </h2>
        {intro && (
          <p className={`mt-3 text-[1.0625rem] ${tone === "dark" ? "text-[#c9cdd5]" : "text-muted"}`}>{intro}</p>
        )}
      </div>
      {aside && <div className="shrink-0 text-[0.9375rem] text-muted">{aside}</div>}
    </div>
  );
}
