import { createRoot } from "react-dom/client";
import { parseBigImageList, parseHeadline } from "@/lib/parser.ts";
import { BigImageTeaser } from "@/features/content/blocks/big-image-teaser.tsx";
import { ComponentProps } from "react";

function parseHtml(block: HTMLElement): ComponentProps<typeof BigImageTeaser> {
  const [headline, subheadline, link, ...items] = Array.from(block.children);

  return {
    ...parseHeadline(
      headline.querySelector("h1, h2, h3, h4, h5, h6"),
      subheadline.textContent,
      link.querySelector("a"),
    ),
    items: parseBigImageList(items),
  };
}

export default async function decorate(block: HTMLElement) {
  const props = parseHtml(block);

  const root = createRoot(block);
  root.render(<BigImageTeaser {...props} />);
}
