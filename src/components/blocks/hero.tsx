import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Network,
  ShieldCheck,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Data cataloging",
    description: "Automatically process and catalog data from any source",
    icon: BookOpen,
  },
  {
    title: "Knowledge graphs",
    description: "Transform raw data into RDF graphs you can explore and query",
    icon: Network,
  },
  {
    title: "AI-powered exploration",
    description: "Let domain experts discover insights without writing code",
    icon: BrainCircuit,
  },
  {
    title: "Shape validation",
    description: "Ensure data quality with SHACL/ShEx validation",
    icon: ShieldCheck,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Your data space, made simple
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Discover, catalog, and explore your data with knowledge graphs and AI — bridging the gap between raw data and domain expertise.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="mailto:contact@kanzo.tech">Book a demo</a>
            </Button>
            <Button
              variant="outline"
              className="h-auto gap-2"
              asChild
            >
              <a
                href="#knowledge-graphs"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                See how it works
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <img
            src="/screenshots/hero.webp"
            alt="Keasy platform interface"
            className="w-full rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-r-none dark:hidden"
          />
          <img
            src="/screenshots/hero-dark.webp"
            alt="Keasy platform interface"
            className="hidden w-full rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-r-none dark:block"
          />
        </div>
      </div>
    </section>
  );
};
