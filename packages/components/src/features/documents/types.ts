import { Picture } from "@/types/base";

export type DocumentIndex = {
  id: number;
  path: string;
  publishedAt: number;
  title: string;
  description?: string;
  type: string;
  thumbnail: Picture;
  topics: string[];
  categories: string[];
  regions: string[];
};

export interface DocumentResponse {
  data: {
    documentMetadataList: {
      items: DocumentMetadataItem[];
    };
  };
}

export interface StringMetadata {
  name: "title" | "description";
  value: string;
}

export interface CalendarMetadata {
  name: "jcr:created" | "cq:lastModified" | "cq:lastPublished";
  value: string;
}

export interface Category {
  key: string;
  label: string;
}

export interface Region {
  slug: string;
  name: string;
}

export interface DocumentMetadataItem {
  _metadata: {
    stringMetadata: StringMetadata[];
    calendarMetadata: CalendarMetadata[];
  };
  _path: string;
  categories: Category[];
  regions: Region[];
  topics: string[] | null;
  document: {
    format: string;
    type: string;
    _publishUrl: string;
  };
}

type Expression = {
  _operator: "EQUALS" | "STARTS_WITH";
  value: string | string[];
};
export type Filter = {
  _path?: {
    _logOp?: "OR" | "AND";
    _expressions: Expression[];
  };
  _tags?: {
    _logOp?: "OR" | "AND";
    _expressions: Expression[];
  };
};

export interface FilterBuilder {
  withPaths(paths: string[] | undefined): FilterBuilder;
  withTags(categories: string[] | undefined): FilterBuilder;
  build(): string;
}

export interface LanguagesResponse {
  total: number;
  limit: number;
  offset: number;
  data: LanguageEntry[];
  ":type": string;
}

export interface LanguageEntry {
  value: string;
  label: string;
}
