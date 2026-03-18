import { useState } from "react";
import { cn, entriesFromObject } from "@/lib/utils.tsx";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Tag } from "@/components/ui/tag.tsx";
import { ChevronDown, CircleX, Trash } from "lucide-react";
import { deepEqual } from "fast-equals";
import type { Sort } from "@/types/base.d.ts";
import { DropdownFilterMenu } from "@/features/search/components/dropdown-filter-menu.tsx";
import { SheetFilterMenu } from "@/features/search/components/sheet-filter-menu.tsx";
import { FilterGroup } from "@/features/search/types.ts";
import { useTranslation } from "react-i18next";

type DropdownFiltersProps<T extends string, U extends string> = {
  className?: string;
  filters: FilterGroup;
  years?: FilterGroup;
  selected: T[];
  selectedYears?: U[];
  onSelectionChange: (selected: T[]) => void;
  onYearsChange?: (selected: U[]) => void;
  currentSort?: string;
  sortOptions?: Record<string, Sort>;
  onSortChange?: (sort: Sort) => void;
};

export function DropdownFilters<T extends string, U extends string>({
  filters,
  years,
  selected,
  selectedYears,
  onSelectionChange,
  onYearsChange,
  className,
  sortOptions,
  currentSort,
  onSortChange,
}: DropdownFiltersProps<T, U>) {
  const [sort, setSort] = useState(currentSort);
  const { t } = useTranslation();

  const handleReset = () => {
    onSelectionChange([]);
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {!filters.hidden ? (
        <DropdownFilterMenu
          label={filters.label}
          options={filters.records}
          selected={selected}
          onSelectionChange={onSelectionChange}
        />
      ) : null}
      {years && selectedYears && onYearsChange && !years.hidden ? (
        <DropdownFilterMenu
          label={years.label}
          options={years.records}
          selected={selectedYears}
          onSelectionChange={onYearsChange}
        />
      ) : null}
      <div className="hidden md:flex items-center gap-2">
        {selected.map((filterKey) => (
          <Tag
            key={filterKey}
            variant="secondary"
            onClick={() => {
              onSelectionChange(selected.filter((item) => item !== filterKey));
            }}
          >
            {filters.records[filterKey]?.label}
            <CircleX className="size-3 m-0.5" />
          </Tag>
        ))}
        {selectedYears && onYearsChange && years
          ? selectedYears.map((filterKey) => (
              <Tag
                key={filterKey}
                variant="secondary"
                onClick={() => {
                  onYearsChange(selectedYears.filter((item) => item !== filterKey));
                }}
              >
                {years.records[filterKey]?.label}
                <CircleX className="size-3 m-0.5" />
              </Tag>
            ))
          : null}
        {selected.length > 0 ? (
          <Tag variant="tertiary" className="mr-2" onClick={handleReset}>
            Delete all
            <Trash className="size-4" />
          </Tag>
        ) : null}
      </div>
      <SheetFilterMenu
        label={filters.label}
        options={filters.records}
        selected={selected}
        onSelectionChange={onSelectionChange}
      />
      {years && selectedYears && onYearsChange ? (
        <SheetFilterMenu
          label={years.label}
          options={years.records}
          selected={selectedYears}
          onSelectionChange={onYearsChange}
        />
      ) : null}
      {sortOptions && sort ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-auto flex items-center gap-2 font-semibold text-sm outline-none">
            <span className="text-gray-1 leading-label">{t("Sort by:")}</span>
            <span className="md:hidden">{sortOptions[sort]?.label.short}</span>
            <span className="hidden md:inline">{sortOptions[sort]?.label.long}</span>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            {entriesFromObject(sortOptions).map(([key, option], index) => (
              <DropdownMenuCheckboxItem
                variant="outline"
                key={index}
                checked={deepEqual(sort, option)}
                onCheckedChange={() => {
                  setSort(key);
                  onSortChange?.(key);
                }}
              >
                <span className="md:hidden">{option?.label.short}</span>
                <span className="hidden md:inline">{option?.label.long}</span>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </div>
  );
}
