# v2.1.0 checks

JavaScript syntax, requested contact line breaks and endnote placement,
footer versions on both pages, unchanged word animation CSS, and ZIP integrity
checked. This revision has not been visually rechecked in a browser.

Previous-version checks below apply to v1.0.0 only.

# ULXN v1.0.0 verification

## Completed
- JavaScript syntax: node --check passed.
- Both HTML pages: local asset references exist; IDs unique; anchor targets resolve.
- Original character-animation CSS preserved exactly (100 ms transitions and
  0–100 ms stagger). Hero JavaScript unchanged except theme-color values.
- Desktop browser: inspected hero and contact visually; theme toggle changes
  state correctly. Contact navigation includes footer and version.
- Browser iframe viewport checks at 320×640, 375×667, 768×1024, 1280×800:
  document scrollWidth equals clientWidth at every width; complete footer within
  each contact viewport (subpixel rounding under 1px).
- Main theme color contrast calculations: light muted text 5.27–5.70:1,
  white primary-button text 4.51:1 (hover 6.03:1); dark muted text 7.66:1,
  dark primary-button text 7.26:1.
- Archive integrity and expected root structure checked.

## Limits
- Responsive checks used embedded browser viewports, not physical mobile devices.
  Mobile screenshot capture timed out; the DOM geometry checks completed.
- No new live Lighthouse run or guaranteed PageSpeed score.
- Requested named font binaries were not supplied; system fallback fonts are used.
- At very short heights or enlarged text, sections grow vertically to avoid
  clipping rather than forcing every section into a fixed-height box.
