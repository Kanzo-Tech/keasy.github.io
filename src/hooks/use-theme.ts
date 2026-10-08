import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

/** The side the page wears, following the `.dark` class the theme toggle writes on `<html>`.
 * `null` until mounted, since the server cannot know it. */
export function useTheme(): Theme | null {
  const [theme, setTheme] = useState<Theme | null>(null);
  useEffect(() => {
    const root = document.documentElement;
    const read = () => setTheme(root.classList.contains("dark") ? "dark" : "light");
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return theme;
}
