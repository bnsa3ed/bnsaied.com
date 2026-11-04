import type { L } from "@/lib/i18n";

export type Track = "v2" | "v3" | "v4";

/** Months since Jan 2025, used to place clips on the hero timeline. Approximate. */
type Span = { track: Track; from: number; to: number };

export type CaseStudy = {
  slug: string;
  name: L;
  tagline: L;
  metric: L;
  year: string;
  for: L;
  role: L;
  url?: string;
  /** First image is the cover. */
  images?: { src: string; alt: L; note?: L }[];
  stats: { value: string; label: L }[];
  /** Text-only demo for tools with no public page. */
  demo?: { input: L; output: L; mono?: boolean };
  problem: L;
  build: { en: string[]; ar: string[] };
  stack: string[];
  result: L;
  clip: Span;
};

export type ShippedItem = {
  id: string;
  name: L;
  /** One line, about ten words, for cards. */
  short: L;
  what: L;
  kind: "public" | "internal" | "client";
  url?: string;
  image?: string;
  client?: string;
  clip?: Span;
};

export type LabItem = {
  id: string;
  name: L;
  short: L;
  what: L;
  status?: "beta" | "dev" | "paused";
  caseSlug?: string;
  url?: string;
  image?: string;
  stack?: string;
  clip?: Span;
};

const DALILK: L = { en: "Dalilk Academy", ar: "أكاديمية دليلك" };

