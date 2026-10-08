import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

/** The closing call to action, on the brand fill: deep green by day, the neon by night. */
export const CTA = () => {
  return (
    <section id="contact" className="container">
      <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-box px-6 py-14 md:px-14 md:py-20">
        <div
          aria-hidden
          className="bg-primary-foreground/10 absolute -top-24 -right-24 size-72 rounded-full blur-3xl"
        />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl tracking-tight text-balance md:text-4xl lg:text-5xl">
              Stop waiting for data. Start exploring it.
            </h2>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              We’ll show you Keasy on data like yours.
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shrink-0"
            asChild
          >
            <a href="mailto:contact@kanzo.tech">
              Book a demo
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
