import { notFound } from "next/navigation";
import { CaseCard, MiniItem, Tile } from "@/components/Cards";
import { CopyEmail, LocalTime } from "@/components/ContactTools";
import { HeroTimeline } from "@/components/HeroTimeline";
import { Panel, SectionHead } from "@/components/SectionHead";
import { building, caseStudies, lab, shipped } from "@/content/projects";
import { audit, contact, hero, productIcons, profile, services, story } from "@/content/site";
import { hasLocale, type Locale, ui } from "@/lib/i18n";

/** Collapsed list for secondary items, so the page shows the best work first. */
function More({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <details className="group mt-10 rounded-2xl bg-paper px-5 py-1 md:px-6">
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
        {label}
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform group-open:rotate-180 motion-reduce:transition-none"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </summary>
      <div className="pb-4">{children}</div>
    </details>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang: raw } = await params;
  if (!hasLocale(raw)) notFound();
  const lang: Locale = raw;
  const ar = lang === "ar";
  const links = profile.links.filter((l) => l.href);

  // Six tiles fill a clean grid; everything else sits behind "more".
  const tiles = shipped.filter((s) => s.image).slice(0, 6);
  const moreTools = shipped.filter((s) => !tiles.includes(s));
  const labTop = lab.slice(0, 6);
  const labRest = lab.slice(6);
  const [featured, ...otherCases] = caseStudies;

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name.en,
    alternateName: profile.name.ar,
    url: "https://bnsaied.com",
    jobTitle: "AI product builder",
    sameAs: [...links.map((l) => l.href), "https://www.arabaischool.com"],
  };

  return (
    <div className="flex flex-col gap-4 pb-4 md:gap-6 md:pb-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />

      {/* Hero: headline, one line, proof, actions */}
      <section id="top" data-section="top" aria-labelledby="top-title" className="wrap pt-14 pb-10 md:pt-24 md:pb-16">
        <h1 id="top-title" className="font-semibold tracking-tight text-balance">
          <span
            className={`type-narrow block text-[2.75rem] leading-[0.98] text-muted sm:text-[4rem] md:text-[5.25rem] lg:text-[6.25rem] ${
              ar ? "font-light leading-[1.25]" : ""
            }`}
          >
            {hero.past[lang]}
          </span>
          <span
            className={`type-wide mt-1 block text-[2.125rem] leading-[1.02] text-ink sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] ${
              ar ? "font-bold leading-[1.3]" : ""
            }`}
          >
            {hero.present[lang]}
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-[1.125rem] leading-relaxed text-muted md:mt-10 md:text-[1.25rem]">
          {hero.lede[lang]}
        </p>

        <ul className="mt-6 flex flex-wrap items-center gap-2" aria-label={ar ? "منتجات بنيتها" : "Products I've built"}>
          {productIcons.map((icon) => (
            <li key={icon.src}>
              <a
                href={icon.href.startsWith("/") ? `/${lang}${icon.href}` : icon.href}
                title={icon.name[lang]}
                className="flex min-h-11 min-w-11 items-center justify-center rounded-[12px] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={icon.src}
                  alt={icon.name[lang]}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-[12px] ring-1 ring-line"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 font-medium text-panel hover:bg-[#2b2f37]"
          >
            {hero.ctaWork[lang]}
          </a>
          <a
            href="#audit"
            className="inline-flex min-h-12 items-center rounded-full px-6 font-medium text-ink ring-1 ring-line-strong hover:ring-ink"
          >
            {hero.ctaAudit[lang]}
          </a>
          <a
            href="https://www.arabaischool.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center px-3 font-medium text-muted underline decoration-line-strong underline-offset-4 hover:text-ink"
          >
            {hero.ctaLearn[lang]}
          </a>
        </div>

        <dl className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-line pt-6 md:mt-20">
          {ui.proof.map((p) => (
            <div key={p.href} className="flex flex-col">
              <dt className="order-last mt-2 text-[0.8125rem] leading-snug text-muted sm:text-[0.9375rem]">{p.label[lang]}</dt>
              <dd
                dir="ltr"
                className={`text-[1.5rem] font-semibold leading-none tracking-tight sm:text-[2rem] ${ar ? "text-end" : ""}`}
              >
                {p.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Selected work */}
      <Panel id="work" nav="work">
        <SectionHead
          id="work"
          title={ui.sections.work[lang]}
          intro={ui.workIntro[lang]}
          aside={ar ? `${caseStudies.length} مشاريع` : `${caseStudies.length} projects`}
        />
        <CaseCard item={featured} lang={lang} featured />
        <div className="mt-16 grid gap-x-10 gap-y-16 md:mt-20 md:grid-cols-2">
          {otherCases.map((c) => (
            <CaseCard key={c.slug} item={c} lang={lang} />
          ))}
        </div>
      </Panel>

      {/* Also shipped */}
      <Panel id="shipped" nav="work">
        <SectionHead
          id="shipped"
          title={ui.sections.shipped[lang]}
          intro={ui.shippedIntro[lang]}
          aside={ar ? `${shipped.length} أدوات` : `${shipped.length} tools`}
        />
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((s) => (
            <Tile key={s.id} item={s} lang={lang} />
          ))}
        </ul>
        {moreTools.length > 0 && (
          <More label={ar ? `${moreTools.length} أدوات داخلية أخرى` : `${moreTools.length} more internal tools`}>
            <ul className="grid gap-x-8 md:grid-cols-2">
              {moreTools.map((s) => (
                <MiniItem key={s.id} item={s} lang={lang} />
              ))}
            </ul>
          </More>
        )}
      </Panel>

      {/* Building now */}
      <Panel id="building" nav="work">
        <SectionHead id="building" title={ui.sections.building[lang]} intro={ui.buildingIntro[lang]} />
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {building.map((b) => (
            <Tile key={b.id} item={b} lang={lang} />
          ))}
        </ul>
      </Panel>

      {/* Lab */}
      <Panel id="lab" nav="lab">
        <SectionHead id="lab" title={ui.sections.lab[lang]} intro={ui.labIntro[lang]} />
        <ul className="grid gap-x-10 md:grid-cols-2">
          {labTop.map((l) => (
            <MiniItem key={l.id} item={l} lang={lang} />
          ))}
        </ul>
        {labRest.length > 0 && (
          <More label={ar ? `${labRest.length} تجارب أخرى` : `${labRest.length} more experiments`}>
            <ul className="grid gap-x-10 md:grid-cols-2">
              {labRest.map((l) => (
                <MiniItem key={l.id} item={l} lang={lang} />
              ))}
            </ul>
          </More>
        )}
      </Panel>

      {/* Story, with the career timeline */}
      <Panel id="story" nav="story">
        <SectionHead id="story" title={ui.sections.story[lang]} />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {story.map((s) => (
            <li key={s.year} className="border-t-2 border-ink pt-4">
              <p className="type-narrow text-[2.25rem] font-semibold leading-none md:text-[2.75rem]">
                {s.year === "Now" ? ui.now[lang] : s.year}
              </p>
              <h3 className="mt-3 text-[1.0625rem] font-semibold">{s.title[lang]}</h3>
              <p className="mt-1 text-[0.9375rem] text-muted">{s.body[lang]}</p>
            </li>
          ))}
        </ol>
        <HeroTimeline lang={lang} />
      </Panel>

      {/* Services */}
      <Panel id="services" nav="services">
        <SectionHead id="services" title={ui.sections.services[lang]} />
        <div
          id="audit"
          className="grid scroll-mt-24 gap-6 rounded-2xl bg-ink p-6 text-panel md:grid-cols-[1fr_auto] md:items-center md:p-10"
        >
          <div>
            <h3 className="text-[1.5rem] font-semibold leading-snug md:text-[1.875rem]">{audit.title[lang]}</h3>
            <p className="mt-2 max-w-xl text-[#c9cdd5]">{audit.body[lang]}</p>
          </div>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(audit.subject[lang])}`}
            className="inline-flex min-h-12 items-center justify-center self-start rounded-full bg-panel px-6 font-medium text-ink hover:bg-[#e6e8ec] md:self-center"
          >
            {audit.cta[lang]}
          </a>
        </div>
        <ul className="mt-4 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <li key={s.title.en} className="rounded-2xl bg-paper p-6">
              <p className="text-[0.8125rem] font-medium text-muted">{s.detail[lang]}</p>
              <h3 className="mt-2 text-[1.25rem] font-semibold leading-snug">{s.title[lang]}</h3>
              <p className="mt-2 text-[0.9375rem] text-muted">{s.body[lang]}</p>
            </li>
          ))}
        </ul>
      </Panel>

      {/* Contact */}
      <Panel id="contact" nav="contact">
        <SectionHead id="contact" title={contact.title[lang]} intro={contact.body[lang]} />
        <a
          href={`mailto:${profile.email}`}
          dir="ltr"
          className="type-narrow inline-block break-all text-[2.25rem] font-semibold leading-none tracking-tight text-ink underline decoration-rec decoration-[3px] underline-offset-[10px] hover:decoration-ink sm:text-[3.5rem] md:text-[4.5rem]"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9375rem] text-muted">
          <CopyEmail email={profile.email} lang={lang} />
          <LocalTime lang={lang} timeZone={profile.timeZone} city={profile.city[lang]} />
        </div>
        {links.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-1">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex min-h-11 items-center font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-6 max-w-xl text-[0.9375rem] text-muted">{profile.status[lang]}</p>
      </Panel>
    </div>
  );
}
