import type { L } from "@/lib/i18n";

/**
 * Media portfolio (/video). Clips come from the old site (legacy-vite-site branch),
 * re-encoded for the web into public/video. Personal channels are NOT portfolio:
 * they appear only as profile links in the contact section.
 */

export type Clip = {
  id: string;
  title: L;
  kind: L;
  /** What I did on it, in a few words. */
  role: L;
  src: string;
  poster: string;
  duration: string;
};

export const videoPage = {
  metaTitle: { en: "Video producer for big YouTube channels", ar: "منتج فيديو لقنوات يوتيوب كبيرة" } as L,
  metaDescription: {
    en: "Camera operator and editor behind Dalilk Academy’s channels: 17M+ followers, 377M YouTube views, 7 finished pieces a day, live seminars for 30K+. Generative AI with Higgsfield, Magnific and ComfyUI.",
    ar: "المصوّر والمونتير خلف قنوات أكاديمية دليلك: أكثر من 17 مليون متابع و377 مليون مشاهدة على يوتيوب، و7 مواد جاهزة يوميًا، وندوات مباشرة لأكثر من 30 ألف. ذكاء اصطناعي توليدي مع Higgsfield وMagnific وComfyUI.",
  } as L,
  eyebrow: { en: "Video producer · YouTube and social at scale", ar: "منتج فيديو · يوتيوب وسوشيال على نطاق واسع" } as L,
  title: { en: "The camera and the edit behind 17M+ followers.", ar: "خلف الكاميرا والمونتاج لقنوات يتابعها أكثر من 17 مليون." } as L,
  lede: {
    en: "I film and edit for Abdulrahman Hijazy’s Dalilk channels and his brothers’ brands, Qudrat Shortcuts and Mawhiba Future, all part of AmbitionHG. Daily uploads across YouTube, Instagram and TikTok, live seminars for 30,000+ people, and events in Saudi Arabia, Bahrain and the UAE.",
    ar: "أصوّر وأعمل المونتاج لقنوات دليلك مع عبدالرحمن حجازي، ولعلامات إخوته: اختصارات القدرات وموهبة فيوتشر، وكلها ضمن مجموعة AmbitionHG. نشر يومي على يوتيوب وإنستغرام وتيك توك، وندوات مباشرة لأكثر من 30 ألف شخص، وفعاليات في السعودية والبحرين والإمارات.",
  } as L,
  ctaReel: { en: "Watch the showreel", ar: "شاهد الشوريل" } as L,
  ctaCv: { en: "Download CV (PDF)", ar: "حمّل السيرة الذاتية (PDF)" } as L,
  ctaEmail: { en: "Email me", ar: "راسلني" } as L,
  availability: {
    en: "Open to full-time and freelance video roles, UAE or relocation.",
    ar: "متاح لوظائف الفيديو بدوام كامل أو بشكل حر، في الإمارات أو مع الانتقال.",
  } as L,
};

/** Public counts collected 19 Nov 2026; the per-month figure comes from my own task sheet. */
export const facts: { value: string; label: L }[] = [
  { value: "17M+", label: { en: "followers across the channels I shoot and edit for", ar: "متابع للقنوات التي أصوّر لها وأعمل مونتاجها" } },
  { value: "377M", label: { en: "views on those YouTube channels", ar: "مشاهدة على قنوات اليوتيوب هذه" } },
  { value: "7", label: { en: "finished pieces a day, my normal pace", ar: "مواد جاهزة يوميًا، معدّلي المعتاد" } },
  { value: "30K+", label: { en: "people at the live seminars I run", ar: "شخص في الندوات المباشرة التي أديرها" } },
];

export type Channel = {
  id: string;
  name: L;
  host: L;
  avatar: string;
  /** What I do for it. */
  role: L;
  youtube: { url: string; subs: string; views?: string; videos: string };
  instagram?: { url: string; followers: string };
  tiktok?: { url: string; followers: string };
  site?: string;
  note?: L;
};

export const channelsSection = {
  title: { en: "The channels", ar: "القنوات" } as L,
  intro: {
    en: "Eight channels, one office, one team. Each card links to the real channel, so you can see the output for yourself.",
    ar: "ثماني قنوات، مكتب واحد، فريق واحد. كل بطاقة تفتح القناة الحقيقية، لترى الشغل بنفسك.",
  } as L,
  asOf: {
    en: "Public follower counts, 19 Nov 2026. These channels are a team effort: I film and edit with two more editor-camera operators and a designer.",
    ar: "أرقام المتابعين العامة بتاريخ 19 نوفمبر 2026. هذه القنوات عمل فريق: أصوّر وأعمل المونتاج مع مونتير ومصوّر آخرَين ومصمم.",
  } as L,
  totals: [
    { value: "5.5M", label: { en: "YouTube subscribers", ar: "مشترك يوتيوب" } as L },
    { value: "6.8M", label: { en: "Instagram followers", ar: "متابع إنستغرام" } as L },
    { value: "5.1M", label: { en: "TikTok followers", ar: "متابع تيك توك" } as L },
    { value: "9,600+", label: { en: "YouTube videos published", ar: "فيديو منشور على يوتيوب" } as L },
  ],
  subs: { en: "subscribers", ar: "مشترك" } as L,
  views: { en: "views", ar: "مشاهدة" } as L,
  videos: { en: "videos", ar: "فيديو" } as L,
  visit: { en: "Website", ar: "الموقع" } as L,
};

