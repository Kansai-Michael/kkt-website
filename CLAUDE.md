@AGENTS.md

# Kansai Karate Tarragindi — Website Project

## Site Facts

- **Site name:** Kansai Karate Tarragindi
- **Domain:** kansaikaratetarragindi.com.au (live on Vercel — nameservers at Crazy Domains point to Vercel DNS)
- **Address:** Wellers Hill Bowls Club, 34 Esher St, Tarragindi QLD 4121
- **Phone:** 0480 566 172
- **Email:** jason@kansaikaratetarragindi.com.au
- **Head Instructor:** Sensei Jason Sallaway
- **Style:** Shitoryu Shukokai — traditional Japanese karate
- **Affiliation:** Kansai Karate Academy (Shihan Stephen Kelly, 7th Dan, Kyoshi)

## Programs & Timetable

| Program | Ages | Days & Times |
|---|---|---|
| Little Lions | 5–7 | Tue 4:15–5:00pm, Thu 4:15–5:00pm |
| Juniors | 8–12 | Mon 5:15–6:15pm, Tue 5:00–5:45pm, Thu 5:00–5:45pm |
| Teens | 13–17 | Mon 5:15–6:15pm, Tue 5:45–6:30pm, Thu 5:45–6:30pm |
| Adults | 18+ | Mon 5:15–6:15pm, Tue 5:45–6:30pm, Thu 5:45–6:30pm |

**No Cubs program at Tarragindi.**

## Kihon Integration

- **Booking URL (all 4 timetable pages):** `https://app.kihonsoft.au/book/tarragindi-first-lesson`
- **Lead API endpoint:** `POST https://app.kihonsoft.au/api/leads/inbound`
- **API key env var:** `KIHON_API_KEY` — ✓ set in Vercel project settings (Production + Preview). Never put in code.
- **Source labels:** little-lions → `website-little-lions`, juniors → `website-juniors`, teens/adults → `website-teens-adults`, general → `website-general`

**Note:** The `/api/contact` route currently still posts to an n8n webhook. It needs to be updated to POST directly to the Kihon API (see Phase 3 below).

## Stack

- Next.js 16.2.2 (Turbopack), React 19.2.4, TypeScript, Tailwind CSS v4
- **Hosting:** Vercel — auto-deploys on push to `master`
- **Repo:** `Kansai-Michael/kkt-website` on GitHub
- **Reference codebase:** `C:\Users\micha\Claude-Projects\kkgc-website` (Gold Coast site — structural template)

## Brand Colours

- `#5B7DB1` — nav, section backgrounds, blue CTAs
- `#4A6DA0` — hover states, footer background
- `#FFB800` — accent, buttons (all yellow buttons use **black** text)
- `#003087` — timetable table headers only
- `#1a3a7a` — dark blue heading strip

## Pages

| Path | Description |
|---|---|
| `/` | Homepage — hero (hero.jpg), 2+2 programs grid, Why Kansai, Kids section, Adults section, Testimonials, CTA with dojo-interior.jpg background |
| `/programs/little-lions` | Little Lions program page (Ages 5–7) — with FAQs |
| `/programs/juniors` | Juniors program page (Ages 8–12) — with FAQs |
| `/programs/teens` | Teens program page (Ages 13–17) — with FAQs |
| `/programs/adults` | Adults program page (Ages 18+) |
| `/programs/little-lions/timetable` | LL timetable + Kihon booking iframe |
| `/programs/juniors/timetable` | Juniors timetable + Kihon booking iframe |
| `/programs/teens/timetable` | Teens timetable — hero + divider = dojo-class.jpg; classPhoto objectPosition top |
| `/programs/adults/timetable` | Adults timetable — closing CTA section = adults-coa.jpg background |
| `/timetable` | General timetable (Mon/Tue/Thu all programs) |
| `/about` | About Sensei Jason Sallaway, correct Google Maps embed, Kansai Karate Academy lineage |
| `/contact` | Contact page |
| `/thank-you` | Post-booking confirmation |
| `/api/contact` | Form handler — currently n8n webhook (needs Kihon API update) |

## Components

| File | Description |
|---|---|
| `components/ProgramPage.tsx` | Shared program page layout. Props: `faqs?: {q,a}[]`, `buildPhotos[].objectPosition?` |
| `components/TimetablePage.tsx` | Shared timetable layout. Props: `moreInfo.classPhotoPosition?`, `moreInfo.closingPhoto?` |
| `components/Nav.tsx` | Sticky nav — phone 0480 566 172, Programs dropdown, Book Free Trial (black text) |
| `components/Footer.tsx` | 5-column footer — Brand, Contact, Programs, Follow Us (Facebook/Instagram), Other Locations |
| `components/ContactModal.tsx` | 2-step lead capture modal → POST /api/contact |
| `components/BookTrialButton.tsx` | Reusable CTA button — always yellow with black text |

