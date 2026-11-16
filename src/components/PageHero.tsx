import type { ReactNode } from "react";
import { Aperture } from "./Aperture";

type Props = {
  title: ReactNode;
  lede?: ReactNode;
  kicker?: string;
  children?: ReactNode;
  mark?: boolean;
};

export function PageHero({ title, lede, kicker, children, mark = true }: Props) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero__grid">
        <div className="page-hero__text">
          {kicker ? <p className="kicker">{kicker}</p> : null}
          <h1 className="display display--xl">{title}</h1>
          {lede ? <p className="lede lede--wide">{lede}</p> : null}
          {children ? <div className="actions">{children}</div> : null}
        </div>
        {mark ? <Aperture size="mark" className="page-hero__mark" /> : null}
      </div>
    </section>
  );
}
