import Marquee from "react-fast-marquee";

import { url } from "@/lib/url";
import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  href: string;
};

export const Logos = () => {
  const companies = [
    {
      name: "Think-it",
      logo: url("/logos/think-it.svg"),
      href: "https://think-it.io/",
    },
    {
      name: "MSI Digital Builders",
      logo: url("/logos/msi.png"),
      href: "https://msidigitalbuilders.com/",
    },
    {
      name: "Universidad de Málaga",
      logo: url("/logos/uma.png"),
      href: "https://www.uma.es/",
    },
    {
      name: "Evidenze",
      logo: url("/logos/evidenze.svg"),
      href: "https://evidenze.com/",
    },
  ];

  return (
    <section className="overflow-hidden pb-28 lg:pb-32">
      <div className="container space-y-8 lg:space-y-10">
        <h2 className="text-muted-foreground text-center font-mono text-xs font-medium tracking-[0.2em] uppercase">
          Built with
        </h2>

        <div className="flex w-full flex-col items-center">
          <LogoRow companies={companies} gridClassName="grid-cols-4" />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {companies.map((company, index) => (
            <a href={company.href} target="_blank" key={index}>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 w-auto object-contain opacity-60 grayscale brightness-0 transition-opacity hover:opacity-80 dark:invert"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((company, index) => (
            <a
              href={company.href}
              target="_blank"
              key={index}
              className="mx-8 inline-block transition-opacity hover:opacity-70"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 w-auto object-contain opacity-60 grayscale brightness-0 dark:invert"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </>
  );
};
