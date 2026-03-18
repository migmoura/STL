import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils.tsx";

function Grid({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="grid"
      className={cn(
        "grid grid-cols-2 md:grid-cols-8 xl:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 xl:gap-20",
        className,
      )}
      {...props}
    />
  );
}

export { Grid };
