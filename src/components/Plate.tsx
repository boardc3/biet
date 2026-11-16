import Image from "next/image";
import { media, type MediaSlot } from "@/lib/media";

type Props = {
  slot: MediaSlot;
  alt: string;
  shape?: "arch" | "oval" | "soft";
  ratio?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

/**
 * A photograph, if one has been supplied for the slot. Renders nothing when
 * the file is absent, and the surrounding layout closes up around it.
 */
export function Plate({ slot, alt, shape = "soft", ratio = "4 / 5", sizes = "(max-width: 900px) 90vw, 40vw", className = "", priority }: Props) {
  const src = media(slot);
  if (!src) return null;
  return (
    <figure className={`plate plate--${shape} ${className}`} style={{ aspectRatio: ratio }} data-reveal>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </figure>
  );
}

export function hasPlate(slot: MediaSlot) {
  return media(slot) !== null;
}
