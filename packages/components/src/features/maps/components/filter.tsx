import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.tsx";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  dropdownMenuItemVariants,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { ChevronDown, Locate, LocateFixed, MoveRight, Radius } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import type * as z from "zod";
import { filters as _filters, formSchema } from "@/features/maps/schema.ts";
import { Input } from "@/components/ui/input.tsx";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { DropdownFilters } from "@/features/search/components/dropdown-filters.tsx";
import { cn, entriesFromObject } from "@/lib/utils.tsx";
import { useAutocompleteSuggestions } from "@/features/maps/hooks/use-autocomplete-suggestions.ts";
import { Command, CommandEmpty, CommandItem, CommandList } from "@/components/ui/command.tsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type DistributorFilterProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  units: string;
  locatorType: "gad" | "aftermarket";
};

export function DistributorFilter({ form, units, locatorType = "gad" }: DistributorFilterProps) {
  const [isFocused, setIsFocused] = useState(false);
  const geocoder = useMapsLibrary("geocoding");
  const { suggestions, resetSession } = useAutocompleteSuggestions(form.watch("location"));
  const { t } = useTranslation();

  const { setValue, watch } = form;

  const filters = _filters[locatorType];

  const selectedFilters = entriesFromObject(watch().filters)
    .filter(([, value]) => value)
    .map(([key]) => key as keyof typeof filters);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setValue("geolocation", true);

      if (!geocoder) {
        return;
      }
      try {
        const response = await new geocoder.Geocoder().geocode({
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
        setValue("coordinates", {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setValue("location", response?.results?.[0]?.address_components?.[4].long_name);
      } catch {
        return null;
      }
    });
  };

  function handleFilterChange<T extends {}>(field: ControllerRenderProps<T>) {
    return (selected: (keyof typeof filters)[]) => {
      const newFilters = selected.reduce(
        (acc, filter) => {
          acc[filter] = true;
          return acc;
        },
        {} as Record<string, boolean>,
      );
      field.onChange(newFilters);
    };
  }

  return (
    <div className="w-full flex flex-col gap-18">
      <div className="flex flex-col md:flex-row md:items-center gap-10">
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="w-full md:w-1/2 xl:w-1/3">
              <FormControl>
                <Command className="relative">
                  <Input
                    placeholder=" "
                    aria-labelledby="location-label"
                    {...field}
                    onFocus={() => {
                      setIsFocused(true);
                    }}
                    disabled={watch("geolocation")}
                    className="gap-2"
                  >
                    <FormLabel id="location-label">Location</FormLabel>
                    {watch("geolocation") ? (
                      <LocateFixed
                        className="text-black"
                        onClick={() => setValue("geolocation", false)}
                      />
                    ) : (
                      <Locate onClick={getLocation} />
                    )}
                    <Button size="icon" type="submit">
                      <MoveRight />
                      <span className="sr-only">{t("Search in location")}</span>
                    </Button>
                  </Input>
                  {!watch("geolocation") ? (
                    <CommandList
                      className={cn(
                        "absolute top-[calc(100%+2px)] left-0 py-2 w-full shadow-lg bg-white z-10",
                        { hidden: !isFocused || field.value.length === 0 },
                      )}
                    >
                      <CommandEmpty>No results found.</CommandEmpty>
                      {suggestions.map((suggestion) => {
                        return (
                          <CommandItem
                            className={dropdownMenuItemVariants()}
                            onSelect={() => {
                              const selectedValue = suggestion.placePrediction?.text.text || "";
                              setValue("location", selectedValue);
                              setIsFocused(false);
                              resetSession();
                            }}
                          >
                            {suggestion.placePrediction?.text.text}
                          </CommandItem>
                        );
                      })}
                    </CommandList>
                  ) : null}
                </Command>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="radius"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DropdownMenu>
                  <div className="flex items-center gap-2 font-semibold shrink-0">
                    <DropdownMenuTrigger className="flex items-center gap-2 shrink-0 outline-none pb-1 hover:shadow-inherit hover:shadow-[inset_0_-1px_0_0]">
                      <Radius className="size-5" />
                      {watch("radius")} {units} Radius
                      <ChevronDown className="size-5" />
                    </DropdownMenuTrigger>
                  </div>
                  <DropdownMenuContent className="w-42">
                    {[10, 20, 50, 100].map((value) => (
                      <DropdownMenuCheckboxItem
                        variant="outline"
                        checked={field.value === value}
                        key={value}
                        onCheckedChange={() => setValue("radius", value)}
                      >
                        {value}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-full xl:col-start-2 w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FormField
            control={form.control}
            name="filters"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DropdownFilters
                    filters={{
                      label: "Add filter",
                      records: filters,
                    }}
                    selected={selectedFilters}
                    onSelectionChange={handleFilterChange(field)}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
