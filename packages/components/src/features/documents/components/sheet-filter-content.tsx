import { Button } from "@/components/ui/button.tsx";
import { useTranslation } from "react-i18next";
import { SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { useTemporaryFilter } from "@/features/documents/hooks/use-temporary-filter.ts";
import { FilterValue } from "@/lib/search/hooks/use-filters.ts";

type SheetFilterContentProps = {
  filter: FilterValue;
};

export function SheetFilterContent({ filter }: SheetFilterContentProps) {
  const { t } = useTranslation();
  const { handleCheckedChange, isChecked, handleSave, handleReset } = useTemporaryFilter(filter);

  return (
    <SheetContent className="w-screen overflow-y-auto">
      <div className="h-full mt-25 px-6 flex flex-col gap-8">
        <p className="text-h3">{filter.label}</p>
        {filter.options.map(({ label, count }) => (
          <div key={label} className="flex gap-4">
            <Checkbox
              id={label}
              onSelect={(e) => e.preventDefault()}
              checked={isChecked(label)}
              onCheckedChange={(checked) =>
                handleCheckedChange(label, typeof checked === "boolean" ? checked : false)
              }
            />
            <label htmlFor={label} className="w-full text-gray-1 flex justify-between">
              {label}
              <span>({count})</span>
            </label>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 p-6 w-full flex flex-col gap-4 justify-center">
        <SheetTrigger asChild>
          <Button className="w-full" onClick={handleSave}>
            {t("Apply")}
          </Button>
        </SheetTrigger>
        <Button className="w-full" variant="secondary" onClick={handleReset}>
          {t("Reset")}
        </Button>
      </div>
    </SheetContent>
  );
}
