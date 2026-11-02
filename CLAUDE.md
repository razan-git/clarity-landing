# CLAUDE.md — Clarity SaaS Landing Page

Marketing landing page for **Clarity**, a spreadsheet replacement for mid-sized businesses.

## 1. Project Overview

- **Product:** Clarity, a collaborative replacement for spreadsheet-based workflows.
- **Audience:** Operations, finance, and team leads at mid-sized companies (roughly 50–1,000 employees).
- **Goal:** Convert visitors into trial sign-ups or sales contacts through the Final CTA and pricing tiers.
- **Theme:** **Dark mode only.** There is no light theme.

## 2. File Structure

```
clarity-landing/
├── index.html    # Markup only. Contains all nine sections.
├── styles.css    # All styling. Design tokens live in :root.
├── script.js     # All behavior. Vanilla JS, no dependencies.
└── CLAUDE.md     # This file.
```

Do not add other top-level files without asking. Do not create a build step, `package.json`, or framework scaffolding unless the user requests it.

## 3. Page Structure (Nine Sections, in Order)

Each section is a `<section>` (or `<nav>` / `<footer>`) with a unique `id`. Keep this order and these ids:

| # | Section | Element | `id` |
|---|---|---|---|
| 1 | Nav | `<nav>` | `nav` |
| 2 | Hero | `<section>` | `hero` |
| 3 | Social Proof | `<section>` | `social-proof` |
| 4 | Features (4) | `<section>` | `features` |
| 5 | How It Works (3 steps) | `<section>` | `how-it-works` |
| 6 | Testimonials (3) | `<section>` | `testimonials` |
| 7 | Pricing (3 tiers: Starter, Pro, Enterprise) | `<section>` | `pricing` |
| 8 | Final CTA | `<section>` | `final-cta` |
| 9 | Footer | `<footer>` | `footer` |

Content constraints:
- **Features:** exactly 4 cards.
- **How It Works:** exactly 3 numbered steps.
- **Testimonials:** exactly 3 cards.
- **Pricing:** exactly 3 tiers, in this order: Starter, Pro, Enterprise. Mark Pro as the recommended tier.
- Do not add a tenth section without asking.

### Shared rules for every section
- Each section's wrapper uses the classes already in `index.html`: `.section` on the `<section>`, `.container` plus a `<section>-inner` class (or the grid class) inside it.
- Headings: `<h2>` for the section title, `<h3>` for cards and steps. Only the hero uses `<h1>`.
- Build order: markup first, then the base styles, then the breakpoint styles, then any behavior in `script.js`.
- A section is done when every "Done when" check below passes at 320px, 768px, and 1280px widths.

### 3.1 Nav (`<nav id="nav" class="nav">`)
1. Keep the wrapper `<div class="container nav-inner">`.
2. Add the logo as `<a href="#hero" class="nav-logo">Clarity</a>` on the left.
3. Add `<ul class="nav-links">` with three links, in this order: Features (`#features`), How it works (`#how-it-works`), Pricing (`#pricing`).
4. Add one CTA on the right: `<button type="button" class="button button--primary" data-open-signup>Start free trial</button>`. It opens the sign-up modal (section 7, item 7). "Book a demo" was removed at the user's request.
5. Below 768px, hide `.nav-links` and the CTA. Show a `<button class="nav-toggle">` with `aria-expanded="false"`, `aria-controls="nav-menu"`, and an accessible name ("Open menu").
6. Add `<div id="nav-menu" class="nav-menu" hidden>` containing the same three links and the same CTA.
7. Keep `.nav` sticky at the top. Add the `nav--scrolled` class after the page scrolls past 16px. This class adds a bottom border in `--color-border`.
8. Behavior: the toggle opens and closes the menu and updates `aria-expanded`. Escape closes it. Clicking a menu link closes it.

**Done when:** the logo and links are visible at 1024px; the menu opens and closes by click, by Escape, and by link click; Tab order follows the visual order.

