import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const metaItemVariants = cva(
  "text-sm pb-0.5 leading-label focus-visible:outline-2 outline-pressed outline-offset-2 active:shadow-[inset_0_-1px_0_0] active:shadow-yellow",
  {
    variants: {
      active: {
        true: "shadow-[inset_0_-1px_0_0] shadow-yellow",
        false: "hover:shadow-[inset_0_-1px_0_0] hover:shadow-white",
      },
      disabled: {
        true: "text-gray-1 pointer-events-none text-decoration-none",
        false: "text-white",
      },
    },
    defaultVariants: {
      active: false,
      disabled: false,
    },
  },
);

function MetaItem({
  className,
  disabled,
  active,
  asChild = false,
  ...props
}: React.ComponentProps<"a"> &
  VariantProps<typeof metaItemVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={metaItemVariants({
        active,
        disabled,
        className,
      })}
      {...props}
    />
  );
}

export { MetaItem };
