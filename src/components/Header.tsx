"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { fullNav, primaryNav, site } from "@/content/site";
import { useNewsletter } from "./Newsletter";

export function Header() {
  const pathname = usePathname();
  const menu = useRef<HTMLDialogElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { open } = useNewsletter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => {
    if (menu.current?.open) menu.current.close();
  }, [pathname]);

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header__inner">
          <Link href="/" className="wordmark" aria-label="Guided by Biet, home">
            <span className="wordmark__glyph" aria-hidden="true" />
            Guided by Biet
          </Link>

          <nav className="header__nav" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <button type="button" className="header__newsletter" onClick={() => open("header")}>
              Newsletter
            </button>
            <button
              type="button"
              className="header__menu"
              aria-haspopup="dialog"
              onClick={() => menu.current?.showModal()}
            >
              <span className="header__menu-lines" aria-hidden="true" />
              Menu
            </button>
          </div>
        </div>
      </header>

      <dialog ref={menu} className="dialog menu" aria-label="Site menu">
        <div className="menu__top">
          <span className="wordmark">
            <span className="wordmark__glyph" aria-hidden="true" />
            Guided by Biet
          </span>
          <form method="dialog">
            <button className="menu__close">Close</button>
          </form>
        </div>
        <nav className="menu__nav" aria-label="All pages">
          <ul>
            {fullNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} onClick={() => menu.current?.close()}>
                  <span className="menu__label">{item.label}</span>
                  {item.note ? <span className="menu__note">{item.note}</span> : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu__foot">
          <a href={site.instagram.house.url} target="_blank" rel="noopener noreferrer">Instagram {site.instagram.house.handle}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </dialog>
    </>
  );
}
