import { cn } from "@/lib/utils";

export const AboutSection = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: `${import.meta.env.BASE_URL}about/1.webp`, alt: "Keasy platform" },
            { src: `${import.meta.env.BASE_URL}about/2.webp`, alt: "Data exploration" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="Our vision"
          paragraphs={[
            "We believe every organization sits on a wealth of untapped data. The challenge isn't collecting it — it's making it understandable and accessible to the people who know it best.",
            "Keasy is built on open standards like RDF, DCAT, and SHACL/ShEx, ensuring your data remains interoperable and free from vendor lock-in. We bring the power of knowledge graphs and AI to domain experts through an intuitive interface — no technical background required.",
          ]}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          title="Our mission"
          paragraphs={[
            "Keasy exists to put data discovery in the hands of domain experts. We connect to your data sources — whether cloud storage or local filesystems — and automatically transform raw data into rich, explorable knowledge graphs.",
            "From DCAT catalog generation to AI-powered exploration, every feature is designed to remove the barriers between people and the data they need. No more waiting on engineering. No more siloed knowledge.",
          ]}
        />
        <ImageSection
          images={[
            { src: `${import.meta.env.BASE_URL}about/3.webp`, alt: "Knowledge graph visualization" },
            { src: `${import.meta.env.BASE_URL}about/4.webp`, alt: "Data cataloging" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="size-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
}

export function TextSection({ title, paragraphs }: TextSectionProps) {
  return (
    <div className="flex-1 space-y-4 text-lg font-medium md:space-y-6">
      {title && <h2 className="text-foreground text-4xl font-medium">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
