import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "You’re in",
  description: "Thank you for joining Biet Simkin’s newsletter.",
  path: "/newsletter/thanks",
  noindex: true,
});

/** Set this page as the Kajabi form's "after submit" destination to bring people back here. */
export default function Thanks() {
  return (
    <PageHero
      title={
        <>
          You’re <span className="display--italic">in.</span>
        </>
      }
      lede="Thank you for joining. We promise we won’t bug ya."
      image="armsOpen"
    >
      <Link className="btn" href="/">Back to the beginning</Link>
      <Link className="link" href="/music">Listen while you wait</Link>
    </PageHero>
  );
}
