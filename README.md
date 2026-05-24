# Kansai Karate Tarragindi — Website

The official website for Kansai Karate Tarragindi, a licensed dojo of Kansai Karate Academy. Built with Next.js and deployed to Vercel.

**Live domain:** kansaikaratetarragindi.com.au (DNS cutover pending — currently on NMN)  
**Vercel project:** auto-deploys on push to `master`  
**GitHub repo:** Kansai-Michael/kkt-website

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16.2.2 (Turbopack) | Framework |
| React | 19.2.4 | UI |
| TypeScript | — | Type safety |
| Tailwind CSS | v4 | Styling |
| Vercel | — | Hosting + CDN |
| Kihon | — | Booking + lead capture |

---

## Project Structure

```
app/
  page.tsx                      # Homepage
  about/page.tsx                # About Sensei Jason + Google Maps
  programs/
    little-lions/
      page.tsx                  # Little Lions program page
      timetable/page.tsx        # LL timetable + Kihon iframe
    juniors/
      page.tsx
      timetable/page.tsx
    teens/
      page.tsx
      timetable/page.tsx        # Hero + divider = dojo-class.jpg
    adults/
      page.tsx
      timetable/page.tsx        # Closing CTA = adults-coa.jpg bg
  timetable/page.tsx            # General timetable
  api/contact/route.ts          # Lead form handler

components/
  ProgramPage.tsx               # Shared layout for all program pages
  TimetablePage.tsx             # Shared layout for all timetable pages
  Nav.tsx                       # Sticky nav with phone + programs dropdown
  Footer.tsx                    # 5-column footer
  ContactModal.tsx              # 2-step lead capture modal
  BookTrialButton.tsx           # Yellow CTA button (always black text)

public/
  images/                       # All photos (see CLAUDE.md for source mapping)
```

---

## How It Works

### Lead Flow
1. Visitor clicks "Book Free Trial" anywhere on site → opens `ContactModal`
2. User selects program (step 1) → fills name/email/phone (step 2)
3. Form POSTs to `/api/contact` with program slug
4. **Currently:** posts to n8n webhook ← needs updating to Kihon API
5. **Target:** POST to `https://app.kihonsoft.au/api/leads/inbound` with `X-API-Key` header

### Booking Flow
1. From any timetable page → Kihon iframe loads `https://app.kihonsoft.au/book/tarragindi-first-lesson`
2. User selects time slot + fills details inside the iframe

### Deployment
- Push to `master` → Vercel auto-builds and deploys
- Build command: `npm run build`
- Zero TypeScript errors required before push

---

## Credentials & Environment Variables

| Variable | Where | Value |
|---|---|---|
| `KIHON_API_KEY` | Vercel project settings (Production + Preview) | `cb7877cab7a8dbeeb3063e49d0f89b326664afb82583a54e4e050c361b0cbb72` |

**Never put API keys in code.** The key is read via `process.env.KIHON_API_KEY` at runtime.

---

## Reference Codebase

The Gold Coast site (`C:\Users\micha\Claude-Projects\kkgc-website`) is the structural template for KKT. When building new features, compare against KKGC first:
- Lead API route: `kkgc-website/app/api/contact/route.ts`
- Contact modal: `kkgc-website/components/ContactModal.tsx`

---

## Photos

All source photos are in `C:\Users\micha\OneDrive\dojo\`.

All subfolders are from the actual Kansai dojo — including `sports karate training/`, which has a flag visible in the background but is the correct venue. See `CLAUDE.md` for the full photo source mapping.

---

## Running Locally

```bash
cd kkt-website
npm install
npm run dev
# → http://localhost:3000
```

Build check:
```bash
npm run build
```

---

## Maintaining the Site

### Adding/changing a photo
1. Copy source file from `C:\Users\micha\OneDrive\dojo\` to `public/images/`
2. Update the filename reference in the relevant page file
3. Optionally set `objectPosition` on the photo if crop needs adjusting
4. `git add public/images/<file>.jpg` → commit → push → Vercel deploys

### Adjusting photo crop
In program pages, add `objectPosition: "top" | "bottom" | "center 25%"` etc. to the photo object in the page file.  
In timetable pages, add `classPhotoPosition: "top"` to `moreInfo`.

### Adding FAQs to a program page
Pass a `faqs` prop to `<ProgramPage>`:
```tsx
faqs={[
  { q: "Question?", a: "Answer." },
]}
```

### Updating the timetable
Edit the `scheduleRows` array in the relevant `timetable/page.tsx`.

### Updating contact details
- Phone/email: `components/Nav.tsx`, `components/Footer.tsx`, `app/about/page.tsx`
- Address: `app/about/page.tsx`, `app/layout.tsx` (schema)

---

## Remaining Before DNS Cutover

1. Update `/api/contact/route.ts` to use Kihon API (not n8n)
2. Add `KIHON_API_KEY` to Vercel project settings
3. Smoke test on Vercel preview URL
4. Confirm Facebook + Instagram URLs with Jason
5. DNS: point kansaikaratetarragindi.com.au to Vercel (confirm with Michael first)
