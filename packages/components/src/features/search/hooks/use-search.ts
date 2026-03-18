import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import type { IndexPage, OramaIndexPage } from "@/types/entities.d.ts";
import { create, FacetResult, FacetsParams, insert, Orama } from "@orama/orama";
import {
  highlightAfterInsert,
  highlightResults,
  sanitizeTags,
  searchWithHighlight,
} from "@/features/search/utils/highlights.ts";
import { Sort } from "@/types/base";
import { fromUnixTime, getUnixTime, getYear, parseISO } from "date-fns";
import { pluginQPS } from "@orama/plugin-qps";

const DEFAULT_HIGHLIGHT_FIELDS = ["title", "description", "content"] as const;

const schema = {
  title: "string",
  description: "string",
  content: "string",
  path: "string",
  lastModified: "number",
  createdAt: "number",
  publishedAt: "number",
  year: "string",
  tags: "enum[]",
} as const;

type DB = Orama<typeof schema>;
type IndexedSort = Sort;
type IndexedFacets = FacetsParams<DB>;

export type HighlightedField = {
  value?: string;
  highlight: string;
};

export type Highlighted<T, K extends keyof T = keyof T> = Omit<T, K | "tags"> & {
  [P in K]: string | HighlightedField;
} & {
  tags: string[];
  highlight: string;
};

export type Results<T> = {
  count: number;
  hits: T[];
  facets?: FacetResult;
};

function createSearchDB(): DB {
  return create({
    schema,
    components: {
      tokenizer: {
        stemming: true,
        stemmerSkipProperties: ["tags"],
      },
    },
    plugins: [
      pluginQPS(),
      {
        name: "highlight",
        afterInsert: highlightAfterInsert,
      },
    ],
  });
}

function insertDocuments(db: DB, pages: IndexPage[]) {
  pages.forEach((page) => {
    const createdDate = page.created && page.created !== "" ? parseISO(page.created) : null;
    const publishedDate = page.published && page.published !== "" ? parseISO(page.published) : null;
    const modifiedDate = fromUnixTime(page.lastModified);

    insert(db, {
      content: "",
      ...page,
      createdAt: createdDate ? getUnixTime(createdDate) : getUnixTime(modifiedDate),
      publishedAt: publishedDate ? getUnixTime(publishedDate) : getUnixTime(modifiedDate),
      year: publishedDate ? getYear(publishedDate).toString() : getYear(modifiedDate).toString(),
      tags: sanitizeTags(page.tags),
    });
  });
}

const fetchIndex = async (url: string) =>
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => data.data);

const fetchIndexes = async (urls: string[]) =>
  Promise.all(urls.map(fetchIndex)).then((data) => data.flat() || []);

type UseSearchOptions = Partial<{
  year: string[];
  tags: string[];
  sort: IndexedSort;
  facets: IndexedFacets;
  limit: number;
  offset: number;
}>;

export const useSearch = (
  query: string | undefined,
  url: string | string[],
  options?: UseSearchOptions,
) => {
  const [indexedAt, setIndexedAt] = useState(0);
  const [offset, setOffset] = useState(options?.offset ?? 0);
  const sortMemo = useMemo(() => options?.sort, [options?.sort]);
  const [results, setResults] = useState<
    Results<Highlighted<OramaIndexPage, "content" | "title" | "description">>
  >({
    count: 0,
    hits: [],
  });
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const limit = options?.limit ?? 12;
  const [db] = useState(() => createSearchDB());

  useSWR(url, typeof url === "string" ? fetchIndex : fetchIndexes, {
    revalidateOnFocus: false,
    keepPreviousData: true,
    onSuccess: async (pages: IndexPage[]) => {
      insertDocuments(db, pages);
      setIndexedAt(Date.now());
    },
  });

  const fetchResults = useCallback(
    async (newOffset: number) => {
      const { tags = [], sort, facets, year = [] } = options || {};
      const where: Record<string, any> = {
        ...(tags.length > 0 ? { tags: { containsAny: tags } } : {}),
        ...(year && year.length > 0 ? { year } : {}),
      };
      const rawResults = await searchWithHighlight(db, {
        term: query,
        sortBy: sort?.hasOwnProperty("sortFn") ? sort.sortFn : sort,
        tolerance: 0,
        boost: {
          title: 8,
          description: 2,
          tags: 3,
          content: 0.1,
        },
        where,
        facets,
        limit,
        offset: newOffset,
      });

      const highlightedHits = highlightResults(rawResults, query, DEFAULT_HIGHLIGHT_FIELDS);

      setResults((prev) => ({
        count: rawResults.count,
        facets: rawResults.facets,
        hits: [...prev.hits, ...highlightedHits],
      }));
    },
    [db, query, options?.tags, options?.year, sortMemo, limit],
  );

  useEffect(() => {
    if (indexedAt === 0) {
      return;
    }
    setResults({ count: 0, hits: [] });
    setOffset(options?.offset ?? 0);

    fetchResults(options?.offset ?? 0);
  }, [options?.tags, options?.year, sortMemo, query, indexedAt]);

  const next = useCallback(() => {
    if (isLoadingMore) {
      return;
    }
    setIsLoadingMore(true);

    const nextOffset = offset + limit;
    fetchResults(nextOffset).then(() => {
      setOffset(nextOffset);
      setIsLoadingMore(false);
    });
  }, [offset, isLoadingMore]);

  const hasMore = results.hits.length < results.count;

  return {
    ...results,
    offset,
    next,
    hasMore,
    isLoadingMore,
  };
};
