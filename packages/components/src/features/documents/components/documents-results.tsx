import { ComponentProps, ReactNode, MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDebounceCallback } from "usehooks-ts";
import { Trash, XIcon } from "lucide-react";
import { useDocuments } from "@/features/documents/hooks/use-documents.ts";
import { documentToTeaser } from "@/features/documents/optics.ts";
import { DocumentIndex } from "@/features/documents/types.ts";
import { DocumentTeaser, Teaser } from "@/components/ui/teaser.tsx";
import { SearchInput } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { DropdownFacets } from "./dropdown-facets.tsx";
import { useSearchControls } from "@/lib/search/hooks/use-search-controls.ts";
import { useDocumentsDownload } from "@/features/documents/hooks/use-documents-download.ts";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { useDownloadGate } from "@/features/documents/hooks/use-download-gate.ts";

type DocumentsResultsProps = {
  children: ReactNode;
  linkLabel: string;
};

function EmptyState() {
  const { t } = useTranslation();

  return (
    <div className="h-[400px] text-h3 col-span-4 flex flex-col items-center">
      <p>{t("No Documents found")}</p>
      <XIcon className="size-30 text-gray-1" />
    </div>
  );
}

type DocumentGridProps = {
  teasers: ComponentProps<typeof Teaser>[];
};

function DocumentGrid({ teasers }: DocumentGridProps) {
  const { t } = useTranslation();

  if (teasers.length === 0) {
    return <EmptyState />;
  }

  const { enabled, requestDownload } = useDownloadGate();
  const { toggle, isSelected } = useDocumentsDownload();

  return teasers.map((item) => {
    const checked = isSelected(item.link?.href);

    const gatedItem = {
      ...item,
      link: {
        ...item.link!,
        onClick: (e: MouseEvent<HTMLAnchorElement>) => {
          if (!enabled) {
            return;
          }

          e.preventDefault();
          e.stopPropagation();
          requestDownload(item.link?.href);
        },
      },
    };

    return (
      <article key={item.title} className="relative">
        <DocumentTeaser {...gatedItem} aspectRatio="aspect-2/1" />
        <div className="size-11 p-2.5 absolute right-2 top-2 bg-white/60">
          <Checkbox
            checked={checked}
            aria-label={checked ? t("Deselect document") : t("Select document")}
            aria-pressed={checked}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggle(item.link?.href);
            }}
          />
        </div>
      </article>
    );
  });
}

function LoadMoreButton() {
  const { t } = useTranslation();
  const { hasMore, loading, next } = useSearchControls();

  if (!hasMore) {
    return null;
  }

  return (
    <div className="w-full flex justify-center">
      <Button variant="secondary" onClick={next} disabled={loading}>
        {t("See more")}
      </Button>
    </div>
  );
}

export function DocumentsResults({ children, linkLabel }: DocumentsResultsProps) {
  const { t } = useTranslation();
  const [query, setQuery] = useState<string | undefined>();
  const debouncedSetQuery = useDebounceCallback(setQuery, 300);
  const { count: resultsCount, results } = useDocuments(query);
  const { enabled, requestDownload } = useDownloadGate();
  const { count, selected, clear, download } = useDocumentsDownload();

  const teasers: ComponentProps<typeof Teaser>[] = results.map((result) =>
    documentToTeaser(linkLabel)(result.document as unknown as DocumentIndex),
  );

  return (
    <div className="space-y-10" role="search" aria-label={t("Documents Search Results")}>
      {children}
      <div className="xl:mx-[150px] space-y-4">
        <div className="flex md:flex-row-reverse flex-wrap justify-between gap-y-2 gap-x-20 w-full items-end">
          <div className="flex flex-col md:max-w-1/2 2xl:max-w-1/4 w-full gap-2 items-end">
            <div className="mt-2 flex gap-4">
              <Button
                onClick={() => {
                  if (enabled) {
                    requestDownload(selected);
                  } else {
                    download();
                  }
                }}
                disabled={count === 0}
              >
                {t("Download All")}
              </Button>
              {count > 0 ? (
                <Button size="icon" variant="secondary" onClick={clear}>
                  <Trash className="size-4" />
                  <span className="sr-only">{t("Clear selected documents")}</span>
                </Button>
              ) : null}
            </div>
            <p className="block text-gray-1 text-sm text-right">
              {t(
                "You can select multiple files using the checkboxes to download them all at once.",
              )}
            </p>
          </div>
          <p className="shrink-0 text-gray-1 mr-auto">
            {t("{{count}} results", { count: resultsCount })}
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <SearchInput
              className="w-full md:w-fit"
              onChange={(e) => debouncedSetQuery(e.target.value)}
            />
            <DropdownFacets className="w-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-y-20 md:grid md:grid-cols-4">
        <DocumentGrid teasers={teasers} />
      </div>
      <LoadMoreButton />
    </div>
  );
}
