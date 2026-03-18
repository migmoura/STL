import { createRoot } from "react-dom/client";
import {
  IMAGE_LEFT,
  IMAGE_RIGHT,
  TEXT_BLACK,
  TEXT_WHITE,
  TextImage,
} from "@/features/content/blocks/text-image.tsx";
import { parseCallToActionList, parseHeading, parseMedia, parseString } from "@/lib/parser.ts";

function parseHTML(block: HTMLElement) {
  const [media, altText, subHeading, heading, copy, ...cta] = Array.from(block.children);
  const ratio =
    Array.from(block.classList).find((className) => className.startsWith("ratio-")) || "ratio-3/2";

  return {
    ratio: ratio.replaceAll("-", "/").replace("ratio/", "aspect-"),
    media: media ? parseMedia(media as HTMLElement, altText?.textContent?.trim()) : undefined,
    subHeading: subHeading?.textContent ? parseString(subHeading?.textContent) : undefined,
    heading: parseHeading(heading.querySelector("h1, h2, h3, h4, h5, h6")),
    copy: copy.innerHTML,
    position: block.classList.contains(IMAGE_LEFT) ? IMAGE_LEFT : (IMAGE_RIGHT as string),
    items: parseCallToActionList(cta),
    textColor: block.classList.contains(TEXT_WHITE) ? TEXT_WHITE : (TEXT_BLACK as string),
  };
}

export default function decorate(block: HTMLElement) {
  const { position, subHeading, heading, copy, media, items, ratio, textColor } = parseHTML(block);
  const root = createRoot(block);
  root.render(
    <TextImage
      position={position}
      subHeading={subHeading}
      heading={heading}
      content={copy}
      media={media}
      items={items}
      ratio={ratio}
      textColor={textColor}
    />,
  );
}
