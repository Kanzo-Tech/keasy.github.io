import { useEffect, useRef, useState } from "react";

import { ArrowRight, Maximize2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DEMOS, startOf, type Demo } from "@/content/demos";
import { useTheme } from "@/hooks/use-theme";
import { url } from "@/lib/url";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const [active, setActive] = useState(DEMOS[0].id);
  const demo = DEMOS.find((d) => d.id === active) ?? DEMOS[0];

  return (
    <section id="product" className="pt-28 lg:pt-40">
      <div className="container flex flex-col items-center text-center">
        <a
          href="#capabilities"
          className="border-primary/25 bg-primary/8 text-foreground hover:bg-primary/12 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition-colors"
        >
          <span className="bg-primary size-1.5 rounded-full" />
          Ask your data in plain words
          <ArrowRight className="size-3.5" />
        </a>

        <h1 className="text-foreground mt-6 max-w-3xl text-4xl tracking-tight text-balance md:text-5xl lg:text-6xl">
          See your data. Ask it anything.
        </h1>

        <p className="text-muted-foreground mt-5 max-w-2xl text-lg text-balance md:text-xl">
          Connect your data where it lives, explore every column visually,
          filter with a click, and let AI answer the rest.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <a href="mailto:contact@kanzo.tech">Book a demo</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={url("/#capabilities")}>
              See how it works
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>

      <div className="container mt-14 mb-24 md:mt-16 lg:mb-32">
        {DEMOS.length > 1 && (
          <div
            role="tablist"
            aria-label="Product demos"
            className="mb-5 flex justify-center gap-2 overflow-x-auto pb-1"
          >
            {DEMOS.map((d) => (
              <button
                key={d.id}
                role="tab"
                aria-selected={d.id === demo.id}
                aria-controls="demo-player"
                onClick={() => setActive(d.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors",
                  d.id === demo.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground hover:text-foreground",
                )}
              >
                {d.label}
              </button>
            ))}
          </div>
        )}

        <DemoPlayer demo={demo} />
      </div>
    </section>
  );
};

/** A window onto the app, on the brand's glow: a soft green by day, the neon by night. Under it, the
 * demo's steps: the one playing lights up, and pressing one jumps there. The window's bar carries the
 * demo's proof line as its title, and a button to watch it full screen. */
function DemoPlayer({ demo }: { demo: Demo }) {
  const theme = useTheme();
  // Every demo's video for the side worn is in the page: a tab shows its own and plays it from the
  // top, at once, while the others wait paused. The shown one loads first; the rest only once it can
  // play through (`warm`), so the page's first load carries one video, not all of them.
  const videos = useRef(new Map<string, HTMLVideoElement>());
  const [warm, setWarm] = useState(false);
  const [time, setTime] = useState(0);
  const side = theme ?? "light";
  const current = demo.steps.findLastIndex((step) => startOf(step, side) <= time + 0.05);

  useEffect(() => {
    for (const [id, v] of videos.current) {
      if (id === demo.id) {
        v.currentTime = 0;
        void v.play();
      } else v.pause();
    }
    setTime(0);
  }, [demo.id, theme]);

  const seek = (start: number) => {
    const v = videos.current.get(demo.id);
    if (!v) return;
    v.currentTime = start;
    setTime(start);
    void v.play();
  };

  const enlarge = () => {
    const v = videos.current.get(demo.id) as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | undefined;
    if (!v) return;
    if (v.requestFullscreen) void v.requestFullscreen();
    else v.webkitEnterFullscreen?.(); // iOS Safari has no Fullscreen API on elements, only on video.
  };

  return (
    <div id="demo-player" className="relative mx-auto max-w-6xl">
      <div
        aria-hidden
        className="bg-primary/15 dark:bg-primary/20 absolute -inset-x-6 -inset-y-8 -z-10 rounded-[3rem] blur-3xl md:-inset-x-12"
      />
      <div className="bg-card overflow-hidden rounded-box border shadow-xl">
        <div className="bg-muted/60 relative flex h-9 items-center gap-1.5 border-b px-3">
          <span className="bg-border size-2.5 rounded-full" />
          <span className="bg-border size-2.5 rounded-full" />
          <span className="bg-border size-2.5 rounded-full" />
          {/* The proof line as the window's address bar. */}
          <div className="pointer-events-none absolute inset-x-0 flex justify-center px-20">
            <p className="bg-background text-muted-foreground flex max-w-full min-w-0 items-center gap-1.5 rounded-selector border px-3 py-0.5 font-mono text-[11px] tracking-wide md:min-w-80 md:justify-center md:text-xs">
              <Search className="size-3 shrink-0" />
              <span className="truncate">{demo.stat}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={enlarge}
            aria-label="Watch full screen"
            title="Watch full screen"
            className="text-muted-foreground hover:text-foreground ml-auto rounded-selector p-1 transition-colors"
          >
            <Maximize2 className="size-3.5" />
          </button>
        </div>
        <div className="relative aspect-video w-full">
          {theme ? (
            DEMOS.map((d) => (
              <video
                key={`${d.id}-${theme}`}
                ref={(v) => {
                  if (v) videos.current.set(d.id, v);
                  else videos.current.delete(d.id);
                }}
                src={url(d.video[theme])}
                poster={url(d.poster[theme])}
                aria-label={`${d.label} demo`}
                aria-hidden={d.id !== demo.id}
                autoPlay={d.id === demo.id}
                muted
                loop
                playsInline
                preload={d.id === demo.id || warm ? "auto" : "none"}
                onCanPlayThrough={() => {
                  if (d.id === demo.id) setWarm(true);
                }}
                onTimeUpdate={(e) => {
                  if (d.id === demo.id) setTime(e.currentTarget.currentTime);
                }}
                className={cn(
                  "absolute inset-0 size-full object-cover transition-opacity duration-300",
                  d.id === demo.id ? "opacity-100" : "pointer-events-none opacity-0",
                )}
              />
            ))
          ) : (
            <>
              <img
                src={url(demo.poster.light)}
                alt=""
                className="absolute inset-0 size-full object-cover dark:hidden"
              />
              <img
                src={url(demo.poster.dark)}
                alt=""
                className="absolute inset-0 hidden size-full object-cover dark:block"
              />
            </>
          )}
        </div>
      </div>

      <ol className="mt-5 flex flex-wrap justify-center gap-2">
        {demo.steps.map((step, i) => (
          <li key={step.text}>
            <button
              type="button"
              onClick={() => seek(startOf(step, side))}
              aria-current={i === current ? "step" : undefined}
              className={cn(
                "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors",
                i === current
                  ? "border-primary/40 bg-primary/10 text-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "font-mono text-xs",
                  i === current ? "text-primary" : "text-muted-foreground",
                )}
              >
                {i + 1}
              </span>
              {step.text}
            </button>
          </li>
        ))}
      </ol>

    </div>
  );
}
