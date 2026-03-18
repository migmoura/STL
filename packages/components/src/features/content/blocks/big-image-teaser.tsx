import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import { cn } from "@/lib/utils.tsx";
import { type ComponentProps, useEffect, useState } from "react";
import { BigImageTeaserItem } from "@/features/content/components/big-image-teaser-item.tsx";
import { Headline } from "@/components/ui/headline.tsx";

type BigImageTeaserProps = {
  items: ComponentProps<typeof BigImageTeaserItem>[];
} & ComponentProps<typeof Headline>;

export function BigImageTeaser({ items, ...headline }: BigImageTeaserProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
    <div className="relative space-y-20">
      <div className="fluid">
        <Headline {...headline} />
      </div>
      <div className="px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20">
        <Carousel
          opts={{ align: () => 1 }}
          aria-label={`${headline.headline?.value} - Slider`}
          setApi={setApi}
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem fullWidth={false} className="w-full md:w-fit" key={item.link?.href}>
                <BigImageTeaserItem {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {items.length > 1 ? (
            <div className="w-full flex justify-center -translate-y-9">
              <div className="p-2 flex gap-8 rounded-[4px] items-center bg-white drop-shadow-sm">
                <CarouselPrevious className="disabled:bg-white disabled:text-gray-4" />
                <div className="flex gap-4 items-center">
                  {items.map((item, index) => (
                    <button
                      key={item.universalEditor["data-aue-resource"]}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        "rounded-full transition-colors",
                        current === index + 1 ? "bg-yellow size-3" : "bg-gray-4/50 size-2",
                      )}
                    />
                  ))}
                </div>
                <CarouselNext className="disabled:bg-white disabled:text-gray-4" />
              </div>
            </div>
          ) : null}
        </Carousel>
      </div>
    </div>
  );
}
