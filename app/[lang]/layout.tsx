import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Readex_Pro } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { profile } from "@/content/site";
import { dir, hasLocale, locales, ui } from "@/lib/i18n";
import "../globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const readex = Readex_Pro({
  subsets: ["arabic", "latin"],
  variable: "--font-readex",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const title =
    lang === "ar"
      ? "محمد سعيد · بانٍ لمنتجات الذكاء الاصطناعي"
      : "Mohamed Said, AI product builder";
  const description =
    lang === "ar"
      ? "مونتير لثماني سنوات، والآن أبني منتجات ذكاء اصطناعي يستخدمها الناس. عربي أولًا."
      : "Eight years as a video editor, now building AI products people use. Arabic-first by default.";
  return {
    metadataBase: new URL("https://bnsaied.com"),
    title: { default: title, template: `%s | ${profile.name[lang]}` },
    description,
    alternates: { canonical: `/${lang}`, languages: { en: "/en", ar: "/ar" } },
    openGraph: { title, description, type: "website", locale: lang === "ar" ? "ar" : "en" },
  };
}

export const viewport: Viewport = {
  themeColor: "#f4f5f7",
  colorScheme: "light",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      dir={dir(lang)}
      className={`${archivo.variable} ${readex.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-panel"
        >
          {ui.skip[lang]}
        </a>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
