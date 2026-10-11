import { DashedLine } from "@/components/dashed-line";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

// The demos themselves play in the hero; here is the path through them, in four steps.
const steps = [
  {
    title: "Connect",
    description:
      "Point Keasy at your files where they live. They are mapped in your browser into one graph, typed and linked — nothing is copied to us.",
  },
  {
    title: "Explore",
    description:
      "Every column gets a chart. Place points by any column, follow the links, play time forward — and one filter moves every view.",
  },
  {
    title: "Ask",
    description:
      "Ask in plain words. Every answer is a query over what’s in view, with its chart, so you can check it.",
  },
  {
    title: "Check and share",
    description:
      "Hold the data to your rules, keep what conforms, and turn what you found into a dashboard the team shares.",
  },
];

export const Capabilities = () => {
  return (
    <section id="capabilities" className="pb-28 lg:pb-32">
      <div className="container">
        <SectionLabel>How it works</SectionLabel>

        <div className="mx-auto mt-10 grid max-w-5xl items-center gap-3 md:gap-0 lg:mt-20 lg:grid-cols-2">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
            From a question to an answer, in a few clicks
          </h2>
          <p className="text-muted-foreground leading-snug lg:pl-10">
            Your data stops being a pile of files and becomes one connected
            body of knowledge. Four steps, all in your browser, all on your
            own.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl lg:mt-20">
          <DashedLine />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={cn(
                  "relative flex flex-col gap-3 px-0 py-8 sm:px-6",
                  i === 0 && "lg:pl-0",
                  i === steps.length - 1 && "lg:pr-0",
                )}
              >
                <span className="text-primary font-mono text-xs font-medium tracking-[0.15em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <DashedLine
                    orientation="vertical"
                    className="absolute top-0 right-0 max-lg:hidden"
                  />
                )}
              </li>
            ))}
          </ol>
          <DashedLine />
        </div>

        <p className="font-display mx-auto mt-12 max-w-3xl text-center text-xl leading-snug font-medium text-balance md:text-2xl lg:mt-16">
          <span className="text-primary">One filter, everywhere.</span> A click
          on a chart, a lasso on the graph, a window of time, an answer from
          Ask or a rule — each narrows every other view at once.
        </p>
      </div>
    </section>
  );
};
