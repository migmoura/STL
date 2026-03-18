import type { Link as LinkType, NavigationNode, NavigationRoot } from "@/types/base.d.ts";
import { Logo } from "@/components/svg/logo.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  ChevronLeft,
  ChevronRight,
  Earth,
  ExternalLink,
  LogIn,
  MenuIcon,
  SearchIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  lazy,
  ReactNode,
  Suspense,
  useState,
} from "react";
import { cn, isExternalLink } from "@/lib/utils.tsx";
import { NavigationMenuPrimitive } from "../../../components/ui/navigation-menu.tsx";
import { SearchInput } from "@/components/ui/input.tsx";
import { MetaItem } from "@/components/ui/meta.tsx";
import { dropdownMenuItemVariants } from "@/components/ui/dropdown-menu.tsx";
import { SimpleLink } from "@/components/ui/simple-link.tsx";
import { LazyCountrySelectionSheet } from "@/features/navigation/components/lazy-country-selection-sheet.tsx";
import { useTranslation } from "react-i18next";

const SearchSheet = lazy(() => import("./search-sheet.tsx"));
const SearchFlyout = lazy(() => import("./search-flyout.tsx"));

type TopNavigationProps = {
  links: { link: LinkType; children?: LinkType[] }[];
  login: LinkType | null | undefined;
  navigationItems: NavigationRoot[];
} & ComponentProps<typeof SearchFlyout>;

function ListItem({
  children,
  href,
  className,
  list,
  ...props
}: ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> & {
  href?: string;
  list?: boolean | undefined;
}) {
  const Element = !list && href ? NavigationMenuPrimitive.Link : "span";
  const external = isExternalLink(href);

  return (
    <NavigationMenuPrimitive.Item
      {...props}
      className="hover:bg-gray-4 data-[state=open]:bg-gray-4 active:bg-gray-35 outline-none focus-visible:ring-2 focus-visible:ring-yellow"
    >
      <Element
        href={list ? undefined : href}
        className={cn("flex items-center justify-between w-full py-6 px-6", className)}
      >
        {children}
        {list ? <ChevronRight /> : null}
        {external ? <ExternalLink /> : null}
      </Element>
    </NavigationMenuPrimitive.Item>
  );
}

