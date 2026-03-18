import { useEffect, useRef, useState, type ComponentProps } from "react";
import { LogoSliderItem } from "@/components/logo-slider/logo-slider-item.tsx";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel.tsx";
import { CarouselPagination } from "@/components/ui/carousel-pagination.tsx";
import { Headline } from "@/components/ui/headline.tsx";

export type LogoSliderProp = {
  logos: ComponentProps<typeof LogoSliderItem>[];
} & ComponentProps<typeof Headline>;

export function LogoSlider({ logos, ...headline }: Readonly<LogoSliderProp>) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Needed because if the component is not in the viewport, it does not update the scroll snaps;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api || !visible) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    setScrollSnaps(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    return () => {
      api.off("select", onSelect);
    };
  }, [api, visible]);

  return (
    <div className="space-y-20" ref={sliderRef}>
      <Headline {...headline} />
      <div className="relative overflow-hidden">
        <Carousel
          aria-label={`${headline.headline?.value} - Slider`}
          setApi={setApi}
          className="space-y-14"
        >
          <CarouselContent>
            {logos?.map((slide, index) => (
              <CarouselItem fullWidth={false} className="px-10" key={`carousel-item-${index}`}>
                <LogoSliderItem key={`feature-${slide.logo?.image?.src}`} {...slide.logo} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {scrollSnaps > 0 && (
            <div className="hidden md:flex justify-center">
              <CarouselPagination
                inverted={false}
                current={current}
                total={scrollSnaps}
                scrollTo={api?.scrollTo}
              />
            </div>
          )}
        </Carousel>
        {/* Gradient fade on edges */}
        <div className="pointer-events-none absolute left-0 top-0 bg-gradient-to-r from-white to-transparent z-10 xs:w-12 md:w-36 md:h-12" />
        <div className="pointer-events-none absolute right-0 top-0 h-full bg-gradient-to-l from-white to-transparent z-10 xs:w-12 md:w-36 md:h-12" />
      </div>
    </div>
  );
}
