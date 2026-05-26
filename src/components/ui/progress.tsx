import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "danger";
}

const variantClasses = {
  default: "bg-zinc-900 dark:bg-zinc-50",
  success: "bg-green-600 dark:bg-green-400",
  warning: "bg-amber-500 dark:bg-amber-400",
  danger: "bg-red-600 dark:bg-red-400",
};

function Progress({ className, value, max = 100, variant = "default", ...props }: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn(
        "h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-500 ease-out",
          variantClasses[variant]
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export { Progress };
