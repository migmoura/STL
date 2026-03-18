import { cn } from "@/lib/utils.tsx";
import type { ComponentProps } from "react";

function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div data-slot="skeleton" className={cn("bg-gray-4 animate-pulse", className)} {...props} />
  );
}

export { Skeleton };
