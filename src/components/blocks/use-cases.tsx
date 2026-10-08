import {
  FlaskConical,
  Gauge,
  HeartPulse,
  Landmark,
  Plane,
  ShieldCheck,
} from "lucide-react";

import { SectionLabel } from "@/components/section-label";

const cases = [
  {
    icon: FlaskConical,
    title: "Research data",
    description: "Let researchers explore their own datasets without a data engineer in the loop.",
  },
  {
    icon: HeartPulse,
    title: "Health evidence",
    description: "Filter cohorts and outcomes visually, and ask questions of the evidence.",
  },
  {
    icon: Plane,
    title: "Mobility & geo",
    description: "Put routes, places and assets on a map and see how they connect.",
  },
  {
    icon: ShieldCheck,
    title: "Data quality",
    description: "Write the rules once and see every record that breaks them.",
  },
  {
    icon: Gauge,
    title: "Operations",
    description: "Turn scattered operational files into dashboards the whole team reads.",
  },
  {
    icon: Landmark,
    title: "Public sector",
    description: "Open standards and per-organization access for data shared across bodies.",
  },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="pb-28 lg:pb-32">
      <div className="container">
        <SectionLabel>Use cases</SectionLabel>
        <h2 className="mx-auto mt-10 max-w-3xl text-center text-3xl tracking-tight text-balance md:text-4xl lg:mt-20 lg:text-5xl">
          Made for the people who know the data
        </h2>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-card rounded-box border p-6">
              <Icon className="text-primary size-5" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
