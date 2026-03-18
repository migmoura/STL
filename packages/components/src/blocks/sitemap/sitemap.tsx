import { createRoot } from "react-dom/client";
import { Interweave } from "interweave";
import { transformWithLink } from "@/lib/utils.tsx";

export default async function decorate(block: HTMLElement) {
  const root = createRoot(block);
  root.render(<Interweave content={block.innerHTML} transform={transformWithLink} />);
}
