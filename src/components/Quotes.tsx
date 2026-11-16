import type { Voice } from "@/content/site";

export function Quotes({ items, columns = 2 }: { items: Voice[]; columns?: 2 | 3 }) {
  return (
    <div className={`quotes${columns === 3 ? " quotes--3" : ""}`}>
      {items.map((v) => (
        <figure key={v.name + v.quote.slice(0, 12)} className="quote" data-reveal>
          <blockquote>{v.quote}</blockquote>
          <figcaption>
            <span className="quote__name">{v.name}</span>
            {v.role ? <span className="quote__role">{v.role}</span> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
