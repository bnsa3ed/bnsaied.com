import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Frame } from "@/components/Cards";
import { allCases, caseStudies, findCase, inProgressCases } from "@/content/projects";
import { hasLocale, type Locale, locales, ui } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((lang) => allCases.map((c) => ({ lang, slug: c.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const c = findCase(slug);
  if (!hasLocale(lang) || !c) return {};
  return {
    title: c.name[lang],
    description: c.tagline[lang],
    alternates: {
      canonical: `/${lang}/work/${slug}`,
      languages: { en: `/en/work/${slug}`, ar: `/ar/work/${slug}` },
    },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-line py-10 md:grid-cols-[12rem_1fr] md:gap-8 md:py-14">
      <h2 className="text-[1.0625rem] font-semibold text-ink">{label}</h2>
      <div className="prose-measure text-[1.125rem] leading-relaxed">{children}</div>
    </section>
  );
}

export default async function CasePage({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang: raw, slug } = await params;
  const c = findCase(slug);
  if (!hasLocale(raw) || !c) notFound();
  const lang: Locale = raw;
  const ar = lang === "ar";
  const list = caseStudies.includes(c) ? caseStudies : inProgressCases.length > 1 ? inProgressCases : caseStudies;
  const i = list.indexOf(c);
  const next = list[(i + 1) % list.length];
  const [cover, ...rest] = c.images ?? [];

  return (
    <article className="pb-20">
      <header className="wrap pt-8 md:pt-12">
        <nav aria-label={ar ? "مسار التنقل" : "Breadcrumb"}>
          <ol className="flex flex-wrap items-center gap-2 text-[0.9375rem] text-muted">
            <li>
              <Link href={`/${lang}#work`} className="inline-flex min-h-11 items-center hover:text-ink">
                {ui.case.back[lang]}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-ink">
              {c.name[lang]}
            </li>
          </ol>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <div>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.9375rem] text-muted">
              <span>
                {c.for[lang]}
                {ar ? "، " : ", "}
                {c.year}
              </span>
              {inProgressCases.includes(c) && (
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full border border-rec-text" />
                  {ui.dev[lang]}
                </span>
              )}
            </p>
            <h1 className="type-narrow mt-2 text-[3rem] font-semibold leading-[0.98] tracking-tight text-balance sm:text-[4.5rem] md:text-[5.5rem]">
              {c.name[lang]}
            </h1>
            <p className="prose-measure mt-6 text-[1.25rem] leading-relaxed md:text-[1.5rem]">{c.tagline[lang]}</p>
          </div>

          {/* The numbers first: what someone skimming should take away */}
          <section aria-labelledby="glance" className="rounded-lg border border-line bg-panel p-5">
            <h2 id="glance" className="text-[0.9375rem] font-semibold">
              {ui.case.glance[lang]}
            </h2>
            <dl className="mt-3 divide-y divide-line">
              {c.stats.map((s) => (
                <div key={s.label.en} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="text-[0.9375rem] text-muted">{s.label[lang]}</dt>
                  <dd dir="ltr" className="text-[1.375rem] font-semibold tracking-tight">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line-strong pt-6 text-[0.9375rem] md:grid-cols-3">
          <div>
            <dt className="text-muted">{ui.case.role[lang]}</dt>
            <dd className="mt-1 font-medium">{c.role[lang]}</dd>
          </div>
          <div>
            <dt className="text-muted">{ui.case.stack[lang]}</dt>
            <dd dir="ltr" className={`mt-1 font-medium ${ar ? "text-end" : ""}`}>
              {c.stack.slice(0, 3).join(", ")}
            </dd>
          </div>
          {c.url && (
            <div>
              <dt className="text-muted">{ar ? "الرابط" : "Live"}</dt>
              <dd className="mt-1">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="inline-flex min-h-11 items-center font-medium underline decoration-line-strong underline-offset-4 hover:decoration-ink"
                >
                  {c.url.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </dd>
            </div>
          )}
        </dl>
      </header>

      <div className="wrap mt-10">
        {cover ? (
          <Frame src={cover.src} alt={cover.alt[lang]} label={c.name[lang]} note={cover.note?.[lang]} priority sizes="(max-width: 1216px) 100vw, 72rem" />
        ) : c.demo ? (
          <div className="rounded-lg bg-ink p-6 text-panel md:p-12">
            <p className="text-[0.875rem] text-[#b9bec8]">{ui.noPreview[lang]}</p>
            <p className="mt-6 text-[1.5rem] md:text-[2.25rem]" lang={lang}>
              <span aria-hidden="true" className="tc me-3 text-[#b9bec8]">
                &gt;
              </span>
              {c.demo.input[lang]}
            </p>
            <p className={`${c.demo.mono ? "tc" : ""} mt-4 text-[1rem] md:text-[1.25rem]`} lang={lang}>
              <span aria-hidden="true" className="me-3 inline-block h-3 w-3 rounded-full bg-rec align-middle" />
              {c.demo.output[lang]}
            </p>
          </div>
        ) : null}
      </div>

      <div className="wrap mt-12">
        <section className="grid gap-3 border-t-2 border-ink py-10 md:grid-cols-[12rem_1fr] md:gap-8 md:py-14">
          <h2 className="text-[1.0625rem] font-semibold">{ui.case.result[lang]}</h2>
          <p className="prose-measure text-[1.375rem] font-medium leading-snug md:text-[1.75rem]">{c.result[lang]}</p>
        </section>
        <Block label={ui.case.problem[lang]}>
          <p>{c.problem[lang]}</p>
        </Block>
        <Block label={ui.case.build[lang]}>
          <ol className="list-decimal space-y-3 ps-5 marker:text-muted">
            {c.build[lang].map((step) => (
              <li key={step} className="ps-2">
                {step}
              </li>
            ))}
          </ol>
        </Block>

        {rest.length > 0 && (
          <div className="grid gap-6 border-t border-line py-10 md:py-14">
            {rest.map((img) => (
              <Frame key={img.src} src={img.src} alt={img.alt[lang]} sizes="(max-width: 1216px) 100vw, 72rem" />
            ))}
          </div>
        )}

        <Block label={ui.case.stack[lang]}>
          <ul dir="ltr" className={`flex flex-wrap gap-2 ${ar ? "justify-end" : ""}`}>
            {c.stack.map((s) => (
              <li key={s} className="rounded-[3px] border border-line-strong bg-panel px-2.5 py-1 text-[0.9375rem]">
                {s}
              </li>
            ))}
          </ul>
        </Block>

        {/* End of page: one clear next step, plus the next project */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-6 rounded-lg bg-ink p-6 text-panel md:p-8">
            <p className="text-[1.5rem] font-semibold leading-snug">{ui.case.ctaTitle[lang]}</p>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex min-h-12 items-center self-start rounded-md bg-panel px-5 font-medium text-ink hover:bg-[#e6e8ec]"
            >
              {ui.case.ctaButton[lang]}
            </Link>
          </div>
          <Link
            href={`/${lang}/work/${next.slug}`}
            className="group flex flex-col justify-between gap-6 rounded-lg border border-line-strong/50 bg-panel p-6 md:p-8"
          >
            <span className="text-[0.9375rem] text-muted">{ui.case.next[lang]}</span>
            <span className="type-narrow text-[2.25rem] font-semibold leading-none tracking-tight underline-offset-8 group-hover:underline md:text-[3rem]">
              {next.name[lang]}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
