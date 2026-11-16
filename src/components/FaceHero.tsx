"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BreathCue } from "./BreathCue";
import { NewsletterButton } from "./Newsletter";

/** Six portraits cut so her face sits in the same place in every frame. */
const faces = [
  { src: "/media/hero/face-1.jpg", alt: "Biet Simkin in a wide-brimmed hat, looking into the camera" },
  { src: "/media/hero/face-2.jpg", alt: "Black-and-white portrait of Biet Simkin" },
  { src: "/media/hero/face-3.jpg", alt: "Biet Simkin in a hat and leather jacket against a red backdrop" },
  { src: "/media/hero/face-4.jpg", alt: "Biet Simkin outdoors, looking up with her arms open" },
  { src: "/media/hero/face-5.jpg", alt: "Biet Simkin with her eyes closed and a hand on her heart" },
  { src: "/media/hero/face-6.jpg", alt: "Biet Simkin laughing" },
];

/** Her own lines. The first is the one search engines and screen readers get. */
const lines: Array<[string, string]> = [
  ["An ongoing", "installation."],
  ["You need", "recalibration."],
  ["It can be", "easy."],
  ["Body. Sound.", "Attention."],
  ["Don’t just", "sit there!"],
  ["Energy that", "compounds."],
];

const BEAT = 4600;

/**
 * The home hero. Her portraits dissolve one into the next while the headline
 * moves through her lines on the same beat. With reduced motion requested it
 * holds on the first portrait and the first line.
 */
export function FaceHero() {
  const [step, setStep] = useState(0);
  const [loaded, setLoaded] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setLoaded(faces.length);
    let timer = 0;
    const tick = () => {
      if (!document.hidden) setStep((s) => s + 1);
    };
    const start = window.setTimeout(() => {
      tick();
      timer = window.setInterval(tick, BEAT);
    }, BEAT);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
    };
  }, []);

  const face = step % faces.length;
  const line = step % lines.length;

  return (
    <section className="face-hero">
      <div className="face-hero__photo">
        {faces.slice(0, loaded).map((f, i) => (
          <Image
            key={f.src}
            src={f.src}
            alt={i === face ? f.alt : ""}
            aria-hidden={i === face ? undefined : true}
            fill
            priority={i === 0}
            sizes="(max-width: 900px) 100vw, 58vw"
            className={`face-hero__face${i === face ? " is-on" : ""}`}
          />
        ))}
      </div>
      <div className="wrap face-hero__text">
        <div>
          <h1 className="display display--xl">
            <span className="face-hero__name">Biet Simkin</span>
            <span className="visually-hidden">An ongoing installation.</span>
            <span className="face-hero__lines" aria-hidden="true">
              {lines.map(([a, b], i) => (
                <span key={a} className={`face-hero__pair${i === line ? " is-on" : ""}`}>
                  <span className="face-hero__line">{a}</span>
                  <span className="face-hero__line display--italic">{b}</span>
                </span>
              ))}
            </span>
          </h1>
          <p className="lede">Spiritual teacher, best-selling author and artist. Called the David Bowie of meditation.</p>
          <div className="actions">
            <Link href="/membership" className="btn" data-event="cta_click" data-label="Home hero, Enter">
              Enter
            </Link>
            <NewsletterButton className="link" source="home-hero">
              Join my newsletter
            </NewsletterButton>
          </div>
          <div className="face-hero__cue">
            <BreathCue />
          </div>
        </div>
      </div>
    </section>
  );
}
