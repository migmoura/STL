import { SORT_OPTIONS } from "@/features/search/constants.ts";
import { useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";

type QueryParams = {
  page: number;
  tags: string[];
  years: string[];
  sort: keyof typeof SORT_OPTIONS;
};

export function getParamsFromURL(): QueryParams {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("page") || "1", 10);
  const tags = params.getAll("tags");
  const years = params.getAll("year").map(String);
  const sort = (params.get("sort") as keyof typeof SORT_OPTIONS) ?? "newest";
  return { page, tags, sort, years };
}

export function setParamsInURL({ page, tags, sort, years }: QueryParams) {
  const params = new URLSearchParams();
  params.set("page", page.toString());
  tags.forEach((tag) => params.append("tags", tag));
  years.forEach((year) => params.append("year", year));
  if (sort) {
    params.set("sort", sort);
  }
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);
}

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  buildHref: (page: number) => string;
};

export function ResultsPagination({ currentPage, totalPages, buildHref }: PaginationProps) {
  const visiblePages: number[] = useMemo(() => {
    const pages: number[] = [];
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    pages.push(1);
    if (start > 2) {
      pages.push(-1);
    } // ellipsis

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push(-1);
    } // ellipsis
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationPrevious href={buildHref(currentPage - 1)} isActive={currentPage === 1} />
      <PaginationContent>
        {visiblePages.map((p) =>
          p === -1 ? (
            <PaginationItem key={`ellipsis-${p}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                className="group-data-[active=true]:shadow-[inset_0_-2px_0_0] group-data-[active=true]:shadow-pressed"
                href={buildHref(p)}
                isActive={p === currentPage}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
      </PaginationContent>
      <PaginationNext href={buildHref(currentPage + 1)} isActive={currentPage === totalPages} />
    </Pagination>
  );
}
