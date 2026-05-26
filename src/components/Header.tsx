"use client";

import { FileText, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-50">
            <FileText className="h-4 w-4 text-zinc-50 dark:text-zinc-900" />
          </div>
          <span className="text-lg font-bold tracking-tight">ResumeForge</span>
          <span className="hidden rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 sm:inline-flex">
            AI
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <Sparkles className="h-3 w-3" />
          <span>Powered by Gemini</span>
        </div>
      </div>
    </header>
  );
}
