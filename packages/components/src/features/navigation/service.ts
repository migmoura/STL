import { Locale } from "@/features/navigation/types.ts";

export const fetchLocales = async (url: string) =>
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => data.data as Locale[]);
