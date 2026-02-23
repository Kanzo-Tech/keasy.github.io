import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { url } from "@/lib/url";

export function Footer() {
  const navigation = [
    { name: "Product", href: url("/#knowledge-graphs") },
    { name: "About Us", href: url("/about") },
    // { name: "Pricing", href: url("/pricing") }, // TODO: re-enable when pricing is defined
    // { name: "Blog", href: url("/blog") }, // TODO: re-enable when blog posts are ready
    { name: "FAQ", href: url("/#faq") },
    { name: "Contact", href: url("/#contact") },
  ];

  const social = [
    { name: "LinkedIn", href: "https://linkedin.com/company/kanzo-tech" },
  ];

  const legal = [{ name: "Privacy Policy", href: url("/privacy") }];

  return (
    <footer id="contact" className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Ready to discover your data?
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          See how Keasy bridges the gap between raw data and domain expertise —
          book a demo and explore your data space.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="mailto:contact@kanzo.tech">Get in touch</a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 w-full md:mt-14 lg:mt-20">
        <svg
          viewBox="0 0 260 85"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-label="Keasy"
        >
          <defs>
            <linearGradient
              id="keasy-gradient"
              x1="200"
              y1="0"
              x2="200"
              y2="110"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="95"
            textAnchor="middle"
            fill="url(#keasy-gradient)"
            style={{ fontSize: "120px", fontWeight: 600, fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
          >
            keasy
          </text>
        </svg>
      </div>
    </footer>
  );
}
