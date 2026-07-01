# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal website for `splidsboel.github.io`, built with **Astro 5+** + **Tailwind CSS v4**, deployed as a static site to **GitHub Pages**. Because this is a GitHub user/org page, it is served from the domain root (`site: 'https://splidsboel.github.io'`, base `/`).

## Commands

```sh
npm install       # once
npm run dev       # dev server with HMR at http://localhost:4321
npm run build     # static build into dist/
npm run preview   # serve the built dist/ locally
```

There are no tests or linters configured.

**Node ≥ 22.12 is required** (Astro's engine constraint). Locally that's whatever nvm/system provides; in CI the deploy action is pinned via `node-version: 22` in `.github/workflows/deploy.yml`. If you bump Astro, keep that pin ≥ its required Node.

## Deployment

`.github/workflows/deploy.yml` builds with `withastro/action@v3` and publishes to GitHub Pages on every push to `main`. One-time repo setting required: **Settings → Pages → Build and deployment → Source = GitHub Actions** (not branch-based). There is no SPA fallback — routing is Astro's static multi-page output.

## Architecture

### Content is config-driven

`src/config.ts` is the single source of truth for site chrome:

- `SITE` — title + meta description.
- `NAV_LINKS` — the nav bar. **Adding a normal page = create `src/pages/<name>.astro` AND add its entry to `NAV_LINKS`.** The filename is the route (`about.astro` → `/about`).
- `PROJECTS` — array rendered automatically by `src/pages/projects.astro`. **Adding a project = one entry here**, no new file needed (unless the project also gets its own page). A project's `href` may be an internal route (e.g. `/umap`) or an external URL; the projects page detects `^https?://` to decide `target=_blank` and "Visit →" vs "Open →".

### Two kinds of pages

1. **Standard pages** (`index`, `about`, `contact`, `projects`) wrap their content in `src/layouts/Layout.astro`, which provides the shared `<head>`, `<Nav />` (`src/components/Nav.astro`, with active-link highlighting), footer, and imports the global stylesheet. Styling is Tailwind utility classes.

2. **`src/pages/umap.astro` is a full-screen standalone page** — it intentionally does **not** use `Layout`; it renders its own complete `<html>` document so the WebGL canvas can take the whole viewport. See below.

### The UMAP visualizer (`umap.astro`)

A Three.js FPS "star field" showing ~35k audio samples as points, projected via UMAP and colored by HDBSCAN cluster. It is a **static snapshot** of a separate local tool ([`samplevec`](https://github.com/splidsboel/samplevec)); the original's audio preview and semantic search require a Python backend and are deliberately absent here.

Key implementation constraints when editing it:

- **Three.js is loaded from a CDN** via an `<script type="importmap">`. Both that importmap and the main `<script type="module">` are marked **`is:inline`** so Astro does not try to bundle/transform the bare `three` specifier — leave `is:inline` on them.
- Data comes from **`public/umap-layout.json`** (fetched at runtime as `/umap-layout.json`). This file is **path-free** — it contains only `filename`, rounded `x/y/z`, and `cluster` per point. It must never contain absolute local paths.
- The JSON is a **one-time generated snapshot**, not built from anything in this repo. It is derived from `~/.samplevec/layout.json` on the author's machine (output of the samplevec service's UMAP+HDBSCAN pipeline). To refresh it, regenerate that snapshot (recompute the layout in samplevec, then re-export filenames + coords + cluster, stripping paths).
- After any position-buffer update, the Three.js code must recompute bounding sphere/box or frustum culling makes the cloud vanish — this pattern already exists in the file; preserve it.

### Styling

Tailwind v4 is wired through the Vite plugin (`@tailwindcss/vite` in `astro.config.mjs`), **not** the older `@astrojs/tailwind` integration. `src/styles/global.css` does `@import "tailwindcss";` and is imported once by `Layout.astro`. Theme customization (custom colors, fonts) belongs in `global.css` via Tailwind v4's `@theme { … }` block, which exposes tokens as utilities.

### React

`@astrojs/react` is installed and configured but no React components are currently used. Astro ships zero JS by default; add a React island only where interactivity is needed, and give it a `client:*` directive to hydrate it.
