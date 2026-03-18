import { createRoot } from "react-dom/client";
import Breadcrumb from "@/features/navigation/blocks/breadcrumb.tsx";

export default async function decorate(block: HTMLElement) {
  const root = createRoot(block);
  root.render(<Breadcrumb />);
}
