import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { DEMOS, startOf } from "@/content/demos";

const SRC = join(__dirname);
const PUBLIC = join(__dirname, "..", "public");

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return files(path);
    return /\.(tsx?|astro|mdx?)$/.test(name) && !name.endsWith(".test.ts") ? [path] : [];
  });
}

// Legal pages keep their own wording; everything else is the product's voice.
const pages = files(SRC).filter((f) => !f.endsWith("privacy.mdx"));
const source = pages.map((f) => readFileSync(f, "utf8")).join("\n");

describe("copy", () => {
  // The old Keasy: a DCAT catalog generator over a fixed list of stores. The site no longer
  // names sources, and data spaces are not the message.
  it.each([
    "DCAT catalog generation",
    "Google Cloud Storage",
    "local filesystem",
    "data space lifecycle",
    "Data Discovery & Cataloging",
  ])("no longer says %s", (phrase) => {
    expect(source.toLowerCase()).not.toContain(phrase.toLowerCase());
  });
});

describe("links", () => {
  const ids = new Set([...source.matchAll(/\bid=["{]["']?([\w-]+)/g)].map(([, id]) => id));
  const anchors = new Set([...source.matchAll(/["'(]\/?#([\w-]+)["')]/g)].map(([, a]) => a));

  it("finds anchors to check", () => {
    expect(anchors.size).toBeGreaterThan(0);
  });

  it.each([...anchors])("#%s lands on a section", (anchor) => {
    expect(ids.has(anchor), `no element has id="${anchor}"`).toBe(true);
  });
});

describe("demos", () => {
  it("has at least one", () => {
    expect(DEMOS.length).toBeGreaterThan(0);
  });

  it.each(DEMOS.map((d) => [d.id, d] as const))("%s has its videos and posters on disk", (_, demo) => {
    for (const path of [demo.video.light, demo.video.dark, demo.poster.light, demo.poster.dark]) {
      expect(existsSync(join(PUBLIC, path)), path).toBe(true);
    }
  });

  it.each(DEMOS.map((d) => [d.id, d] as const))("%s has steps from 0, in order", (_, demo) => {
    for (const side of ["light", "dark"] as const) {
      const starts = demo.steps.map((step) => startOf(step, side));
      expect(starts[0], side).toBe(0);
      expect(starts, side).toEqual([...starts].sort((a, b) => a - b));
    }
  });

  it("ids are unique", () => {
    expect(new Set(DEMOS.map((d) => d.id)).size).toBe(DEMOS.length);
  });
});
