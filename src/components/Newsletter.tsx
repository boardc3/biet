"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { photos } from "@/content/images";
import { track } from "./track";

type Ctx = { open: (source: string) => void };
const NewsletterContext = createContext<Ctx>({ open: () => {} });

export const useNewsletter = () => useContext(NewsletterContext);

const SEEN_KEY = "biet-newsletter-invite";

function remember(value: string) {
  try {
    localStorage.setItem(SEEN_KEY, value);
  } catch {}
}
function recall(): string | null {
  try {
    return localStorage.getItem(SEEN_KEY);
  } catch {
    return null;
  }
}

/**
 * The Kajabi form, framed. The frame is our own page (/embed/newsletter.html),
 * which loads Biet's existing Kajabi form and restyles it.
 */
export function NewsletterForm({ theme = "light", layout = "row", title = "Join the newsletter" }: { theme?: "light" | "dusk"; layout?: "row" | "stack"; title?: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(layout === "stack" ? 196 : 62);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== location.origin || e.source !== ref.current?.contentWindow) return;
      if (e.data?.type === "biet-newsletter-height" && typeof e.data.height === "number") {
        setHeight(Math.max(56, Math.min(e.data.height + 4, 480)));
      }
      if (e.data?.type === "biet-newsletter-submit") {
        remember("joined");
        track("newsletter_submit", { page: location.pathname });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={ref}
      className="newsletter-frame"
      src={`/embed/newsletter.html?theme=${theme}&layout=${layout}`}
      title={title}
      loading="lazy"
      style={{ height }}
    />
  );
}

export function NewsletterProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);
  const [invite, setInvite] = useState(false);
  const pathname = usePathname();

  const open = useCallback((source: string) => {
    setMounted(true);
    setInvite(false);
    track("newsletter_open", { source });
    requestAnimationFrame(() => {
      if (dialog.current && !dialog.current.open) dialog.current.showModal();
    });
  }, []);

  // A single, gentle invitation for first-time visitors once they have read a while.
  useEffect(() => {
    if (recall() || pathname.startsWith("/newsletter") || pathname.endsWith("-zoom")) return;
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      window.removeEventListener("scroll", onScroll);
      if (!dialog.current?.open) setInvite(true);
    };
    const onScroll = () => {
      const depth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (depth > 0.55) show();
    };
    const timer = window.setTimeout(show, 45000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  // Any link to #newsletter opens the dialog.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href$="#newsletter"]');
      if (!link) return;
      e.preventDefault();
      open(link.dataset.label ?? "link");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <NewsletterContext.Provider value={{ open }}>
      {children}

      <dialog
        ref={dialog}
        className="dialog newsletter-dialog newsletter-dialog--photo"
        aria-labelledby="newsletter-dialog-title"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
      >
        <div className="newsletter-dialog__split">
          <div className="newsletter-dialog__image">
            <Image src={photos.leatherSofa.src} alt={photos.leatherSofa.alt} fill sizes="22rem" style={{ objectPosition: photos.leatherSofa.focus }} />
          </div>
        <div className="newsletter-dialog__panel">
          <form method="dialog">
            <button className="dialog__close" aria-label="Close">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>
            </button>
          </form>
          <span className="newsletter-dialog__light" aria-hidden="true" />
          <h2 id="newsletter-dialog-title" className="display display--m">Join my newsletter</h2>
          <p className="lede">
            Stay informed on all Guided by Biet events, courses, art and music. We promise we won’t bug ya.
          </p>
          {mounted ? <NewsletterForm layout="stack" /> : null}
        </div>
        </div>
      </dialog>

      {invite ? (
        <aside className="invite" aria-label="Newsletter invitation">
          <button
            type="button"
            className="invite__close"
            aria-label="Dismiss"
            onClick={() => {
              setInvite(false);
              remember("dismissed");
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
          </button>
          <p className="invite__title">Join my newsletter</p>
          <p className="invite__text">Events, courses, art and music from Biet, now and then.</p>
          <button
            type="button"
            className="btn btn--small"
            onClick={() => {
              remember("opened");
              open("invite");
            }}
          >
            Sign up
          </button>
        </aside>
      ) : null}
    </NewsletterContext.Provider>
  );
}

export function NewsletterButton({ children, className = "btn", source }: { children: ReactNode; className?: string; source: string }) {
  const { open } = useNewsletter();
  return (
    <button type="button" className={className} onClick={() => open(source)}>
      {children}
    </button>
  );
}
