export const SORT_OPTIONS = {
  newest: { label: { long: "Newest First", short: "New" }, property: "publishedAt", order: "DESC" },
  oldest: { label: { long: "Oldest First", short: "Old" }, property: "publishedAt", order: "ASC" },
  az: { label: { long: "Alphabetical A-Z", short: "A-Z" }, property: "title" },
  za: { label: { long: "Alphabetical Z-A", short: "Z-A" }, property: "title", order: "DESC" },
} as const;

export const RELEVANCE_SORT_OPTIONS = {
  relevance: {
    label: { long: "Relevance", short: "Relevance" },
    sortFn: (a: [string, number], b: [string, number]) => b[1] - a[1],
  },
  newest: { label: { long: "Newest First", short: "New" }, property: "publishedAt", order: "DESC" },
  oldest: { label: { long: "Oldest First", short: "Old" }, property: "publishedAt", order: "ASC" },
  az: { label: { long: "Alphabetical A-Z", short: "A-Z" }, property: "title" },
  za: { label: { long: "Alphabetical Z-A", short: "Z-A" }, property: "title", order: "DESC" },
} as const;
