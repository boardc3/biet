"use client";

import { useId, useState } from "react";
import type { Voice } from "@/content/site";

/**
 * Testimonials as a reading room: one voice at a time, chosen from the list
 * of names. Every quote is in the page for search engines and screen readers.
 */
export function Voices({ voices, tone = "blush" }: { voices: Voice[]; tone?: "blush" | "dusk" | "shell" }) {
  const [active, setActive] = useState(0);
  const id = useId();

  return (
    <div className={`voices voices--${tone}`}>
      <div className="voices__stage">
        {voices.map((v, i) => (
          <figure
            key={v.name}
            id={`${id}-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${i}`}
            className={`voices__quote${i === active ? " is-active" : ""}`}
            hidden={i !== active ? true : undefined}
          >
            <blockquote>
              <p>{v.quote}</p>
            </blockquote>
            <figcaption>
              <span className="voices__name">{v.name}</span>
              {v.role ? <span className="voices__role">{v.role}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="voices__names" role="tablist" aria-label="Choose a voice">
        {voices.map((v, i) => (
          <button
            key={v.name}
            id={`${id}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className="voices__tab"
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
              if (!dir) return;
              e.preventDefault();
              const next = (i + dir + voices.length) % voices.length;
              setActive(next);
              document.getElementById(`${id}-tab-${next}`)?.focus();
            }}
          >
            {v.name}
          </button>
        ))}
      </div>
    </div>
  );
}
