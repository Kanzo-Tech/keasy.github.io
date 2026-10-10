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
    id: "timeline",
    label: "Timeline",
    stat: "Every Nobel prize since 1901, on the map — played over time",
    steps: [
      { text: "Every Nobel prize, on a time axis", start: 0 },
      { text: "Brush 1900–1930", start: 5.4 },
      { text: "Play it forward", start: 11.9 },
      { text: "Read the 1990s", start: 23.3 },
      { text: "One filter, every view", start: 31.4 },
    ],
    ...files("timeline"),
  },
  {
    id: "explore",
    label: "Analytics",
    stat: "327K nodes · 765K edges — explored in your browser",
    steps: [
      { text: "Pick what to explore", start: 0 },
      { text: "Click a bar to filter", start: 5.9 },
      { text: "Drag across time", start: 13.0 },
      { text: "Every filter lands in the bar", start: 19.4 },
    ],
    ...files("explore"),
  },
  {
    id: "map",
    label: "Hidden patterns",
    stat: "Place points by their columns — patterns no link ever drew",
    steps: [
      { text: "A graph of airports", start: 0 },
      { text: "Put it on a map", start: 6.1 },
      { text: "Find every airport in Spain", start: 19.1 },
      { text: "Lasso the peninsula", start: 30.8 },
      { text: "Frame what you kept", start: 42.6 },
    ],
    ...files("map"),
  },
  {
    id: "crossfilter",
    label: "Crossfilter",
    stat: "One filter for every chart and the map",
    steps: [
      { text: "Click a country", start: 0 },
      { text: "Drag across longitude", start: 6.0 },
      { text: "The same filter, on the map", start: 12.4 },
      { text: "Frame what the filters keep", start: 19.3 },
    ],
    ...files("crossfilter"),
  },
  {
    id: "ask",
    label: "Ask",
    stat: "Every answer is a query over what's in view — with its chart",
    steps: [
      { text: "Filter: women only", start: 0 },
      { text: "Ask in plain words", start: 5.0 },
      { text: "The answer, with its chart", start: 16.1 },
      { text: "Add it to the dashboard", start: 21.4 },
    ],
    ...files("ask"),
  },
  {
    id: "rules",
    label: "Assessment",
    stat: "3,218 airports assessed against your rules — in your browser",
    steps: [
      { text: "Every airport, checked", start: 0 },
      { text: "Show the ones that break a rule", start: 4.9 },
      { text: "Amber warns", start: 11.1 },
      { text: "The world's high airports", start: 18.6 },
    ],
    ...files("rules"),
  },
];

/** When `step` starts in the take for `side`. */
export const startOf = (step: Demo["steps"][number], side: "light" | "dark") =>
  typeof step.start === "number" ? step.start : step.start[side];
