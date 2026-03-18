export type FilterConfig = {
  field: string;
  label: string;
  type: "enum" | "enum[]";
  multiselect: boolean;
  options: string[];
};

export type FilterValue = { label: string; count: number }[];
