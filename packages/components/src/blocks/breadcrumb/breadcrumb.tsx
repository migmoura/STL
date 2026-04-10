import { createRoot } from "react-dom/client";
import { DSBreadcrumb } from "@stihl-design-system/components";
import { useEffect, useState } from "react";
import type { BreadcrumbLink } from "@stihl-design-system/components";

function BreadcrumbBlock() {
  const [links, setLinks] = useState<BreadcrumbLink[]>([]);

  useEffect(() => {
    const segments = window.location.pathname.split("/").filter(Boolean);

    const cleanLabel = (segment: string) =>
      decodeURIComponent(segment)
        .replace(/\.html$/, "")
        .replace(/-/g, " ");

    setLinks([
      { label: "Home", href: "/" },
      ...segments.map((segment, index) => ({
        label: cleanLabel(segment),
        href: "/" + segments.slice(0, index + 1).join("/"),
      })),
    ]);
  }, []);

  if (links.length === 0) return null;

  return <DSBreadcrumb aria={{ "aria-label": "Breadcrumb" }} links={links} />;
}

export default async function decorate(block: HTMLElement) {
  const root = createRoot(block);
  root.render(<BreadcrumbBlock />);
}
