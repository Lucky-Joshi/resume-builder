import { SkeletonDashboard } from "@/components/ui/skeletons";

export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <SkeletonDashboard />
    </div>
  );
}
