import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Quotes } from "@/components/Quotes";
import { Video } from "@/components/Video";
import { site, voices } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Speaking & Public Meditation Experiences",
  description:
    "Book Biet Simkin to speak. A recognized public speaker and author, Biet leads interactive meditation experiences that scale from small groups to thousands, scored by her own music.",
  path: "/speaking",
  shareLine: "Biet commands a room.",
});

const venues = ["The Sundance Film Festival", "MoMA", "1 Hotels", "SoulCycle", "Soho House"];
const picks = voices.filter((v) => ["Light Watkins", "Ruby Warrington"].includes(v.name));

export default function Speaking() {
  return (
    <>
      <PageHero
        title={
          <>
            Biet commands <span className="display--italic">a room.</span>
          </>
        }
        lede="A recognized public speaker and author, with the power to inspire and impact lives."
        image="onStage"
        imageFocus="60% 40%"
      >
        <a className="btn" href={`mailto:${site.email}?subject=Speaking%20inquiry`} data-event="cta_click" data-label="Speaking, inquire">
          Invite Biet to speak
        </a>
      </PageHero>

      <section className="room room--flush-top" aria-label="Speaking reel">
        <div className="wrap stack stack--l">
          <Video provider="vimeo" id="322689467" title="Biet Simkin, speaking" caption="Play the reel, 2 minutes" poster="armsRaised" />
          <div className="mosaic">
            <Photo name="moma" ratio="3 / 2" className="mosaic__wide" sizes="(max-width: 830px) 92vw, 60vw" caption="Guided by Biet at MoMA" />
            <Photo name="planetarium" ratio="3 / 4" sizes="(max-width: 830px) 46vw, 30vw" />
            <Photo name="tent" ratio="3 / 4" sizes="(max-width: 830px) 46vw, 30vw" />
            <Photo name="whiteDress" ratio="3 / 2" className="mosaic__wide" sizes="(max-width: 830px) 92vw, 60vw" />
          </div>
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="formats">
        <div className="wrap split">
          <h2 id="formats" className="display display--m">Two ways she takes the stage</h2>
          <div className="offerings">
            <div className="offering" data-reveal>
              <h3 className="offering__title">Speaking engagements</h3>
              <p className="offering__text">
                A recognized public speaker and author, Biet commands a room with the power to inspire and impact lives.
              </p>
            </div>
            <div className="offering" data-reveal>
              <h3 className="offering__title">Public meditation experiences</h3>
              <p className="offering__text">
                Scored by her own music, Biet creates explosive, interactive meditation experiences that scale from
                small groups to thousands of attendees, bringing spiritual content into a new arena.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="room" aria-labelledby="venues">
        <div className="wrap split">
          <h2 id="venues" className="kicker">Where she has taught</h2>
          <ul className="masthead" data-reveal>
            {venues.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="room room--blush" aria-label="What people say">
        <div className="wrap">
          <Quotes items={picks} />
        </div>
      </section>

      <section className="room" aria-labelledby="book-biet">
        <div className="wrap stack stack--l center">
          <h2 id="book-biet" className="display display--l">Bring Biet to your stage.</h2>
          <p className="lede">Conferences, festivals, hotels, brands and private gatherings.</p>
          <div className="actions">
            <a className="btn" href={`mailto:${site.email}?subject=Speaking%20inquiry`} data-event="cta_click" data-label="Speaking, email">
              Email {site.email}
            </a>
            <Link className="link" href="/work-with-biet">Everything Biet offers</Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbs([{ name: "Speaking", path: "/speaking" }]),
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Biet Simkin, speaking",
            description: "A two-minute reel of Biet Simkin speaking and leading public meditation experiences.",
            uploadDate: "2019-03-10T21:58:31-05:00",
            duration: "PT2M",
            embedUrl: "https://player.vimeo.com/video/322689467",
            thumbnailUrl: `${site.url}/og?line=${encodeURIComponent("Biet commands a room.")}`,
          },
        ]}
      />
    </>
  );
}
