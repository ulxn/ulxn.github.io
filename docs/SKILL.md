---
name: editorial-utility-ui
description: Design and implement elegant, minimal, high-performance web interfaces with an editorial serif, clean sans-serif, and technical monospace aesthetic. Use for new pages, UI redesigns, design systems, and component refinements that call for warm ivory surfaces, restrained vermilion accents, precise borders, generous whitespace, and polished utility-first UX.
---

# Editorial Utility UI

## Objective

Create an original, coherent interface inspired by **Editorial Minimalism × Neo-Retro Utility**: warm, refined, intentionally sparse, and unmistakably functional. The result should feel like a thoughtfully typeset editorial publication combined with a precise modern web tool—not a generic SaaS dashboard.

This skill defines a **visual direction**, not a pixel-for-pixel copy of any particular website. Preserve the product's own identity, content, accessibility, and functionality.

## Core design principles

1. **Typography is the visual identity.** Pair an expressive but restrained serif display face with a neutral sans-serif body and a technical monospace for small labels.
2. **Warm minimalism.** Prefer ivory and sand over pure white. Use near-black text and a single confident orange-red accent.
3. **Quiet structure.** Build hierarchy through alignment, spacing, thin borders, and type scale—not gradients, oversized shadows, or decoration.
4. **Utility first.** Primary actions and interaction states should be obvious. Functional elements must not be sacrificed for aesthetics.
5. **Precision in details.** Use consistent strokes, measured radius, carefully aligned icons, small uppercase labels, and restrained microinteractions.

## Design tokens

The following are **suggested starting values**, visually inspired by the reference aesthetic—not verified source-site design tokens. Adapt to the brand and test contrast.

```css
:root {
  color-scheme: light;
  --color-bg: #f6f3ec;
  --color-surface: #efeae0;
  --color-text: #1c1a16;
  --color-text-muted: #655f56;
  --color-accent: #d93e1f;
  --color-accent-hover: #b92f17;
  --color-border: #dcd4c8;
  --color-focus: #b92f17;

  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-body: "Instrument Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --radius-xs: 3px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --page-max: 1200px;
  --content-max: 850px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
}
```

If dark mode is requested, define **separate semantic dark-mode tokens** with tested contrast; do not merely invert colors. Retain the warm editorial identity and reserve the accent for meaningful actions.

## Typography rules

- **Display / headings:** Fraunces, weight 400 by default. Use responsive sizes such as `clamp(2rem, 4vw, 2.75rem)` for H1 and `clamp(1.75rem, 3vw, 2.25rem)` for H2; line-height roughly 1.1–1.2.
- **Body / descriptions:** Instrument Sans, usually 15–16px, weight 400, line-height 1.55–1.7; maintain comfortable reading width.
- **Navigation / buttons / counters / file types / section labels:** JetBrains Mono, usually 11–12px, weight 400–500. Apply restrained letter spacing (`0.04em`–`0.10em`); uppercase short labels only, never long paragraphs.
- Avoid excessive font weights, all-caps headings, decorative italics everywhere, and mixing in extra typefaces.
- Use local/self-hosted WOFF2 assets when available, with only necessary weights/character sets and `font-display: swap`. Do **not** assume fonts are already present. If unavailable, use the declared fallback stacks and clearly flag missing assets; do not silently add third-party CDNs.

## Layout and composition

- Prefer a centered, restrained main column, spacious hero, and strong vertical rhythm.
- Keep generous outer margins on desktop; reduce predictably on mobile (e.g. 16–20px side padding).
- Use whitespace to group content. Default spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px.
- Section dividers: subtle 1px lines in `--color-border`.
- Cards: subtle border, transparent or lightly tinted surface, 6–8px radius; avoid heavy elevation.
- Use consistent internal padding (24–40px desktop, 16–24px mobile).
- Keep nav compact, typography-led, and clearly secondary to the page's primary task.

## Component language

### Buttons and links
- Primary CTA: solid accent background, readable foreground, compact shape, clear hover/pressed/disabled/focus states.
- Secondary CTA: text, subtle outline, or neutral surface; do not compete with primary action.
- Use short, descriptive labels. Keep touch targets roughly 44×44px or larger, even when the visual button looks compact.

### Inputs and upload zones
- Prefer a quiet outline (1px neutral border) with a distinct accent focus/drag-over state.
- For dropzones, an understated accent outline and **small corner-bracket details** can suggest technical precision; keep these purely decorative.
- Provide keyboard-accessible file selection, accepted formats, size limits, validation, loading, and error states.
- Keep instructions centered and concise, with upload icon and a serif action heading when appropriate.

### Cards, badges, and metadata
- Use monospace for file specifications, usage counters, status labels, and technical metadata.
- Avoid unnecessary colored badges; use accent only to express actions or meaningful status.
- Favor simple line icons with consistent stroke width, avoiding mixed icon styles.

### Interaction
- Use subtle transitions (about 150–220ms) on color, border, and opacity; avoid large motion or layout shifts.
- Respect `prefers-reduced-motion`.
- All clickable elements need visible keyboard focus and discernible hover/active/disabled states.

## Accessibility and responsiveness

- Aim for WCAG AA contrast: 4.5:1 for ordinary text, 3:1 for large text and meaningful UI boundaries where applicable.
- Keep secondary labels legible; do not sacrifice contrast to achieve a faded editorial look.
- Use semantic HTML, proper labels, logical tab order, and visible focus indicators.
- Prevent horizontal overflow and test at 320px, 375px, tablet, and desktop widths.
- On mobile, stack complex panels and preserve readable text, tappable controls, and the main task above the fold where practical.

## Implementation and performance

- Work within the existing framework and component conventions; avoid unnecessary new dependencies.
- Prefer CSS variables, shared primitives, and reusable components to repeated one-off styles.
- Prefer self-hosted fonts/icons/assets; minimize HTTP requests and ship only necessary assets.
- Avoid render-blocking resources, large animation libraries, decorative images with no purpose, and layout-shifting font swaps.
- Preserve existing behavior, data flows, routes, security controls, and functional features during a restyle.
- Test responsive layouts, keyboard interaction, light/dark states when present, and critical user flows. Optimize Core Web Vitals and Lighthouse without claiming guaranteed scores.

## Workflow when applying this skill

1. **Audit:** Identify existing brand, UI patterns, constraints, interactions, and available font assets.
2. **Define tokens:** Map colors, type, radius, spacing, and interactive states before editing components.
3. **Build hierarchy:** Establish typography, layout, and whitespace before accents or decorative details.
4. **Refine components:** Apply consistent borders, buttons, inputs, upload areas, metadata labels, and icons.
5. **Check states:** Validate loading, empty, error, disabled, drag-over, hover, focus, and responsive layouts.
6. **Verify:** Confirm the app still works, files/data are unchanged unless explicitly requested, and accessibility/performance remain strong.

## Do / avoid

**Do:** Warm ivory surfaces · Fraunces display · Instrument Sans body · JetBrains Mono microcopy · thin borders · restrained vermilion accent · whitespace · clear functional hierarchy · precision details.

**Avoid:** Generic gradient-heavy SaaS styling · pure-white everything · glassmorphism · deep floating shadows · oversaturated multicolor palettes · pill-shaped everything · overly large radii · tiny low-contrast labels · gratuitous animations · decorative features that hurt usability.

## Definition of done

The delivered UI should be **recognizably editorial, warm, and precise**, consistent across pages and states, usable on mobile and desktop, keyboard accessible, lightweight, and functionally equivalent to the original unless a change was explicitly requested.
