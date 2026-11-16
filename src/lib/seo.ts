import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Search engines are told to index only the real production domain.
 * Preview and vercel.app deployments stay out of search results so they
 * never compete with bietsimkin.com. Override with SITE_INDEXABLE=true|false.
 */
export function isIndexable(): boolean {
  const flag = process.env.SITE_INDEXABLE;
  if (flag === "true") return true;
  if (flag === "false") return false;
  const prodHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "";
  return process.env.VERCEL_ENV === "production" && prodHost.endsWith("bietsimkin.com");
}

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Short line drawn on the share image. Defaults to the title. */
  shareLine?: string;
  noindex?: boolean;
};

export function pageMetadata({ title, description, path, shareLine, noindex }: PageSeo): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const og = `/og?line=${encodeURIComponent(shareLine ?? title)}`;
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noindex || !isIndexable() ? { index: false, follow: !noindex } : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: "en_US",
      images: [{ url: og, width: 1200, height: 630, alt: `${site.name}. ${shareLine ?? title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [og],
    },
  };
}

type Crumb = { name: string; path: string };

export function breadcrumbs(trail: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? site.url : `${site.url}${c.path}`,
    })),
  };
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#biet`,
  name: "Biet Simkin",
  url: site.url,
  jobTitle: "Spiritual teacher, author and artist",
  description:
    "Spiritual teacher and best-selling author of Don’t Just Sit There!, dubbed the “David Bowie of Meditation.” Founder of Guided by Biet.",
  email: `mailto:${site.email}`,
  sameAs: [site.instagram.house.url, site.instagram.guided.url, "https://open.spotify.com/album/2uP7Hfa8gIdbtZyl1tLUcu"],
  knowsAbout: ["Meditation", "Breathwork", "Somatic practice", "Spiritual teaching", "Music"],
  brand: { "@type": "Brand", name: "Guided by Biet" },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  alternateName: site.brand,
  description: site.description,
  publisher: { "@id": `${site.url}/#biet` },
  inLanguage: "en-US",
};
