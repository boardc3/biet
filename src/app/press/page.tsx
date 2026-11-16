import { JsonLd } from "@/components/JsonLd";
import { Logo } from "@/components/Logos";
import { Photo } from "@/components/Photo";
import { PageHero } from "@/components/PageHero";
import { PressList } from "@/components/PressList";
import { press, site } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Press: Forbes, ELLE, TIME, Harper’s Bazaar and more",
  description:
    "Biet Simkin in the press: Forbes, ELLE, TIME, Harper’s Bazaar, The Times, Observer, Glamour, Refinery29, Page Six, Travel + Leisure, and on The Tonight Show.",
  path: "/press",
  shareLine: "Press.",
});

export default function Press() {
  return (
    <>
      <PageHero
        title={
          <>
            In <span className="display--italic">the press.</span>
          </>
        }
        lede="Featured in Vogue, Forbes, ELLE and TIME. Guided by Biet breathwork as seen on The Tonight Show."
        image="marbleWall"
        imageFocus="50% 66%"
      >
        <a className="btn btn--ghost" href={`mailto:${site.email}?subject=Press%20inquiry`} data-event="cta_click" data-label="Press, inquiry">
          Press inquiries
        </a>
      </PageHero>

      <section className="room room--flush-top" aria-label="Articles">
        <div className="wrap" data-reveal>
          <PressList items={press} />
        </div>
      </section>

      <section className="room room--dusk" aria-labelledby="tonight">
        <div className="wrap split split--even split--center">
          <div className="stack stack--l">
            <Logo name="The Tonight Show" />
            <h2 id="tonight" className="display display--l">As seen on The Tonight Show.</h2>
            <p className="lede">
              Guided by Biet breathwork, the signature four-minute practice Jimmy Fallon tried on air.
            </p>
          </div>
          <Photo name="redBackdrop" ratio="4 / 5" sizes="(max-width: 900px) 92vw, 42vw" />
        </div>
      </section>

      <section className="room" aria-label="More photographs">
        <div className="wrap trio-photos">
          <Photo name="cube" ratio="4 / 5" sizes="(max-width: 700px) 92vw, 30vw" />
          <Photo name="silverDress" ratio="4 / 5" sizes="(max-width: 700px) 92vw, 30vw" />
          <Photo name="onStage" ratio="4 / 5" sizes="(max-width: 700px) 92vw, 30vw" />
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbs([{ name: "Press", path: "/press" }]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Biet Simkin in the press",
            url: `${site.url}/press`,
            about: { "@id": `${site.url}/#biet` },
            hasPart: press.map((p) => ({ "@type": "Article", headline: p.title, url: p.url, publisher: { "@type": "Organization", name: p.outlet } })),
          },
        ]}
      />
    </>
  );
}
