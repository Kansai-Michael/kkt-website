# Changelog — Kansai Karate Tarragindi Website

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
