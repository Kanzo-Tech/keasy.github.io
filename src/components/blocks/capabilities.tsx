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
import { cn } from "@/lib/utils";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

// The demos themselves play in the hero; here each capability is a card.
const capabilities: Capability[] = [
  {
    icon: MousePointerClick,
    title: "Every column gets a chart",
    description:
      "Pick what to explore and Keasy draws it. Click a bar to filter, drag across time to narrow it.",
  },
  {
    icon: MapPinned,
    title: "See how things connect, and where",
    description:
      "Follow relationships in the graph, or place points by their columns and see patterns no link drew.",
  },
  {
    icon: Sparkles,
    title: "Ask in plain words",
    description:
      "Every answer is a query that really ran over what's in view, with its chart. No numbers made up.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards your team shares",
    description:
      "Shape what you found into a dashboard. Everyone sees it, and who made it and when.",
  },
  {
    icon: ShieldCheck,
    title: "Rules that catch bad data",
    description:
      "Write your rules once and see every record that breaks one, or only the ones that pass.",
  },
];

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

        <div className="mx-auto mt-12 max-w-6xl lg:mt-20">
          <DashedLine />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((capability, i) => (
              <div
                key={capability.title}
                className={cn(
                  "relative px-0 py-8 sm:px-6",
                  i === 0 && "lg:pl-0",
                  i === capabilities.length - 1 && "lg:pr-0",
                )}
              >
                <CapabilityText capability={capability} />
                {i < capabilities.length - 1 && (
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
      </div>
    </section>
  );
};

function CapabilityText({ capability: { icon: Icon, title, description } }: { capability: Capability }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-field">
        <Icon className="size-5" />
      </div>
      <h3 className="font-display text-lg font-medium tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
