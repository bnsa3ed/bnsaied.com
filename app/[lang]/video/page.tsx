import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyEmail, LocalTime } from "@/components/ContactTools";
import { Panel, SectionHead } from "@/components/SectionHead";
import { StickyHireBar } from "@/components/StickyHireBar";
import { VideoPlayer } from "@/components/VideoPlayer";
import { profile } from "@/content/site";
import {
  ai,
  aiClips,
  aiUses,
  type Clip,
  credits,
  experience,
  facts,
  filming,
  showreel,
  skills,
  social,
  socialClips,
  stills,
  videoContact,
  videoPage,
} from "@/content/video";
import { hasLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/video">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: videoPage.metaTitle[lang],
    description: videoPage.metaDescription[lang],
    alternates: { canonical: `/${lang}/video`, languages: { en: "/en/video", ar: "/ar/video" } },
    openGraph: {
      title: `${profile.name[lang]} · ${videoPage.metaTitle[lang]}`,
      description: videoPage.metaDescription[lang],
      images: [{ url: showreel.poster }],
    },
  };
}

const playLabel = { en: "Play", ar: "تشغيل" };

function ClipCard({
  clip,
  lang,
  tone = "light",
  className = "flex",
}: {
  clip: Clip;
  lang: Locale;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <li className={`${className} flex-col`}>
      <VideoPlayer
        src={clip.src}
        poster={clip.poster}
        label={clip.title[lang]}
        duration={clip.duration}
        playLabel={playLabel[lang]}
        errorLabel={videoContact.errorVideo[lang]}
        ratio="9/16"
      />
      <h3 className="mt-3 text-[1rem] font-semibold leading-snug md:text-[1.0625rem]">{clip.title[lang]}</h3>
      <p className={`mt-0.5 text-[0.875rem] leading-snug ${tone === "dark" ? "text-[#c9cdd5]" : "text-muted"}`}>
        {clip.kind[lang]}
      </p>
      <p className={`mt-1 text-[0.8125rem] ${tone === "dark" ? "text-[#9ea4ae]" : "text-muted"}`}>{clip.role[lang]}</p>
    </li>
  );
}

const ghostBtn =
  "inline-flex min-h-12 items-center rounded-full px-6 font-medium text-ink ring-1 ring-line-strong hover:ring-ink";
const solidBtn =
  "inline-flex min-h-12 items-center rounded-full bg-ink px-6 font-medium text-panel hover:bg-[#2b2f37]";

