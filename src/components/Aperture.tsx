import Image from "next/image";

type Props = {
  /** "hero" is the large breathing form on the home page; "mark" is the small quiet version. */
  size?: "hero" | "mark";
  tone?: "dawn" | "dusk";
  image?: string | null;
  alt?: string;
  className?: string;
};

/**
 * The site's one signature: nested ovals of dawn light that swell and settle
 * on a slow breath (four seconds in, two held, six out). Pure CSS, so it is
 * identical on every device and costs nothing to run.
 */
export function Aperture({ size = "hero", tone = "dawn", image, alt = "", className = "" }: Props) {
  return (
    <div className={`aperture aperture--${size} aperture--${tone} ${className}`} aria-hidden={image ? undefined : true}>
      <span className="aperture__halo" />
      <span className="aperture__ring aperture__ring--1" />
      <span className="aperture__ring aperture__ring--2" />
      <span className="aperture__ring aperture__ring--3" />
      <span className="aperture__ring aperture__ring--4" />
      <span className="aperture__ring aperture__ring--5">
        {image ? (
          <Image src={image} alt={alt} fill sizes="(max-width: 900px) 60vw, 30vw" priority={size === "hero"} />
        ) : null}
      </span>
    </div>
  );
}
