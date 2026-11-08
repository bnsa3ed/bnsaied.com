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
  metaTitle: { en: "Video editor & generative AI video editor", ar: "مونتير ومحرر فيديو بالذكاء الاصطناعي" } as L,
  metaDescription: {
    en: "Showreel and selected work: short films, ads, events, interviews, social media and fully AI-generated films. 7+ years of editing and filming.",
    ar: "الشوريل وأعمال مختارة: أفلام قصيرة وإعلانات وفعاليات ومقابلات وسوشيال ميديا وأفلام مولّدة بالكامل بالذكاء الاصطناعي. أكثر من 7 سنوات في المونتاج والتصوير.",
  } as L,
  eyebrow: { en: "Video portfolio", ar: "معرض أعمال الفيديو" } as L,
  title: { en: "Senior video editor and generative AI video editor.", ar: "مونتير أول ومحرر فيديو بالذكاء الاصطناعي." } as L,
  lede: {
    en: "Seven years of editing and filming short films, ads, events, interviews and social content. I also make films with AI from start to finish, and use it to edit faster.",
    ar: "سبع سنوات من المونتاج والتصوير لأفلام قصيرة وإعلانات وفعاليات ومقابلات ومحتوى سوشيال. وأصنع أيضًا أفلامًا بالذكاء الاصطناعي من البداية للنهاية، وأستخدمه لأُنجز المونتاج أسرع.",
  } as L,
  ctaReel: { en: "Watch the showreel", ar: "شاهد الشوريل" } as L,
  ctaCv: { en: "Download CV (PDF)", ar: "حمّل السيرة الذاتية (PDF)" } as L,
  ctaEmail: { en: "Email me", ar: "راسلني" } as L,
  availability: {
    en: "Open to full-time and freelance video roles, UAE or relocation.",
    ar: "متاح لوظائف الفيديو بدوام كامل أو بشكل حر، في الإمارات أو مع الانتقال.",
  } as L,
};

export const facts: { value: string; label: L }[] = [
  { value: "7+", label: { en: "years editing and filming", ar: "سنوات في المونتاج والتصوير" } },
  { value: "50", label: { en: "pieces of content a week at Dalilk Academy", ar: "مادة أسبوعيًا في أكاديمية دليلك" } },
  { value: "30K+", label: { en: "attendees at live streams I produce", ar: "حاضر في البث المباشر الذي أنتجه" } },
];

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
  title: { en: "Generative AI films", ar: "أفلام بالذكاء الاصطناعي" } as L,
  intro: {
    en: "No camera, no actors. I write the prompts, generate and pick the shots, keep characters consistent, then edit, grade and finish the sound.",
    ar: "بلا كاميرا وبلا ممثلين. أكتب البرومبت، وأولّد اللقطات وأختارها، وأحافظ على ثبات الشخصيات، ثم أعمل المونتاج والتلوين والصوت.",
  } as L,
  toolsTitle: { en: "How I use AI in the edit", ar: "كيف أستخدم الذكاء الاصطناعي في المونتاج" } as L,
};

export const aiClips: Clip[] = [
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
    id: "ai-fraud-awareness",
    title: { en: "Fraud awareness", ar: "التوعية بالاحتيال" },
    kind: { en: "Public awareness · Arabic + English", ar: "توعية عامة · عربي وإنجليزي" },
    role: { en: "Prompts, generation, edit, captions", ar: "برومبت وتوليد ومونتاج وكابشن" },
    src: "/video/ai-fraud-awareness.mp4",
    poster: "/video/posters/ai-fraud-awareness.webp",
    duration: "0:42",
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

export const aiUses: { tool: string; use: L }[] = [
  { tool: "Magnific", use: { en: "Images, illustrations, B-roll, upscaling", ar: "صور ورسومات وبي رول وتكبير الدقة" } },
  { tool: "Higgsfield", use: { en: "AI video shots and camera moves", ar: "لقطات فيديو وحركات كاميرا بالذكاء الاصطناعي" } },
  { tool: "ComfyUI", use: { en: "Custom image and video workflows", ar: "مسارات عمل مخصصة للصور والفيديو" } },
  { tool: "ElevenLabs", use: { en: "Voice-over, voice changing, sound effects", ar: "تعليق صوتي وتغيير الصوت ومؤثرات صوتية" } },
  { tool: "Seedance · Runway", use: { en: "Fixing footage, e.g. removing burned-in captions", ar: "إصلاح اللقطات، مثل إزالة الكابشن المطبوع" } },
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
  { role: { en: "Senior Video Editor", ar: "مونتير أول" }, org: { en: "Dalilk Academy, UAE", ar: "أكاديمية دليلك، الإمارات" }, dates: "2023 – now" },
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
