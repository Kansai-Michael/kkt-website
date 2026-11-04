"use client";

import { useEffect } from "react";

import { fireAdsEnquiry } from "@/lib/adsConversion";

// Reports the Google Ads enquiry conversion when this page loads. Drop it only
// on a page a visitor can reach solely by completing a booking — currently just
// /thank-you, which the Kihon calendar redirects to.
export default function AdsConversionEvent() {
  useEffect(() => {
    // gtag loads with strategy="afterInteractive", so useEffect can win the
    // race on a fast connection. Retry once when it will definitely be there.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof (window as any).gtag === "function") {
      fireAdsEnquiry();
      return;
    }

    const t = setTimeout(fireAdsEnquiry, 1000);
    return () => clearTimeout(t);
  }, []);

  return null;
}
