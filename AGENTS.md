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

## Why `main` has nothing to run
- `main` (HEAD `9e38dc4`, "Update README.md") contains **only `README.md`** — no
  `package.json`, no compose file, no source. That commit only swaps README
  badges, so a preview built from `main` starts nothing at all.
- The runnable portfolio site exists only on the `base44/setup-4cfdf17a`
  branch (commits `0ff42d7` build, `ec830c3` healthcheck fix, `cbe287d` hero
  background) and was never merged into `main`. Merge that branch into any
  branch that needs to serve the app before starting the stack.
- Once the app files are present the stack starts clean: `npm install` + Vite
  dev server, healthy in ~25s, `npm run build` (`vite build`) also passes.