export const caseStudies: CaseStudy[] = [
  {
    slug: "english-guide",
    name: { en: "Personalized English Guide", ar: "دليل الإنجليزي الشخصي" },
    tagline: {
      en: "A custom 15–28 page English guide, written for your job and delivered in minutes.",
      ar: "دليل إنجليزي مخصّص من ١٥ إلى ٢٨ صفحة، مكتوب لوظيفتك ويصلك خلال دقائق.",
    },
    metric: {
      en: "4,500+ personalized guides since April. A key driver of course sales.",
      ar: "أكثر من ٤٥٠٠ دليل مخصّص منذ أبريل، وأحد أهم محرّكات مبيعات الدورات.",
    },
    year: "2026",
    for: DALILK,
    role: {
      en: "Product, design, full build",
      ar: "المنتج والتصميم والبناء الكامل",
    },
    images: [
      { src: "/work/guide-spread.webp", alt: { en: "Cover and two inside pages of a generated guide", ar: "الغلاف وصفحتان من دليل مولَّد" } },
      { src: "/work/guide.webp", alt: { en: "Cover of a guide generated for an HR specialist in banking", ar: "غلاف دليل مولَّد لأخصائية موارد بشرية في البنوك" } },
    ],
    stats: [
      { value: "4,537", label: { en: "guides generated", ar: "دليلًا مولَّدًا" } },
      { value: "754", label: { en: "in the busiest week", ar: "في أكثر الأسابيع نشاطًا" } },
      { value: "15–28", label: { en: "pages, each one personal", ar: "صفحة، كلها مخصّصة" } },
    ],
    problem: {
      en: "Dalilk needed a free tool that proves its value before anyone pays for a course. A generic PDF download gets opened once and forgotten. The guide had to feel like it was written for one person: their role, their industry, their level, and what they struggle with.",
      ar: "احتاجت دليلك إلى أداة مجانية تُثبت قيمتها قبل أن يدفع أحد ثمن دورة. ملف PDF عام يُفتح مرة ويُنسى. كان على الدليل أن يبدو مكتوبًا لشخص واحد: لوظيفته وقطاعه ومستواه وما يواجهه من صعوبات.",
    },
    build: {
      en: [
        "A short intake form: name, role, industry, English level, pain points.",
        "Four content blocks generated in parallel, so the wait stays short.",
        "A quality pass that checks every block and fixes errors before anything is rendered.",
        "Blocks assembled into a branded template and rendered to PDF with headless Chrome.",
        "The file is stored, a signed link is emailed, and a feedback survey follows 14 days later.",
      ],
      ar: [
        "نموذج قصير: الاسم والوظيفة والقطاع ومستوى الإنجليزية ونقاط الصعوبة.",
        "أربعة أقسام محتوى تُولَّد بالتوازي حتى يبقى الانتظار قصيرًا.",
        "مرحلة جودة تراجع كل قسم وتصحّح الأخطاء قبل إخراج أي شيء.",
        "تجميع الأقسام في قالب بهوية الشركة وتحويله إلى PDF عبر متصفح Chrome بلا واجهة.",
        "حفظ الملف وإرسال رابط آمن بالبريد، ثم استبيان رأي بعد ١٤ يومًا.",
      ],
    },
    stack: ["Next.js", "Hono on Cloudflare Workers", "Gemini", "Headless Chrome", "Supabase", "PostHog"],
    result: {
      en: "4,537 personalized guides generated since launch in April 2026, around 150 a week on average, with a peak of 754 in a single campaign week. Dalilk cites it as a significant driver of new course sales, and it doubles as the top of their sales funnel.",
      ar: "٤٥٣٧ دليلًا مخصّصًا منذ الإطلاق في أبريل ٢٠٢٦، بمتوسط نحو ١٥٠ أسبوعيًا، وذروة بلغت ٧٥٤ في أسبوع حملة واحد. وتعتبره دليلك من أهم محرّكات مبيعات الدورات الجديدة، فهو أيضًا بوابة الدخول إلى مسار المبيعات.",
    },
    clip: { track: "v2", from: 15, to: 16.8 },
  },
  {
    slug: "referral-engine",
    name: { en: "Viral Referral Engine", ar: "نظام الإحالات" },
    tagline: {
      en: "Share a link, climb a live leaderboard, win a free course.",
      ar: "شارك رابطك، تقدّم في لوحة الصدارة، واربح دورة مجانية.",
    },
    metric: {
      en: "114,898 link clicks and 63,560 sign-ups. 30 free seats won.",
      ar: "١١٤٬٨٩٨ نقرة على الروابط و٦٣٬٥٦٠ مشتركًا، و٣٠ مقعدًا مجانيًا فاز بها المشاركون.",
    },
    year: "2026",
    for: DALILK,
    role: { en: "Product, design, full build", ar: "المنتج والتصميم والبناء الكامل" },
    url: "https://referral.dalilklabs.com",
    images: [
      { src: "/work/referral.webp", alt: { en: "Referral page with live counters", ar: "صفحة الإحالات مع العدّادات المباشرة" } },
    ],
    stats: [
      { value: "114,898", label: { en: "clicks on shared links", ar: "نقرة على الروابط" } },
      { value: "63,560", label: { en: "sign-ups", ar: "مشتركًا" } },
      { value: "30", label: { en: "free seats won", ar: "مقعدًا مجانيًا" } },
    ],
    problem: {
      en: "Free live masterclasses grow by word of mouth, and in the Gulf that means WhatsApp. Any sign-up form longer than one field loses people. The team needed sharing to feel like a game, without opening the door to fake clicks.",
      ar: "الماستر كلاس المجانية تنمو بالتوصية، وفي الخليج هذا يعني واتساب. أي نموذج تسجيل أطول من خانة واحدة يُفقدك الناس. احتاج الفريق أن تبدو المشاركة كلعبة، دون أن تفتح الباب للنقرات الوهمية.",
    },
    build: {
      en: [
        "Invite links that already carry the person's phone number, so sign-up is just a name and one tap.",
        "A personal share link with a live click counter.",
        "A public leaderboard that ranks sharers in real time.",
        "Device fingerprinting and rate limits to stop click farming.",
      ],
      ar: [
        "روابط دعوة تحمل رقم الهاتف مسبقًا، فالتسجيل مجرد اسم وضغطة واحدة.",
        "رابط مشاركة شخصي مع عدّاد نقرات مباشر.",
        "لوحة صدارة عامة ترتّب المشاركين لحظيًا.",
        "بصمة الجهاز وحدود الطلبات لمنع النقرات المزيّفة.",
      ],
    },
    stack: ["Next.js", "Supabase", "FingerprintJS", "libphonenumber", "Netlify"],
    result: {
      en: "114,898 clicks on shared links and 63,560 sign-ups across live masterclass campaigns, with 30 people winning a free course seat so far. The latest masterclass alone had 3,662 participants. Traffic peaked at about 1.6 million API requests a month.",
      ar: "١١٤٬٨٩٨ نقرة على الروابط المشتركة و٦٣٬٥٦٠ مشتركًا عبر حملات الماستر كلاس المباشرة، وفاز ٣٠ شخصًا بمقعد مجاني حتى الآن. وآخر ماستر كلاس وحده ضمّ ٣٦٦٢ مشاركًا. وبلغت الذروة قرابة ١٫٦ مليون طلب API شهريًا.",
    },
    clip: { track: "v2", from: 16.8, to: 18.2 },
  },
  {
    slug: "ra-store-kiosk",
    name: { en: "RA Store Avatar Kiosk", ar: "أفاتار RA Store التفاعلي" },
    tagline: {
      en: "A live avatar that greets mall visitors and understands how people in the Gulf actually speak.",
      ar: "أفاتار تفاعلي يستقبل زوّار المول ويفهم الناس في الخليج كما يتكلمون فعلًا.",
    },
    metric: {
      en: "33% fewer recognition errors than ElevenLabs in real lobby noise.",
      ar: "أخطاء تعرّف أقل بنسبة ٣٣٪ من ElevenLabs في ضجيج البهو الحقيقي.",
    },
    year: "2026",
    for: { en: "RA Store, UAE", ar: "RA Store، الإمارات" },
    role: {
      en: "Speech pipeline, model evaluation, avatar build",
      ar: "مسار الصوت، وتقييم النماذج، وبناء الأفاتار",
    },
    images: [
      {
        src: "/work/kiosk-mesh.webp",
        alt: {
          en: "The avatar’s head mesh from three angles, rigged for real-time facial animation",
          ar: "مجسّم رأس الأفاتار من ثلاث زوايا، مجهّز لتحريك الوجه لحظيًا",
        },
      },
    ],
    stats: [
      { value: "33%", label: { en: "fewer errors than ElevenLabs", ar: "أخطاء أقل من ElevenLabs" } },
      { value: "14/14", label: { en: "voice score in blind tests", ar: "تقييم الصوت في اختبار أعمى" } },
      { value: "0", label: { en: "cloud calls, fully offline", ar: "اتصال سحابي، يعمل محليًا" } },
    ],
    problem: {
      en: "A mall lobby is the worst place to listen. Visitors switch between Gulf, Levantine, Egyptian, and Sudanese Arabic and English, often mid-sentence, over echo and crowd noise. Cloud speech services mishear them, transliterate English words into Arabic script, and add a network round-trip to every answer.",
      ar: "بهو المول أسوأ مكان للاستماع. الزوّار ينتقلون بين الخليجية والشامية والمصرية والسودانية والإنجليزية، وغالبًا في الجملة نفسها، وسط الصدى وضجيج الحشود. خدمات التعرّف السحابية تخطئ في فهمهم، وتكتب الكلمات الإنجليزية بحروف عربية، وتضيف رحلة عبر الشبكة لكل إجابة.",
    },
    build: {
      en: [
        "An evaluation harness that measures what breaks a kiosk, not just word error rate: code-switching, English kept in Latin script, and language-ID stability.",
        "Five test sets, including recordings from the kiosk itself and a simulated lobby with reverb, crowd babble, and far-field audio.",
        "A local speech model tuned for these dialects, compared against ElevenLabs Scribe with significance testing on every set.",
        "A natural Emirati voice, chosen by blind listening tests after every automatic metric picked the wrong system.",
        "A MetaHuman avatar built from a single photo: 874-bone facial rig, ARKit blendshape mapping, and LiveLink for real-time animation.",
      ],
      ar: [
        "منظومة تقييم تقيس ما يُفشل الكشك فعلًا، لا معدّل الخطأ وحده: التنقل بين اللغات، وبقاء الإنجليزية بحروف لاتينية، وثبات تحديد اللغة.",
        "خمس مجموعات اختبار، منها تسجيلات من الكشك نفسه وبهو محاكى بالصدى وضجيج الحشود والميكروفون البعيد.",
        "نموذج تعرّف صوتي محلي مضبوط لهذه اللهجات، مقارن بـ ElevenLabs Scribe مع اختبار دلالة إحصائية لكل مجموعة.",
        "صوت إماراتي طبيعي اختير باختبارات استماع عمياء، بعدما رجّحت كل المقاييس الآلية النظام الخطأ.",
        "أفاتار MetaHuman مبني من صورة واحدة: هيكل وجه من ٨٧٤ عظمة، وربط تعابير ARKit، وLiveLink للتحريك اللحظي.",
      ],
    },
    stack: ["Local speech recognition", "Emirati text-to-speech", "Unreal Engine 5 MetaHuman", "LiveLink", "Python evaluation harness"],
    result: {
      en: "The local model beat ElevenLabs Scribe on three of five test sets and tied the other two, with no losses. In simulated lobby noise it made 33% fewer errors (0.627 vs 0.936 word error rate). In blind listening, the chosen voice scored 14 out of 14 against ElevenLabs' 7. Everything runs on the kiosk itself, with no per-request API cost.",
      ar: "تفوّق النموذج المحلي على ElevenLabs Scribe في ثلاث من خمس مجموعات اختبار وتعادل في الاثنتين الباقيتين دون أي خسارة. وفي ضجيج البهو المحاكى ارتكب أخطاء أقل بنسبة ٣٣٪ (معدّل خطأ ٠٫٦٢٧ مقابل ٠٫٩٣٦). وفي الاستماع الأعمى حصل الصوت المختار على ١٤ من ١٤ مقابل ٧ لـ ElevenLabs. وكل شيء يعمل على الكشك نفسه، دون تكلفة API لكل طلب.",
    },
    clip: { track: "v2", from: 19.2, to: 20.8 },
  },
  {
    slug: "comment-replies",
    name: { en: "AI Comment Replies", ar: "الردود الذكية على التعليقات" },
    tagline: {
      en: "Every YouTube comment arrives sorted, with a fact-checked reply in the brand’s own voice.",
      ar: "كل تعليق على يوتيوب يصل مصنّفًا، ومعه رد بصوت العلامة التجارية تم التحقق من معلوماته.",
    },
    metric: {
      en: "293K+ comments across 6 channels. 6,905 replies drafted, every one approved by a person.",
      ar: "أكثر من ٢٩٣ ألف تعليق عبر ٦ قنوات، و٦٩٠٥ ردود مقترحة، لا يُرسل أي منها دون موافقة شخص.",
    },
    year: "2026",
    for: DALILK,
    role: { en: "Product, design, full build", ar: "المنتج والتصميم والبناء الكامل" },
    url: "https://replies.dalilklabs.com",
    images: [
      {
        src: "/work/replies.webp",
        alt: { en: "Review inbox: comments sorted by channel and urgency, with a suggested reply", ar: "صندوق المراجعة: تعليقات مصنّفة حسب القناة والأولوية مع رد مقترح" },
      },
    ],
    stats: [
      { value: "293K+", label: { en: "comments collected", ar: "تعليق مجمّع" } },
      { value: "6,905", label: { en: "replies drafted", ar: "ردًا مقترحًا" } },
      { value: "6", label: { en: "YouTube channels", ar: "قنوات يوتيوب" } },
    ],
    demo: {
      input: {
        en: "Is the IELTS course still open for enrollment?",
        ar: "هل التسجيل في دورة الآيلتس لسا مفتوح؟",
      },
      output: {
        en: "Sorted as an enrollment question. Reply drafted, 2 facts checked against approved sources.",
        ar: "صُنّف كسؤال عن التسجيل. تمت صياغة رد والتحقق من معلومتين من المصادر المعتمدة.",
      },
    },
    problem: {
      en: "Dalilk runs six YouTube channels. Comments pile up faster than the team can answer, and a plain AI reply can invent a price or a date. One wrong fact in public costs more than no reply at all.",
      ar: "تدير دليلك ست قنوات على يوتيوب. التعليقات تتراكم أسرع من قدرة الفريق على الرد، والرد الآلي العادي قد يخترع سعرًا أو موعدًا. ومعلومة خاطئة واحدة أمام الجمهور أسوأ من عدم الرد.",
    },
    build: {
      en: [
        "A worker collects new comments and transcribes each video with an in-house speech model.",
        "Comments are sorted into categories: question, complaint, praise, spam.",
        "A draft reply is written in the brand's voice, then a separate check verifies every fact against approved sources.",
        "The team reviews in an Arabic-first inbox and sends with one click through the YouTube API.",
      ],
      ar: [
        "عامل يجمع التعليقات الجديدة ويفرّغ صوت كل فيديو بنموذج داخلي.",
        "تُصنَّف التعليقات: سؤال، شكوى، مدح، سبام.",
        "يُكتب رد بصوت العلامة، ثم يتحقق فحص منفصل من كل معلومة مقابل المصادر المعتمدة.",
        "يراجع الفريق في صندوق عربي أولًا ويرسل بضغطة واحدة عبر YouTube API.",
      ],
    },
    stack: ["Python", "Supabase + RLS", "Next.js", "TanStack Query", "YouTube Data API"],
    result: {
      en: "Since going live in late September 2026: 293,464 comments collected, 7,440 videos transcribed into a 35,000-item knowledge base, and 6,905 replies drafted for a 21-person team. 229 replies have been approved and sent since October 1. Nothing goes out without a person approving it.",
      ar: "منذ الإطلاق في أواخر سبتمبر ٢٠٢٦: جمع ٢٩٣٬٤٦٤ تعليقًا، وتفريغ ٧٤٤٠ فيديو في قاعدة معرفة من ٣٥ ألف عنصر، وصياغة ٦٩٠٥ ردود لفريق من ٢١ شخصًا. تمت الموافقة على ٢٢٩ ردًا وإرسالها منذ ١ أكتوبر، ولا يخرج أي رد دون موافقة شخص.",
    },
    clip: { track: "v3", from: 19.4, to: 21 },
  },
  {
    slug: "arabai-school",
    name: { en: "ArabAI School", ar: "عرب AI" },
    tagline: {
      en: "An Arabic course that teaches non-programmers to build and sell a real AI product.",
      ar: "دورة عربية تعلّم غير المبرمجين بناء منتج ذكاء اصطناعي حقيقي وبيعه.",
    },
    metric: {
      en: "100+ learners enrolled in the free first unit.",
      ar: "أكثر من ١٠٠ متعلّم سجّلوا في الوحدة المجانية الأولى.",
    },
    year: "2026",
    for: { en: "My own product", ar: "منتجي الخاص" },
    role: {
      en: "Founder, instructor, designer, developer",
      ar: "المؤسس والمدرّب والمصمم والمطوّر",
    },
    url: "https://www.arabaischool.com",
    images: [
      { src: "/work/arabai.webp", alt: { en: "ArabAI School landing page", ar: "صفحة هبوط عرب AI" } },
    ],
    stats: [
      { value: "98", label: { en: "lessons in 16 units", ar: "درسًا في ١٦ وحدة" } },
      { value: "100+", label: { en: "learners enrolled", ar: "متعلّم مسجّل" } },
      { value: "3", label: { en: "real projects built", ar: "مشاريع حقيقية" } },
    ],
    problem: {
      en: "Most Arabic AI content shows off tools. Very little of it takes someone from an idea to a product they can publish and charge for. And almost nothing covers right-to-left layout, security before launch, or finding a first client.",
      ar: "معظم المحتوى العربي عن الذكاء الاصطناعي يستعرض الأدوات. القليل جدًا يأخذك من فكرة إلى منتج تنشره وتبيعه. ولا يكاد شيء يغطي الاتجاه من اليمين لليسار، أو الأمان قبل الإطلاق، أو الوصول إلى أول عميل.",
    },
    build: {
      en: [
        "A course of 16 units and 98 lessons, built around three real projects: a QR menu, a booking app with subscriptions, and an inventory dashboard.",
        "An Arabic-first landing page with a free first unit and early-bird pricing.",
        "A shoot board app that sorts all 98 scripts by camera setup, so the whole course was filmed in five setups instead of 98.",
      ],
      ar: [
        "دورة من ١٦ وحدة و٩٨ درسًا مبنية حول ثلاثة مشاريع حقيقية: منيو QR، وتطبيق حجوزات باشتراكات، ولوحة مخزون.",
        "صفحة هبوط عربية أولًا مع وحدة أولى مجانية وسعر للمشتركين الأوائل.",
        "تطبيق «غرفة التصوير» يرتّب السكريبتات الـ٩٨ حسب إعداد الكاميرا، فصُوّرت الدورة كاملة في خمسة إعدادات بدل ٩٨.",
      ],
    },
    stack: ["Next.js", "MDX", "Vercel", "Lovable (taught)"],
    result: {
      en: "More than 100 learners have enrolled in the free unit. The paid course is open at an early-bird price, and the first paid cohort is my current focus.",
      ar: "سجّل أكثر من ١٠٠ متعلّم في الوحدة المجانية. الدورة المدفوعة متاحة بسعر المشتركين الأوائل، وأول دفعة مدفوعة هي تركيزي الآن.",
    },
    clip: { track: "v4", from: 19, to: 21.3 },
  },
];

