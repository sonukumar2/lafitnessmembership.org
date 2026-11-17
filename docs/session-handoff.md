# Session handoff — lafitnessmembership.org

Last updated: 2026-11-17 (IST)

## Current state

- **Stack:** Astro 7 static site in `./dist`, served by the Cloudflare Worker `lafitnessmembership-org` (`wrangler.jsonc`), with the apex and `www` attached as custom domains. Build with Node 22.23.5 (`PATH="$HOME/.nvm/versions/node/v22.23.5/bin:$PATH"`); nvm's default 22.15.0 is too old.
- **Repo:** https://github.com/sonukumar2/lafitnessmembership.org (public), branch `main`. Every push to `main` triggers a Cloudflare Workers build and deploy.
- **Domain:** registered at Spaceship; nameservers set to Cloudflare (armfazh / maeve.ns.cloudflare.com) on 2026-11-17. The Spaceship parking A records were removed from the Cloudflare zone.
- **Live pages (6):** homepage, /about-us/, /contact-us/, /privacy-policy/, /terms-and-conditions/, /disclaimer/, plus /sitemap.xml and /robots.txt.
- **Content:** LA Fitness publishes no national price list, so prices are reported ranges, labelled as such. Figures and sources are in `docs/research-notes.md`; all numbers live in `src/data/site.ts`.
- **Branding:** independent guide with its own colours and logo, no LA Fitness logos or photos, non-affiliation disclaimer in the top bar, footer and /disclaimer/.
- **Analytics:** none. The Planet Fitness GTM container was deliberately not reused.

## Uncommitted files

- `docs/session-handoff.md` (this file)

## Next 3 steps

1. Commit and push `docs/`.
2. Replace the placeholder contact email `contact@lafitnessmembership.org` in `src/data/site.ts` (or create that mailbox, e.g. with Cloudflare Email Routing).
3. Add analytics (a new GTM container) and submit `/sitemap.xml` in Google Search Console; then write the guide pages.

## Log

- 2026-11-17: Built the site, created the GitHub repo, added the Cloudflare zone (Free plan), switched Spaceship nameservers, and deployed the Worker with both custom domains.
