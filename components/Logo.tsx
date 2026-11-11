import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Renders the official Star Casino logo from /public/brand/star-casino.svg
 * (fetched by scripts/fetch-assets.mjs). The mark is never redrawn in code:
 * if the file is missing, the name is set in plain type instead.
 */
const hasLogo = existsSync(path.join(process.cwd(), "public/brand/star-casino.svg"));

export function Logo({ className = "h-10" }: { className?: string }) {
  if (hasLogo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/brand/star-casino.svg" alt="Star Casino" className={`${className} w-auto`} />;
  }
  return (
    <span className={`flex items-center font-display text-[1.5rem] font-semibold tracking-[-0.01em] text-paper ${className}`}>
      Star Casino
    </span>
  );
}
