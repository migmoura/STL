import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils.tsx";

const buttonVariants = cva(
  "leading-label inline-flex items-center justify-center gap-2 text-md font-semibold outline-none ring-pressed focus-visible:ring-offset-3 focus-visible:ring-2 disabled:pointer-events-none aria-disabled:pointer-events-none [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-yellow hover:bg-hovered active:bg-pressed disabled:bg-gray-3 disabled:text-gray-2 aria-disabled:bg-gray-3 aria-disabled:text-gray-2",
        link: "shadow-[inset_0_-2px_0_0] shadow-black hover:shadow-[inset_0_-3px_0_0] active:shadow-yellow disabled:text-gray-3 disabled:shadow-gray-3 aria-disabled:text-gray-3 aria-disabled:shadow-gray-3 no-underline",
        secondary: null,
        tertiary: null,
      },
      size: {
        icon: "size-14 shrink-0 [&_svg]:size-6",
        slim: null,
        default: null,
      },
      dark: {
        true: "text-white disabled:[&_svg]:text-gray-2 aria-disabled:[&_svg]:text-gray-2",
        false: "text-black disabled:[&_svg]:text-gray-2 aria-disabled:[&_svg]:text-gray-2",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        dark: false,
        className:
          "outline-solid outline-1 not-disabled:not-aria-disabled:outline-yellow disabled:bg-gray-3 disabled:outline-gray-3 aria-disabled:bg-gray-3 aria-disabled:outline-gray-3",
      },
      {
        variant: "secondary",
        dark: false,
        className:
          "bg-white outline-solid outline-1 outline-gray-3 hover:outline-2 hover:outline-yellow active:outline-pressed disabled:bg-gray-4 disabled:outline-gray-3 disabled:text-gray-3 aria-disabled:bg-gray-4 aria-disabled:outline-gray-3 aria-disabled:text-gray-3",
      },
      {
        variant: "tertiary",
        dark: false,
        className:
          "bg-transparent hover:bg-gray-4 active:bg-gray-3 disabled:text-gray-3 aria-disabled:text-gray-3",
      },
      {
        variant: ["tertiary", "secondary"],
        dark: true,
        className: "hover:bg-black/10 active:bg-black/20",
      },
      {
        variant: "secondary",
        dark: true,
        className: "border border-gray-15 disabled:border-gray-15 aria-disabled:border-gray-15",
      },
      {
        variant: ["primary", "secondary", "tertiary"],
        size: "default",
        className: "px-8 py-4 whitespace-nowrap",
      },
      {
        variant: "link",
        size: "default",
        className: "py-1 2xl:py-2",
      },
      {
        variant: "link",
        size: "slim",
        className: null,
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
      dark: false,
    },
  },
);

function Button({
  className,
  variant,
  size,
  dark,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, dark, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
