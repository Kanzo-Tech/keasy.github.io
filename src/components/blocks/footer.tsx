import { ArrowUpRight } from "lucide-react";

import { CTA } from "@/components/blocks/cta";
import { url } from "@/lib/url";

export function Footer() {
  const navigation = [
    { name: "Product", href: url("/#capabilities") },
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
    <footer className="flex flex-col items-center gap-14 pt-12 lg:pt-16">
      <CTA />

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

      <div className="container flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
        <picture>
          <img
            src={url("/logos/funded-by-eu-dark.png")}
            alt="Financiado por la Unión Europea — NextGenerationEU"
            className="block h-10 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 dark:hidden"
          />
          <img
            src={url("/logos/funded-by-eu-white.png")}
            alt="Financiado por la Unión Europea — NextGenerationEU"
            className="hidden h-10 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 dark:block"
          />
        </picture>

        <picture>
          <img
            src={url("/logos/plan-recuperacion-dark.png")}
            alt="Plan de Recuperación, Transformación y Resiliencia — NextGenerationEU"
            className="block h-10 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 dark:hidden"
          />
          <img
            src={url("/logos/plan-recuperacion-white.png")}
            alt="Plan de Recuperación, Transformación y Resiliencia — NextGenerationEU"
            className="hidden h-10 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 dark:block"
          />
        </picture>
      </div>

      {/* KEASY in the letters of the Kanzo logo's pill, edge to edge, fading and cut at the foot. */}
      <div className="text-primary mt-10 w-full px-2.5 md:mt-14 lg:mt-20 lg:px-4">
        <svg
          viewBox="92.4 5.9 39.4 8.9"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          role="img"
          aria-label="Keasy"
        >
          <defs>
            <linearGradient
              id="keasy-fade"
              x1="0"
              y1="6.1"
              x2="0"
              y2="15.9"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path fill="url(#keasy-fade)" d="M92.6534 15.7212V6.29052H93.4752V10.5343H94.9706C96.4391 10.5343 97.0588 10.0358 97.49 8.91763L98.4869 6.29052H99.3491L98.2175 9.24097C97.9211 10.0089 97.5304 10.5478 96.9241 10.8846L99.7398 15.7212H98.7968L96.1697 11.181C95.8194 11.2753 95.4287 11.3157 94.9706 11.3157H93.4752V15.7212H92.6534ZM101.298 15.7212V6.29052H106.848V7.05844H102.12V10.5343H106.498V11.2888H102.12V14.9533H106.997V15.7212H101.298ZM107.743 15.7212L111.65 6.29052H112.431L116.338 15.7212H115.476L114.492 13.3501H109.588L108.618 15.7212H107.743ZM109.912 12.5956H114.182L112.04 7.40873L109.912 12.5956ZM120.197 15.8963C118.041 15.8963 116.654 14.7377 116.586 12.9189H117.395C117.476 14.3066 118.567 15.1149 120.197 15.1149C121.746 15.1149 122.703 14.4278 122.703 13.3366C122.703 12.3531 121.935 11.7738 120.035 11.3561C117.718 10.8172 116.735 10.0358 116.735 8.62124C116.735 7.11233 117.961 6.11538 119.968 6.11538C122.043 6.11538 123.309 7.16622 123.377 8.985H122.568C122.501 7.65123 121.544 6.89677 119.968 6.89677C118.446 6.89677 117.556 7.58387 117.556 8.62124C117.556 9.56431 118.257 10.1436 120.237 10.5882C122.622 11.1406 123.538 11.9759 123.538 13.3231C123.538 14.8994 122.245 15.8963 120.197 15.8963ZM127.168 15.7212V12.2588L123.597 6.29052H124.541L127.585 11.3831L130.617 6.29052H131.546L127.976 12.2318V15.7212H127.168Z" />
        </svg>
      </div>
    </footer>
  );
}
