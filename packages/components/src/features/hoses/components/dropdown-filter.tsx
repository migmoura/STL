import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Tag } from "@/components/ui/tag.tsx";
import { ChevronDown } from "lucide-react";
import { entriesFromObject } from "@/lib/utils.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { parseAsFloat, useQueryState } from "nuqs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Interweave } from "interweave";
import { useTranslation } from "react-i18next";

type DropdownFilterProps<T extends string> = {
  id: T;
  name: string;
  filters: Record<number, { label: string }>;
  sorting?: (a: [number, { label: string }], b: [number, { label: string }]) => number;
};

export function DropdownFilter<T extends string>({
  id,
  name,
  filters,
  sorting = () => 0,
}: DropdownFilterProps<T>) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useQueryState(id, parseAsFloat);
  const [tempFilters, setTempFilters] = useState<number | null>(query);
  const { t } = useTranslation();

  const handleCheckboxChange = (value: number) => {
    setTempFilters(value);
  };

  const handleSave = () => {
    setQuery(tempFilters);
    setOpen(false);
  };

  const handleReset = () => {
    setTempFilters(null);
  };

  return (
    <>
      <DropdownMenu
        open={open}
        onOpenChange={(state) => {
          setOpen(state);
        }}
      >
        <DropdownMenuTrigger className="hidden md:block outline-none">
          <Tag variant="secondary">
            {query ? `${name} (${filters[query].label})` : name} <ChevronDown className="size-4" />
          </Tag>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative w-78 pb-14 z-50">
          {entriesFromObject(filters)
            .sort(([nA, a], [nB, b]) => sorting([nA, a], [nB, b]))
            .map(([key, value]) => (
              <DropdownMenuCheckboxItem
                onSelect={(e) => e.preventDefault()}
                checked={tempFilters === key}
                key={key}
                onCheckedChange={() => handleCheckboxChange(key)}
              >
                <Interweave content={value.label} />
              </DropdownMenuCheckboxItem>
            ))}
          <div className="fixed bottom-0 right-0 left-0 grid grid-cols-2 min-w-0">
            <Button variant="secondary" onClick={handleReset} disabled={tempFilters === null}>
              {t("Reset")}
            </Button>
            <Button type="submit" onClick={handleSave}>
              {t("Save")}
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <Sheet>
        <SheetTrigger className="md:hidden outline-none">
          <Tag variant="secondary">{query ? `${name} (${filters[query].label})` : name}</Tag>
        </SheetTrigger>
        <SheetContent className="w-screen overflow-y-auto">
          <div className="h-full mt-25 px-6 flex flex-col gap-8">
            <p className="text-h3">{name}</p>
            {entriesFromObject(filters)
              .sort(([nA, a], [nB, b]) => sorting([nA, a], [nB, b]))
              .map(([key, value]) => (
                <div key={key} className="flex gap-4">
                  <Checkbox
                    id={key.toString()}
                    onSelect={(e) => e.preventDefault()}
                    checked={tempFilters === key}
                    onCheckedChange={() => handleCheckboxChange(key)}
                  />
                  <label htmlFor={key.toString()} className="text-gray-1">
                    <Interweave content={value.label} />
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
    </>
  );
}
