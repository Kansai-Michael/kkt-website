@AGENTS.md

# Kansai Karate Tarragindi — Website Project

## Site Facts

- **Site name:** Kansai Karate Tarragindi
- **Domain:** kansaikaratetarragindi.com.au (currently on NMN — not yet pointed to Vercel)
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
- **API key env var:** `KIHON_API_KEY` — set in Vercel project settings (never in code)
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

**IMPORTANT:** `sports karate training/` folder photos are from a Croatian WKF competition venue — wrong dojo. Avoid unless specifically confirmed correct (KANSAI-EMIL0748 is one of the few valid ones).

## Social Media

- Facebook: `https://www.facebook.com/kansaikaratetarragindi`
- Instagram: `https://www.instagram.com/kansaikaratetarragindi`
- (Confirm these URLs are correct with Michael/Jason before launch)

## Other Kansai Karate Locations (Footer)

- Gold Coast (Upper Coomera): https://kansaikarategoldcoast.com.au
- Sumner Park / Springfield / Moggill: https://www.kansaikarate.com.au
- Willawong: https://kansaikaratewillawong.com.au
- Clayfield: https://www.karateclayfield.com

## Remaining Tasks Before Go-Live

1. **Lead API (Phase 3)** — Update `/api/contact/route.ts` to POST directly to Kihon API instead of n8n webhook. Reference: `C:\Users\micha\Claude-Projects\kkgc-website\app\api\contact\route.ts`
2. **Contact Modal (Phase 4)** — Already uses 2-step native form. Verify leads are appearing in Kihon CRM.
3. **Vercel env var** — Confirm `KIHON_API_KEY=cb7877cab7a8dbeeb3063e49d0f89b326664afb82583a54e4e050c361b0cbb72` is set in Vercel project settings for Production + Preview.
4. **Smoke test** — On Vercel preview URL: submit trial form per program, check Kihon CRM source labels, mobile hero CTA visible, timetable booking iframes load.
5. **Social media URLs** — Confirm Facebook/Instagram handles with Jason before launch.
6. **DNS cutover** — Domain currently on NMN. Confirm with Michael → point kansaikaratetarragindi.com.au to Vercel.
7. **Real testimonials** — Replace placeholder quotes with real Google reviews.
8. **Adults page FAQs** — Not yet added to the adults program page (only timetable page has FAQs).
9. **Schema / metadata** — Review layout.tsx schema for accuracy post-address fix.
