import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import { cn } from "@/lib/utils.tsx";
import { type ReactNode, useEffect, useState, Children } from "react";

export function Hero({ children }: { children: ReactNode }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      aria-label="Hero - Slider"
      setApi={setApi}
      className="grid align-bottom grid-areas-stack"
    >
      <div className="area-stack overflow-hidden">
        <CarouselContent>{children}</CarouselContent>
      </div>
      {items.length > 1 ? (
        <div className="self-end area-stack z-10 flex justify-center md:justify-start m-10 md:m-20">
          <div className="p-2 flex gap-4 border items-center border-white/50 bg-white/10">
            <CarouselPrevious className="text-white border-none bg-transparent" />
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "rounded-full transition-colors",
                  current === index + 1 ? "bg-white size-3" : "bg-gray-4/50 size-2",
                )}
              />
            ))}
            <CarouselNext className="text-white border-none bg-transparent" />
          </div>
        </div>
      ) : null}
    </Carousel>
  );
}
