import Link from "next/link";
import { fullNav, site } from "@/content/site";
import { NewsletterForm } from "./Newsletter";

export function Footer({ showNewsletter = true }: { showNewsletter?: boolean }) {
  return (
    <footer className="footer">
      {showNewsletter ? (
        <section className="footer__newsletter" aria-labelledby="footer-newsletter">
          <div className="wrap footer__newsletter-grid">
            <div>
              <h2 id="footer-newsletter" className="display display--l">Join my newsletter</h2>
              <p className="lede">
                Stay informed on all Guided by Biet events, courses, art and music. We promise we won’t bug ya.
              </p>
            </div>
            <NewsletterForm theme="dusk" title="Join the newsletter, footer form" />
          </div>
        </section>
      ) : null}

      <div className="wrap footer__grid">
        <div className="footer__brand">
          <p className="footer__name">Biet Simkin</p>
          <p className="footer__line">Spiritual teacher, best-selling author, artist.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="footer__links">
            {fullNav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <a href={`mailto:${site.email}?subject=Hello!`}>{site.email}</a>
          <a href={site.instagram.house.url} target="_blank" rel="noopener noreferrer">
            Instagram {site.instagram.house.handle}
          </a>
          <a href={site.instagram.guided.url} target="_blank" rel="noopener noreferrer">
            Instagram {site.instagram.guided.handle}
          </a>
        </div>
      </div>

      <div className="wrap footer__base">
        <p>© {new Date().getFullYear()} Biet Simkin. Guided by Biet.</p>
        <p>An ongoing installation.</p>
      </div>
    </footer>
  );
}
