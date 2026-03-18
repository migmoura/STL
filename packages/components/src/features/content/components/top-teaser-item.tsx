import type { Heading as HeadingType, Link as LinkType } from "@/types/base.d.ts";
import { Heading } from "../../../components/ui/heading.tsx";
import { Link } from "@/components/ui/link.tsx";
import type { UniversalEditor } from "@/types/universal-editor.d.ts";
import { clsx } from "clsx";
import { ReactNode } from "react";

type TopTeaserItemProps = {
  children: ReactNode;
  opacity?: boolean;
  heading: HeadingType;
  eyebrow?: string;
  ctaButton?: {
    link: LinkType;
  };
  secondaryCtaButton?: {
    link: LinkType;
  };
  universalEditor?: UniversalEditor;
};

export function TopTeaserItem({
  heading,
  eyebrow,
  ctaButton,
  secondaryCtaButton,
  opacity = true,
  children,
}: TopTeaserItemProps) {
  const opacityClass = opacity ? "bg-linear-to-t from-transparent to-black/90" : "";

  return (
    <div className="grid grid-areas-stack items-end">
      {children}
      <div className={clsx("area-stack size-full", opacityClass)} />
      <div className="fluid py-14 area-stack size-full grid 2xl:grid-cols-2">
        <div className="flex flex-col md:justify-center gap-5 md:gap-8 text-white md:col-span-2 2xl:col-span-1">
          {eyebrow ? <p>{eyebrow}</p> : null}
          <Heading {...heading} display className="line-clamp-4 md:line-clamp-2">
            {heading.value}
          </Heading>
          <div className={"flex gap-4"}>
            {ctaButton && (
              <Link key={ctaButton.link?.href} {...ctaButton.link} variant={"primary"}>
                {ctaButton.link?.value}
              </Link>
            )}
            {secondaryCtaButton && (
              <Link
                key={secondaryCtaButton.link?.href}
                {...secondaryCtaButton.link}
                variant={"secondary"}
              >
                {secondaryCtaButton.link?.value}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
