"use client";

import { track as vercelTrack } from "@vercel/analytics";

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

/** Sends one named event to every analytics tool that is switched on. */
export function track(event: string, params: Params = {}) {
  try {
    vercelTrack(event, params);
  } catch {}
  if (typeof window === "undefined") return;
  if (window.gtag) window.gtag("event", event, params);
  else if (window.dataLayer) window.dataLayer.push({ event, ...params });
  if (window.fbq && event === "newsletter_submit") window.fbq("track", "Lead");
}
