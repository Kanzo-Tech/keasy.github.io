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
          "Keasy is a visual data exploration platform with AI. Connect your data, and every column gets a chart you can filter with a click. Follow relationships in a graph or on a map, ask questions in plain words, build dashboards and check your data against quality rules.",
      },
      {
        question: "Who is Keasy for?",
        answer:
          "For the people who know the data best — analysts, researchers, operations and domain experts — who want answers without waiting on an engineering team.",
      },
      {
        question: "Do I need to know SQL, SPARQL or RDF?",
        answer:
          "No. You pick, click and ask. Keasy writes the queries behind the scenes; open standards are there for portability, not as homework.",
      },
    ],
  },
  {
    title: "Data & security",
    questions: [
      {
        question: "Where does my data live?",
        answer:
          "Where it already is. Keasy connects to your storage with credentials scoped to what it needs, and mapping runs in your browser, so files are not copied to our servers.",
      },
      {
        question: "How does the AI work, and what does it see?",
        answer:
          "Every answer is a query over what is in view, shown with its result. Keasy itself never holds a model key: requests go through an AI gateway, each one tied to your organization.",
      },
      {
        question: "Can several teams or organizations use it?",
        answer:
          "Yes. Each organization has its own workspace, and people get reader, editor or admin roles. Your instance can also wear your own branding.",
      },
      {
        question: "How does Keasy check data quality?",
        answer:
          "You write rules once (SHACL) and Keasy shows every record that breaks them, over all your data or just the part you have selected.",
      },
    ],
  },
  {
    title: "Getting started",
    questions: [
      {
        question: "How can I try Keasy?",
        answer:
          "Book a demo and we will walk you through it on data like yours, and talk about how Keasy fits your team.",
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
              <a href="mailto:contact@kanzo.tech" className="underline underline-offset-4">
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
