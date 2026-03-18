import { useEffect, useRef, useState } from "react";
import { Popover, PopoverAnchor, PopoverContent } from "@/components/ui/popover.tsx";
import { SearchInput } from "@/components/ui/input.tsx";
import type { Link as LinkType } from "@/types/base.d.ts";
import { useDebounceCallback } from "usehooks-ts";
import SearchResults from "../../search/components/search-results.tsx";
import { useTranslation } from "react-i18next";

type SearchFlyoutProps = {
  indexes: {
    url: string;
    label: string;
  }[];
  link?: LinkType;
};

export function SearchFlyout({ indexes, link }: SearchFlyoutProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const debounced = useDebounceCallback(setQuery, 300);
  const { t } = useTranslation();

  const searchRef = new URL(link?.href || "", window.location.origin);
  searchRef.searchParams.set("q", query);

  const searchLink: LinkType | undefined = link
    ? {
        ...link,
        href: searchRef.href,
      }
    : undefined;

  useEffect(() => {
    const input = query.trim();
    if (input.length > 2) {
      setOpen(true);
    }

    if (input.length === 0) {
      setOpen(false);
    }
  }, [query]);

  const [container, setContainer] = useState<Element | null>(null);
  useEffect(() => {
    const el = document.querySelector("#top");
    if (el) {
      setContainer(el);
    }
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor className="w-full">
        <SearchInput
          ref={inputRef}
          aria-expanded={open}
          aria-controls="search-flyout"
          role="combobox"
          className="text-white text-sm ml-auto w-fit xl:w-[400px]"
          data-slot="popover-trigger"
          placeholder={t("Search...")}
          onChange={(e) => debounced(e.target.value)}
          onKeyDown={(e) => {
            if (contentRef.current && e.key === "ArrowDown") {
              e.preventDefault();
              contentRef.current.querySelector("a")?.focus();
            } else if (e.key === "Enter") {
              e.preventDefault();
              if (!contentRef.current) {
                setOpen(true);
              } else {
                if (!searchLink) {
                  return;
                }
                window.location.href = searchLink.href;
              }
            } else if (contentRef.current && e.key === "Escape") {
              e.preventDefault();
              setOpen(false);
            }
          }}
        />
      </PopoverAnchor>
      <PopoverContent
        asChild
        id="search-flyout"
        container={container}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <div ref={contentRef}>
          <SearchResults indexes={indexes} link={searchLink} query={query} />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default SearchFlyout;