### 3.2 Hero (`<section id="hero" class="section hero">`)
1. Keep the wrapper `<div class="container hero-inner">`.
2. Add `<h1 class="hero-title">` with the outcome-focused headline (section 9 style).
3. Add `<p class="hero-subtitle">` with one or two sentences, max width `68ch`.
4. Add `<div class="hero-actions">` with one `<button class="button button--primary" data-open-signup>Start free trial</button>`. It opens the sign-up modal (section 7, item 7).
5. Add `<figure class="hero-visual">` containing an inline SVG that draws a simple table or dashboard. Mark the SVG `aria-hidden="true"` and `focusable="false"`. Do not use a screenshot.
6. Layout: one column below 1024px (text first, visual below). At 1024px and above, text sits on the left and the visual on the right.
7. The `h1` uses `clamp(2.5rem, 6vw, 4.5rem)` and `line-height: 1.15`.
8. The headline types out once on load (section 7, item 5).

**Done when:** there is exactly one `h1`; the CTA is visible without scrolling on a 375×667 viewport; the SVG is hidden from assistive technology.

### 3.3 Social Proof (`<section id="social-proof" class="section social-proof">`)
1. Keep the wrapper `<div class="container social-proof-inner">`.
2. Add `<p class="social-proof-label">` with a short line introducing the logos (for example, "Trusted by teams at mid-sized companies").
3. Add `<ul class="logo-row">` with 5 or 6 `<li>` items. Each item is a placeholder wordmark in `--color-text-muted`, not a real brand logo. Add `<!-- PLACEHOLDER: replace before launch -->` above the list.
4. Layout: a centered wrapping row with `--space-6` gap.
5. Logos never go brighter than `--color-text-muted`. Do not add hover effects.
6. Statistics must come from the user. Current stats (250+ mid-sized teams, 40% less time on reporting, 99.9% uptime) are invented sample figures the user asked for. Replace them with verified figures before launch, or remove them.

**Done when:** the list has 5 or 6 items; no real brand names or logos appear; the row wraps cleanly at 320px.

### 3.4 Features (`<section id="features" class="section features">`)
1. Keep the wrapper `<div class="container">`. Put the `<h2 class="features-title">` first.
2. Add an optional `<p class="features-intro">` (max `68ch`).
3. Keep `<div class="features-grid">` and add exactly four `<article class="feature-card">` children. Each card contains, in order:
   - `<span class="feature-card-icon" aria-hidden="true">` with an inline SVG.
   - `<h3 class="feature-card-title">`.
   - `<p class="feature-card-text">`.
4. Feature topics, in order: real-time collaboration; formulas and validation that replace fragile spreadsheets; roles, permissions, and an audit trail; imports and integrations from existing spreadsheet files.
5. Cards use `--color-surface` on `--color-bg` with a `--color-border` border. Cards are not clickable, so they have no hover state.
6. Layout: 1 column on mobile, 2 at 640px, 4 at 1024px.

**Done when:** exactly four `.feature-card` elements exist; each has an `h3`; icons are hidden from assistive technology.

### 3.5 How It Works (`<section id="how-it-works" class="section how-it-works">`)
1. Keep the wrapper `<div class="container">`. Put the `<h2 class="how-it-works-title">` first.
2. Keep `<ol class="steps-list">` and add exactly three `<li class="step">` items in order.
3. Each step contains:
   - `<h3 class="step-title">`.
   - `<p class="step-text">`.
4. Step titles, in order: "Import your spreadsheets"; "Define your workflow"; "Work together in real time".
5. Numbers come from the `<ol>`. Do not hard-code numbers in the text.
6. Add a connector line between steps. Draw it with CSS (a pseudo-element). Hide it below 768px.
7. Layout: stacked below 768px; three columns from 768px.

**Done when:** exactly three `li.step` elements exist; the list is an `ol`; the connector is decorative only.

