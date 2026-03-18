import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Tag } from "@/components/ui/tag.tsx";
import { ChevronDown } from "lucide-react";
import { entriesFromObject } from "@/lib/utils.tsx";
import { FilterRecord } from "@/features/search/types.ts";
import { useTranslation } from "react-i18next";

type DropdownFilterMenuProps<T extends string> = {
  label: string;
  options: FilterRecord;
  selected: T[];
  onSelectionChange: (selected: T[]) => void;
};

export function DropdownFilterMenu<T extends string>({
  label,
  options,
  selected,
  onSelectionChange,
}: DropdownFilterMenuProps<T>) {
  const [open, setOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState<Record<T, boolean>>({} as Record<T, boolean>);
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      const initialTemp = {} as Record<T, boolean>;
      Object.keys(options).forEach((key) => {
        const typedKey = key as T;
        initialTemp[typedKey] = selected.includes(typedKey);
      });
      setTempFilters(initialTemp);
    }
  }, [open, options, selected]);

  const handleCheckboxChange = (key: T, checked: boolean) => {
    setTempFilters((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  const handleSave = () => {
    const newSelected = entriesFromObject(tempFilters)
      .filter(([_, value]) => value)
      .map(([key]) => key);
    onSelectionChange(newSelected);
    setOpen(false);
  };

  const handleReset = () => {
    setTempFilters({} as Record<T, boolean>);
    onSelectionChange([]);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="hidden md:block outline-none">
        <Tag>
          {label} <ChevronDown className="size-4" />
        </Tag>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative w-78 pb-14 z-50">
        {entriesFromObject(options).map(([key, value]) => (
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={tempFilters[key as T] || false}
            key={key}
            onCheckedChange={(checked: boolean) => handleCheckboxChange(key as T, checked)}
          >
            <label htmlFor={key} className="w-full flex justify-between">
              {value.label}
              <span>{value.count ? `(${value.count})` : ""}</span>
            </label>
          </DropdownMenuCheckboxItem>
        ))}
        <div className="fixed bottom-0 right-0 left-0 grid grid-cols-2 min-w-0">
          <Button
            variant="secondary"
            onClick={handleReset}
            disabled={Object.keys(tempFilters).length === 0}
          >
            {t("Reset")}
          </Button>
          <Button type="submit" onClick={handleSave}>
            {t("Save")}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
