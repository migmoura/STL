import { createRoot } from "react-dom/client";
import { parseAnchor, parseHeadline, parsePicture, parseString } from "@/lib/parser.ts";
import { GalleryTeaser } from "@/features/content/blocks/gallery-teaser.tsx";
import { ComponentProps } from "react";

function parseHtml(block: HTMLElement): ComponentProps<typeof GalleryTeaser> {
  const [headline, subheadline, link, ...items] = Array.from(block.children);

  return {
    ...parseHeadline(
      headline.querySelector("h1, h2, h3, h4, h5, h6"),
      subheadline.textContent,
      link.querySelector("a"),
    ),
    items: items.map((item) => {
      const [image, title, description, link] = Array.from(item.children);

      return {
        image: parsePicture(image.querySelector("picture")),
        link: parseAnchor(link.querySelector("a")),
        title: parseString(title.textContent),
        description: parseString(description.textContent),
      };
    }),
  };
}

export default async function decorate(block: HTMLElement) {
  const props = parseHtml(block);

  const root = createRoot(block);
  root.render(<GalleryTeaser {...props} />);
}
