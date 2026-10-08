import { Globe, Lock, MousePointerClick } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { SectionLabel } from "@/components/section-label";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: MousePointerClick,
    title: "No code, no waiting",
    description:
      "Domain experts explore, filter and ask on their own. No SQL, no SPARQL, no ticket to the data team.",
  },
  {
    icon: Lock,
    title: "Your data stays yours",
    description:
      "Mapping runs in your browser, Keasy never holds a model key, and every organization has its own workspace and roles.",
  },
  {
    icon: Globe,
    title: "Open by design",
    description:
      "Built on open standards, so what you build in Keasy stays portable — no proprietary formats, no lock-in.",
  },
];

const standards = ["RDF", "SHACL", "ShEx", "Parquet", "OIDC"];

export const Features = () => {
  return (
    <section id="why-keasy" className="pb-28 lg:pb-32">
      <div className="container">
        <SectionLabel>Why Keasy</SectionLabel>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-5xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Built for the people who know the data
          </h2>
          <p className="text-muted-foreground leading-snug">
            The people closest to the data are often the furthest from it.
            Keasy closes that gap — without giving up control.
          </p>
        </div>

        {/* Value propositions */}
        <Card className="mx-auto mt-8 max-w-5xl rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                  <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-field">
                    <item.icon className="size-5" />
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

        <p className="text-muted-foreground mt-8 flex flex-wrap justify-center gap-x-4 gap-y-1 font-mono text-xs tracking-wide">
          {standards.map((standard) => (
            <span key={standard}>{standard}</span>
          ))}
        </p>
      </div>
    </section>
  );
};
