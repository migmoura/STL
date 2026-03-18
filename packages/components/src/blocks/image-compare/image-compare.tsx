import { createRoot } from "react-dom/client";
import { parseOptionalString, parsePicture } from "@/lib/parser.ts";
import { SimpleImageCompare } from "@/features/content/simple-blocks/simple-image-compare.tsx";

export default function decorate(block: HTMLElement) {
  const [beforePicture, afterPicture, caption] = Array.from(block.children);

  const props = {
    pictures: [
      parsePicture(beforePicture.querySelector("picture")),
      parsePicture(afterPicture.querySelector("picture")),
    ] satisfies [ReturnType<typeof parsePicture>, ReturnType<typeof parsePicture>],
    caption: parseOptionalString(caption?.textContent),
  };

  const root = createRoot(block);
  root.render(<SimpleImageCompare {...props} />);
}
