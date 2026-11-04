import Link from "next/link";
import type { L, Locale } from "@/lib/i18n";

/**
 * The career as an edit, kept to a handful of readable clips.
 * Clips are laid out in order rather than to exact dates: 2019–2025 sits in the
 * first 40%, 2026 fills the rest.
 */
type Clip = { label: L; short: L; href: string; from: number; to: number; tone: "v1" | "v2" | "v3" | "a1" };

const tracks: { id: string; name: L; clips: Clip[] }[] = [
  {
    id: "v3",
    name: { en: "Own", ar: "خاصة" },
    clips: [
      { label: { en: "ArabAI School", ar: "عرب AI" }, short: { en: "ArabAI", ar: "عرب AI" }, href: "/work/arabai-school", from: 52, to: 78, tone: "v3" },
      { label: { en: "Oudopedia", ar: "عودوبيديا" }, short: { en: "Oudo", ar: "عودو" }, href: "#oudopedia", from: 78, to: 100, tone: "v3" },
    ],
  },
  {
    id: "v2",
    name: { en: "Shipped", ar: "منتجات" },
    clips: [
      { label: { en: "English Guide", ar: "دليل الإنجليزي" }, short: { en: "Guide", ar: "الدليل" }, href: "/work/english-guide", from: 40, to: 60, tone: "v2" },
      { label: { en: "Referral Engine", ar: "نظام الإحالات" }, short: { en: "Referral", ar: "الإحالات" }, href: "/work/referral-engine", from: 60, to: 80, tone: "v2" },
      { label: { en: "RA Store Kiosk", ar: "كشك RA Store" }, short: { en: "Kiosk", ar: "الكشك" }, href: "/work/ra-store-kiosk", from: 80, to: 100, tone: "v2" },
    ],
  },
  {
    id: "v1",
    name: { en: "Video", ar: "فيديو" },
    clips: [
      { label: { en: "Video editing, still going", ar: "مونتاج، وما زال مستمرًا" }, short: { en: "Video editing", ar: "مونتاج" }, href: "#story", from: 0, to: 100, tone: "v1" },
    ],
  },
  {
    id: "a1",
    name: { en: "Teach", ar: "تعليم" },
    clips: [
      { label: { en: "Teaching AI on social", ar: "أعلّم الذكاء الاصطناعي" }, short: { en: "Teaching", ar: "تعليم" }, href: "#story", from: 32, to: 100, tone: "a1" },
    ],
  },
];

const ruler: { at: number; label: string }[] = [
  { at: 0, label: "2019" },
  { at: 32, label: "2025" },
  { at: 40, label: "2026" },
];

/** On phones 2019–2025 shrinks to a quarter, so the 2026 clips stay readable. */
const mobile = (x: number) => (x <= 40 ? (x * 25) / 40 : 25 + ((x - 40) * 75) / 60);

export function HeroTimeline({ lang }: { lang: Locale }) {
  const ar = lang === "ar";
  return (
    <figure className="mt-12 md:mt-16">
      {/* Editing tools run left to right in every language, so the timeline does too. */}
      <div dir="ltr" className="select-none rounded-2xl bg-paper p-3 sm:p-4">
        <div className="flex">
          <span className="w-11 shrink-0 sm:w-20" aria-hidden="true" />
          <div className="relative h-6 flex-1">
            {ruler.map((r) => (
              <span
                key={r.at}
                className={`tc absolute top-0 left-[calc(var(--lm)*1%)] ps-1.5 text-[0.75rem] text-muted sm:left-[calc(var(--l)*1%)] ${
                  r.label === "2025" ? "hidden sm:block" : ""
                }`}
                style={{ ["--l" as string]: r.at, ["--lm" as string]: mobile(r.at) }}
              >
                <span aria-hidden="true" className="absolute top-0.5 left-0 h-3 w-px bg-line-strong" />
                {r.label}
              </span>
            ))}
            <span className={`absolute top-0 right-1 text-[0.75rem] font-medium text-rec-text ${ar ? "font-arabic" : "tc"}`}>
              {ar ? "الآن" : "Now"}
            </span>
          </div>
        </div>

        <ol className="relative mt-1 flex flex-col gap-1.5">
          {tracks.map((t) => (
            <li key={t.id} className="flex items-stretch">
              <span
                lang={lang}
                className={`flex w-11 shrink-0 items-center text-[0.75rem] text-muted sm:w-20 ${ar ? "font-arabic" : ""}`}
              >
                {t.name[lang]}
              </span>
              <div className="relative h-10 flex-1 sm:h-11">
                {t.clips.map((c) => {
                  const internal = c.href.startsWith("/");
                  const href = internal ? `/${lang}${c.href}` : c.href;
                  const style = {
                    ["--l" as string]: c.from,
                    ["--w" as string]: c.to - c.from,
                    ["--lm" as string]: mobile(c.from),
                    ["--wm" as string]: mobile(c.to) - mobile(c.from),
                  };
                  const cls = `clip ${
                    c.tone === "a1" ? "clip-audio" : `clip-${c.tone}`
                  } absolute inset-y-0 left-[calc(var(--lm)*1%)] flex w-[calc(var(--wm)*1%-3px)] items-center overflow-hidden rounded-md px-1.5 text-[0.75rem] font-medium text-ink sm:left-[calc(var(--l)*1%)] sm:w-[calc(var(--w)*1%-3px)] sm:px-2 sm:text-[0.8125rem]`;
                  const inner = (
                    <span dir={ar ? "rtl" : undefined} lang={lang} className={`truncate ${ar ? "font-arabic" : ""}`}>
                      <span className="sm:hidden">{c.short[lang]}</span>
                      <span className="hidden sm:inline">{c.label[lang]}</span>
                    </span>
                  );
                  return internal ? (
                    <Link key={c.href} href={href} className={cls} style={style} title={c.label[lang]}>
                      {inner}
                    </Link>
                  ) : (
                    <a key={c.href + c.from} href={href} className={cls} style={style} title={c.label[lang]}>
                      {inner}
                    </a>
                  );
                })}
              </div>
            </li>
          ))}
          {/* Playhead at "now" */}
          <span aria-hidden="true" className="pointer-events-none absolute -top-1 bottom-0 right-0 w-[2px] bg-rec" />
        </ol>
      </div>
      <figcaption className="mt-3 text-[0.875rem] text-muted">
        {ar ? "مسيرتي كمونتاج. اختر مقطعًا لتفتح المشروع." : "My career as an edit. Select a clip to open the project."}
      </figcaption>
    </figure>
  );
}
