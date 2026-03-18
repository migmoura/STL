import { createRoot } from "react-dom/client";
import {
  TopTeaser,
  TopTeaserItem,
  TopTeaserVariant,
  USE_GRADIENT,
} from "@/features/content/blocks/top-teaser.tsx";
import { ComponentProps } from "react";
import {
  parseAnchor,
  parseHeading,
  parseOptionalString,
  parsePicture,
  parseUniversalEditor,
} from "@/lib/parser.ts";

const transformItem = (item: Element): TopTeaserItem => {
  const [image, eyebrow, heading, link, secondaryLink] = Array.from(item.children);

  return {
    image: parsePicture(image.querySelector("picture")) ?? undefined,
    eyebrow: parseOptionalString(eyebrow.textContent),
    heading: parseHeading(heading.querySelector("h1, h2, h3, h4, h5, h6")),
    ctaButton: link?.children?.length
      ? {
          link: parseAnchor(link.querySelector("a")),
        }
      : undefined,
    secondaryCtaButton: secondaryLink?.children?.length
      ? {
          link: parseAnchor(secondaryLink.querySelector("a")),
        }
      : undefined,
    universalEditor: parseUniversalEditor(item),
  };
};

function parseHTML(block: HTMLElement): ComponentProps<typeof TopTeaser> {
  const [items, ...others] = Array.from(block.children);

  const variant = block.classList.contains(TopTeaserVariant.SECONDARY)
    ? TopTeaserVariant.SECONDARY
    : TopTeaserVariant.PRIMARY;
  const opacity = block.classList.contains(USE_GRADIENT);

  if (others) {
    return {
      variant,
      opacity,
      items: Array.from([items, ...others])?.map(transformItem),
    };
  }

  return { variant, opacity, items: [transformItem(items)] };
}

export default function decorate(block: HTMLElement) {
  const { items, variant, opacity } = parseHTML(block);

  const root = createRoot(block);

  root.render(<TopTeaser items={items} variant={variant} opacity={opacity} />);
}
