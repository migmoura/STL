import { Headline } from "@/components/ui/headline.tsx";
import {
  Accordion as AccordionUi,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { ComponentProps, useEffect, useState } from "react";
import { Interweave } from "interweave";
import { transformWithLink } from "@/lib/utils.tsx";

type AccordionProps = {
  items: { id: string; value?: string; label?: string; open?: boolean }[];
} & Pick<ComponentProps<typeof AccordionUi>, "type"> &
  ComponentProps<typeof Headline>;

export function Accordion({ headline, subHeadline, link, type, items }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | undefined>(
    items.find((item) => item.open)?.id || undefined,
  );
  const [openItems, setOpenItems] = useState<string[] | undefined>(
    items.filter((item) => item.open).map((item) => item.id) || undefined,
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setOpenItem(hash);
      setOpenItems([hash]);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setOpenItem(hash);
        setOpenItems([hash]);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="space-y-20">
      <Headline headline={headline} subHeadline={subHeadline} link={link} />
      {type === "single" ? (
        <AccordionUi
          type="single"
          collapsible
          className="w-full max-w-[860px] mx-auto"
          value={openItem}
          onValueChange={setOpenItem}
        >
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger id={item.id}>{item.label}</AccordionTrigger>
              <AccordionContent>
                <Interweave className="prose" content={item.value} transform={transformWithLink} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionUi>
      ) : (
        <AccordionUi
          type="multiple"
          className="w-full max-w-[860px] mx-auto"
          value={openItems}
          onValueChange={setOpenItems}
        >
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger id={item.id}>{item.label}</AccordionTrigger>
              <AccordionContent>
                <Interweave className="prose" content={item.value} transform={transformWithLink} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionUi>
      )}
    </div>
  );
}
