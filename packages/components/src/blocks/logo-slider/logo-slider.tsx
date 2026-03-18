import { createRoot } from "react-dom/client";
import { parseHeadline, parsePicture, parseString } from "@/lib/parser.ts";
import { LogoSlider } from "@/components/logo-slider/logo-slider.tsx";
import { ComponentProps } from "react";

export const parseHtml = (block: HTMLElement): ComponentProps<typeof LogoSlider> => {
  const [headline, subheadline, link, ...logos] = Array.from(block.children);

  const mappedLogos = logos?.map((logo) => {
    const picture = logo.querySelector("picture");
    const alt = logo.querySelector("p");

    return {
      logo: parsePicture(picture),
      alt: parseString(alt?.textContent),
    };
  });

  return {
    ...parseHeadline(
      headline.querySelector("h1, h2, h3, h4, h5, h6"),
      subheadline.textContent,
      link.querySelector("a"),
    ),
    logos: mappedLogos || [],
  };
};

export default async function decorate(block: HTMLElement) {
  const props = parseHtml(block);

  const root = createRoot(block);
  root.render(<LogoSlider {...props} />);
}
