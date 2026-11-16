import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "The Source Sign Up",
  description: "Sign up for the next The Source experience, guided by Biet Simkin.",
  path: "/rock-bottom-signup",
  shareLine: "Join the next Source.",
});

export default function SourceSignup() {
  return (
    <>
      <PageHero
        kicker="A Guided by Biet experience"
        title={
          <>
            The <span className="display--italic">Source.</span>
          </>
        }
        lede="To join the next The Source experience, sign up here."
      >
        <a className="btn" href={site.kajabi.sourceSignup} target="_blank" rel="noopener noreferrer" data-event="begin_checkout" data-label="Source signup, Join us">
          Join us
        </a>
        <Link className="link" href="/the-source">What The Source is</Link>
      </PageHero>
      <JsonLd data={breadcrumbs([{ name: "The Source", path: "/the-source" }, { name: "Sign up", path: "/rock-bottom-signup" }])} />
    </>
  );
}
