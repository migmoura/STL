import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils.tsx";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ScrollableList({
  children,
  className,
  listClassName,
}: PropsWithChildren<{ className?: string; listClassName?: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      setShowScrollUp(scrollTop > 5);
      setShowScrollDown(scrollTop + clientHeight < scrollHeight - 5);
    };

    update();
    el.addEventListener("scroll", update);
    return () => el.removeEventListener("scroll", update);
  }, [children]);

  const scroll = (direction: "up" | "down") => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const offset = direction === "up" ? -80 : 80;
    el.scrollBy({ top: offset, behavior: "smooth" });
  };

  return (
    <div className={cn("relative w-full overflow-y-clip", className)}>
      {showScrollUp && (
        <div className="absolute top-0 left-0 right-0 z-10 flex bg-white">
          <button
            className="flex w-full cursor-default items-center justify-center text-gray-1"
            onClick={() => scroll("up")}
          >
            <ChevronUp className="size-6" />
          </button>
        </div>
      )}
      <div
        ref={ref}
        className={cn("h-full overflow-y-auto scroll-smooth scrollbar-none", listClassName)}
      >
        {children}
      </div>
      {showScrollDown && (
        <div className="absolute bottom-0 left-0 right-0 z-10 flex bg-white">
          <button
            className="w-full flex cursor-default items-center justify-center text-gray-1"
            onClick={() => scroll("down")}
          >
            <ChevronDown className="size-6" />
          </button>
        </div>
      )}
    </div>
  );
}
