import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Quotes } from "@/components/Quotes";
import { shortVoices, site } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Join the Guided by Biet Inner Circle",
  description:
    "The Guided by Biet Inner Circle: weekly calls, somatic practices, breathwork experiences, a full library, special guests and an activated community. Investment options inside.",
  path: "/the-source/join",
  shareLine: "Ready for a daily spiritual practice?",
});

const pillars = [
  ["Getting clear", "I will help you get clear on exactly what you need to do (and not do) to expand your vision, in a way that feels authentic and alive for you! I will help you melt into the most aligned path for you, aligned with your values and desired daily lifestyle!"],
  ["Living in flow", "I will help you become the most confident, unstoppable, ‘un-fu*kable with’ version of yourself! Helping you disintegrate all blocks, insecurities and fears that have been stopping you from feeling your absolute best and living in flow state!"],
  ["Becoming confident", "I will lend and transfer radical unshakable confidence into you on days when you don’t have your own. Consider me your absolute reminder of the meaning of life and a mirror to all the lies we tell to stop ourselves! Consider me the oracle who will awaken you to take action!"],
  ["Practicing gratitude", "I will have you practicing gratitude (not just an idea but a verb)."],
] as const;

const included: Array<[string, string, string?]> = [
  ["Weekly calls", "To help you grow, navigate whatever is showing up in your field and life and keep you plugged into the source, the momentum of a real spiritual teacher and community, and your aligned actions. (Hint: greatness is an inside and outside job.)", "Valued at $165K"],
  ["Somatic practices", "And journeys custom designed by Biet that will completely transform your life and ability to cope with your weaknesses."],
  ["Free access to Biet’s Zoom breathwork experiences", "Signature Guided by Biet experiences in the comfort of your own home.", "Valued at $84K"],
  ["Access to Biet’s video and audios", "You can plug into your day! 5, 10 and 20 minute videos and a whole library of Biet’s practices at your disposal!", "Valued at over $40K"],
  ["Monthly special guests and experts", "Experts in the fields of art, business, wellness, diet, beauty and varied forms of spirituality and thriving will be visiting us and inspiring the shit out of you!", "Valued at $40K"],
  ["Free access to live events guided by Biet", "Should a live event occur during your time in the Inner Circle, you will have free access to the fancy private event in a beautiful home. Come together with your crew and spend some time relaxing, reinventing your present moment and have an experience with a real live Guided by Biet immersive event!"],
  ["Access to a real activated community", "A place for you all to connect intimately, with worksheets to do together in every domain of your life! Deep intimate connection, and inspo for a buddy system that will keep you exhaling endless success!", "Valued at $75K"],
  ["Access to private events", "Private events, dinners and other experiences!"],
  ["First access to Biet’s private retreats", "Which are super top secret!", "Priceless"],
  ["Only access to Biet’s secret mystery school", "Inquiries on this can only be made as a 1-1 client or Inner Circle member!"],
  ["A real understanding of the Fourth Way", "And the 44 laws in Biet’s best-selling book Don’t Just Sit There!"],
  ["1-1 texting with Biet", "Access to 1-1 texting with Biet inside a group text thread, as well as access to contact and connect with other vetted Inner Circle members (who will be taking this journey with you!)."],
];

const different = [
  ["This isn’t just a “mastermind.” It’s joining a soul family.", "A place where you will learn to be psychic and be in a state of connectivity and intuition like you have never felt before. Full of love, support and interdimensional understanding that will raise your frequency and change your life forever!"],
  ["You receive 1-1 support with me", "So instead of paying me $150K a year to work with me privately you will have access to me. I will direct message you inside the chat! I am very responsive in there! I believe in urgency and magic!"],
  ["Having someone believe in you", "and see you more than and before you can even believe in or see yourself!"],
  ["You get not only me but the connective tissue of this whole group", "who will be activated weekly to be in their highest vibration! While their lives change so will yours. All ships rise with the beautiful tide!"],
  ["You will have an alive and present-tense understanding of breathwork, meditation and active meditation", "that will allow you to basically be like David Blaine, except in your life. You will see, live and verify magic that is unexplainable."],
  ["You will uplevel", "your freedom and have good moods more consistently; feel drawn to try and follow through on things you have only dreamed of; find true love (if you already haven’t); make millions of dollars by doing what you love (if you already haven’t); meditate and do breathwork daily (not just here and there or when shit gets bad); show up for your life in hard times and easy times (not just when you’re feeling like it); be inspired most of the time; let go of addictions to alcohol, drugs, sex and food (if you haven’t already); and actually be the person you came here to be!"],
  ["Redefine your definition of “God”", "so you don’t have to be at war with some vengeful bearded guy in the “sky.”"],
  ["Never live without a co-pilot", "ever again."],
  ["Float easy and learn to use relaxation", "to literally achieve every next thing you’re dreaming of in your life!"],
  ["Let go of all things that have previously stopped you or blocked you", "Free A/F! Now and forever, one magical daily practice at a time!"],
] as const;

const quotes = ["williamson", "bush", "brand", "hemingway", "middleton", "chamberlin", "agrawal", "bond", "twena"].map((k) => shortVoices[k]);

