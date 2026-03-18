import { SearchProvider } from "@/lib/search/context/search-provider.tsx";
import { ComponentProps, Suspense, useMemo } from "react";
import { Headline } from "@/components/ui/headline.tsx";
import { createDocumentsEngine } from "@/features/documents/engine.ts";
import { createFilterBuilder } from "@/features/documents/service.ts";
import { useEnginesFactorySuspense } from "@/lib/search/hooks/use-engines-factory-suspense.ts";
import { DocumentsResults } from "@/features/documents/components/documents-results.tsx";
import { SORT_OPTIONS } from "@/features/search/constants.ts";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { DownloadDialog } from "@/features/documents/components/download-dialog.tsx";

type DocumentCenterContentProps = {
  documentsPromise: Promise<Awaited<ReturnType<typeof createDocumentsEngine>>>;
  filtersConfig: DocumentCenterProps["filtersConfig"];
  linkLabel: string;
  children?: React.ReactNode;
};

function DocumentCenterContent({
  documentsPromise,
  filtersConfig,
  linkLabel,
  children,
}: DocumentCenterContentProps) {
  const documents = useEnginesFactorySuspense(documentsPromise);

  return (
    <SearchProvider
      sortConfig={Object.values(SORT_OPTIONS)}
      filtersConfig={filtersConfig}
      engines={{ documents }}
    >
      <DocumentsResults linkLabel={linkLabel}>{children}</DocumentsResults>
    </SearchProvider>
  );
}

function DocumentCenterSkeleton({ children }: { children?: React.ReactNode }) {
  return (
    <div className="space-y-10">
      {children}
      <div className="lg:mx-[150px]">
        <Skeleton className="h-8 w-1/3 mb-4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      <div className="w-full lg:mx-[150px] flex flex-col md:flex-row items-center gap-6">
        <Skeleton className="h-10 w-full md:w-48" />
        <Skeleton className="h-10 w-full md:w-96 rounded-full" />
        <Skeleton className="h-10 w-full md:w-64 justify-end" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="h-48" />
        ))}
      </div>
    </div>
  );
}

type DocumentCenterProps = {
  url: string;
  localeUrl: string;
  include?: string[];
  tags?: string[];
  linkLabel: string;
} & Pick<ComponentProps<typeof SearchProvider>, "filtersConfig"> &
  ComponentProps<typeof Headline> &
  ComponentProps<typeof DownloadDialog>;

export function DocumentCenter({
  url,
  localeUrl,
  linkLabel,
  include,
  tags,
  isEnabled,
  dialogHtml,
  filtersConfig,
  ...headline
}: Readonly<DocumentCenterProps>) {
  const documentsPromise = useMemo(() => {
    const documentFilters = createFilterBuilder().withPaths(include).withTags(tags);
    return createDocumentsEngine(url, localeUrl, { documentFilters });
  }, [url, localeUrl, include, tags]);

  return (
    <Suspense
      fallback={
        <DocumentCenterSkeleton>
          <Headline {...headline} />
        </DocumentCenterSkeleton>
      }
    >
      <DownloadDialog isEnabled={isEnabled} dialogHtml={dialogHtml} />
      <DocumentCenterContent
        documentsPromise={documentsPromise}
        filtersConfig={filtersConfig}
        linkLabel={linkLabel}
      >
        <Headline {...headline} />
      </DocumentCenterContent>
    </Suspense>
  );
}
