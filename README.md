# lafitnessmembership.org

Independent LA Fitness membership guide, built with Astro (static output) and served by a Cloudflare Worker.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Requires Node 22.23.4+ (pinned in `.node-version`).

## Where things live

| File | What it holds |
| --- | --- |
| `src/data/site.ts` | Site name, contact email, nav, and the headline numbers (`facts`). Change a price here and every page updates. |
| `src/data/pages.ts` | About, Contact, Privacy, Terms and Disclaimer pages. Add an object to add a page. |
| `src/pages/index.astro` | Homepage |
| `src/pages/[slug].astro` | Template for content and legal pages |
| `src/pages/sitemap.xml.ts` | Sitemap of published pages |
| `src/styles/global.css` | All styling |

## Deploy

Pushing `main` triggers a Cloudflare Workers build (`npm run build`, then `npx wrangler deploy`). `wrangler.jsonc` attaches the apex and `www` as custom domains.

## Before launch

- Set a working contact email in `src/data/site.ts` (currently `contact@lafitnessmembership.org`).
- LA Fitness publishes no national price list; prices are reported ranges. Re-check them and update `facts` and `updated`.
