import { createRoot } from "react-dom/client";
import { DSLinkCard } from "@stihl-design-system/components";
import { parseString } from "@/lib/parser.ts";

export default function decorate(block: HTMLElement) {
  const [titleWrapper, contentWrapper, ctaWrapper] = block.children;

  const title = parseString(titleWrapper?.textContent);
  const content = parseString(contentWrapper?.textContent);
  const anchor = ctaWrapper?.querySelector("a");
  const ctaLabel = parseString(anchor?.textContent);
  const href = anchor?.href;

  const root = createRoot(block);
  root.render(
    <DSLinkCard
      heading={title ?? ""}
      description={content}
      href={href}
      decorativeLinkButtonProps={ctaLabel ? { label: ctaLabel } : undefined}
    />,
  );
}
