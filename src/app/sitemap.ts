import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const pages: Array<{ path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }> = [
  { path: "/", priority: 1, freq: "weekly" },
  { path: "/about", priority: 0.9, freq: "monthly" },
  { path: "/the-source", priority: 0.9, freq: "monthly" },
  { path: "/membership", priority: 0.9, freq: "monthly" },
  { path: "/breathwork-membership", priority: 0.8, freq: "monthly" },
  { path: "/work-with-biet", priority: 0.8, freq: "monthly" },
  { path: "/speaking", priority: 0.8, freq: "monthly" },
  { path: "/press", priority: 0.7, freq: "monthly" },
  { path: "/music", priority: 0.7, freq: "monthly" },
  { path: "/shop", priority: 0.7, freq: "monthly" },
  { path: "/the-source/join", priority: 0.6, freq: "monthly" },
  { path: "/rock-bottom-signup", priority: 0.5, freq: "monthly" },
  { path: "/newsletter", priority: 0.5, freq: "yearly" },
  { path: "/events", priority: 0.4, freq: "weekly" },
  { path: "/courses", priority: 0.4, freq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map((p) => ({
    url: p.path === "/" ? site.url : `${site.url}${p.path}`,
    lastModified,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
