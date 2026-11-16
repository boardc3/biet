import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Biet Simkin",
    short_name: "Biet",
    description: "Spiritual teacher, best-selling author and artist. Guided by Biet.",
    start_url: "/",
    display: "browser",
    background_color: "#f6f1ed",
    theme_color: "#f6f1ed",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
