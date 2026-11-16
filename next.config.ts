import type { NextConfig } from "next";

/**
 * Every URL the Wix site exposed is mapped to its new home so existing
 * links, bookmarks and search rankings carry over.
 */
const legacyRedirects: Array<[string, string]> = [
  ["/copy-of-about", "/speaking"],
  ["/copy-of-meditation-music", "/work-with-biet"],
  ["/copy-of-work-with-biet", "/press"],
  ["/copy-of-press", "/events"],
  ["/copy-of-speaking", "/music"],
  ["/copy-of-work-with-biet-1", "/courses"],
  ["/inner-circle", "/the-source"],
  ["/guided-by-biet-inner-circle-join", "/the-source/join"],
  ["/home", "/"],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The share-image route reads its fonts from disk at request time.
  outputFileTracingIncludes: { "/og": ["./src/fonts/og/*"] },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/embed/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
