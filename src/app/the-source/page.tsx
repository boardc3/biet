import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { LogoRow } from "@/components/Logos";
import { Photo } from "@/components/Photo";
import { Quotes } from "@/components/Quotes";
import { shortVoices, site } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "The Source: A Weekly Circle Led by Biet Simkin",
  description:
    "The Source is where visionaries, creators and leaders gather weekly with Biet Simkin to do the inner work that success alone can’t solve. Create wealth. Build intimacy. Live alignment.",
  path: "/the-source",
  shareLine: "The Source.",
});

const dm = site.instagram.guided.url;

const different = [
  ["This isn’t just an inner circle. It’s a soul family.", "A place where you’ll learn to trust your intuition and live in a state of deep presence and knowing. A space filled with love, real support, and interdimensional understanding that will raise your frequency and change your life forever."],
  ["Having someone believe in you", "even before you do. I’ll see you clearly, powerfully, and consistently, long before you can fully see yourself."],
  ["You get not just me, but the connective fire of the entire group.", "A high-frequency collective activated each week to live in their highest expression. And when their lives shift, yours does too. All ships rise with this tide."],
  ["You’ll learn breathwork and meditation in a way that’s alive.", "Not just theory. This is embodied, present-tense practice. You’ll move through life like David Blaine, but for real life, performing unexplainable magic inside your own reality."],
  ["You’ll uplevel your freedom.", "You’ll feel better, follow through more, experience consistent good moods, take bold steps toward your dreams, find (or deepen) love, and call in wealth doing what you love. You’ll meditate and breathe daily. You’ll show up in both hard and beautiful moments, not just when it’s easy. You’ll be more inspired, let go of old addictions and blocks, and finally be the person you came here to be."],
  ["You’ll redefine your idea of “God.”", "No more warring with some distant, punishing figure in the sky. You’ll build a connection that feels true, immediate, and deeply yours."],
  ["You’ll never live without a co-pilot again.", "You won’t have to navigate life alone, ever again."],
  ["You’ll learn to float easy.", "And you’ll use that softness, your surrender, as the superpower to create everything you’ve been dreaming of."],
  ["You’ll let go of everything that ever blocked you.", "Free A/F. One magical, embodied practice at a time."],
] as const;

const pillars = [
  ["Getting clear", "I’ll help you see exactly what you need to do (and not do) to expand your vision, in a way that feels authentic and alive. Together we’ll carve a path that feels electric and fully aligned with your values and desires, from big dreams to your daily life."],
  ["Living in flow", "I will help you become the most confident, unstoppable, ‘un-fu*kable with’ version of yourself! You’ll dissolve fear, doubt, and stuck energy. What’s left is you: confident, grounded, and wildly in motion. Flow state is your new normal."],
  ["Becoming confident", "I will lend and transfer radical unshakable confidence into you on days when you don’t have your own! I’ll lend you my fire, reflect your truth, and call out the lies keeping you small."],
  ["Practicing gratitude", "Gratitude will become your native language: a daily embodied practice that opens your heart and changes your life."],
] as const;

const featured = ["Forbes", "ELLE", "Harper’s Bazaar", "TIME", "The Times", "Observer", "Sakara Life", "MoMA", "DuJour", "Surface", "Travel + Leisure", "Urban Outfitters", "Lula", "Stone Fox Bride", "StyleLikeU", "Page Six", "Refinery29", "Glamour", "Inc.", "Uproxx", "lululemon", "sweetgreen", "SoulCycle"];

const quotes = ["williamson", "bush", "brand", "hemingway", "middleton", "chamberlin", "agrawal", "bond", "twena"].map((k) => shortVoices[k]);

