import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Motion } from "@/components/Motion";
import { NewsletterProvider } from "@/components/Newsletter";
import { site } from "@/content/site";
import { isIndexable, personSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const display = localFont({
  src: [
    { path: "../fonts/BodoniModa.woff2", style: "normal", weight: "400 900" },
    { path: "../fonts/BodoniModa-Italic.woff2", style: "italic", weight: "400 900" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Didot", "Bodoni MT", "Georgia", "serif"],
});

const text = localFont({
  src: [
    { path: "../fonts/Jost.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/Jost-Italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-text",
  display: "swap",
  fallback: ["Futura", "Century Gothic", "Avenir Next", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Spiritual Teacher, Author, Artist`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.brand,
  category: "Wellness",
  formatDetection: { telephone: false },
  robots: isIndexable() ? { index: true, follow: true } : { index: false, follow: false },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#F6F1ED",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <head>
        {/* Marks the page as scripted before first paint, so reveal styles never hide content when JavaScript is off. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <NewsletterProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </NewsletterProvider>
        <Motion />
        <Analytics />
        <JsonLd data={[personSchema, websiteSchema]} />
      </body>
    </html>
  );
}
