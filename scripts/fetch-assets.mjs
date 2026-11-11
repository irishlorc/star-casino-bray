// Pulls the full-resolution venue photography and the official logo from the
// current Star Casino site into /public. Runs before `dev` and `build`.
// It never fails the build: if a file can't be fetched, whatever is already
// in /public is kept. Once the client supplies final assets, drop them into
// /public/images and /public/brand under the same names and delete this script.
import { mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const BASE = "https://www.starcasinobray.com/wp-content/uploads";
const assets = {
  "public/brand/star-casino.svg": `${BASE}/2024/09/star-casino.svg`,
  "public/images/roulette.jpg": `${BASE}/2025/01/sccorrect-nov24-mr-11.jpg`,
  "public/images/floor-aisle.jpg": `${BASE}/2025/01/starcas-nov24-mr-1.jpg`,
  "public/images/floor-aisle-warm.jpg": `${BASE}/2025/01/starcas-nov24-mr-40.jpg`,
  "public/images/reels.jpg": `${BASE}/2025/01/sccorrect-nov24-mr-1.jpg`,
  "public/images/poker.jpg": `${BASE}/2025/01/starcas-nov24-mr-62.jpg`,
  "public/images/exterior.jpg": `${BASE}/2025/01/Untitled-design-2.jpg`,
  "public/images/wheel.jpg": `${BASE}/2025/01/Untitled-design-1.jpg`,
};
const MARK = "public/brand/.fetched";

try {
  await stat(MARK);
  process.exit(0); // already fetched
} catch {}

let ok = 0;
await Promise.all(
  Object.entries(assets).map(async ([file, url]) => {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
      if (!res.ok) throw new Error(String(res.status));
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, Buffer.from(await res.arrayBuffer()));
      ok++;
    } catch (e) {
      console.warn(`[assets] kept existing ${file} (${e.message})`);
    }
  }),
);
if (ok === Object.keys(assets).length) await writeFile(MARK, new Date().toISOString());
console.log(`[assets] ${ok}/${Object.keys(assets).length} fetched`);
