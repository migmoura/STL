import { Teaser } from "@/components/ui/teaser.tsx";
import { ComponentProps, useCallback, useState } from "react";
import { Headline } from "@/components/ui/headline.tsx";
import { useSearch } from "@/features/search/hooks/use-search.ts";
import { DropdownFilters } from "@/features/search/components/dropdown-filters.tsx";
import { mapTagsToFilter } from "@/lib/map-tags-to-filter.tsx";
import type { Sort } from "@/types/base.d.ts";
import { indexPageToTeaserNoHighlights } from "@/lib/index-page-to-teaser.ts";
import { SORT_OPTIONS } from "@/features/search/constants.ts";
import {
  getParamsFromURL,
  ResultsPagination,
  setParamsInURL,
} from "@/features/search/components/results-pagination.tsx";
import { SearchInput } from "@/components/ui/input.tsx";
import { useDebounceCallback } from "usehooks-ts";

const ITEMS_PER_PAGE = 12;

type ResultsGridProps = {
  labels: {
    link: string;
  };
  config: {
    search: {
      label: string;
      hidden: boolean;
    };
    filter: {
      label: string;
      hidden: boolean;
    };
    year: {
      label: string;
      hidden: boolean;
    };
  };
  url: string;
  showDescription?: boolean;
} & ComponentProps<typeof Headline>;

export function ResultsGrid({
  url,
  labels,
  config,
  showDescription = true,
  ...headline
}: Readonly<ResultsGridProps>) {
  const [{ page, tags, sort, years }, setQueryState] = useState(getParamsFromURL);
  const [selectedFilters, setSelectedFilters] = useState(tags);
  const [selectedYear, setSelectedYear] = useState(years);
  const [sortBy, setSortBy] = useState(sort);
  const [query, setQuery] = useState<string | undefined>();
  const debounced = useDebounceCallback(setQuery, 300);

  const offset = (page - 1) * ITEMS_PER_PAGE;
  const queryTags = selectedFilters.length > 0 ? selectedFilters : undefined;
  const queryYears = selectedYear.length > 0 ? selectedYear : undefined;

  const { hits, facets, count } = useSearch(query, url, {
    offset,
    tags: queryTags,
    year: queryYears,
    sort: SORT_OPTIONS[sortBy],
    limit: ITEMS_PER_PAGE,
    facets: {
      tags: { limit: 20 },
      year: { limit: 20 },
    },
  });

  const filters = mapTagsToFilter(config.filter, facets?.tags.values);
  const filterYears = mapTagsToFilter(config.year, facets?.year.values);

  const teasers: ComponentProps<typeof Teaser>[] = hits.map(
    indexPageToTeaserNoHighlights(labels.link),
  );
  const totalPages = Math.ceil((count ?? 0) / ITEMS_PER_PAGE);

  const buildHref = useCallback(
    (newPage: number) => {
      if (newPage < 1 || newPage > totalPages) {
        return "";
      }

      const params = new URLSearchParams();
      params.set("page", newPage.toString());
      selectedFilters.forEach((tag) => params.append("tags", tag));
      if (sortBy) {
        params.set("sort", sortBy);
      }
      if (selectedYear.length > 0) {
        selectedYear.forEach((year) => params.append("year", year));
      }
      return `${window.location.pathname}?${params.toString()}`;
    },
    [totalPages, selectedFilters, sortBy],
  );

  const updateFilter = useCallback(
    (newTags: string[]) => {
      setSelectedFilters(newTags);
      const query = { page: 1, tags: newTags, years, sort: sortBy };
      setParamsInURL(query);
      setQueryState(query);
    },
    [sortBy],
  );

  const updateYears = useCallback(
    (newYears: string[]) => {
      setSelectedYear(newYears.map(String));
      const query = { page: 1, tags, sort: sortBy, years: newYears };
      setParamsInURL(query);
      setQueryState(query);
    },
    [sortBy],
  );

  const updateSort = useCallback(
    (newSort: Sort) => {
      setSortBy(newSort);
      const query = { page: 1, years, tags: selectedFilters, sort: newSort };
      setParamsInURL(query);
      setQueryState(query);
    },
    [selectedFilters],
  );

  return (
    <div className="space-y-20">
      <Headline {...headline} />
      <div className="flex flex-wrap gap-6 lg:mx-[150px]">
        {!config?.search?.hidden ? (
          <SearchInput
            placeholder={config.search.label}
            className="w-full md:w-fit"
            onChange={(e) => debounced(e.target.value)}
          />
        ) : null}
        <DropdownFilters
          className="flex-1"
          filters={filters}
          years={filterYears}
          selected={selectedFilters}
          selectedYears={selectedYear.map(String)}
          onSelectionChange={updateFilter}
          onYearsChange={updateYears}
          onSortChange={updateSort}
          currentSort={sortBy}
          sortOptions={SORT_OPTIONS}
        />
      </div>
      <div className="flex flex-col gap-10 md:gap-y-20 md:grid md:grid-cols-4">
        {teasers.map((item) => (
          <article key={item.title} className="w-full">
            <Teaser {...item} showDescription={showDescription} aspectRatio="aspect-2/1" />
          </article>
        ))}
      </div>
      <ResultsPagination
        currentPage={page > totalPages ? totalPages : page}
        totalPages={totalPages}
        buildHref={buildHref}
      />
    </div>
  );
}
