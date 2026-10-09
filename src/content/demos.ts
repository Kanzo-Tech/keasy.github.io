// The product demos the hero plays, recorded in the keasy repo by `make demo` (e2e/demos/), each in
// light and dark. Paths are under `public/`. A demo listed here is a tab in the hero; with one, the
// hero plays it without tabs. Adding one is copying `e2e/demos/out/<name>-{light,dark}.mp4` and a
// poster into `public/videos/<id>/` and a line below.

export interface Demo {
  id: string;
  label: string;
  /** One proof line, the title in the player's window bar. */
  stat: string;
  /** The demo's subtitles and when each starts, in seconds, from `e2e/demos/out/<name>-<theme>.chapters.json`.
   * Shown as chips under the video that follow it and seek it. A start is one number when both takes
   * agree, or one per side when they do not (a model's answer takes its own time in each). */
  steps: { text: string; start: number | { light: number; dark: number } }[];
  video: { light: string; dark: string };
  poster: { light: string; dark: string };
}

const files = (id: string) => ({
  video: { light: `/videos/${id}/light.mp4`, dark: `/videos/${id}/dark.mp4` },
  poster: {
    light: `/videos/${id}/poster-light.webp`,
    dark: `/videos/${id}/poster-dark.webp`,
  },
});

export const DEMOS: Demo[] = [
  {
    id: "explore",
    label: "Analytics",
    stat: "327K nodes · 765K edges — explored in your browser",
    steps: [
      { text: "Pick what to explore", start: 0 },
      { text: "Click a bar to filter", start: 4.9 },
      { text: "Drag across time", start: 9.5 },
      { text: "Every filter lands in the bar", start: 14.6 },
    ],
    ...files("explore"),
  },
  {
    id: "map",
    label: "Hidden patterns",
    stat: "Place points by their columns — patterns no link ever drew",
    steps: [
      { text: "A graph of airports", start: 0 },
      { text: "Put it on a map", start: 3.5 },
      { text: "Find every airport in Spain", start: 14.5 },
      { text: "Keep only what you picked", start: 21.9 },
    ],
    ...files("map"),
  },
  {
    id: "crossfilter",
    label: "Crossfilter",
    stat: "One filter for every chart and the map",
    steps: [
      { text: "One filter, every chart", start: 0 },
      { text: "Click a country", start: 2.9 },
      { text: "Drag across longitude", start: 7.5 },
      { text: "The same filter, on the map", start: 12.6 },
      { text: "Every filter in the bar", start: 18.6 },
    ],
    ...files("crossfilter"),
  },
  {
    id: "ask",
    label: "Ask",
    stat: "Every answer is a query over what's in view — with its chart",
    steps: [
      { text: "Ask in plain words", start: 0 },
      { text: "The answer, with its chart", start: { light: 18.2, dark: 10.4 } },
    ],
    ...files("ask"),
  },
  {
    id: "rules",
    label: "Assessment",
    stat: "3,218 airports assessed against your rules — in your browser",
    steps: [
      { text: "Every airport, checked", start: 0 },
      { text: "Red breaks a rule, amber warns", start: 2.9 },
      { text: "Show the ones that break one", start: 5.8 },
      { text: "Or only the ones that pass", start: 10.6 },
    ],
    ...files("rules"),
  },
];

/** When `step` starts in the take for `side`. */
export const startOf = (step: Demo["steps"][number], side: "light" | "dark") =>
  typeof step.start === "number" ? step.start : step.start[side];
