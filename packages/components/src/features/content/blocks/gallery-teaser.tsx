import {
  MediumCarousel,
  SmallCarousel,
} from "@/features/content/components/gallery-carousel-wrapper.tsx";
import { Headline } from "@/components/ui/headline.tsx";
import { ComponentProps } from "react";
import { useMediaQuery } from "usehooks-ts";

type TeaserProps = ComponentProps<typeof MediumCarousel> & ComponentProps<typeof Headline>;

export function GalleryTeaser({ items, ...headline }: TeaserProps) {
  const medium = useMediaQuery("(width >= 80rem)");
  console.log(medium);
  console.log(window.matchMedia("(width >= 80rem)"));

  return (
    <div>
      <div className="fluid">
        <Headline {...headline} />
      </div>
      {medium ? <MediumCarousel items={items} /> : <SmallCarousel items={items} />}
    </div>
  );
}