### 3.6 Testimonials (`<section id="testimonials" class="section testimonials">`)
1. Keep the wrapper `<div class="container">`. Put the `<h2>` first.
2. Keep `<div class="testimonials-grid">` and add exactly three `<figure class="testimonial-card">` children. Add `<!-- PLACEHOLDER: replace before launch -->` above the grid.
3. Each figure contains, in order:
   - `<blockquote class="testimonial-quote"><p>…</p></blockquote>`.
   - `<figcaption class="testimonial-author">` with `<cite>` for the name, followed by the role and company.
4. Quotes are placeholders. Do not write names of real people or companies as if they were real.
5. Layout: 1 column on mobile, 2 at 640px, 3 at 1024px.

**Done when:** exactly three `figure.testimonial-card` elements exist; each has a `blockquote` and a `cite`.

### 3.7 Pricing (`<section id="pricing" class="section pricing">`)
1. Keep the wrapper `<div class="container">`. Put the `<h2>` first, then an optional `<p>` subtitle.
2. Keep `<div class="pricing-grid">` and add exactly three `<article class="pricing-card">` children, in this order: Starter, Pro, Enterprise.
3. Each card contains, in order:
   - `<h3 class="pricing-card-name">`.
   - `<p class="pricing-card-price">` with the placeholder `<!-- PLACEHOLDER pricing -->` above it.
   - `<p class="pricing-card-desc">`.
   - `<ul class="pricing-features">` with `<li>` items. Each item starts with a checkmark SVG marked `aria-hidden="true"`.
   - One `<button class="button" data-open-signup>` CTA.
4. Pro is the featured card. Give it the class `pricing-card--featured`, add `<span class="pricing-badge">Recommended</span>` at the top, and use a `--color-accent` border.
5. CTAs: Starter and Pro say "Start free trial". Enterprise says "Contact sales". All three open the sign-up modal (section 7, item 7).
6. Layout: 1 column on mobile. At 640px, Enterprise spans both columns. At 1024px, all three cards sit side by side.
7. Add a Monthly / Annual billing toggle above the grid (section 7, item 4). It switches the amount in each card. Annual amounts are invented sample figures.

**Done when:** exactly three cards exist in the order Starter, Pro, Enterprise; only Pro has the featured class and badge.

### 3.8 Final CTA (`<section id="final-cta" class="section final-cta">`)
1. Keep the wrapper `<div class="container final-cta-inner">`.
2. Add `<h2 class="final-cta-title">` with an outcome-focused headline.
3. Add `<p class="final-cta-text">` with one supporting sentence.
4. Add `<div class="final-cta-actions">` with one `<button class="button button--primary" data-open-signup>Start free trial</button>`.
5. Center the content. Put it in a panel with a `--color-surface` background, a `--color-border` border, and a radius token defined on `:root`.

**Done when:** exactly one `h2` and one CTA exist; the CTA labels match the rest of the page.

### 3.9 Footer (`<footer id="footer" class="footer">`)
1. Keep the wrapper `<div class="container footer-inner">`.
2. Add the logo `Clarity` and a one-line description.
3. Add `<nav aria-label="Footer">` with three link groups:
   - Product: Features, How it works, Pricing.
   - Company: About, Contact. Use `href="#"` and mark each with `<!-- PLACEHOLDER: link -->`.
   - Legal: Privacy policy, Terms of service. Use `href="#"` and mark each with `<!-- PLACEHOLDER: link -->`.
4. Add a bottom line: "© 2026 Clarity. All rights reserved." Update the year at launch.
5. Layout: stacked below 768px; the link groups and the bottom line sit side by side from 768px.

**Done when:** the footer contains a `nav` with an `aria-label`; all placeholder links are marked.

## 4. Design Rules

### Dark mode (strict)
- Define every color as a CSS custom property on `:root`. Use no hard-coded hex, rgb, or hsl values outside `:root`.
- Set `color-scheme: dark;` on `:root` and give `body` an explicit `background-color`.
- Do **not** add a light theme, a theme toggle, or any `prefers-color-scheme: light` rules.
- Do not use white (`#fff`) for backgrounds. Do not use pure black (`#000`) for body backgrounds. Use the near-black and slate tokens below.

