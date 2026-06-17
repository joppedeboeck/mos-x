# CLAUDE.md — Mos-X Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Project Context
- This is a Next.js project (not plain HTML)
- Dev server runs via `npm run dev` on `http://localhost:3001`
- Never start a new server — it is already running
- Screenshots via Puppeteer — Chrome is at `C:/Users/Joppe/.cache/puppeteer/`

## Screenshot Workflow
- Always screenshot from: `http://localhost:3001`
- Save to `./temporary screenshots/`
- Do at least 2 comparison rounds after every visual change
- After screenshotting, read the PNG and analyze it — check spacing, colors, font sizes, alignment
- Be specific: "heading is 32px but should be 24px", "green is #9BCB6C not #5A9E3A"

## Brand Identity — NEVER change these
- Primary green: `#9BCB6C`
- Hover green: `#7AB54E`
- Background: `#FFFFFF`
- Soft background: `#F7F8F6`
- Dark: `#1A1A1A`
- Muted text: `#545454`
- Border: `#E5E7EB`
- Font headings: Montserrat (700, 800)
- Font body: Inter (400, 500)
- Border radius: rounded cards, soft shadows
- Logo: `/images/logo.avif`

## Brand Assets
- Always check `brand_assets/` folder before designing
- Logo is `Logo Mos-x.avif` — always use this, never a placeholder
- Brand guidelines are in `brand-guidelines.png` — follow colors and typography exactly

## Business Positioning — Always Apply
- Mos-X is specialist in dakontmossen en dakcoaten
- Yannick is het gezicht van het bedrijf — geen anoniem bedrijf
- Yannick doet het werk zelf — geen onderaannemers
- Diensten: Dakontmossen, Dakcoaten, Dakabonnement
- Regio's: Antwerpen, Oost-Vlaanderen, Vlaams-Brabant, Limburg
- Tone of voice: persoonlijk, direct, vakkundig, eerlijk
- Never mention drone-inspectie

## Copy Rules
- Yannick must feel like a real person, not a company
- Use "Yannick" by name in headings and CTAs where natural
- Emphasize: geen onderaannemers, werk gegarandeerd, eerlijke prijs vooraf
- Headlines: kort, krachtig, resultaatgericht
- No corporate speak — schrijf zoals Yannick zou praten

## Premium Polish Rules
- Never flat white sections back to back — alternate with `#F7F8F6`
- Use subtle green radial gradients as section accents (`rgba(155,203,108,0.06)`)
- Cards: `border-radius: 16px`, `box-shadow: 0 2px 16px rgba(0,0,0,0.07)`
- Headings: `font-weight: 800`, `letter-spacing: -0.028em`
- Every CTA button needs hover state with `#7AB54E` and subtle shadow
- Sections need breathing room — minimum `padding: 80px 0`
- Never use default Tailwind blue/indigo as primary color

## Anti-Generic Guardrails
- Never use default Tailwind palette
- Never use `transition-all`
- Never use `shadow-md` — use layered color-tinted shadows
- Every clickable element needs hover, focus-visible, and active states
- Spacing must be consistent — not random Tailwind steps

## Hard Rules
- Do not add sections not already in the design
- Do not remove existing sections
- Do not change the layout structure
- Do not invent new colors outside the brand palette
- Always test on mobile after every change