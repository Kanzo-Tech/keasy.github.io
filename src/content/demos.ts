// The product demos the hero plays, recorded in the keasy repo by `make demo` (e2e/demos/), each in
// light and dark. Paths are under `public/`. A demo listed here is a tab in the hero; with one, the
// hero plays it without tabs. Adding one is copying `e2e/demos/out/<name>-{light,dark}.mp4` and a
// poster into `public/videos/<id>/` and a line below.

import {
  ChartColumn,
  History,
  ListFilter,
  MapPin,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Demo {
  id: string;
  label: string;
  /** The tab's icon, before its label. */
  icon: LucideIcon;
  /** What kind of thing the demo shows, the badge under the video. */
  category: string;
  /** What the demo does, in a sentence or two, under the badge. */
  description: string;
  /** The demo's subtitles and when each starts, in seconds, from `e2e/demos/out/<name>-<theme>.chapters.json`.
   * Shown as the segments of the bar under the video, each as long as its chapter plays; pressing one
   * seeks there. A start is one number when both takes agree, or one per side when they do not (a
   * model's answer takes its own time in each). */
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
    icon: History,
    category: "Time",
    description:
      "Brush a window of years, or press play and watch it unfold on the map. Every chart and the dashboard follow the same window.",
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
    label: "Explore",
    icon: ChartColumn,
    category: "Analytics",
    description:
      "Pick what to explore and Keasy draws it. Click a bar to filter, drag across time to narrow it; every filter lands in one line.",
    steps: [
      { text: "Pick what to explore", start: 0 },
      { text: "Click a bar to filter", start: 6.0 },
      { text: "Drag across time", start: 13.0 },
      { text: "Every filter lands in the bar", start: 19.5 },
    ],
    ...files("explore"),
  },
  {
    id: "map",
    label: "Placement",
    icon: MapPin,
    category: "Graph",
    description:
      "Place a graph’s points by any two of its columns. Here, airports by longitude and latitude: search Spain, lasso the peninsula, frame what you kept.",
    steps: [
      { text: "A graph of airports", start: 0 },
      { text: "Put it on a map", start: 6.1 },
      { text: "Find every airport in Spain", start: 19.2 },
      { text: "Lasso the peninsula", start: 30.9 },
      { text: "Frame what you kept", start: 42.7 },
    ],
    ...files("map"),
  },
  {
    id: "crossfilter",
    label: "Crossfilter",
    icon: ListFilter,
    category: "Analytics",
    description:
      "Click a country, drag across longitude, and the same filter reaches every chart and the graph, framed on what it keeps.",
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
    icon: Sparkles,
    category: "AI",
    description:
      "Every answer is a query over what is in view, drawn as a chart. Add it to the dashboard, or filter the page to the rows it found.",
    steps: [
      { text: "Filter: women only", start: 0 },
      { text: "Ask in plain words", start: 5.0 },
      { text: "The answer, with its chart", start: { light: 15.5, dark: 16.9 } },
      { text: "Add it to the dashboard", start: { light: 20.8, dark: 22.3 } },
    ],
    ...files("ask"),
  },
  {
    id: "rules",
    label: "Rules",
    icon: ShieldCheck,
    category: "Data quality",
    description:
      "Write your rules once. See every record that breaks one, frame where they are, or keep only what conforms.",
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
