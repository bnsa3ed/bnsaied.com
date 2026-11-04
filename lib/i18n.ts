export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export type L = Record<Locale, string>;

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const dir = (lang: Locale) => (lang === "ar" ? "rtl" : "ltr");

/** UI strings that are not tied to a single piece of content. */
export const ui = {
  nav: {
    work: { en: "Work", ar: "الأعمال" },
    lab: { en: "Lab", ar: "المختبر" },
    story: { en: "Story", ar: "القصة" },
    services: { en: "Services", ar: "الخدمات" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  switchLang: { en: "عربي", ar: "English" },
  switchLangLabel: { en: "اقرأ الموقع بالعربية", ar: "Read this site in English" },
  skip: { en: "Skip to content", ar: "تخطَّ إلى المحتوى" },
  sections: {
    work: { en: "Selected work", ar: "أعمال مختارة" },
    shipped: { en: "Also shipped", ar: "منتجات أخرى أطلقتها" },
    building: { en: "Building now", ar: "أبنيه الآن" },
    lab: { en: "Lab", ar: "المختبر" },
    story: { en: "The cut", ar: "القصة" },
    services: { en: "Work with me", ar: "اعمل معي" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  workIntro: {
    en: "Five products, each with the problem it solved and what happened after launch.",
    ar: "خمسة منتجات، لكل منها المشكلة التي حلّها وما حدث بعد إطلاقه.",
  },
  shippedIntro: {
    en: "More tools I designed and built: public products for learners, and internal tools for the content team.",
    ar: "أدوات أخرى صمّمتها وبنيتها: منتجات عامة للمتعلمين، وأدوات داخلية لفريق المحتوى.",
  },
  buildingIntro: {
    en: "Products that work but aren’t public yet: my own apps in testing, and a tool for the content team still rolling out.",
    ar: "منتجات تعمل لكنها لم تُطلق للعموم بعد: تطبيقاتي الخاصة قيد الاختبار، وأداة لفريق المحتوى قيد الإطلاق.",
  },
  labIntro: {
    en: "Experiments, prototypes, and paused ideas. This is where I learn the hard parts.",
    ar: "تجارب ونماذج أولية وأفكار متوقفة. هنا أتعلّم الأجزاء الصعبة.",
  },
  cols: {
    name: { en: "Name", ar: "الاسم" },
    what: { en: "What it does", ar: "ماذا يفعل" },
    result: { en: "Result", ar: "النتيجة" },
    kind: { en: "Type", ar: "النوع" },
  },
  kind: {
    public: { en: "Public", ar: "عام" },
    internal: { en: "Internal", ar: "داخلي" },
    client: { en: "Client", ar: "عميل" },
  },
  beta: { en: "In testing", ar: "قيد الاختبار" },
  dev: { en: "In development", ar: "قيد التطوير" },
  paused: { en: "Paused", ar: "متوقف" },
  visit: { en: "Visit", ar: "زيارة" },
  readCase: { en: "Read the case study", ar: "اقرأ دراسة الحالة" },
  noPreview: {
    en: "Internal tool. No public page.",
    ar: "أداة داخلية، بلا صفحة عامة.",
  },
  monitor: { en: "Source monitor", ar: "شاشة المصدر" },
  timelineCaption: {
    en: "My career as an edit. 2018 to 2025 is compressed and 2026 is zoomed in; dates are approximate. Select a clip to open the project.",
    ar: "مسيرتي كمونتاج. من ٢٠١٨ إلى ٢٠٢٥ مضغوطة و٢٠٢٦ مكبّرة، والتواريخ تقريبية. اختر مقطعًا لتفتح المشروع.",
  },
  tracks: {
    v1: { en: "Video", ar: "فيديو" },
    v2: { en: "Shipped", ar: "منتجات" },
    v3: { en: "Internal", ar: "أدوات" },
    v4: { en: "Own", ar: "خاصة" },
    a1: { en: "Teaching", ar: "تعليم" },
  },
  now: { en: "Now", ar: "الآن" },
  keys: {
    en: "Tip: press J and L to move between sections, like scrubbing a timeline.",
    ar: "تلميح: اضغط J و L للتنقل بين الأقسام، كما تتنقّل في التايم لاين.",
  },
  groups: {
    public: { en: "Public products", ar: "منتجات عامة" },
    publicNote: {
      en: "Free tools for Dalilk’s learners. Each one brings in leads for paid courses.",
      ar: "أدوات مجانية لمتعلّمي دليلك، وكل منها يجلب عملاء محتملين للدورات المدفوعة.",
    },
    internal: { en: "Internal tools and client work", ar: "أدوات داخلية وأعمال للعملاء" },
    internalNote: {
      en: "Tools the content team uses every day, plus work for outside clients.",
      ar: "أدوات يستخدمها فريق المحتوى يوميًا، إضافة إلى أعمال لعملاء من الخارج.",
    },
    more: { en: "More internal tools", ar: "أدوات داخلية أخرى" },
  },
  proofNote: {
    en: "Live numbers from the production databases, November 2026.",
    ar: "أرقام حيّة من قواعد البيانات الفعلية، نوفمبر ٢٠٢٦.",
  },
  proof: [
    { value: "63,560", label: { en: "sign-ups through the referral engine", ar: "مشتركًا عبر نظام الإحالات" }, href: "referral-engine" },
    { value: "4,537", label: { en: "personalized English guides generated", ar: "دليل إنجليزي مخصّص تم توليده" }, href: "english-guide" },
    { value: "293K", label: { en: "YouTube comments sorted by AI", ar: "تعليق يوتيوب صنّفه الذكاء الاصطناعي" }, href: "comment-replies" },
  ],
  forClient: { en: "Client", ar: "العميل" },
  viewProject: { en: "View project", ar: "عرض المشروع" },
  currentSection: { en: "Current section", ar: "القسم الحالي" },
  case: {
    glance: { en: "At a glance", ar: "باختصار" },
    ctaTitle: { en: "Want something like this for your team?", ar: "تريد شيئًا كهذا لفريقك؟" },
    ctaButton: { en: "Get in touch", ar: "تواصل معي" },
    back: { en: "All work", ar: "كل الأعمال" },
    problem: { en: "The problem", ar: "المشكلة" },
    build: { en: "What I built", ar: "ما بنيته" },
    stack: { en: "Stack", ar: "التقنيات" },
    result: { en: "Result", ar: "النتيجة" },
    role: { en: "Role", ar: "الدور" },
    for: { en: "For", ar: "لصالح" },
    next: { en: "Next project", ar: "المشروع التالي" },
  },
} as const;

export const t = (s: L, lang: Locale) => s[lang];
