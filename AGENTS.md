# Base44 dev environment

This repository is a GitHub profile README that was turned into a runnable portfolio site.

## Stack
- Vite + React (single-page app), plain CSS (no Tailwind).
- Entry point: `index.html` → `src/main.jsx` → `src/App.jsx`.
- Content lives in `src/data.js` (profile, socials, tech stack, GitHub stats images).

## Run in the sandbox
```
docker compose -f docker-compose.base44.yml up -d --build
```
- `web` service uses `node:22-alpine`, bind-mounts the repo at `/app`, runs
  `npm install` then `npm run dev` (Vite dev server on `0.0.0.0:3000`).
- `node_modules` is kept in a named volume (`web_node_modules`) so installs
  persist across restarts and don't clash with the bind mount.

## Sandbox overrides (gated on `BASE44_PREVIEW_MODE === "1"`)
- `vite.config.js` sets `server.allowedHosts: true` only in preview mode, so the
  preview proxy can reach the dev server. With the flag unset, Vite's default
  host behavior is unchanged.

## Verify
- `curl http://localhost:3000/` should return the HTML shell.
- The rendered page shows the hero, about, tech stack, and GitHub stats cards.
- No secrets or external credentials are required to boot.

## Notes
- The GitHub stats cards load remote images (`github-readme-stats.shion.dev`,
  `streak-stats.demolab.com`); they need outbound network access to display.
