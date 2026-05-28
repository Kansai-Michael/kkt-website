"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ID = "G-V0EWLSYB7P";

export default function GAPageView() {
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (window as any).gtag;
    if (typeof gtag !== "function") return;
    gtag("config", GA_ID, {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
