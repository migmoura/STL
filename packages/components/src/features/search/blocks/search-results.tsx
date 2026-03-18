import { Teaser } from "@/components/ui/teaser.tsx";
import { ComponentProps, useState } from "react";
import { useSearch } from "@/features/search/hooks/use-search.ts";
import { DropdownFilters } from "@/features/search/components/dropdown-filters.tsx";
import { Button } from "@/components/ui/button.tsx";
import { mapTagsToFilter } from "@/lib/map-tags-to-filter.tsx";
import { indexPageToTeaser } from "@/lib/index-page-to-teaser.ts";
import { RELEVANCE_SORT_OPTIONS } from "@/features/search/constants.ts";
import { Trans, useTranslation } from "react-i18next";

const MAX_NUMBER_TEASERS = 12;

type SearchResultsProps = {
  labels: {
    filter: string;
    link: string;
  };
  config: {
    filter: {
      label: string;
      hidden: boolean;
    };
  };
  url: string | string[];
};

export function SearchResults({ url, labels, config }: Readonly<SearchResultsProps>) {
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("q") ?? undefined;

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<keyof typeof RELEVANCE_SORT_OPTIONS>("relevance");
  const { t } = useTranslation();

  const queryTags = selectedFilters.length > 0 ? selectedFilters : undefined;
  const { hits, count, facets, hasMore, next, isLoadingMore } = useSearch(query, url, {
    limit: MAX_NUMBER_TEASERS,
    tags: queryTags,
    sort: RELEVANCE_SORT_OPTIONS[sortBy],
    facets: {
      tags: {
        limit: 20,
      },
    },
  });

  const filters = mapTagsToFilter(config.filter, facets?.tags.values);
  const teasers: ComponentProps<typeof Teaser>[] = hits.map(indexPageToTeaser(labels.link));

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap justify-between items-start align-bottom lg:mx-[150px]">
        <div className="space-y-2">
          <Trans
            default="Search result for <highlight>{{query}}</highlight>"
            values={{ query }}
            components={{ highlight: <span className="text-black" /> }}
            parent="p"
            className="text-h3 text-gray-1"
          />
          {count ? (
            <p className="text-gray-1">
              {count} {t("Results")}
            </p>
          ) : null}
        </div>
      </div>
      <DropdownFilters
        className="lg:mx-[150px]"
        filters={filters}
        selected={selectedFilters}
        onSelectionChange={setSelectedFilters}
        currentSort={sortBy}
        onSortChange={setSortBy}
        sortOptions={RELEVANCE_SORT_OPTIONS}
      />
      <div className="flex flex-col gap-10 md:gap-y-20 md:grid md:grid-cols-4">
        {teasers.map((item) => (
          <div key={item.title} className="w-full">
            <Teaser {...item} showDescription={false} aspectRatio="aspect-2/1" />
          </div>
        ))}
      </div>
      {hasMore ? (
        <div className="w-full flex justify-center">
          <Button variant="secondary" onClick={next} disabled={isLoadingMore}>
            {t("See more")}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