### Color tokens
The accent is green to suit a spreadsheet product. The user approved this change. Do not switch back to blue or purple accents. `--color-success` and `--color-accent` share the same green on purpose.
```css
:root {
  color-scheme: dark;
  --color-bg: #0b0f19;
  --color-surface: #131a2a;
  --color-surface-raised: #1b2438;
  --color-border: #2a3550;
  --color-text: #e6ebf5;
  --color-text-muted: #9aa6bf;
  --color-accent: #3ddc97;
  --color-accent-strong: #2bc283;
  --color-accent-contrast: #06120c;
  --color-success: #3ddc97;
  --color-danger: #ff6b6b;
}
```

### Contrast
- Body text must meet **WCAG 2.1 AA**: 4.5:1 minimum against its background. Large text (≥ 24px, or ≥ 18.66px bold) needs 3:1.
- Check `--color-text-muted` on `--color-surface` before using it for body copy.
- Never convey meaning with color alone. Pair color with text or an icon.

### Typography
- Use the system font stack for body text: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- Scale headings with `clamp()`. The hero headline should not exceed `clamp(2.5rem, 6vw, 4.5rem)`.
- Body line height: `1.6`. Heading line height: `1.15`.
- Keep line length at or below `68ch` for paragraphs.

### Layout and spacing
- Use CSS Grid and Flexbox. Do not use floats or absolute positioning for page layout.
- Spacing comes from a single scale in `:root`: `--space-1: 0.25rem` through `--space-8: 4rem`. Do not use arbitrary pixel values for margins or padding.
- Other layout tokens in `:root`: `--container-max: 1200px`, `--section-padding: clamp(4rem, 8vw, 7rem)`, and `--radius-md: 8px`.
- Section vertical padding: `clamp(4rem, 8vw, 7rem)`.
- Max content width: `1200px`, centered, with `padding-inline: 1rem` on small screens and `1.5rem` on larger screens.

### Responsive
- Mobile-first. Write base styles for phones, then add `@media (min-width: 640px)`, `(min-width: 768px)`, and `(min-width: 1024px)` queries.
- The page must have **no horizontal scroll** at 320px width.
- Navigation collapses to a menu button below `768px`. The menu button needs `aria-expanded` and `aria-controls`.
- Feature, testimonial, and pricing grids: 1 column on mobile, 2 on tablet, 3 or 4 on desktop as the section requires.

### Shared components
- `.button` is the base for all CTAs: inline-flex, `--radius-md` corners, and 600 font weight.
- `.button--primary` uses `--color-accent` as background and `--color-accent-contrast` as text. Hover uses `--color-accent-strong`.
- `.button--secondary` uses a transparent background with a `--color-border` border and `--color-text` text. Hover uses `--color-surface-raised`.
- `:focus-visible` sets a 2px `--color-accent` outline with a 2px offset. Do not remove it.
- `.visually-hidden` hides text from sight but keeps it for screen readers. It is the only place absolute positioning is allowed.

### Imagery and icons
- No stock photos or external image URLs. Use inline SVG icons or CSS shapes.
- Every decorative element gets `aria-hidden="true"` and `focusable="false"` (for SVG).
- Any meaningful image needs descriptive `alt` text.

## 5. HTML Rules