/** Case studies for work still in development: they get a page but are not featured. */
export const inProgressCases: CaseStudy[] = [
  {
    slug: "broll-library",
    name: { en: "B-roll Library", ar: "مكتبة البي رول" },
    tagline: {
      en: "Type what you need in Arabic or English, get the exact second it happens.",
      ar: "اكتب ما تحتاجه بالعربية أو الإنجليزية، واحصل على الثانية التي يحدث فيها.",
    },
    metric: {
      en: "6,778 clips catalogued in Arabic and English. Moment-level AI indexing is rolling out.",
      ar: "٦٧٧٨ مقطعًا مفهرسًا بالعربية والإنجليزية، والفهرسة الذكية على مستوى اللحظة قيد الإطلاق.",
    },
    year: "2026",
    for: DALILK,
    role: { en: "Product, design, full build", ar: "المنتج والتصميم والبناء الكامل" },
    images: [
      {
        src: "/work/broll.webp",
        alt: {
          en: "B-roll Library search: an Arabic query returns matching clips with the exact second highlighted",
          ar: "البحث في مكتبة البي رول: استعلام عربي يعرض المقاطع المطابقة مع تحديد الثانية بالضبط",
        },
        note: { en: "Interface preview with sample data", ar: "معاينة للواجهة ببيانات تجريبية" },
      },
    ],
    stats: [
      { value: "6,778", label: { en: "clips catalogued", ar: "مقطعًا مفهرسًا" } },
      { value: "2", label: { en: "languages: Arabic and English", ar: "لغتان: العربية والإنجليزية" } },
      { value: "0", label: { en: "API cost per clip", ar: "تكلفة API لكل مقطع" } },
    ],
    demo: {
      input: { en: "abdulrahman drinking coffee", ar: "عبدالرحمن يشرب قهوة" },
      output: { en: "BROLL-1842 @ 01:01", ar: "BROLL-1842 @ 01:01" },
      mono: true,
    },
    problem: {
      en: "I’m one of the editors who needed this. Our B-roll lived in thousands of Drive files, tagged by hand in Notion at the file level. Finding a five-second shot of one person doing one thing meant scrubbing through footage. That’s time taken from the actual edit.",
      ar: "أنا أحد المونتيرين الذين احتاجوا هذه الأداة. كانت لقطات البي رول في آلاف الملفات على Drive، موسومة يدويًا في Notion على مستوى الملف. إيجاد لقطة من خمس ثوانٍ لشخص يفعل شيئًا محددًا كان يعني تقليب الفيديو يدويًا، وهذا وقت يُقتطع من المونتاج نفسه.",
    },
    build: {
      en: [
        "A worker on our Mac Studio pulls footage from Drive and splits it into scenes.",
        "Each scene gets a speech transcript, recognized team faces, a visual caption, and Arabic and English vector embeddings.",
        "Hybrid search mixes Arabic full-text with semantic vectors, so slang and synonyms still match.",
        "The web app plays from the matched second, loops it, and copies a clip reference editors can paste.",
        "It's also exposed as an MCP server, so AI agents can search footage too.",
      ],
      ar: [
        "عامل على جهاز Mac Studio يسحب الفيديو من Drive ويقسّمه إلى مشاهد.",
        "كل مشهد يحصل على تفريغ صوتي، وتعرّف على وجوه الفريق، ووصف بصري، وتمثيلات دلالية بالعربية والإنجليزية.",
        "بحث هجين يجمع البحث النصي العربي مع البحث الدلالي، فتتطابق العامية والمرادفات أيضًا.",
        "التطبيق يشغّل الفيديو من الثانية المطابقة، ويكرّرها، وينسخ مرجع المقطع ليلصقه المونتير.",
        "ومتاح أيضًا كخادم MCP، فيستطيع وكلاء الذكاء الاصطناعي البحث في الفيديو كذلك.",
      ],
    },
    stack: ["Next.js", "Postgres + pgvector", "Whisper", "Qwen2.5-VL", "BGE-M3", "Cloudflare R2", "MCP"],
    result: {
      en: "The whole library, 6,778 clips, is catalogued with Arabic and English summaries and searchable by description. Moment-level indexing (scenes, faces, speech, vectors) passed a pilot of 62 source files and is now rolling out across the library. Every model runs locally, so indexing costs nothing per clip.",
      ar: "المكتبة كاملة، ٦٧٧٨ مقطعًا، مفهرسة بملخصات عربية وإنجليزية وقابلة للبحث بالوصف. والفهرسة على مستوى اللحظة (المشاهد والوجوه والكلام والتمثيلات الدلالية) اجتازت تجربة على ٦٢ ملفًا وتُطبَّق الآن على المكتبة كلها. كل النماذج تعمل محليًا، فلا تكلّف الفهرسة شيئًا لكل مقطع.",
    },
    clip: { track: "v2", from: 20.8, to: 22.1 },
  },
];

