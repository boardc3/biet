import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import { Photo } from "@/components/Photo";
import { photos } from "@/content/images";
import { Video } from "@/components/Video";
import { site } from "@/content/site";
import { breadcrumbs, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Meditation & Music: New Album and Free Guided Meditations",
  description:
    "Listen to Biet Simkin’s new album on Spotify, The Lunar on iTunes, a free 24-minute heart opening meditation, and free meditations for kids.",
  path: "/music",
  shareLine: "Meditation & music.",
});

const spotify = "https://open.spotify.com/album/2uP7Hfa8gIdbtZyl1tLUcu";
const kids = [
  ["Connecting to your Unicorn", "https://welcomeearth.tv/kids/connecting-to-your-unicorn-biet-simkin/", "kidsUnicorn"],
  ["Eye Gazing Meditation", "https://welcomeearth.tv/kids/eye-gazing-meditation-biet-simkin/", "kidsEyeGazing"],
  ["Bumblebee Breath Meditation", "https://welcomeearth.tv/kids/bumblebee-breath-meditation-biet-simkin/", "kidsBumblebee"],
] as const;

export default function Music() {
  return (
    <>
      <PageHero
        title={
          <>
            Meditation <span className="display--italic">&amp; music.</span>
          </>
        }
        lede="Biet signed to Sony Records at nineteen. Her meditation experiences are scored by her own music."
      />

      <section className="room room--flush-top" aria-labelledby="album">
        <div className="wrap split split--even split--center">
          <div data-reveal>
            <Photo name="album" ratio="1" reveal={false} priority sizes="(max-width: 900px) 92vw, 40vw" />
          </div>
          <div className="stack stack--l">
            <h2 id="album" className="display display--l" data-reveal>New album out now</h2>
            <a className="btn" href={spotify} target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Music, Spotify">
              Listen on Spotify
            </a>
          </div>
        </div>
      </section>

      <section className="room room--mist" aria-labelledby="free">
        <div className="wrap split">
          <h2 id="free" className="display display--m">Free meditations</h2>
          <div className="listing">
            <div className="listing__item" data-reveal>
              <div>
                <h3 className="listing__title">WelcomeEarth heart opening meditation</h3>
                <p className="listing__text">
                  A 24 minute free meditation that will prepare you for whatever awaits you in your day or puts you to
                  bed in the deep comfort of love.
                </p>
              </div>
              <a className="btn btn--ghost" href="https://welcomeearth.tv/heart-opening-meditation-biet-simkin-free/" target="_blank" rel="noopener noreferrer">
                Begin the meditation
              </a>
            </div>
            {kids.map(([name, url, art]) => (
              <div key={url} className="listing__item listing__item--thumb" data-reveal>
                <Image className="kid-thumb" src={photos[art].src} alt={photos[art].alt} width={500} height={500} sizes="88px" />
                <div>
                  <h3 className="listing__title">{name}</h3>
                  <p className="listing__text">A free meditation for kids.</p>
                </div>
                <a className="btn btn--ghost" href={url} target="_blank" rel="noopener noreferrer">
                  Play for free
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="room room--tight" aria-labelledby="skyline">
        <div className="wrap stack stack--l">
          <h2 id="skyline" className="display display--m">Meditate with the Manhattan skyline</h2>
          <Video
            provider="youtube"
            id="htm-Oz3q4FY"
            title="A guided meditation at 1 Hotel Brooklyn Bridge"
            caption="Play the meditation, filmed by 1 Hotels"
            poster="monstera"
          />
        </div>
      </section>

      <section className="room" aria-labelledby="lunar">
        <div className="wrap stack stack--xl">
          <div className="split split--even split--center">
            <div className="stack stack--l">
              <h2 id="lunar" className="display display--l" data-reveal>
                Biet Simkin, <span className="display--italic">The Lunar</span>
              </h2>
              <p className="lede" data-reveal>Available on iTunes.</p>
              <a className="btn" href="https://itunes.apple.com/us/album/the-lunar/1038984712" target="_blank" rel="noopener noreferrer" data-event="cta_click" data-label="Music, iTunes">
                Get The Lunar on iTunes
              </a>
            </div>
            <Photo name="silverDress" shape="arch" ratio="4 / 5" sizes="(max-width: 900px) 92vw, 40vw" />
          </div>
          <Video provider="youtube" id="FIpkfekSFmo" title="Second Interval" caption="Play the track on YouTube" poster="desertDusk" />
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbs([{ name: "Meditation & music", path: "/music" }]),
          {
            "@context": "https://schema.org",
            "@type": "MusicAlbum",
            name: "The Lunar",
            byArtist: { "@type": "MusicGroup", name: "Biet Simkin", "@id": `${site.url}/#biet-music` },
            url: "https://itunes.apple.com/us/album/the-lunar/1038984712",
          },
        ]}
      />
    </>
  );
}
