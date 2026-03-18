import { ComponentProps } from "react";
import { parseHeadline, parseOptionalString, parseString } from "@/lib/parser.ts";
import { createRoot } from "react-dom/client";
import { Accordion } from "@/components/accordion/accordion.tsx";

async function parseHTML(block: HTMLElement): Promise<ComponentProps<typeof Accordion>> {
  const [headline, subheadline, link, ...items] = Array.from(block.children);

  return {
    ...parseHeadline(
      headline.querySelector("h1, h2, h3, h4, h5, h6"),
      subheadline.textContent,
      link.querySelector("a"),
    ),
    type: block.classList.contains("multiple") ? "multiple" : "single",
    items: items.map((item, index) => {
      const [id, label, value, open] = Array.from(item.children);
      return {
        id: parseString(id.textContent) ?? `item-${index}`,
        label: parseString(label.textContent),
        value: value.innerHTML,
        open: parseOptionalString(open?.textContent) === "open",
      };
    }),
  };
}

export default async function decorate(block: HTMLElement) {
  const props = await parseHTML(block);
  const root = createRoot(block);
  root.render(<Accordion {...props} />);
}
