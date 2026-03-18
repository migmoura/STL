import { ReactNode, useMemo, useState } from "react";
import { FacetState, FilterContext, FilterContextValue, FilterState } from "./filters-context.ts";
import { FilterConfig } from "@/lib/search/types.ts";
import { Sort } from "@/types/base";

type FiltersProviderProps = {
  children: ReactNode;
  filtersConfig?: FilterConfig[];
  sortConfig?: Sort[];
};

export function FiltersProvider({
  children,
  filtersConfig = [],
  sortConfig = [],
}: FiltersProviderProps) {
  const [filters, setFilters] = useState<FilterState>({});
  const [sort, setSort] = useState<Sort | undefined>();
  const [facet, setFacet] = useState<FacetState>({});

  const value = useMemo<FilterContextValue>(
    () => ({ filters, filtersConfig, setFilters, sort, sortConfig, setSort, facet, setFacet }),
    [filters, filtersConfig, sort, sortConfig, facet],
  );

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}
