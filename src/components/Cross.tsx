import { Aperture } from "./Aperture";

/**
 * Biet's own teaching, drawn: life happens on a cross. The horizontal line
 * is what you can see. The vertical line is what you can't see or prove.
 * Where they meet, bliss.
 */
export function Cross({ tone = "dawn" }: { tone?: "dawn" | "dusk" }) {
  return (
    <figure className="cross" data-reveal>
      <div className="cross__field" role="img" aria-label="A horizontal line, the visible, crossed by a vertical line of light, the invisible. Where they meet: bliss.">
        <span className="cross__h" aria-hidden="true" />
        <span className="cross__v" aria-hidden="true" />
        <span className="cross__label cross__label--top" aria-hidden="true">The invisible line</span>
        <span className="cross__label cross__label--left" aria-hidden="true">The visible line</span>
        <span className="cross__label cross__label--right" aria-hidden="true">success, fun, power, acquisitions</span>
        <span className="cross__label cross__label--bottom" aria-hidden="true">what you can’t see or prove</span>
        <div className="cross__meet" aria-hidden="true">
          <Aperture size="mark" tone={tone} />
          <span className="cross__bliss">Bliss</span>
        </div>
      </div>
    </figure>
  );
}