- Use `<!doctype html>` and `<html lang="en">`.
- Include in `<head>`, in this order: `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`, `<title>`, `<meta name="description">`, and the stylesheet link.
- Load the script with `<script src="script.js" defer></script>` at the end of `<body>`. Never use inline `<script>` or inline event handlers (`onclick=` etc.).
- Never use inline `style=""` attributes. Put all styling in `styles.css`.
- Use semantic elements: one `<h1>` (in the hero), then `<h2>` for each section heading, then `<h3>` for card titles. Do not skip heading levels.
- Use `<button>` for actions and `<a>` for navigation. Never attach click handlers to `<div>` or `<span>`.
- Every interactive element must be reachable by keyboard and show a visible `:focus-visible` outline.
- Prices, testimonials, and quotes: use `<figure>`/`<blockquote>` and `<cite>` for testimonials.
- Use `rel="noopener"` on any `target="_blank"` link.
- Class names: lowercase, hyphenated, and prefixed by the section (for example `.hero-title`, `.pricing-card`, `.pricing-card--featured`). No utility-class framework.

## 6. CSS Rules

- Plain CSS only. No Sass, PostCSS, Tailwind, or CSS-in-JS.
- Order the file as: `:root` tokens → reset → base elements → layout → components (by section order) → utilities → media queries at the end of each component block.
- Do not use `!important`.
- Do not use IDs as style selectors. Use class selectors.
- Avoid selectors deeper than three levels.
- Use `transition` only on `transform`, `opacity`, `background-color`, `color`, and `border-color`. Wrap all animation in `@media (prefers-reduced-motion: no-preference)`.
- Hover and focus states must exist for every link, button, and card that is clickable.
- No external fonts unless the user approves. If approved, load only from Google Fonts with `font-display: swap`.

## 7. JavaScript Rules

- Vanilla ES2020+ only. No jQuery, no frameworks, no npm packages, no external CDNs.
- Wrap all code in a single `DOMContentLoaded` listener or an IIFE. Do not write to the global scope.
- Use `const` by default, `let` when reassignment is needed. No `var`.
- Use `addEventListener`. Never use inline handlers.
- Query elements once and cache them. Do not query the DOM inside loops or scroll handlers.
- Throttle or debounce scroll and resize listeners. Use `IntersectionObserver` for scroll-triggered reveals, not `scroll` events with layout reads.
- Use `{ passive: true }` for touch and scroll listeners.
- Behaviors to implement, and nothing more:
  1. Mobile nav toggle (open/close, `aria-expanded`, close on Escape and on link click).
  2. Smooth scroll for in-page anchors, respecting `prefers-reduced-motion`.
  3. Sticky nav background change after scrolling past a threshold.
  4. Pricing billing toggle: Monthly / Annual buttons (`aria-pressed`) switch each card's amount through `data-monthly` and `data-annual`. Requested by the user.
  5. Hero headline typewriter: types the headline once on load, with the `hero-title--typing` caret class while typing. Shows the full text at once when `prefers-reduced-motion` is set. The full text stays in the DOM for screen readers.
  6. Scroll reveal: adds `.reveal` to each `.section`, then `.is-visible` once 15% of it enters the viewport (IntersectionObserver). Skipped when `prefers-reduced-motion` is set. The `.reveal` styles apply only inside the `no-preference` media query.
  7. Sign-up modal: a native `<dialog id="signup-modal">` opens from every `[data-open-signup]` button and closes with its close button, the Escape key, or a backdrop click. It collects name and work email only (both required). It stores nothing. Submission is not connected to an endpoint yet, so the form shows a status message and a `PLACEHOLDER` comment marks the spot to connect.
- Do not fetch remote data. Do not store user data in `localStorage` or cookies. Do not add analytics or tracking scripts without explicit approval.
- Add a short comment above each behavior block explaining what it does. Match the comment density of the surrounding code.

## 8. Accessibility and Performance Targets

- Lighthouse (desktop and mobile): Performance ≥ 95, Accessibility = 100, Best Practices ≥ 95, SEO ≥ 95.
- Total page weight (HTML + CSS + JS, uncompressed): under 100 KB. No images above 100 KB.
- No render-blocking resources beyond `styles.css`. Scripts use `defer`.
- Support `prefers-reduced-motion`. Disable smooth scroll and transitions when it is set.
- Test keyboard navigation through the full page: nav → hero CTA → every section → footer.

