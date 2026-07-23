"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ID = "G-V0EWLSYB7P";

/**
 * Sends a GA4 page_view on first load and on every client-side route change.
 *
 * The site sets `send_page_view: false` in the gtag init (app/layout.tsx), so
 * NO pageview fires automatically — this component is the only source of them.
 *
 * Two things this has to get right:
 *  1. Use an explicit `gtag('event', 'page_view', …)`. Re-calling
 *     `gtag('config', …)` does NOT reliably emit a pageview in GA4, which left
 *     most sessions with a "(not set)" landing page.
 *  2. gtag loads with strategy="afterInteractive", so it may not exist yet when
 *     this effect first runs. Retry until it's ready so the FIRST pageview (the
 *     one GA4 uses to set the session's landing page) is never dropped.
 */
export default function GAPageView() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let tries = 0;

    const send = () => {
      if (cancelled) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gtag = (window as any).gtag;
      if (typeof gtag !== "function") {
        // Not ready yet — retry for up to ~5s (20 × 250ms).
        if (tries++ < 20) setTimeout(send, 250);
        return;
      }
      gtag("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    };

    send();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