export const channels: Channel[] = [
  {
    id: "dalilk-english",
    name: { en: "Dalilk English", ar: "دليلك للانجليزي" },
    host: { en: "Abdulrahman Hijazy", ar: "عبدالرحمن حجازي" },
    avatar: "/brands/dalilk-english.jpg",
    role: { en: "Film, edit, reels, ads", ar: "تصوير ومونتاج وريلز وإعلانات" },
    youtube: { url: "https://www.youtube.com/@dalilk4english", subs: "3.11M", views: "231M", videos: "2,258" },
    instagram: { url: "https://www.instagram.com/dalilk4english/", followers: "4M" },
    tiktok: { url: "https://www.tiktok.com/@dalilk4english", followers: "3.1M" },
    site: "https://dalilk.com",
  },
  {
    id: "dalilk-ielts",
    name: { en: "Dalilk IELTS", ar: "دليلك للايلتس" },
    host: { en: "Abdulrahman Hijazy", ar: "عبدالرحمن حجازي" },
    avatar: "/brands/dalilk-ielts.jpg",
    role: { en: "Film, edit, workshops, ads", ar: "تصوير ومونتاج وورش وإعلانات" },
    youtube: { url: "https://www.youtube.com/@dalilk4ielts", subs: "1.51M", views: "82M", videos: "2,885" },
    instagram: { url: "https://www.instagram.com/dalilkme/", followers: "2M" },
    tiktok: { url: "https://www.tiktok.com/@dalilk4ielts", followers: "1.2M" },
  },
  {
    id: "qudrat",
    name: { en: "Qudrat Shortcuts", ar: "اختصارات القدرات" },
    host: { en: "Ahmed Hijazy", ar: "أحمد حجازي" },
    avatar: "/brands/qudrat.jpg",
    role: { en: "Film, events, Al-Tumooh Forum", ar: "تصوير وفعاليات وملتقى الطموح" },
    youtube: { url: "https://www.youtube.com/@QudratShortcuts", subs: "336K", views: "34M", videos: "1,526" },
    instagram: { url: "https://www.instagram.com/qudratshortcuts/", followers: "246K" },
    tiktok: { url: "https://www.tiktok.com/@qudratshortcuts", followers: "338K" },
    site: "https://qudurat.com",
  },
  {
    id: "dalilk-step",
    name: { en: "Dalilk STEP", ar: "دليلك للستيب" },
    host: { en: "Abdulrahman Hijazy", ar: "عبدالرحمن حجازي" },
    avatar: "/brands/dalilk-step.jpg",
    role: { en: "Edit, workshops, reels", ar: "مونتاج وورش وريلز" },
    youtube: { url: "https://www.youtube.com/@dalilk4step", subs: "239K", views: "22M", videos: "1,701" },
    instagram: { url: "https://www.instagram.com/dalilk4step/", followers: "405K" },
    tiktok: { url: "https://www.tiktok.com/@dalilk4step", followers: "389K" },
  },
  {
    id: "dalilk-podcast",
    name: { en: "Dalilk English Podcast", ar: "بودكاست دليلك للانجليزي" },
    host: { en: "Abdulrahman Hijazy", ar: "عبدالرحمن حجازي" },
    avatar: "/brands/dalilk-podcast.jpg",
    role: { en: "Multi-camera podcast shoots and edit", ar: "تصوير بودكاست بعدة كاميرات ومونتاج" },
    youtube: { url: "https://www.youtube.com/@dalilk4english_podcast", subs: "171K", views: "2.5M", videos: "54" },
  },
  {
    id: "dalilk-career",
    name: { en: "Dalilk Career", ar: "دليلك المهني" },
    host: { en: "Abdulrahman Hijazy", ar: "عبدالرحمن حجازي" },
    avatar: "/brands/dalilk-career.jpg",
    role: { en: "Edit, reels", ar: "مونتاج وريلز" },
    youtube: { url: "https://www.youtube.com/@Dalilk4career", subs: "106K", views: "3.9M", videos: "706" },
    instagram: { url: "https://www.instagram.com/dalilk4career/", followers: "163K" },
    tiktok: { url: "https://www.tiktok.com/@dalilk4career", followers: "42K" },
  },
  {
    id: "dalilk-toefl",
    name: { en: "Dalilk TOEFL", ar: "دليلك للتوفل" },
    host: { en: "Abdulrahman Hijazy", ar: "عبدالرحمن حجازي" },
    avatar: "/brands/dalilk-toefl.jpg",
    role: { en: "Launch content, edit", ar: "محتوى الإطلاق ومونتاج" },
    youtube: { url: "https://www.youtube.com/@dalilk4toefl", subs: "10.9K", views: "1.3M", videos: "132" },
    instagram: { url: "https://www.instagram.com/dalilk4toefl/", followers: "21K" },
    tiktok: { url: "https://www.tiktok.com/@dalilk4toefl", followers: "4.4K" },
    note: { en: "Launched Jan 2026", ar: "انطلقت يناير 2026" },
  },
  {
    id: "mawhiba",
    name: { en: "Mawhiba Future", ar: "موهبة فيوتشر" },
    host: { en: "Anas Hijazy", ar: "أنس حجازي" },
    avatar: "/brands/mawhiba.jpg",
    role: { en: "Kids’ course ads and reels", ar: "إعلانات وريلز لدورات الأطفال" },
    youtube: { url: "https://www.youtube.com/@mawhiba.future", subs: "940", videos: "410" },
    site: "https://mawhibafuture.com",
    note: { en: "New brand, launched Nov 2024", ar: "علامة جديدة، انطلقت نوفمبر 2024" },
  },
];

