import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Rock Bottom Zoom",
  description: "Group call link for Rock Bottom members.",
  path: "/ic-zoom",
  noindex: true,
});

export default function RockBottomZoom() {
  return (
    <PageHero
      title={
        <>
          Rock <span className="display--italic">Bottom.</span>
        </>
      }
      lede="Join our group call here."
    >
      <a className="btn" href="https://us02web.zoom.us/j/81161009965" target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Rock Bottom, Zoom">
        Open the Zoom link
      </a>
    </PageHero>
  );
}
