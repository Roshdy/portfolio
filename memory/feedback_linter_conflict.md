# VS Code Linter Causes Edit Tool Conflicts

type: feedback
last_updated: 2026-04-28

## Description
A VS Code formatter/linter auto-reformats `index.html`, causing "file modified since read" errors.

## Problem
The portfolio project has a VS Code extension that auto-formats `index.html` on save/read. This causes frequent "File has been modified since read" errors when using the Edit tool for large insertions.

## Root Cause
The linter fires between the Read and Edit operations when edits are large.

## How to Apply / Workarounds
- For large JS/CSS additions to `index.html`: write them to a separate file (`cv.js`, `tech-icons.js`) and add a single short `<script>`/`<link>` tag to the HTML instead.
- For small edits: retry with a fresh Read immediately before Edit.
- Use Bash `sed` as a fallback for one-liner insertions.
