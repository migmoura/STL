import {
  IHoseSearchResponseItem,
  LookupCategory,
  LookupResponse,
} from "@/features/hoses/service.ts";
import { ComponentProps } from "react";
import { Teaser } from "@/components/ui/teaser.tsx";

export function lookupToFilters(lookup: LookupResponse | undefined) {
  if (!lookup) {
    return undefined;
  }

  const filters: Record<string, Record<string, { label: string }>> = {};

  for (const name of lookup[":names"]) {
    const category = lookup[name as keyof LookupResponse] as LookupCategory;
    filters[name] = category.data.reduce(
      (acc, item) => {
        acc[item.itemId] = { label: item.itemText };
        return acc;
      },
      {} as Record<string, { label: string }>,
    );
  }

  return filters;
}

export function iHoseToTeaser(linkLabel: string, pathPrefix = "") {
  return (hose: IHoseSearchResponseItem): ComponentProps<typeof Teaser> => {
    const urlFriendlyName = hose.SchlauchEN.toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]+/g, "")
      .replace(/\s+/g, "-");

    const slug = [urlFriendlyName, hose.idSchlauch.toString()]
      .filter((part) => part !== "")
      .join("-");

    return {
      title: hose.SchlauchEN,
      link: {
        href: `${pathPrefix}/${slug}`,
        title: hose.SchlauchEN,
        value: linkLabel,
      },
      image: {
        sources: [],
        image: {
          src: `${pathPrefix}/images/${slug}-teaser.png`,
          alt: hose.SchlauchEN,
        },
      },
    };
  };
}
