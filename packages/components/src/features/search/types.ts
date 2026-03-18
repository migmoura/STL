export type FilterRecord = Record<string, { label: string; count?: number }>;

export type FilterGroup = {
  label: string;
  hidden?: boolean;
  records: FilterRecord;
};
