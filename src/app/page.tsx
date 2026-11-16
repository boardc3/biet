import Link from "next/link";
import { Aperture } from "@/components/Aperture";
import { BreathCue } from "@/components/BreathCue";
import { Cross } from "@/components/Cross";
import { JsonLd } from "@/components/JsonLd";
import { NewsletterButton } from "@/components/Newsletter";
import { Voices } from "@/components/Voices";
import { featuredIn, site, voices } from "@/content/site";
import { media } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Biet Simkin | Spiritual Teacher, Author & Artist | Guided by Biet",
  description:
    "Biet Simkin, the “David Bowie of Meditation,” is a spiritual teacher, best-selling author and artist. Explore The Source, the membership, breathwork and private work.",
  path: "/",
  shareLine: "An ongoing installation.",
});

const epithets: Array<{ words: string; source?: string; url?: string }> = [
  { words: "“The David Bowie of spiritual teachers.”", source: "Stacy London" },
  {
    words: "“Hollywood’s favorite meditation guru.”",
    source: "Uproxx",
    url: "https://uproxx.com/life/biet-simkin-meditate-interview/",
  },
  {
    words: "“New York’s ‘sexiest’ meditation class.”",
    source: "Observer",
    url: "https://observer.com/2015/06/inside-new-yorks-sexiest-meditation-class/",
  },
  { words: "“The meditation guru for the next generation.”" },
];

