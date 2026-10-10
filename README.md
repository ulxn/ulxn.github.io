# ULXN personal site

Static personal site for GitHub Pages. No build step, framework, package manager, or database required.

## Deploy

Push the contents of this ZIP to the root of the `ulxn.github.io` repository. The Pages source is `main / (root)`; keep `index.html`, `404.html`, `robots.txt`, `sitemap.xml`, and `.nojekyll` at the root. CSS, JavaScript, and favicon live in `assets/`; project notes live in `docs/`.

## Instagram

The Instagram row is already in `index.html`, but hidden because the profile URL was not provided. Find `data-instagram-link`, replace the placeholder URL and handle, then remove the `hidden` attribute.

## Theme

The site follows the operating-system theme on first visit and remembers a manual choice in `localStorage`.

## Canonical URL

The page metadata, `robots.txt`, and `sitemap.xml` use `https://ulxn.github.io/`. If you attach `ulxn.dev`, update those URLs together before publishing the custom-domain version.

## PageSpeed check

Run PageSpeed Insights on the published URL on both mobile and desktop after deployment. A 100 score cannot be guaranteed from source inspection because Lighthouse measurements vary between runs and hosting conditions. `docs/VERIFICATION.md` records the checks completed for this package.
