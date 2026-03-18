import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPrimitive,
  NavigationMenuSub,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu.tsx";
import { ChevronRight, ExternalLink } from "lucide-react";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import type { NavigationNode, NavigationRoot } from "@/types/base.d.ts";
import { Teaser } from "@/components/ui/teaser.tsx";
import { cn, isExternalLink } from "@/lib/utils.tsx";
import { useDebounceValue, useScrollLock } from "usehooks-ts";
import { cva } from "class-variance-authority";
import { ScrollableList } from "@/components/ui/scroll.tsx";

type NavigationProps = {
  navigationItems: NavigationRoot[];
  dark: boolean;
  teaser?: ComponentProps<typeof Teaser>;
};

type ListItemProps = ComponentPropsWithoutRef<"li"> & {
  href: string;
  list?: boolean;
};

function MenuListItem({ children, href, list, className }: ListItemProps) {
  const external = isExternalLink(href);

  if (list) {
    return (
      <NavigationMenuPrimitive.Trigger asChild>
        <NavigationMenuLink asChild>
          <span className="h-full w-full flex items-center justify-between mr-6 pb-0.5">
            <a
              href={href}
              className={cn(
                "ml-10 shadow-black hover:shadow-[inset_0_-2px_0_0] active:shadow-yellow no-underline",
                className,
              )}
            >
              {children}
            </a>
            <ChevronRight />
          </span>
        </NavigationMenuLink>
      </NavigationMenuPrimitive.Trigger>
    );
  }

  return (
    <NavigationMenuLink asChild>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        className={cn(
          "flex items-center justify-between ml-10 mr-6 pb-0.5 shadow-black hover:shadow-[inset_0_-2px_0_0] active:shadow-yellow no-underline",
          className,
        )}
      >
        {children}
        {external && <ExternalLink />}
      </a>
    </NavigationMenuLink>
  );
}

function RecursiveMenu({
  items,
  teaser,
  setTeaser,
}: {
  items: NavigationNode[] | undefined;
  teaser?: ComponentProps<typeof Teaser>;
  setTeaser?: Dispatch<SetStateAction<ComponentProps<typeof Teaser> | undefined>>;
}) {
  const [openMenu, setOpenMenu] = useState<string | undefined>(undefined);
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <NavigationMenuPrimitive.List className="flex flex-col animate-fade-x">
      <ScrollableList className="h-[calc(100dvh-226px)] max-h-[853px]">
        {items?.map((item) => {
          const hasChildren = Array.isArray(item.children) && item.children.length > 0;
          const title = item.link.value;

          return (
            <NavigationMenuItem
              key={title}
              className="group hover:bg-gray-4 active:bg-gray-35 outline-none focus-visible:ring-2 focus-visible:ring-yellow h-18 flex items-center w-full"
              onMouseEnter={() => {
                if (hasChildren) {
                  setOpenMenu(title);
                }

                if (item.teaser) {
                  setTeaser?.(item.teaser);
                } else if (teaser) {
                  setTeaser?.(teaser);
                }
              }}
              onMouseLeave={() => {
                setOpenMenu(undefined);
              }}
              value={title}
            >
              <MenuListItem
                {...item.link}
                list={hasChildren}
                className={cn({ "font-bold": item.link.strong })}
              >
                {title}
              </MenuListItem>
              {openMenu && hasChildren ? (
                <NavigationMenuPrimitive.Content>
                  <NavigationMenuSub
                    className="absolute w-full top-0 left-[calc(100%+1px)]"
                    value={openMenu}
                    onValueChange={setOpenMenu}
                  >
                    <RecursiveMenu
                      items={item.children}
                      setTeaser={setTeaser}
                      teaser={item.teaser ?? teaser}
                    />
                  </NavigationMenuSub>
                </NavigationMenuPrimitive.Content>
              ) : null}
            </NavigationMenuItem>
          );
        })}
      </ScrollableList>
    </NavigationMenuPrimitive.List>
  );
}

const navigationVariants = cva("w-full pt-6 transition-colors duration-100 ease-in-out", {
  variants: {
    dark: {
      true: "bg-black",
      false: "bg-white border-b-1 border-gray-3",
    },
  },
  defaultVariants: {
    dark: true,
  },
});

function NavigationItem({
  top,
  dark,
  defaultTeaser,
}: {
  top: NavigationRoot;
  dark: boolean;
  defaultTeaser?: ComponentProps<typeof Teaser>;
}) {
  const [teaser, setTeaser] = useState<ComponentProps<typeof Teaser> | undefined>(
    top.teaser ? top.teaser : defaultTeaser ? defaultTeaser : undefined,
  );
  const [debouncedTeaser, setDebouncedTeaser] = useDebounceValue(teaser, 250);

  useEffect(() => {
    setDebouncedTeaser(teaser);
  }, [teaser]);

  if (!top.title) {
    return null;
  }

  return (
    <NavigationMenuItem value={top.title.value}>
      <NavigationMenuTrigger dark={dark}>{top.title.value}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-screen h-[calc(100vh-178px)] max-h-[901px] border-b-1 border-t-1 border-gray-3">
          <div className="max-w-screen-3xl h-full mx-auto">
            <div className="ml-10 h-full grid grid-cols-[1fr_1fr_1fr_27.6%] divide-x-1 divide-gray-3">
              <div className="pt-6">
                <NavigationMenuSub asChild>
                  <RecursiveMenu
                    items={top.children}
                    teaser={top.teaser ?? defaultTeaser}
                    setTeaser={setTeaser}
                  />
                </NavigationMenuSub>
              </div>
              <span />
              <span />
              {debouncedTeaser ? (
                <div className="h-[calc(100vh-178px)] max-h-[901px] p-10">
                  <Teaser
                    key={debouncedTeaser.title}
                    {...debouncedTeaser}
                    TitleElement={"p"}
                    className="animate-fade-x"
                    aspectRatio="aspect-3/4"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export function Navigation({ navigationItems, teaser, dark = true }: NavigationProps) {
  const { lock, unlock, isLocked } = useScrollLock({ autoLock: false });

  const handleValueChange = (value: string) => {
    if (value === "" && isLocked) {
      unlock();
    } else {
      lock();
    }
  };

  return (
    <NavigationMenu
      onValueChange={handleValueChange}
      className={navigationVariants({ dark, className: "hidden lg:block " })}
    >
      <div className="fluid">
        <NavigationMenuList className="gap-10">
          {navigationItems.map((top) => (
            <NavigationItem key={top.title?.value} top={top} dark={dark} defaultTeaser={teaser} />
          ))}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