/** From my task sheet ("new Tasks" + "2025" tabs), pulled 19 Nov 2026. */
export const scale = {
  title: { en: "Built for volume", ar: "مصمم للكمية والسرعة" } as L,
  intro: {
    en: "Big channels don’t need one perfect video. They need good videos every day, on time. Every task I do goes into a shared sheet, and these numbers come straight from it.",
    ar: "القنوات الكبيرة لا تحتاج فيديو واحدًا مثاليًا، بل فيديوهات جيدة كل يوم وفي موعدها. كل مهمة أعملها تُسجَّل في شيت مشترك، وهذه الأرقام منه مباشرة.",
  } as L,
  stats: [
    { value: "1,250+", label: { en: "tasks logged since April 2025", ar: "مهمة مسجّلة منذ أبريل 2025" } as L },
    { value: "1,000+", label: { en: "of them brand-new videos, not revisions", ar: "منها فيديوهات جديدة، لا تعديلات" } as L },
    { value: "125", label: { en: "logged in my busiest month (Sep 2026)", ar: "مهمة مسجّلة في أكثر شهر ضغطًا (سبتمبر 2026)" } as L },
    { value: "5", label: { en: "brands in my queue at the same time", ar: "علامات في قائمة مهامي في نفس الوقت" } as L },
  ],
  chartTitle: { en: "Tasks logged per month, 2026", ar: "المهام المسجّلة شهريًا، 2026" } as L,
  chartNote: { en: "November is to date.", ar: "نوفمبر حتى اليوم." } as L,
  months: [
    { m: { en: "Jan", ar: "ينا" }, v: 35 },
    { m: { en: "Feb", ar: "فبر" }, v: 34 },
    { m: { en: "Mar", ar: "مار" }, v: 32 },
    { m: { en: "Apr", ar: "أبر" }, v: 48 },
    { m: { en: "May", ar: "ماي" }, v: 71 },
    { m: { en: "Jun", ar: "يون" }, v: 88 },
    { m: { en: "Jul", ar: "يول" }, v: 97 },
    { m: { en: "Aug", ar: "أغس" }, v: 83 },
    { m: { en: "Sep", ar: "سبت" }, v: 125 },
    { m: { en: "Oct", ar: "أكت" }, v: 113 },
    { m: { en: "Nov", ar: "نوف" }, v: 94 },
  ] as { m: L; v: number }[],
  splitTitle: { en: "2026 tasks by brand", ar: "مهام 2026 حسب العلامة" } as L,
  split: [
    { name: { en: "Dalilk IELTS", ar: "دليلك للايلتس" } as L, v: 284 },
    { name: { en: "Dalilk English", ar: "دليلك للانجليزي" } as L, v: 226 },
    { name: { en: "Dalilk STEP", ar: "دليلك للستيب" } as L, v: 120 },
    { name: { en: "All brands (shared campaigns)", ar: "كل العلامات (حملات مشتركة)" } as L, v: 74 },
    { name: { en: "Al-Tumooh Forum", ar: "ملتقى الطموح" } as L, v: 56 },
    { name: { en: "Dalilk TOEFL", ar: "دليلك للتوفل" } as L, v: 40 },
  ],
  howTitle: { en: "How the work keeps moving", ar: "كيف يستمر الشغل بدون توقف" } as L,
  how: [
    {
      title: { en: "A small team, a clear queue", ar: "فريق صغير وقائمة واضحة" } as L,
      body: {
        en: "Two editor-camera operators and a designer. I manage the shoots, the edit queue and delivery, so nothing waits on one person.",
        ar: "مونتيران ومصوّران ومصمم. أدير التصوير وقائمة المونتاج والتسليم، فلا يتوقف شيء على شخص واحد.",
      } as L,
    },
    {
      title: { en: "Brief to publish, tracked", ar: "من البريف للنشر، كله متتبَّع" } as L,
      body: {
        en: "Every video has a row: brief, start, delivery, Drive link and each revision round. Anyone can see where a piece is.",
        ar: "كل فيديو له صف: البريف والبداية والتسليم ورابط الدرايف وكل جولة تعديل. أي شخص يعرف وين وصل الفيديو.",
      } as L,
    },
    {
      title: { en: "Templates and automation", ar: "قوالب وأتمتة" } as L,
      body: {
        en: "Project templates, Motion Graphics templates, automated render delivery and a searchable library of 6,778 B-roll clips.",
        ar: "قوالب مشاريع وقوالب موشن جرافيك وتسليم رندر تلقائي ومكتبة بحث لـ 6,778 لقطة بي رول.",
      } as L,
    },
    {
      title: { en: "AI where it saves hours", ar: "الذكاء الاصطناعي حيث يوفّر ساعات" } as L,
      body: {
        en: "Generated B-roll, upscaling, voice fixes and clean-up run in parallel while I edit.",
        ar: "بي رول مولّد وتكبير دقة وإصلاح صوت وتنظيف لقطات، تعمل بالتوازي أثناء المونتاج.",
      } as L,
    },
  ],
};

