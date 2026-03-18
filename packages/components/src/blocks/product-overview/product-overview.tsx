import { createRoot } from "react-dom/client";
import { parseCallToAction, parseHeading, parseMedia, parseOptionalString } from "@/lib/parser.ts";
import {
  ProductOverview,
  ProductOverviewType,
} from "@/features/product/blocks/product-overview.tsx";
import { Media } from "@/features/content/blocks/text-image.tsx";

function parseHTML(block: HTMLElement): ProductOverviewType {
  const [heading, content, technicalLabel, technicalText, ctaLink, secondaryCtaLink, ...pictures] =
    Array.from(block.children);

  return {
    heading: parseHeading(heading.querySelector("h1, h2, h3, h4, h5, h6")),
    content: content?.innerHTML,
    technicalLabel: parseOptionalString(technicalLabel.innerHTML),
    technicalText: technicalText.querySelector("ul")?.outerHTML,
    ctaLink: parseCallToAction(ctaLink),
    secondaryCtaLink: parseCallToAction(secondaryCtaLink),
    pictures: pictures
      .map((picture) => parseMedia(picture as HTMLElement))
      .filter(Boolean) as Media[],
  };
}

export default function decorate(block: HTMLElement) {
  const props = parseHTML(block);

  const root = createRoot(block);
  root.render(<ProductOverview {...props} />);
}
