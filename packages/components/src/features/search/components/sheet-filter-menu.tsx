import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Tag } from "@/components/ui/tag.tsx";
import { entriesFromObject } from "@/lib/utils.tsx";
import { FilterRecord } from "@/features/search/types.ts";
import { useTranslation } from "react-i18next";

type SheetFilterMenuProps<T extends string> = {
  label: string;
  options: FilterRecord;
  selected: T[];
  onSelectionChange: (selected: T[]) => void;
};

export function SheetFilterMenu<T extends string>({
  label,
  options,
  selected,
  onSelectionChange,
}: SheetFilterMenuProps<T>) {
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden outline-none">
        <Tag>
          {label} ({selected.length})
        </Tag>
      </SheetTrigger>
      <SheetContent className="w-screen overflow-y-auto">
        <div className="h-full mt-25 px-6 flex flex-col gap-8">
          <p className="text-h3">{label}</p>
          {entriesFromObject(options).map(([key, value]) => (
            <div key={key} className="flex gap-4">
              <Checkbox
                id={key}
                onSelect={(e) => e.preventDefault()}
                checked={tempFilters[key as T] || false}
                onCheckedChange={(checked: boolean) => handleCheckboxChange(key as T, checked)}
              />
              <label htmlFor={key} className="w-full text-gray-1 flex justify-between">
                {value.label}
                <span>{value.count ? `(${value.count})` : ""}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 p-6 w-full flex justify-center">
          <SheetTrigger asChild>
            <Button className="w-full" onClick={handleSave}>
              {t("Apply")}
            </Button>
          </SheetTrigger>
        </div>
      </SheetContent>
    </Sheet>
  );
}
