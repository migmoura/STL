import type { KeyboardEvent, PointerEvent as ReactPointerEvent } from "react";
import { useRef, useState } from "react";
import { Picture } from "@/components/ui/picture";
import type { Picture as PictureType } from "@/types/base";
import { cn } from "@/lib/utils.tsx";

export type SimpleImageCompareProps = {
  pictures?: [PictureType | undefined, PictureType | undefined];
  caption?: string;
  defaultValue?: number;
};

export function SimpleImageCompare({
  pictures,
  caption,
  defaultValue = 50,
}: SimpleImageCompareProps) {
  if (!pictures?.[0] || !pictures?.[1]) {
    return null;
  }

  const [value, setValue] = useState(defaultValue);
  const safeValue = Math.min(100, Math.max(0, value));
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  const setFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    const next = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, next)));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }
    isDraggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }
    setFromClientX(event.clientX);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }
    isDraggingRef.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      setValue((current) => Math.max(0, current - step));
    }
    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      setValue((current) => Math.min(100, current + step));
    }
    if (event.key === "Home") {
      event.preventDefault();
      setValue(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      setValue(100);
    }
  };

  return (
    <div
      className={cn(
        "image-full:w-full image-lg:w-3/4 image-md:w-1/2 image-sm:w-1/4",
        "image-center:mx-auto image-right:ml-auto",
      )}
    >
      <div
        className={cn(
          "ratio-1-1:aspect-square ratio-1-2:aspect-1/2 ratio-2-1:aspect-2/1",
          "ratio-4-3:aspect-4/3 ratio-3-4:aspect-3/4",
          "ratio-16-9:aspect-16/9 ratio-9-16:aspect-9/16",
          "relative overflow-visible",
        )}
      >
        <div
          ref={containerRef}
          className="absolute inset-0 grid grid-areas-stack w-full h-full overflow-hidden"
          style={{ touchAction: "pan-y" }}
        >
          <Picture
            {...pictures[0]}
            className="area-stack block w-full h-full"
            imageClassName="w-full h-full object-cover object-top"
          />
          <div
            className="area-stack overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - safeValue}% 0 0)` }}
          >
            <div className="grid grid-areas-stack w-full h-full">
              <Picture
                {...pictures[1]}
                className="area-stack block w-full h-full"
                imageClassName="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="area-stack pointer-events-none">
            <div
              className="absolute top-0 bottom-0 w-px bg-white/80"
              style={{ left: `${safeValue}%` }}
              aria-hidden="true"
            />
          </div>
        </div>
        <div
          role="slider"
          aria-label="Image comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={safeValue}
          aria-valuetext={`${Math.round(safeValue)}%`}
          tabIndex={0}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-4 rounded-full border border-yellow bg-white shadow-sm cursor-ew-resize ring-yellow transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden"
          style={{ left: `${safeValue}%` }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
        />
      </div>
      {caption && <p className="mt-2 text-left text-gray-1 text-sm">{caption}</p>}
    </div>
  );
}
