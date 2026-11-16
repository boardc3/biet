import { JsonLd } from "@/components/JsonLd";
import { NewsletterForm } from "@/components/Newsletter";
import { PageHero } from "@/components/PageHero";
import { Plate } from "@/components/Plate";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Join My Newsletter",
  description:
    "Stay in the know. Sign up to stay informed on all Guided by Biet events, courses, art and music from Biet Simkin.",
  path: "/newsletter",
  shareLine: "Stay in the know.",
});

export default function Newsletter() {
  return (
    <>
      <PageHero
        title={
          <>
            Join my <span className="display--italic">newsletter.</span>
          </>
        }
        lede="Stay in the know. Sign up to stay informed on all Guided by Biet events, courses, art and music. We promise we won’t bug ya!"
      />
      <section className="room room--flush-top" aria-label="Sign up">
        <div className="wrap split split--even">
          <div style={{ maxWidth: "44rem" }}>
            <NewsletterForm title="Join the newsletter" />
          </div>
          <Plate slot="newsletter-portrait" alt="Biet Simkin" shape="arch" />
        </div>
      </section>
      <JsonLd data={breadcrumbs([{ name: "Newsletter", path: "/newsletter" }])} />
    </>
  );
}
