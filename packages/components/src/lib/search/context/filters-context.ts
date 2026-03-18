import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { FilterConfig } from "@/lib/search/types.ts";
import { Sort } from "@/types/base";

export type FilterState = Record<string, string[] | undefined>;
export type SortState = Sort | undefined;
export type FacetState = Record<string, Record<string, number>>;

export type FilterContextValue = {
  filters: FilterState;
  filtersConfig: FilterConfig[];
  setFilters: Dispatch<SetStateAction<FilterState>>;
  sort: SortState;
  sortConfig: Sort[];
  setSort: Dispatch<SetStateAction<SortState>>;
  facet: FacetState;
  setFacet: Dispatch<SetStateAction<FacetState>>;
};

export const FilterContext = createContext<FilterContextValue | null>(null);

export function useFilterContext() {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error("useFilterContext must be used inside FilterProvider");
  }
  return ctx;
}