export const live = {
  title: { en: "Live seminars and events", ar: "الندوات المباشرة والفعاليات" } as L,
  intro: {
    en: "I build and run the live Zoom seminars, some with more than 30,000 attendees, and travel with the team to film forums, university events and podcasts in Saudi Arabia, Bahrain and the UAE.",
    ar: "أجهّز وأدير ندوات زوم المباشرة، وبعضها بحضور أكثر من 30 ألف شخص، وأسافر مع الفريق لتصوير الملتقيات والفعاليات الجامعية والبودكاست في السعودية والبحرين والإمارات.",
  } as L,
  rigTitle: { en: "My live setup", ar: "تجهيز البث المباشر" } as L,
  rig: [
    { step: { en: "Cameras", ar: "الكاميرات" } as L, detail: { en: "Sony multi-cam, DJI Ronin gimbals", ar: "عدة كاميرات سوني وجيمبال DJI Ronin" } as L, logo: "/logos/dji.svg" },
    { step: { en: "Mics and lighting", ar: "المايكات والإضاءة" } as L, detail: { en: "Wireless mics, key and fill lights", ar: "مايكات لاسلكية وإضاءة رئيسية وتعبئة" } as L },
    { step: { en: "RØDECaster Video", ar: "RØDECaster Video" } as L, detail: { en: "Switching, scenes, audio mix", ar: "تبديل الكاميرات والمشاهد ومكس الصوت" } as L },
    { step: { en: "Stream Deck", ar: "Stream Deck" } as L, detail: { en: "One-button scenes and overlays", ar: "مشاهد وعناصر بضغطة زر" } as L, logo: "/logos/elgato.svg" },
    { step: { en: "Zoom", ar: "زوم" } as L, detail: { en: "Seminars for 30,000+ people", ar: "ندوات لأكثر من 30 ألف شخص" } as L },
  ],
  team: {
    src: "/video/stills/riyadh-idp-team.webp",
    caption: { en: "Me (second from left, on the gimbal) with Abdulrahman Hijazy and the team, covering the IDP study-abroad expo", ar: "أنا (الثاني من اليسار، على الجيمبال) مع عبدالرحمن حجازي والفريق، في تغطية معرض IDP للدراسة بالخارج" } as L,
    alt: { en: "Mohamed holding a Sony camera on a gimbal, next to Abdulrahman Hijazy in a grey thobe with a lapel mic and two crew members, in a chandeliered ballroom", ar: "محمد يحمل كاميرا سوني على جيمبال، بجانب عبدالرحمن حجازي بثوب رمادي ومايك لاسلكي واثنين من الفريق، في قاعة بثريات" } as L,
  },
  btsTitle: { en: "Behind the switcher", ar: "خلف جهاز التبديل" } as L,
  btsIntro: {
    en: "That’s me at the desk: switching cameras live on the RØDECaster Video, firing scenes from the Stream Deck, rigging the gimbal, and running the cohort launch in our studio.",
    ar: "هذا أنا على المكتب: أبدّل الكاميرات مباشرة على RØDECaster Video، وأشغّل المشاهد من Stream Deck، وأجهّز الجيمبال، وأدير بث إطلاق الدفعة في الاستوديو.",
  } as L,
  btsClip: {
    id: "bts-switcher",
    title: { en: "Live switching, behind the scenes", ar: "تبديل مباشر، من الكواليس" },
    kind: { en: "Dalilk studio", ar: "استوديو دليلك" },
    role: { en: "Live switching, scenes, audio", ar: "تبديل مباشر ومشاهد وصوت" },
    src: "/video/bts/switcher.mp4",
    poster: "/video/posters/bts-switcher.webp",
    duration: "0:20",
  } satisfies Clip,
  btsPhotos: [
    { src: "/video/bts/rodecaster.webp", ratio: "4/3", caption: { en: "Switching a live seminar on the RØDECaster Video", ar: "تبديل ندوة مباشرة على RØDECaster Video" } as L, alt: { en: "Mohamed at a desk operating a RØDECaster Video switcher next to a laptop", ar: "محمد على مكتب يشغّل جهاز RØDECaster Video بجانب لابتوب" } as L },
    { src: "/video/bts/gimbal-rig.webp", ratio: "4/3", caption: { en: "Rigging the camera on the gimbal", ar: "تركيب الكاميرا على الجيمبال" } as L, alt: { en: "Mohamed balancing a camera with a monitor on a gimbal mounted on a tripod", ar: "محمد يضبط كاميرا وشاشة على جيمبال فوق حامل" } as L },
    { src: "/video/bts/control-room.webp", ratio: "4/3", caption: { en: "The control desk: switcher, monitors, Stream Deck", ar: "مكتب التحكم: جهاز التبديل والشاشات وStream Deck" } as L, alt: { en: "Mohamed behind two monitors and a keyboard in a studio with lights and tripods", ar: "محمد خلف شاشتين ولوحة مفاتيح في استوديو بإضاءة وحوامل" } as L },
    { src: "/video/bts/live-monitor.webp", ratio: "3/4", caption: { en: "Watching the feed during a live session", ar: "متابعة الصورة أثناء بث مباشر" } as L, alt: { en: "Mohamed seated beside a camera on a tripod with a monitor, facing a lit stage screen", ar: "محمد جالس بجانب كاميرا على حامل وشاشة، أمام شاشة مسرح مضاءة" } as L },
    { src: "/video/bts/robot-launch.webp", ratio: "3/4", caption: { en: "Cohort launch live, with a humanoid robot on set", ar: "بث إطلاق الدفعة، مع روبوت بشري في الاستوديو" } as L, alt: { en: "Mohamed adjusting a humanoid robot in front of a large LED screen showing the launch title", ar: "محمد يضبط روبوتًا بشريًا أمام شاشة LED كبيرة عليها عنوان الإطلاق" } as L },
  ],
  places: { en: "Riyadh · Jeddah · Dammam · Bahrain · Dubai", ar: "الرياض · جدة · الدمام · البحرين · دبي" } as L,
};

export const work = {
  title: { en: "Selected work", ar: "أعمال مختارة" } as L,
  intro: {
    en: "The showreel, then vertical edits for Reels and TikTok: fast pacing, motion graphics, animated Arabic captions and sound design.",
    ar: "الشوريل، ثم مونتاج عمودي للريلز وتيك توك: إيقاع سريع وموشن جرافيك وكابشن عربي متحرك وتصميم صوت.",
  } as L,
  otherClients: { en: "Other clients", ar: "عملاء آخرون" } as L,
};

