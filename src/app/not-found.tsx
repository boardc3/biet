import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <PageHero
      kicker="404. This page isn’t here."
      title={
        <>
          Don’t just <span className="display--italic">sit there!</span>
        </>
      }
      lede="The page you were looking for has moved or never existed. Take a breath, then pick a door."
    >
      <Link className="btn" href="/">Go to the home page</Link>
      <Link className="link" href="/membership">Membership</Link>
      <Link className="link" href="/the-source">The Source</Link>
    </PageHero>
  );
}
