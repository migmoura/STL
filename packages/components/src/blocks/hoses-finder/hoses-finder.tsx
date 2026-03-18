import { createRoot } from "react-dom/client";
import { parseHeadline, parsePicture, parseString } from "@/lib/parser.ts";
import { ComponentProps } from "react";
import { HosesFinder } from "@/features/hoses/blocks/hoses-finder.tsx";

function parseHtml(block: HTMLElement): ComponentProps<typeof HosesFinder> {
  const [titleWrapper, subtitleWrapper, linkWrapper, ctaWrapper, getUrl, pathPrefix, image] =
    Array.from(block.children);
  const picture = parsePicture(image.querySelector("picture"));
  return {
    ...parseHeadline(
      titleWrapper.querySelector("h1, h2, h3, h4, h5"),
      subtitleWrapper.textContent,
      linkWrapper.querySelector("a"),
    ),
    url: parseString(getUrl.textContent) || "",
    pathPrefix: parseString(pathPrefix.textContent) || "",
    defaultSrc: picture?.image.src || undefined,
    linkLabel: parseString(ctaWrapper.textContent) || "Read More",
  };
}

export default async function decorate(block: HTMLElement) {
  const props = parseHtml(block);

  const root = createRoot(block);
  root.render(<HosesFinder {...props} />);
}
