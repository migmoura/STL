import * as React from "react";
import { Button } from "@/components/ui/button.tsx";
import { isExternalLink, isFileLink } from "@/lib/utils.tsx";
import { DownloadIcon, ExternalLink } from "lucide-react";
import { ComponentProps } from "react";

function Link({
  children,
  variant = "link",
  size = "default",
  title,
  ...props
}: React.ComponentProps<"a"> &
  Pick<ComponentProps<typeof Button>, "variant" | "size" | "disabled">) {
  const external = isExternalLink(props.href);
  const isFile = isFileLink(props.href);
  return (
    <Button variant={variant} size={size} asChild>
      <a
        {...props}
        title={title !== children ? title : undefined}
        aria-label={title !== children ? title : undefined}
        target={external || isFile ? "_blank" : undefined}
      >
        {children}
        {isFile ? <DownloadIcon className="size-5" /> : null}
        {!isFile && external ? <ExternalLink className="size-5" /> : null}
      </a>
    </Button>
  );
}

export { Link };
