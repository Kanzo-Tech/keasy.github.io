import { auditContrast, CONTRAST_PAIRS, type ContrastPair } from "@kanzo-tech/theme";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";

// The site wears kanzo by day and kanzo-dark by night (global.css). Each theme's file is one flat
// block of `--token: #hex;`, so reading it is a regex, not a CSS parser.
const require = createRequire(import.meta.url);

function tokens(theme: string): Map<string, string> {
  const css = readFileSync(require.resolve(`@kanzo-tech/theme/themes/${theme}.css`), "utf8");
  return new Map([...css.matchAll(/(--[\w-]+):\s*(#[0-9a-f]{3,8})\s*;/gi)].map(([, k, v]) => [k, v]));
}

// What the site itself reads beyond the vocabulary's pairs: the brand as text on the page (section
// labels, icons), the CTA band's ink on the brand fill, and its secondary line at 80%.
const SITE_PAIRS: ContrastPair[] = [
  { ground: "--background", ink: "--primary", min: 4.5 },
  { ground: "--card", ink: "--primary", min: 3 },
  { ground: "--primary", ink: "--primary-foreground", min: 4.5 },
  { ground: "--background", ink: "--muted-foreground", min: 4.5 },
];

describe.each(["kanzo", "kanzo-dark"])("%s", (theme) => {
  const declared = tokens(theme);
  // `--popover` falls back to `--card` in the bridge (tokens.css) when a theme leaves it unsaid.
  const resolve = (token: string) =>
    declared.get(token) ?? (token === "--popover" ? declared.get("--card") : undefined);

  it("declares the tokens the site reads", () => {
    for (const token of ["--background", "--foreground", "--primary", "--primary-foreground", "--card", "--muted-foreground", "--border"]) {
      expect(declared.has(token), token).toBe(true);
    }
  });

  it("meets every contrast floor the theme vocabulary owes", () => {
    expect(auditContrast(resolve, CONTRAST_PAIRS)).toEqual([]);
  });

  it("meets the contrast the site's own pairs need", () => {
    expect(auditContrast(resolve, SITE_PAIRS)).toEqual([]);
  });
});
