import * as React from "react";

import { cn } from "@/lib/utils.tsx";

function Textarea({ className, children, ...props }: React.ComponentProps<"textarea">) {
  return (
    <span
      className={cn(
        "flex gap-4 items-center justify-between pl-6 pr-1 bg-white ring-1 ring-gray-15 outline-none has-focus-visible:ring-pressed has-focus-visible:ring-2 hover:not-has-disabled:ring-2 has-disabled:text-gray-25 has-disabled:ring-gray-3 has-aria-invalid:ring-light-red has-aria-invalid:ring-2",
        className,
      )}
    >
      <textarea
        data-slot="textarea"
        className="min-h-45 peer outline-none pt-8 pb-2 leading-tight w-full field-sizing-content"
        {...props}
      />
      {children}
    </span>
  );
}

export { Textarea };
