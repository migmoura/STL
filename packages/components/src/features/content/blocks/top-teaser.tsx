import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel.tsx";
import { CarouselPagination } from "@/components/ui/carousel-pagination.tsx";
import { TopTeaserItem } from "@/features/content/components/top-teaser-item.tsx";
import { clsx } from "clsx";
import { Picture } from "@/components/ui/picture.tsx";

import type {
  Heading as HeadingType,
  Link as LinkType,
  Picture as PictureType,
} from "@/types/base.d.ts";
import type { UniversalEditor } from "@/types/universal-editor.d.ts";

export type TopTeaserItem = {
  image?: PictureType;
  eyebrow?: string;
  heading: HeadingType;
  ctaButton?: {
    link: LinkType;
  };
  secondaryCtaButton?: {
    link: LinkType;
  };
  universalEditor?: UniversalEditor;
};

export enum TopTeaserVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const USE_GRADIENT = "gradient";

export type TopTeaserProps = {
  items: TopTeaserItem[];
  opacity?: boolean;
  variant?: TopTeaserVariant;
};

export function TopTeaser({ items, variant = TopTeaserVariant.PRIMARY, opacity }: TopTeaserProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    setCurrent(api.selectedScrollSnap());

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      opts={{
        loop: true,
        watchDrag: (_, evt) => {
          const target = evt.target as HTMLElement;
          return !target.closest("h1, h2, p");
        },
        active: items.length !== 1,
      }}
      aria-label="Top Teaser - Slider"
      setApi={setApi}
      className={clsx("grid align-bottom grid-areas-stack", {
        "min-h-96": variant === TopTeaserVariant.SECONDARY,
      })}
    >
      <div className="area-stack overflow-hidden">
        <CarouselContent className="ml-0!">
          {items.map((item) => (
            <CarouselItem key={item.heading.value} className="pl-0!">
              <TopTeaserItem
                key={item.heading.value}
                {...{
                  ...item,
                  eyebrow: variant === TopTeaserVariant.SECONDARY ? undefined : item.eyebrow,
                }}
                opacity={opacity}
              >
                {item.image ? (
                  <Picture
                    className="area-stack"
                    imageClassName={clsx(
                      "w-lvw object-cover",
                      {
                        "h-[calc(100dvh-179px)] md:max-h-[486px] lg:max-h-[912px]":
                          variant === TopTeaserVariant.PRIMARY,
                      },
                      {
                        "h-[calc(100dvh-179px)] max-h-[424px]":
                          variant === TopTeaserVariant.SECONDARY,
                      },
                    )}
                    {...item.image}
                  />
                ) : null}
              </TopTeaserItem>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      {items.length > 1 ? (
        <div className="area-stack h-fit z-10 md:px-8 py-8 md:py-16 flex self-end justify-center md:justify-end lg:justify-center">
          <CarouselPagination
            inverted={true}
            current={current}
            total={items.length}
            scrollTo={api?.scrollTo}
          />
        </div>
      ) : null}
    </Carousel>
  );
}
