import { useCallback, useMemo } from "react";
import { useFilterContext } from "@/lib/search/context/filters-context.ts";
import { FilterConfig } from "@/lib/search/types.ts";

export type FilterValue = ReturnType<typeof useFilters>["filters"][string];

export function useFilters() {
  const { filters: state, filtersConfig, setFilters, facet } = useFilterContext();

  const buildController = useCallback(
    (config: FilterConfig) => {
      const value = state[config.label.toLowerCase()] ?? [];

      const allOptions =
        config.options.length === 0 && facet
          ? Object.keys(facet[config.field] || {})
          : config.options;

      return {
        label: config.label,
        type: config.type,
        field: config.field,
        multiselect: config.multiselect,
        options: allOptions.map((option) => ({
          label: option,
          count: facet?.[config.field]?.[option] ?? 0,
        })),
        value,
        isActive: value !== undefined,
        set: (next: any) => {
          setFilters((prev) => ({
            ...prev,
            [config.label.toLowerCase()]: next,
          }));
        },
        clear: () => {
          setFilters((prev) => {
            const next = { ...prev };
            delete next[config.label.toLowerCase()];
            return next;
          });
        },
      };
    },
    [facet, state, setFilters],
  );

  const filters = useMemo(() => {
    return filtersConfig.reduce(
      (acc, config) => {
        acc[config.label.toLowerCase()] = buildController(config);
        return acc;
      },
      {} as Record<string, ReturnType<typeof buildController>>,
    );
  }, [filtersConfig, state, facet]);

  const resetFilters = useCallback(() => {
    setFilters({});
  }, [setFilters]);

  const hasFilters = useMemo(() => Object.keys(state).length > 0, [state]);

  return {
    filters,
    hasFilters,
    resetFilters,
  };
}
