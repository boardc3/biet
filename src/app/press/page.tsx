import { JsonLd } from "@/components/JsonLd";
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
