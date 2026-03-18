import { createRoot } from "react-dom/client";
import { parseAnchor, parseOptionalString, parsePicture } from "@/lib/parser.ts";
import { SimpleImage } from "@/features/content/simple-blocks/simple-image.tsx";

export default function decorate(block: HTMLElement) {
  const [picture, caption, link] = Array.from(block.children);
  const [image, watermark] = Array.from(picture.querySelectorAll("p"));
  const anchor = link.querySelector("a");

  const props = {
    picture: parsePicture(image.querySelector("picture")),
    watermark: parseOptionalString(watermark?.textContent),
    caption: parseOptionalString(caption?.textContent),
    link: anchor ? parseAnchor(anchor) : undefined,
  };

  const root = createRoot(block);
  root.render(<SimpleImage {...props} />);
}
