import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronDownIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils.tsx";
import { cva } from "class-variance-authority";
import * as SelectPrimitive from "@radix-ui/react-select";

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  container,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> &
  Pick<React.ComponentProps<typeof DropdownMenuPrimitive.Portal>, "container">) {
  return (
    <DropdownMenuPrimitive.Portal container={container}>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto py-2 shadow-lg",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

export const dropdownMenuItemVariants = cva(
  "w-full flex cursor-default items-center relative gap-2 leading-label outline-hidden select-none active:bg-gray-35 focus-visible:bg-gray-4 hover:bg-gray-4 aria-selected:bg-gray-4 data-[disabled=true]:pointer-events-none data-[disabled=true]:text-gray-25",
  {
    variants: {
      variant: {
        default: "px-6 py-5",
        outline: "text-sm px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "outline";
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={dropdownMenuItemVariants({ variant, className })}
      {...props}
    />
  );
}

const dropdownMenuCheckboxItemVariants = cva(
  "active:bg-gray-35 focus-visible:bg-gray-4 w-full relative flex justify-between cursor-default items-center leading-label outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:text-gray-25 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "px-6 py-5",
        outline: "text-sm px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  variant?: "default" | "outline";
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={dropdownMenuCheckboxItemVariants({ variant, className })}
      checked={checked}
      {...props}
    >
      {children}
      <span className="ml-4 pointer-events-none flex items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon
            className={cn({
              "size-6": variant === "default",
              "size-4": variant === "outline",
            })}
          />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-neutral-200 -mx-1 my-1 h-px dark:bg-neutral-800", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-neutral-500 ml-auto text-xs tracking-widest dark:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "active:bg-gray-35 focus-visible:bg-gray-4 w-full relative flex cursor-default items-center gap-2 px-6 py-5 leading-tight outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:text-gray-25",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden py-2 shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

function DropdownStyledTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger> & {
  action?: React.ReactNode;
  size?: "sm" | "default";
}) {
  return (
    <span className="relative block">
      <DropdownMenuPrimitive.Trigger
        data-slot="dropdown-menu-trigger"
        data-size={size}
        className={cn(
          "group leading-label flex justify-between items-center py-2 pl-4 pr-2 md:py-4 md:pl-6 md:pr-4 relative gap-4 bg-white/40 outline-none not-disabled:hover:ring-2 hover:ring-gray-15 disabled:text-gray-25 disabled:ring-gray-3 aria-invalid:ring-light-red aria-invalid:ring-2",
          className,
        )}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon className="size-6 shrink-0" />
        </SelectPrimitive.Icon>
      </DropdownMenuPrimitive.Trigger>
    </span>
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownStyledTrigger,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
