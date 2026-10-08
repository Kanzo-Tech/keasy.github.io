import {
  LayoutDashboard,
  MapPinned,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { SectionLabel } from "@/components/section-label";
import { useTheme } from "@/hooks/use-theme";
import { url } from "@/lib/url";
import { cn } from "@/lib/utils";

interface Loop {
  light: string;
  dark: string;
  poster: { light: string; dark: string };
}

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  /** A short loop from the demos (`public/videos/<id>/`), once one is recorded for it. */
  loop?: Loop;
}

/** A demo's close-up loop and its posters, from `public/videos/<id>/`. */
const closeup = (id: string): Loop => ({
  light: `/videos/${id}/closeup-light.mp4`,
  dark: `/videos/${id}/closeup-dark.mp4`,
  poster: {
    light: `/videos/${id}/poster-closeup-light.webp`,
    dark: `/videos/${id}/poster-closeup-dark.webp`,
  },
});

// Each capability with a close-up (cut from its demo, so it reads at this size) is a row of its own,
// the video alternating sides; the rest wait as cards under them until their demo is recorded.
const capabilities: Capability[] = [
  {
    icon: MousePointerClick,
    title: "Every column gets a chart",
    description:
      "Pick what to explore and Keasy draws it for you. Click a bar to filter, drag across time to narrow it, and watch every chart answer at once.",
    loop: closeup("explore"),
  },
  {
    icon: MapPinned,
    title: "See how things connect, and where",
    description:
      "Follow relationships in the graph, or put it on a map when your data has a place — longitude across, latitude up, and every point lands where it is.",
    loop: closeup("map"),
  },
  {
    icon: Sparkles,
    title: "Ask in plain words",
    description:
      "Ask about what's on the page and get the answer as a query that really ran, with its chart and the rows behind it — no numbers made up.",
    loop: closeup("ask"),
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards your team shares",
    description:
      "Shape what you found into a dashboard. Everyone in the workspace sees it, and it says who made it and when.",
  },
  {
    icon: ShieldCheck,
    title: "Rules that catch bad data",
    description:
      "Write your rules once and see every record that breaks one — violations in red, warnings in amber — then show just those, or just the ones that pass.",
    loop: closeup("rules"),
  },
];

const shown = capabilities.filter((c) => c.loop);
const waiting = capabilities.filter((c) => !c.loop);

export const Capabilities = () => {
  return (
    <section id="capabilities" className="pb-28 lg:pb-32">
      <div className="container">
        <SectionLabel>What you can do</SectionLabel>

        <div className="mx-auto mt-10 grid max-w-5xl items-center gap-3 md:gap-0 lg:mt-20 lg:grid-cols-2">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
            From a question to an answer, in a few clicks
          </h2>
          <p className="text-muted-foreground leading-snug lg:pl-10">
            No queries to write and no tickets to file. Keasy turns your data
            into something you can see, filter and ask — on your own.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-16 lg:mt-20 lg:gap-24">
          {shown.map((capability, i) => (
            <div
              key={capability.title}
              className={cn(
                "grid items-center gap-8 lg:gap-12",
                i % 2 === 0 ? "lg:grid-cols-[1fr_2fr]" : "lg:grid-cols-[2fr_1fr]",
              )}
            >
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <CapabilityText capability={capability} large />
              </div>
              <LoopVideo loop={capability.loop!} label={capability.title} />
            </div>
          ))}
        </div>

        {waiting.length > 0 && (
          <div className="mx-auto mt-16 max-w-6xl lg:mt-24">
            <DashedLine />
            <div
              className={cn(
                "grid sm:grid-cols-2",
                waiting.length >= 4 ? "lg:grid-cols-4" : waiting.length === 3 ? "lg:grid-cols-3" : "",
              )}
            >
              {waiting.map((capability, i) => (
                <div
                  key={capability.title}
                  className={cn(
                    "relative px-0 py-8 sm:px-6",
                    i === 0 && "lg:pl-0",
                    i === waiting.length - 1 && "lg:pr-0",
                  )}
                >
                  <CapabilityText capability={capability} />
                  {i < waiting.length - 1 && (
                    <DashedLine
                      orientation="vertical"
                      className="absolute top-0 right-0 max-lg:hidden"
                    />
                  )}
                </div>
              ))}
            </div>
            <DashedLine />
          </div>
        )}
      </div>
    </section>
  );
};

function CapabilityText({
  capability: { icon: Icon, title, description },
  large,
}: {
  capability: Capability;
  large?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-field">
        <Icon className="size-5" />
      </div>
      <h3
        className={cn(
          "font-display tracking-tight",
          large ? "text-2xl md:text-3xl" : "text-lg font-medium",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-muted-foreground leading-relaxed",
          large ? "text-base md:text-lg" : "text-sm",
        )}
      >
        {description}
      </p>
    </div>
  );
}

function LoopVideo({ loop, label }: { loop: Loop; label: string }) {
  const theme = useTheme();
  return (
    <div className="bg-card aspect-video overflow-hidden rounded-box border shadow-lg">
      {theme && (
        <video
          key={theme}
          src={url(loop[theme])}
          poster={url(loop.poster[theme])}
          aria-label={label}
          autoPlay
          muted
          loop
          playsInline
          className="size-full object-cover"
        />
      )}
    </div>
  );
}
