---
name: maged-gamification
description: Full gaming UI overhaul plan for Maged Farid's portfolio on the maged branch
metadata:
  type: project
---

## Goal
Redesign Maged Farid's portfolio (branch: `maged`) to reflect his identity as a game developer.
Every element should feel like a game UI — HUD panels, neon glow, scanlines, achievement badges.

## Scope

### Color Palette — Warm Gaming (fire, gold, ember)
Inspired by Diablo loot colours, Street Fighter life bars, God of War UI.
- `--accent`: `#FF4500` OrangeRed — health bars, fire, combat energy
- `--accent2`: `#FFB300` Amber Gold — XP, achievement, loot, reward
- `--bg`: `#0C0806` — near-black with warm dark undertone (ember ash)
- `--card`: `#1A1008` — dark warm card surface
- `--card-border`: `rgba(255,69,0,.2)` — warm ember border
- `--accent-glow`: `rgba(255,69,0,.4)` — fire halo
- `--accent2-glow`: `rgba(255,179,0,.28)` — gold shimmer
- NOT: electric cyan, not hacker/network-admin aesthetic

### Nav Header
- HUD style — think game overlay bars
- "MF" logo → achievement badge / level icon style (hexagonal or shield shape)
- Could add XP bar or level indicator as decoration
- Nav links styled like game menu items (bright hover, maybe pixel cursor)

### Background
- Replace particle mesh with something more dramatic:
  - Digital rain (matrix-style) OR
  - Hexagonal grid with pulse animations OR
  - Starfield with depth/parallax OR
  - CRT scanline overlay on top of particles
- More intense, faster particle movement

### Buttons
- Neon border glow (thick, colourful)
- Corner cut style (clip-path: polygon) for game feel
- Press animation: scale down + flash
- Maybe pixel-dotted borders

### Cards / Boxes (exp-card, skill-chip, etc.)
- Corner bracket decorations: ┌─ ─┐ style using ::before/::after
- Subtle scanline overlay on card backgrounds
- Holographic shimmer on hover
- Glitch effect on hero name on load

### Hero Section
- Code card could look like a game terminal/console
- Profile photo could have a game character frame (hexagonal clip, glowing border)
- Stats row → look like game stats HUD (HP / XP / LVL bars)

### Typography
- Consider adding "Orbitron" (Google Fonts) for section headings — used in many games
- Keep body font readable (Nunito is fine)
- All-caps headings with letter-spacing for HUD feel

### Neural Network (soft skills)
- Already looks very game-like — keep and enhance
- Node colors could be more neon/intense

### Achievement-style section labels
- Replace "Career Timeline" labels with achievement unlock style
- e.g. "🎮 ACHIEVEMENT UNLOCKED: 13 Years of Game Dev"

## Implementation Notes
- Branch: `maged`
- Do NOT apply to Roshdy (`main`) or Aser (`sotti`) branches
- Keep the warm orange palette on `sotti` untouched
- All changes are isolated to `maged` branch

**Why:** Maged is a game developer — his portfolio should feel like a playable UI, not a corporate site.
**How to apply:** Start from the CSS variables and work outward — palette → background → nav → cards → buttons.
