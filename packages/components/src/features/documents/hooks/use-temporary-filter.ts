import { useCallback, useEffect, useState } from "react";
import { FilterValue } from "@/lib/search/hooks/use-filters.ts";

export function useTemporaryFilter(
  filter: FilterValue,
  { reset, callback }: { reset?: boolean; callback?: () => void } = {},
) {
  const [tempSelection, setTempSelection] = useState<string[]>(() => [...filter.value]);

  useEffect(() => {
    if (!reset) {
      setTempSelection([...filter.value]);
    }
  }, [reset, filter.value]);

  const isChecked = useCallback(
    (option: string) => {
      return tempSelection.includes(option);
    },
    [tempSelection],
  );

  const handleCheckedChange = useCallback(
    (option: string, checked: boolean) => {
      setTempSelection((prev) => {
        if (filter.multiselect) {
          if (checked && !prev.includes(option)) {
            return [...prev, option];
          }
          if (!checked) {
            return prev.filter((item) => item !== option);
          }
          return prev;
        }
        return checked ? [option] : [];
      });
    },
    [filter.multiselect],
  );
  const handleReset = useCallback(() => {
    setTempSelection([]);
    filter.clear();
  }, [filter]);

  const handleSave = useCallback(() => {
    if (filter.multiselect) {
      filter.set(tempSelection);
    } else if (tempSelection[0]) {
      filter.set([tempSelection[0]]);
    } else {
      filter.clear();
    }
    callback?.();
  }, [filter, tempSelection]);

  return {
    handleCheckedChange,
    isChecked,
    handleSave,
    handleReset,
    isDirty: tempSelection.toString() !== filter.value.toString(),
  };
}
