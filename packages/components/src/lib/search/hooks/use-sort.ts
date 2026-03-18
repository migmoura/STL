import { useCallback, useEffect, useMemo } from "react";
import { useFilterContext } from "../context/filters-context";

export function useSort() {
  const { sort, sortConfig, setSort } = useFilterContext();

  useEffect(() => {
    if (sortConfig.length > 0 && sort === undefined) {
      setSort(sortConfig[0]);
    }
  }, [sortConfig, sort, setSort]);

  const options = useMemo(() => {
    return sortConfig.map((option, index) => ({
      ...option,
      isSelected: option === sort,
      select: () => setSort(option ?? sortConfig[index]),
    }));
  }, [sortConfig, sort, setSort]);

  const clear = useCallback(() => {
    setSort(undefined);
  }, [setSort]);

  return {
    options,
    selected: sort,
    clear,
  };
}
