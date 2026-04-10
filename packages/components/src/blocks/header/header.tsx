import "@/lib/i18next.ts";
import { createRoot } from "react-dom/client";
import {
  DSHeader,
  DSTopBar,
  DSMegaMenu,
  DSActionLink,
  DSDrawer,
} from "@stihl-design-system/components";
import {
  parseAnchor,
  parseAnchorListRecursive,
  parseParagraph,
  parseSimpleTeaser,
  parseString,
} from "@/lib/parser.ts";
import useSWR from "swr";
import { lazy, Suspense, useState } from "react";
import type { NavigationNode } from "@/types/base.d.ts";
import { CountryNotice } from "@/features/navigation/components/country-notice.tsx";
import { LazyCountrySelectionSheet } from "@/features/navigation/components/lazy-country-selection-sheet.tsx";
import { useTranslation } from "react-i18next";

const SearchFlyout = lazy(() => import("@/features/navigation/components/search-flyout.tsx"));
const SearchSheet = lazy(() => import("@/features/navigation/components/search-sheet.tsx"));

// ── Data parsing (unchanged) ────────────────────────────────────────────────

const parseLinks = (bodyContent: Element[]) => {
  const hasLogin =
    bodyContent.length === 5 ||
    (bodyContent.length === 4 && !bodyContent.at(-2)?.querySelector(".navigation-teaser"));

  const meta = bodyContent[0];
  const login = hasLogin ? bodyContent[1] : null;
  const menu = hasLogin ? bodyContent[2] : bodyContent[1];
  const teaser = hasLogin ? bodyContent[3] : bodyContent[2];

  const menuLevels = Array.from(menu.querySelector("ul")?.children ?? []);
  const parsedMenu = menuLevels.map((level) => {
    level.querySelector("table")?.deleteRow(0);
    return {
      title: parseParagraph(level.querySelector("p")),
      teaser: parseSimpleTeaser(level.querySelector("tbody")),
      children: parseAnchorListRecursive(
        Array.from(level.querySelectorAll(":scope > ul > li")),
        true,
      ),
    };
  });

  const parsedTeaser =
    teaser.querySelector("div")?.className === "navigation-teaser"
      ? parseSimpleTeaser(teaser.querySelector("div"))
      : undefined;

  return {
    meta: Array.from(meta.querySelector("ul")?.children ?? []).map((link) => ({
      link: parseAnchor(link.querySelector("a"), true),
      children: Array.from(link.querySelectorAll("li")).map((el) =>
        parseAnchor(el.querySelector("a"), true),
      ),
    })),
    menu: parsedMenu,
    login: login && parseAnchor(login.querySelector("a")),
    teaser: parsedTeaser,
  };
};

const parseIndexes = (search: HTMLDivElement | null) => {
  if (!search) return { indexes: [] };

  const [link, ...indexes] = Array.from(search.children);
  const locale = window.location.pathname.split("/").slice(1, 3).join("/");

  return {
    link: parseAnchor(link.querySelector("a"), true),
    indexes: indexes.map((el) => {
      const [label, url] = Array.from(el.children);
      return {
        label: parseString(label.textContent),
        url: parseString(url.textContent).replace("global/en", locale),
      };
    }),
  };
};

const fetchNavigation = async ([region, language, url]: [string, string, string]) =>
  fetch(`/${region}/${language}/${url}`)
    .then((resp) => resp.text())
    .then((data) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const bodyContent = Array.from(doc.body.children);
      return {
        ...parseLinks(bodyContent),
        ...parseIndexes(doc.body.querySelector(".search")),
      };
    });

// ── Mobile drawer recursive menu ─────────────────────────────────────────────

