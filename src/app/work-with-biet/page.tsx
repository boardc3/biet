import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { LogoRow } from "@/components/Logos";
import { Photo } from "@/components/Photo";
import { site } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work with Biet: Private Teaching, Speaking & Hospitality Wellness",
  description:
    "Private spiritual teaching and meditation, speaking, public meditation experiences, hotel residencies and luxury wellness programming with Biet Simkin.",
  path: "/work-with-biet",
  shareLine: "Work with Biet.",
});

const offerings = [
  {
    title: "Private spiritual teaching, life coaching and meditation",
    text: "Having guided CEOs of Fortune 100 companies to celebrities, Biet brings transformation and 30+ years of study in ancient spiritual wisdom to private clients.",
  },
  {
    title: "Speaking engagements",
    text: "A recognized public speaker and author, Biet commands a room with the power to inspire and impact lives.",
    href: "/speaking",
    link: "More on speaking",
  },
  {
    title: "Public meditation experiences",
    text: "Scored by her own music, Biet creates explosive, interactive meditation experiences that scale from small groups to thousands of attendees, bringing spiritual content into a new arena.",
  },
  {
    title: "Hospitality and hotels wellness",
    text: "Biet has held events and residencies at luxury properties globally, providing meditation, spiritual talks and workshops.",
  },
  {
    title: "Luxury wellness programming",
    text: "Biet curates robust programs and initiatives for hotels, festivals and summits, bringing together the best talent and product partners in the wellness lifestyle space.",
  },
  {
    title: "Club Söda experience",
    text: "Biet and Club Söda cofounder Ruby Warrington bring a chic outlook to a sober lifestyle through sober-curious networking and nightlife events. Learn more at clubsoda.nyc.",
  },
];

const rooms = ["MoMA", "1 Hotels", "Soho House", "The William Vale", "SoulCycle", "lululemon", "sweetgreen"];

export default function Work() {
  return (
    <>
      <PageHero
        title={
          <>
            Work <span className="display--italic">with Biet.</span>
          </>
        }
        lede="Thirty years of study in ancient spiritual wisdom, brought to private clients, stages, hotels and brands."
        image="airPlant"
      >
        <a className="btn" href={`mailto:${site.email}`} data-event="cta_click" data-label="Work, contact">
          Contact Biet
        </a>
      </PageHero>

      <section className="room room--flush-top" aria-labelledby="offerings">
        <div className="wrap split split--even">
          <div className="split__sticky stack">
            <h2 id="offerings" className="kicker">What she offers</h2>
            <Photo name="yogaMat" ratio="4 / 5" sizes="(max-width: 900px) 92vw, 45vw" />
          </div>
          <div className="offerings">
            {offerings.map((o) => (
              <div key={o.title} className="offering" data-reveal style={{ gridTemplateColumns: "1fr" }}>
                <h3 className="offering__title">{o.title}</h3>
                <div className="stack">
                  <p className="offering__text">{o.text}</p>
                  {o.href ? <Link className="link" href={o.href}>{o.link}</Link> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="rooms">
        <div className="wrap split">
          <h2 id="rooms" className="kicker">Rooms she has held</h2>
          <div className="stack stack--l">
            <LogoRow names={rooms} label="Venues and partners" />
            <p className="note">And the Sundance Film Festival, where Biet has been the resident meditation guide.</p>
          </div>
        </div>
      </section>

      <section className="room room--dusk" aria-labelledby="start">
        <div className="wrap stack stack--xl">
          <h2 id="start" className="display display--l">Where to begin</h2>
          <div className="doors" data-reveal>
            <a className="door" href={`mailto:${site.email}`} data-event="cta_click" data-label="Work, door, contact">
              <h3 className="door__title">Contact</h3>
              <p className="door__text">For private work, speaking, hotels and brand programming, write to Biet directly.</p>
              <span className="link door__go">{site.email}</span>
            </a>
            <Link className="door" href="/breathwork-membership" data-event="cta_click" data-label="Work, door, membership">
              <h3 className="door__title">Membership</h3>
              <p className="door__text">Unlimited viewing of her recorded breathwork and somatic methodology.</p>
              <span className="link door__go">See the membership</span>
            </Link>
            <Link className="door" href="/the-source" data-event="cta_click" data-label="Work, door, source">
              <h3 className="door__title">Inner circle</h3>
              <p className="door__text">The Source. A weekly circle of peers, led by Biet.</p>
              <span className="link door__go">Explore The Source</span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbs([{ name: "Work with Biet", path: "/work-with-biet" }]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Private spiritual teaching, speaking and wellness programming",
            provider: { "@id": `${site.url}/#biet` },
            areaServed: "Worldwide",
            url: `${site.url}/work-with-biet`,
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Work with Biet",
              itemListElement: offerings.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o.title, description: o.text } })),
            },
          },
        ]}
      />
    </>
  );
}
