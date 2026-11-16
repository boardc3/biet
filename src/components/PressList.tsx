import type { PressItem } from "@/content/site";
import { Logo } from "./Logos";

/** One card per article: the outlet's logo, the headline, and the link. */
export function PressList({ items }: { items: PressItem[] }) {
  return (
    <ul className="press-cards">
      {items.map((item) => (
        <li key={item.url} className="press-card">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <span className="press-card__logo">
              <Logo name={item.outlet} />
            </span>
            <span className="press-card__title">{item.title}</span>
            <span className="press-card__read">
              Read the piece<span className="visually-hidden"> in {item.outlet} (opens in a new tab)</span>
            </span>
          </a>
        </li>
      ))}
      <li className="press-card press-card--cta">
        <a href="mailto:biet.name@gmail.com?subject=Press%20inquiry" data-event="cta_click" data-label="Press, card inquiry">
          <span className="press-card__title">Writing about Biet?</span>
          <span className="press-card__read">Send a press inquiry</span>
        </a>
      </li>
    </ul>
  );
}
