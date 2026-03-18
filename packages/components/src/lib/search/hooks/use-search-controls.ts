import { useCallback, useMemo } from "react";
import { useSearchControlsContext } from "@/lib/search/context/search-controls-context.ts";

export function useSearchControls() {
  const { count, limit, offset, loading, setOffset } = useSearchControlsContext();

  const totalPages = useMemo(() => {
    if (count === 0 || limit === 0) {
      return 0;
    }
    return Math.ceil(count / limit);
  }, [count, limit]);

  const currentPage = useMemo(() => {
    if (limit === 0) {
      return 1;
    }
    return Math.floor(offset / limit) + 1;
  }, [offset, limit]);

  const hasMore = useMemo(() => currentPage < totalPages, [currentPage, totalPages]);

  const hasPrevious = useMemo(() => currentPage > 1, [currentPage]);

  const isFirstPage = useMemo(() => currentPage === 1, [currentPage]);

  const isLastPage = useMemo(
    () => currentPage === totalPages || totalPages === 0,
    [currentPage, totalPages],
  );

  const pages = useMemo(() => {
    if (totalPages === 0) {
      return [];
    }
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  const goToPage = useCallback(
    (page: number) => {
      if (loading) {
        return;
      }

      const validPage = Math.max(1, Math.min(page, totalPages));
      const newOffset = (validPage - 1) * limit;

      if (newOffset !== offset) {
        setOffset(newOffset);
      }
    },
    [loading, totalPages, limit, offset, setOffset],
  );

  const next = useCallback(() => {
    if (hasMore) {
      goToPage(currentPage + 1);
    }
  }, [hasMore, currentPage, goToPage]);

  const previous = useCallback(() => {
    if (hasPrevious) {
      goToPage(currentPage - 1);
    }
  }, [hasPrevious, currentPage, goToPage]);

  const goToFirst = useCallback(() => {
    goToPage(1);
  }, [goToPage]);

  const goToLast = useCallback(() => {
    goToPage(totalPages);
  }, [goToPage, totalPages]);

  return {
    currentPage,
    totalPages,
    hasMore,
    hasPrevious,
    isFirstPage,
    isLastPage,
    loading,
    next,
    previous,
    goToPage,
    goToFirst,
    goToLast,
    pages,
  };
}
