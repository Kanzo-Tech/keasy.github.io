import { Combine, Globe, Sparkles } from "lucide-react";

import { DashedLine } from "../dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Combine,
    title: "Break down data silos",
    description:
      "Connect scattered sources — cloud storage, local files, databases — into a single, unified data space your whole organization can use.",
  },
  {
    icon: Globe,
    title: "Open standards, zero lock-in",
    description:
      "Built on DCAT, SPARQL, and SHACL. Your catalogs and queries use open W3C standards — no proprietary formats, fully portable.",
  },
  {
    icon: Sparkles,
    title: "No PhD required",
    description:
      "Keasy handles the complexity of semantic web technologies behind the scenes. Domain experts catalog, search, and validate data through an intuitive UI and AI.",
  },
];

export const Features = () => {
  return (
    <section id="why-keasy" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            KNOW YOUR DATA. OWN YOUR DATA.
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-5xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            From raw data to actionable knowledge
          </h2>
          <p className="text-muted-foreground leading-snug">
            Keasy turns raw, scattered data into a governed knowledge
            base that anyone in your organization can trust and explore.
          </p>
        </div>

        {/* Value propositions */}
        <Card className="mx-auto mt-8 max-w-5xl rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                  <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                    <item.icon className="text-foreground size-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
