import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useForm } from "react-hook-form";
import { Headline } from "@/components/ui/headline.tsx";
import { ComponentProps, Suspense, useEffect, useId } from "react";
import useSWR from "swr";
import { LocatorMap } from "../components/locator-map.tsx";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Button } from "@/components/ui/button.tsx";
import { MoveRight } from "lucide-react";
import { ConsentGate } from "@/features/consent/components/consent-gate.tsx";
import { fetchLocations, FormValues } from "@/features/maps/schema.ts";
import { useTranslation } from "react-i18next";

type LocationMapProps = {
  locationsUrl?: string | undefined;
  description?: string | undefined;
  mapID?: string | undefined;
} & ComponentProps<typeof Headline>;

export function LocationMap({ description, locationsUrl, mapID, ...headline }: LocationMapProps) {
  const id = useId();
  const geocoder = useMapsLibrary("geocoding");
  const { t } = useTranslation();
  const { data: locations = [] } = useSWR([locationsUrl], fetchLocations, {
    suspense: true,
    keepPreviousData: true,
  });

  const regionSegment = new URL(location.href).pathname.split("/")[1];
  const region = locations.find((location) => location.value === regionSegment) ?? locations[0];
  const form = useForm<FormValues>({
    defaultValues: {
      location: region.label,
      coordinates: {
        lat: Number(locations[0].lat),
        lng: Number(locations[0].lng),
      },
    },
  });
  const { watch, setValue, handleSubmit } = form;
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
  const onSubmitLocation = async (data: FormValues) => {
    await geocodeLocation(data.location);
  };
  function updateLocationAndSave(value: string) {
    setValue("location", value);
    handleSubmit(onSubmitLocation)();
  }

  useEffect(() => {
    handleSubmit(onSubmitLocation)();
  }, [region, geocoder]);

  return (
    <div className="relative">
      <div className="fluid lg:absolute top-0 left-0 right-0 bottom-0">
        <div className="bg-white lg:h-[576px] lg:absolute lg:shadow-lg lg:w-1/2 xl:w-2/5 lg:top-1/2 lg:-translate-y-1/2 lg:z-10 px-6 py-14 lg:p-20">
          <div className="relative size-full">
            <Headline {...headline} block={false} className="mb-8" />
            <p className="text-gray-1 lg:mb-8">{description}</p>
            <Form {...form}>
              <form
                className="absolute w-full min-w-[316px] md:w-1/3 lg:w-full -bottom-36 lg:bottom-0 lg:flex flex-col gap-10 z-10"
                onSubmit={handleSubmit(onSubmitLocation)}
              >
                <FormField
                  key="location"
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <Select value={field.value} onValueChange={updateLocationAndSave}>
                        <FormControl>
                          <SelectTrigger
                            id={id}
                            className="w-full"
                            action={
                              <Button
                                aria-label={t("Open location page")}
                                size="icon"
                                type="submit"
                                asChild
                              >
                                <a
                                  href={
                                    locations.find((location) => location.label === field.value)
                                      ?.url || "#"
                                  }
                                >
                                  <MoveRight />
                                </a>
                              </Button>
                            }
                          >
                            <span className="peer flex" data-placeholder={!field.value}>
                              <SelectValue />
                            </span>
                            <Label htmlFor={id}>{t("Choose a location")}</Label>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location.value} value={location.label}>
                              {location.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>
      </div>
      <LocatorMap
        setLocation={updateLocationAndSave}
        locations={locations}
        currentLocation={watch("location")}
        currentCoordinates={watch("coordinates")}
        mapID={mapID}
      />
    </div>
  );
}

type DistributorLocator = {
  apiKey?: string | undefined;
} & ComponentProps<typeof LocationMap>;

export function LocationMapProvider({ apiKey, ...props }: DistributorLocator) {
  return apiKey ? (
    <ConsentGate vendorId="s1104" vendorName="Google Maps">
      <APIProvider libraries={["geocoding"]} apiKey={apiKey}>
        <Suspense fallback={null}>
          <LocationMap {...props} />
        </Suspense>
      </APIProvider>
    </ConsentGate>
  ) : null;
}
