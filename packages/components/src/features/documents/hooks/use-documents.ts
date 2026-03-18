import { useSearch } from "@/lib/search/hooks/use-search.ts";

export const useDocuments = (query?: string | undefined) => {
  return useSearch({
    engineKey: "documents",
    query,
    options: {
      infinite: true,
    },
  });
};
