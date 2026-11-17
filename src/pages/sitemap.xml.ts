import type { APIRoute } from 'astro';
import { published } from '../data/pages';
import { site } from '../data/site';

// Served at /sitemap.xml in both `astro dev` and the static build.
// Lists the homepage plus every page that [slug].astro builds.
export const GET: APIRoute = () => {
  const paths = ['/', ...published.map((p) => `/${p.slug}/`)];
  const urls = paths
    .map((path) => `  <url><loc>${site.url}${path}</loc><lastmod>${site.updatedISO}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