## 9. Copy and Content Rules

- Tone: direct, confident, plain language. Avoid jargon such as "synergy" or "leverage".
- Headlines state the outcome, for example "Replace spreadsheet chaos with one source of truth."
- Use placeholder testimonials and logos only if clearly marked in code comments as `<!-- PLACEHOLDER: replace before launch -->`. Never invent real customer names or quotes presented as factual.
- Pricing amounts are placeholders unless the user provides final numbers. Mark them with `<!-- PLACEHOLDER pricing -->`.
- Current sample amounts are Starter $12 / month and Pro $29 / month. The user asked for these to be invented, so they are not real prices. Replace them with final numbers before launch. Enterprise stays "Custom".
- Primary CTA label: "Start free trial". It appears in Nav, Hero, Pricing, and Final CTA, and every one opens the sign-up modal. Enterprise uses "Contact sales", which also opens the modal. "Book a demo" was removed at the user's request.

## 10. Working Conventions for Claude

- Before editing, read the current file. Make minimal, targeted changes; do not rewrite whole files for small fixes.
- Keep `index.html`, `styles.css`, and `script.js` in sync. If a class or id changes in one, update the others in the same change.
- After any change, run the checklist in section 11.
- Do not commit to git unless asked. This directory is a git repository with no commits yet; the default branch is `master`.
- When a requirement conflicts with these rules, state the conflict and ask before deviating.

## 11. Verification Checklist

Run this checklist after every change and before reporting work as done. Mark each item pass or fail. Report any failure with the file and line.

### 11.1 Structure
- [ ] Project root contains only `index.html`, `styles.css`, `script.js`, and `CLAUDE.md`, plus `.git/`. No other top-level files or folders.
- [ ] All nine section ids exist, in this order: `nav`, `hero`, `social-proof`, `features`, `how-it-works`, `testimonials`, `pricing`, `final-cta`, `footer`.
- [ ] Counts match: 4 `.feature-card`, 3 `li.step`, 3 `figure.testimonial-card`, 3 `.pricing-card`.
- [ ] Pricing cards are in the order Starter, Pro, Enterprise. Only Pro has `pricing-card--featured` and the "Recommended" badge.
- [ ] There is exactly one `<h1>`, in the hero. Heading levels are not skipped.

### 11.2 Dark mode
- [ ] `:root` has `color-scheme: dark`. `body` has an explicit `background-color`.
- [ ] No color values outside `:root`. Check with: `grep -nE '#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(' styles.css` and confirm every match is inside the `:root` block.
- [ ] No light theme. Check with: `grep -n 'prefers-color-scheme\|#fff\b\|#ffffff' styles.css` returns nothing.
- [ ] No theme toggle markup or script.

### 11.3 Code rules
- [ ] No inline styles, scripts, or event handlers. Check with: `grep -nE 'style="|<script>|on[a-z]+=' index.html` returns nothing.
- [ ] No `!important` in `styles.css`. Check with: `grep -n '!important' styles.css` returns nothing.
- [ ] No ID selectors in `styles.css`. Check with: `grep -n '#[a-zA-Z]' styles.css` returns only color values from `:root`.
- [ ] `styles.css` is linked in `<head>`. `script.js` loads with `defer` at the end of `<body>`.
- [ ] `script.js` has no `var`, no global variables, and no `innerHTML` writes of untrusted content. Check with: `grep -n 'var \|innerHTML' script.js`.
- [ ] Scroll and touch listeners use `{ passive: true }`. Scroll handlers are throttled.
- [ ] `node --check script.js` passes.
- [ ] No frameworks, npm packages, CDNs, or external fonts (unless approved).

