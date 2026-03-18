import { Teaser } from "@/components/ui/teaser.tsx";
import { ComponentProps } from "react";
import { Headline } from "@/components/ui/headline.tsx";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel.tsx";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

export type SimpleTeaserProps = {
  aspectRatio?:
    | "aspect-2/1"
    | "aspect-1/2"
    | "aspect-3/2"
    | "aspect-2/3"
    | "aspect-4/3"
    | "aspect-3/4"
    | "aspect-16/9"
    | "aspect-9/16"
    | "aspect-1/1";
  items: ComponentProps<typeof Teaser>[];
} & ComponentProps<typeof Headline>;

export function SimpleTeaser({
  aspectRatio = "aspect-2/1",
  items,
  ...headline
}: Readonly<SimpleTeaserProps>) {
  return (
    <div className="space-y-20 relative flex flex-col justify-center">
      <Headline {...headline} />
      <div className="hidden lg:inline-grid grid-cols-3 px-14 -mx-14 xl:px-0 xl:mx-auto gap-10 justify-center scrollbar-none">
        {items.map((item) => (
          <div key={item.title} className="flex-shrink-0 max-w-[300px] md:max-w-[416px]">
            <Teaser {...item} aspectRatio={aspectRatio} />
          </div>
        ))}
      </div>
      <Carousel plugins={[WheelGesturesPlugin({ forceWheelAxis: "x" })]}>
        <CarouselContent className="lg:hidden gap-4">
          {items.map((item) => (
            <CarouselItem
              fullWidth={false}
              className="max-w-[300px] md:max-w-[416px]"
              key={item.link?.href}
            >
              <Teaser {...item} aspectRatio={aspectRatio} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
