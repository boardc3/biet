import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { NewsletterButton } from "@/components/Newsletter";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { site } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Events: Guided by Biet Experiences",
  description:
    "Guided by Biet events: immersive meditation and breathwork experiences scored by Biet Simkin’s own music. Join the newsletter to hear about the next one.",
  path: "/events",
  shareLine: "Events.",
});

export default function Events() {
  return (
    <>
      <PageHero
        title={
          <>
            Events, <span className="display--italic">guided by Biet.</span>
          </>
        }
        lede="No public dates are listed right now. The newsletter is where Guided by Biet events are announced."
        image="tent"
      >
        <NewsletterButton source="events">Join my newsletter</NewsletterButton>
        <a className="link" href={site.instagram.house.url} target="_blank" rel="noopener noreferrer">
          Follow {site.instagram.house.handle}
        </a>
      </PageHero>

      <section className="room room--flush-top" aria-label="Past events">
        <div className="wrap mosaic">
          <Photo name="moma" ratio="3 / 2" className="mosaic__wide" sizes="(max-width: 830px) 92vw, 60vw" caption="Guided by Biet at MoMA" />
          <Photo name="planetarium" ratio="3 / 4" sizes="(max-width: 830px) 46vw, 30vw" />
          <Photo name="armsRaised" ratio="3 / 4" sizes="(max-width: 830px) 46vw, 30vw" />
          <Photo name="whiteDress" ratio="3 / 2" className="mosaic__wide" sizes="(max-width: 830px) 92vw, 60vw" />
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="private-events">
        <div className="wrap split">
          <h2 id="private-events" className="display display--m">Planning your own?</h2>
          <div className="stack stack--l">
            <p className="prose">
              Scored by her own music, Biet creates explosive, interactive meditation experiences that scale from small
              groups to thousands of attendees, and has held events and residencies at luxury properties globally.
            </p>
            <div className="actions">
              <Link className="btn btn--ghost" href="/work-with-biet">Work with Biet</Link>
              <Link className="link" href="/speaking">Speaking</Link>
            </div>
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumbs([{ name: "Events", path: "/events" }])} />
    </>
  );
}
