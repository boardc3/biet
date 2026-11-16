"use client";

import { useState } from "react";
import { track } from "./track";

type Props = {
  provider: "vimeo" | "youtube";
  id: string;
  title: string;
  /** Short line shown on the card before the film loads. */
  caption?: string;
  tone?: "dawn" | "dusk";
};

/**
 * Nothing from Vimeo or YouTube loads until the visitor asks for it. That keeps
 * pages fast and keeps third-party cookies off until someone presses play.
 */
export function Video({ provider, id, title, caption, tone = "dawn" }: Props) {
  const [playing, setPlaying] = useState(false);
  const src =
    provider === "vimeo"
      ? `https://player.vimeo.com/video/${id}?autoplay=1&byline=0&portrait=0&title=0&dnt=1`
      : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className={`video video--${tone}`} data-reveal>
      {playing ? (
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          className="video__poster"
          onClick={() => {
            setPlaying(true);
            track("video_play", { title });
          }}
        >
          <span className="video__glow" aria-hidden="true" />
          <span className="video__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
          </span>
          <span className="video__text">
            <span className="video__title">{title}</span>
            <span className="video__caption">{caption ?? `Play film`}</span>
          </span>
        </button>
      )}
    </div>
  );
}
