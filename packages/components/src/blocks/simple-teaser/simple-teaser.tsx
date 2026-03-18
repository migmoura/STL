import { createRoot } from "react-dom/client";
import { parseHeadline, parseSimpleTeaserList } from "@/lib/parser.ts";
import { SimpleTeaser, SimpleTeaserProps } from "@/features/content/blocks/simple-teaser.tsx";

export default async function decorate(block: HTMLElement) {
  const [titleWrapper, subtitleWrapper, linkWrapper, ...iconTeaserItems] = Array.from(
    block.children,
  );
  const headline = parseHeadline(
    titleWrapper.querySelector("h1, h2, h3, h4, h5"),
    subtitleWrapper.textContent,
    linkWrapper.querySelector("a"),
  );

  const aspectRatio =
    Array.from(block.classList)
      .find((className) => className.startsWith("ratio-"))
      ?.replace("ratio-", "aspect-")
      .replace(/^(aspect-\d+)-(\d+)$/, "$1/$2") || "aspect-2/1";

  const aspectRatioTyped = aspectRatio as SimpleTeaserProps["aspectRatio"];

  const items = parseSimpleTeaserList(Array.from(iconTeaserItems));
  const root = createRoot(block);
  root.render(<SimpleTeaser aspectRatio={aspectRatioTyped} {...headline} items={items} />);
}
