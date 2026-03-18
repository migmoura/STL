import { cn } from "@/lib/utils.tsx";
import { useFilters } from "@/lib/search/hooks/use-filters.ts";
import { FilterDropdownItem, ResetFiltersButton } from "./filter-dropdown-item.tsx";
import { DropdownSort } from "./dropdown-sort.tsx";

type DropdownFacetsProps = {
  className?: string;
};

export function DropdownFacets({ className }: DropdownFacetsProps) {
  const { filters, resetFilters, hasFilters } = useFilters();

  return (
    <div className={cn("flex flex-col md:flex-row items-center gap-2", className)}>
      <div className="w-full flex flex-wrap flex-row gap-2">
        {Object.values(filters).map((filter) => (
          <div key={filter.label} className="flex items-center gap-2">
            <FilterDropdownItem filter={filter} />
          </div>
        ))}
        {hasFilters && (
          <div className="items-center gap-2">
            <ResetFiltersButton onReset={resetFilters} />
          </div>
        )}
      </div>
      <DropdownSort />
    </div>
  );
}
