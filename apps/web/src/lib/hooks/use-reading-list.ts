"use client";

import { useEffect, useState } from "react";

type ReadingListItem = {
  id: string;
  slug: string;
  title: string;
  savedAt: number;
};

export function useReadingList() {
  const [items, setItems] = useState<ReadingListItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("infera-reading-list");
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse reading list", e);
      }
    }
    setIsInitialized(true);
  }, []);

  const save = (item: Omit<ReadingListItem, "savedAt">) => {
    const newItem = { ...item, savedAt: Date.now() };
    const next = [...items, newItem];
    setItems(next);
    localStorage.setItem("infera-reading-list", JSON.stringify(next));
  };

  const remove = (id: string) => {
    const next = items.filter((i) => i.id !== id);
    setItems(next);
    localStorage.setItem("infera-reading-list", JSON.stringify(next));
  };

  const isSaved = (id: string) => items.some((i) => i.id === id);

  return { items, save, remove, isSaved, isInitialized };
}
