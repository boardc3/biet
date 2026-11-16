"use client";

import { useEffect } from "react";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { track } from "./track";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/**
 * Vercel Web Analytics and Speed Insights are always on (cookieless).
 * Google Analytics 4, Google Tag Manager and the Meta Pixel switch on when
 * their IDs are set as environment variables in Vercel. See README.
 */
export function Analytics() {
  useEffect(() => {
    // One listener reports every marked call to action and every outbound link.
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("a,button");
      if (!el) return;
      const name = el.dataset.event;
      const href = el instanceof HTMLAnchorElement ? el.href : "";
      if (name) {
        track(name, { label: el.dataset.label ?? el.textContent?.trim().slice(0, 60) ?? "", page: location.pathname });
      } else if (href && /^https?:/.test(href) && new URL(href).host !== location.host) {
        track("outbound_click", { url: href.split("?")[0], page: location.pathname });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { page: location.pathname });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
      {GTM_ID ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      ) : null}
      {GA_ID ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      ) : null}
      {PIXEL_ID ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      ) : null}
    </>
  );
}
