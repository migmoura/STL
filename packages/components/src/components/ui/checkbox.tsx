import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils.tsx";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer shrink-0 size-6 bg-white shadow-gray-15 aria-invalid:shadow-light-red data-[state=unchecked]:shadow-[inset_0_0_0_1px] data-[state=unchecked]:hover:not-disabled:shadow-[inset_0_0_0_2px] data-[state=unchecked]:active:bg-gray-4 data-[state=checked]:bg-yellow data-[state=checked]:hover:bg-hovered data-[state=checked]:active:bg-pressed disabled:cursor-not-allowed disabled:shadow-gray-3 data-[state=checked]:disabled:bg-gray-3 data-[state=unchecked]:disabled:bg-gray-4 outline-none focus-visible:ring-pressed focus-visible:ring-offset-2 focus-visible:ring-2",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