export default function Join() {
  return (
    <>
      <PageHero
        kicker="Guided by Biet. The Inner Circle."
        title={
          <>
            Ready to have a daily <span className="display--italic">spiritual practice?</span>
          </>
        }
        lede="The kind of spiritual practice that is practical and lends itself to a big life with big events, career, family, travel, sex and results."
        image="cube"
      >
        <a className="btn" href="#investment" data-event="cta_click" data-label="Join, hero">Join here</a>
        <Link className="link" href="/the-source">About The Source</Link>
      </PageHero>

      <section className="room room--flush-top" aria-labelledby="one-thing">
        <div className="wrap stack stack--xl">
          <p className="kicker">I want you to know one thing</p>
          <div className="split split--even">
            <div className="stack">
              <h2 id="one-thing" className="display display--m" data-reveal>
                Achieving a life that is radically impressive to both you and everyone you meet should be simple!
              </h2>
              <p className="prose" data-reveal>
                However, without the right environment, guidance and circle of incredible ride-or-die people it will be
                hard if not impossible to live into your wish and keep going for what you truly want to go for!
              </p>
            </div>
            <div className="stack">
              <h2 className="display display--m display--italic" data-reveal>We will be here to remind you who you are!</h2>
              <p className="prose" data-reveal>So you can keep a line rather than deviating like you have time and time again!</p>
            </div>
          </div>
          <div className="pairs">
            {pillars.map(([title, text]) => (
              <div key={title} data-reveal>
                <h3 className="pair__title">{title}</h3>
                <p className="pair__text">{text}</p>
              </div>
            ))}
          </div>
          <div className="stack stack--l" data-reveal>
            <p className="prose">
              You will have a crew of ride-or-die number one fans that you can buddy up with and support each other to
              laugh at yourself in moments when you wanna kick the plan and fall back into old habits! You will have a
              crew of people who actually do spiritual work, actually meditate and actually hold each other accountable!
            </p>
            <a className="btn" href="#investment" data-event="cta_click" data-label="Join, so ready">
              I am so ready for this transformation
            </a>
          </div>
        </div>
      </section>

      <section className="room room--dusk" aria-labelledby="included">
        <div className="wrap stack stack--xl">
          <div className="stack">
            <h2 id="included" className="display display--l">It gets to be easy and exhilarating to pursue greatness.</h2>
            <p className="lede">What to expect.</p>
          </div>
          <div className="pairs">
            {included.map(([title, text, value]) => (
              <div key={title} data-reveal>
                <h3 className="pair__title">{title}</h3>
                <p className="pair__text">{text}</p>
                {value ? <span className="pair__value">{value}</span> : null}
              </div>
            ))}
          </div>
          <p className="lede lede--wide" data-reveal>
            Total value: $440,000. <strong>Your investment: $30,000.</strong>
          </p>
        </div>
      </section>

      <section className="room" aria-labelledby="different">
        <div className="wrap stack stack--xl">
          <div className="stack">
            <h2 id="different" className="display display--l">What makes the Guided by Biet Inner Circle different?</h2>
            <p className="lede">Well, beyond what you have already read…</p>
          </div>
          <div className="pairs">
            {different.map(([title, text]) => (
              <div key={title} data-reveal>
                <h3 className="pair__title">{title}</h3>
                <p className="pair__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="join-voices">
        <div className="wrap stack stack--xl">
          <h2 id="join-voices" className="display display--l">In their words</h2>
          <Quotes items={quotes} columns={3} />
        </div>
      </section>

      <section id="investment" className="room room--blush" aria-labelledby="investment-title">
        <div className="wrap stack stack--xl">
          <h2 id="investment-title" className="display display--l">Investment options</h2>
          <div className="pairs">
            <div className="price" data-reveal>
              <p className="kicker">Payment plan</p>
              <p className="price__amount" style={{ fontSize: "var(--step-4)" }}>
                $2,850<span className="price__per">a month</span>
              </p>
              <a className="btn" href={site.kajabi.innerCirclePlan} target="_blank" rel="noopener noreferrer" data-event="begin_checkout" data-label="Join, payment plan">
                Let’s do this
              </a>
            </div>
            <div className="price" data-reveal>
              <p className="kicker">Pay in full</p>
              <p className="price__amount" style={{ fontSize: "var(--step-4)" }}>
                $30,000<span className="price__per">for the year</span>
              </p>
              <a className="btn" href={site.kajabi.innerCircleFull} target="_blank" rel="noopener noreferrer" data-event="begin_checkout" data-label="Join, pay in full">
                I’m 100% in, let’s go
              </a>
            </div>
          </div>
          <p className="note">Checkout opens on Kajabi.</p>
        </div>
      </section>

      <section className="room" aria-labelledby="join-questions">
        <div className="wrap stack stack--l center">
          <h2 id="join-questions" className="display display--l">Further questions?</h2>
          <div className="actions">
            <a className="btn" href={site.instagram.house.url} target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Join, DM">
              Send Biet a DM
            </a>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbs([{ name: "The Source", path: "/the-source" }, { name: "Join the Inner Circle", path: "/the-source/join" }])} />
    </>
  );
}
