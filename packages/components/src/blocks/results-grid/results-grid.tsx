import { createRoot } from "react-dom/client";
import { parseHeadline, parseOptionalString, parseString } from "@/lib/parser.ts";
import { ResultsGrid } from "@/features/search/blocks/results-grid.tsx";
import { ComponentProps } from "react";

function findByFirstElementText(elements: Element[], text: string) {
  return elements.find((el) => el?.firstElementChild?.textContent?.trim() === text);
}

function parseHtml(block: HTMLElement): ComponentProps<typeof ResultsGrid> {
  const [titleWrapper, subtitleWrapper, linkWrapper, ctaWrapper, getUrl, ...filters] = Array.from(
    block.children,
  );
  const filter = findByFirstElementText(filters, "filter");
  const [, filterLabel, filterHidden] = Array.from(filter?.children || []);
  const year = findByFirstElementText(filters, "year");
  const [, yearLabel, yearHidden] = Array.from(year?.children || []);
  const search = findByFirstElementText(filters, "search");
  const [, searchLabel, searchHidden] = Array.from(search?.children || []);

  const locale = window.location.pathname.split("/").slice(1, 3).join("/");

  return {
    ...parseHeadline(
      titleWrapper.querySelector("h1, h2, h3, h4, h5"),
      subtitleWrapper.textContent,
      linkWrapper.querySelector("a"),
    ),
    labels: {
      link: parseOptionalString(ctaWrapper?.textContent) || "Read More",
    },
    config: {
      search: {
        hidden: parseOptionalString(searchHidden?.textContent) === "hidden",
        label: parseOptionalString(searchLabel?.textContent) || "Search...",
      },
      filter: {
        hidden: parseOptionalString(filterHidden?.textContent) === "hidden",
        label: parseOptionalString(filterLabel?.textContent) || "Add filter",
      },
      year: {
        hidden: parseOptionalString(yearHidden?.textContent) === "hidden",
        label: parseOptionalString(yearLabel?.textContent) || "Add year",
      },
    },
    url: parseString(getUrl.textContent).replace("global/en", locale) || "",
    showDescription: !block.className.includes("no-description"),
  };
}

export default async function decorate(block: HTMLElement) {
  const props = parseHtml(block);

  const root = createRoot(block);
  root.render(<ResultsGrid {...props} />);
}