function MobileMenuItems({ items }: { items: NavigationNode[] | undefined }) {
  if (!items?.length) return null;
  return (
    <>
      {items.map((item) => (
        <div key={item.link?.title ?? item.link?.value}>
          <DSActionLink href={item.link?.href} iconPosition="left" stretched>
            {item.link?.value}
          </DSActionLink>
          {item.children?.length ? (
            <div className="ml-6">
              <MobileMenuItems items={item.children as NavigationNode[]} />
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}

// ── Header component ─────────────────────────────────────────────────────────

function HeaderBlock() {
  const region = window.location.pathname.split("/")[1];
  const language = window.location.pathname.split("/")[2];
  const locale = `/${region}/${language}`;
  const { data } = useSWR([region, language, "nav.plain.html"], fetchNavigation);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const searchProps = { indexes: data?.indexes ?? [], link: data?.link };

  return (
    <>
      <CountryNotice />
      <DSHeader
        isHeaderSticky
        logoProps={{ aria: { "aria-label": t("STIHL Home") }, href: locale }}
      >
        <DSTopBar>
          {/* Logo slot – rendered automatically via logoProps */}
          <DSTopBar.BrandArea />

          {/* Desktop primary navigation */}
          <DSTopBar.PrimaryArea>
            {data?.menu.map((item) =>
              item.children?.length ? (
                <DSMegaMenu key={item.title?.value}>
                  <DSMegaMenu.Anchor>
                    <button type="button">{item.title?.value}</button>
                  </DSMegaMenu.Anchor>
                  <DSMegaMenu.Content>
                    {item.children.map((child) => (
                      <DSActionLink
                        key={child.link?.title ?? child.link?.value}
                        href={child.link?.href}
                        iconPosition="left"
                        stretched
                      >
                        {child.link?.value}
                      </DSActionLink>
                    ))}
                  </DSMegaMenu.Content>
                </DSMegaMenu>
              ) : (
                <DSActionLink key={item.title?.value}>
                  {item.title?.value}
                </DSActionLink>
              ),
            )}
          </DSTopBar.PrimaryArea>

          {/* Desktop secondary area: search, country, login + mobile hamburger */}
          <DSTopBar.SecondaryArea>
            {/* Desktop search flyout */}
            <Suspense fallback={null}>
              <SearchFlyout {...searchProps} />
            </Suspense>

            {/* Country selector */}
            <Suspense fallback={null}>
              <LazyCountrySelectionSheet
                renderTrigger={(country, language) => (
                  <span className="hidden lg:flex items-center gap-2 cursor-pointer">
                    {country} ({language.toUpperCase()})
                  </span>
                )}
              />
            </Suspense>

            {/* Login link */}
            {data?.login && (
              <DSActionLink href={data.login.href} className="hidden lg:flex">
                {data.login.value}
              </DSActionLink>
            )}

            {/* Mobile: search sheet */}
            <Suspense fallback={null}>
              <SearchSheet {...searchProps} />
            </Suspense>

            {/* Mobile: hamburger to open drawer */}
            <button
              className="flex lg:hidden items-center justify-center p-2"
              aria-label={t("Open navigation menu")}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
              </svg>
            </button>
          </DSTopBar.SecondaryArea>
        </DSTopBar>

        {/* Mobile navigation drawer */}
        <DSDrawer
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          position="start"
          header={<strong>{t("Menu")}</strong>}
        >
          <nav aria-label={t("Mobile navigation")}>
            <div className="flex flex-col gap-2">
              {data?.menu.map((item) => (
                <div key={item.title?.value} className="flex flex-col">
                  <span className="font-bold py-2 block">{item.title?.value}</span>
                  {item.children?.length ? (
                    <MobileMenuItems items={item.children as NavigationNode[]} />
                  ) : null}
                </div>
              ))}

              <div className="border-t mt-4 pt-4 flex flex-col gap-2">
                {data?.meta.map(({ link }) => (
                  <DSActionLink key={link?.title} href={link?.href} iconPosition="left" stretched>
                    {link?.value}
                  </DSActionLink>
                ))}

                <Suspense fallback={null}>
                  <LazyCountrySelectionSheet
                    renderTrigger={(country, language) => (
                      <button className="flex items-center gap-2 w-fit">
                        {country} ({language.toUpperCase()})
                      </button>
                    )}
                  />
                </Suspense>

                {data?.login && (
                  <DSActionLink href={data.login.href} iconPosition="left" stretched>
                    {data.login.value}
                  </DSActionLink>
                )}
              </div>
            </div>
          </nav>
        </DSDrawer>
      </DSHeader>
    </>
  );
}

export default async function decorate(block: HTMLElement) {
  const root = createRoot(block);
  root.render(<HeaderBlock />);
}
