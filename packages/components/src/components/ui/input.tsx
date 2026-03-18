import * as React from "react";

import { cn } from "@/lib/utils.tsx";
import { CircleX, SearchIcon } from "lucide-react";
import { useRef } from "react";
import { cva } from "class-variance-authority";
import { useTranslation } from "react-i18next";

const inputVariants = cva("flex", {
  variants: {
    hidden: {
      true: "hidden",
      false:
        "flex items-center justify-between pl-6 pr-1 bg-white ring-1 ring-gray-15 outline-none has-focus-visible:ring-pressed has-focus-visible:ring-2 hover:not-has-disabled:ring-2 has-disabled:text-gray-25 has-disabled:ring-gray-3 has-aria-invalid:ring-light-red has-aria-invalid:ring-2",
    },
  },
});
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, children, hidden, ...props }, ref) => {
    return (
      <span className={inputVariants({ hidden: !!hidden, className })}>
        <input
          type={type}
          className="peer outline-none pt-9 2xl:pt-8 pb-2 leading-tight w-full"
          hidden={hidden}
          aria-hidden={hidden}
          ref={ref}
          {...props}
        />
        {children}
      </span>
    );
  },
);
Input.displayName = "Input";

const SearchInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  (
    {
      className,
      type = "search",
      role = "searchbox",
      children,
      hidden,
      placeholder = "Search...",
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation();

    const internalRef = useRef<HTMLInputElement | null>(null);
    const finalRef = ref || internalRef;

    const handleReset = () => {
      if (typeof finalRef === "object" && finalRef.current) {
        finalRef.current.value = "";
        finalRef?.current.dispatchEvent(new Event("input", { bubbles: true }));
      }
    };

    return (
      <span
        className={cn(
          "flex items-center gap-2 px-4 py-3 bg-blur-xs ring-1 ring-gray-15 hover:ring-2 hover:ring-gray-25 has-focus-visible:ring-2 has-focus-visible:ring-yellow",
          className,
        )}
      >
        <SearchIcon className="size-6" />
        <input
          type={type}
          role={role}
          placeholder={placeholder}
          className="peer grow-1 focus-visible:outline-none placeholder:font-light placeholder:text-gray-1 disabled:text-gray-1"
          hidden={hidden}
          aria-hidden={hidden}
          ref={finalRef}
          {...props}
        />
        {children}
        <button
          aria-label={t("Clear search input")}
          className="peer-placeholder-shown:invisible outline-pressed"
          onClick={handleReset}
        >
          <CircleX className="size-4.5" />
        </button>
      </span>
    );
  },
);
SearchInput.displayName = "SearchInput";

export { Input, SearchInput };
