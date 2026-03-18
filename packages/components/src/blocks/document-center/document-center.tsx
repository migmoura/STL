import "@/lib/i18next.ts";
import { createRoot } from "react-dom/client";
import { parseHeadline, parseOptionalString, parseString } from "@/lib/parser.ts";
import { ComponentProps } from "react";
import { DocumentCenter } from "@/features/documents/blocks/document-center.tsx";
import { FilterConfig } from "@/lib/search/types.ts";

const DEFAULT_FILTERS = [
  {
    field: "categories",
    label: "Categories",
    type: "enum[]",
    multiselect: true,
    options: [],
  },
  {
    field: "type",
    label: "Document Type",
    type: "enum",
    multiselect: true,
    options: [],
  },
  {
    field: "locale",
    label: "Language",
    type: "enum",
    multiselect: true,
    options: [],
  },
] satisfies FilterConfig[];

const typeMap = {
  categories: "enum[]",
  topics: "enum[]",
  type: "enum",
  locale: "enum",
} as const;

function parseHtml(block: HTMLElement): ComponentProps<typeof DocumentCenter> {
  const [
    titleWrapper,
    subtitleWrapper,
    linkWrapper,
    ctaWrapper,
    getUrl,
    localeUrl,
    includes,
    tags,
    consent,
    disclaimer,
    ...filters
  ] = Array.from(block.children);

  return {
    ...parseHeadline(
      titleWrapper.querySelector("h1, h2, h3, h4, h5"),
      subtitleWrapper.textContent,
      linkWrapper.querySelector("a"),
    ),
    filtersConfig:
      filters.length > 0
        ? filters.map((filter) => {
            const [fieldWrapper, labelWrapper, optionsWrapper] = Array.from(filter.children);
            const field = parseString(fieldWrapper.textContent);

            return {
              field,
              label: parseString(labelWrapper?.textContent),
              type: typeMap[field as keyof typeof typeMap],
              multiselect: true,
              options:
                parseOptionalString(optionsWrapper.textContent)
                  ?.split(",")
                  .map((opt) => opt.trim()) || [],
            };
          })
        : DEFAULT_FILTERS,
    include:
      parseOptionalString(Array.from(includes?.children ?? [])[1]?.textContent)
        ?.split(",")
        .map((url) => url.trim()) || [],
    linkLabel: parseString(ctaWrapper.textContent) || "Read More",
    localeUrl: parseString(localeUrl.textContent) || "",
    tags:
      parseOptionalString(Array.from(tags?.children ?? [])[1]?.textContent)
        ?.split(",")
        .map((url) => url.trim()) || [],
    url: parseString(getUrl.textContent) || "",
    isEnabled:
      consent?.children?.length === 2
        ? parseString(consent.children[1].textContent) === "true"
        : false,
    dialogHtml: disclaimer?.children?.length === 1 ? disclaimer.children[0].innerHTML : undefined,
  };
}

export default async function decorate(block: HTMLElement) {
  const props = parseHtml(block);
  const root = createRoot(block);
  root.render(<DocumentCenter {...props} />);
}
