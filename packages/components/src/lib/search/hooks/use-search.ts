import { useSearchEngine } from "./use-search-engine.ts";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnyOrama, Results, search, TypedDocument } from "@orama/orama";
import { useDebounceValue } from "usehooks-ts";
import { useSort } from "@/lib/search/hooks/use-sort.ts";
import { entriesFromObject, valuesFromObject } from "@/lib/utils.tsx";
import { useFilterContext } from "@/lib/search/context/filters-context.ts";
import { useFilters } from "@/lib/search/hooks/use-filters.ts";
import { useSearchControlsContext } from "@/lib/search/context/search-controls-context.ts";

type EngineDocument<T extends AnyOrama> = TypedDocument<T>;

export type UseSearchParams<TKey extends string> = {
  engineKey: TKey;
  query?: string | undefined;
  options?: {
    debounce?: number;
    infinite?: boolean;
  };
};

type WhereClause = Record<string, { containsAny?: string[]; in?: string[] }>;

function buildWhereClause(
  filters: ReturnType<typeof useFilters>["filters"],
): WhereClause | undefined {
  const whereClause: WhereClause = {};

  valuesFromObject(filters).forEach((filter) => {
    const { field, value: values, type } = filter;

    if (values.length === 0) {
      return;
    }

    if (type === "enum[]") {
      if (!whereClause[field]) {
        whereClause[field] = { containsAny: [...values] };
      } else {
        whereClause[field].containsAny?.push(...values);
      }
    } else {
      if (!whereClause[field]) {
        whereClause[field] = { in: [...values] };
      } else {
        whereClause[field].in?.push(...values);
      }
    }
  });

  return Object.keys(whereClause).length > 0 ? whereClause : undefined;
}

function buildFacetsConfig(
  filtersConfig: ReturnType<typeof useFilterContext>["filtersConfig"],
): Record<string, { limit?: number }> {
  return filtersConfig.reduce(
    (acc, filter) => {
      acc[filter.field] = {};
      return acc;
    },
    {} as Record<string, { limit?: number }>,
  );
}

function extractFacets(
  facets: Record<string, { values: Record<string, number> }> | undefined,
): Record<string, Record<string, number>> {
  if (!facets) {
    return {};
  }

  return entriesFromObject(facets).reduce(
    (acc, [key, facet]) => {
      acc[key] = facet.values;
      return acc;
    },
    {} as Record<string, Record<string, number>>,
  );
}

export function useSearch<TKey extends string>({
  engineKey,
  query,
  options = {},
}: UseSearchParams<TKey>) {
  const engine = useSearchEngine(engineKey);
  const { selected } = useSort();
  const { filtersConfig, setFacet } = useFilterContext();
  const { count, limit, offset, loading, setCount, setLoading, setOffset } =
    useSearchControlsContext();
  const { filters } = useFilters();

  const [results, setResults] = useState<Results<EngineDocument<AnyOrama>>["hits"]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [debouncedQuery] = useDebounceValue(query, options.debounce ?? 100);

  const filtersRef = useRef(filters);
  const prevQueryRef = useRef(debouncedQuery);
  const prevFiltersKeyRef = useRef<string>("");
  const prevSortByRef = useRef(selected);
  const filtersKey = useMemo(() => {
    const newKey = JSON.stringify(filters);
    filtersRef.current = filters;
    return newKey;
  }, [filters]);

  useEffect(() => {
    const queryChanged = prevQueryRef.current !== debouncedQuery;
    const filtersChanged = prevFiltersKeyRef.current !== filtersKey;
    const sortChanged = prevSortByRef.current !== selected;

    if (options.infinite && (queryChanged || filtersChanged || sortChanged)) {
      setResults([]);
      setOffset(0);
    }

    prevQueryRef.current = debouncedQuery;
    prevFiltersKeyRef.current = filtersKey;
    prevSortByRef.current = selected;
  }, [debouncedQuery, filtersKey, selected, options.infinite, setOffset]);

  const where = useMemo(() => buildWhereClause(filtersRef.current), [filtersKey]);
  const facets = useMemo(() => buildFacetsConfig(filtersConfig), [filtersConfig]);
  const sortBy = useMemo(() => {
    if (!selected) {
      return undefined;
    }
    return "sortFn" in selected ? selected.sortFn : selected;
  }, [selected]);

  useEffect(() => {
    let cancelled = false;
    if (!engine) {
      return;
    }

    const runSearch = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await search(engine, {
          term: debouncedQuery,
          sortBy,
          limit,
          offset,
          where,
          facets,
        });

        if (!cancelled) {
          if (options.infinite && offset > 0) {
            setResults((prevResults) => [...prevResults, ...response.hits]);
          } else {
            setResults(response.hits);
          }
          setCount(response.count);
          setFacet(extractFacets(response.facets));
        }
      } catch (err) {
        if (!cancelled) {
          setError(err as Error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    if (sortBy) {
      runSearch();
    }

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, limit, offset, where, filtersKey, sortBy, engine, facets]);

  return {
    count,
    results,
    loading,
    error,
  };
}
