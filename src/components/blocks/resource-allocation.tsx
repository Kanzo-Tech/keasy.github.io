import { DashedLine } from "../dashed-line";

import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "DCAT catalog generation.",
    description:
      "Automatically generate standards-compliant data catalogs from your sources.",
    images: [
      {
        src: "/screenshots/catalog-generation.webp",
        alt: "DCAT catalog interface",
      },
    ],
    fade: false,
  },
  {
    title: "Multi-source connectors.",
    description: "Connect to Amazon S3, Google Cloud Storage, Azure Blob, or your local filesystem.",
    images: [
      {
        src: "/screenshots/source-connectors.webp",
        alt: "Multi-source connectors interface",
      },
    ],
    fade: false,
  },
];

const bottomItems = [
  {
    title: "Shape validation.",
    description:
      "Validate your data against SHACL/ShEx constraints to ensure quality and compliance.",
    images: [
      {
        src: "/screenshots/shape-validation.webp",
        alt: "Shape validation interface",
      },
    ],
    fade: true,
  },
  {
    title: "AI-powered exploration.",
    description:
      "Let domain experts ask questions in natural language and get answers from your data.",
    images: [
      {
        src: "/screenshots/ai-exploration.webp",
        alt: "AI exploration interface",
      },
    ],
    fade: false,
  },
  {
    title: "Visual search.",
    description:
      "An intuitive interface for domain experts — powered by SPARQL under the hood.",
    images: [
      {
        src: "/screenshots/visual-search.webp",
        alt: "Visual search interface",
      },
    ],
    fade: true,
  },
];

export const ResourceAllocation = () => {
  return (
    <section
      id="knowledge-graphs"
      className="overflow-hidden pb-28 lg:pb-32"
    >
      <div className="">
        <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Your complete data space lifecycle
        </h2>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />

          {/* Top Features Grid - 2 items */}
          <div className="relative container flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === topItems.length - 1} />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />

          {/* Bottom Features Grid - 3 items */}
          <div className="relative container flex max-md:flex-col">
            {bottomItems.map((item, i) => (
              <Item
                key={i}
                item={item}
                isLast={i === bottomItems.length - 1}
                className={i === 0 ? "md:pl-0" : i === bottomItems.length - 1 ? "md:pr-0" : ""}
              />
            ))}
          </div>
        </div>
        <DashedLine
          orientation="horizontal"
          className="container max-w-7xl scale-x-110"
        />
      </div>
    </section>
  );
};

interface ItemProps {
  item: (typeof topItems)[number] | (typeof bottomItems)[number];
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-1 flex-col gap-5 px-0 py-6 md:gap-8 md:px-6 md:py-8",
        className,
      )}
    >
      <div className="text-balance">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>

      <div className="relative">
        {item.fade && (
          <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
        )}
        {item.images.map((image, j) => (
          <div key={j}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-md object-cover object-left-top dark:hidden"
            />
            <img
              src={image.src.replace(/(\.\w+)$/, "-dark$1")}
              alt={image.alt}
              className="hidden w-full rounded-md object-cover object-left-top dark:block"
            />
          </div>
        ))}
      </div>

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