export const showreel = {
  title: { en: "Showreel", ar: "الشوريل" } as L,
  intro: {
    en: "One minute across short films, food, products, events, interviews and YouTube.",
    ar: "دقيقة واحدة تجمع أفلامًا قصيرة وطعامًا ومنتجات وفعاليات ومقابلات ويوتيوب.",
  } as L,
  src: "/video/showreel.mp4",
  srcSmall: "/video/showreel-720.mp4",
  poster: "/video/posters/showreel.webp",
  duration: "1:00",
  creditsTitle: { en: "Edited for", ar: "مونتاج لصالح" } as L,
};

/** Names as they appear in the showreel credits. */
export const credits: { name: L; what: L }[] = [
  { name: { en: "UNFPA", ar: "صندوق الأمم المتحدة للسكان" }, what: { en: "Short film", ar: "فيلم قصير" } },
  { name: { en: "Memory Film", ar: "Memory Film" }, what: { en: "Short films", ar: "أفلام قصيرة" } },
  { name: { en: "Ministry of Finance, Saudi Arabia", ar: "وزارة المالية السعودية" }, what: { en: "Euromoney event", ar: "فعالية يوروموني" } },
  { name: { en: "L’Oréal (Dercos)", ar: "لوريال (ديركوس)" }, what: { en: "Doctor interview", ar: "مقابلة طبيب" } },
  { name: { en: "ON-TIME Centre", ar: "ON-TIME Centre" }, what: { en: "Events and interviews", ar: "فعاليات ومقابلات" } },
  { name: { en: "Cards Restaurant", ar: "مطعم كاردز" }, what: { en: "Food and behind the scenes", ar: "طعام وكواليس" } },
  { name: { en: "Dalilk Academy", ar: "أكاديمية دليلك" }, what: { en: "YouTube, ads, courses", ar: "يوتيوب وإعلانات ودورات" } },
];

export const social = {
  title: { en: "Social and short-form", ar: "سوشيال وفيديو قصير" } as L,
  intro: {
    en: "Vertical edits for Reels and TikTok: fast pacing, motion graphics, animated Arabic captions and sound design.",
    ar: "مونتاج عمودي للريلز وتيك توك: إيقاع سريع وموشن جرافيك وكابشن عربي متحرك وتصميم صوت.",
  } as L,
};

export const socialClips: Clip[] = [
  {
    id: "ferrari-ppf",
    title: { en: "Ferrari paint protection", ar: "حماية طلاء فيراري" },
    kind: { en: "Brand reel · Auto detailing", ar: "ريل لعلامة تجارية · عناية بالسيارات" },
    role: { en: "Edit, colour, sound", ar: "مونتاج وتلوين وصوت" },
    src: "/video/ferrari-ppf.mp4",
    poster: "/video/posters/ferrari-ppf.webp",
    duration: "0:39",
  },
  {
    id: "qudurat-workshop",
    title: { en: "Qudurat workshop launch", ar: "إطلاق ورشة القدرات" },
    kind: { en: "Event ad · Education", ar: "إعلان فعالية · تعليم" },
    role: { en: "Edit, motion graphics, sound", ar: "مونتاج وموشن جرافيك وصوت" },
    src: "/video/qudurat-workshop.mp4",
    poster: "/video/posters/qudurat-workshop.webp",
    duration: "0:50",
  },
  {
    id: "interior-tour",
    title: { en: "Luxury interior tour", ar: "جولة في تصميم داخلي فاخر" },
    kind: { en: "Brand reel · Interior design", ar: "ريل لعلامة تجارية · تصميم داخلي" },
    role: { en: "Edit, colour, sound", ar: "مونتاج وتلوين وصوت" },
    src: "/video/interior-tour.mp4",
    poster: "/video/posters/interior-tour.webp",
    duration: "0:40",
  },
  {
    id: "kids-class-ad",
    title: { en: "Kids’ English class ad", ar: "إعلان كلاس إنجليزي للأطفال" },
    kind: { en: "Performance ad · Education", ar: "إعلان مباشر · تعليم" },
    role: { en: "Edit, captions, graphics", ar: "مونتاج وكابشن وجرافيك" },
    src: "/video/kids-class-ad.mp4",
    poster: "/video/posters/kids-class-ad.webp",
    duration: "0:19",
  },
  {
    id: "ielts-tips",
    title: { en: "Why 90% miss IELTS 7", ar: "ليش 90% ما يحققون 7 في الآيلتس" },
    kind: { en: "Course promo · Education", ar: "ترويج دورة · تعليم" },
    role: { en: "Edit, motion graphics", ar: "مونتاج وموشن جرافيك" },
    src: "/video/ielts-tips.mp4",
    poster: "/video/posters/ielts-tips.webp",
    duration: "0:28",
  },
  {
    id: "ielts-course",
    title: { en: "IELTS intensive course", ar: "دورة الآيلتس المكثفة" },
    kind: { en: "Course promo · Education", ar: "ترويج دورة · تعليم" },
    role: { en: "Edit, motion graphics, 3D mockups", ar: "مونتاج وموشن جرافيك ومجسمات" },
    src: "/video/ielts-course.mp4",
    poster: "/video/posters/ielts-course.webp",
    duration: "0:32",
  },
];

export const filming = {
  title: { en: "Filming: events and podcasts", ar: "التصوير: فعاليات وبودكاست" } as L,
  intro: {
    en: "I filmed these for Dalilk Academy’s presenters, Abdulrahman and Ahmed Hijazy, across Saudi Arabia and the UAE: forums with thousands of attendees, university events, podcasts, and behind-the-scenes B-roll.",
    ar: "صوّرتها لمقدّمَي أكاديمية دليلك، عبدالرحمن وأحمد حجازي، في السعودية والإمارات: ملتقيات بحضور الآلاف، وفعاليات جامعية، وبودكاست، وبي رول من الكواليس.",
  } as L,
  reel: {
    id: "events-broll",
    title: { en: "Events B-roll", ar: "بي رول الفعاليات" },
    kind: { en: "Jeddah, Dammam, Dubai", ar: "جدة والدمام ودبي" },
    role: { en: "Filmed on location, edited", ar: "تصوير في الموقع ومونتاج" },
    src: "/video/events-broll.mp4",
    poster: "/video/posters/events-broll.webp",
    duration: "0:21",
  } satisfies Clip,
};

