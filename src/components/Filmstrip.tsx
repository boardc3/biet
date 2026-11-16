import Image from "next/image";
import { photos, type PhotoName } from "@/content/images";

/**
 * A row of portraits to move through sideways, by swipe, trackpad or arrow
 * keys. Every frame keeps its own proportions so nothing is cropped.
 */
export function Filmstrip({ names, label }: { names: PhotoName[]; label: string }) {
  return (
    <div className="filmstrip" role="group" aria-label={label} tabIndex={0} data-reveal>
      <ul className="filmstrip__track">
        {names.map((name) => {
          const photo = photos[name];
          return (
            <li key={name} className="filmstrip__item" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 80vw, 40vw" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
