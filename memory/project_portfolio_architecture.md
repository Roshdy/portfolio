# Portfolio Architecture & Key Files

type: project
last_updated: 2026-04-28

## Description

Key files, libraries, and architecture decisions in the portfolio project.

## Overview

Single-file SPA at `index.html` (no build step). Supporting files:

- `cv.js` — CV PDF generator: reads live from portfolio DOM, exports ATS-optimized PDF via pdf-lib
- `tech-icons.js` — TECH_ICONS dictionary mapping tech label strings to Devicon CSS classes; `applyTechIcons()` called after `lucide.createIcons()`
- `CLAUDE.md` — project instructions

## CDN Dependencies (all in `<head>`)

- Google Fonts (Inter, JetBrains Mono)
- Devicons CSS: `cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css`
- Lucide UMD: `unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- pdf-lib: `unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js`

## Icons Approach

- UI icons: Lucide (`data-lucide="name"` on `<i>` tags, `lucide.createIcons()` at end of script)
- Tech/language icons: Devicons via `tech-icons.js` dictionary
- Logo images fallback: `img onerror` hides img, shows sibling `<span class="logo-fallback"><i data-lucide="building-2"></i></span>`
- LinkedIn icon: inline SVG (not in Lucide)

## CV Generator (cv.js)

- `generateAndDownloadCV()` is async, called from `.btn-cv` onclick
- `extractCVData()` reads live from DOM: `.timeline-item`, `.project-card`, `.skill-category`, `.cert-card` (`.cert-date` for date), `.edu-card`, `.hero-summary` (for CV summary)
- `renderCV(data)` builds the PDF using Helvetica / HelveticaBold / HelveticaOblique standard fonts
- `clean()` sanitizer strips newlines and WinAnsi-incompatible unicode before all text operations
- Layout: A4 (595×842 pt), margins MX=56, MY_TOP=56, MY_BOT=52, footer on every page
- Sections: Summary → Experience → Projects → Skills (aligned labels) → Certifications → Education → Languages
- Languages (Arabic/English) are hardcoded in `renderCV` — not read from DOM
- PDF downloads directly via Blob URL (no print dialog)
- html2pdf.js CDN was removed and replaced with pdf-lib

## Rationale

ATS optimization — two-column CVs fail ATS parsing; dynamic DOM reading keeps PDF in sync with portfolio edits automatically. Summary and Languages are the only things not auto-synced from the DOM.

## How to Apply

When the portfolio content is edited the CV PDF updates automatically on next download. Only the Summary (`.hero-summary`) and Languages block in `renderCV` need manual attention if those change.
