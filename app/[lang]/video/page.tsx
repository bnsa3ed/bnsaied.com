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
  aiModels,
  aiUses,
  type Channel,
  channels,
  channelsSection,
  type Clip,
  clients,
  editTools,
  experience,
  facts,
  filming,
  live,
  scale,
  showreel,
  skills,
  socialClips,
  stills,
  videoContact,
  videoPage,
  work,
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

/** PNG app icons show as they are; single-colour SVGs take the text colour. */
function Logo({ src, label, size = 28 }: { src: string; label: string; size?: number }) {
  if (src.endsWith(".svg")) {
    return (
      <span
        role="img"
        aria-label={label}
        className="inline-block shrink-0 bg-current"
        style={{
          width: size,
          height: size,
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={label} width={size} height={size} loading="lazy" className="shrink-0 rounded-[22%]" />
  );
}

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

function PlatformStat({ href, icon, value, label }: { href: string; icon: string; value: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${value}`}
      className="flex min-h-11 items-center gap-2 rounded-full bg-paper px-3 text-[0.875rem] font-semibold text-ink hover:bg-line"
    >
      <Logo src={icon} label="" size={16} />
      <span dir="ltr">
        {value}
      </span>
    </a>
  );
}

function ChannelCard({ c, lang }: { c: Channel; lang: Locale }) {
  const ar = lang === "ar";
  return (
    <li className="flex flex-col rounded-2xl border border-line p-5">
      <a
        href={c.youtube.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/ch -m-1 flex items-center gap-3 rounded-xl p-1"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={c.avatar} alt="" width={56} height={56} loading="lazy" className="h-14 w-14 shrink-0 rounded-full" />
        <div className="min-w-0">
          <h3 className="font-semibold leading-snug text-ink group-hover/ch:underline">{c.name[lang]}</h3>
          <p className="text-[0.875rem] text-muted">{c.host[lang]}</p>
        </div>
      </a>

      <p className="mt-5 flex flex-col">
        <span dir="ltr" className={`text-[2.25rem] font-semibold leading-none tracking-tight ${ar ? "text-end" : ""}`}>
          {c.youtube.subs}
        </span>
        <span className="mt-1 text-[0.875rem] text-muted">{ar ? "مشترك يوتيوب" : "YouTube subscribers"}</span>
      </p>
      <p className="mt-1.5 text-[0.875rem] text-muted">
        {c.youtube.views && (
          <>
            <span dir="ltr">{c.youtube.views}</span>{" "}
            {channelsSection.views[lang]}
            {ar ? "، " : " · "}
          </>
        )}
        <span dir="ltr">{c.youtube.videos}</span>{" "}
        {channelsSection.videos[lang]}
        {c.note && (
          <>
            {ar ? "، " : " · "}
            {c.note[lang]}
          </>
        )}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <PlatformStat href={c.youtube.url} icon="/logos/youtube.svg" value={c.youtube.subs} label="YouTube" />
        {c.instagram && (
          <PlatformStat href={c.instagram.url} icon="/logos/instagram.svg" value={c.instagram.followers} label="Instagram" />
        )}
        {c.tiktok && <PlatformStat href={c.tiktok.url} icon="/logos/tiktok.svg" value={c.tiktok.followers} label="TikTok" />}
        {c.site && (
          <a
            href={c.site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center rounded-full px-3 text-[0.875rem] font-medium text-muted ring-1 ring-line hover:text-ink hover:ring-line-strong"
          >
            {channelsSection.visit[lang]}
          </a>
        )}
      </div>

      <p className="mt-auto border-t border-line pt-3 text-[0.875rem] text-ink [margin-block-start:1.25rem]">
        <span className="text-muted">{ar ? "دوري: " : "My part: "}</span>
        {c.role[lang]}
      </p>
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
  const maxMonth = Math.max(...scale.months.map((m) => m.v));
  const maxSplit = Math.max(...scale.split.map((s) => s.v));
  const sep = ar ? "، " : " · ";

  return (
    <div className="flex flex-col gap-4 pb-24 md:gap-6 md:pb-6">
      {/* Hero: the reach first, then the proof numbers, then the ways to hire */}
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
          className={`mt-3 max-w-5xl font-semibold tracking-tight text-balance text-ink md:mt-4 ${
            ar
              ? "text-[2rem] leading-[1.35] sm:text-[3rem] md:text-[3.5rem]"
              : "type-narrow text-[2.5rem] leading-[0.98] sm:text-[4rem] md:text-[4.75rem]"
          }`}
        >
          {videoPage.title[lang]}
        </h1>
        <p className="mt-6 max-w-3xl text-[1.125rem] leading-relaxed text-muted md:mt-8 md:text-[1.25rem]">
          {videoPage.lede[lang]}
        </p>

        {/* Channel avatars as a quick visual credit line */}
        <a
          href="#channels"
          className="group mt-6 flex w-fit flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-3"
        >
          <span className="flex shrink-0">
            {channels.map((c, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={c.id}
                src={c.avatar}
                alt=""
                width={40}
                height={40}
                className={`h-10 w-10 shrink-0 rounded-full ring-2 ring-paper ${i > 0 ? "-ms-3" : ""}`}
              />
            ))}
          </span>
          <span className="inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-ink underline decoration-line-strong underline-offset-4 group-hover:decoration-ink">
            {ar ? "8 قنوات، شاهدها بنفسك" : "8 channels, see them yourself"}
          </span>
        </a>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:mt-12 md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.value} className="flex flex-col">
              <dt className="order-last mt-2 text-[0.875rem] leading-snug text-muted sm:text-[0.9375rem]">{f.label[lang]}</dt>
              <dd
                dir="ltr"
                className={`text-[2.25rem] font-semibold leading-none tracking-tight sm:text-[3rem] ${ar ? "text-end" : ""}`}
              >
                {f.value}
              </dd>
            </div>
          ))}
        </dl>

        <div id="hire-actions" className="mt-10 flex flex-wrap items-center gap-3">
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
      </section>

      {/* The channels: the validation, each card links to the real thing */}
      <Panel id="channels" nav="channels">
        <SectionHead id="channels" title={channelsSection.title[lang]} intro={channelsSection.intro[lang]} />
        <dl className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {channelsSection.totals.map((t) => (
            <div key={t.value} className="flex flex-col rounded-2xl bg-paper p-5">
              <dt className="order-last mt-1 text-[0.875rem] text-muted">{t.label[lang]}</dt>
              <dd dir="ltr" className={`text-[1.75rem] font-semibold leading-none tracking-tight ${ar ? "text-end" : ""}`}>
                {t.value}
              </dd>
            </div>
          ))}
        </dl>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {channels.map((c) => (
            <ChannelCard key={c.id} c={c} lang={lang} />
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-[0.875rem] text-muted">{channelsSection.asOf[lang]}</p>
      </Panel>

      {/* Showreel and social: the craft, as proof of the volume */}
      <Panel id="work" nav="work">
        <SectionHead
          id="work"
          title={work.title[lang]}
          intro={work.intro[lang]}
          aside={ar ? `${socialClips.length + 1} فيديوهات` : `${socialClips.length + 1} videos`}
        />
        <VideoPlayer
          src={showreel.src}
          srcSmall={showreel.srcSmall}
          poster={showreel.poster}
          label={`${showreel.title[lang]} · ${showreel.intro[lang]}`}
          duration={showreel.duration}
          playLabel={playLabel[lang]}
          errorLabel={videoContact.errorVideo[lang]}
          ratio="16/9"
        />
        <p className="mt-3 text-[0.875rem] text-muted">
          <span className="font-medium text-ink">{showreel.title[lang]}</span>
          {sep}
          {showreel.intro[lang]}
        </p>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:mt-14 md:gap-x-6">
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

        <div className="mt-12 border-t border-line pt-8 md:mt-14">
          <h3 className="text-[1.125rem] font-semibold">{work.otherClients[lang]}</h3>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((c) => (
              <li key={c.name.en} className="flex flex-col">
                <div className="flex h-24 items-center justify-center rounded-2xl bg-paper px-4">
                  {c.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.logo}
                      alt={c.name[lang]}
                      loading="lazy"
                      style={{ height: c.logoH ?? 32 }}
                      className="w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-center text-[1rem] font-semibold leading-tight text-ink">{c.name[lang]}</span>
                  )}
                </div>
                <p className="mt-2 text-[0.8125rem] leading-snug text-muted">
                  {c.logo && <span className="sr-only">{c.name[lang]}: </span>}
                  {c.what[lang]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Panel>

      {/* Volume: numbers straight from the task sheet */}
      <Panel id="scale" nav="scale">
        <SectionHead id="scale" title={scale.title[lang]} intro={scale.intro[lang]} />
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {scale.stats.map((s) => (
            <div key={s.value} className="flex flex-col border-t-2 border-ink pt-4">
              <dt className="order-last mt-2 text-[0.875rem] leading-snug text-muted sm:text-[0.9375rem]">{s.label[lang]}</dt>
              <dd dir="ltr" className={`text-[2rem] font-semibold leading-none tracking-tight sm:text-[2.5rem] ${ar ? "text-end" : ""}`}>
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-14">
          <figure>
            <figcaption className="text-[1.125rem] font-semibold">{scale.chartTitle[lang]}</figcaption>
            <ol
              className="mt-6 flex h-56 items-end gap-1.5 border-b border-line sm:gap-3"
              aria-label={scale.chartTitle[lang]}
            >
              {scale.months.map((m, i) => {
                const last = i === scale.months.length - 1;
                return (
                  <li key={m.m.en} className="flex h-full flex-1 flex-col items-center justify-end">
                    <span dir="ltr" className="tc mb-1 text-[0.75rem] font-semibold text-ink sm:text-[0.8125rem]">
                      {m.v}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-full rounded-t-[4px] ${last ? "bg-rec/45" : "bg-rec"}`}
                      style={{ height: `${(m.v / maxMonth) * 82}%` }}
                    />
                    <span className="sr-only">{m.m[lang]}</span>
                  </li>
                );
              })}
            </ol>
            <div aria-hidden="true" className="mt-2 flex gap-1.5 sm:gap-3">
              {scale.months.map((m) => (
                <span key={m.m.en} className="flex-1 text-center text-[0.6875rem] text-muted sm:text-[0.75rem]">
                  {m.m[lang]}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[0.8125rem] text-muted">{scale.chartNote[lang]}</p>
          </figure>

          <div>
            <h3 className="text-[1.125rem] font-semibold">{scale.splitTitle[lang]}</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {scale.split.map((s) => (
                <li key={s.name.en}>
                  <div className="flex items-baseline justify-between gap-4 text-[0.9375rem]">
                    <span className="text-ink">{s.name[lang]}</span>
                    <span dir="ltr" className="tc font-semibold">
                      {s.v}
                    </span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-paper">
                    <div className="h-2 rounded-full bg-ink" style={{ width: `${(s.v / maxSplit) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-16 text-[1.25rem] font-semibold">{scale.howTitle[lang]}</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scale.how.map((h) => (
            <li key={h.title.en} className="rounded-2xl bg-paper p-6">
              <h4 className="font-semibold leading-snug">{h.title[lang]}</h4>
              <p className="mt-2 text-[0.9375rem] text-muted">{h.body[lang]}</p>
            </li>
          ))}
        </ul>
      </Panel>

      {/* Live seminars and events */}
      <Panel id="live" nav="live">
        <SectionHead id="live" title={live.title[lang]} intro={live.intro[lang]} aside={live.places[lang]} />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-12">
          <figure>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={live.team.src}
                alt={live.team.alt[lang]}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-[0.875rem] leading-snug text-muted">
              <span className="font-medium text-ink">{ar ? "الرياض" : "Riyadh"}</span>
              {sep}
              {live.team.caption[lang]}
            </figcaption>
          </figure>

          <div>
            <h3 className="text-[1.25rem] font-semibold">{live.rigTitle[lang]}</h3>
            <ol className="mt-6 flex flex-col">
              {live.rig.map((r, i) => (
                <li key={r.step.en} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < live.rig.length - 1 && (
                    <span aria-hidden="true" className="absolute top-11 bottom-1 w-px bg-line start-[21px]" />
                  )}
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      i === 2 ? "bg-rec text-white" : "bg-paper text-ink"
                    }`}
                  >
                    <span dir="ltr" className="text-[0.9375rem] font-semibold">
                      {i + 1}
                    </span>
                  </span>
                  <div className="pt-1.5">
                    <p dir={i === 2 || i === 3 ? "ltr" : undefined} className={`font-semibold ${ar && (i === 2 || i === 3) ? "text-end" : ""}`}>
                      {r.step[lang]}
                    </p>
                    <p className="text-[0.9375rem] text-muted">{r.detail[lang]}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-line pt-8">
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
                {sep}
                {filming.reel.kind[lang]}
                {sep}
                {filming.reel.role[lang]}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-10 md:mt-16">
          <h3 className="text-[1.25rem] font-semibold">{live.btsTitle[lang]}</h3>
          <p className="mt-2 max-w-2xl text-[1rem] text-muted">{live.btsIntro[lang]}</p>
          <div className="mt-6 grid gap-3 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-4">
            <div>
              <VideoPlayer
                src={live.btsClip.src}
                poster={live.btsClip.poster}
                label={live.btsClip.title[lang]}
                duration={live.btsClip.duration}
                playLabel={playLabel[lang]}
                errorLabel={videoContact.errorVideo[lang]}
                ratio="16/9"
              />
              <p className="mt-2 text-[0.875rem] text-muted">
                <span className="font-medium text-ink">{live.btsClip.title[lang]}</span>
                {sep}
                {live.btsClip.kind[lang]}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {live.btsPhotos.slice(3).map((p) => (
                <figure key={p.src}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-paper">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.src} alt={p.alt[lang]} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <figcaption className="mt-2 text-[0.8125rem] leading-snug text-muted">{p.caption[lang]}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {live.btsPhotos.slice(0, 3).map((p, i) => (
              <li key={p.src} className={i === 2 ? "col-span-2 md:col-span-1" : ""}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.src} alt={p.alt[lang]} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <figcaption className="mt-2 text-[0.8125rem] leading-snug text-muted">{p.caption[lang]}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mt-14 text-[1.25rem] font-semibold md:mt-16">{ar ? "على الطريق" : "On the road"}</h3>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {stills.map((s) => (
            <li key={s.src}>
              <figure>
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-paper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.alt[lang]} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <figcaption className="mt-2 text-[0.8125rem] leading-snug text-muted sm:text-[0.875rem]">
                  <span className="font-medium text-ink">{s.place[lang]}</span>
                  {sep}
                  {s.caption[lang]}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Panel>

      {/* Generative AI */}
      <Panel id="ai" nav="ai" tone="dark">
        <SectionHead id="ai" title={ai.title[lang]} intro={ai.intro[lang]} tone="dark" />

        <div className="group">
          <h3 className="text-[1.25rem] font-semibold">{ai.filmsTitle[lang]}</h3>
          <p className="mt-1 text-[0.9375rem] text-[#c9cdd5]">{ai.filmsNote[lang]}</p>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:gap-x-6">
            {aiClips.map((c, i) => (
              <ClipCard
                key={c.id}
                clip={c}
                lang={lang}
                tone="dark"
                className={
                  i < 4 ? "flex" : i < 6 ? "hidden sm:flex group-has-[:checked]:flex" : "hidden group-has-[:checked]:flex"
                }
              />
            ))}
          </ul>
          {aiClips.length > 4 && (
            <label className="mt-10 flex min-h-12 cursor-pointer items-center justify-center rounded-full font-medium text-panel ring-1 ring-white/30 hover:ring-white/60 group-has-[:checked]:hidden">
              <input type="checkbox" className="sr-only" />
              <span className="sm:hidden">
                {ar ? `اعرض ${aiClips.length - 4} أفلام أخرى` : `Show ${aiClips.length - 4} more films`}
              </span>
              <span className="hidden sm:inline">
                {ar ? `اعرض ${aiClips.length - 6} أفلام أخرى` : `Show ${aiClips.length - 6} more films`}
              </span>
            </label>
          )}
        </div>


        <ul className="mt-16 mb-14 grid gap-4 border-t border-white/15 pt-10 md:grid-cols-3">
          {ai.routes.map((r) => (
            <li key={r.title.en} className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
              <h3 className="font-semibold">{r.title[lang]}</h3>
              <p className="mt-2 text-[0.9375rem] text-[#c9cdd5]">{r.body[lang]}</p>
            </li>
          ))}
        </ul>

        <h3 className="text-[1.25rem] font-semibold">{ai.toolsTitle[lang]}</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {aiUses.map((u) => (
            <li key={u.tool} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
              {u.logo ? (
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-panel">
                  <Logo src={u.logo} label="" size={u.logo.endsWith(".svg") ? 22 : 40} />
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white/10 font-mono text-[0.875rem] text-panel"
                >
                  {"</>"}
                </span>
              )}
              <div className="min-w-0">
                <p dir="ltr" className={`font-semibold text-panel ${ar ? "text-end" : ""}`}>
                  {u.tool}
                </p>
                <p className="mt-0.5 text-[0.875rem] leading-snug text-[#c9cdd5]">{u.use[lang]}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-14 text-[1.25rem] font-semibold">{ai.modelsTitle[lang]}</h3>
        <p className="mt-1 text-[0.9375rem] text-[#c9cdd5]">{ai.modelsNote[lang]}</p>
        <div className="mt-6 flex flex-col gap-5">
          {aiModels.map((g) => (
            <div key={g.group.en} className="grid gap-3 md:grid-cols-[9rem_1fr] md:items-start">
              <p className="pt-2 text-[0.875rem] font-medium text-[#9ea4ae]">{g.group[lang]}</p>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((m) => (
                  <li
                    key={m.name}
                    dir="ltr"
                    className="flex min-h-10 items-center gap-2 rounded-full bg-white/[0.08] py-1.5 ps-1.5 pe-4 text-[0.9375rem] font-medium text-panel ring-1 ring-white/10"
                  >
                    <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white/10">
                      {m.logo ? (
                        <Logo src={m.logo} label="" size={m.logo.endsWith(".svg") ? 16 : 28} />
                      ) : (
                        <span aria-hidden="true" className="text-[0.75rem] font-semibold">
                          {m.name[0]}
                        </span>
                      )}
                    </span>
                    {m.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

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
        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9375rem] font-medium text-ink">
          {[
            ...editTools,
            { tool: "DJI Ronin", logo: "/logos/dji.svg" },
            { tool: "Sennheiser", logo: "/logos/sennheiser.svg" },
            { tool: "Stream Deck", logo: "/logos/elgato.svg" },
          ].map((t) => (
            <li key={t.tool} className="flex items-center gap-2">
              <Logo src={t.logo} label="" size={20} />
              <span dir="ltr">{t.tool}</span>
            </li>
          ))}
          <li dir="ltr">Sony FX3 · A7S III</li>
          <li dir="ltr">RØDE</li>
          <li dir="ltr">Nanlite</li>
          <li dir="ltr">RØDECaster Video</li>
          <li dir="ltr">Zoom</li>
        </ul>

        <h3 className="mt-14 text-[1.25rem] font-semibold md:mt-16">{ar ? "الخبرة" : "Experience"}</h3>
        <ol className="mt-4">
          {experience.map((e) => {
            const current = e.dates.endsWith("now");
            return (
              <li
                key={e.role.en + e.dates}
                className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 border-t border-line py-4 sm:grid-cols-[16rem_1fr_auto]"
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
