import { useEffect, useRef, useState } from "react";

import {
  Bus,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  HeartPulse,
  House,
  Landmark,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/ui/button";

type Art = "bars" | "dots" | "lines";

interface Sector {
  icon: LucideIcon;
  title: string;
  question: string;
  art: Art;
  /** The art's ground and ink, one chart colour each, so both follow the theme. */
  tint: string;
  ink: string;
}

// One data story per sector is coming; until then, each card is the question it will answer.
const sectors: Sector[] = [
  {
    icon: House,
    title: "Housing",
    question: "How many homes stand empty in a city short of housing?",
    art: "bars",
    tint: "bg-chart-8/12",
    ink: "fill-chart-8",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    question: "Do rural patients wait longer for the same surgery?",
    art: "dots",
    tint: "bg-chart-5/12",
    ink: "fill-chart-5",
  },
  {
    icon: Users,
    title: "Social research",
    question: "Who is falling out of the job market, and where?",
    art: "lines",
    tint: "bg-chart-4/12",
    ink: "fill-chart-4",
  },
  {
    icon: FlaskConical,
    title: "Research",
    question: "Does public research money keep going to the same few labs?",
    art: "dots",
    tint: "bg-chart-1/12",
    ink: "fill-chart-1",
  },
  {
    icon: Landmark,
    title: "Public spending",
    question: "Which contracts are split to stay just under the tender threshold?",
    art: "lines",
    tint: "bg-chart-3/12",
    ink: "fill-chart-3",
  },
  {
    icon: Bus,
    title: "Transport",
    question: "Which neighbourhoods are over an hour from a hospital by bus?",
    art: "dots",
    tint: "bg-chart-2/12",
    ink: "fill-chart-2",
  },
  {
    icon: Truck,
    title: "Urban logistics",
    question: "How many delivery vans cross the city centre half empty?",
    art: "bars",
    tint: "bg-chart-6/12",
    ink: "fill-chart-6",
  },
];

// The art is decoration, drawn from a fixed seed so the server and the browser draw the same marks.
type Mark = { x: number; y: number; w: number; h: number; r: number };

function marks(art: Art, seed: number): Mark[] {
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const round = (n: number) => Math.round(n * 10) / 10;
  if (art === "bars")
    return Array.from({ length: 11 }, (_, i) => {
      const h = round(20 + rnd() * 80);
      return { x: i * 24, y: round(110 - h), w: 16, h, r: 3 };
    });
  if (art === "dots")
    return Array.from({ length: 34 }, () => ({ x: round(rnd() * 250), y: round(rnd() * 100), w: 9, h: 9, r: 4.5 }));
  return Array.from({ length: 5 }, (_, i) => ({ x: round(rnd() * 40), y: 10 + i * 22, w: round(140 + rnd() * 120), h: 8, r: 4 }));
}

export const UseCases = () => {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = () => {
    const el = track.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 1,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
    });
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const page = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    // A card and the gap after it, as many as fit in view.
    const step = card.getBoundingClientRect().width + 16;
    const perView = Math.max(1, Math.floor(el.clientWidth / step));
    el.scrollBy({ left: direction * step * perView, behavior: "smooth" });
  };

  return (
    <section id="use-cases" className="overflow-x-clip pb-28 lg:pb-32">
      <div className="container">
        <SectionLabel>Sectors</SectionLabel>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mt-20">
          <div className="flex max-w-2xl flex-col gap-4">
            <h2 className="text-3xl tracking-tight text-balance md:text-4xl lg:text-5xl">
              The questions each sector asks
            </h2>
            <p className="text-muted-foreground leading-snug">
              Data spread over many files and many hands, and experts who need
              answers without a data team in between. One data story per
              sector, soon.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button
              variant="outline"
              size="icon-lg"
              className="rounded-full"
              aria-label="Previous sectors"
              aria-controls="sectors"
              disabled={edges.start}
              onClick={() => page(-1)}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon-lg"
              className="rounded-full"
              aria-label="Next sectors"
              aria-controls="sectors"
              disabled={edges.end}
              onClick={() => page(1)}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        {/* The track runs out to the viewport's right edge, past the container, so the next card
            shows that there is more. */}
        <ul
          id="sectors"
          ref={track}
          onScroll={measure}
          className="mt-10 mr-[calc(50%-50vw)] flex snap-x snap-mandatory scroll-px-0 gap-4 overflow-x-auto pr-[calc(50vw-50%)] pb-2 [scrollbar-width:none] lg:mt-12"
        >
          {sectors.map((sector, i) => (
            <li key={sector.title} className="shrink-0 snap-start">
              <SectorCard sector={sector} seed={i + 3} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

function SectorCard({ sector: { icon: Icon, title, question, art, tint, ink }, seed }: { sector: Sector; seed: number }) {
  return (
    <article className="bg-card flex h-80 w-68 flex-col overflow-hidden rounded-box border">
      <div className={`relative h-32 shrink-0 ${tint}`}>
        <span className="bg-background text-primary absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold shadow-xs">
          <span className="bg-primary size-1.5 rounded-full" />
          Data story · soon
        </span>
        <svg
          aria-hidden
          viewBox="0 0 264 110"
          className={`absolute right-4 bottom-3 h-[5.5rem] w-[13.5rem] opacity-80 ${ink}`}
        >
          {marks(art, seed).map((m, j) => (
            <rect key={j} x={m.x} y={m.y} width={m.w} height={m.h} rx={m.r} />
          ))}
        </svg>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <span className="bg-muted text-foreground inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1 text-xs font-medium">
          <Icon aria-hidden className="text-primary size-3.5" />
          {title}
        </span>
        <p className="font-display text-lg leading-snug font-medium tracking-tight">
          “{question}”
        </p>
      </div>
    </article>
  );
}