export default async function VideoPortfolio({ params }: PageProps<"/[lang]/video">) {
  const { lang: raw } = await params;
  if (!hasLocale(raw)) notFound();
  const lang: Locale = raw;
  const ar = lang === "ar";
  // Personal channels only; LinkedIn and WhatsApp get their own buttons.
  const profiles = profile.links.filter((l) => l.href && l.label !== "LinkedIn" && l.label !== "WhatsApp");
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(videoContact.subject[lang])}`;
  const firstClips = socialClips.slice(0, 4);
  const moreClips = socialClips.slice(4);

  return (
    <div className="flex flex-col gap-4 pb-24 md:gap-6 md:pb-6">
      {/* Hero: title, then the showreel straight away, then the ways to hire */}
      <section
        id="reel"
        data-section="reel"
        data-nav="reel"
        tabIndex={-1}
        aria-labelledby="video-title"
        className="wrap scroll-mt-20 pt-8 pb-8 outline-none md:pt-16 md:pb-12"
      >
        <p className="flex items-center gap-2 text-[0.9375rem] font-medium text-rec-text">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-rec" />
          {videoPage.eyebrow[lang]}
        </p>
        <h1
          id="video-title"
          className={`mt-3 max-w-4xl font-semibold tracking-tight text-balance text-ink md:mt-4 ${
            ar
              ? "text-[2rem] leading-[1.35] sm:text-[3rem] md:text-[3.5rem]"
              : "type-narrow text-[2.5rem] leading-[0.98] sm:text-[4rem] md:text-[4.75rem]"
          }`}
        >
          {videoPage.title[lang]}
        </h1>

        <div className="mt-6 md:mt-10">
          <VideoPlayer
            src={showreel.src}
            srcSmall={showreel.srcSmall}
            poster={showreel.poster}
            label={`${showreel.title[lang]} · ${showreel.intro[lang]}`}
            duration={showreel.duration}
            playLabel={playLabel[lang]}
            errorLabel={videoContact.errorVideo[lang]}
            ratio="16/9"
            priority
            bleed
          />
          <p className="mt-3 text-[0.875rem] text-muted">
            <span className="font-medium text-ink">{showreel.title[lang]}</span>
            {ar ? "، " : " · "}
            {showreel.intro[lang]}
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12">
          <div>
            <p className="max-w-2xl text-[1.125rem] leading-relaxed text-muted md:text-[1.25rem]">{videoPage.lede[lang]}</p>
            <div id="hire-actions" className="mt-6 flex flex-wrap items-center gap-3">
              <a href={videoContact.cv} download className={solidBtn}>
                {videoPage.ctaCv[lang]}
              </a>
              <a href={videoContact.whatsapp} target="_blank" rel="noopener noreferrer" className={ghostBtn}>
                WhatsApp
              </a>
              <a
                href={mailto}
                className="inline-flex min-h-12 items-center px-3 font-medium text-muted underline decoration-line-strong underline-offset-4 hover:text-ink"
              >
                {videoPage.ctaEmail[lang]}
              </a>
            </div>
            <p className="mt-4 text-[0.9375rem] text-muted">{videoPage.availability[lang]}</p>
          </div>
        </div>

        {/* Clients: one line on phones, a grid from sm up */}
        <div className="mt-10 border-t border-line pt-6 md:mt-14">
          <h2 className="text-[0.9375rem] font-medium text-muted">{showreel.creditsTitle[lang]}</h2>
          <p className="mt-2 text-[1rem] leading-relaxed font-medium text-ink sm:hidden">
            {credits.map((c) => c.name[lang]).join(" · ")}
          </p>
          <ul className="mt-4 hidden gap-x-8 gap-y-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {credits.map((c) => (
              <li key={c.name.en} className="border-t border-line pt-3">
                <p className="font-semibold leading-snug text-ink">{c.name[lang]}</p>
                <p className="mt-0.5 text-[0.875rem] text-muted">{c.what[lang]}</p>
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-10 grid max-w-3xl grid-cols-3 gap-6 border-t border-line pt-6">
          {facts.map((f) => (
            <div key={f.value} className="flex flex-col">
              <dt className="order-last mt-2 text-[0.8125rem] leading-snug text-muted sm:text-[0.9375rem]">{f.label[lang]}</dt>
              <dd
                dir="ltr"
                className={`text-[1.5rem] font-semibold leading-none tracking-tight sm:text-[2rem] ${ar ? "text-end" : ""}`}
              >
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Generative AI: the differentiator, right after the reel */}
      <Panel id="ai" nav="ai" tone="dark">
        <SectionHead id="ai" title={ai.title[lang]} intro={ai.intro[lang]} tone="dark" />
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:gap-x-6">
          {aiClips.map((c) => (
            <ClipCard key={c.id} clip={c} lang={lang} tone="dark" />
          ))}
        </ul>
        <div className="mt-14 border-t border-white/15 pt-8 md:mt-16">
          <h3 className="text-[1.25rem] font-semibold">{ai.toolsTitle[lang]}</h3>
          <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiUses.map((u) => (
              <li key={u.tool} className="flex flex-col">
                <span dir="ltr" className={`font-semibold text-panel ${ar ? "text-end" : ""}`}>
                  {u.tool}
                </span>
                <span className="mt-0.5 text-[0.9375rem] text-[#c9cdd5]">{u.use[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </Panel>

      {/* Social and short-form: four on phones, the rest one tap away */}
      <Panel id="social" nav="social">
        <SectionHead
          id="social"
          title={social.title[lang]}
          intro={social.intro[lang]}
          aside={ar ? `${socialClips.length} فيديوهات` : `${socialClips.length} videos`}
        />
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:gap-x-6">
          {firstClips.map((c) => (
            <ClipCard key={c.id} clip={c} lang={lang} />
          ))}
          {moreClips.map((c) => (
            <ClipCard key={c.id} clip={c} lang={lang} className="hidden sm:flex" />
          ))}
        </ul>
        {moreClips.length > 0 && (
          <details className="group mt-8 sm:hidden">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-center rounded-full font-medium text-ink ring-1 ring-line-strong group-open:hidden [&::-webkit-details-marker]:hidden">
              {videoContact.showMore[lang]}
            </summary>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-10">
              {moreClips.map((c) => (
                <ClipCard key={c.id} clip={c} lang={lang} />
              ))}
            </ul>
          </details>
        )}
      </Panel>

      {/* Filming: events and podcasts */}
      <Panel id="filming" nav="filming">
        <SectionHead id="filming" title={filming.title[lang]} intro={filming.intro[lang]} />
        <VideoPlayer
          src={filming.reel.src}
          poster={filming.reel.poster}
          label={filming.reel.title[lang]}
          duration={filming.reel.duration}
          playLabel={playLabel[lang]}
          errorLabel={videoContact.errorVideo[lang]}
          ratio="16/9"
        />
        <p className="mt-3 text-[0.875rem] text-muted">
          <span className="font-medium text-ink">{filming.reel.title[lang]}</span>
          {ar ? "، " : " · "}
          {filming.reel.kind[lang]}
          {ar ? "، " : " · "}
          {filming.reel.role[lang]}
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-4">
          {stills.map((s) => (
            <li key={s.src}>
              <figure>
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-paper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.alt[lang]} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <figcaption className="mt-2 text-[0.8125rem] leading-snug text-muted sm:text-[0.875rem]">
                  <span className="font-medium text-ink">{s.place[lang]}</span>
                  {ar ? "، " : " · "}
                  {s.caption[lang]}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Panel>

      {/* Skills and experience */}
      <Panel id="about" nav="about">
        <SectionHead id="about" title={ar ? "ماذا أقدّم" : "What I bring"} />
        <ul className="grid gap-4 md:grid-cols-3">
          {skills.map((s) => (
            <li key={s.title.en} className="rounded-2xl bg-paper p-6">
              <h3 className="text-[1.125rem] font-semibold leading-snug">{s.title[lang]}</h3>
              <p className="mt-2 text-[0.9375rem] text-muted">{s.items[lang]}</p>
            </li>
          ))}
        </ul>
        <h3 className="mt-14 text-[1.25rem] font-semibold md:mt-16">{ar ? "الخبرة" : "Experience"}</h3>
        <ol className="mt-4">
          {experience.map((e) => {
            const current = e.dates.endsWith("now");
            return (
              <li
                key={e.role.en + e.dates}
                className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 border-t border-line py-4 sm:grid-cols-[14rem_1fr_auto]"
              >
                <span className="font-semibold text-ink">{e.role[lang]}</span>
                <span className="order-last col-span-2 text-[0.9375rem] text-muted sm:order-none sm:col-span-1">{e.org[lang]}</span>
                <span className="text-[0.875rem] text-muted">
                  {current ? (
                    <>
                      <span dir="ltr" className="tc">
                        {e.dates.replace(" – now", "")}
                      </span>
                      {ar ? " – الآن" : <span className="tc"> – now</span>}
                    </>
                  ) : (
                    <span dir="ltr" className="tc">
                      {e.dates}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ol>
      </Panel>

      {/* Contact */}
      <Panel id="contact" nav="contact">
        <SectionHead id="contact" title={videoContact.title[lang]} intro={videoContact.body[lang]} />
        <a
          href={mailto}
          dir="ltr"
          className="type-narrow inline-block break-all text-[2.25rem] font-semibold leading-none tracking-tight text-ink underline decoration-rec decoration-[3px] underline-offset-[10px] hover:decoration-ink sm:text-[3.5rem] md:text-[4.5rem]"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9375rem] text-muted">
          <CopyEmail email={profile.email} lang={lang} />
          <LocalTime lang={lang} timeZone={profile.timeZone} city={profile.city[lang]} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={videoContact.cv} download className={solidBtn}>
            {videoPage.ctaCv[lang]}
          </a>
          <a href={videoContact.whatsapp} target="_blank" rel="noopener noreferrer" className={ghostBtn}>
            WhatsApp
          </a>
          <a href={videoContact.linkedin} target="_blank" rel="noopener noreferrer me" className={ghostBtn}>
            LinkedIn
          </a>
        </div>

        <div className="mt-12 rounded-2xl bg-paper p-6">
          <h3 className="font-semibold">{videoContact.profilesTitle[lang]}</h3>
          <p className="mt-1 max-w-xl text-[0.9375rem] text-muted">{videoContact.profilesNote[lang]}</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
            {profiles.map((l) => (
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
        </div>

        <p className="mt-8 text-[0.9375rem] text-muted">
          <Link
            href={`/${lang}`}
            className="inline-flex min-h-11 items-center font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
          >
            {videoContact.aiLink[lang]} {ar ? "←" : "→"}
          </Link>
        </p>
      </Panel>

      <StickyHireBar
        heroId="hire-actions"
        contactId="contact"
        cv={videoContact.cv}
        whatsapp={videoContact.whatsapp}
        mailto={mailto}
        labels={{ cv: videoContact.barCv[lang], whatsapp: "WhatsApp", email: videoContact.barEmail[lang] }}
      />
    </div>
  );
}
