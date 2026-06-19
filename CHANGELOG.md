# Changelog — Kansai Karate Tarragindi Website

## [1.4.0] — 2026-06-19

### Cubs Program + 2026 Timetable Overhaul

**New: Cubs Program (Ages 3–4)**
- New program page `/programs/cubs` — full ProgramPage layout with hero, 3 build photos, 3 benefit cards, parents/students features, 5 FAQs, 2 testimonials, CTA
- New timetable page `/programs/cubs/timetable` — Mon 4:30–5:00pm, Thu 4:15–4:45pm schedule; `* Cubs Classes start Monday 13th July 2026` note below table
- 8 real Cubs photos sourced from `C:\Users\micha\OneDrive\Kansai Karate Gold Coast\Claude Assets\Images\Cubs\` (KKGC dojo photos, used as placeholders until Tarragindi Cubs photos are taken)
- Cubs added to nav Programs dropdown (first item), Book Free Trial modal (first option), homepage programs grid (top-left card with yellow "NEW" badge)
- Homepage programs grid restructured from 2+2 to 2+3 (Cubs + Little Lions top row; Juniors + Teens + Adults bottom row)

**2026 Timetable Update**
- Fixed broken booking iframe on `/timetable` — placeholder string `KIHON_BOOKING_CALENDAR_URL` replaced with real URL `https://app.kihonsoft.au/book/tarragindi-first-lesson`
- General timetable expanded: Wednesday and Saturday columns added ("Coming Soon" for all programs); Cubs row added with asterisk start date note
- All 5 program timetable pages updated: `wed: "Coming Soon"` and `sat: "Coming Soon"` added to every `scheduleRows` entry
- Little Lions Monday class added (4:30–5:15pm) across timetable page, program page copy, and general timetable

**Components**
- `TimetablePage.tsx`: new optional `scheduleNote` prop — renders a small footnote paragraph below the schedule table (used by Cubs for the start date notice)
- `ContactModal.tsx`: Cubs program added as the first option in the program selector

---

## [1.3.0] — 2026-06-05

### SEO Optimisation Pass

**On-page SEO**
- Homepage H1 replaced: marketing tagline → "Traditional Karate Classes in Tarragindi — Kids, Teens & Adults" (keyword H1); old tagline demoted to subtitle paragraph
- Suburb coverage sentence added to Programs section: Wellers Hill, Moorooka, Holland Park, Annerley
- Canonical tags added to all 4 program pages
- FAQPage JSON-LD schema added to Little Lions, Juniors, Teens program pages
- "Physical Skills" feature copy made unique per program page (removed boilerplate "proprioception, balance, agility and coordination" from all 4)
- Adults buildPhotos Physical Skills body also rewritten

**Navigation & UX**
- Mobile hamburger tap target increased: `p-2` (8px) → `p-3` (12px) — meets 44px minimum
- Internal links added in ProgramPage parents section → `/about` and `/programs/[slug]/timetable`

**Performance**
- All 4 logo `<img>` tags converted to Next.js `<Image>` (homepage, ProgramPage, Footer, TimetablePage) — enables automatic WebP delivery
- Program card `sizes` prop added on homepage: `"(min-width: 768px) 50vw, 100vw"`

**Content**
- About page: Jason's belt rank added — "3rd Dan Black Belt — Shitoryu Shukokai Karate" (display subtitle + inline in bio paragraph + Person schema)
- www → apex 301 permanent redirect set in Vercel Domains

---

## [1.2.0] — 2026-06-03

### Content Rewrite + Technical SEO Fixes

**Content**
- Full NMN (New Member Ninja) boilerplate removal: homepage hero subtext, all 4 program card descriptions, 3 NMN feature grids replaced with original Kansai content (Sensei Jason, Shitoryu lineage, class times)
- All 4 program page hero subtitles rewritten with original, dojo-specific copy
- Adults program testimonial replaced with non-NMN version

**Technical SEO**
- `robots.txt` fixed: was pointing to Gold Coast domain's sitemap (`kansaikarategoldcoast.com.au/sitemap.xml`) — now points to correct domain
- Contact page converted from full client component to server component (was invisible to Google due to `"use client"` + `useSearchParams()`)
- Contact page wrong address fixed: "195 Fingal Street" → "Wellers Hill Bowls Club, 34 Esher St, Tarragindi QLD 4121"
- Contact page wrong phone fixed: "07 3848 5949" → "0480 566 172"
- SportsActivityLocation schema: added `geo` (GeoCoordinates), `@id`, `sameAs`
- Organization schema: logo changed from bare string to `ImageObject`, added `@id` and `sameAs`
- `/contact` added to `sitemap.ts`
- `metadataBase` and canonical added to `layout.tsx`
- Blue fist favicon: `app/icon.png` copied from KKGC project; explicit `icons` in metadata

