# splidsboel.github.io

My personal website, built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Deployed to GitHub Pages.

Live at **https://splidsboel.github.io**

## Develop

```sh
npm install      # once
npm run dev      # http://localhost:4321
```

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload      |
| `npm run build`   | Build the production site into `dist/`    |
| `npm run preview` | Preview the production build locally      |

## Adding a page

1. Create a file in `src/pages/`, e.g. `src/pages/projects.astro`. The filename becomes the URL (`/projects`).
2. Add a matching entry to `NAV_LINKS` in `src/config.ts` so it shows up in the nav.

Pages use the shared `src/layouts/Layout.astro` for the nav, footer, and `<head>`. Styling is Tailwind utility classes. React components are supported (`@astrojs/react` is installed) — add `client:*` directives when you need interactivity.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. One-time setup: in the repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
