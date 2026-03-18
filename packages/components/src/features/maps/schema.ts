import { atom } from "jotai";
import { z } from "zod/v4/mini";

export const defaultLocation = {
  lat: 37.7749,
  lng: -122.4194,
};

export const formSchema = z.object({
  distanceUnit: z.string(),
  location: z.string(),
  radius: z.number(),
  geolocation: z.boolean(),
  coordinates: z.object({
    lng: z.number(),
    lat: z.number(),
  }),
  filters: z.record(z.string(), z.string()),
});

export const filters = {
  gad: {
    cbh: {
      label: "Conveyor Belts, Heavyweight",
      locator: "",
    },
    hydraulics: {
      label: "Hydraulics",
      locator: "Locator_Hydraulics__c",
    },
    ptp: {
      label: "Power Transmission Products",
    },
    ihose: {
      label: "Industrial Hose",
    },
    ihoseStarDist: {
      label: "Industrial Hose - STAR Distributor",
    },
    pde: {
      label: "Petroleum Dispensing Equipment",
    },
  },
  aftermarket: {
    achosefittings: {
      label: "AC Hose Fittings",
    },
    atvbelts: {
      label: "ATV Belts",
    },
    gardenhose: {
      label: "Garden Hose",
    },
    hdairsprings: {
      label: "HD Airsprings",
    },
    hdbeltshose: {
      label: "HD Belts & Hose",
    },
    hydraulics: {
      label: "Hydraulics",
    },
    installer: {
      label: "Installer",
    },
    lawnmoverbelts: {
      label: "Lawn Mower Belts",
    },
    partsstore: {
      label: "Parts Store",
    },
    snowmobilebelts: {
      label: "Snowmobile Belts",
    },
  },
} as const;

export const filterKeys = (locatorType: "gad" | "aftermarket" = "gad") =>
  Object.keys(filters[locatorType]);

export const selectedDealer = atom<string | null>(null);
const location = z.object({
  value: z.string(),
  label: z.string(),
  lat: z.string(),
  lng: z.string(),
  url: z.optional(z.string()),
});
export const fetchLocations = async ([url]: [string]) => {
  return fetch(url).then(async (resp) => {
    const data = await resp.json();
    return await z.array(location).parseAsync(data.data);
  });
};
export type FormValues = {
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};
