@AGENTS.md

# Additional project rules

## Copy

- **No em dashes** (`—` or `&mdash;`) in any user-visible text: page copy, headings, buttons,
  metadata titles and descriptions, alt text. Rewrite the sentence with a period, comma, colon or
  parentheses instead. (En dashes in number ranges like `15–35%` are fine.)

## Visual design

**Reference: https://www.tasteskill.dev/** (the homepage hero follows it). The site must read as a
professionally designed product, not a generated template.

- **Hero pattern:** exactly one screen tall (`100svh`, no scrolling inside the hero). One centred
  column (a small announcement link, a large two-line headline, one short lead, two actions side
  by side, a one-line trust row), then the product itself in a device frame rising out of a soft
  brand glow, filling the rest of the screen and cropped by its bottom edge with a fade. All of
  the business must be clear on that first screen; never hide content behind auto-advancing tabs
  or carousels.
- **Type:** Hikasami for headings and UI; Plus Jakarta Sans (`next/font/google`, `--font-lead`) for
  the hero lead, with its key phrases in semibold and underlined in the colour of what they describe.
- **Show the product:** prefer a realistic HTML product UI (e.g. the partner dashboard in
  `app/components/homepage-v2/components/HeroDashboard.tsx`) over illustrations.
- **Components:** Spectrum UI (MCP) is the component source; ported parts live in
  `app/components/ui/spectrum/` (currently the number ticker) as plain CSS + React, with
  no extra animation libraries.
- **Restraint:** one announcement pill per page at most; no badge or border on every element; type
  leads the hierarchy; a glow only behind the hero product, never as filler.
- **Align to the header container:** `max-width: 1440px`, horizontal padding 16px / 32px at 640px+
  / 48px at 1024px+.
- **Phone hero transition (parallax + text reveal):** below 640px the hero content drifts up slower
  than the page with a soft blur and fade (`hero.css`, `--p` from `Hero.tsx`), and the next
  section's heading lights up word by word on scroll (`app/components/ui/ScrollRevealText.tsx`).
- **Homepage sections tell a story, not a card grid** (see `LenderFlow.tsx`): no boxed cards; large
  type, open compositions on the section's ground (a device mock, an orbit diagram, a ranked list set
  in large type), a pinned scroll story on desktop where it fits, curved or straight dashed connector
  lines in the text colour, supporting points as a compact open row. Motion pauses off screen.
- **Sticky homepage stack:** only sections that fit one screen may be `.stack-item`s; a taller
  section must not be sticky (its lower part would be hidden under the next section).

## Motion

- Entrance animation once on load only (headline rises, the rest fades up 12px); never fade or
  slide content in on scroll.
- Animate `transform` and `opacity` only. Hover: subtle 1px lift or 3px arrow nudge, ~150ms in /
  120ms out; press scales to .985.
- Everything must rest and be fully visible under `prefers-reduced-motion`.
- A looping animation (e.g. the `/coming-soon` headline's liquid ripple from the taste-skill kit,
  served from `public/taste/`) runs on a 2.5-4s cycle, stays gentle, stops off screen and on
  phones/touch, and has a visible pause control. Exception (owner's decision): the homepage hero
  has no pause control; its loops stop off screen / in a hidden tab and rest under reduced motion.
- Hero connectors are black dashed lines only (no travelling dots), flowing from Sourcing Partner
  (left) and MSME (right) into the Cred2Tech hub, then down to the three services.

## Scope

- When asked to redesign a page, change its look only. Keep its content, purpose and actions as
  they are; do not add new sections, features or calls to action unless asked (e.g. the
  `/coming-soon` page stays a simple coming-soon page).

## Links

- Login and signup live on `https://app.cred2tech.com` (hardcoded in `app/lib/app-urls.ts`, no
  environment variable). This site has no `/login` route; link to `APP_URLS` instead.
