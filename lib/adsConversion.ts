// Google Ads conversion tracking (account AW-17874080223, "Kansai Karate Tarragindi").
//
// Until Nov 2026 the only website conversions in this account were page-view
// rules on the old NewMember Ninja URLs (/little-lions/more-info/ etc.). Those
// pages died with the site rebuild, so "NMN WT26 - Leads-PM" recorded zero
// conversions while the site was producing 6–10 real Kihon leads a week — the
// campaign was bidding blind. Same failure the Gold Coast account had in 2026.
//
// One action covers both ways in: the enquiry popup and a completed Kihon
// booking (/thank-you). It counts once per ad click on the Ads side, and is
// deduplicated per session here so the popup + booking path reports once.

export const ADS_ENQUIRY_SEND_TO = "AW-17874080223/eTt_COyA2rEdEN-jg8tC";

const SESSION_KEY = "kkt_ads_enquiry_fired";

/** Details submitted (popup) or a class booked (Kihon redirect to /thank-you). */
export function fireAdsEnquiry(): void {
  if (typeof window === "undefined") return;

  try {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Private browsing can block sessionStorage. Reporting a possible duplicate
    // beats reporting nothing, so carry on.
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("event", "conversion", { send_to: ADS_ENQUIRY_SEND_TO });
  }
}
