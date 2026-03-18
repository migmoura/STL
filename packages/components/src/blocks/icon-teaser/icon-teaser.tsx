import { createRoot } from "react-dom/client";
import { IconTeaser } from "@/components/icon-teaser/icon-teaser.tsx";
import { parseHeadline, parseIconTeaserList } from "@/lib/parser.ts";

function parseHtml(block: HTMLElement) {
  const [title, subheadline, link, ...iconTeaserItems] = Array.from(block.children);
  const items = parseIconTeaserList(Array.from(iconTeaserItems));

  return {
    ...parseHeadline(
      title.querySelector("h1, h2, h3, h4, h5, h6"),
      subheadline.textContent,
      link.querySelector("a"),
    ),
    items,
  };
}

export default async function decorate(block: HTMLElement) {
  const props = parseHtml(block);

  const root = createRoot(block);
  root.render(<IconTeaser {...props} />);
}
