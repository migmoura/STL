import * as React from "react";

import { cn } from "@/lib/utils.tsx";
import { CircleX, SearchIcon } from "lucide-react";

export function Search({ className, type, ...props }: React.ComponentPropsWithRef<"input">) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div
      className={cn(
        "flex items-center text-sm text-white gap-2 px-4 py-3 bg-blur-xs ring-1 ring-gray-15 hover:ring-2 hover:ring-gray-25 has-focus-visible:ring-2 has-focus-visible:ring-yellow",
        className,
      )}
    >
      <SearchIcon className="size-6" />
      <input
        type={type}
        ref={inputRef}
        className="peer grow-1 focus-visible:outline-none font-extrabold placeholder:font-light placeholder:text-gray-4 disabled:text-gray-1"
        {...props}
      />
      <button className="peer-placeholder-shown:invisible" type="button" onClick={handleReset}>
        <CircleX className="size-4.5" />
      </button>
    </div>
  );
}
