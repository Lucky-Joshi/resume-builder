import { Skeleton } from "@/components/ui/skeleton";

export default function MainLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-5 w-36" />
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="text-center">
            <Skeleton className="mx-auto h-8 w-72" />
            <Skeleton className="mx-auto mt-2 h-4 w-96" />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <Skeleton className="mb-4 h-5 w-36" />
              <div className="flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed border-zinc-800 p-6">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-1.5 text-center">
                  <Skeleton className="mx-auto h-3.5 w-44" />
                  <Skeleton className="mx-auto h-3 w-28" />
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
              <Skeleton className="mb-4 h-5 w-36" />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-3 w-20" />
                </div>
                <Skeleton className="h-[180px] w-full rounded-lg" />
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-11 w-52 rounded-lg" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
