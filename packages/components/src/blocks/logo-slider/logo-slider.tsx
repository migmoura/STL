import { createRoot } from "react-dom/client";
import { parseHeadline, parsePicture, parseString } from "@/lib/parser.ts";
import { DSScroller } from "@stihl-design-system/components";
import { Headline } from "@/components/ui/headline.tsx";
import { Picture } from "@/components/ui/picture.tsx";
import type { Headline as HeadlineType } from "@/types/base.d.ts";
import type { ComponentProps } from "react";

type LogoItem = {
  logo: ComponentProps<typeof Picture> | undefined;
  alt: string | undefined;
};

type LogoSliderProps = HeadlineType & { logos: LogoItem[] };

export const parseHtml = (block: HTMLElement): LogoSliderProps => {
  const [headline, subheadline, link, ...logos] = Array.from(block.children);

  return {
    ...parseHeadline(
      headline.querySelector("h1, h2, h3, h4, h5, h6"),
      subheadline.textContent,
      link.querySelector("a"),
    ),
    logos: logos.map((logo) => ({
      logo: parsePicture(logo.querySelector("picture")),
      alt: parseString(logo.querySelector("p")?.textContent),
    })),
  };
};

function LogoSliderBlock({ logos, ...headline }: LogoSliderProps) {
  return (
    <div className="space-y-20">
      <Headline {...headline} />
      <DSScroller>
        {logos.map((item, index) =>
          item.logo ? (
            <div key={index} className="flex h-12 items-center px-10 shrink-0">
              <Picture {...item.logo} imageClassName="h-12 w-auto object-contain" />
            </div>
          ) : null,
        )}
      </DSScroller>
    </div>
  );
}

export default async function decorate(block: HTMLElement) {
  const props = parseHtml(block);
  const root = createRoot(block);
  root.render(<LogoSliderBlock {...props} />);
}
