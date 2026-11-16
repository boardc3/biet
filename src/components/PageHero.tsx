import type { ReactNode } from "react";
import type { PhotoName } from "@/content/images";
import { Aperture } from "./Aperture";
import { Photo } from "./Photo";

type Props = {
  title: ReactNode;
  lede?: ReactNode;
  kicker?: string;
  children?: ReactNode;
  /** A portrait to lead the page with. Without one, the breathing light stands in. */
  image?: PhotoName;
  imageRatio?: string;
  imageShape?: "arch" | "soft";
  imageFocus?: string;
};

export function PageHero({ title, lede, kicker, children, image, imageRatio = "4 / 5", imageShape = "arch", imageFocus }: Props) {
  return (
    <section className={`page-hero${image ? " page-hero--photo" : ""}`}>
      <div className="wrap page-hero__grid">
        <div className="page-hero__text">
          {kicker ? <p className="kicker">{kicker}</p> : null}
          <h1 className="display display--xl">{title}</h1>
          {lede ? <p className="lede lede--wide">{lede}</p> : null}
          {children ? <div className="actions">{children}</div> : null}
        </div>
        {image ? (
          <Photo
            name={image}
            ratio={imageRatio}
            shape={imageShape}
            focus={imageFocus}
            priority
            reveal={false}
            sizes="(max-width: 900px) 92vw, 42vw"
            className="page-hero__photo"
          />
        ) : (
          <Aperture size="mark" className="page-hero__mark" />
        )}
      </div>
    </section>
  );
}
