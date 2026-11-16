import Image from "next/image";
import Link from "next/link";
import { Cross } from "@/components/Cross";
import { FaceHero } from "@/components/FaceHero";
import { Filmstrip } from "@/components/Filmstrip";
import { JsonLd } from "@/components/JsonLd";
import { LogoRow } from "@/components/Logos";
import { Photo } from "@/components/Photo";
import { Voices } from "@/components/Voices";
import { photos } from "@/content/images";
import { site, voices } from "@/content/site";
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

const homeVoices = voices.filter((v) =>
  ["Sophia Bush", "Marianne Williamson", "Stacy London", "Miki Agrawal", "Benmont Tench", "Light Watkins"].includes(v.name),
);

export default function Home() {
  return (
    <>
      <FaceHero />

      <section className="room room--tight" aria-labelledby="featured">
        <div className="wrap split split--center">
          <h2 id="featured" className="kicker">Featured in</h2>
          <LogoRow names={["TIME", "Forbes", "ELLE", "Harper’s Bazaar", "Glamour", "The Times"]} label="Press" />
        </div>
      </section>

      <section className="room room--flush-top" aria-labelledby="intro">
        <div className="wrap split split--even split--center">
          <Photo name="knitSweater" shape="arch" ratio="4 / 5" sizes="(max-width: 900px) 92vw, 45vw" />
          <div className="stack stack--l">
            <h2 id="intro" className="kicker">Who she is</h2>
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
        <div className="wrap split split--wide-left split--center">
          <div className="stack stack--xl">
            <h2 id="called" className="kicker">What they call her</h2>
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
            <Link href="/press" className="link">See all press</Link>
          </div>
          <Photo name="redBackdrop" ratio="3 / 4" sizes="(max-width: 900px) 92vw, 38vw" />
        </div>
      </section>

      <section className="room room--flush-top room--mist" aria-label="Biet, in frames" style={{ paddingTop: 0 }}>
        <Filmstrip
          label="Photographs of Biet Simkin"
          names={["marbleWall", "armsOpen", "cube", "leatherSofa", "silverDress", "floorPlants", "airPlant", "yogaMat"]}
        />
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
          <h2 id="ways" className="display display--l" data-reveal>
            There are only three ways to experience Biet’s work.
          </h2>
          <div className="doors" data-reveal>
            <Link href="/the-source" className="door" data-event="cta_click" data-label="Home, door, The Source">
              <Photo name="military" ratio="4 / 5" className="door__photo" reveal={false} sizes="(max-width: 900px) 92vw, 30vw" />
              <h3 className="door__title">Inside The Source</h3>
              <p className="door__text">
                A space where visionaries, creators and leaders gather weekly to do the inner work that success alone
                can’t solve.
              </p>
              <span className="link door__go">Explore The Source</span>
            </Link>
            <Link href="/work-with-biet" className="door" data-event="cta_click" data-label="Home, door, Private">
              <Photo name="onStage" ratio="4 / 5" className="door__photo" reveal={false} sizes="(max-width: 900px) 92vw, 30vw" />
              <h3 className="door__title">By private commission</h3>
              <p className="door__text">
                Private spiritual teaching, speaking, and wellness programming for hotels and brands. Typically in the
                six-figure range.
              </p>
              <span className="link door__go">Work with Biet</span>
            </Link>
            <Link href="/membership" className="door" data-event="cta_click" data-label="Home, door, Membership">
              <Photo name="eyesClosed" ratio="4 / 5" className="door__photo" reveal={false} sizes="(max-width: 900px) 92vw, 30vw" />
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

      <section className="banner" aria-labelledby="membership">
        <div className="banner__photo">
          <Image src={photos.desertDusk.src} alt={photos.desertDusk.alt} fill sizes="100vw" style={{ objectPosition: photos.desertDusk.focus }} />
        </div>
        <div className="wrap banner__inner">
          <h2 id="membership" className="display display--l" data-reveal>
            You don’t need motivation. <span className="display--italic">You need recalibration.</span>
          </h2>
          <p className="lede lede--wide" data-reveal>
            The daily system that built this brand and this being. Body. Sound. Attention. Four chambers, used together,
            used daily.
          </p>
          <div className="actions" data-reveal>
            <Link href="/membership" className="btn" data-event="cta_click" data-label="Home, Membership">
              See the membership
            </Link>
            <Link href="/breathwork-membership" className="link">What’s in the library</Link>
          </div>
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="more">
        <div className="wrap stack stack--xl">
          <h2 id="more" className="visually-hidden">Books and music</h2>
          <div className="pairs">
            <div className="stack stack--l" data-reveal>
              <div className="product-shot">
                <Image src={photos.book.src} alt={photos.book.alt} width={photos.book.width} height={photos.book.height} sizes="(max-width: 900px) 80vw, 24rem" />
              </div>
              <h3 className="display display--m">Don’t Just Sit There!</h3>
              <p className="prose">
                Forty-four insights to get your meditation practice off the cushion and into the real world. Clear.
                Simple. Funny. Enlightenment for the rest of us.
              </p>
              <Link href="/shop" className="link">The book and the breathwork deck</Link>
            </div>
            <div className="stack stack--l" data-reveal>
              <Photo name="album" ratio="1" reveal={false} sizes="(max-width: 900px) 80vw, 24rem" className="product-shot" />
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
