import { Trans, useTranslation } from "react-i18next";
import { NoticeBanner } from "@/components/ui/notice-banner.tsx";
import { Button } from "@/components/ui/button.tsx";
import useSWR from "swr";
import { equalIgnoreCase, groupBy } from "@/lib/utils.tsx";
import { useLocalStorage } from "usehooks-ts";
import { useMemo, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownStyledTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Locale } from "@/features/navigation/types.ts";
import { findFirstMatchingLocale, inferLocales } from "@/features/navigation/utils.ts";
import { fetchLocales } from "@/features/navigation/service.ts";

export function CountryNotice() {
  const { t } = useTranslation();
  const [, region, language] = new URL(location.href).pathname.split("/");
  const { data } = useSWR("/config/locales.json", fetchLocales);

  const locales = groupBy(data, "group");

  const currentLocaleKey = `${region}/${language}`.toLowerCase();
  const [selectedLocale, setSelectedLocale] = useState<string | null>(null);
  const [preferredLocale, setPreferredLocale] = useLocalStorage<string | null>(
    "__conti-preferred-locale",
    null,
  );
  const inferredLocale = useMemo(() => inferLocales(data), [data]);

  const currentLocale = data?.find(
    (l) => equalIgnoreCase(l.countryCode, region) && equalIgnoreCase(l.localeCode, language),
  );
  const displayLocale =
    findFirstMatchingLocale([selectedLocale, preferredLocale, inferredLocale], data) ??
    currentLocale;

  if (!locales) {
    return null;
  }

  const showNotice = preferredLocale !== currentLocaleKey;

  const handleContinue = () => {
    if (selectedLocale) {
      setPreferredLocale(selectedLocale);
      window.location.href = `/${selectedLocale}`;
    } else {
      setPreferredLocale(currentLocaleKey);
    }
  };

  const handleLocaleSelect = (countryCode: string, localeCode: string) => {
    const selectedLocaleKey = `${countryCode}/${localeCode}`.toLowerCase();
    setSelectedLocale(selectedLocaleKey);
  };

  return (
    <NoticeBanner
      open={showNotice}
      message={
        <Trans
          defaults="You are currently on our <bold>{{locale}}</bold> website. To access your local information, please select your country/language."
          values={{ locale: `${currentLocale?.country} (${currentLocale?.locale})` }}
          components={{ bold: <strong className="font-bold" /> }}
        />
      }
      ariaLabel="Country and language notice"
      primaryAction={
        <DropdownMenu>
          <DropdownStyledTrigger className="w-fit md:w-[435px] bg-opacity-40">
            {displayLocale?.country} ({displayLocale?.locale})
          </DropdownStyledTrigger>
          <DropdownMenuContent
            align="end"
            className="max-h-[400px] w-(--radix-dropdown-menu-trigger-width) z-50 overflow-y-auto"
          >
            {Object.entries(locales).map(([groupLabel, groupLocales]: [string, Locale[]]) => (
              <DropdownMenuGroup key={groupLabel}>
                <DropdownMenuLabel>{groupLabel}</DropdownMenuLabel>
                {groupLocales.map((loc: Locale) => (
                  <DropdownMenuItem
                    key={`${loc.countryCode}-${loc.localeCode}`}
                    onClick={() => handleLocaleSelect(loc.countryCode, loc.localeCode)}
                  >
                    {loc.country} ({loc.locale})
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      }
      secondaryAction={
        <Button variant="secondary" onClick={handleContinue}>
          {t("Continue")}
        </Button>
      }
    />
  );
}