function RecursiveMenu({
  items,
  children,
  parent,
}: {
  parent?: string;
  children?: ReactNode;
  items: NavigationNode[] | undefined;
}) {
  const { t } = useTranslation();

  return (
    <NavigationMenuPrimitive.Root className="bg-white">
      <NavigationMenuPrimitive.List>
        {children}
        {items?.map((item) => {
          const { title, value, strong, href } = item.link || {};

          if (item.children && item.children.length > 0) {
            return (
              <NavigationMenuPrimitive.Item key={title} value={title}>
                <NavigationMenuPrimitive.Trigger
                  onPointerMove={(event) => event.preventDefault()}
                  onPointerLeave={(event) => event.preventDefault()}
                  asChild
                >
                  <ListItem {...item.link} list>
                    {value}
                  </ListItem>
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuPrimitive.Content className="absolute z-60 h-full w-full bg-white left-0 top-0 transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
                  {parent ? (
                    <div className="absolute -top-39 h-25 flex bg-white">
                      <NavigationMenuPrimitive.Trigger
                        onPointerDown={(e) => e.preventDefault()}
                        className="w-[calc(100vw-98px)] p-6 flex gap-0.5 items-center"
                      >
                        <ChevronLeft className="shrink-0" />
                        <p className="text-gray-1 truncate overflow-hidden whitespace-nowrap font-semibold">
                          {t("Back to {{parent}}", { parent })}
                        </p>
                      </NavigationMenuPrimitive.Trigger>
                    </div>
                  ) : null}
                  <RecursiveMenu items={item.children} parent={title ?? value}>
                    <SimpleLink href={href} className="text-h4 mx-6 mb-6">
                      {value}
                    </SimpleLink>
                  </RecursiveMenu>
                </NavigationMenuPrimitive.Content>
              </NavigationMenuPrimitive.Item>
            );
          }

          return (
            <ListItem key={title} {...item.link} className={cn({ "font-bold": strong })}>
              {value}
            </ListItem>
          );
        })}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}

export function TopNavigation({ links, login, navigationItems, ...flyout }: TopNavigationProps) {
  const locale = "/" + window.location.pathname.split("/").slice(1, 3).join("/");
  const [navigation, setNavigation] = useState("");
  const { t } = useTranslation();

  return (
    <div
      id="top"
      className="z-10 sticky fluid flex gap-8 items-center justify-between pt-4.5 pb-5 md:py-7"
    >
      <a href={locale} aria-label={t("Continental Industries Home")} className="w-40 h-7">
        <Logo />
      </a>
      <NavigationMenuPrimitive.Root className="@container hidden flex-1 lg:flex items-center gap-8 text-nowrap">
        <Suspense
          fallback={
            <SearchInput
              className="text-white text-sm ml-auto w-fit xl:w-[400px]"
              data-slot="popover-trigger"
              placeholder={t("Search...")}
            />
          }
        >
          <SearchFlyout {...flyout} />
        </Suspense>
        <NavigationMenuPrimitive.List className="flex items-center gap-8">
          {links.map((link) => {
            const { title, value, href } = link.link;
            const children = link.children?.length ? link.children : undefined;

            if (!children) {
              return (
                <MetaItem key={title} href={href} title={title} className="flex-none">
                  {value}
                </MetaItem>
              );
            }

            return (
              <NavigationMenuPrimitive.Item key={href} className="relative flex">
                <NavigationMenuPrimitive.Trigger asChild>
                  <MetaItem key={title} href={href} title={title} className="flex-none">
                    {value}
                  </MetaItem>
                </NavigationMenuPrimitive.Trigger>
                <NavigationMenuPrimitive.Content className="absolute top-full left-0 w-fit bg-white flex flex-col py-2 shadow-lg">
                  {children.map((child) => {
                    return (
                      <div className={dropdownMenuItemVariants({ variant: "outline" })}>
                        <SimpleLink {...child}>{child.value}</SimpleLink>
                      </div>
                    );
                  })}
                </NavigationMenuPrimitive.Content>
              </NavigationMenuPrimitive.Item>
            );
          })}
          <Suspense
            fallback={
              <MetaItem className="flex-none flex items-center gap-3">
                <Earth />
                Global (EN)
              </MetaItem>
            }
          >
            <LazyCountrySelectionSheet
              renderTrigger={(country, language) => (
                <MetaItem className="flex-none flex items-center gap-3">
                  <Earth />
                  {country} ({language.toUpperCase()})
                </MetaItem>
              )}
            />
          </Suspense>
          {login ? (
            <MetaItem
              key={login.title}
              href={login.href}
              title={login.title}
              className="flex-none flex items-center gap-3"
            >
              <LogIn />
              {login.value}
            </MetaItem>
          ) : null}
        </NavigationMenuPrimitive.List>
      </NavigationMenuPrimitive.Root>
      <div className="flex gap-1">
        <Suspense
          fallback={
            <Button className="block lg:hidden bg-blur-lg" size="icon" variant="tertiary" dark>
              <SearchIcon />
            </Button>
          }
        >
          <SearchSheet {...flyout} />
        </Suspense>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              aria-label={t("Open navigation menu")}
              className="block lg:hidden bg-blur-lg"
              size="icon"
              variant="secondary"
              dark
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full overflow-y-auto">
            <NavigationMenuPrimitive.Root
              className="w-full h-full"
              value={navigation}
              onValueChange={setNavigation}
            >
              <NavigationMenuPrimitive.List className="w-full h-full">
                <div className="relative flex flex-col gap-25 justify-between mt-39">
                  <div className="h-full px-6 flex flex-col gap-14">
                    {navigationItems.map((nav) => (
                      <NavigationMenuPrimitive.Item key={nav.title?.value}>
                        <NavigationMenuPrimitive.Trigger
                          onPointerMove={(event) => event.preventDefault()}
                          onPointerLeave={(event) => event.preventDefault()}
                          asChild
                        >
                          <span className="text-h4">{nav.title?.value}</span>
                        </NavigationMenuPrimitive.Trigger>
                        <NavigationMenuPrimitive.Content className="z-60 absolute h-[calc(100dvh-156px)] left-0 top-0 w-full bg-white transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
                          <div className="absolute -top-39 h-25 flex bg-white">
                            <NavigationMenuPrimitive.Trigger className="p-6 flex gap-0.5 items-center font-semibold">
                              <ChevronLeft />
                              <span className=" text-gray-1">{t("Back to overview")}</span>
                            </NavigationMenuPrimitive.Trigger>
                          </div>
                          <RecursiveMenu items={nav.children} parent={nav.title?.value}>
                            <div className="text-h4 mx-6 mb-6">{nav.title?.value}</div>
                          </RecursiveMenu>
                        </NavigationMenuPrimitive.Content>
                      </NavigationMenuPrimitive.Item>
                    ))}
                  </div>
                  <div className="flex flex-col gap-8 px-6 pb-8">
                    {links.map((link) => {
                      const { title, value, href } = link.link;
                      const children = link.children?.length ? link.children : undefined;

                      if (!children) {
                        return (
                          <SimpleLink key={title} href={href} title={title}>
                            {value}
                          </SimpleLink>
                        );
                      }

                      return (
                        <NavigationMenuPrimitive.Item key={href}>
                          <NavigationMenuPrimitive.Trigger asChild>
                            <p className="flex items-center gap-2">
                              {value}
                              <ChevronRight className="size-4" />
                            </p>
                          </NavigationMenuPrimitive.Trigger>
                          <NavigationMenuPrimitive.Content className="absolute h-[calc(100dvh-156px)] left-0 top-0 w-full bg-white transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
                            <div className="absolute -top-39 h-25 flex bg-white">
                              <NavigationMenuPrimitive.Trigger className="p-6 flex gap-0.5 items-center font-semibold">
                                <ChevronLeft />
                                <span className=" text-gray-1">{t("Back to overview")}</span>
                              </NavigationMenuPrimitive.Trigger>
                            </div>
                            <div className="absolute top-0 h-25 flex bg-white">
                              <NavigationMenuPrimitive.List>
                                <ListItem key={title} href={href} className="font-bold">
                                  {value}
                                </ListItem>
                                {children.map((child) => {
                                  return (
                                    <ListItem key={title} {...child}>
                                      {child.value}
                                    </ListItem>
                                  );
                                })}
                              </NavigationMenuPrimitive.List>
                            </div>
                          </NavigationMenuPrimitive.Content>
                        </NavigationMenuPrimitive.Item>
                      );
                    })}
                    <Suspense
                      fallback={
                        <button className="flex items-center gap-2">
                          <Earth />
                          Global (EN)
                        </button>
                      }
                    >
                      <LazyCountrySelectionSheet
                        renderTrigger={(country, language) =>
                          navigation === "" ? (
                            <button className="flex lg:hidden items-center gap-2 w-fit">
                              <Earth />
                              {country} ({language.toUpperCase()})
                            </button>
                          ) : null
                        }
                      />
                    </Suspense>
                    {login ? (
                      <a key={login.title} className="flex items-center gap-2" {...login}>
                        {login.value}
                        <LogIn />
                      </a>
                    ) : null}
                  </div>
                </div>
              </NavigationMenuPrimitive.List>
            </NavigationMenuPrimitive.Root>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
