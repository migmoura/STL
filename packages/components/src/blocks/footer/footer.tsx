import { createRoot } from "react-dom/client";
import { Footer } from "@/components/footer/footer.tsx";

export default async function decorate(block: HTMLElement) {
  const root = createRoot(block);
  root.render(<Footer />);
}
