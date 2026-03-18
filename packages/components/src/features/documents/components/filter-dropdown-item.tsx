import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu.tsx";
import { Tag } from "@/components/ui/tag.tsx";
import { ChevronDown, Trash } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFilters } from "@/lib/search/hooks/use-filters.ts";
import { ControlledDropdownMenu } from "./controlled-dropdown-menu.tsx";
import { DropdownFilterContent } from "./dropdown-filter-content.tsx";
import { Sheet, SheetTrigger } from "@/components/ui/sheet.tsx";
import { SheetFilterContent } from "@/features/documents/components/sheet-filter-content.tsx";

type FilterDropdownItemProps = {
  filter: ReturnType<typeof useFilters>["filters"][string];
};

export function FilterDropdownItem({ filter }: FilterDropdownItemProps) {
  const { t } = useTranslation();

  const getDisplayValue = () => {
    if (filter.multiselect) {
      return filter.value.length === 0 ? t("all") : filter.value.length;
    }
    return filter.value.at(0);
  };

  return (
    <>
      <ControlledDropdownMenu>
        {({ close, open }) => (
          <>
            <DropdownMenuTrigger className="hidden md:block outline-none">
              <Tag variant="secondary">
                {filter.label} ({getDisplayValue()})
                <ChevronDown className="size-4" />
              </Tag>
            </DropdownMenuTrigger>
            <DropdownFilterContent filter={filter} onClose={close} open={open} />
          </>
        )}
      </ControlledDropdownMenu>
      <Sheet>
        <SheetTrigger className="md:hidden outline-none">
          <Tag variant="secondary">
            {filter.label} ({getDisplayValue()})
            <ChevronDown className="size-4" />
          </Tag>
        </SheetTrigger>
        <SheetFilterContent filter={filter} />
      </Sheet>
    </>
  );
}

type ResetFiltersButtonProps = {
  onReset: () => void;
};

export function ResetFiltersButton({ onReset }: ResetFiltersButtonProps) {
  const { t } = useTranslation();

  return (
    <Tag variant="tertiary" className="mr-2" asChild>
      <button onClick={onReset}>
        {t("Delete all")}
        <Trash className="size-4" />
      </button>
    </Tag>
  );
}
