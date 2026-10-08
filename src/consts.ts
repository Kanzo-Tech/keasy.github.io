// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Keasy — Visual data exploration with AI";
export const SITE_DESCRIPTION =
  "Explore your data visually and ask it anything. Every column gets a chart, every click filters, and AI answers in plain words — for the people who know the data.";

export const GITHUB_URL = "https://github.com/Kanzo-Tech";

export const SITE_METADATA = {
  title: {
    default: "Keasy — Visual data exploration with AI",
    template: "%s | Keasy",
  },
  description:
    "Explore your data visually and ask it anything. Every column gets a chart, every click filters, and AI answers in plain words — for the people who know the data.",
  keywords: [
    "visual data exploration",
    "AI data analysis",
    "ask your data",
    "crossfilter dashboards",
    "knowledge graphs",
    "graph visualization",
    "data quality rules",
    "SHACL",
    "RDF",
    "no-code analytics",
    "domain experts",
    "data governance",
  ],
  authors: [{ name: "Kanzo Tech" }],
  creator: "Kanzo Tech",
  publisher: "Kanzo Tech",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Keasy — Visual data exploration with AI",
    description:
      "Explore your data visually and ask it anything. Every column gets a chart, every click filters, and AI answers in plain words — for the people who know the data.",
    siteName: "Keasy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keasy — Visual data exploration with AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keasy — Visual data exploration with AI",
    description:
      "Explore your data visually and ask it anything. Every column gets a chart, every click filters, and AI answers in plain words — for the people who know the data.",
    images: ["/og-image.jpg"],
  },
};
