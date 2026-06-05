"use client";

import { FileText } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-50">
            <FileText className="h-4 w-4 text-zinc-50 dark:text-zinc-900" />
          </div>
          <span className="text-lg font-bold tracking-tight">ResumeForge AI</span>
        </div>

      </div>
    </header>
  );
}
