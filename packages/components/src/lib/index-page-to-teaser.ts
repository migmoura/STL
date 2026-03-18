import { Highlighted } from "@/features/search/hooks/use-search.ts";
import type { OramaIndexPage } from "@/types/entities";
import { getHighlightFromHighlightedField, getValueFromHighlightedField } from "@/lib/utils.tsx";
import { fromUnixTime } from "date-fns";

export function indexPageToTeaser(linkLabel: string) {
  return (item: Highlighted<OramaIndexPage, "title" | "content" | "description">) => ({
    title: getHighlightFromHighlightedField(item.title),
    description: getValueFromHighlightedField(item.description),
    hint: item.publishedAt ? fromUnixTime(item.publishedAt).toLocaleDateString("de-DE") : null,
    tags: item.tags,
    link: {
      href: item.path,
      title: getValueFromHighlightedField(item.title),
      value: linkLabel,
    },
    image: {
      sources: [],
      image: {
        src: item.image,
        alt: item.imageAlt || item.title,
      },
    },
  });
}

export function indexPageToTeaserNoHighlights(linkLabel: string) {
  return (item: Highlighted<OramaIndexPage, "title" | "content" | "description">) => ({
    title: getValueFromHighlightedField(item.title),
    description: getValueFromHighlightedField(item.description),
    hint: item.publishedAt ? fromUnixTime(item.publishedAt).toLocaleDateString("de-DE") : null,
    tags: item.tags,
    link: {
      href: item.path,
      title: getValueFromHighlightedField(item.title),
      value: linkLabel,
    },
    image: {
      sources: [],
      image: {
        src: item.image,
        alt: item.imageAlt || item.title,
      },
    },
  });
}
