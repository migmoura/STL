import * as React from "react";
import { cn, isExternalLink } from "@/lib/utils.tsx";
import { ExternalLink } from "lucide-react";

function SimpleLink({ children, className, ...props }: React.ComponentProps<"a">) {
  const external = isExternalLink(props.href);

  return (
    <a
      className="group no-underline flex items-center gap-2"
      {...props}
      target={external ? "_blank" : undefined}
    >
      <span className={cn("hover:shadow-[inset_0_-2px_0_0] active:shadow-yellow ", className)}>
        {children}
      </span>
      {external ? <ExternalLink className="size-5" /> : null}
    </a>
  );
}

export { SimpleLink };