export const stills: { src: string; caption: L; place: L; alt: L }[] = [
  {
    src: "/video/stills/jeddah-stage.webp",
    caption: { en: "Al-Tumooh Forum 2025, on stage", ar: "ملتقى الطموح 2025، على المسرح" },
    place: { en: "Jeddah", ar: "جدة" },
    alt: { en: "Speaker seen from behind, facing a packed ballroom under chandeliers", ar: "متحدث من الخلف أمام قاعة ممتلئة تحت الثريات" },
  },
  {
    src: "/video/stills/jeddah-dialogue.webp",
    caption: { en: "Panel with Abdulrahman and Ahmed Hijazy", ar: "جلسة حوارية مع عبدالرحمن وأحمد حجازي" },
    place: { en: "Jeddah", ar: "جدة" },
    alt: { en: "Two speakers in gold armchairs on a blue stage", ar: "متحدثان على كرسيين ذهبيين فوق مسرح أزرق" },
  },
  {
    src: "/video/stills/podcast-dubai.webp",
    caption: { en: "Podcast with course graduates", ar: "بودكاست مع خريجي الدورة" },
    place: { en: "Dubai", ar: "دبي" },
    alt: { en: "Podcast set with two white armchairs, microphones and a camera on a tripod", ar: "استوديو بودكاست بكرسيين أبيضين وميكروفونات وكاميرا على حامل" },
  },
  {
    src: "/video/stills/dammam-aou.webp",
    caption: { en: "Arab Open University event", ar: "فعالية الجامعة العربية المفتوحة" },
    place: { en: "Dammam", ar: "الدمام" },
    alt: { en: "Two men talking on a university stage in front of a projected slide", ar: "رجلان يتحاوران على مسرح جامعي أمام شريحة معروضة" },
  },
  {
    src: "/video/stills/podcast-studio.webp",
    caption: { en: "Podcast, two-camera studio setup", ar: "بودكاست، استوديو بكاميرتين" },
    place: { en: "Dubai", ar: "دبي" },
    alt: { en: "Two guests in yellow chairs against a green studio wall", ar: "ضيفان على كرسيين أصفرين أمام جدار استوديو أخضر" },
  },
  {
    src: "/video/stills/jeddah-speaker.webp",
    caption: { en: "Speaker close-up", ar: "لقطة قريبة للمتحدث" },
    place: { en: "Jeddah", ar: "جدة" },
    alt: { en: "Speaker gesturing while seated in a gold armchair, shallow depth of field", ar: "متحدث يشير بيديه وهو جالس على كرسي ذهبي بعمق ميدان ضحل" },
  },
];

export const ai = {
  title: { en: "Generative AI", ar: "الذكاء الاصطناعي التوليدي" } as L,
  intro: {
    en: "I work with generative models three ways: through aggregators like Higgsfield and Magnific, through custom API builds, and locally with ComfyUI. These films have no camera and no actors: I write the prompts, generate and pick the shots, keep characters consistent, then edit, grade and finish the sound.",
    ar: "أعمل مع النماذج التوليدية بثلاث طرق: عبر منصات تجمع النماذج مثل Higgsfield وMagnific، وعبر ربط مخصص بالـ API، ومحليًا عبر ComfyUI. هذه الأفلام بلا كاميرا وبلا ممثلين: أكتب البرومبت، وأولّد اللقطات وأختارها، وأحافظ على ثبات الشخصيات، ثم أعمل المونتاج والتلوين والصوت.",
  } as L,
  toolsTitle: { en: "Platforms and pipelines", ar: "المنصات ومسارات العمل" } as L,
  filmsTitle: { en: "AI films and ads", ar: "أفلام وإعلانات بالذكاء الاصطناعي" } as L,
  filmsNote: { en: "Best first. Every frame generated; every cut, caption and sound done by hand.", ar: "الأفضل أولًا. كل لقطة مولّدة، وكل قطع وكابشن وصوت بيدي." } as L,
  modelsTitle: { en: "Models I work with", ar: "النماذج التي أعمل بها" } as L,
  modelsNote: { en: "I pick the model per shot: whichever gives the best result for that motion, face or style.", ar: "أختار النموذج لكل لقطة: الأفضل لتلك الحركة أو الوجه أو الستايل." } as L,
  routes: [
    { title: { en: "Aggregators", ar: "منصات النماذج" } as L, body: { en: "Higgsfield and Magnific: the latest image and video models in one place, fast to compare.", ar: "Higgsfield وMagnific: أحدث نماذج الصور والفيديو في مكان واحد، وسهل المقارنة بينها." } as L },
    { title: { en: "Custom API builds", ar: "ربط مخصص بالـ API" } as L, body: { en: "Scripts that call model APIs directly for batch jobs and repeatable pipelines.", ar: "سكربتات تستدعي النماذج مباشرة للمهام الكبيرة والمسارات المتكررة." } as L },
    { title: { en: "Local models", ar: "نماذج محلية" } as L, body: { en: "ComfyUI workflows on my own machine, for full control and private footage.", ar: "مسارات ComfyUI على جهازي، لتحكم كامل وخصوصية اللقطات." } as L },
  ],
};

