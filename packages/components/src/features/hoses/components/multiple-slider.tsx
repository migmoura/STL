import { parseAsArrayOf, parseAsFloat, useQueryState } from "nuqs";
import { Slider } from "@/components/ui/slider.tsx";
import * as LabelPrimitive from "@radix-ui/react-label";
import { ComponentProps, useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

type DropdownFilterProps<T extends string> = Omit<
  ComponentProps<typeof Slider>,
  "defaultValue" | "min" | "max"
> & {
  id: T;
  name: string;
  defaultValue?: number[];
  min: number;
  max: number;
};

export function MultipleSlider<T extends string>({
  id,
  name,
  min,
  max,
  ...props
}: DropdownFilterProps<T>) {
  const [sliderValue, setSliderValue] = useState(props.defaultValue || [min, max]);
  const [query, setQuery] = useQueryState(
    id,
    parseAsArrayOf(parseAsFloat).withDefault(props.defaultValue || [min, max]),
  );
  const debounced = useDebounceCallback(setQuery, 200);

  useEffect(() => {
    debounced(sliderValue);
  }, [sliderValue, debounced]);

  return (
    <div className="w-full md:w-60 flex flex-col">
      <LabelPrimitive.Root htmlFor={`${id}-slider`} className="mb-2 leading-label text-sm">
        {name}
      </LabelPrimitive.Root>
      <Slider
        {...props}
        id={`${id}-slider`}
        min={min}
        max={max}
        defaultValue={query}
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value as number[])}
      />
      <div className="mt-1 flex justify-between text-sm text-gray-1">
        <span>{query[0]}</span>
        <span>{query[1]}</span>
      </div>
    </div>
  );
}
