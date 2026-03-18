import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSort } from "@/lib/search/hooks/use-sort.ts";

export function DropdownSort() {
  const { t } = useTranslation();
  const { options, selected } = useSort();

  if (!options) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-auto flex shrink-0 items-center gap-2 font-semibold text-sm outline-none">
        <span className="text-gray-1 leading-label">{t("Sort by:")}</span>
        <span className="md:hidden">{selected?.label.short}</span>
        <span className="hidden md:inline">{selected?.label.long}</span>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            variant="outline"
            key={option.label.long}
            checked={option.isSelected}
            onCheckedChange={option.select}
          >
            <span className="md:hidden">{option.label.short}</span>
            <span className="hidden md:inline">{option.label.long}</span>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
