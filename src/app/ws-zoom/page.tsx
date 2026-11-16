import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Wifestyle Zoom",
  description: "Group call link and homework for Wifestyle members.",
  path: "/ws-zoom",
  noindex: true,
});

export default function WifestyleZoom() {
  return (
    <>
      <PageHero title={<span className="display--italic">Wifestyle.</span>} lede="Join our group call here." image="floorPlants">
        <a className="btn" href="https://us02web.zoom.us/j/82468351910" target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Wifestyle, Zoom">
          Open the Zoom link
        </a>
      </PageHero>

      <section className="room room--mist" aria-labelledby="homework">
        <div className="wrap split">
          <h2 id="homework" className="display display--l">Homework</h2>
          <div className="stack stack--l">
            <div className="prose">
              <p>Please read with highlighter and pen and underline all you relate to, or hope for!</p>
              <p>Please feel free to get a book cover so you won’t feel embarrassed reading this out in public.</p>
            </div>
            <div className="actions">
              <a className="btn btn--ghost" href="https://a.co/d/0wY11bp" target="_blank" rel="noopener noreferrer">
                Buy the first book
              </a>
              <a className="btn btn--ghost" href="https://a.co/d/iT2jtDK" target="_blank" rel="noopener noreferrer">
                Buy the second book
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
