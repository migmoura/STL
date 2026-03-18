import { FilterGroup } from "@/features/search/types.ts";

export function mapTagsToFilter(
  config: Omit<FilterGroup, "records">,
  input: Record<string, number> | undefined,
): FilterGroup {
  if (!input) {
    return {
      ...config,
      records: {},
    };
  }

  return {
    ...config,
    records: Object.fromEntries(
      Object.keys(input).map((key) => [
        key,
        {
          label: key.charAt(0).toUpperCase() + key.slice(1),
          count: input[key],
        },
      ]),
    ),
  };
}

export function mapLabelToFilter(input: any) {
  if (!input) {
    return {};
  }

  return Object.fromEntries(
    Object.keys(input).map((key) => [
      key,
      {
        ...input[key],
        label: key,
        count: input[key],
      },
    ]),
  );
}
