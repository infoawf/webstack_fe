# WebStack premium agency site

## Direction & stack

- Visual direction: **SaaS premium precision** (v1) — white background, near-black text, sky-blue (#0EA5E9) accent; Bricolage Grotesque display + Inter body; dashboard-style hero with booking calendar / revenue / inquiry cards.
- Stack note: project runs on **TanStack Start + Tailwind v4** (not Next.js). Visual result and behavior — smooth scroll, glass pill navbar, marquee testimonials, full responsive — will be identical. Lenis used for smooth scrolling (Locomotive Scroll is React-incompatible on modern setups; Lenis is the standard equivalent).

## Routes

- `/` — homepage with all sections in order below.
- `/contact` — dedicated contact page with form + side panel.

## Homepage sections (in order)

1. **Navbar** — full-width on load; on scroll, morphs into centered glass pill (rounded-full, backdrop blur, subtle border, soft shadow, reduced width). Links: Home, Problems, Solution, Services, Results, Testimonials, FAQs, Contact. In-page links smooth-scroll to section IDs; Contact routes to `/contact`.
2. **Hero** — headline, subheadline, trust line, primary + secondary CTAs, 3 badges (Lead-Ready Websites / Booking & Payment Setup / Built For Local Businesses), and dashboard mockup (website preview + booking calendar + payment confirmation + lead form + customer inquiry) with sky-blue highlights and soft shadows.
3. **Problems** — heading + description + 5 problem cards.
4. **Solution** — heading + description + 6 solution cards.
5. **Before / After WebStack** — two-column comparison with all listed bullets.
6. **Services** — 8 service cards.
7. **Industries We Help** — 10 industry chips/cards.
8. **Process** — 4 steps (Discover → Design Journey → Build → Launch & Improve).
9. **Results** — 6 outcome cards.
10. **Testimonials** — continuous left-to-right marquee, duplicated track for seamless loop, pause-on-hover, gradient edge fades. All 7 testimonials with quote, result badge, name, business, location.
11. **CTA band** — headline, description, primary + secondary CTA, fine print.
12. **FAQs** — 8-item accordion.
13. **Footer** — logo, description, 3 columns (Company / Services / Locations), bottom copyright.

## Contact page (`/contact`)

- Headline + subheadline.
- Form fields: Full Name, Email, Business Name, Business Type, Country, Current Website URL, "What do you need help with?" (select), Message. Submit: "Send My Project Details" (client-side validation + success toast; no backend wiring this pass).
- Side panel: heading, body text, email `hello@webstack.com`, location line.
- Final CTA block at bottom.

## Technical implementation

- `bun add lenis motion` — Lenis for smooth scroll (initialized in `__root.tsx`), Motion for React for fade/slide-in section reveals and badge animations.
- Update `src/styles.css`: add sky-blue accent token, display + body font families, marquee keyframe, edge-mask utility. Load Bricolage Grotesque + Inter via `<link>` in `__root.tsx` head (not @import).
- New route files (TanStack file-based):
  - `src/routes/index.tsx` — replace placeholder with full homepage composition.
  - `src/routes/contact.tsx` — contact page.
- New components under `src/components/webstack/`:
  - `Navbar.tsx` (scroll-listener morph + smooth-scroll handler + mobile drawer)
  - `HeroDashboard.tsx` (the SaaS mockup)
  - `SectionHeader.tsx`, `ProblemGrid.tsx`, `SolutionGrid.tsx`, `BeforeAfter.tsx`, `Services.tsx`, `Industries.tsx`, `Process.tsx`, `Results.tsx`, `TestimonialMarquee.tsx`, `CTASection.tsx`, `FAQ.tsx` (uses existing shadcn Accordion), `Footer.tsx`
  - `ContactForm.tsx` (uses existing shadcn Input/Select/Textarea + Sonner toast)
  - `SmoothScroll.tsx` (Lenis provider wrapper in `__root.tsx`)
- Per-route SEO `head()` for `/` and `/contact` (distinct title/description/OG tags).
- Tailwind v4: all custom colors registered in `@theme`; no hardcoded hex in components beyond tokens.
- Fully responsive: mobile-first; navbar collapses to hamburger sheet; marquee + grids adapt; verified with the responsive grid pattern (min-w-0 / shrink-0) on header rows.

## Out of scope this pass

- No backend, email delivery, or DB integration for the contact form (toast-only confirmation). Easy follow-up if you want real submissions.
- No real images for testimonial avatars (initials in colored circles).
