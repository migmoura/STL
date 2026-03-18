import { createRoot } from "react-dom/client";
import { parseAnchor, parseString } from "@/lib/parser.ts";
import { TextBlock } from "@/features/content/blocks/text-block.tsx";
import DOMPurify from "dompurify";

export default async function decorate(block: HTMLElement) {
  const props = parseHtml(block);
  const root = createRoot(block);
  root.render(<TextBlock {...props} />);
}

const parseHtml = (block: HTMLElement) => {
  const [heading, text, primaryCta, secondaryCta, variant] = Array.from(block.children);

  return {
    heading: heading?.innerHTML ? DOMPurify.sanitize(heading?.innerHTML) : undefined,
    text: text?.innerHTML ? DOMPurify.sanitize(text?.innerHTML) : undefined,
    primaryCta: primaryCta?.querySelector("a")
      ? parseAnchor(primaryCta?.querySelector("a"))
      : undefined,
    secondaryCta: secondaryCta?.querySelector("a")
      ? parseAnchor(secondaryCta?.querySelector("a"))
      : undefined,
    variant: parseString(variant.textContent) ?? "horizontal",
  };
};
