import { createContext, useContext } from "react";

export type SearchControls = {
  count: number;
  limit: number;
  offset: number;
  loading: boolean;
  setOffset: (offset: number) => void;
  setCount: (count: number) => void;
  setLoading: (loading: boolean) => void;
};

export const SearchControlsContext = createContext<SearchControls | null>(null);

export function useSearchControlsContext() {
  const ctx = useContext(SearchControlsContext);
  if (!ctx) {
    throw new Error("useSearchControlsContext must be used inside SearchControlsProvider");
  }
  return ctx;
}
