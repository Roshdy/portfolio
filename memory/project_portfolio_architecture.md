# Portfolio Architecture & Key Files

type: project
last_updated: 2026-04-28

## Description
Key files, libraries, and architecture decisions in the portfolio project.

## Overview
Single-file SPA at `index.html` (no build step). Supporting files:
- `cv.js` — CV PDF generator: reads live from portfolio DOM, exports ATS-optimized PDF via html2pdf.js
- `tech-icons.js` — TECH_ICONS dictionary mapping tech label strings to Devicon CSS classes; `applyTechIcons()` called after `lucide.createIcons()`
- `CLAUDE.md` — project instructions

## CDN Dependencies (all in `<head>`)
- Google Fonts (Inter, JetBrains Mono)
- Devicons CSS: `cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css`
- Lucide UMD: `unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- html2pdf.js: `cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js`

## Icons Approach
- UI icons: Lucide (`data-lucide="name"` on `<i>` tags, `lucide.createIcons()` at end of script)
- Tech/language icons: Devicons via `tech-icons.js` dictionary
- Logo images fallback: `img onerror` hides img, shows sibling `<span class="logo-fallback"><i data-lucide="building-2"></i></span>`
- LinkedIn icon: inline SVG (not in Lucide)

## CV Generator (cv.js)
- Triggered by nav `.btn-cv` click (`onclick="generateAndDownloadCV();return false;"`)
- Reads live DOM: `.timeline-item`, `.project-card`, `.skill-category`, `.cert-card`, `.edu-card`
- Produces ATS single-column PDF: Summary > Experience > Projects > Skills > Certifications > Education
- Summary paragraph in cv.js line ~88 is hardcoded (only thing not auto-synced)

## Rationale
ATS optimization — two-column CVs fail ATS parsing; dynamic DOM reading keeps PDF in sync with portfolio edits automatically.

## How to Apply
When user edits portfolio content, the CV PDF updates automatically. Only the Summary in `cv.js` needs manual sync.
