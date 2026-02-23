// Ensure trailing slash so url("/foo") → "/base/foo" (not "/basefoo")
const BASE = import.meta.env.BASE_URL.replace(/\/?$/, "/");

/**
 * Resolves a path relative to the configured base URL.
 * Works transparently in local dev (base = "/") and GitHub Pages (base = "/keasy.github.io/").
 *
 * @example
 *   url("/about")              → "/keasy.github.io/about"
 *   url("/logos/think-it.svg") → "/keasy.github.io/logos/think-it.svg"
 *   url("#faq")                → "#faq"
 *   url("https://example.com") → "https://example.com"
 */
export function url(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE}${path.slice(1)}`;
}
