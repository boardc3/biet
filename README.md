# bietsimkin.com

The website for Biet Simkin (Guided by Biet). Next.js (App Router) and React,
deployed on Vercel.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

| What | Where |
| --- | --- |
| Pages | `src/app/<route>/page.tsx` |
| Site facts, links, testimonials, press list | `src/content/site.ts` |
| Design system (colour, type, motion) | `src/app/globals.css` |
| Header, footer, newsletter, video, testimonials | `src/components` |
| SEO helpers, structured data | `src/lib/seo.ts` |
| Photography slots | `public/media` (see its README) |
| Newsletter form frame | `public/embed/newsletter.html` |
| Old Wix URL redirects | `next.config.ts` |

## Newsletter

"Join my newsletter" uses Biet's existing Kajabi form (form `2148833253` on
`guided-by-biet.mykajabi.com`), so subscribers keep landing in the same list.
The form is loaded inside `public/embed/newsletter.html`, which restyles it.
It appears in the header button, a dialog, a one-time invitation, the footer
and `/newsletter`.

After someone subscribes, Kajabi shows its own confirmation page. To bring
people back to the site instead, set the Kajabi form's "after submit" page to
`https://www.bietsimkin.com/newsletter/thanks`.

## Analytics

Vercel Web Analytics and Speed Insights are built in; turn them on in the
Vercel project (Analytics and Speed Insights tabs). The previous Wix site had
no Google Analytics, Tag Manager or Meta Pixel installed, only Wix's built-in
statistics, so there were no tracking IDs to carry over. To add any of them,
set these environment variables in Vercel and redeploy:

| Variable | Example |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_GTM_ID` | `GTM-XXXXXXX` |
| `NEXT_PUBLIC_META_PIXEL_ID` | `1234567890` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console token |

Events sent to every tool that is on: `cta_click`, `begin_checkout`,
`newsletter_open`, `newsletter_submit`, `video_play`, `outbound_click`,
`email_click`.

## Search engines

- Every page has its own title, description, canonical URL, share image
  (`/og?line=…`) and structured data (Person, WebSite, Breadcrumbs, Book,
  Product/Offer, Service, VideoObject, MusicAlbum).
- `sitemap.xml` and `robots.txt` are generated.
- **Only the real domain is indexable.** Any deployment that is not production
  on `bietsimkin.com` sends `noindex` and a disallow-all robots file, so the
  preview never competes with the live site. After pointing the domain at
  Vercel, redeploy once. To force it either way set `SITE_INDEXABLE=true|false`.
- Old Wix URLs (`/copy-of-about`, `/inner-circle`, …) permanently redirect to
  their new addresses.

## Going live on bietsimkin.com

1. Add `bietsimkin.com` and `www.bietsimkin.com` to the Vercel project.
2. Point DNS at Vercel (the domain is currently connected to Wix).
3. Redeploy, then submit `https://www.bietsimkin.com/sitemap.xml` in Google
   Search Console.
4. Send one test signup through the newsletter form.
