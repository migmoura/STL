import { parseHeadline, parseOptionalString, parseString } from "@/lib/parser.ts";
import { createRoot } from "react-dom/client";
import { DSAccordion } from "@stihl-design-system/components";
import { useState } from "react";
import { Headline } from "@/components/ui/headline.tsx";
import { Interweave } from "interweave";
import { transformWithLink } from "@/lib/utils.tsx";
import type { Headline as HeadlineType } from "@/types/base.d.ts";

type Item = { id: string; value?: string; label?: string; open?: boolean };

type AccordionBlockProps = HeadlineType & {
  type: "single" | "multiple";
  items: Item[];
};

function AccordionBlock({ headline, subHeadline, link, type, items }: AccordionBlockProps) {
  const [openItem, setOpenItem] = useState<string | undefined>(
    items.find((item) => item.open)?.id,
  );
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(items.filter((item) => item.open).map((item) => item.id)),
  );

  return (
    <div className="space-y-20">
      <Headline headline={headline} subHeadline={subHeadline} link={link} />
      <div className="w-full max-w-[860px] mx-auto">
        {items.map((item) => (
          <DSAccordion
            key={item.id}
            id={item.id}
            summary={item.label ?? ""}
            isOpen={type === "single" ? openItem === item.id : openItems.has(item.id)}
            onToggle={(e) => {
              if (type === "single") {
                setOpenItem(e.currentTarget.open ? item.id : undefined);
              } else {
                setOpenItems((prev) => {
                  const next = new Set(prev);
                  if (e.currentTarget.open) {
                    next.add(item.id);
                  } else {
                    next.delete(item.id);
                  }
                  return next;
                });
              }
            }}
          >
            <Interweave content={item.value} transform={transformWithLink} />
          </DSAccordion>
        ))}
      </div>
    </div>
  );
}

async function parseHTML(block: HTMLElement): Promise<AccordionBlockProps> {
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
  root.render(<AccordionBlock {...props} />);
}
