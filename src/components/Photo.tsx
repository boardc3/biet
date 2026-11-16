import Image from "next/image";
import { photos, type PhotoName } from "@/content/images";

type Props = {
  name: PhotoName;
  /** CSS aspect-ratio for the frame. Defaults to the photograph's own shape. */
  ratio?: string;
  shape?: "soft" | "arch" | "oval" | "flat";
  sizes?: string;
  priority?: boolean;
  /** Override where the crop centres, as CSS object-position. */
  focus?: string;
  alt?: string;
  className?: string;
  reveal?: boolean;
  caption?: string;
};

/** One of Biet's photographs in a shaped frame, cropped around her face. */
export function Photo({ name, ratio, shape = "soft", sizes = "(max-width: 900px) 92vw, 45vw", priority, focus, alt, className = "", reveal = true, caption }: Props) {
  const photo = photos[name];
  return (
    <figure className={`photo photo--${shape} ${className}`} {...(reveal ? { "data-reveal": "" } : {})}>
      <div className="photo__frame" style={{ aspectRatio: ratio ?? `${photo.width} / ${photo.height}` }}>
        <Image
          src={photo.src}
          alt={alt ?? photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectPosition: focus ?? photo.focus }}
        />
      </div>
      {caption ? <figcaption className="photo__caption">{caption}</figcaption> : null}
    </figure>
  );
}
