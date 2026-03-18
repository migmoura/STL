import { createRoot } from "react-dom/client";
import { ComponentProps } from "react";
import { parseHeadline, parseString } from "@/lib/parser.ts";
import { DistributorLocator } from "@/features/maps/blocks/distributor-locator.tsx";

function parseHTML(block: HTMLElement): ComponentProps<typeof DistributorLocator> {
  const [headline, subheadline, description, apiKey, mapID, defaultCoordinates, units] = Array.from(
    block.children,
  );

  return {
    ...parseHeadline(
      headline.querySelector("h1, h2, h3, h4, h5, h6"),
      subheadline.textContent,
      undefined,
    ),
    description: parseString(description.textContent),
    apiKey: parseString(apiKey.textContent),
    mapID: parseString(mapID.textContent),
    units: parseString(units.children.item(1)?.textContent),
    defaultCoordinates: JSON.parse(defaultCoordinates.textContent || "{}"),
    locatorType: block.classList.contains("aftermarket") ? "aftermarket" : "gad",
  };
}

export default function decorate(block: HTMLElement) {
  const props = parseHTML(block);

  const root = createRoot(block);

  root.render(<DistributorLocator {...props} />);
}
