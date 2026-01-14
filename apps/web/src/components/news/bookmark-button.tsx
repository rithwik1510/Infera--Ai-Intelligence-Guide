"use client";

import { Bookmark } from "lucide-react";
import { useReadingList } from "@/lib/hooks/use-reading-list";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BookmarkButtonProps {
  articleId: string;
  articleSlug: string;
  articleTitle: string;
  className?: string;
}

export function BookmarkButton({ articleId, articleSlug, articleTitle, className }: BookmarkButtonProps) {
  const { isSaved, save, remove, isInitialized } = useReadingList();
  const saved = isSaved(articleId);

  if (!isInitialized) return null;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (saved) {
          remove(articleId);
        } else {
          save({ id: articleId, slug: articleSlug, title: articleTitle });
        }
      }}
      className={cn(
        "group/bookmark relative flex items-center justify-center rounded-full p-2 transition-colors",
        saved ? "text-[var(--accent-primary)]" : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-white/5",
        className
      )}
      aria-label={saved ? "Remove from library" : "Save to library"}
    >
      <motion.div
        initial={false}
        animate={saved ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Bookmark className={cn("h-4 w-4", saved && "fill-current")} />
      </motion.div>
    </button>
  );
}
