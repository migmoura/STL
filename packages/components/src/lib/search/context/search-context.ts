import { Orama } from "@orama/orama";
import { createContext, useContext } from "react";

export type SearchEngineRegistry = {
  [key: string]: Orama<any> | undefined;
};

export type SearchContextValue<T extends SearchEngineRegistry = SearchEngineRegistry> = {
  getEngine: <K extends keyof T>(key: K) => T[K];
};

export const SearchContext = createContext<SearchContextValue<any> | null>(null);

export function useSearchContext() {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error("useSearchContext must be used inside SearchProvider");
  }
  return ctx;
}
