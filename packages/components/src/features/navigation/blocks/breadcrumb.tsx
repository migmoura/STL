import { Fragment, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, House } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Breadcrumb() {
  const [pathSegments, setPathSegments] = useState<string[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const segments = window.location.pathname.split("/").filter(Boolean);

      setPathSegments(segments);
    }
  }, []);

  if (pathSegments.length === 0) {
    return null;
  }

  const buildHref = (index: number) => "/" + pathSegments.slice(0, index + 2).join("/");

  // Clean segment names
  const cleanSegmentName = (segment: string | undefined) => {
    if (!segment) {
      return null;
    }

    return decodeURIComponent(segment)
      .replace(/\.html$/, "") // Remove .html extension
      .replace(/-/g, " "); // Replace hyphens with spaces
  };

  // Get previous page name for mobile view
  const getPreviousPage = () => {
    if (pathSegments.length <= 3) {
      return "Home";
    }
    return cleanSegmentName(pathSegments[pathSegments.length - 2]);
  };

  return (
    <nav aria-label={t("Breadcrumb")} className="fluid py-6 md:pt-8 md:pb-28 text-gray-1">
      <div className="md:hidden">
        <a href={buildHref(pathSegments.length - 3)} className="flex items-center">
          <ChevronLeft className="size-6 text-black" />
          <span className="shadow-black hover:shadow-[inset_0_-3px_0_0] active:shadow-yellow">
            {t("Back to")}
            <span className="capitalize">{` ${getPreviousPage()}`}</span>
          </span>
        </a>
      </div>
      <div className="hidden md:flex gap-2 flex-wrap items-center leading-label text-sm">
        <a href={buildHref(0)} className="hover:underline">
          <House />
        </a>
        <ChevronRight className="size-4" />
        {pathSegments.slice(2, -1).map((segment, index) => {
          const href = buildHref(index + 1);
          return (
            <Fragment key={href}>
              <a
                href={href}
                className="capitalize font-semibold shadow-black hover:shadow-[inset_0_-3px_0_0] active:shadow-yellow"
              >
                {cleanSegmentName(segment)}
              </a>
              <ChevronRight className="size-4" />
            </Fragment>
          );
        })}
        <span className="capitalize font-light">{cleanSegmentName(pathSegments.at(-1))}</span>
      </div>
    </nav>
  );
}
