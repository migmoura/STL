import { useState } from "react";
import { SearchInput } from "@/components/ui/input.tsx";
import type { Link as LinkType } from "@/types/base.d.ts";
import { useDebounceCallback } from "usehooks-ts";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import { Button } from "../../../components/ui/button.tsx";
import { SearchIcon } from "lucide-react";
import { SearchResult } from "../../search/components/search-results.tsx";
import { Link } from "@/components/ui/link.tsx";
import { useTranslation } from "react-i18next";

type SearchFlyoutProps = {
  indexes: {
    url: string;
    label: string;
  }[];
  link?: LinkType;
};

export function SearchSheet({ indexes, link }: SearchFlyoutProps) {
  const [query, setQuery] = useState("");
  const debounced = useDebounceCallback(setQuery, 300);
  const { t } = useTranslation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label={t("Open search panel")}
          className="block lg:hidden bg-blur-lg"
          size="icon"
          variant="tertiary"
          dark
        >
          <SearchIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-screen overflow-y-auto">
        <div className="h-full mt-25 px-6 flex flex-col gap-8">
          <div>
            <SearchInput
              className="h-16"
              placeholder={t("Search...")}
              onChange={(e) => debounced(e.target.value)}
            />
          </div>
          {query.length > 2
            ? indexes.map((index) => <SearchResult key={index.label} {...index} query={query} />)
            : null}
        </div>
        {link ? (
          <div className="fixed bottom-0 py-6 w-full flex justify-center bg-white">
            <Link {...link} variant="secondary">
              {link.value}
            </Link>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

export default SearchSheet;
