@AGENTS.md

# Kansai Karate Tarragindi — Website Project

## Site Facts

- **Site name:** Kansai Karate Tarragindi
- **Domain:** kansaikaratetarragindi.com.au
- **Address:** 195 Fingal Street, Tarragindi QLD 4121
- **Phone:** 07 3848 5949
- **Email:** jason@kansaikaratetarragindi.com.au
- **Head Instructor:** Sensei Jason Sallaway
- **Style:** Shitoryu Shukokai — traditional Japanese karate
- **Affiliation:** Kansai Karate Academy (Shihan Stephen Kelly, 7th Dan, Kyoshi)

## Programs

- Little Lions (5–7 yrs) — Tuesday and Thursday 4:15–5:00pm
- Juniors (8–12 yrs) — Monday 5:15–6:15pm, Tuesday 5:00–5:45pm, Thursday 5:00–5:45pm
- Teens (13–17 yrs) — Monday 5:15–6:15pm, Tuesday 5:45–6:30pm, Thursday 5:45–6:30pm
- Adults (18+) — Monday 5:15–6:15pm, Tuesday 5:45–6:30pm, Thursday 5:45–6:30pm

**No Cubs program at Tarragindi.**

## Kihon Booking URLs (placeholders — replace when accounts are created)

- Little Lions: `KIHON_LITTLE_LIONS_URL`
- Juniors: `KIHON_JUNIORS_URL`
- Teens: `KIHON_TEENS_URL`
- Adults: `KIHON_ADULTS_URL`
- Booking calendar: `KIHON_BOOKING_CALENDAR_URL`

## Stack

- Next.js 16, Tailwind CSS v4, TypeScript
- Hosting: TBD (Vercel recommended)
- Auto-deploy on git push to main

## Brand Colours

- `--kkgc-blue`: `#5B7DB1` (nav, section backgrounds, CTAs)
- `--kkgc-blue-dark`: `#4A6DA0` (hover states, footer)
- `--kkgc-yellow`: `#FFB800` (accent, buttons)
- Table header blue: `#003087` (timetable headers only)

## Pages

| Path | Description |
|---|---|
| `/` | Homepage — hero, 4-card programs grid, Why Kansai, About Sensei Jason, Testimonials, CTA |
| `/programs/little-lions` | Little Lions program page (Ages 5–7) |
| `/programs/juniors` | Juniors program page (Ages 8–12) |
| `/programs/teens` | Teens program page (Ages 13–17) |
| `/programs/adults` | Adults program page (Ages 18+) |
| `/programs/[slug]/timetable` | Per-program timetable pages (4 programs) |
| `/timetable` | General timetable page (Mon/Tue/Thu only) |
| `/about` | About Sensei Jason Sallaway, Kansai Karate Academy lineage |
| `/thank-you` | Post-booking confirmation page |
| `/api/contact` | Form handler → n8n webhook |

## Other Kansai Karate Locations

- Gold Coast (Upper Coomera): https://kansaikarategoldcoast.com.au
- Sumner Park / Springfield / Moggill: https://www.kansaikarate.com.au
- Willawong: https://kansaikaratewillawong.com.au
- Clayfield: https://www.karateclayfield.com

## Outstanding / Next Steps

1. **Kihon accounts** — set up Kihon forms for each program, replace placeholder URLs
2. **Booking calendar** — replace `KIHON_BOOKING_CALENDAR_URL` with actual calendar embed
3. **n8n webhook** — build lead intake workflow, add `N8N_WEBHOOK_URL` to env vars
4. **Testimonials** — replace placeholder quotes with real Google reviews when available
5. **Real photos** — add Tarragindi dojo photos when available (currently using KKGC stock photos)
6. **Google Maps embed** — add embed URL with correct coordinates for Tarragindi
7. **SEO audit** — run after content is final and domain is live
8. **Privacy Policy & Terms** — update with Australian-compliant versions
9. **Domain setup** — point kansaikaratetarragindi.com.au DNS to hosting
10. **Social media** — no confirmed accounts yet; add to Footer when available