/** Ranked best first: realism, character consistency and edit quality. */
export const aiClips: Clip[] = [
  {
    id: "ai-ziad-step",
    title: { en: "Ziad’s STEP story", ar: "تجربة زياد مع الستيب" },
    kind: { en: "Student story ad · Fully AI-generated", ar: "إعلان قصة طالب · مولّد بالكامل" },
    role: { en: "Script, generation, edit, motion graphics", ar: "سكربت وتوليد ومونتاج وموشن جرافيك" },
    src: "/video/ai-ziad-step.mp4",
    poster: "/video/posters/ai-ziad-step.webp",
    duration: "1:36",
  },
  {
    id: "ai-noura-story",
    title: { en: "Noura’s story", ar: "تجربة نورة" },
    kind: { en: "Testimonial-style ad · Photoreal AI", ar: "إعلان بأسلوب تجربة · ذكاء اصطناعي واقعي" },
    role: { en: "Generation, character consistency, edit", ar: "توليد وثبات الشخصية ومونتاج" },
    src: "/video/ai-noura-story.mp4",
    poster: "/video/posters/ai-noura-story.webp",
    duration: "1:10",
  },
  {
    id: "ai-abdulrahman-step",
    title: { en: "STEP intensive course", ar: "الدورة المكثفة للستيب" },
    kind: { en: "Course ad · Fully AI-generated", ar: "إعلان دورة · مولّد بالكامل" },
    role: { en: "Generation, edit, captions", ar: "توليد ومونتاج وكابشن" },
    src: "/video/ai-abdulrahman-step.mp4",
    poster: "/video/posters/ai-abdulrahman-step.webp",
    duration: "0:29",
  },
  {
    id: "ai-fraud-awareness",
    title: { en: "Fraud awareness", ar: "التوعية بالاحتيال" },
    kind: { en: "Public awareness · Arabic + English", ar: "توعية عامة · عربي وإنجليزي" },
    role: { en: "Prompts, generation, edit, captions", ar: "برومبت وتوليد ومونتاج وكابشن" },
    src: "/video/ai-fraud-awareness.mp4",
    poster: "/video/posters/ai-fraud-awareness.webp",
    duration: "0:42",
  },
  {
    id: "ai-backyard-coffee",
    title: { en: "Backyard coffee", ar: "قهوة Backyard" },
    kind: { en: "Brand ad · Fully AI-generated", ar: "إعلان علامة تجارية · مولّد بالكامل" },
    role: { en: "Prompts, generation, edit", ar: "برومبت وتوليد ومونتاج" },
    src: "/video/ai-backyard-coffee.mp4",
    poster: "/video/posters/ai-backyard-coffee.webp",
    duration: "0:31",
  },
  {
    id: "ai-coffee-types",
    title: { en: "Coffee types", ar: "أنواع القهوة" },
    kind: { en: "3D character reel · English lesson", ar: "ريل شخصيات ثلاثية الأبعاد · درس إنجليزي" },
    role: { en: "Character design, generation, edit", ar: "تصميم الشخصيات وتوليد ومونتاج" },
    src: "/video/ai-coffee-types.mp4",
    poster: "/video/posters/ai-coffee-types.webp",
    duration: "0:28",
  },
  {
    id: "ai-oxford-book",
    title: { en: "The talking dictionary", ar: "القاموس المتكلم" },
    kind: { en: "3D character reel · English lesson", ar: "ريل شخصية ثلاثية الأبعاد · درس إنجليزي" },
    role: { en: "Character, generation, edit", ar: "شخصية وتوليد ومونتاج" },
    src: "/video/ai-oxford-book.mp4",
    poster: "/video/posters/ai-oxford-book.webp",
    duration: "0:24",
  },
  {
    id: "ai-character-film",
    title: { en: "Face to face", ar: "وجهًا لوجه" },
    kind: { en: "Cinematic test · Character consistency", ar: "تجربة سينمائية · ثبات الشخصية" },
    role: { en: "Prompts, generation, edit", ar: "برومبت وتوليد ومونتاج" },
    src: "/video/ai-character-film.mp4",
    poster: "/video/posters/ai-character-film.webp",
    duration: "0:10",
  },
];

/** logo: a PNG app icon (shown as is) or a single-colour SVG (tinted to the text colour). */
export const aiUses: { tool: string; logo?: string; use: L }[] = [
  { tool: "Higgsfield", logo: "/logos/higgsfield.png", use: { en: "AI video shots, camera moves, characters", ar: "لقطات فيديو وحركات كاميرا وشخصيات" } },
  { tool: "Magnific", logo: "/logos/magnific.png", use: { en: "Images, B-roll, upscaling, relighting", ar: "صور وبي رول وتكبير دقة وإعادة إضاءة" } },
  { tool: "ComfyUI", logo: "/logos/comfyui.png", use: { en: "Local models and custom node workflows", ar: "نماذج محلية ومسارات عمل مخصصة" } },
  { tool: "ElevenLabs", logo: "/logos/elevenlabs.svg", use: { en: "Voice-over, voice changing, sound effects", ar: "تعليق صوتي وتغيير الصوت ومؤثرات صوتية" } },
  { tool: "Seedance", logo: "/logos/bytedance.svg", use: { en: "Video generation and footage fixes", ar: "توليد فيديو وإصلاح اللقطات" } },
  { tool: "Runway", logo: "/logos/runway.png", use: { en: "Clean-up, e.g. removing burned-in captions", ar: "تنظيف اللقطات، مثل إزالة الكابشن المطبوع" } },
  { tool: "Custom APIs", use: { en: "Batch generation through direct model APIs", ar: "توليد بالجملة عبر الـ API مباشرة" } },
];

