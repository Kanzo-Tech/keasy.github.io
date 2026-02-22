// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Keasy - Data Discovery & Cataloging Platform";
export const SITE_DESCRIPTION =
  "Discover, catalog, and explore your data with knowledge graphs and AI. Keasy bridges the gap between raw data and domain expertise.";

export const GITHUB_URL = "https://github.com/Kanzo-Tech";

export const SITE_METADATA = {
  title: {
    default: "Keasy - Data Discovery & Cataloging Platform",
    template: "%s | Keasy",
  },
  description:
    "Discover, catalog, and explore your data with knowledge graphs and AI. Keasy bridges the gap between raw data and domain expertise.",
  keywords: [
    "data discovery",
    "data cataloging",
    "knowledge graphs",
    "RDF",
    "DCAT",
    "SPARQL",
    "SHACL",
    "ShEx",
    "data spaces",
    "AI data exploration",
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
    title: "Keasy - Data Discovery & Cataloging Platform",
    description:
      "Discover, catalog, and explore your data with knowledge graphs and AI. Keasy bridges the gap between raw data and domain expertise.",
    siteName: "Keasy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keasy - Data Discovery & Cataloging Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keasy - Data Discovery & Cataloging Platform",
    description:
      "Discover, catalog, and explore your data with knowledge graphs and AI. Keasy bridges the gap between raw data and domain expertise.",
    images: ["/og-image.jpg"],
  },
};
