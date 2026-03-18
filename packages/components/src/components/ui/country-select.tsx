import { CheckIcon, FileSearch } from "lucide-react";
import SVG from "react-inlinesvg";
import { cn } from "@/lib/utils.tsx";
import {
  ComponentProps,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { SearchInput } from "@/components/ui/input.tsx";
import { useTranslation } from "react-i18next";

type CountryItemData = {
  id: string;
  value: string;
};

type CountrySelectContextType = {
  query: string;
  total: number;
  setQuery: (q: string) => void;
  registerItem: (item: CountryItemData) => void;
  unregisterItem: (id: string) => void;
  isVisible: (id: string) => boolean;
};

const CountrySelectContext = createContext<CountrySelectContextType | null>(null);

function CountrySelect({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<CountryItemData[]>([]);

  const registerItem = (item: CountryItemData) =>
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });

  const unregisterItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const visibleIds = useMemo(() => {
    if (!query) {
      return new Set(items.map((i) => i.id));
    }
    return new Set(
      items
        .filter((item) => item.value.toLowerCase().includes(query.toLowerCase()))
        .map((item) => item.id),
    );
  }, [items, query]);

  const isVisible = (id: string) => visibleIds.has(id);
  const total = visibleIds.size;

  return (
    <CountrySelectContext.Provider
      value={{ query, setQuery, total, registerItem, unregisterItem, isVisible }}
    >
      <div className="space-y-4 h-full">{children}</div>
    </CountrySelectContext.Provider>
  );
}

function CountrySelectItemGroup({ headline, children }: { headline: string; children: ReactNode }) {
  const ctx = useContext(CountrySelectContext);
  if (!ctx) {
    throw new Error("Must be used inside CountrySelectRoot");
  }

  if (ctx.query) {
    return children;
  }

  return (
    <div className="w-full space-y-6">
      <p className="text-h5">{headline}</p>
      {children}
    </div>
  );
}

function CountrySelectItem(props: ComponentProps<typeof CountrySelectItemTemplate>) {
  const id = useId();
  const ctx = useContext(CountrySelectContext);
  if (!ctx) {
    throw new Error("Must be used inside CountrySelectRoot");
  }

  useEffect(() => {
    ctx.registerItem({ id: id, value: props.country + props.language });

    return () => ctx.unregisterItem(id);
  }, [props.id, props.country]);

  const visible = ctx.isVisible(id);
  if (!visible) {
    return null;
  }

  return (
    <li key={id}>
      <CountrySelectItemTemplate {...props} />
    </li>
  );
}

function CountrySelectList({ children }: { children: ReactNode }) {
  const ctx = useContext(CountrySelectContext);
  if (!ctx) {
    throw new Error("Must be used inside CountrySelectRoot");
  }
  const { t } = useTranslation();

  return (
    <ul className="flex h-full flex-col gap-6">
      {ctx.query && ctx.total === 0 ? (
        <div className="flex flex-col gap-6 items-center justify-center size-full text-gray-1">
          <FileSearch className="size-55 text-gray-15" />
          <div>
            <p>{t("No results for '{{query}}'.", { query: ctx.query })}</p>
            <p>{t("Try another spelling.")}</p>
          </div>
        </div>
      ) : null}
      {children}
    </ul>
  );
}

function CountrySelectSearch() {
  const ctx = useContext(CountrySelectContext);
  if (!ctx) {
    throw new Error("Must be used inside CountrySelectRoot");
  }
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <SearchInput
        placeholder={t("Search...")}
        value={ctx.query}
        onChange={(e) => ctx.setQuery(e.target.value)}
      />
      {ctx.query && ctx.total !== 0 ? (
        <span>{t("{{count}} results", { count: ctx.total })}</span>
      ) : null}
    </div>
  );
}

function CountrySelectItemTemplate({
  className,
  selected,
  country,
  countryCode,
  language,
  thumbnail,
  ...props
}: ComponentProps<"a"> & {
  selected?: boolean;
  country: string;
  countryCode: string;
  language: string;
  thumbnail: string;
}) {
  return (
    <a
      data-slot="country-select-item"
      className={cn(
        "w-full relative flex gap-3 pl-1 pr-4 cursor-default outline-hidden select-none hover:bg-gray-4 active:bg-gray-35 focus-visible:bg-gray-4",
        className,
      )}
      {...props}
    >
      <SVG src={thumbnail.toLowerCase()} width={40} height={40} title="React" />
      <div className="flex items-start flex-col pt-2 w-full">
        <p className="leading-label">{country}</p>
        <p className="text-sm leading-label">{language}</p>
      </div>
      {selected ? (
        <div className="flex items-center">
          <CheckIcon className="size-6" />
        </div>
      ) : null}
    </a>
  );
}

export {
  CountrySelect,
  CountrySelectList,
  CountrySelectSearch,
  CountrySelectItem,
  CountrySelectItemGroup,
};
