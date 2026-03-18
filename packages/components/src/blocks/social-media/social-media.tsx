import { createRoot } from "react-dom/client";
import SocialMedia from "@/components/social-media/social-media.tsx";

export default function decorate(block: HTMLElement) {
  const root = createRoot(block);
  root.render(<SocialMedia />);
}
