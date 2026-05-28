# SEO Audit — Kansai Karate Tarragindi
**URL:** https://kansaikaratetarragindi.com.au
**Date:** 28 May 2026
**Audited by:** Dojoboi Design Studios (7-agent parallel audit)

---

## Overall SEO Health Score: 58 / 100

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 64/100 | 22% | 14.1 |
| Content Quality (E-E-A-T) | 62/100 | 23% | 14.3 |
| On-Page SEO | 65/100 | 20% | 13.0 |
| Schema / Structured Data | 40/100 | 10% | 4.0 |
| Performance (CWV) | 72/100 | 10% | 7.2 |
| AI Search Readiness (GEO) | 42/100 | 10% | 4.2 |
| Images | 70/100 | 5% | 3.5 |

*Site is 3 days live — baseline score. Target 75+ within 60 days.*

---

## ✅ Fixed at Audit (already deployed)

- **CRITICAL: robots.txt was pointing to the Gold Coast domain's sitemap** — fixed, now points to kansaikaratetarragindi.com.au
- **Contact page had no server-rendered content** — converted to server component; Google can now index it
- **Wrong address and phone on contact page** — corrected to Wellers Hill Bowls Club, 34 Esher St + 0480 566 172
- **Schema: added geo coordinates, @id, sameAs** to SportsActivityLocation
- **Schema: fixed Organization.logo** from bare string to ImageObject
- **Schema: added @id and sameAs** to Organization
- **Added /contact to sitemap.xml**
- **Added metadataBase and canonical** to layout.tsx metadata
- **Added GA4 tag** (G-V0EWLSYB7P) with SPA page-view tracking
- **Added generate_lead conversion event** on /thank-you page
- **Added programs_page_view event** on all /programs/* pages
- **Added Google Search Console** verification token

---

## 🔴 Critical (fix immediately)

All critical issues were fixed at audit — see above.

---

## 🟠 High Priority (fix within 2 weeks)

### H1 has no target keyword
The homepage H1 is a marketing tagline — zero SEO value. Replace with:
> "Traditional Karate Classes in Tarragindi — Kids, Teens & Adults"
Move current tagline to an H2 below it.

### Jason's belt/dan rank missing from About page
No belt rank stated anywhere. "Licensed instructor" is not an expertise signal under Google QRG. Add: "Sensei Jason Sallaway, [X]th Dan Black Belt, [X] years training."

### www subdomain serves content instead of redirecting
`https://www.kansaikaratetarragindi.com.au` returns 200 — creates duplicate content.
Fix: Vercel → Project → Settings → Domains → click www entry → set to redirect (301) to apex.

### Canonical tags missing on program pages
Only About page has a canonical. Add to each program page's metadata:
```ts
alternates: { canonical: "https://kansaikaratetarragindi.com.au/programs/little-lions" }
```

### Teens FAQ answer truncated
`/programs/teens` — "How often should they train? Two or" — answer is cut off mid-sentence. Fix the copy.

### Contrast failure: yellow #FFB800 on blue #5B7DB1
Ratio 2.42:1 — fails WCAG AA (minimum 3:1 for large text, 4.5:1 for normal). Affects H1 keyword highlights. Either darken the overlay or change highlight colour.

### Hero image missing `priority` prop
Add `priority` to the hero `<Image>` component — injects `fetchpriority="high"` which improves LCP.

### Program pages have boilerplate copy
"proprioception, balance, agility and coordination" appears verbatim on all 4 program pages. Each page needs at least one unique section specific to that age group.

---

## 🟡 Medium Priority (fix within 1 month)

### "martial arts brisbane southside" not in body copy
Neither this phrase nor "karate wellers hill" appears in any body text. Add naturally, e.g.:
> "Kansai Karate Tarragindi is the southside Brisbane choice for families from Wellers Hill, Moorooka, Holland Park and Annerley."

### FAQPage schema missing from program pages
FAQs exist on Little Lions, Juniors, Teens pages — no schema markup. Add FAQPage JSON-LD to each. Not a Google rich result on commercial sites, but improves AI/LLM citation probability.

### Adults program page below 800 words + no FAQ
Currently ~731 words, no FAQ section. Expand to 800+ and add 3–5 FAQs.

### No pricing information anywhere
Creates decision friction. Add "from $X/week" or a pricing inquiry CTA. Google QRG notes pricing transparency as a trust signal.

### Unattributed testimonials
"Member Feedback" with no names is not a trust signal. Add first name + suburb minimum (e.g., "Sarah M., Tarragindi").

### Hamburger button tap target: 40px (below 44px minimum)
Add `padding: 12px` to the hamburger button wrapper.

### Logo served as 269KB PNG, no Next.js Image
Convert to WebP (target <20KB). Switch to `next/image` `<Image>` with `width` and `height` to prevent CLS.

### program card `sizes="100vw"` too broad
Change to `sizes="(min-width: 768px) 50vw, 100vw"` on all program card images.

### No contextual internal links in body copy
Zero links from page body to other pages. Add "meet your instructor" link from program pages to /about. Add timetable links from program pages.

---

## 🟢 Quick Wins (low effort, high signal)

| Fix | Effort | Impact |
|---|---|---|
| Add "karate" + "Tarragindi" to H1 | 2 min | High — primary keyword in H1 |
| Add www → apex redirect in Vercel settings | 2 min | High — eliminates duplicate content |
| Mark `generate_lead` as key event in GA4 Admin | 2 min | High — enables conversion tracking |
| Add `priority` prop to hero `<Image>` | 1 min | Medium — improves LCP |
| Add Jason's belt rank to About page | 5 min | High — critical E-E-A-T |
| Fix truncated Teens FAQ | 2 min | Medium |
| Add suburb coverage sentence to homepage | 5 min | High — "brisbane southside" keyword |

---

## GA4 Manual Steps Required (Jason's GA4 account)

After the first lead conversion fires on the live site:
1. GA4 Admin → **Events** → find `generate_lead` → toggle **Mark as key event**
2. GA4 Admin → **Events → Create event**:
   - Name: `programs_page_view`
   - Condition 1: `event_name` equals `page_view`
   - Condition 2: `page_location` contains `/programs/`
   → Save → mark as key event

---

## Analytics Pipeline Status

| Item | Status |
|---|---|
| GA4 Measurement ID | G-V0EWLSYB7P (live) |
| GA4 Account | dojoboidesignstudio@gmail.com |
| GA4 Numeric Property ID | **Needed** — check GA4 Admin → Property Settings |
| Google Search Console | Verified (pending GA4 live data) |
| Tracking Sheet | Created — ID: 1CqViBSJkEFnQl7vsGVCYMO8fWTjynfMSrkDvLocJTDo |
| Apps Script | Ready at C:\tmp\clasp-kkt-ga4\ — needs Property ID to deploy |
| Daily trigger | Pending — set up after Apps Script deployed |

---

## Next Review

Run `/seo audit https://kansaikaratetarragindi.com.au` in 30 days to track improvement.
Target: 72/100 after high-priority fixes are applied.
