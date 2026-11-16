import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Plate, hasPlate } from "@/components/Plate";
import { Quotes } from "@/components/Quotes";
import { site, voices } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Shop: Don’t Just Sit There! and the Breathwork Card Deck",
  description:
    "Don’t Just Sit There!, Biet Simkin’s best-selling guide to 44 laws of human experience (Simon & Schuster), and Breathwork: Guided by Biet, a deck of 30 breathing practices.",
  path: "/shop",
  shareLine: "Don’t Just Sit There!",
});

const bookUrl = "https://www.amazon.com/Dont-Just-Sit-There-Meditation/dp/1501193198";
const deckUrl = "https://www.amazon.com/Breathwork-Guided-Biet-Breathing-Practices/dp/1399608711";
const praise = voices
  .filter((v) => ["Marianne Williamson", "Miki Agrawal", "Radha Agrawal", "Ruby Warrington"].includes(v.name))
  .map((v) => (v.name === "Radha Agrawal" ? { ...v, role: undefined } : v));

export default function Shop() {
  return (
    <>
      <PageHero
        title={
          <>
            Don’t just <span className="display--italic">sit there!</span>
          </>
        }
        lede="The best-selling book, and a deck of thirty breathing practices."
      />

      <section className="room room--flush-top" aria-labelledby="book">
        <div className="wrap split split--wide-left">
          <div className="stack stack--l">
            <h2 id="book" className="display display--l">Don’t Just Sit There!</h2>
            <p className="statement statement--wide" data-reveal>Meditation. It sounds so serious, even intimidating.</p>
            <div className="prose" data-reveal>
              <p>
                Biet Simkin knows that making your way in the modern world with a meditative practice isn’t easy.
                Drawing on her wisdom from thirty years of spiritual study, as well as a hard-fought journey through
                addiction and personal tragedy, Biet shows how to move from meltdowns to miracles on the road to
                enlightenment. <em>Don’t Just Sit There!</em> guides you to dive into meditation by teaching you to find
                peace in the midst of a fast-paced life.
              </p>
              <p>
                With insights on 44 laws of human experience, this concise guidebook offers practical exercises and
                tools designed to help you become a modern meditator. Clear. Simple. Funny. Think of it as
                enlightenment for the rest of us.
              </p>
              <p>
                From the Law of Conscious Suffering to the Law of Desire, experienced and novice meditators alike will
                benefit from Biet’s frank, freeing advice on the not-so-peaceful side of achieving peace. As you
                confront the disruptive quality of meditation, you will deepen your inner life, live above these 44
                laws, and find bliss along the way.
              </p>
            </div>
            <div className="actions" data-reveal>
              <a className="btn" href={bookUrl} target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Shop, book Amazon">
                I want this<span className="visually-hidden">: buy the book on Amazon</span>
              </a>
              <span className="note">Opens Amazon.</span>
            </div>
          </div>
          <div className="split__sticky" data-reveal>
            {hasPlate("book-cover") ? (
              <Plate slot="book-cover" alt="Cover of Don’t Just Sit There! by Biet Simkin" ratio="2 / 3" sizes="(max-width: 900px) 70vw, 30vw" />
            ) : (
              <div className="book" aria-hidden="true">
                <span className="book__title">Don’t Just Sit There!</span>
                <span className="book__meta">
                  Biet Simkin
                  <br />
                  Simon &amp; Schuster
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="deck">
        <div className="wrap split split--wide-left">
          <div className="stack stack--l">
            <h2 id="deck" className="display display--l">Breathwork: Guided by Biet</h2>
            <p className="statement statement--wide" data-reveal>
              Move towards health and harmony with Biet’s signature breathing practices.
            </p>
            <div className="prose" data-reveal>
              <p>
                Take charge of your breath and your life with 30 techniques that both aid everyday hardships, such as
                stress, difficulty sleeping and low energy, and encourage you to explore further into your mind,
                emotions and memories.
              </p>
              <p>
                These breathwork practices support a range of needs and situations, from breathing techniques you can
                try anywhere, anytime to longer more advanced practices.
              </p>
              <p>
                With this card deck you can enhance your wellness as you learn how to relax, destress, harness your
                sexual energy and boost your happiness through the power of breath.
              </p>
            </div>
            <div className="actions" data-reveal>
              <a className="btn" href={deckUrl} target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Shop, deck Amazon">
                I want this<span className="visually-hidden">: buy the deck on Amazon</span>
              </a>
              <span className="note">Opens Amazon.</span>
            </div>
          </div>
          <div className="split__sticky" data-reveal>
            {hasPlate("deck-cover") ? (
              <Plate slot="deck-cover" alt="Breathwork: Guided by Biet card deck" ratio="3 / 4" sizes="(max-width: 900px) 70vw, 30vw" />
            ) : (
              <div className="book book--deck" aria-hidden="true">
                <span className="book__title">Breathwork</span>
                <span className="book__meta">
                  Guided by Biet
                  <br />
                  30 breathing practices
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="room room--blush" aria-labelledby="praise">
        <div className="wrap stack stack--xl">
          <h2 id="praise" className="display display--l">
            Advance praise for <span className="display--italic">Don’t Just Sit There!</span>
          </h2>
          <Quotes items={praise} />
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbs([{ name: "Shop", path: "/shop" }]),
          {
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Don’t Just Sit There!",
            author: { "@id": `${site.url}/#biet` },
            publisher: { "@type": "Organization", name: "Simon & Schuster" },
            isbn: "9781501193194",
            inLanguage: "en",
            url: bookUrl,
            sameAs: bookUrl,
          },
          {
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Breathwork: Guided by Biet",
            author: { "@id": `${site.url}/#biet` },
            isbn: "9781399608718",
            inLanguage: "en",
            url: deckUrl,
            sameAs: deckUrl,
          },
        ]}
      />
    </>
  );
}
