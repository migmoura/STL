import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils.tsx";

const tagVariants = cva(
  "text-sm leading-label inline-flex items-center rounded-full px-3 py-1 w-fit whitespace-nowrap shrink-0 border-box gap-2 focus-visible:outline-none focus-visible:ring-pressed focus-visible:ring-[2px] focus-visible:ring-offset-2 transition-[color,box-shadow] overflow-hidden disabled:pointer-events-none disabled:opacity-50 disabled:pointer-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-yellow hover:bg-hovered active:bg-pressed disabled:bg-gray-3 disabled:text-gray-2",
        secondary:
          "outline-solid -outline-offset-1 outline-1 outline-gray-3 hover:outline-2 hover:-outline-offset-2 hover:outline-yellow active:outline-pressed disabled:bg-gray-4 disabled:text-gray-3",
        tertiary: "hover:bg-gray-4 active:bg-gray-3 disabled:text-gray-3",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Tag({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof tagVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return <Comp data-slot="tag" className={cn(tagVariants({ variant }), className)} {...props} />;
}

export { Tag, tagVariants };