export const shipped: ShippedItem[] = [
  {
    id: "cv",
    name: { en: "CV Builder", ar: "منشئ السيرة الذاتية" },
    short: { en: "Arabic-first résumé builder with an AI writing assistant.", ar: "منشئ سيرة ذاتية بالعربية مع مساعد كتابة ذكي." },
    what: {
      en: "Free Arabic-first résumé builder with an AI writing assistant, live A4 preview, and an ATS-readiness score. 643 users have built 670 résumés.",
      ar: "منشئ سيرة ذاتية مجاني بالعربية أولًا، مع مساعد كتابة ذكي ومعاينة A4 مباشرة ومؤشر جاهزية ATS. أنشأ فيه ٦٤٣ مستخدمًا ٦٧٠ سيرة ذاتية.",
    },
    kind: "public",
    url: "https://cvbuilder.dalilklabs.com",
    image: "/work/cv.webp",
    clip: { track: "v2", from: 18.2, to: 19.2 },
  },
  {
    id: "career",
    name: { en: "Career Explorer", ar: "دليلك المهني" },
    short: { en: "Matches your experience to real jobs in 14 Saudi sectors.", ar: "يطابق خبراتك مع وظائف حقيقية في ١٤ قطاعًا سعوديًا." },
    what: {
      en: "AI turns your experience into a career identity and matches you to real jobs across 14 Saudi Vision 2030 sectors.",
      ar: "الذكاء الاصطناعي يحوّل خبراتك إلى هوية مهنية ويطابقك مع وظائف حقيقية في ١٤ قطاعًا من رؤية ٢٠٣٠.",
    },
    kind: "public",
    url: "https://careerexplorer.dalilklabs.com",
    image: "/work/career.webp",
  },
  {
    id: "toefl",
    name: { en: "TOEFL Compass", ar: "بوصلة التوفل" },
    short: { en: "IELTS and TOEFL requirements for ~400 universities, on a globe.", ar: "متطلبات الآيلتس والتوفل لنحو ٤٠٠ جامعة على كرة أرضية." },
    what: {
      en: "Look up the IELTS or TOEFL score that nearly 400 universities require, with sources, on an interactive globe. 1,320 leads captured so far.",
      ar: "اعرف درجة الآيلتس أو التوفل المطلوبة في نحو ٤٠٠ جامعة، مع المصادر، على كرة أرضية تفاعلية. جمعت حتى الآن ١٣٢٠ عميلًا محتملًا.",
    },
    kind: "public",
    url: "https://toeflcompass.dalilklabs.com",
    image: "/work/toefl.webp",
  },
  {
    id: "spelling",
    name: { en: "Spelling Trainer", ar: "تدريب الإملاء" },
    short: { en: "Hear a word, type it, see exactly which letters you missed.", ar: "اسمع الكلمة، اكتبها، واعرف أي الحروف أخطأت." },
    what: {
      en: "Hear a word, type it, see exactly which letters you missed. Three levels, from beginner to IELTS.",
      ar: "اسمع الكلمة، اكتبها، وشاهد بالضبط أي الحروف أخطأت. ثلاثة مستويات من المبتدئ حتى الآيلتس.",
    },
    kind: "public",
    url: "https://spelling.dalilklabs.com",
    image: "/work/spelling.webp",
  },
  {
    id: "sevenday",
    name: { en: "7-Day English Challenge", ar: "تحدي الإنجليزي ٧ أيام" },
    short: { en: "A week of daily English challenges before a course launch.", ar: "أسبوع من تحديات الإنجليزية اليومية قبل إطلاق الدورة." },
    what: {
      en: "A guided week of daily English challenges at two levels, built to warm up leads before a course launch.",
      ar: "أسبوع من التحديات اليومية بمستويين، صُمّم لتهيئة المهتمين قبل إطلاق الدورات.",
    },
    kind: "public",
    url: "https://7day-f.dalilklabs.com",
    image: "/work/sevenday.webp",
  },
  {
    id: "map",
    name: { en: "Ambition Map", ar: "خريطة الطموح" },
    short: { en: "Helps students picture where their goals can take them.", ar: "يساعد الطلاب على تخيّل إلى أين تأخذهم أهدافهم." },
    what: {
      en: "An interactive map that helps students picture where their goals can take them.",
      ar: "خريطة تفاعلية تساعد الطلاب على تخيّل إلى أين يمكن أن تأخذهم أهدافهم.",
    },
    kind: "public",
    url: "https://map.dalilk4career.com",
  },
  {
    id: "aistudio",
    name: { en: "AI Studio", ar: "استوديو الذكاء الاصطناعي" },
    short: { en: "The team’s in-house image and video generation studio.", ar: "استوديو داخلي لتوليد الصور والفيديو للفريق." },
    what: {
      en: "The team’s in-house image and video generation studio. It mirrors the layout of the tool they already knew, so nobody needed retraining.",
      ar: "استوديو داخلي لتوليد الصور والفيديو للفريق، يحاكي واجهة الأداة التي يعرفونها فلم يحتج أحد إلى تدريب جديد.",
    },
    kind: "internal",
    image: "/work/aistudio.webp",
    clip: { track: "v3", from: 18, to: 19.4 },
  },
  {
    id: "slides",
    name: { en: "Slides Agent", ar: "وكيل الشرائح" },
    short: { en: "Builds full 300-slide masterclass decks from a short brief.", ar: "يبني عروض ماستر كلاس كاملة من وصف قصير." },
    what: {
      en: "Generates complete ~300-slide masterclass decks from a session brief, as PowerPoint and Google Slides.",
      ar: "يولّد عروض ماستر كلاس كاملة من نحو ٣٠٠ شريحة انطلاقًا من وصف الجلسة، بصيغة PowerPoint وGoogle Slides.",
    },
    kind: "internal",
  },
  {
    id: "presenter",
    name: { en: "Live Presenter", ar: "مقدّم البث المباشر" },
    short: { en: "Each slide change cuts the live-stream camera automatically.", ar: "كل انتقال للشريحة يغيّر كاميرا البث تلقائيًا." },
    what: {
      en: "Each slide change during a live stream also cuts the camera to the right scene, so slides and shots never drift apart.",
      ar: "كل انتقال للشريحة أثناء البث المباشر يغيّر الكاميرا إلى المشهد المناسب، فلا تنفصل الشرائح عن اللقطات أبدًا.",
    },
    kind: "internal",
    image: "/work/presenter.webp",
    clip: { track: "v3", from: 16.6, to: 17.8 },
  },
  {
    id: "pipeline",
    name: { en: "Video Task Automation", ar: "أتمتة مهام المونتاج" },
    short: { en: "Turns every edit request into a ready Premiere project.", ar: "يحوّل كل طلب مونتاج إلى مشروع Premiere جاهز." },
    what: {
      en: "When a new edit request lands, it creates the folders, downloads the inputs, builds the Premiere project, then uploads the render and marks it delivered.",
      ar: "عند وصول طلب مونتاج جديد ينشئ المجلدات، ويحمّل الملفات، ويجهّز مشروع Premiere، ثم يرفع الإخراج ويعلّمه كمُسلَّم.",
    },
    kind: "internal",
    clip: { track: "v3", from: 15, to: 16.6 },
  },
  {
    id: "podcast",
    name: { en: "Live Podcast Editor", ar: "محرر البودكاست المباشر" },
    short: { en: "Cleans live recordings and cuts vertical Q&A clips.", ar: "ينظّف التسجيلات المباشرة ويقص مقاطع عمودية." },
    what: {
      en: "Cleans a recorded live session: noise reduction, silence and filler cuts, and automatic vertical clips of each Q&A.",
      ar: "ينظّف الجلسة المسجّلة: إزالة الضوضاء، وقص الصمت والحشو، واستخراج مقاطع عمودية تلقائية لكل سؤال وجواب.",
    },
    kind: "internal",
  },
];

