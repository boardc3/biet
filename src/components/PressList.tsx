import type { PressItem } from "@/content/site";

export function PressList({ items }: { items: PressItem[] }) {
  return (
    <ul className="press-list">
      {items.map((item) => (
        <li key={item.url} className="press-item">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <span className="press-item__outlet">{item.outlet}</span>
            <span className="press-item__title">{item.title}</span>
            <span className="press-item__read">
              Read the piece<span className="visually-hidden"> on {item.outlet} (opens in a new tab)</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
