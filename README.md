# Star Casino Bray — website

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, deploys to Vercel as-is
```

## Where things live

| What | File |
| --- | --- |
| Address, phone, email, hours, nav, legal links, map links | `lib/site.ts` (also feeds the JSON-LD and footer) |
| Gallery photos, alt text, captions | `lib/site.ts` → `gallery` |
| Colour, type scale, buttons | `app/globals.css` |
| Sections | `components/` — one file per section |
| SEO, Open Graph, structured data | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` |

## Assets

`scripts/fetch-assets.mjs` runs before `dev` and `build`. It downloads the
official logo (SVG) and the full-resolution venue photographs from
starcasinobray.com into `public/brand` and `public/images`, once. The photos
committed in `public/images` are lower-resolution captures of the same files so
the site renders before the script has run.

To hand over final assets, put them in `public/` under the same file names and
delete the script and the `predev` / `prebuild` entries in `package.json`.

- Logo: `public/brand/star-casino.svg`. Until it exists the name is set in type; the mark is never redrawn in code.
- Magic Pay card: `components/MagicCard.tsx` is a typographic stand-in. Replace with the real card artwork.

## Before launch

- Confirm weekend closing time (see handover note).
- Port the four policy pages (`site.legal`) into this project; they currently link to the existing site.
- Add verified social profiles to `site.social` (none are listed on the current site).
- "Discover Magic Pay" and "Explore Our Rewards" buttons were removed because they had no destination pages. Add them back in `Loyalty.tsx` / `Wheel.tsx` when those pages exist.