export const building: LabItem[] = [
  {
    id: "broll",
    name: { en: "B-roll Library", ar: "مكتبة البي رول" },
    short: { en: "Search the team’s footage by moment, in Arabic or English.", ar: "ابحث في فيديو الفريق باللحظة، بالعربية أو الإنجليزية." },
    what: {
      en: "Moment-level footage search for the content team. Type a shot in Arabic or English and jump to the exact second. 6,778 clips catalogued, AI indexing rolling out.",
      ar: "بحث في الفيديو على مستوى اللحظة لفريق المحتوى. اكتب اللقطة بالعربية أو الإنجليزية وانتقل إلى الثانية بالضبط. ٦٧٧٨ مقطعًا مفهرسًا، والفهرسة الذكية قيد الإطلاق.",
    },
    status: "dev",
    caseSlug: "broll-library",
    image: "/work/broll.webp",
    stack: "Next.js · Postgres + pgvector · Whisper · Qwen2.5-VL · MCP",
  },
  {
    id: "oudopedia",
    name: { en: "Oudopedia", ar: "عودوبيديا" },
    short: { en: "A playful scent encyclopedia for the Arab world.", ar: "موسوعة عطور مرحة للعالم العربي." },
    what: {
      en: "A playful scent encyclopedia for the Arab world. Discover perfumes by notes, track your collection, and find what smells like what you love.",
      ar: "موسوعة عطور مرحة للعالم العربي. اكتشف العطور بالنوتات، وتابع مجموعتك، وابحث عمّا يشبه ما تحبه.",
    },
    status: "beta",
    url: "https://oudopedia.com",
    image: "/work/oudopedia-app.webp",
    stack: "Expo · React Native · Supabase + pgvector",
    clip: { track: "v4", from: 21.3, to: 22.1 },
  },
  {
    id: "mypajero",
    name: { en: "MyPajero", ar: "ماي باجيرو" },
    short: { en: "AI maintenance and cost tracker for Pajero owners in the UAE.", ar: "متتبع صيانة ومصاريف بالذكاء الاصطناعي لملّاك باجيرو." },
    what: {
      en: "An AI maintenance and spending tracker for Pajero owners in the UAE: service schedule, receipt scanning, cost per km, and Dakar, an assistant that knows your exact engine.",
      ar: "متتبع صيانة ومصاريف بالذكاء الاصطناعي لملّاك باجيرو في الإمارات: جدول الصيانة، ومسح الفواتير، وتكلفة الكيلومتر، ومساعد «داكار» الذي يعرف محرّكك بالضبط.",
    },
    status: "beta",
    url: "https://mypajero-web.vercel.app",
    image: "/work/mypajero.webp",
    stack: "SwiftUI · Supabase Edge Functions · Gemini · RevenueCat",
    clip: { track: "v4", from: 15, to: 17.5 },
  },
];

