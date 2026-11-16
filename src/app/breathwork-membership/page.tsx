import Link from "next/link";
import { Cross } from "@/components/Cross";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import { Photo } from "@/components/Photo";
import { photos } from "@/content/images";
import { Quotes } from "@/components/Quotes";
import { shortVoices, site } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "The Breathwork Library: Guided by Biet Online Membership",
  description:
    "Unlimited viewing of Biet Simkin’s recorded breathwork, somatic and meditation practices, including the signature four-minute breathwork seen on The Tonight Show.",
  path: "/breathwork-membership",
  shareLine: "Body. Sound. Attention.",
});

const resonate = [
  ["You crave having a tool kit", "that, when you get into a bad mood or feel a dip in confidence, you can turn to: a trusted library of mini practices that will zap you into confidence, flow state and love!"],
  ["You wanna swap out your addictions", "alcohol, Netflix, procrastinating, etc. for a sense of purpose, awe and wonder! This is what the somatic trilogy you will have access to on the daily will give you!"],
  ["You have felt deeply that you have more in you", "that it’s not only on MDMA or through the use of some plant medicine that you remember who you are. You crave remembering that every f*cking day!"],
  ["You have felt a yearning to be with others", "and have access to your real teacher."],
  ["You have known always that there is a way to navigate life", "that allows for more flow, follow-through and joy!"],
] as const;

const inside = [
  ["Daily practice", "The answer to rock it at life", "The truth is the answer is in a daily practice. It’s all about showing up on the daily and getting yourself in the right mind, soul and heart space to f*cking rock it at life! You can’t win because of some random kundalini class you took a few months ago, people! You need daily doses of the higher!"],
  ["Signature breathwork practice", "Get high in four minutes", "In this membership I include my signature breathwork practice, the one you have seen Jimmy Fallon doing on The Tonight Show. The one you have heard Mariel Hemingway rave about! My breathwork system gets you as high as hallucinogenic drugs in four minutes! How many four-minute appearances do you think you can make in your day, once you really get my method? Exactly. You can pop it in anywhere!"],
  ["Signature somatic practice", "Get present", "My signature somatic practice will get you disconnecting your daily upsets from the trauma or wounds that started them! You will be fully alive in the present moment! You know who wins at life? People who know how to get to the present moment! People who know where the f*ck it even is!"],
  ["Support", "Spring into the new world", "First access to online events!"],
] as const;

const first = ["hemingway", "middleton", "twena"].map((k) => shortVoices[k]);
const second = ["brand", "agrawal", "martin", "stewart", "clarke"].map((k) => shortVoices[k]);

