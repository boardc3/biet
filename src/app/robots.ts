import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { isIndexable } from "@/lib/seo";

const previewBots = ["facebookexternalhit", "Facebot", "Twitterbot", "LinkedInBot", "Slackbot", "Slackbot-LinkExpanding", "WhatsApp", "TelegramBot", "Discordbot", "Pinterestbot"];

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable()) {
    // Preview and vercel.app deployments stay out of search, but the crawlers that
    // build link previews for social apps may still read pages so shared links look right.
    return {
      rules: [
        { userAgent: previewBots, allow: "/" },
        { userAgent: "*", disallow: "/" },
      ],
    };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/ic-zoom", "/ws-zoom", "/embed/", "/og"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
