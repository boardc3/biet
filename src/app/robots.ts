import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { isIndexable } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable()) {
    // Preview and vercel.app deployments stay out of search.
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/ic-zoom", "/ws-zoom", "/embed/", "/og"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
