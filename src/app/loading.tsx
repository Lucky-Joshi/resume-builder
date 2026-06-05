import { Skeleton } from "@/components/ui/skeleton";

export default function RootLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-5 w-36" />
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <Skeleton className="h-3.5 w-16" />
          <Skeleton className="h-3.5 w-20" />
          <Skeleton className="h-3.5 w-12" />
        </div>
        <Skeleton className="h-8 w-28 rounded-lg" />
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-4">
        <div className="w-full max-w-lg space-y-6">
          <div className="space-y-3 text-center">
            <Skeleton className="mx-auto h-4 w-48" />
            <Skeleton className="mx-auto h-12 w-full" />
            <Skeleton className="mx-auto h-4 w-72" />
          </div>
          <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-44 rounded-lg" />
            <Skeleton className="h-12 w-36 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
