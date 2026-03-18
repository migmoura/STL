import { createRoot } from "react-dom/client";
import { parseOptionalString, parseString } from "@/lib/parser.ts";
import { ComponentProps } from "react";
import { SearchResults } from "@/features/search/blocks/search-results.tsx";

function parseHtml(block: HTMLElement): ComponentProps<typeof SearchResults> {
  const [ctaWrapper, getUrl, filter] = Array.from(block.children);
  const [, label, hidden] = Array.from(filter?.children || []);

  const locale = window.location.pathname.split("/").slice(1, 3).join("/");

  return {
    labels: {
      filter: parseOptionalString(label?.textContent) || "Add filter",
      link: parseOptionalString(ctaWrapper?.textContent) || "Read More",
    },
    config: {
      filter: {
        hidden: parseOptionalString(hidden?.textContent) === "hidden",
        label: parseOptionalString(label?.textContent) || "Add filter",
      },
    },
    url:
      parseString(getUrl.textContent)
        .split(",")
        .map((url) => url.trim().replace("global/en", locale)) || [],
  };
}

export default async function decorate(block: HTMLElement) {
  const props = parseHtml(block);

  const root = createRoot(block);
  root.render(<SearchResults {...props} />);
}