const homeVoices = voices.filter((v) => ["Sophia Bush", "Marianne Williamson", "Stacy London", "Miki Agrawal", "Benmont Tench", "Light Watkins"].includes(v.name));

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap home-hero__grid">
          <div className="home-hero__light">
            <Aperture image={media("home-portrait")} alt="Biet Simkin" />
          </div>
          <div className="home-hero__text">
            <h1 className="display display--xl">
              <span className="home-hero__name">Biet Simkin</span>
              <span className="home-hero__line">An ongoing</span>
              <span className="home-hero__line display--italic">installation.</span>
            </h1>
            <p className="lede">
              Spiritual teacher, best-selling author and artist. Called the David Bowie of meditation.
            </p>
            <div className="actions">
              <Link href="/membership" className="btn" data-event="cta_click" data-label="Home hero, Enter">
                Enter
              </Link>
              <NewsletterButton className="link" source="home-hero">
                Join my newsletter
              </NewsletterButton>
            </div>
            <div className="home-hero__cue">
              <BreathCue />
            </div>
          </div>
        </div>
      </section>

      <section className="room" aria-labelledby="intro">
        <div className="wrap split">
          <h2 id="intro" className="kicker">Who she is</h2>
          <div className="stack stack--l">
            <p className="statement statement--wide" data-reveal>
              Raised by a shaman in New York City and signed to Sony Records at nineteen, Biet weaves pop culture and
              spirituality, teaching practical applications of ancient spiritual wisdom.
            </p>
            <p className="prose" data-reveal>
              Her events were the first time meditation was mixed with pop culture, scored by her own music in museums,
              hotels and fashion shows. She has been the resident meditation guide at the Sundance Film Festival, 1
              Hotels, MoMA and SoulCycle, and her teachings fill the best-selling book <em>Don’t Just Sit There!</em>,
              published by Simon &amp; Schuster.
            </p>
            <div className="actions" data-reveal>
              <Link href="/about" className="btn btn--ghost">Read her story</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="called">
        <div className="wrap split">
          <h2 id="called" className="kicker">What they call her</h2>
          <div className="stack stack--xl">
            <ul className="epithets">
              {epithets.map((e) => (
                <li key={e.words} className="epithet" data-reveal>
                  <span className="epithet__words">{e.words}</span>
                  {e.source ? (
                    <span className="epithet__source">
                      {e.url ? (
                        <a href={e.url} target="_blank" rel="noopener noreferrer">{e.source}</a>
                      ) : (
                        e.source
                      )}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="stack" data-reveal>
              <p className="note">Featured in {featuredIn.join(", ")}.</p>
              <Link href="/press" className="link">See all press</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="room" aria-labelledby="cross">
        <div className="wrap split split--even split--center">
          <div className="stack stack--l">
            <h2 id="cross" className="display display--l" data-reveal>
              Life happens <span className="display--italic">on a cross.</span>
            </h2>
            <div className="prose" data-reveal>
              <p>
                The horizontal line is the “stuff” that you see and experience. The vertical line is the stuff you
                can’t see or prove.
              </p>
              <p>
                When you mix the invisible line with the visible line (success, fun, power, acquisitions) that’s when
                you get bliss. When you’re ready to prioritize the spiritual line, even if it’s with five or ten minutes
                a day, everything changes.
              </p>
            </div>
            <p className="note" data-reveal>From Biet’s teaching. The thread of light at the edge of this page is that line.</p>
          </div>
          <Cross />
        </div>
      </section>

      <section className="room room--dusk" aria-labelledby="ways">
        <div className="wrap stack stack--xl">
          <div className="stack">
            <h2 id="ways" className="display display--l" data-reveal>
              There are only three ways to experience Biet’s work.
            </h2>
          </div>
          <div className="doors" data-reveal>
            <Link href="/the-source" className="door" data-event="cta_click" data-label="Home, door, The Source">
              <h3 className="door__title">Inside The Source</h3>
              <p className="door__text">
                A space where visionaries, creators and leaders gather weekly to do the inner work that success alone
                can’t solve.
              </p>
              <span className="link door__go">Explore The Source</span>
            </Link>
            <Link href="/work-with-biet" className="door" data-event="cta_click" data-label="Home, door, Private">
              <h3 className="door__title">By private commission</h3>
              <p className="door__text">
                Private spiritual teaching, speaking, and wellness programming for hotels and brands. Typically in the
                six-figure range.
              </p>
              <span className="link door__go">Work with Biet</span>
            </Link>
            <Link href="/membership" className="door" data-event="cta_click" data-label="Home, door, Membership">
              <h3 className="door__title">Or here</h3>
              <p className="door__text">
                The membership. Her recorded breathwork and somatic method, delivered exactly as she practices it. $111
                a month.
              </p>
              <span className="link door__go">Enter the membership</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="room room--blush" aria-labelledby="voices">
        <div className="wrap stack stack--xl">
          <h2 id="voices" className="kicker">In their words</h2>
          <Voices voices={homeVoices} />
        </div>
      </section>

      <section className="room" aria-labelledby="membership">
        <div className="wrap split split--even split--center">
          <div className="stack stack--l">
            <h2 id="membership" className="display display--l" data-reveal>
              You don’t need motivation. <span className="display--italic">You need recalibration.</span>
            </h2>
            <p className="lede" data-reveal>
              The daily system that built this brand and this being. For people who want more without burning out or
              losing themselves in the process.
            </p>
            <div className="actions" data-reveal>
              <Link href="/membership" className="btn" data-event="cta_click" data-label="Home, Membership">
                See the membership
              </Link>
              <Link href="/breathwork-membership" className="link">What’s in the library</Link>
            </div>
          </div>
          <div className="verse" data-reveal>
            <p>Body. Sound. Attention.</p>
            <p>
              Four chambers.
              <br />
              Used together.
              <br />
              Used daily.
            </p>
            <p>
              Not coaching.
              <br />
              Not therapy.
              <br />
              Not hype.
            </p>
            <p>
              <em>Calibration.</em>
            </p>
          </div>
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="more">
        <div className="wrap stack stack--xl">
          <h2 id="more" className="visually-hidden">Books and music</h2>
          <div className="pairs">
            <div className="stack" data-reveal>
              <h3 className="display display--m">Don’t Just Sit There!</h3>
              <p className="prose">
                Forty-four laws of human experience, and how to live above them. Clear. Simple. Funny. Enlightenment for
                the rest of us.
              </p>
              <Link href="/shop" className="link">The book and the breathwork deck</Link>
            </div>
            <div className="stack" data-reveal>
              <h3 className="display display--m">New album out now</h3>
              <p className="prose">
                Biet scores her own meditations. Listen to the new record, her album The Lunar, and a set of free guided
                meditations for grown-ups and kids.
              </p>
              <Link href="/music" className="link">Meditation and music</Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: site.url,
          mainEntity: { "@id": `${site.url}/#biet` },
        }}
      />
    </>
  );
}
