import { ReactNode, useState, useMemo } from "react";
import { SearchControlsContext, SearchControls } from "./search-controls-context.ts";

type SearchControlsProviderProps = {
  children: ReactNode;
  limit: number;
  initialOffset?: number;
};

export function SearchControlsProvider({
  children,
  limit = 12,
  initialOffset = 0,
}: SearchControlsProviderProps) {
  const [offset, setOffset] = useState(initialOffset);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const value = useMemo<SearchControls>(
    () => ({
      count,
      limit,
      offset,
      loading,
      setCount,
      setOffset,
      setLoading,
    }),
    [count, limit, offset, loading],
  );

  return <SearchControlsContext.Provider value={value}>{children}</SearchControlsContext.Provider>;
}