export default function TheSource() {
  return (
    <>
      <PageHero
        kicker="Guided by Biet"
        title={
          <>
            The <span className="display--italic">Source.</span>
          </>
        }
        lede="A space where people like you (visionaries, creators, leaders) gather to do the inner work that success alone can’t solve."
        image="military"
        imageFocus="58% 12%"
      >
        <a className="btn" href={dm} target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Source, hero DM">
          Message me on Instagram to connect
        </a>
      </PageHero>

      <section className="room room--flush-top" aria-labelledby="but">
        <div className="wrap split">
          <h2 id="but" className="display display--m">If you’ve built a remarkable life, but…</h2>
          <ul className="verse" data-reveal>
            <li><p>Fulfillment still feels out of reach</p></li>
            <li><p>The same emotional patterns are still running the show</p></li>
            <li><p>True connection remains rare</p></li>
            <li><p>With everything you have, you still feel alone</p></li>
          </ul>
        </div>
      </section>

      <section className="room room--dusk" aria-label="An invitation">
        <div className="wrap stack stack--xl">
          <p className="display display--l" data-reveal>
            Don’t wait until the end to become who you came here to be.
          </p>
          <div className="split">
            <div className="verse verse--small" data-reveal>
              <p>Do you break promises to yourself, even when no one’s watching?</p>
              <p>Does success lose its shine when someone else has more?</p>
            </div>
            <div className="prose" data-reveal>
              <p>
                You’ve done incredible things. But you still battle the same patterns: procrastination, comparison,
                addiction, avoidance.
              </p>
              <p>Nobody can buy or succeed their way out of being human.</p>
              <p>
                The Source is where your spiritual practice meets real-world ambition: career, love, sex, parenting,
                creativity, impact. This is about living fully, with clarity, power, and actual follow-through.
              </p>
              <p>
                Led by Biet Simkin, a master teacher in the art of living awake, The Source blends grounded spiritual
                tools with a raw, real container for growth. Expect breakthroughs. Not by escaping life, but by meeting
                it fully.
              </p>
              <p>
                This is not about rising above the human experience. It’s about learning to live inside it. With awe and
                mastery, it becomes bliss.
              </p>
              <p>
                Let go of the loops: the addictions, the blocks, the self-sabotage. Come remember your genius, and be
                held in a group that sees your brilliance without needing you to perform.
              </p>
            </div>
          </div>
          <div className="actions" data-reveal>
            <a className="btn" href={dm} target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Source, chat with Biet">
              Chat with Biet
            </a>
          </div>
        </div>
      </section>

      <section className="room" aria-labelledby="match">
        <div className="wrap split">
          <h2 id="match" className="display display--m">
            You’re successful. But does your inner world match your outer one?
          </h2>
          <div className="stack stack--l">
            <ul className="checks" data-reveal>
              <li>Do you feel called to a bigger vision, but can’t seem to act on it?</li>
              <li>Do you avoid looking at your finances, even when you have more than enough?</li>
              <li>Do conversations about money still trigger shame or disconnection?</li>
              <li>Do your earnings fluctuate dramatically?</li>
            </ul>
            <p className="statement" data-reveal>The Source is where you face what success can’t fix.</p>
          </div>
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="included">
        <div className="wrap split">
          <div className="stack">
            <h2 id="included" className="display display--m">Create wealth. Build intimacy. Live alignment.</h2>
            <Photo name="floorPlants" ratio="4 / 5" sizes="(max-width: 900px) 92vw, 30vw" />
          </div>
          <div className="stack stack--l">
            <ul className="checks" data-reveal>
              <li>
                Meets weekly with a powerful group of peers, and a master spiritual teacher, to bring your inner world
                into integrity with your outer life. Along with supplemental meetings and community access.
              </li>
              <li>
                Transform your relationship with money, love, and achievement, from confusion or shame to clarity and
                command.
              </li>
              <li>Use somatic and breathwork practices to metabolize the discomfort that keeps you stuck.</li>
              <li>Name and pursue your true vision, even if it scares you.</li>
              <li>Be witnessed. Be supported. Be held accountable by people who truly see you.</li>
              <li>Miss a session? Recordings are always available for your schedule.</li>
            </ul>
            <div className="callout" data-reveal>
              <h3 className="display display--s">How to join</h3>
              <p className="prose">
                DM me your full name and email in one note{" "}
                <a href={dm} target="_blank" rel="noopener noreferrer">{site.instagram.guided.handle}</a>, or email{" "}
                <a href={`mailto:${site.email}?subject=The%20Source`}>{site.email}</a>.
              </p>
              <div className="actions">
                <a className="btn" href={dm} target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Source, join DM">
                  Message {site.instagram.guided.handle}
                </a>
                <a className="btn btn--ghost" href={`mailto:${site.email}?subject=The%20Source`} data-event="cta_click" data-label="Source, join email">
                  Email Biet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="room" aria-labelledby="easy">
        <div className="wrap split split--even split--center">
          <Photo name="leatherSofa" shape="arch" ratio="4 / 5" sizes="(max-width: 900px) 92vw, 45vw" />
          <div className="stack stack--l">
            <p className="kicker">I want you to know one thing</p>
            <h2 id="easy" className="display display--l" data-reveal>
              It can be <span className="display--italic">easy.</span>
            </h2>
            <div className="prose" data-reveal>
              <p>
                It is easy and natural to be in a flow state with career, purpose, body, spirituality, meditation, sex,
                romance, travel, and more, when you have the proper support and the context of a spiritual teacher who
                laughs with you, and an inner circle of badass humans holding you accountable.
              </p>
              <p>No matter what’s been blocking you, transformation is not a fantasy. It’s a practice.</p>
              <p>
                In The Source, you’ll build a real, daily spiritual practice that sticks, heal and integrate the past
                without staying stuck in it, step into the version of you that can actually live your dreams, and do it
                all with a team who gets it.
              </p>
              <p>
                We will do this together! Nothing will be too big, crazy or out of touch for this team that we have!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="room room--blush" aria-labelledby="remind">
        <div className="wrap stack stack--xl">
          <div className="split split--even">
            <div className="stack">
              <h2 className="display display--m" data-reveal>
                Achieving a life that impresses you, and everyone you meet, shouldn’t be complicated.
              </h2>
              <p className="prose" data-reveal>
                But without the right environment, guidance, and a circle of committed, like-minded people in your
                corner, it becomes almost impossible to stay in pursuit of what you actually want.
              </p>
            </div>
            <div className="stack">
              <h2 id="remind" className="display display--m display--italic" data-reveal>
                We’re here to remind you who you are.
              </h2>
              <p className="prose" data-reveal>
                So you can stay the course, without falling into the same old detours, distractions, and delays.
              </p>
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
              You’ll have a crew of ride-or-dies, your real-life support team, who actually do the work. They meditate.
              They show up. They hold each other (and you) accountable. They’ll remind you to laugh instead of spiral
              when you feel the pull to sabotage your progress. Are you ready to walk this path with people who are
              truly in it?
            </p>
            <p className="prose">
              Book a conversation with Biet or her trusted partner to explore joining this powerful community.
            </p>
            <a className="btn" href={dm} target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Source, I want to chat">
              I want to chat
            </a>
          </div>
        </div>
      </section>

      <section className="room" aria-labelledby="why">
        <div className="wrap split">
          <div className="stack stack--l">
            <h2 id="why" className="display display--m">About Biet Simkin, and why she created The Source</h2>
            <Photo name="bwLace" ratio="4 / 5" sizes="(max-width: 900px) 92vw, 30vw" />
          </div>
          <div className="prose" data-reveal>
            <p>
              Biet Simkin is a best-selling author, spiritual teacher, and artist known for creating immersive,
              transformative experiences scored with her own music. She’s brought her work to stages like Sundance and
              MoMA, and served as a guide to some of the world’s most influential founders, artists, and creatives.
            </p>
            <p>
              Until recently, working 1:1 with me was reserved for an elite few: just seven spots, always filled.
              Hundreds of people have reached out asking to work with me. But there wasn’t a container that could hold
              them. So I built one.
            </p>
            <p>
              The Source was created for a hand-selected group of powerful, high-functioning humans. People who are
              thriving at an “8” but feel the pull to become a 10.
            </p>
            <p>
              Yes, you have a good life. You’ve done the work. But you have an itch that is begging you to go to a 10!
              Begging you to grow and expand! It’s whispering in your ear and making things uncomfortable for you! The
              voice is begging and you keep saying “Just tell me what to do, give me a map and I’ll do it.”
            </p>
            <p>The good news is: I will. In The Source, I’ll show you everything.</p>
          </div>
        </div>
      </section>

      <section className="room room--tight room--mist" aria-labelledby="seen">
        <div className="wrap split">
          <div className="stack">
            <h2 id="seen" className="kicker">As featured in, and alongside</h2>
            <p className="note">Guided by Biet breathwork as seen on The Tonight Show.</p>
            <Link className="link" href="/press">Read the press</Link>
          </div>
          <LogoRow names={featured} label="Press and partners" scale={0.85} />
        </div>
      </section>

      <section className="room room--dusk" aria-labelledby="different">
        <div className="wrap stack stack--xl">
          <div className="stack">
            <h2 id="different" className="display display--l">What makes The Source different?</h2>
            <p className="lede">Well, beyond what you’ve already read…</p>
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

      <section className="room" aria-labelledby="source-voices">
        <div className="wrap stack stack--xl">
          <h2 id="source-voices" className="display display--l">In their words</h2>
          <Quotes items={quotes} columns={3} />
        </div>
      </section>

      <section className="room room--blush" aria-labelledby="questions">
        <div className="wrap stack stack--l center">
          <h2 id="questions" className="display display--l">Further questions?</h2>
          <div className="actions">
            <a className="btn" href={dm} target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Source, send a DM">
              Send Biet a DM
            </a>
            <a className="link" href={`mailto:${site.email}?subject=The%20Source`}>{site.email}</a>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbs([{ name: "The Source", path: "/the-source" }]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "The Source",
            serviceType: "Weekly spiritual teaching circle",
            description: "A weekly circle of peers led by Biet Simkin, with supplemental meetings, community access and session recordings.",
            provider: { "@id": `${site.url}/#biet` },
            url: `${site.url}/the-source`,
          },
        ]}
      />
    </>
  );
}
