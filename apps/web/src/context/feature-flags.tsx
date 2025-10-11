"use client";

import { createContext, useContext, useMemo } from "react";

type FeatureFlagMap = {
  commandPalette: boolean;
  optimisticSearch: boolean;
};

const defaultFlags: FeatureFlagMap = {
  commandPalette: true,
  optimisticSearch: true,
};

const FeatureFlagContext = createContext<FeatureFlagMap>(defaultFlags);

interface FeatureFlagProviderProps {
  children: React.ReactNode;
  overrides?: Partial<FeatureFlagMap>;
}

export function FeatureFlagProvider({ children, overrides }: FeatureFlagProviderProps) {
  const value = useMemo(() => ({ ...defaultFlags, ...(overrides ?? {}) }), [overrides]);
  return <FeatureFlagContext.Provider value={value}>{children}</FeatureFlagContext.Provider>;
}

export function useFeatureFlag<Key extends keyof FeatureFlagMap>(key: Key): FeatureFlagMap[Key] {
  const flags = useContext(FeatureFlagContext);
  return flags[key];
}