**Infrastructure**
- Geo-lock added (`middleware.ts`): non-AU visitors redirect to google.com.au; bot allowlist covers all Google/Bing crawlers
- Google Search Console verification token added to layout metadata

---

## [1.1.0] — 2026-05-28

### DNS Cutover + Email + Analytics

**Infrastructure**
- DNS cutover from Ninja Hosting (NMN) to Vercel — nameservers at Crazy Domains updated to Vercel DNS
- Mailgun email set up on `mg.kansaikaratetarragindi.com.au` — `jason@kansaikaratetarragindi.com.au` forwards to Jason's personal inbox
- Mailgun DNS records (MX ×2, SPF, DKIM) added in Vercel DNS panel

**Analytics**
- GA4 tag `G-V0EWLSYB7P` added with SPA page-view tracking (`send_page_view: false` + `GAPageView` component using `usePathname()`)
- `generate_lead` conversion event on `/thank-you` page
- `programs_page_view` event on all `/programs/*` pages via layout
- Google Search Console verified under `dojoboidesignstudio@gmail.com`
- Apps Script GA4 → Sheets pipeline built and deployed (`C:\tmp\clasp-kkt-ga4\`) — 9 sheet tabs, daily 6am Brisbane trigger

---

## [1.0.1] — 2026-05-25

### Fixes & confirmations
- Facebook URL updated to confirmed profile link (`profile.php?id=61584025310463`)
- Instagram URL confirmed (`/kansaikaratetarragindi/`)
- `KIHON_API_KEY` added to Vercel project settings (Production + Preview) — manually by Michael
- Corrected docs: `sports karate training/` folder is the correct Kansai dojo (flag in background, not a different venue)
- Lead API confirmed already on Kihon — no further change needed

## [1.0.0] — 2026-05-25

### Initial production build

**Infrastructure**
- Next.js 16.2.2 (Turbopack), React 19.2.4, TypeScript, Tailwind CSS v4
- Deployed to Vercel, auto-deploys on push to `master` (GitHub: Kansai-Michael/kkt-website)
- Kihon booking URL live on all 4 timetable pages: `https://app.kihonsoft.au/book/tarragindi-first-lesson`

**Pages built**
- Homepage: hero, 2+2 programs grid (photo cards), Why Kansai (icons + dojo photo), Kids section, Adults section, Testimonials, CTA with background photo
- Program pages: Little Lions, Juniors, Teens, Adults — each with hero, build photos, benefit cards, parents/students feature sections, FAQs, testimonials, final CTA
- Timetable pages (×4): schedule grid, Kihon booking iframe, shine features, divider photo, class activities, FAQs, closing CTA
- About page: Sensei Jason bio, Kansai Karate Academy, style, affiliations, correct Google Maps embed
- Supporting pages: Contact, Thank You, General Timetable, Privacy, Terms, Sitemap, Robots.txt

**Photos (real dojo photos added)**
- `hero.jpg` — KANSAI-EMIL1353 (jnr folder — wide class shot with COURAGE DISCIPLINE wall)
- `dojo-interior.jpg` — KANSAI-EMIL1748 (others folder)
- `dojo-class.jpg` — KANSAI-EMIL1742 (others folder — teens timetable hero/divider)
- `adults-community.jpg` — KANSAI-EMIL2057
- `adults-physical.jpg` — KANSAI-EMIL2035
- `adults-fitness.jpg` — KANSAI-EMIL1970
- `adults-mentalhealth.jpg` — KANSAI-EMIL2041
- `adults-coa.jpg` — KANSAI-EMIL1875 (adults timetable closing CTA background)
- `teens-determination.jpg` — KANSAI-EMIL0748
- `ll-6.jpg` — KANSAI-141A6638 (Little Lions — Confidence card)

**UI & Components**
- `ProgramPage.tsx`: added `faqs` prop + FAQ section, `objectPosition` on photo cards, black text on yellow buttons
- `TimetablePage.tsx`: added `classPhotoPosition` and `closingPhoto` optional props, black text on yellow buttons
- `Nav.tsx`: removed Contact button, added phone 0480 566 172, Book Free Trial button black text
- `Footer.tsx`: 5-column layout — added Follow Us (Facebook + Instagram)
- All yellow (`#FFB800`) BookTrialButton instances updated to black text

**Content**
- FAQs added to Little Lions, Juniors, Teens program pages (5 questions each)
- FAQs already present on all 4 timetable pages
- Correct Google Maps embed for Kansai Karate Tarragindi (not placeholder coordinates)
- Photo crop fine-tuning: Little Lions — Focus & Discipline (`objectPosition: center 75%`), Self-Confidence (`objectPosition: center 25%`)
- Teens timetable classPhoto `objectPosition: top` to show face

**Pending (not yet in production)**
- Lead API route still posts to n8n — needs update to Kihon direct (Phase 3)
- DNS not yet cut over (domain still on NMN site)
- Social media URLs unconfirmed (using assumed handles)
