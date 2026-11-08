import type { L } from "@/lib/i18n";

/**
 * Personal details. Fill in the TODOs; a link with an empty href is not rendered.
 */
export const profile = {
  name: { en: "Mohamed Said", ar: "محمد سعيد" } as L,
  // Forwarded to his Gmail by Cloudflare Email Routing (free).
  email: "hello@bnsaied.com",
  // Verified 2026-11-04 against ~/social-engine (brand.json, published post links, YouTube oEmbed).
  links: [
    { label: "Instagram", href: "https://www.instagram.com/mohamedsaid.ai/" },
    { label: "TikTok", href: "https://www.tiktok.com/@mohamedsaid.ai" },
    { label: "YouTube", href: "https://www.youtube.com/@MohammedSaeedAI" },
    { label: "Threads", href: "https://www.threads.com/@mohamedsaid.ai" },
    // TODO(mohamed): not in the social engine. Add if you want them shown.
    { label: "LinkedIn", href: "" },
    { label: "WhatsApp", href: "https://wa.me/971524627678" },
  ],
  handle: "@mohamedsaid.ai",
  timeZone: "Asia/Dubai",
  city: { en: "UAE", ar: "الإمارات" } as L,
  status: {
    en: "Senior video editor at Dalilk Academy. Open to AI product roles and client builds.",
    ar: "مونتير أول في أكاديمية دليلك. متاح لوظائف منتجات الذكاء الاصطناعي ولمشاريع العملاء.",
  } as L,
};

export const hero = {
  past: {
    en: "I edited video for seven years.",
    ar: "عملت في المونتاج سبع سنوات.",
  } as L,
  present: {
    en: "Now I build AI products people use.",
    ar: "والآن أبني منتجات ذكاء اصطناعي يستخدمها الناس.",
  } as L,
  lede: {
    en: "I’ve shipped more than a dozen AI products at Dalilk Academy, plus my own. Arabic-first by default.",
    ar: "أطلقت أكثر من اثني عشر منتجًا بالذكاء الاصطناعي في أكاديمية دليلك، إضافة إلى منتجاتي الخاصة. والعربية أولًا دائمًا.",
  } as L,
  ctaWork: { en: "See the work", ar: "شاهد الأعمال" } as L,
  ctaContact: { en: "Start a project", ar: "ابدأ مشروعًا" } as L,
  ctaAudit: { en: "Book a free audit", ar: "احجز تقييمًا مجانيًا" } as L,
  ctaLearn: { en: "Learn with ArabAI School", ar: "تعلّم مع عرب AI" } as L,
};

/** A real sequence, so it is numbered by year. */
export const story: { year: string; title: L; body: L }[] = [
  {
    year: "2019",
    title: { en: "The edit suite", ar: "غرفة المونتاج" },
    body: {
      en: "Ads, brand films and reels. Seven years of pacing, cutting and deadlines.",
      ar: "إعلانات وأفلام علامات تجارية وريلز. سبع سنوات من الإيقاع والقص والمواعيد.",
    },
  },
  {
    year: "2025",
    title: { en: "Automating my own job", ar: "أتمتة عملي أنا" },
    body: {
      en: "I started automating my own bottlenecks. Each fix freed hours.",
      ar: "بدأت بأتمتة ما يعطّلني أنا، وكل حل وفّر ساعات.",
    },
  },
  {
    year: "2026",
    title: { en: "Products, not scripts", ar: "منتجات، لا سكريبتات" },
    body: {
      en: "The English Guide shipped in April. A dozen more products followed.",
      ar: "أُطلق دليل الإنجليزي في أبريل، وتبعه أكثر من اثني عشر منتجًا.",
    },
  },
  {
    year: "Now",
    title: { en: "Teaching what I learned", ar: "أعلّم ما تعلّمته" },
    body: {
      en: "Teaching on social media and ArabAI School, and moving into AI product work full-time.",
      ar: "أعلّم على السوشيال ميديا وفي «عرب AI»، وأنتقل إلى منتجات الذكاء الاصطناعي بدوام كامل.",
    },
  },
];