### 11.4 Accessibility
- [ ] Body text meets 4.5:1 contrast. Large text meets 3:1. Muted text was checked on `--color-surface`.
- [ ] Every link, button, and form control is reachable with Tab in visual order.
- [ ] Every interactive element shows a visible `:focus-visible` outline.
- [ ] Decorative SVGs and icons have `aria-hidden="true"` and `focusable="false"`.
- [ ] The nav toggle has `aria-expanded` and `aria-controls`. Its label changes between "Open menu" and "Close menu". Escape closes the menu, and a link click closes it.
- [ ] `prefers-reduced-motion` disables smooth scroll and any transitions.
- [ ] Meaningful images have descriptive `alt` text.
- [ ] Each `<nav>` has a unique purpose. The footer nav has `aria-label="Footer"`.

### 11.5 Responsive layout
- [ ] No horizontal scroll at 320px width.
- [ ] Layout checked at 320px, 768px, 1024px, and 1280px.
- [ ] Only `min-width` media queries are used, at 640px, 768px, and 1024px.
- [ ] Grids: 1 column on mobile, 2 at 640px, and 3 or 4 at 1024px, as each section requires.
- [ ] Nav links and CTAs are hidden below 768px. The toggle is hidden at 768px and above.

### 11.6 Copy
- [ ] "Start free trial" is the CTA in Nav, Hero, Pricing, and Final CTA, and each one has `data-open-signup`. "Book a demo" does not appear anywhere.
- [ ] No real customer names, logos, or quotes. Placeholder comments are present on logos, testimonials, pricing, and footer links.
- [ ] Headlines state an outcome. No jargon from section 9.

### 11.7 Performance
- [ ] Page weight is under 100 KB uncompressed. Check with: `wc -c index.html styles.css script.js`.
- [ ] Only `styles.css` blocks rendering.
- [ ] Lighthouse meets the targets in section 8. Record the scores.

### 11.8 Repository
- [ ] `git status` shows only the intended files.
- [ ] Nothing is committed unless the user asked for a commit.

## 12. Build Status

Update this section when a section is built or a behavior is added.

| Item | Status |
|---|---|
| Git repository | Initialized on `master`. No commits yet. |
| File skeleton (`index.html`, `styles.css`, `script.js`) | Done. All nine section shells and layout containers exist. No content. |
| 3.1 Nav | Done: markup, styles, mobile toggle, and sticky border on scroll. Not yet checked in a browser. |
| 3.2 Hero | Done: markup and styles. Not yet checked in a browser. |
| 3.3 Social Proof | Done: markup and styles with three sample stats (invented, not verified) and six placeholder logos. Not yet checked in a browser. |
| 3.4 Features | Done: markup and styles. Not yet checked in a browser. |
| 3.5 How It Works | Done: markup and styles. Not yet checked in a browser. |
| 3.6 Testimonials | Done: markup and styles with placeholder quotes. Not yet checked in a browser. |
| 3.7 Pricing | Done: markup and styles. Sample prices are $12 and $29 per month (invented, not final). Not yet checked in a browser. |
| 3.8 Final CTA | Done: markup and styles. Not yet checked in a browser. |
| 3.9 Footer | Done: markup and styles with placeholder links. Not yet checked in a browser. |
| JS: smooth scroll (section 7, item 2) | Stub only. |
| JS: hero typewriter (section 7, item 5) | Done: types the headline once on load. Not yet checked in a browser. |
| Accent color | Changed to green (`#3ddc97`, strong `#2bc283`) to match the spreadsheet product. Not yet checked in a browser. |
| JS: billing toggle (section 7, item 4) | Done: Monthly / Annual switch. Annual amounts are invented sample figures ($10 and $24). Not yet checked in a browser. |
| JS: scroll reveal (section 7, item 6) | Done: sections fade in on scroll. Not yet checked in a browser. |
| JS: sign-up modal (section 7, item 7) | Done: opens from every Start free trial and Contact sales button. Form is not connected to an endpoint. Not yet checked in a browser. |
| Book a demo | Removed at the user's request from Nav, Hero, and Final CTA. Enterprise now says "Contact sales". |
| Verification checklist (section 11) | Not yet run against the files. |
