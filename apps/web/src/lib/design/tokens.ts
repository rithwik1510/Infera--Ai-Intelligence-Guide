export const designTokens = {
  mode: {
    dark: {
      background: "#0F172A",
      backgroundAlt: "#111D33",
      surface: "#1E293B",
      surfaceMuted: "#19253A",
      surfaceElevated: "#24324F",
      outlineSoft: "rgba(148, 163, 184, 0.16)",
      outlineStrong: "rgba(148, 163, 184, 0.28)",
      textPrimary: "#E2E8F0",
      textMuted: "#94A3B8",
    },
    light: {
      background: "#F9FAFB",
      backgroundAlt: "#F1F5F9",
      surface: "#FFFFFF",
      surfaceMuted: "#F1F5F9",
      surfaceElevated: "#E2E8F0",
      outlineSoft: "rgba(15, 23, 42, 0.08)",
      outlineStrong: "rgba(15, 23, 42, 0.16)",
      textPrimary: "#0F172A",
      textMuted: "#334155",
    },
  },
  accent: {
    primary: "#2563EB",
    primaryDeep: "#1E3A8A",
    secondary: "#06B6D4",
    tertiary: "#8B5CF6",
    quaternary: "#F59E0B",
    green: "#10B981",
  },
  chartPalette: {
    modelA: "#2563EB",
    modelB: "#F59E0B",
    modelC: "#8B5CF6",
    modelD: "#10B981",
  },
  gradients: {
    hero: ["#0F172A", "#1E293B"],
    aurora: ["#2563EB", "#06B6D4"],
    horizon: ["#1E3A8A", "#2563EB"],
    ember: ["#8B5CF6", "#F59E0B"],
    digest: ["#2563EB", "#06B6D4", "#10B981"],
    openai: ["#06B6D4", "#10B981"],
    anthropic: ["#8B5CF6", "#F59E0B"],
    deepmind: ["#2563EB", "#06B6D4"],
    xai: ["#0F172A", "#2563EB"],
  },
  typography: {
    display: "'Playfair Display', 'Fraunces', serif",
    heading: "'Playfair Display', 'Fraunces', serif",
    body: "'Manrope', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'Geist Mono', 'IBM Plex Mono', monospace",
  },
  radius: {
    lg: "1.25rem",
    xl: "1.75rem",
    xxl: "2.5rem",
  },
  shadow: {
    ambient: "0 45px 120px rgba(8, 14, 30, 0.55)",
    soft: "0 24px 60px rgba(15, 23, 42, 0.35)",
    depth: "0 32px 80px rgba(15, 23, 42, 0.5)",
    glow: "0 0 40px rgba(37, 99, 235, 0.32)",
  },
  motion: {
    duration: {
      micro: 120,
      fast: 180,
      medium: 280,
      slow: 420,
      page: 350,
      hover: 220,
    },
    stagger: {
      card: 0.06,
      element: 0.04,
    },
    easing: {
      standard: [0.21, 0.45, 0.1, 0.99] as const,
      entrance: [0.16, 1, 0.3, 1] as const,
      exit: [0.16, 0.01, 0.3, 1] as const,
    },
  },
  texture: {
    grainOpacity: 0.08,
  },
} as const;

export type DesignTokens = typeof designTokens;
