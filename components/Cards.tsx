import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, LabItem, ShippedItem } from "@/content/projects";
import { type Locale, ui } from "@/lib/i18n";

/** A screenshot with a soft frame. */
export function Frame({
  src,
  alt,
  sizes,
  priority,
  ratio = "aspect-[16/10]",
  note,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  ratio?: string;
  note?: string;
  label?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-[var(--clip-v1)] ring-1 ring-line">
      <div className={`relative ${ratio}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
      {note && <figcaption className="bg-panel px-4 py-2 text-[0.8125rem] text-muted">{note}</figcaption>}
    </figure>
  );
}

export function Status({ status, lang }: { status?: LabItem["status"]; lang: Locale }) {
  if (!status) return null;
  const label = status === "dev" ? ui.dev[lang] : status === "paused" ? ui.paused[lang] : ui.beta[lang];
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-paper px-2.5 py-1 text-[0.75rem] font-medium text-muted">
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${status === "paused" ? "bg-line-strong" : "bg-rec"}`} />
      {label}
    </span>
  );
}

/** Case study card: image, name, one line, one number. */
export function CaseCard({ item, lang, featured }: { item: CaseStudy; lang: Locale; featured?: boolean }) {
  const href = `/${lang}/work/${item.slug}`;
  const cover = item.images?.[0];
  const top = item.stats[0];
  return (
    <article className={featured ? "grid gap-6 md:grid-cols-12 md:items-center md:gap-12" : "flex flex-col"}>
      <Link href={href} tabIndex={-1} aria-hidden="true" className={featured ? "md:col-span-7" : ""}>
        {cover ? (
          <Frame
            src={cover.src}
            alt=""
            note={cover.note?.[lang]}
            sizes={featured ? "(max-width: 768px) 100vw, 44rem" : "(max-width: 768px) 100vw, 36rem"}
          />
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-ink p-8 text-panel">
            <p className="text-xl" lang={lang}>
              {item.demo?.input[lang]}
            </p>
          </div>
        )}
      </Link>
      <div className={featured ? "md:col-span-5" : "mt-5"}>
        <p className="text-[0.875rem] text-muted">{item.for[lang]}</p>
        <h3
          className={`mt-1 font-semibold leading-tight tracking-tight ${
            featured ? "text-[1.875rem] md:text-[2.5rem]" : "text-[1.5rem]"
          }`}
        >
          <Link href={href} className="underline-offset-[6px] hover:underline">
            {item.name[lang]}
          </Link>
        </h3>
        <p className="mt-2 text-[1.0625rem] text-muted">{item.tagline[lang]}</p>
        {top && (
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
            <span dir="ltr" className="text-[1.5rem] font-semibold tracking-tight">
              {top.value}
            </span>
            <span className="text-[0.9375rem] text-muted">{top.label[lang]}</span>
          </p>
        )}
        <Link
          href={href}
          className="mt-3 inline-flex min-h-11 items-center font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
        >
          {ui.readCase[lang]}
          <span className="sr-only">: {item.name[lang]}</span>
        </Link>
      </div>
    </article>
  );
}

/** Small product tile: thumbnail, name, one line. */
export function Tile({ item, lang, level = 3 }: { item: ShippedItem | LabItem; lang: Locale; level?: 3 | 4 }) {
  const H = level === 3 ? "h3" : "h4";
  const caseHref = "caseSlug" in item && item.caseSlug ? `/${lang}/work/${item.caseSlug}` : undefined;
  const href = caseHref ?? item.url;
  const external = !caseHref && !!item.url;
  const status = "status" in item ? item.status : undefined;
  const kind = "kind" in item ? ui.kind[item.kind][lang] : undefined;

  const body = (
    <>
      {item.image && (
        <Frame
          src={item.image}
          alt={lang === "ar" ? `لقطة من ${item.name.ar}` : `Screenshot of ${item.name.en}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22rem"
        />
      )}
      <div className="mt-4 flex items-center justify-between gap-3">
        <H className="text-[1.125rem] font-semibold leading-snug">{item.name[lang]}</H>
        {status ? (
          <Status status={status} lang={lang} />
        ) : kind ? (
          <span className="shrink-0 text-[0.8125rem] text-muted">{kind}</span>
        ) : null}
      </div>
      <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{item.short[lang]}</p>
    </>
  );

  return (
    <li id={item.id} className="scroll-mt-24">
      {href ? (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="block rounded-2xl outline-offset-4 [&_h3]:underline-offset-4 hover:[&_h3]:underline [&_h4]:underline-offset-4 hover:[&_h4]:underline"
        >
          {body}
          {external && <span className="sr-only">{lang === "ar" ? " (يفتح في نافذة جديدة)" : " (opens in a new tab)"}</span>}
        </a>
      ) : (
        body
      )}
    </li>
  );
}

/** Text-only row for secondary items. */
export function MiniItem({ item, lang, level = 3 }: { item: ShippedItem | LabItem; lang: Locale; level?: 3 | 4 }) {
  const H = level === 3 ? "h3" : "h4";
  const status = "status" in item ? item.status : undefined;
  return (
    <li id={item.id} className="scroll-mt-24 border-t border-line py-4">
      <div className="flex items-center justify-between gap-3">
        <H className="text-[1rem] font-semibold">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line-strong underline-offset-4 hover:decoration-ink"
            >
              {item.name[lang]}
            </a>
          ) : (
            item.name[lang]
          )}
        </H>
        <Status status={status} lang={lang} />
      </div>
      <p className="mt-0.5 text-[0.9375rem] text-muted">{item.short[lang]}</p>
    </li>
  );
}
