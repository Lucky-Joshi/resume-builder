import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-3", i === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  );
}

function SkeletonButton({ className }: { className?: string }) {
  return <Skeleton className={cn("h-9 w-24 rounded-lg", className)} />;
}

function SkeletonAvatar({ className }: { className?: string }) {
  return <Skeleton className={cn("h-10 w-10 shrink-0 rounded-full", className)} />;
}

function SkeletonBadge({ className }: { className?: string }) {
  return <Skeleton className={cn("h-5 w-16 rounded-full", className)} />;
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-zinc-800 bg-zinc-950 p-6", className)}>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-4 flex-1" />
        </div>
        <SkeletonText lines={3} />
      </div>
    </div>
  );
}

function SkeletonUpload({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed border-zinc-800 p-6",
        className
      )}
    >
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-1.5 text-center">
        <Skeleton className="mx-auto h-3.5 w-44" />
        <Skeleton className="mx-auto h-3 w-28" />
      </div>
    </div>
  );
}

function SkeletonJobInput({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-3 w-20" />
      </div>
      <Skeleton className="h-[180px] w-full rounded-lg" />
    </div>
  );
}

function SkeletonProgress({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex justify-between">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-8" />
      </div>
      <Skeleton className="h-2 w-full rounded-full" />
    </div>
  );
}

function SkeletonScoreCircle({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <Skeleton className="h-16 w-16 rounded-full" />
      <Skeleton className="h-3 w-12" />
    </div>
  );
}

function SkeletonATSScore({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-zinc-800 bg-zinc-950", className)}>
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 w-28" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-24 w-24 rounded-full" />
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-2 w-full max-w-xs rounded-full" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <SkeletonScoreCircle />
          <SkeletonScoreCircle />
          <SkeletonScoreCircle />
        </div>
        <div className="h-px bg-zinc-800" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <div className="flex flex-wrap gap-1.5">
              <SkeletonBadge />
              <SkeletonBadge />
              <SkeletonBadge />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <div className="flex flex-wrap gap-1.5">
              <SkeletonBadge />
              <SkeletonBadge />
            </div>
          </div>
        </div>
        <div className="h-px bg-zinc-800" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <SkeletonText lines={3} />
        </div>
      </div>
    </div>
  );
}

function SkeletonResumePreview({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-zinc-800 bg-zinc-950", className)}>
      <div className="space-y-5 p-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div>
          <Skeleton className="h-7 w-48" />
          <div className="mt-2 flex flex-wrap gap-3">
            <Skeleton className="h-3.5 w-36" />
            <Skeleton className="h-3.5 w-28" />
            <Skeleton className="h-3.5 w-40" />
          </div>
        </div>
        <div className="h-px bg-zinc-800" />
        <div>
          <Skeleton className="mb-2 h-3.5 w-40" />
          <SkeletonText lines={3} />
        </div>
        <div className="h-px bg-zinc-800" />
        <div>
          <Skeleton className="mb-2 h-3.5 w-16" />
          <div className="flex flex-wrap gap-1.5">
            <SkeletonBadge />
            <SkeletonBadge />
            <SkeletonBadge />
            <SkeletonBadge />
            <SkeletonBadge />
          </div>
        </div>
        <div className="h-px bg-zinc-800" />
        <div>
          <Skeleton className="mb-3 h-3.5 w-20" />
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i}>
                <div className="flex items-start justify-between">
                  <div>
                    <Skeleton className="h-4 w-44" />
                    <Skeleton className="mt-1 h-3 w-32" />
                  </div>
                  <Skeleton className="h-3 w-24" />
                </div>
                <div className="mt-2 space-y-1.5">
                  <SkeletonText lines={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkeletonCoverLetter({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-zinc-800 bg-zinc-950", className)}>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-8 w-20 rounded-lg" />
        </div>
        <SkeletonText lines={8} />
      </div>
    </div>
  );
}

function SkeletonAnalysisPanel({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-zinc-800 bg-zinc-950", className)}>
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="space-y-3">
          <SkeletonProgress />
          <SkeletonProgress />
          <SkeletonProgress />
          <SkeletonProgress />
        </div>
        <div className="h-px bg-zinc-800" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <div className="flex flex-wrap gap-1.5">
            <SkeletonBadge />
            <SkeletonBadge />
            <SkeletonBadge />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <SkeletonText lines={3} />
        </div>
      </div>
    </div>
  );
}

function SkeletonDashboard({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="text-center">
        <Skeleton className="mx-auto h-9 w-72" />
        <Skeleton className="mx-auto mt-2 h-4 w-96" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <SkeletonUpload />
        <SkeletonJobInput />
      </div>
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-11 w-52 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export {
  SkeletonText,
  SkeletonButton,
  SkeletonAvatar,
  SkeletonBadge,
  SkeletonCard,
  SkeletonUpload,
  SkeletonJobInput,
  SkeletonProgress,
  SkeletonScoreCircle,
  SkeletonATSScore,
  SkeletonResumePreview,
  SkeletonCoverLetter,
  SkeletonAnalysisPanel,
  SkeletonDashboard,
};
