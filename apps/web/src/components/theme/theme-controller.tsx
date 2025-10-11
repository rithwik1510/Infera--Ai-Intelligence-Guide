"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "infera-theme" as const;

type ThemeMode = "dark" | "light";

function applyTheme(mode: ThemeMode) {
  document.body.dataset.theme = mode;
}

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      setMode(stored);
      applyTheme(stored);
    } else {
      applyTheme("dark");
    }
  }, []);

  const toggle = () => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      return next;
    });
  };

  return { mode, toggle };
}

export function ThemeHydrator() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
    } else {
      applyTheme("dark");
    }
    setReady(true);
  }, []);
  if (!ready) {
    return null;
  }
  return null;
}