export default function Library() {
  return (
    <>
      <PageHero
        kicker="Guided by Biet. Membership."
        title={
          <>
            Body. Sound. <span className="display--italic">Attention.</span>
          </>
        }
        lede="This is an ongoing installation. Recorded pieces."
        image="eyesClosed"
      >
        <a className="btn" href={site.kajabi.membershipOffer} target="_blank" rel="noopener noreferrer" data-event="begin_checkout" data-label="Library, hero Enter">
          Enter
        </a>
        <Link className="link" href="/membership">The four chambers</Link>
      </PageHero>

      <section className="room room--flush-top" aria-labelledby="library">
        <div className="wrap split">
          <h2 id="library" className="display display--l">The library</h2>
          <div className="stack stack--l">
            <p className="statement statement--wide" data-reveal>
              There are only three ways to experience Biet’s work.
            </p>
            <ul className="checks" data-reveal>
              <li>
                <span>
                  Inside <Link className="link" href="/the-source">The Source</Link>
                </span>
              </li>
              <li>By private commission, typically in the six-figure range</li>
              <li>Or here</li>
            </ul>
            <div className="prose" data-reveal>
              <p>
                This membership gives you unlimited viewing of her recorded breathwork and somatic methodology,
                delivered exactly as she practices and transmits it.
              </p>
              <p>No live sessions or direct access are included.</p>
              <p>But for thousands of people, this has been the doorway.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="welcome">
        <div className="wrap split split--even split--center">
          <Cross />
          <div className="stack stack--l">
            <h2 id="welcome" className="display display--m" data-reveal>
              Welcome to the Guided by Biet breathwork online membership
            </h2>
            <div className="prose" data-reveal>
              <p>
                Where you can finally infuse your epic powers in business, romance, family and community with the
                needed spiritual tools you have been craving!
              </p>
              <p>
                Life happens on a cross. The horizontal line is the “stuff” that you see and experience. The vertical
                line is the stuff you can’t see or prove! This breathwork membership gives you access to that invisible
                line! When you mix the invisible line with the visible line (success, fun, power, acquisitions) that’s
                when you get bliss!
              </p>
              <p>
                When you’re ready to prioritize the spiritual line, even if it’s with 5–10 minutes a day, everything
                changes!
              </p>
            </div>
            <a className="btn" href={site.kajabi.membershipOffer} target="_blank" rel="noopener noreferrer" data-event="begin_checkout" data-label="Library, Access">
              Access
            </a>
          </div>
        </div>
      </section>

      <section className="room" aria-label="What members say">
        <div className="wrap">
          <Quotes items={first} columns={3} />
        </div>
      </section>

      <section className="room room--dusk" aria-labelledby="resonate">
        <div className="wrap stack stack--xl">
          <h2 id="resonate" className="display display--l">Does this resonate with your experience?</h2>
          <div className="pairs">
            {resonate.map(([title, text]) => (
              <div key={title} data-reveal>
                <h3 className="pair__title">{title}</h3>
                <p className="pair__text">{text}</p>
              </div>
            ))}
          </div>
          <p className="statement statement--wide" data-reveal>
            This is because there is a solution. With Biet’s signature breathwork, somatic and meditation processes you
            will completely soar!
          </p>
        </div>
      </section>

      <section className="room" aria-labelledby="how">
        <div className="wrap split">
          <div className="stack stack--l">
            <h2 id="how" className="display display--m">
              Have you ever wondered how someone like me got up after massive shock and tragedy, seemingly dusted it off
              and now has it all?
            </h2>
            <Photo name="bwLace" ratio="4 / 5" sizes="(max-width: 900px) 92vw, 30vw" />
          </div>
          <div className="stack stack--l">
            <div className="prose" data-reveal>
              <p>
                The answer is, I created a signature system using breathwork, somatic work and meditation that untangled
                me from the daily fears and pain that would show up. I created it and now I am sharing it with you in
                this membership!
              </p>
              <p>
                If you’re raising your hand saying “F*ck yes! This is the year that I attract new habits and call in the
                state and results of my dreams by being attuned to my inner world!”, then I am so excited to welcome
                you!
              </p>
            </div>
            <a className="btn" href={site.kajabi.membershipOffer} target="_blank" rel="noopener noreferrer" data-event="begin_checkout" data-label="Library, mid Enter">
              Enter
            </a>
          </div>
        </div>
      </section>

      <section className="room room--blush" aria-labelledby="have-it-all">
        <div className="wrap stack stack--xl">
          <div className="split split--even">
            <h2 id="have-it-all" className="display display--l" data-reveal>
              There is no reason you can’t have it all.
            </h2>
            <div className="stack">
              <p className="prose" data-reveal>
                Once you have access to all the daily videos you need and constant real contact with a real master of a
                real teaching, you will feel so taken care of. You will be catapulted into a life beyond your wildest
                dreams!
              </p>
              <p className="display display--s display--italic" data-reveal>Let me show you how.</p>
            </div>
          </div>
          <div className="trio-photos">
            <Photo name="airPlant" ratio="4 / 5" sizes="(max-width: 700px) 92vw, 30vw" />
            <Photo name="marbleWall" ratio="4 / 5" focus="50% 66%" sizes="(max-width: 700px) 92vw, 30vw" />
            <Photo name="cube" ratio="4 / 5" sizes="(max-width: 700px) 92vw, 30vw" />
          </div>
          <div className="offerings">
            {inside.map(([title, sub, text]) => (
              <div key={title} className="offering" data-reveal>
                <div>
                  <h3 className="offering__title">{title}</h3>
                  <p className="kicker" style={{ marginTop: "0.4rem" }}>{sub}</p>
                </div>
                <p className="offering__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="room" aria-labelledby="want">
        <div className="wrap split split--even split--center">
          <div className="stack stack--l">
            <Photo name="armsOpen" ratio="3 / 2" sizes="(max-width: 900px) 92vw, 45vw" />
            <p className="kicker">I want this for you.</p>
            <div className="verse" data-reveal>
              <p>A full juicy life that has all its dimensions restored.</p>
              <p>A full delicious life that has its wonder and awe and newness on the daily!</p>
            </div>
          </div>
          <div className="stack stack--l">
            <h2 id="want" className="display display--m" data-reveal>
              Feel like you’re falling in love (like the first three weeks vibe) every day, for the rest of your life.
            </h2>
            <p className="prose" data-reveal>That’s what my system promises.</p>
            <a className="btn" href={site.kajabi.membershipOffer} target="_blank" rel="noopener noreferrer" data-event="begin_checkout" data-label="Library, promise Enter">
              Enter
            </a>
          </div>
        </div>
      </section>

      <section className="banner" aria-labelledby="meditation">
        <div className="banner__photo">
          <Image src={photos.armchair.src} alt={photos.armchair.alt} fill sizes="100vw" style={{ objectPosition: photos.armchair.focus }} />
        </div>
        <div className="wrap banner__inner">
          <h2 id="meditation" className="display display--l">And who can’t use more meditation! Right?</h2>
          <p className="lede lede--wide">
            But my system is unique and fresh. It doesn’t just have you sit on a pillow pretending to be calm. I give
            you concrete tools that use your body, senses and visualization to create a new kind of meditation!
          </p>
          <p className="lede lede--wide">
            I have compiled meditation practices for people who are on the go, like me. People who overthink, like me!
            People who get upset sometimes and feel disappointment sometimes! Like me! These ancient practices, which I
            have curated and shifted to a place where they’ve healed me from the gates of hell, I now share them all
            with you here!
          </p>
        </div>
      </section>

      <section className="room room--dusk" aria-labelledby="inside">
        <div className="wrap split split--even split--center">
          <div className="stack stack--l">
            <h2 id="inside" className="display display--l" data-reveal>Inside the installation</h2>
            <ul className="verse" data-reveal>
              <li><p>The archive</p></li>
              <li><p>Ongoing practice</p></li>
            </ul>
          </div>
          <div className="stack stack--l" data-reveal>
            <p className="statement">All for the price of a daily cup of coffee.</p>
            <div className="actions">
              <a className="btn" href={site.kajabi.membershipOffer} target="_blank" rel="noopener noreferrer" data-event="begin_checkout" data-label="Library, final Access">
                Access
              </a>
              <Link className="link" href="/membership">$111 a month. See the details</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="room" aria-label="More from members">
        <div className="wrap">
          <Quotes items={second} columns={3} />
        </div>
      </section>

      <section className="room room--blush" aria-labelledby="library-questions">
        <div className="wrap stack stack--l center">
          <p className="note">Guided by Biet breathwork as seen on The Tonight Show.</p>
          <h2 id="library-questions" className="display display--l">Further questions?</h2>
          <div className="actions">
            <a className="btn" href={site.instagram.house.url} target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Library, DM">
              Send Biet a DM
            </a>
            <Link className="link" href="/press">Read the press</Link>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbs([{ name: "Membership", path: "/membership" }, { name: "The library", path: "/breathwork-membership" }])} />
    </>
  );
}