## Photos

All photos in `public/images/`. Source: `C:\Users\micha\OneDrive\dojo\`

| Filename | Source | Used in |
|---|---|---|
| `hero.jpg` | `jnr/KANSAI-EMIL1353.jpg` | Homepage hero |
| `dojo-interior.jpg` | `others/KANSAI-EMIL1748.jpg` | Why section, homepage CTA background |
| `dojo-class.jpg` | `others/KANSAI-EMIL1742.jpg` | Teens timetable hero + divider |
| `adults.jpg` | adults folder | Adults hero, adults timetable |
| `adults-community.jpg` | `adults/KANSAI-EMIL2057.jpg` | Adults buildPhotos — Community |
| `adults-physical.jpg` | `adults/KANSAI-EMIL2035.jpg` | Adults buildPhotos — Physical Skills |
| `adults-fitness.jpg` | `adults/KANSAI-EMIL1970.jpg` | Adults benefitCards — Fitness |
| `adults-mentalhealth.jpg` | `adults/KANSAI-EMIL2041.jpg` | Adults benefitCards — Mental Health |
| `adults-coa.jpg` | `adults/KANSAI-EMIL1875.jpg` | Adults timetable closing CTA background |
| `teens-determination.jpg` | `sports karate training/KANSAI-EMIL0748.jpg` | Teens benefitCards — Determination |
| `ll-6.jpg` | `little lions/KANSAI-141A6638.jpg` | Little Lions benefitCards — Confidence |

All subfolders (jnr, little lions, teens, adults, others, sports karate training) are from the actual Kansai dojo. The sports karate training folder includes photos with a flag visible in the background — this is still the correct dojo.

## Social Media

- Facebook: `https://www.facebook.com/profile.php?id=61584025310463` ✓ confirmed
- Instagram: `https://www.instagram.com/kansaikaratetarragindi/` ✓ confirmed

## Other Kansai Karate Locations (Footer)

- Gold Coast (Upper Coomera): https://kansaikarategoldcoast.com.au
- Sumner Park / Springfield / Moggill: https://www.kansaikarate.com.au
- Willawong: https://kansaikaratewillawong.com.au
- Clayfield: https://www.karateclayfield.com

## Analytics & Tracking

| Item | Detail |
|---|---|
| GA4 Measurement ID | `G-V0EWLSYB7P` |
| GA4 Property ID | `539279772` |
| GA4 Account | `dojoboidesignstudio@gmail.com` |
| Search Console | Verified under `dojoboidesignstudio@gmail.com` |
| Tracking Sheet | `1CqViBSJkEFnQl7vsGVCYMO8fWTjynfMSrkDvLocJTDo` |
| Apps Script | `1VspgubCtBiGATp06WoINVf5Kngr25HqnBHEDxjMNHySxEsNBozSplDcW` |
| Local script path | `C:\tmp\clasp-kkt-ga4\` |
| Daily trigger | Run `createDailyTrigger()` in Apps Script editor to activate 6am Brisbane sync |

**GA4 manual steps (do once):**
1. GA4 Admin → Property Access Management → add `michaelhunt270@gmail.com` as Viewer
2. In Apps Script editor → Services → enable **Google Analytics Data API** → run `main()` → run `createDailyTrigger()`
3. GA4 Admin → Events → mark `generate_lead` as key event
4. GA4 Admin → Events → Create event: `programs_page_view` (condition: page_location contains /programs/) → mark as key event

## Email

Mailgun on `mg.kansaikaratetarragindi.com.au`. Forwarding route set up for `jason@kansaikaratetarragindi.com.au` → Jason's personal inbox.

## Remaining Tasks

1. **www → apex redirect** — Vercel Settings → Domains → set www to redirect (301) to apex. Currently serves duplicate content.
2. **H1 keyword fix** — Homepage H1 has no target keyword. Add "karate" + "Tarragindi". See seo-report-2026-05-28.md.
3. **Jason's belt rank** — Add to About page: "[X]th Dan Black Belt, [X] years teaching."
4. **Real testimonials** — Replace unattributed "Member Feedback" quotes with named Google reviews.
5. **Adults page FAQs** — Add 3–5 FAQs to the adults program page.
6. **Contrast fix** — Yellow #FFB800 on blue #5B7DB1 fails WCAG AA (2.42:1). Fix hero H1 keyword highlights.
7. **Hero image `priority` prop** — Add to the hero `<Image>` component for LCP improvement.
8. **Program page boilerplate** — Each page needs unique copy. See seo-report-2026-05-28.md.

## SEO Baseline

Score: 58/100 (2026-05-28). Target: 72/100 in 30 days. Full report: `seo-report-2026-05-28.md`.
