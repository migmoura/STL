import { equalIgnoreCase } from "@/lib/utils.tsx";
import { Locale } from "@/features/navigation/types.ts";

export function inferLocales(locales: Locale[] | undefined) {
  if (!locales || locales.length === 0) {
    return;
  }

  const browserLanguages = navigator.languages || [navigator.language];
  for (const lang of browserLanguages) {
    const [languageCode, countryCode] = lang.toLowerCase().split("-");
    if (countryCode) {
      const exactMatch = locales.find(
        (l) =>
          equalIgnoreCase(l.localeCode, languageCode) &&
          equalIgnoreCase(l.countryCode, countryCode),
      );
      if (exactMatch) {
        return `${exactMatch.countryCode}/${exactMatch.localeCode}`.toLowerCase();
      }
      const countryMatch = locales.find((l) => equalIgnoreCase(l.countryCode, countryCode));
      if (countryMatch) {
        return `${countryMatch.countryCode}/${countryMatch.localeCode}`.toLowerCase();
      }
    }

    const languageExactMatch = locales.find(
      (l) =>
        equalIgnoreCase(l.localeCode, languageCode) && equalIgnoreCase(l.countryCode, languageCode),
    );
    if (languageExactMatch) {
      return `${languageExactMatch.countryCode}/${languageExactMatch.localeCode}`.toLowerCase();
    }

    const languageMatch = locales.find((l) => equalIgnoreCase(l.countryCode, languageCode));
    if (languageMatch) {
      return `${languageMatch.countryCode}/${languageMatch.localeCode}`.toLowerCase();
    }
  }
}

export function findFirstMatchingLocale(
  localesToCheck: (string | null | undefined)[],
  data: Locale[] | undefined,
) {
  for (const localeKey of localesToCheck) {
    if (localeKey) {
      const [countryCode, localeCode] = localeKey.split("/");
      const found = data?.find(
        (l) =>
          equalIgnoreCase(l.countryCode, countryCode) && equalIgnoreCase(l.localeCode, localeCode),
      );
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}
