import { cn } from "@/lib/utils.tsx";
import { parseAsArrayOf, parseAsFloat, useQueryState } from "nuqs";
import { SearchInput } from "@/components/ui/input.tsx";
import { useDebounceCallback } from "usehooks-ts";
import { DropdownFilter } from "@/features/hoses/components/dropdown-filter.tsx";
import { MultipleSlider } from "@/features/hoses/components/multiple-slider.tsx";
import useSWR from "swr";
import { getIHosesLookupItems } from "@/features/hoses/service.ts";
import { lookupToFilters } from "@/features/hoses/optics.ts";
import { Tag } from "@/components/ui/tag.tsx";
import { Trash } from "lucide-react";

type DropdownFiltersProps = {
  className?: string;
};

export function HosesFilter({ className }: DropdownFiltersProps) {
  const language = new URL(location.href).pathname.split("/")[2];

  const [query, setQuery] = useQueryState("q");
  const [, setApplication] = useQueryState("a", parseAsFloat);
  const [, setMedium] = useQueryState("m", parseAsFloat);
  const [, setApplicationField] = useQueryState("af", parseAsFloat);
  const [, setDiameter] = useQueryState("d", parseAsFloat);
  const [, setPressure] = useQueryState("op", parseAsArrayOf(parseAsFloat));
  const [, setBurstPressure] = useQueryState("bp", parseAsArrayOf(parseAsFloat));
  const [, setVacuum] = useQueryState("v", parseAsArrayOf(parseAsFloat));
  const [, setTemperature] = useQueryState("t", parseAsArrayOf(parseAsFloat));

  const debounced = useDebounceCallback(setQuery, 300);

  const { data: filters } = useSWR(`/config/${language}/hoses/lookupitems.json`, async (url) => {
    const data = await getIHosesLookupItems(url);
    return lookupToFilters(data);
  });

  const handleReset = () => {
    setQuery(null);
    setApplication(null);
    setMedium(null);
    setApplicationField(null);
    setDiameter(null);
    setPressure(null);
    setBurstPressure(null);
    setVacuum(null);
    setTemperature(null);
  };

  return (
    <div className={cn("flex flex-col md:justify-between gap-6", className)}>
      <div className="flex items-center flex-wrap gap-6">
        <SearchInput
          className="w-full mr-4 md:w-fit"
          value={query || ""}
          onChange={(e) => debounced(e.target.value)}
        />
        <div className="flex flex-wrap items-center gap-2">
          {filters?.application ? (
            <DropdownFilter
              id="a"
              name="Application"
              filters={filters?.application}
              sorting={([, a], [, b]) => a.label.localeCompare(b.label)}
            />
          ) : null}
          {filters?.medium ? (
            <DropdownFilter
              id="m"
              name="Medium"
              filters={filters?.medium}
              sorting={([, a], [, b]) => a.label.localeCompare(b.label)}
            />
          ) : null}
          {filters?.applicationField ? (
            <DropdownFilter
              id="af"
              name="Application Field"
              filters={filters?.applicationField}
              sorting={([, a], [, b]) => a.label.localeCompare(b.label)}
            />
          ) : null}
          {filters?.diameter ? (
            <DropdownFilter
              id="d"
              name="Diameter (mm)"
              filters={filters?.diameter}
              sorting={([, a], [, b]) => parseFloat(a.label) - parseFloat(b.label)}
            />
          ) : null}
        </div>
        <Tag variant="tertiary" className="ml-auto" onClick={handleReset}>
          Clear all
          <Trash className="size-4" />
        </Tag>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
        <MultipleSlider id="op" name="Operating Pressure (bar)" min={1} max={85} />
        <MultipleSlider id="bp" name="Burst Pressure (bar)" min={6} max={350} />
        <MultipleSlider id="v" name="Vacuum (bar)" min={-1} max={0.9} step={0.1} />
        <MultipleSlider id="t" name="Temperature (°C)" min={-40} max={180} />
      </div>
    </div>
  );
}
