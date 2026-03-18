import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";
import { Form } from "@/components/ui/form.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";
import { Headline } from "@/components/ui/headline.tsx";
import { parseSearchParams } from "@/lib/utils.tsx";
import { DistributorMap } from "@/features/maps/components/distributor-map.tsx";
import { DealerList } from "@/features/maps/components/dealers.tsx";
import { DistributorFilter } from "@/features/maps/components/filter.tsx";
import { formSchema, filterKeys as _filterKeys } from "@/features/maps/schema.ts";
import { ComponentProps, useEffect } from "react";
import useSWR from "swr";
import { ConsentGate } from "@/features/consent/components/consent-gate.tsx";

type LocatorProps = {
  units?: string | undefined;
  mapID?: string | undefined;
  description?: string | undefined;
  defaultCoordinates?: z.infer<typeof formSchema>["coordinates"];
  locatorType?: "gad" | "aftermarket";
} & ComponentProps<typeof Headline>;

const fetchDealers = async ([url, filters, location, radius, units, locatorType, filterKeys]: [
  string,
  z.infer<typeof formSchema>["filters"],
  z.infer<typeof formSchema>["coordinates"],
  z.infer<typeof formSchema>["radius"],
  "km" | "mi",
  string,
  string[],
]) => {
  if (!url || !filters) {
    return [];
  }
  const urlWithFilters = new URL(url, window.location.origin);

  urlWithFilters.searchParams.set("locatorType", locatorType);
  urlWithFilters.searchParams.set("radius", String(radius));
  urlWithFilters.searchParams.set("distanceUnit", units);
  urlWithFilters.searchParams.set("latitude", String(location.lat));
  urlWithFilters.searchParams.set("longitude", String(location.lng));
  Object.values(filters).forEach((value, index) => {
    if (value) {
      urlWithFilters.searchParams.set(filterKeys[index], String(value));
    }
  });

  return fetch(urlWithFilters).then((resp) => resp.json());
};

export function Locator({
  headline,
  subHeadline,
  description,
  defaultCoordinates = { lat: 40.73061, lng: -73.935242 },
  units = "mi",
  mapID,
  locatorType = "gad",
}: LocatorProps) {
  const region = new URL(location.href).pathname.split("/")[1];

  const filterKeys = _filterKeys(locatorType);

  const initialParams = parseSearchParams(window.location.search, ([key]) =>
    filterKeys.includes(key),
  );
  const geocoder = useMapsLibrary("geocoding");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      geolocation: false,
      coordinates: defaultCoordinates,
      distanceUnit: units,
      radius: 20,
      filters: initialParams,
    },
  });
  const { watch, setValue } = form;

  const { data: dealers = [], isLoading } = useSWR(
    [
      "apis/v1/distributors",
      watch(filterKeys.map((key) => `filters.${key}`) as `filters.${string}`[]),
      watch("coordinates"),
      watch("radius"),
      units,
      locatorType,
      filterKeys,
    ],
    fetchDealers,
    {
      keepPreviousData: true,
    },
  );

  const geocodeLocation = async (address: string) => {
    if (!geocoder) {
      return;
    }

    try {
      const response = await new geocoder.Geocoder().geocode({
        address,
      });
      const location = response.results[0].geometry.location;
      setValue("coordinates", {
        lat: location.lat(),
        lng: location.lng(),
      });
    } catch {
      return null;
    }
  };

  const onSubmitLocation = async (data: z.infer<typeof formSchema>) => {
    await geocodeLocation(data.location);
  };
  useEffect(() => {
    if (!geocoder || region === "global") {
      return;
    }

    const updateCoordinates = async () => {
      try {
        const address = {
          address: "",
          componentRestrictions: { country: region.toUpperCase() },
        };
        const response = await new geocoder.Geocoder().geocode(address);
        const location = response.results[0].geometry.location;
        setValue("coordinates", {
          lat: location.lat(),
          lng: location.lng(),
        });
      } catch (error) {
        return null;
      }
    };
    updateCoordinates();
  }, [region, geocoder]);

  return (
    <Form {...form}>
      <form
        id="distributor-locator"
        className="flex flex-col gap-10"
        onSubmit={form.handleSubmit(onSubmitLocation)}
      >
        <div className="fluid flex flex-col gap-10">
          <Headline headline={headline} subHeadline={subHeadline} />
          <div className="flex flex-col gap-10">
            {description ? <p className="text-gray-1">{description}</p> : null}
            <DistributorFilter units={units} form={form} locatorType={locatorType} />
          </div>
        </div>
        <div className="relative col-span-12 z-0">
          <DistributorMap
            dealers={dealers}
            currentCoordinates={watch("coordinates")}
            defaultCoordinates={defaultCoordinates}
            mapID={mapID}
          />
          <div className="fluid md:absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
            <div className="bg-white h-[576px] md:absolute md:shadow-lg md:w-1/2 xl:w-2/5 md:top-1/2 md:-translate-y-1/2 md:z-10 pointer-events-auto">
              <div className="relative size-full overflow-x-hidden">
                <DealerList
                  dealers={dealers}
                  isLoading={isLoading}
                  location={watch("coordinates")}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}

type DistributorLocator = {
  apiKey?: string | undefined;
} & ComponentProps<typeof Locator>;

export function DistributorLocator({ apiKey, ...props }: DistributorLocator) {
  return apiKey ? (
    <ConsentGate vendorId="s1104" vendorName="Google Maps">
      <APIProvider libraries={["geocoding"]} apiKey={apiKey}>
        <Locator {...props} />
      </APIProvider>
    </ConsentGate>
  ) : null;
}
