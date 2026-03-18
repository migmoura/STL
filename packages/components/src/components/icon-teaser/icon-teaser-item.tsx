import type { Picture } from "@/types/base.d.ts";
import { Interweave } from "interweave";
import { transformWithLink } from "@/lib/utils.tsx";

export type IconTeaserItemProp = {
  icon: Picture;
  title: string;
  description: string;
  universalEditor: Record<string, string>;
};

export function IconTeaserItem({ item }: Readonly<{ item: IconTeaserItemProp }>) {
  return (
    <div className="max-w-xs" {...item.universalEditor}>
      <div className="mb-10 w-max-16 h-max-16">
        <picture className="area-stack">
          {item.icon.sources?.map((source) => (
            <source
              key={`icon-${source.srcset}`}
              type={source.type ?? ""}
              srcSet={source.srcset ?? ""}
              media={source.media ?? ""}
            />
          ))}
          <img loading="lazy" alt={"alt"} src={item.icon.image.src ?? ""} />
        </picture>
      </div>
      <h3 className="font-bold mb-4">{item.title}</h3>
      <Interweave
        className="text-sm"
        content={item.description}
        transform={transformWithLink}
        tagName="p"
      />
    </div>
  );
}
