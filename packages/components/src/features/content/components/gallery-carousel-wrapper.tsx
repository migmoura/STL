import { ComponentProps, useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel.tsx";
import { Teaser } from "@/components/ui/teaser.tsx";
import { CarouselPagination } from "@/components/ui/carousel-pagination.tsx";
import { chunkArray, cn } from "@/lib/utils.tsx";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

type CarouselWrapperProps = {
  title?: string;
  items: ComponentProps<typeof Teaser>[];
};

const imageSizes: ComponentProps<typeof Teaser>["aspectRatio"][] = [
  "aspect-16/9",
  "aspect-9/16",
  "aspect-1/1",
] as const;

export function MediumCarousel({ items, title }: CarouselWrapperProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const slides = chunkArray(items, 3);

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
    <Carousel opts={{ align: "center" }} aria-label={`${title} - Slider`} setApi={setApi}>
      <CarouselContent className="-ml-30 w-full md:pl-10 lg:pl-14 xl:pl-18 2xl:pl-20">
        {slides.map((slide) => (
          <CarouselItem
            fullWidth={false}
            key={`${slide[0].title}-slide`}
            className="hidden md:grid w-[calc((100vh-179px)*(3/2))] max-w-[1200px] gap-x-10 gap-y-2 grid-cols-[26%_37%_37%] grid-rows-2 pl-30"
          >
            {slide.map((item, index) => (
              <Teaser
                key={item.title}
                {...item}
                aspectRatio={imageSizes[index % 3]}
                className={cn({
                  "col-span-2 row-span-1 md:mt-10 2xl:mt-20": index % 3 === 0,
                  "col-span-1 row-span-2": index % 3 === 1,
                  "col-start-2 col-span-1 row-span-1": index % 3 === 2,
                })}
              />
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="sticky flex justify-center bottom-0 pb-6">
        <CarouselPagination
          inverted={false}
          current={current - 1}
          total={slides.length}
          scrollTo={api?.scrollTo}
        />
      </div>
    </Carousel>
  );
}

export function SmallCarousel({ items, title }: CarouselWrapperProps) {
  return (
    <Carousel
      plugins={[WheelGesturesPlugin({ forceWheelAxis: "x" })]}
      aria-label={`${title} - Slider`}
      className="mt-6 px-6 sm:px-8"
    >
      <CarouselContent className="-ml-4">
        {items.map((item) => (
          <CarouselItem key={item.title} fullWidth={false} className="w-[316px] pl-4">
            <Teaser {...item} aspectRatio="aspect-2/1" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
