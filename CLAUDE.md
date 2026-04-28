# Portfolio Project — Claude Context

## What this is
A single-file interactive portfolio SPA for **M. Roshdy Kamel** (Lead Software Engineer, Riyadh KSA).
Built as a standalone `index.html` — no framework, no build step, no npm.

## File structure
```
/your-project-folder
  index.html       ← the entire site (HTML + CSS + JS in one file)
  profile.jpg          ← place your photo here (referenced as ./profile.jpg)
  CLAUDE.md            ← this file
```

The CV links directly to Google Drive — no local PDF needed.

## What's already built
- Particle canvas background (animated, connects nearby dots)
- Dark / light theme toggle
- Fixed top nav with scroll-active highlight + hamburger mobile menu
- Side nav dots (right edge, hover shows label)
- Sections: Hero → About → Experience (timeline) → Projects → Skills → Education → Contact
- Fade-in on scroll, staggered timeline animations, animated skill bars
- **Profile photo** in hero right column — gradient ring, pulsing glow, fallback to "MRK" initials
- **Download CV** button in nav + hero CTAs → Google Drive direct download
- **Company logos** — Clearbit real logos for Mal Fintech, VIBO, Albawardi, KEE Action Sports, Al-Jazira Capital; SVG initials for EBS, Al-Joman, UIG, Egyptian Army, Barada, SuperKoshk
- Full deploy tweaks: OG tags, Twitter Card, JSON-LD Person schema, canonical, favicon, robots, theme-color, lazy loading

## Key constants to know
| Thing | Value |
|---|---|
| Accent color | `#6c63ff` (purple) |
| Accent 2 | `#00d4aa` (teal) |
| Font | Inter (body), JetBrains Mono (code card) |
| Email | roshdy89@gmail.com |
| Phone | +966 562 406 698 |
| LinkedIn | linkedin.com/in/roshdy-kamel |
| CV Google Drive ID | `1d3vyAHQUUpMAGZBaLxjMCrZRAQPTCtxf` |
| Canonical domain (placeholder) | `https://roshdy.dev` — update when deployed |

## CSS variable reference
```css
--accent        #6c63ff   /* primary purple */
--accent2       #00d4aa   /* teal */
--accent-glow   rgba(108,99,255,.35)
--accent2-glow  rgba(0,212,170,.25)
--bg            #0a0a0f   /* page background (dark) */
--bg2           #111118
--bg3           #1a1a28   /* card backgrounds */
--card          #14141f
--card-border   rgba(108,99,255,.18)
--text          #e8e8f0
--text2         #9898b8   /* secondary text */
--text3         #5a5a7a   /* muted text */
```

## Company logos approach
- **Has real domain** → `https://logo.clearbit.com/{domain}` with onerror fallback to Google Favicon API
- **No web presence** → inline `data:image/svg+xml` with dark bg + colored initials, no external dependency

## What still needs doing (known TODOs)
- [ ] Place `profile.jpg` in project folder
- [ ] Update canonical URL from `https://roshdy.dev` to real deployed domain
- [ ] Update `og:image` and `twitter:image` meta to a real hosted image URL
- [ ] Test CV download button (Google Drive link is live)

## How to preview locally
Install the **Live Server** VS Code extension → right-click `portfolio.html` → Open with Live Server.
