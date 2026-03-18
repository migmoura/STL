import { ComponentProps, ReactNode, useMemo } from "react";
import { SearchContext, SearchContextValue, SearchEngineRegistry } from "./search-context.ts";
import { FiltersProvider } from "@/lib/search/context/filters-provider.tsx";
import { SearchControlsProvider } from "@/lib/search/context/search-controls-provider.tsx";

type Props<T extends SearchEngineRegistry> = {
  children: ReactNode;
  engines: T | undefined;
  limit?: number;
} & ComponentProps<typeof FiltersProvider>;

export function SearchProvider<T extends SearchEngineRegistry = SearchEngineRegistry>({
  engines,
  children,
  limit = 12,
  ...filters
}: Props<T>) {
  const value = useMemo(() => {
    return {
      getEngine: <K extends keyof T>(key: K): T[K] => {
        const engine = engines?.[key];
        if (!engine) {
          throw new Error(`Search engine not found: ${String(key)}`);
        }
        return engine;
      },
    } as SearchContextValue<T>;
  }, [engines]);

  return (
    <SearchContext.Provider value={value}>
      <SearchControlsProvider limit={limit}>
        <FiltersProvider {...filters}>{children}</FiltersProvider>
      </SearchControlsProvider>
    </SearchContext.Provider>
  );
}
