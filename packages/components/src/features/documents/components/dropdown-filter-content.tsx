import { DropdownMenuCheckboxItem, DropdownMenuContent } from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useTranslation } from "react-i18next";
import type { useFilters } from "@/lib/search/hooks/use-filters.ts";
import { useTemporaryFilter } from "@/features/documents/hooks/use-temporary-filter.ts";

type FilterValue = ReturnType<typeof useFilters>["filters"][string];

type DropdownFilterContentProps = {
  filter: FilterValue;
  open: boolean;
  onClose?: () => void;
};

export function DropdownFilterContent({ filter, open, onClose }: DropdownFilterContentProps) {
  const { t } = useTranslation();
  const { handleCheckedChange, isChecked, handleSave, handleReset, isDirty } = useTemporaryFilter(
    filter,
    {
      reset: open,
      callback: onClose,
    },
  );

  return (
    <DropdownMenuContent className="relative w-78 pb-14">
      {filter.options.map(({ label, count }) => (
        <DropdownMenuCheckboxItem
          onSelect={(e) => e.preventDefault()}
          key={label}
          checked={isChecked(label)}
          onCheckedChange={(checked) => handleCheckedChange(label, checked)}
          disabled={count === 0}
        >
          <label htmlFor={label} className="w-full flex justify-between">
            {label}
            <span>({count})</span>
          </label>
        </DropdownMenuCheckboxItem>
      ))}
      <div className="absolute bottom-0 right-0 left-0 grid grid-cols-2 min-w-0">
        <Button
          variant="secondary"
          onClick={handleReset}
          disabled={!isDirty && filter.value.length === 0}
        >
          {t("Reset")}
        </Button>
        <Button type="submit" onClick={handleSave}>
          {t("Save")}
        </Button>
      </div>
    </DropdownMenuContent>
  );
}
