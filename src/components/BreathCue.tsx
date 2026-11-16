"use client";

import { useEffect, useState } from "react";

const CYCLE = 12000;
const phases = [
  { until: 4000, label: "Breathe in" },
  { until: 6000, label: "Hold" },
  { until: 12000, label: "Let go" },
];

/** A quiet line of text that names the breath the light is taking. */
export function BreathCue() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ring = document.querySelector(".aperture--hero .aperture__ring--1");
    const start = performance.now();
    const tick = () => {
      // Read the animation's own clock so the words and the light stay together.
      const anim = ring?.getAnimations?.()[0];
      const t = (((anim?.currentTime as number | null) ?? performance.now() - start) % CYCLE + CYCLE) % CYCLE;
      setLabel(phases.find((p) => t < p.until)?.label ?? phases[0].label);
    };
    tick();
    const id = window.setInterval(tick, 200);
    return () => window.clearInterval(id);
  }, []);

  if (!label) return null;
  return (
    <p className="breath-cue" aria-hidden="true">
      <span className="breath-cue__dot" />
      <span key={label} className="breath-cue__label">{label}</span>
    </p>
  );
}
