import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { SimpleLink } from "@/components/ui/simple-link.tsx";
import { useTranslation } from "react-i18next";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  const { t } = useTranslation();

  return (
    <nav
      aria-label={t("Pagination")}
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center gap-6", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-4", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a">;

function PaginationLink({ isActive, ...props }: PaginationLinkProps) {
  return (
    <SimpleLink
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  const { t } = useTranslation();

  return (
    <PaginationLink
      aria-label={t("Go to previous page")}
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">{t("Previous")}</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  const { t } = useTranslation();

  return (
    <PaginationLink
      aria-label={t("Go to next page")}
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      <span className="hidden sm:block">{t("Next")}</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  const { t } = useTranslation();

  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">{t("More pages")}</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