export const lab: LabItem[] = [
  {
    id: "viral",
    name: { en: "Viral Check", ar: "فاحص الانتشار" },
    short: { en: "Predicts audience engagement before a video is published.", ar: "يتوقع تفاعل الجمهور قبل نشر الفيديو." },
    what: {
      en: "Upload a video before publishing and get a predicted audience-engagement score from a brain-response model.",
      ar: "ارفع الفيديو قبل نشره واحصل على توقّع لتفاعل الجمهور من نموذج يحاكي استجابة الدماغ.",
    },
    image: "/work/viralcheck.webp",
    clip: { track: "v3", from: 21, to: 22.1 },
  },
  {
    id: "voxen",
    name: { en: "voxen", ar: "voxen" },
    short: { en: "Offline speech cleanup, benchmarked against Adobe Podcast.", ar: "تنقية صوت دون إنترنت، مقارنة بـ Adobe Podcast." },
    what: {
      en: "Local speech enhancement benchmarked against Adobe Podcast. Runs offline and keeps the full 48 kHz band.",
      ar: "تحسين صوت محلي مُقاس مقابل Adobe Podcast. يعمل دون إنترنت ويحافظ على نطاق ٤٨ كيلوهرتز كاملًا.",
    },
    image: "/work/voxen.webp",
  },
  {
    id: "vcomposer",
    name: { en: "vcomposer", ar: "vcomposer" },
    short: { en: "A Mac video editor you control by chatting.", ar: "محرر فيديو للماك تتحكم فيه بالمحادثة." },
    what: {
      en: "A native macOS editor for vertical video where you edit by chatting: the AI reads the timeline and makes the cuts.",
      ar: "محرر macOS أصلي للفيديو العمودي تعدّل فيه بالمحادثة: الذكاء الاصطناعي يقرأ التايم لاين وينفّذ القص.",
    },
    image: "/work/vcomposer.webp",
  },
  {
    id: "deepglow",
    name: { en: "Deep Glow for Mac", ar: "Deep Glow للماك" },
    short: { en: "A Windows-only After Effects glow, rebuilt for Mac.", ar: "تأثير توهّج لـ After Effects أُعيد بناؤه للماك." },
    what: {
      en: "A from-scratch After Effects plugin for Apple Silicon that recreates a Windows-only glow effect pass by pass.",
      ar: "إضافة After Effects مكتوبة من الصفر لمعالجات Apple، تعيد بناء تأثير توهّج متاح لويندوز فقط، مرحلة بمرحلة.",
    },
  },
  {
    id: "kize",
    name: { en: "Kize", ar: "Kize" },
    short: { en: "Asset library and AI tools inside Premiere Pro.", ar: "مكتبة أصول وأدوات ذكية داخل Premiere Pro." },
    what: {
      en: "Brand, site, and panel design for a Premiere Pro asset library with AI automations.",
      ar: "هوية وموقع وتصميم لوحة لمكتبة أصول داخل Premiere Pro مع أتمتة بالذكاء الاصطناعي.",
    },
    url: "https://kize-web.vercel.app",
    image: "/work/kize.webp",
    clip: { track: "v4", from: 17.5, to: 19 },
  },
  {
    id: "provenbrief",
    name: { en: "ProvenBrief", ar: "ProvenBrief" },
    short: { en: "A news site run by 18 AI agents.", ar: "موقع أخبار يديره ١٨ وكيل ذكاء اصطناعي." },
    what: {
      en: "An experiment in a media site run by 18 AI agents with roles, budgets, and an escalation ladder.",
      ar: "تجربة لموقع إعلامي يديره ١٨ وكيل ذكاء اصطناعي بأدوار وميزانيات وسلّم تصعيد.",
    },
    url: "https://provenbrief.com",
  },
  {
    id: "conductor",
    name: { en: "Conductor & TokenZaver", ar: "Conductor و TokenZaver" },
    short: { en: "Pairs a smart planner model with a cheap coding model.", ar: "يجمع نموذج تخطيط ذكي مع نموذج برمجة رخيص." },
    what: {
      en: "Tools that split coding work between an expensive planner model and a cheap executor model to cut cost.",
      ar: "أدوات توزّع عمل البرمجة بين نموذج تخطيط مكلف ونموذج تنفيذ رخيص لخفض التكلفة.",
    },
    image: "/work/tokenzaver.webp",
  },
  {
    id: "toonsmith",
    name: { en: "Toonsmith", ar: "Toonsmith" },
    short: { en: "From idea to finished cartoon with AI.", ar: "من الفكرة إلى كرتون مكتمل بالذكاء الاصطناعي." },
    what: {
      en: "From idea to finished cartoon: outline, characters, storyboard, voices, video, and lip-sync.",
      ar: "من الفكرة إلى كرتون مكتمل: المخطط والشخصيات والستوري بورد والأصوات والفيديو ومزامنة الشفاه.",
    },
  },
  {
    id: "mascot",
    name: { en: "DK Mascot", ar: "تميمة دليلك" },
    short: { en: "A 10 KB animated SVG mascot with a spring rig.", ar: "تميمة SVG متحركة بحجم ١٠ كيلوبايت." },
    what: {
      en: "A spring-rigged SVG mascot that animates like Rive output in 10.6 KB, against about 200 KB for the Rive runtime alone.",
      ar: "تميمة SVG بنظام نوابض تتحرك كمخرجات Rive بحجم ١٠٫٦ كيلوبايت، مقابل نحو ٢٠٠ كيلوبايت لمشغّل Rive وحده.",
    },
    image: "/work/mascot.webp",
  },
  {
    id: "skryptly",
    name: { en: "Skryptly", ar: "Skryptly" },
    short: { en: "Arabic YouTube scripts and thumbnails in seconds.", ar: "سكريبتات يوتيوب وصور مصغّرة بالعربية في ثوانٍ." },
    what: {
      en: "Arabic YouTube scripts and thumbnails generated in seconds.",
      ar: "سكريبتات يوتيوب وصور مصغّرة بالعربية تُولَّد في ثوانٍ.",
    },
    status: "paused",
    url: "https://skryptly-com.vercel.app",
    clip: { track: "v4", from: 13, to: 14.6 },
  },
];

export const allCases = [...caseStudies, ...inProgressCases];
export const findCase = (slug: string) => allCases.find((c) => c.slug === slug);
