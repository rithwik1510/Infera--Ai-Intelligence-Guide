export const primaryNav = [
  { id: "news", label: "News", href: "/news" },
  { id: "comparisons", label: "Comparisons", href: "/comparisons" },
  { id: "learn", label: "Learn", href: "/learn" },
  { id: "models", label: "Models", href: "/models" },
];

export type PrimaryNavItem = (typeof primaryNav)[number];