/** Models I use through the aggregators, direct APIs or locally. */
export const aiModels: { group: L; items: { name: string; logo?: string }[] }[] = [
  {
    group: { en: "Video", ar: "فيديو" },
    items: [
      { name: "Veo 3", logo: "/logos/veo.png" },
      { name: "Kling", logo: "/logos/kling.png" },
      { name: "Sora", logo: "/logos/openai.svg" },
      { name: "Seedance", logo: "/logos/bytedance.svg" },
      { name: "Hailuo", logo: "/logos/hailuo.png" },
      { name: "Wan", logo: "/logos/wan.png" },
      { name: "Runway", logo: "/logos/runway.png" },
      { name: "Luma", logo: "/logos/luma.png" },
    ],
  },
  {
    group: { en: "Image", ar: "صور" },
    items: [
      { name: "Nano Banana", logo: "/logos/googlegemini.svg" },
      { name: "GPT Image", logo: "/logos/openai.svg" },
      { name: "Flux", logo: "/logos/flux.png" },
      { name: "Seedream", logo: "/logos/bytedance.svg" },
      { name: "Midjourney" },
      { name: "Magnific", logo: "/logos/magnific.png" },
    ],
  },
  {
    group: { en: "Voice and music", ar: "صوت وموسيقى" },
    items: [
      { name: "ElevenLabs", logo: "/logos/elevenlabs.svg" },
      { name: "Suno", logo: "/logos/suno.png" },
    ],
  },
];

export const editTools: { tool: string; logo: string }[] = [
  { tool: "Premiere Pro", logo: "/logos/adobepremierepro.svg" },
  { tool: "After Effects", logo: "/logos/adobeaftereffects.svg" },
];

export const skills: { title: L; items: L }[] = [
  {
    title: { en: "Editing and post", ar: "المونتاج وما بعد الإنتاج" },
    items: {
      en: "Premiere Pro, After Effects, motion graphics, animated captions, colour, sound design, Arabic and English subtitles, 9:16 and long-form.",
      ar: "بريمير برو، أفتر إفكتس، موشن جرافيك، كابشن متحرك، تلوين، تصميم صوت، ترجمة عربية وإنجليزية، فيديو عمودي وطويل.",
    },
  },
  {
    title: { en: "Filming and production", ar: "التصوير والإنتاج" },
    items: {
      en: "Camera and lighting, locations and sets, food styling, live-stream and Zoom events, planning shoots for courses.",
      ar: "كاميرا وإضاءة، تجهيز المواقع والديكور، تنسيق الطعام، البث المباشر وفعاليات زوم، تخطيط تصوير الدورات.",
    },
  },
  {
    title: { en: "Faster workflow", ar: "سير عمل أسرع" },
    items: {
      en: "I automate the boring parts: project setup, render delivery, and a searchable library of 6,778 B-roll clips.",
      ar: "أؤتمت الأجزاء المملة: تجهيز المشروع وتسليم الرندر ومكتبة بحث لـ 6,778 لقطة بي رول.",
    },
  },
];

export const experience: { role: L; org: L; dates: string }[] = [
  { role: { en: "Senior Video Editor and Camera Operator", ar: "مونتير أول ومصوّر" }, org: { en: "Dalilk Academy (AmbitionHG), UAE", ar: "أكاديمية دليلك (AmbitionHG)، الإمارات" }, dates: "2023 – now" },
  { role: { en: "Content Creator", ar: "صانع محتوى" }, org: { en: "MyStation, 10 restaurant brands, UAE", ar: "MyStation، 10 علامات مطاعم، الإمارات" }, dates: "2022 – 2023" },
  { role: { en: "Filmmaker", ar: "صانع أفلام" }, org: { en: "RedCap Productions, Egypt", ar: "RedCap Productions، مصر" }, dates: "2019 – 2022" },
  { role: { en: "Videographer", ar: "مصوّر فيديو" }, org: { en: "Alexandria University, Egypt", ar: "جامعة الإسكندرية، مصر" }, dates: "2020 – 2022" },
  { role: { en: "Creative Director", ar: "مدير إبداعي" }, org: { en: "Ededia e-learning, Egypt", ar: "Ededia للتعليم الإلكتروني، مصر" }, dates: "2020" },
];

export const videoContact = {
  title: { en: "Hiring a video editor?", ar: "تبحث عن مونتير؟" } as L,
  body: {
    en: "Send me the role or the brief. I reply within two working days, in English or Arabic.",
    ar: "أرسل لي الوظيفة أو البريف. أرد خلال يومَي عمل، بالعربية أو الإنجليزية.",
  } as L,
  subject: { en: "Video editor role", ar: "وظيفة مونتير" } as L,
  profilesTitle: { en: "My profiles", ar: "حساباتي" } as L,
  profilesNote: {
    en: "My own channels, where I talk about AI. They show me, not my client editing.",
    ar: "قنواتي الشخصية، أتحدث فيها عن الذكاء الاصطناعي. تعرّفك بي، وليست أعمال المونتاج للعملاء.",
  } as L,
  linkedin: "https://www.linkedin.com/in/bnsaied",
  whatsapp: "https://wa.me/971524627678",
  cv: "/cv/Mohamed-Said-CV-Video-Editor.pdf",
  aiLink: { en: "I also build AI products", ar: "وأبني أيضًا منتجات بالذكاء الاصطناعي" } as L,
  errorVideo: { en: "This video didn’t load.", ar: "لم يتم تحميل الفيديو." } as L,
  showMore: { en: "Show 2 more videos", ar: "اعرض فيديوهين آخرين" } as L,
  barCv: { en: "CV", ar: "السيرة" } as L,
  barEmail: { en: "Email", ar: "إيميل" } as L,
};
