import { JsonLd } from "@/components/JsonLd";
import { NewsletterButton } from "@/components/Newsletter";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Courses: Guided by Biet Breathwork & Meditation",
  description: "Guided by Biet breathwork and meditation courses are coming soon. Discover and claim the freedom to be.",
  path: "/courses",
  shareLine: "The freedom to be.",
});

export default function Courses() {
  return (
    <>
      <PageHero
        kicker="Guided by Biet. Breathwork and meditation."
        title={
          <>
            Discover and claim <span className="display--italic">the freedom to be.</span>
          </>
        }
        lede="Coming soon!"
      >
        <NewsletterButton source="courses">Tell me when courses open</NewsletterButton>
        <Link className="link" href="/membership">Start with the membership</Link>
      </PageHero>
      <JsonLd data={breadcrumbs([{ name: "Courses", path: "/courses" }])} />
    </>
  );
}
