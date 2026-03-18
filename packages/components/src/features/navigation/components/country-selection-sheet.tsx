import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet.tsx";
import {
  CountrySelect,
  CountrySelectItem,
  CountrySelectItemGroup,
  CountrySelectList,
  CountrySelectSearch,
} from "@/components/ui/country-select.tsx";
import useSWR from "swr";
import { entriesFromObject, equalIgnoreCase, groupBy } from "@/lib/utils.tsx";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "usehooks-ts";
import { fetchLocales } from "@/features/navigation/service.ts";

export function CountrySelectionSheet({
  renderTrigger,
}: {
  renderTrigger?: (country: string, language: string) => ReactNode;
}) {
  const [, setPreferredLocale] = useLocalStorage<string | null>("__conti-preferred-locale", null);

  const href = new URL(location.href);
  const region = href.pathname.split("/")[1];
  const language = href.pathname.split("/")[2];
  const currentPath = href.pathname.split("/").slice(3).join("/");
  const { t } = useTranslation();

  const { data } = useSWR("/config/locales.json", fetchLocales);
  const locales = groupBy(data, "group");
  const locale = data?.find(
    (l) => equalIgnoreCase(l.countryCode, region) && equalIgnoreCase(l.localeCode, language),
  );

  if (!locales) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger className="contents">
        {renderTrigger ? renderTrigger(locale?.country || "Global", language) : null}
      </SheetTrigger>
      <SheetContent className="w-screen md:w-1/3 flex flex-col gap-6 p-6 md:p-10 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left mt-25 md:mr-30 md:mt-0">
            {t("In which Country and Language do you want to navigate?")}
          </SheetTitle>
        </SheetHeader>
        <CountrySelect>
          <CountrySelectSearch />
          <CountrySelectList>
            <CountrySelectItemGroup headline={t("Your current selection:")}>
              <CountrySelectItem
                countryCode={region.toUpperCase()}
                country={locale?.country || "Global"}
                language={locale?.locale || "English"}
                selected={true}
                thumbnail={locale?.thumbnail || ""}
                href={`/${region}/${language}${currentPath}`}
              />
            </CountrySelectItemGroup>
            {entriesFromObject(locales).map(([group, countries]) => (
              <CountrySelectItemGroup key={group} headline={group + ":"}>
                {countries.map((country) => (
                  <CountrySelectItem
                    onClick={() =>
                      setPreferredLocale(
                        `${country.countryCode}/${country.localeCode}`.toLowerCase(),
                      )
                    }
                    selected={
                      equalIgnoreCase(country.countryCode, region) &&
                      equalIgnoreCase(country.localeCode, language)
                    }
                    href={`/${country.countryCode.toLowerCase()}/${country.localeCode}${currentPath ? `/${currentPath}` : ""}`}
                    id={country.countryCode + "-" + country.localeCode}
                    country={country.country}
                    countryCode={country.countryCode}
                    language={country.locale}
                    thumbnail={country.thumbnail}
                  />
                ))}
              </CountrySelectItemGroup>
            ))}
          </CountrySelectList>
        </CountrySelect>
      </SheetContent>
    </Sheet>
  );
}

export default CountrySelectionSheet;
