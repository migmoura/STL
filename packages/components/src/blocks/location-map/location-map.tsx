import { createRoot } from "react-dom/client";
import { ComponentProps } from "react";
import { parseHeadline, parseString } from "@/lib/parser.ts";
import { LocationMapProvider } from "@/features/maps/blocks/location-map.tsx";

function parseHTML(block: HTMLElement): ComponentProps<typeof LocationMapProvider> {
  const [headline, subheadline, description, apiKey, mapID, locationsUrl] = Array.from(
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
    locationsUrl: parseString(locationsUrl.textContent),
  };
}

export default function decorate(block: HTMLElement) {
  const props = parseHTML(block);
  const root = createRoot(block);

  root.render(<LocationMapProvider {...props} />);
}
