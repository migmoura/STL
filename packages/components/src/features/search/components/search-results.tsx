import { useSearch } from "@/features/search/hooks/use-search.ts";
import { Picture } from "@/components/ui/picture.tsx";
import { Interweave } from "interweave";
import { Link } from "@/components/ui/link.tsx";
import type { Link as LinkType } from "@/types/base.d.ts";
import { ScrollableList } from "@/components/ui/scroll.tsx";
import { cn } from "@/lib/utils.tsx";
import { RELEVANCE_SORT_OPTIONS } from "@/features/search/constants.ts";
import { useTranslation } from "react-i18next";

type SearchResultProps = {
  url: string;
  label: string;
  query: string;
};

export function SearchResult({ query, url, label }: SearchResultProps) {
  const { hits, count } = useSearch(query, url, {
    sort: RELEVANCE_SORT_OPTIONS["relevance"],
  });
  const { t } = useTranslation();

  return (
    <div className={cn("space-y-6", { "hidden md:block": hits.length === 0 })}>
      <span className="flex flex-col md:flex-row items-baseline gap-x-6 gap-y-2">
        <p className="text-h4">{label}</p>
        <p className="text-sm text-gray-1">{t("{{count}} hits", { count })}</p>
      </span>
      <ul className="relative h-full space-y-4">
        <ScrollableList
          className="mb-6 md:mb-0 md:h-[calc(100dvh-484px)] md:max-h-[586px]"
          listClassName="flex flex-col gap-4"
        >
          {hits.map((result) => (
            <li key={result.path}>
              <a href={result.path} className="group w-full flex items-start md:gap-6">
                {result.image !== "" ? (
                  <Picture
                    className="shrink-0"
                    imageClassName="hidden md:block w-30 h-20 object-cover duration-300 ease-in-out group-hover:scale-110"
                    image={{
                      src: result.image,
                      alt:
                        result.imageAlt || typeof result.title === "string"
                          ? result.title
                          : result.title.value,
                    }}
                  />
                ) : null}
                <div className="flex flex-col gap-1">
                  <p className="md:font-semibold">
                    {typeof result.title === "object" ? (
                      <Interweave content={result.title.highlight} />
                    ) : (
                      result.title
                    )}
                  </p>
                  <p className="text-gray-1">
                    <Interweave content={result.highlight} noWrap={true} />
                    <Link className="ml-2" href={result.path}>
                      Read more
                    </Link>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ScrollableList>
      </ul>
    </div>
  );
}

type SearchResultsProps = {
  indexes: {
    url: string;
    label: string;
  }[];
  query: string;
  link?: LinkType;
};

function SearchResults({ indexes, query, link }: SearchResultsProps) {
  return (
    <div className="w-screen h-[calc(100dvh-178px)] max-h-[901px]">
      <div className="relative fluid py-20 flex flex-col justify-between h-full gap-10">
        <div className="mr-65 grid grid-cols-2 gap-x-20">
          {indexes.map((index) => (
            <SearchResult key={index.label} {...index} query={query} />
          ))}
        </div>
        {link ? (
          <div className="fixed bottom-0 left-0 pb-20 pt-6 w-full flex justify-center bg-white z-10 border-b border-gray-3">
            <Link {...link} variant="secondary">
              {link.value}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SearchResults;
