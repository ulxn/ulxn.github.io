# ULXN design direction

## Identity
A personal developer site with the first version's editorial warmth and v3's reading order and copy. The owner's latest request supplies the design direction.

## Personality
Minimal, editorial, technically competent, slightly weird, self-aware, and restrained.

## Palette
Warm off-white and charcoal as the core pair. One muted chartreuse accent is reserved for a deliberate interaction or product-state moment, never sprayed across the page.

## Typography
System sans-serif provides compact display weight without downloads. Georgia italic returns the first version's editorial counterpoint in the last two hero lines and contact heading. Body copy remains compact and readable.

## Layout
Hero, Stuffs, Hit me up retain the established content order. "who am i?" sits under ULXN in the header. The hero begins near the header instead of vertically centering within a full-height panel. Stuffs labels and "Out in the wild." sit close together. One compact project frame pairs a short description and action with a small preview. Mobile reflows this pair into a single column and uses wider side margins. Contact starts at the top of its own viewport when reached through `#contact`, with a small sign-off to anchor its lower edge. The footer's side-quest note remains visible on mobile.

## Motion
Small and responsive only: the requested theme-toggle rotation (360 degrees in 420ms) and per-letter headline changes. The 404 page of Otto Prompt Vault supplies the brief red/blue displacement at 93%, 95%, and 97% of a 2.4 second cycle while the headline is hovered. Reduced motion changes words immediately and removes the displacement. Unused entrance-reveal code was removed.

## Liveliness
Energy 3 / Rhythm 3 / Motion 1. Large type is the hero focal point; the real project is the next focal point. The italic voice repeats at the contact heading.

## Purpose of visual treatments

- Warm paper and charcoal preserve the original character with readable contrast. Chartreuse marks the brand dot and primary action hover rather than every component.
- One rounded project frame groups existing content; smaller radii distinguish the illustrated app and action. The theme button is circular because it contains one icon.
- A neutral gradient separates the app illustration from the project copy. One hard shadow gives it depth. The shortened preview contains no sample prices.
- GitHub and mail icons identify destinations. The outbound arrow marks an external project action; navigation needs no decorative arrows.
- Blur is confined to the scrolled header, keeping content readable beneath it.
- The theme control has a 44px tap target without a decorative circle. A crescent means "switch to dark" in light mode; a simple sun means "switch to light" in dark mode.

## Headline

Normal: `Turning / odd ideas / into useful / things.`

Secret: `Turning / odd ideas / into unpaid / labour.`

Line lengths including spaces and punctuation: 7, 9, 11, 7. Both sentences have 31 letters, 5 spaces, and a period. Both changing words have 6 letters. Each changing word remains a single naturally kerned text run; invisible whole-word measures reserve room for either state. JavaScript briefly changes characters one at a time within that run, with a restrained one-pixel glitch.

Hover or keyboard focus reveals the secret. Click, tap, Enter, and Space toggle it. Escape and leaving keyboard focus reset it.

## Retained setup

No build step. Instagram remains hidden until the owner supplies the correct profile. Email points to `borneanironwood@proton.me`. The detailed RAB coverage, stack, and price mockup have been removed from the homepage to keep Stuffs compact.

Metadata, robots.txt, and sitemap.xml point to `https://ulxn.github.io/`. Change their URLs together if a custom domain becomes canonical. PageSpeed scores are measured on the published page and can vary across runs; source changes alone cannot establish a score of 100.
