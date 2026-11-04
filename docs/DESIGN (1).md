# DESIGN — Editorial Utility UI

> **Style:** Editorial Minimalism × Neo-Retro Utility  
> **Purpose:** A reusable visual system for lightweight, polished web tools.  
> **Reference:** [AI Metadata Cleaner](https://aimetadatacleaner.com/) (inspiration, not a pixel-for-pixel clone).  
> **Companion:** [`SKILL.md`](./SKILL.md) explains how a coding agent should apply this design.

## 1. Design direction

**Warm, editorial, precise, functional.** Think classic print typography paired with a restrained technical interface.

- Prioritize the task. Every element should serve content, interaction, or orientation.
- Create hierarchy with type, whitespace, alignment, and thin borders—not decoration.
- Use one accent color sparingly for primary actions and active states.
- Keep the product's own name, content, features, and identity.

### Visual signatures

1. Expressive **Fraunces** serif headings at regular weight.
2. Clean **Instrument Sans** body copy.
3. Small **JetBrains Mono** navigation, labels, counters, and metadata.
4. Warm ivory and sand surfaces with almost-black text.
5. Fine 1px outlines, modest corner radii, and subtle technical details (such as corner brackets around a dropzone).

## 2. Foundations

### Color tokens — light theme

The hex values below are **design approximations**, not extracted source-site CSS. Validate contrast for each real component.

| Token | Hex | Use |
| --- | --- | --- |
| `--bg` | `#F6F3EC` | Page background |
| `--surface` | `#EFEAE0` | Subtle panel / secondary surface |
| `--text` | `#1C1A16` | Primary text |
| `--muted` | `#655F56` | Secondary text |
| `--accent` | `#D93E1F` | Actions, focus, active emphasis |
| `--accent-hover` | `#B92F17` | Hover / pressed action |
| `--border` | `#DCD4C8` | Dividers and outlines |
| `--on-accent` | `#FFFFFF` | Text on accent buttons (check contrast) |

**Usage:** Aim for ~85% neutrals, ~10% structure and muted surfaces, and ~5% accent. This is a direction, not a mathematical quota. Never use accent for every clickable thing.

### Typography

| Role | Family | Desktop | Mobile | Weight / line-height |
| --- | --- | --- | --- | --- |
| H1 | Fraunces | 44px | 32–36px | 400 / 1.12 |
| H2 | Fraunces | 36px | 28px | 400 / 1.18 |
| H3 / large action title | Fraunces | 26–28px | 23–25px | 400 / 1.2 |
| Body | Instrument Sans | 16px | 15–16px | 400 / 1.6 |
| Small body | Instrument Sans | 14px | 14px | 400 / 1.5 |
| Navigation / button / label | JetBrains Mono | 11–12px | 11–12px | 400–500 / 1.4 |

- Use short, purposeful uppercase monospace labels with `letter-spacing: 0.04em–0.10em`.
- Keep long text in Instrument Sans; never use tiny monospace for paragraph copy.
- Prefer self-hosted WOFF2 files, required weights only, and `font-display: swap`. Use system fallbacks if font files are unavailable; don't silently introduce a CDN.

### Spacing and geometry

- **Spacing scale:** `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px`.
- **Layout:** centered content; maximum page width `1200px`, primary-task width `850px`.
- **Page gutters:** 32–48px desktop, 16–20px mobile.
- **Section spacing:** 64–96px desktop, 40–64px mobile.
- **Card padding:** 24–40px desktop, 16–24px mobile.
- **Borders:** usually 1px; radius `3px` for compact details, `6–8px` for cards.
- **Shadows:** none by default; extremely soft and diffuse only when elevation conveys meaning.

## 3. Page composition

Suggested layout for a single-purpose utility:

```text
┌────────────────────────────────────────────────────────────────┐
│ Brand                BLOG  TOOLS  ABOUT         Sign in   CTA │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                  Expressive serif headline                     │
│                 Concise supporting description                 │
│                                                                │
│      ┌──────────────────────────────────────────────────┐      │
│      │   ┌──────────────────────────────────────────┐   │      │
│      │   │                                          │   │      │
│      │   │               task icon                  │   │      │
│      │   │          Main task / dropzone            │   │      │
│      │   │         FORMAT · SIZE · PRIVACY           │   │      │
│      │   │                                          │   │      │
│      │   └──────────────────────────────────────────┘   │      │
│      │              Quiet status / usage               │      │
│      └──────────────────────────────────────────────────┘      │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                     Secondary content                          │
└────────────────────────────────────────────────────────────────┘
```

- Header is compact, with a restrained 1px bottom border.
- Hero is centered and highly readable, not overcrowded.
- Main task is visible early and visually dominant.
- Avoid unnecessary sidebars, hero illustrations, floating decorations, and marketing blocks before the task.

## 4. Component specifications

### Header and navigation

- Brand mark + wordmark at left; small uppercase monospace navigation; utility actions at right.
- On narrow screens, simplify navigation instead of squeezing it into unreadable labels.
- Active state: clear text/underline or subtle accent; maintain visible keyboard focus.

### Buttons

- **Primary:** solid accent, white text if validated against the chosen accent, modest 3–6px radius.
- **Secondary:** neutral outline / minimal text treatment; visually quieter.
- **Tertiary:** understated link with a visible hover/focus treatment.
- Target at least **44×44px** clickable area on touch interfaces.
- Include hover, active, disabled, busy/loading, and focus-visible states.

### Panels and cards

- Warm background or a subtle sand fill; 1px neutral border; 6–8px radius.
- Use whitespace instead of stacked shadows to separate content.
- Group status and supporting explanations beneath the primary action.

### File upload / dropzone (where relevant)

- Outline with a restrained accent color and optional four **corner brackets**.
- Center an understated line icon, Fraunces action heading, and monospace accepted-format label.
- Click and keyboard activation must work; drag-over is an enhancement, never the only route.
- Cover empty, hover/drag-over, uploading, success, invalid format, oversize, and error states.
- Do not imitate decorative controls at the expense of clear interaction.

### Forms and feedback

- Use a real label for every field. Pair neutral resting borders with visible accent focus rings.
- Place validation messages next to the relevant control, and never convey error by color alone.
- Use compact, readable metadata labels for dimensions, formats, timestamps, and counts.
- Reserve red/orange accent for a primary action or meaningful emphasis, not generic badges.

## 5. Motion and interaction

- Prefer simple 150–220ms color, border, and opacity transitions.
- Avoid bouncing elements, dramatic transforms, heavy scroll effects, and layout shifts.
- Respect `prefers-reduced-motion: reduce`.
- All actions need clear hover, focus, pressed, and disabled feedback.

## 6. Responsive and accessible behavior

- Design mobile-first; test at **320px, 375px, 768px, and 1280px**.
- Stack cards and controls on narrow viewports; prevent horizontal scrolling.
- Target WCAG AA: at least **4.5:1** contrast for normal text and **3:1** for large text; ensure non-text UI indicators are discernible.
- Use semantic HTML, readable text sizes, logical focus order, keyboard-operable inputs, and visible focus rings.
- A requested dark theme needs its **own warm, contrast-checked semantic tokens**—never a naive CSS invert.

## 7. Starter CSS tokens

```css
:root {
  color-scheme: light;
  --bg: #f6f3ec;
  --surface: #efeae0;
  --text: #1c1a16;
  --muted: #655f56;
  --accent: #d93e1f;
  --accent-hover: #b92f17;
  --border: #dcd4c8;
  --on-accent: #fff;

  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Instrument Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace;

  --page-max: 1200px;
  --task-max: 850px;
  --radius-card: 8px;
  --radius-control: 4px;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font: 400 16px / 1.6 var(--font-body);
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 400;
}

h1 { font-size: clamp(2rem, 4vw, 2.75rem); line-height: 1.12; }
h2 { font-size: clamp(1.75rem, 3vw, 2.25rem); line-height: 1.18; }

nav, button, .eyebrow, .meta {
  font-family: var(--font-mono);
  letter-spacing: 0.05em;
}

:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}
```

## 8. Implementation guardrails

- **Preserve existing functionality** during visual changes: routes, state, validation, data, security, and deployment behavior.
- Use the existing stack; don't add a component framework or animation dependency just to reproduce this look.
- Prefer semantic CSS tokens and reusable components to one-off inline styling.
- Minimize external requests; avoid unnecessary images, icon packs, and font weights.
- Check page speed, keyboard usage, contrast, mobile overflow, and all form/upload states before shipping.

**Definition of done:** The UI feels warm and editorial, has precise technical touches, is easy to use, loads quickly, and remains functionally equivalent to the original product.
