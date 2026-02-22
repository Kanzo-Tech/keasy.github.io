import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Product",
    questions: [
      {
        question: "What is Keasy?",
        answer:
          "Keasy is a data discovery and cataloging platform. It processes data from cloud storage or local sources into RDF knowledge graphs, with automatic DCAT catalog generation, visual search, AI-powered exploration, and shape validation.",
      },
      {
        question: "Who is Keasy for?",
        answer:
          "Keasy is built for domain experts who need to discover and understand data without relying on engineering teams. It bridges the gap between raw data and the people who need it most.",
      },
      {
        question: "Do I need technical knowledge to use Keasy?",
        answer:
          "Not at all. Keasy provides an intuitive visual interface for searching and exploring your data. SPARQL and RDF work under the hood — you don't need to know them to get value from the platform.",
      },
    ],
  },
  {
    title: "Data",
    questions: [
      {
        question: "What data sources does Keasy support?",
        answer:
          "Keasy connects to Amazon S3, Google Cloud Storage, Azure Blob Storage, and local filesystems. We're continuously adding support for more sources.",
      },
      {
        question: "What standards does Keasy use?",
        answer:
          "Keasy is built on open standards: RDF for knowledge graphs, DCAT for data catalogs, and SHACL/ShEx for shape validation. This ensures interoperability and avoids vendor lock-in.",
      },
      {
        question: "How does Keasy ensure data quality?",
        answer:
          "Keasy validates your data against SHACL and ShEx shape constraints, helping you catch inconsistencies and ensure compliance with your data models.",
      },
    ],
  },
  {
    title: "Getting started",
    questions: [
      {
        question: "How can I try Keasy?",
        answer:
          "You can book a demo through our contact page. We'll walk you through the platform and discuss how Keasy fits your data needs.",
      },
      {
        question: "How long does it take to set up?",
        answer:
          "Keasy can be connected to your data sources in minutes. Once connected, catalog generation and indexing happen automatically.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section id="faq" className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <a href="/contact" className="underline underline-offset-4">
                get in touch
              </a>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
