import { IconTeaserItem, IconTeaserItemProp } from "@/components/icon-teaser/icon-teaser-item.tsx";
import { Headline } from "@/components/ui/headline.tsx";
import { ComponentProps } from "react";

type IconTeaserProps = {
  items: IconTeaserItemProp[];
} & ComponentProps<typeof Headline>;

export function IconTeaser({ items, ...headline }: Readonly<IconTeaserProps>) {
  return (
    <div className="space-y-20">
      <Headline {...headline} />
      <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 gap-x-10 gap-y-8 lg:mx-[150px]">
        {items.map((icon) => (
          <IconTeaserItem key={icon.title} item={icon} />
        ))}
      </div>
    </div>
  );
}
