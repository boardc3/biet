import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Plate, hasPlate } from "@/components/Plate";
import { Video } from "@/components/Video";
import { Voices } from "@/components/Voices";
import { site, voices } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Biet Simkin, the “David Bowie of Meditation”",
  description:
    "Raised by a shaman in New York City and signed to Sony Records at 19, Biet Simkin is a spiritual teacher, best-selling author of Don’t Just Sit There! and founder of Guided by Biet.",
  path: "/about",
  shareLine: "The David Bowie of meditation.",
});

export default function About() {
  const portrait = hasPlate("about-portrait");
  return (
    <>
      <PageHero
        title={
          <>
            The David Bowie <span className="display--italic">of meditation.</span>
          </>
        }
        lede="Biet Simkin is a world-renowned spiritual teacher and best-selling author. As a musician, she weaves the world of pop culture and spirituality."
      />

      <section id="about" className="room room--flush-top" aria-label="Biography">
        <div className={`wrap split${portrait ? " split--even" : ""}`}>
          {portrait ? (
            <div className="split__sticky">
              <Plate slot="about-portrait" alt="Portrait of Biet Simkin" shape="arch" priority />
            </div>
          ) : (
            <h2 className="kicker">Her story</h2>
          )}
          <div className="stack stack--l">
            <p className="statement statement--wide" data-reveal>
              Biet is the world-renowned Spiritual Teacher and Best-Selling Author, dubbed the “David Bowie of
              Meditation.”
            </p>
            <div className="prose" data-reveal>
              <p>
                As a musician, Biet weaves the world of pop culture and spirituality, teaching practical applications of
                ancient spiritual wisdom. The teachings are featured in Biet’s best-selling book,{" "}
                <Link href="/shop">Don’t Just Sit There!</Link>, published by Simon &amp; Schuster.
              </p>
              <p>
                Raised by a Shaman in New York City, Biet signed to Sony Records at the age of 19 as a singer/songwriter.
                Diving into a Rock &amp; Roll lifestyle, Biet became a high profile DJ in the fashion and art scene in
                Manhattan. However, following a string of life changing events, including the sudden loss of her
                daughter, Biet turned to her lifetime study of meditation and launched the Guided By Biet event series.
              </p>
              <p>
                The meditation experience reached a contemporary audience in cultural spaces, including museums, hotels,
                and fashion shows. These groundbreaking events were scored by her own music and were the first time
                meditation was mixed with pop culture, creating the revolutionary new trend.
              </p>
              <p>
                Featured in Vogue, Forbes, ELLE, and TIME magazine, and as the resident meditation guru at The Sundance
                Film Festival, 1 Hotels, MoMA, and SoulCycle, Biet advises spiritual best practices for hotels and
                brands. Biet is best known for modernizing the spiritual path and has been called the “Meditation Guru
                for the next generation.”
              </p>
            </div>
            <div className="actions" data-reveal>
              <a className="btn btn--ghost" href={site.instagram.house.url} target="_blank" rel="noopener noreferrer">
                Instagram {site.instagram.house.handle}
              </a>
              <Link className="link" href="/work-with-biet">Work with Biet</Link>
            </div>
            <Plate slot="about-second" alt="Biet Simkin" ratio="3 / 2" />
          </div>
        </div>
      </section>

      <section id="onresilience" className="room room--mist" aria-labelledby="resilience-title">
        <div className="wrap stack stack--xl">
          <div className="split">
            <h2 id="resilience-title" className="display display--l">On resilience</h2>
            <p className="lede lede--wide">
              A short film with Biet.
            </p>
          </div>
          <Video provider="vimeo" id="322690377" title="On resilience" caption="Play the film, 6 min 49 s" />
        </div>
      </section>

      <section id="testimonials" className="room room--blush" aria-labelledby="testimonials-title">
        <div className="wrap stack stack--xl">
          <h2 id="testimonials-title" className="display display--l">In their words</h2>
          <Voices voices={voices} />
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbs([{ name: "About", path: "/about" }]),
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Biet on resilience",
            description: "A short film with Biet Simkin on resilience.",
            uploadDate: "2019-03-10T22:05:14-05:00",
            duration: "PT6M49S",
            embedUrl: "https://player.vimeo.com/video/322690377",
            thumbnailUrl: `${site.url}/og?line=${encodeURIComponent("On resilience.")}`,
          },
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: `${site.url}/about`,
            name: "About Biet Simkin",
            mainEntity: { "@id": `${site.url}/#biet` },
          },
        ]}
      />
    </>
  );
}
