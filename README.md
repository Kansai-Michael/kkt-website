# Kansai Karate Tarragindi — Website

Client website for Sensei Jason Sallaway's karate dojo in Tarragindi, Brisbane.
Built by Dojoboi Design Studios. Live at [kansaikaratetarragindi.com.au](https://kansaikaratetarragindi.com.au).

---

## Stack

- **Framework:** Next.js 16.2.2 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel (auto-deploy on push to `master`)
- **Repo:** `Kansai-Michael/kkt-website` on GitHub

---

## Local Development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:3000`.

---

## Deployment

Push to `master` — Vercel deploys automatically. No manual steps needed.

Environment variables required in Vercel:
- `KIHON_API_KEY` — Kihon CRM inbound leads API key (set in Vercel project settings, Production + Preview)

---

## Key Integrations

### Kihon (Bookings & Leads)
- Booking iframe URL: `https://app.kihonsoft.au/book/tarragindi-first-lesson`
- Lead API: `POST https://app.kihonsoft.au/api/leads/inbound`
- API key stored in Vercel env var `KIHON_API_KEY` — never put in code
- Source labels per form: `website-little-lions`, `website-juniors`, `website-teens-adults`, `website-general`

### Google Analytics 4
- Measurement ID: `G-V0EWLSYB7P`
- Property ID: `539279772`
- Account: `dojoboidesignstudio@gmail.com`
- SPA tracking: `send_page_view: false` in gtag init + `GAPageView` component handles route changes
- Conversion events: `generate_lead` (fires on /thank-you) and `programs_page_view` (fires on all /programs/* pages)

### Google Search Console
- Verified under `dojoboidesignstudio@gmail.com`
- Sitemap: `https://kansaikaratetarragindi.com.au/sitemap.xml`

### GA4 → Google Sheets Analytics Pipeline
- Tracking Sheet: `1CqViBSJkEFnQl7vsGVCYMO8fWTjynfMSrkDvLocJTDo`
- Apps Script ID: `1VspgubCtBiGATp06WoINVf5Kngr25HqnBHEDxjMNHySxEsNBozSplDcW`
- Local script: `C:\tmp\clasp-kkt-ga4\`
- Daily 6am Brisbane trigger active — syncs 9 sheet tabs (Summary, Daily, Sources, Top Pages, Conversions, Geographic, Landing Pages, Devices, Thank-You Sources)

### Email (Mailgun)
- Domain: `mg.kansaikaratetarragindi.com.au`
- `jason@kansaikaratetarragindi.com.au` forwards to Jason's personal inbox
- DNS records managed in Vercel DNS (nameservers delegated from Crazy Domains)

---

## Updating Content

All page content is in the page files under `app/`. Program pages use the shared `ProgramPage` component — edit the props in each page file.

| What to change | Where |
|---|---|
| Timetable times | `CLAUDE.md` (reference) + each timetable page in `/programs/*/timetable/` |
| Schedule footnote (e.g. start date) | `scheduleNote` prop on `TimetablePage` in the relevant timetable page |
| Program descriptions | `/app/programs/[slug]/page.tsx` |
| Homepage programs grid | `/app/page.tsx` — `programs` array (currently 5 programs: Cubs, LL, Juniors, Teens, Adults) |
| Testimonials | Each program page's `testimonials` prop |
| Contact details | `components/Nav.tsx`, `components/Footer.tsx`, `/app/contact/page.tsx` |
| FAQs | Each program page's `faqs` prop |
| Schema / SEO metadata | Each page's `export const metadata` and JSON-LD `const` blocks |
| Book Free Trial modal programs | `components/ContactModal.tsx` — `programs` object at the top of the file |
| Cubs photos | `public/images/cubs*.jpg` — source: `C:\Users\micha\OneDrive\Kansai Karate Gold Coast\Claude Assets\Images\Cubs\` |

---

## Maintaining the Analytics Pipeline

To push script changes to Apps Script:

```powershell
cd C:\tmp\clasp-kkt-ga4
$env:NODE_TLS_REJECT_UNAUTHORIZED = "0"
npx clasp push
```

To manually run a sync or reset the trigger, open the Apps Script editor:
`https://script.google.com` → find project `kkt-ga4` → run `main()` or `createDailyTrigger()`

---

## DNS (managed in Vercel)

Nameservers at Crazy Domains point to Vercel DNS. All DNS records are in Vercel → Settings → Domains. This includes:
- A record for apex (`kansaikaratetarragindi.com.au`)
- CNAME for `www` (301 permanent redirect to apex)
- Mailgun records (MX ×2, SPF TXT, DKIM TXT) under `mg.` subdomain

---

## Reference

Full project context, brand colours, photo sources, and remaining tasks: see `CLAUDE.md`.
SEO audit and fix history: see `seo-report-2026-05-28.md`.