export const services: { title: L; body: L; detail: L }[] = [
  {
    title: { en: "AI MVP sprint", ar: "نموذج أولي في أسابيع" },
    body: {
      en: "A working, deployed product in two to three weeks.",
      ar: "منتج يعمل ومنشور خلال أسبوعين إلى ثلاثة.",
    },
    detail: { en: "For founders and new ventures", ar: "للمؤسسين والمشاريع الجديدة" },
  },
  {
    title: { en: "AI tools for your team", ar: "أدوات ذكاء اصطناعي لفريقك" },
    body: {
      en: "Internal tools and agents that remove repetitive work.",
      ar: "أدوات داخلية ووكلاء يزيلون العمل المتكرر.",
    },
    detail: { en: "For growing teams", ar: "للفرق التي تنمو" },
  },
  {
    title: { en: "AI for video and content teams", ar: "ذكاء اصطناعي لفرق الفيديو والمحتوى" },
    body: {
      en: "Footage search and edit automation, from someone who edits.",
      ar: "بحث في الفيديو وأتمتة المونتاج، من شخص يمارس المونتاج.",
    },
    detail: { en: "For media companies and creators", ar: "لشركات الإعلام وصنّاع المحتوى" },
  },
];

export const contact = {
  title: {
    en: "Have a product in mind, or a role to fill?",
    ar: "لديك فكرة منتج، أو وظيفة تبحث لها عن شخص؟",
  } as L,
  body: {
    en: "Tell me what you’re building. I reply within two working days, in English or Arabic.",
    ar: "أخبرني بما تبنيه. أرد خلال يومَي عمل، بالعربية أو الإنجليزية.",
  } as L,
};

/** One line per kind of visitor, so each finds their next step right away. */
export const routes: { question: L; action: L; href: string; external?: boolean }[] = [
  {
    question: { en: "Hiring for an AI product role?", ar: "تبحث عن شخص لوظيفة في منتجات الذكاء الاصطناعي؟" },
    action: { en: "See the work", ar: "شاهد الأعمال" },
    href: "#work",
  },
  {
    question: { en: "Need an AI product or tool built?", ar: "تحتاج منتجًا أو أداة بالذكاء الاصطناعي؟" },
    action: { en: "Start with a free audit", ar: "ابدأ بتقييم مجاني" },
    href: "#audit",
  },
  {
    question: { en: "Want to learn to build with AI?", ar: "تريد أن تتعلم البناء بالذكاء الاصطناعي؟" },
    action: { en: "Join ArabAI School", ar: "انضم إلى عرب AI" },
    href: "https://www.arabaischool.com",
    external: true,
  },
];

/** Small icons of real products, linking to where each one is on the page. */
export const productIcons: { src: string; name: L; href: string }[] = [
  { src: "/icons/arabai.svg", name: { en: "ArabAI School", ar: "عرب AI" }, href: "/work/arabai-school" },
  { src: "/icons/dalilk.svg", name: { en: "Dalilk tools", ar: "أدوات دليلك" }, href: "#shipped" },
  { src: "/icons/oudopedia.png", name: { en: "Oudopedia", ar: "عودوبيديا" }, href: "#oudopedia" },
  { src: "/icons/mypajero.png", name: { en: "MyPajero", ar: "ماي باجيرو" }, href: "#mypajero" },
  { src: "/icons/kize.png", name: { en: "Kize", ar: "Kize" }, href: "#kize" },
];

export const audit = {
  title: { en: "Free 20-minute AI workflow audit", ar: "تقييم مجاني لسير العمل بالذكاء الاصطناعي في ٢٠ دقيقة" } as L,
  body: {
    en: "I’ll find the two or three places where AI saves your team the most time. You keep the notes.",
    ar: "سأحدد مكانين أو ثلاثة يوفّر فيها الذكاء الاصطناعي أكبر وقت لفريقك، والملاحظات لك.",
  } as L,
  cta: { en: "Book a free audit", ar: "احجز تقييمًا مجانيًا" } as L,
  subject: { en: "Free AI workflow audit", ar: "تقييم مجاني لسير العمل" } as L,
};
