"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-gray-1 absolute top-6 2xl:top-5 left-6 z-10 transform origin-[0] duration-200 -translate-y-2 scale-80 peer-data-[placeholder=true]:scale-100 peer-placeholder-shown:scale-100 peer-data-[placeholder=true]:translate-y-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-2 flex items-center gap-2 leading-tight font-medium select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed peer-disabled:text-gray-25 group-disabled:text-gray-25",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
