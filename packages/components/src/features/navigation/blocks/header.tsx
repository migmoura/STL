import { Navigation } from "../components/navigation.tsx";
import { TopNavigation } from "../components/top-navigation.tsx";
import { useScrollPosition } from "@/hooks/use-scroll-position.ts";
import {
  parseAnchor,
  parseAnchorListRecursive,
  parseParagraph,
  parseSimpleTeaser,
  parseString,
} from "@/lib/parser.ts";
import useSWR from "swr";
import { Button } from "@/components/ui/button.tsx";
import { ArrowUp } from "lucide-react";
import { Link } from "@/components/ui/link.tsx";
import { useTranslation } from "react-i18next";
import { CountryNotice } from "@/features/navigation/components/country-notice.tsx";

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
    teaser.querySelector("div")?.className == "navigation-teaser"
      ? parseSimpleTeaser(teaser.querySelector("div"))
      : undefined;

  return {
    meta: Array.from(meta.querySelector("ul")?.children ?? []).map((link) => {
      return {
        link: parseAnchor(link.querySelector("a"), true),
        children: Array.from(link.querySelectorAll("li")).map((el) =>
          parseAnchor(el.querySelector("a"), true),
        ),
      };
    }),
    menu: parsedMenu,
    login: login && parseAnchor(login.querySelector("a")),
    teaser: parsedTeaser,
  };
};

const parseIndexes = (search: HTMLDivElement | null) => {
  if (!search) {
    return {
      indexes: [],
    };
  }

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

export function Header() {
  const scroll = useScrollPosition();
  const region = new URL(location.href).pathname.split("/")[1];
  const language = new URL(location.href).pathname.split("/")[2];
  const { data } = useSWR([region, language, "nav.plain.html"], fetchNavigation);
  const { t } = useTranslation();
  if (!data) {
    return null;
  }

  const { meta, login, menu, teaser, indexes, link } = data;

  return (
    <>
      <CountryNotice />
      <div className="flex w-full flex-col border-t-6 border-yellow bg-black">
        <div>
          <span className="sr-only focus-visible:not-sr-only">
            <Link href="#main" variant="secondary">
              Skip to content
            </Link>
          </span>
          <span className="sr-only focus-visible:not-sr-only">
            <Link href="#footer" variant="secondary">
              Skip to footer
            </Link>
          </span>
        </div>
        <TopNavigation
          indexes={indexes}
          link={link}
          links={meta}
          navigationItems={menu}
          login={login}
        />
        <Navigation navigationItems={menu} dark={scroll < 50} teaser={teaser} />
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-6 right-6"
          aria-label={t("Scroll to Top.")}
          onClick={() => {
            document.documentElement.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowUp className="size-6" />
        </Button>
      </div>
    </>
  );
}
