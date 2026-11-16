import Link from "next/link";
import { Aperture } from "@/components/Aperture";
import { JsonLd } from "@/components/JsonLd";
import { Plate } from "@/components/Plate";
import { site } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";
import type { MediaSlot } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Membership: The Daily Recalibration, $111 a Month",
  description:
    "You don’t need motivation. You need recalibration. Four chambers, used together and used daily: The Body, The State, The Observer, The Installation. $111 a month.",
  path: "/membership",
  shareLine: "You need recalibration.",
});

const chambers: Array<{ name: string; slot: MediaSlot; lines: string[][] }> = [
  { name: "The Body", slot: "membership-body", lines: [["Stop carrying tension all day.", "Stop reacting.", "Stop bracing."], ["Feel it.", "Clear it.", "Move on."]] },
  { name: "The State", slot: "membership-state", lines: [["Shift your physiology in minutes."], ["Before the meeting.", "Before the ask.", "Before the room."], ["Control your state.", "Don’t let it control you."]] },
  { name: "The Observer", slot: "membership-observer", lines: [["See your thoughts.", "Don’t obey them."], ["Stop over-explaining.", "Stop over-sharing."], ["Choose your response."], ["That’s power."]] },
  { name: "The Installation", slot: "membership-installation", lines: [["Five minutes. Daily."], ["Install the version of you", "who already exists at the next level."], ["Not affirmations."], ["Positioning."]] },
];

function Lines({ groups }: { groups: string[][] }) {
  return (
    <>
      {groups.map((g) => (
        <p key={g.join("")}>
          {g.map((line, i) => (
            <span key={line}>
              {line}
              {i < g.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

export default function Membership() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero__grid">
          <div className="page-hero__text">
            <p className="kicker">Guided by Biet. The Source, an ongoing installation.</p>
            <h1 className="display display--xl">
              You don’t need motivation. <span className="display--italic">You need recalibration.</span>
            </h1>
            <p className="lede lede--wide">
              The daily system that built this brand and this being. For people who want more without burning out or
              losing themselves in the process.
            </p>
            <div className="actions">
              <a className="btn" href="#install" data-event="cta_click" data-label="Membership, hero Enter">Enter</a>
              <Link className="link" href="/breathwork-membership">What’s in the library</Link>
            </div>
          </div>
          <Aperture size="mark" className="page-hero__mark" />
        </div>
      </section>

      <section className="room room--flush-top" aria-labelledby="more">
        <div className="wrap split split--even">
          <h2 id="more" className="display display--l" data-reveal>
            You want more. <span className="display--italic">Good.</span>
          </h2>
          <div className="verse" data-reveal>
            <p>
              More money.
              <br />
              More freedom.
              <br />
              More impact.
              <br />
              More peace.
            </p>
            <p>The problem isn’t desire.</p>
            <p>
              The problem is chasing growth
              <br />
              while bleeding energy.
            </p>
            <p>
              <em>This fixes that.</em>
            </p>
          </div>
        </div>
      </section>

      <section className="room room--dusk" aria-labelledby="chambers">
        <div className="wrap stack stack--xl">
          <div className="split split--even">
            <h2 id="chambers" className="display display--l" data-reveal>Four chambers.</h2>
            <div className="verse verse--small" data-reveal>
              <p>
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
          <div className="chambers chambers--row" data-reveal>
            {chambers.map((c) => (
              <article key={c.name} className="chamber">
                <span className="chamber__light" aria-hidden="true" />
                <h3 className="chamber__title">{c.name}</h3>
                <div className="verse verse--small">
                  <Lines groups={c.lines} />
                </div>
                <Plate slot={c.slot} alt={`${c.name}, from the membership`} shape="soft" ratio="4 / 5" sizes="(max-width: 740px) 90vw, 25vw" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="room" aria-labelledby="builds">
        <div className="wrap split split--even">
          <h2 id="builds" className="display display--l" data-reveal>What this builds</h2>
          <div className="verse" data-reveal>
            <p>
              Energy that compounds.
              <br />
              Confidence that doesn’t spike and crash.
              <br />
              Money that feels clean.
              <br />
              Power that feels safe.
            </p>
            <p>And yes.</p>
            <p>
              <em>More success.</em>
            </p>
          </div>
        </div>
      </section>

      <section id="install" className="room room--blush" aria-labelledby="price">
        <div className="wrap split split--even split--center">
          <div className="price" data-reveal>
            <h2 id="price" className="price__amount">
              $111<span className="price__per">a month</span>
            </h2>
            <div className="verse verse--small">
              <p>
                Here, you get the engine.
                <br />
                Use it daily.
                <br />
                Watch what compounds.
              </p>
            </div>
            <a
              className="btn"
              href={site.kajabi.membershipCheckout}
              target="_blank"
              rel="noopener noreferrer"
              data-event="begin_checkout"
              data-label="Membership, Install now"
            >
              Install now
            </a>
            <p className="note">Checkout opens on Kajabi, where the membership lives.</p>
          </div>
          <ul className="checks" data-reveal>
            <li>If this helps you make one better decision a week, it pays for itself.</li>
            <li>If it helps you stop leaking energy daily, it multiplies.</li>
            <li>Private clients pay six figures for this level of recalibration.</li>
          </ul>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbs([{ name: "Membership", path: "/membership" }]),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Guided by Biet Membership",
            description: "A daily recalibration practice in four chambers: The Body, The State, The Observer and The Installation.",
            brand: { "@type": "Brand", name: "Guided by Biet" },
            url: `${site.url}/membership`,
            offers: {
              "@type": "Offer",
              price: "111.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: site.kajabi.membershipCheckout,
              priceSpecification: { "@type": "UnitPriceSpecification", price: "111.00", priceCurrency: "USD", billingDuration: "P1M", unitText: "month" },
            },
          },
        ]}
      />
    </>
  );
}
