import "@/lib/i18next.ts";
import { createRoot } from "react-dom/client";
import { Header } from "@/features/navigation/blocks/header.tsx";

export default async function decorate(block: HTMLElement) {
  const root = createRoot(block);
  root.render(<Header />);
}
