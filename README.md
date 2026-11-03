# Clarity Landing Page

Marketing landing page for **Clarity**, a collaborative replacement for spreadsheet-based workflows aimed at mid-sized businesses (roughly 50–1,000 employees). The page converts visitors into trial sign-ups or sales contacts.

## Project structure

```
clarity-landing/
├── index.html    # Markup for all nine sections
├── styles.css    # All styling; design tokens live in :root
├── script.js     # All behavior (vanilla JS, no dependencies)
├── CLAUDE.md     # Project rules for contributors and AI assistants
└── README.md     # This file
```

There is no build step, no `package.json`, and no framework.

## Getting started

1. Clone or download the repository.
2. Open `index.html` in a browser.

No install or server is required. To test on a phone or another device, serve the folder with any static file server, for example `python3 -m http.server`, and open it on your network address.

## Page sections

The page has nine sections, in this order:

| # | Section | Element | `id` |
|---|---|---|---|
| 1 | Nav | `<nav>` | `nav` |
| 2 | Hero | `<section>` | `hero` |
| 3 | Social proof | `<section>` | `social-proof` |
| 4 | Features (4 cards) | `<section>` | `features` |
| 5 | How it works (3 steps) | `<section>` | `how-it-works` |
| 6 | Testimonials (3 cards) | `<section>` | `testimonials` |
| 7 | Pricing (Starter, Pro, Enterprise) | `<section>` | `pricing` |
| 8 | Final CTA | `<section>` | `final-cta` |
| 9 | Footer | `<footer>` | `footer` |

The section order and ids are relied on by the navigation links, so keep them stable when editing.

## Behavior

All behavior is in `script.js`, written in vanilla ES2020+ inside a single IIFE:

- **Mobile nav toggle:** opens and closes the menu below 768px; closes on Escape or link click.
- **Smooth scroll:** in-page anchor links scroll smoothly, unless the user prefers reduced motion.
- **Sticky nav border:** adds a bottom border to the nav after the page scrolls past a threshold.
- **Billing toggle:** switches pricing between Monthly and Annual.
- **Hero typewriter:** types the headline once on load. The full text stays in the DOM for screen readers.
- **Scroll reveal:** fades sections in as they enter the viewport. Skipped under reduced motion.
- **Sign-up modal:** a native `<dialog>` opens from every "Start free trial" and "Contact sales" button. It collects name and work email. Nothing is stored or sent yet.

## Before launch

Several parts of the page are placeholders. Each one is marked in the HTML with a comment:

- **Logos and testimonials:** marked `<!-- PLACEHOLDER: replace before launch -->`. Replace them with real, approved customer content or remove them.
- **Statistics:** the figures in the social proof section are invented samples. Replace them with verified numbers or remove them.
- **Pricing:** amounts are sample values (Starter $12 / Pro $29 per month; Annual $10 / $24). Marked `<!-- PLACEHOLDER pricing -->`. Replace them with final numbers.
- **Footer links:** Company and Legal links use `href="#"` and are marked `<!-- PLACEHOLDER: link -->`.
- **Sign-up form:** not connected to an endpoint. Find the `PLACEHOLDER` comment in `script.js` where the submission should be wired up.
- **Copyright year:** update "© 2026" in the footer at launch.

## Design rules

- **Dark mode only.** There is no light theme and no theme toggle.
- **Colors** are defined as custom properties on `:root` in `styles.css`. Do not hard-code color values elsewhere.
- **Accent** is green (`--color-accent`), chosen to suit a spreadsheet product.
- **Spacing and layout** use the tokens in `:root`, with breakpoints at 640px, 768px, and 1024px (mobile-first).
- **Typography** uses the system font stack. No external fonts or images are loaded.

## Accessibility and performance targets

- WCAG 2.1 AA contrast for text.
- Full keyboard navigation with visible focus outlines.
- Respects `prefers-reduced-motion`.
- Lighthouse targets: Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO ≥ 95.
- Total page weight (HTML + CSS + JS) under 100 KB uncompressed.

## Contributing

Read [CLAUDE.md](CLAUDE.md) before making changes. It covers the section rules, design tokens, code rules, and the verification checklist to run after each change.

Keep `index.html`, `styles.css`, and `script.js` in sync: if a class or id changes in one file, update the others in the same change.
