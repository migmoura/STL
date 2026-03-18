import { parseAnchor, parsePicture, parseString } from "@/lib/parser.ts";
import { Link as LinkType, LinkIcon } from "@/types/base";
import useSWR from "swr";
import { isExternalLink, isLinkIcon } from "@/lib/utils.tsx";
import { Earth, ExternalLink } from "lucide-react";
import { Link } from "@/components/ui/link.tsx";
import { Interweave } from "interweave";
import { SimpleLink } from "@/components/ui/simple-link.tsx";
import { Suspense } from "react";
import { LazyCountrySelectionSheet } from "@/features/navigation/components/lazy-country-selection-sheet.tsx";

type TeaserColumn = {
  teaser: true;
  title?: string;
  content: string;
  link: LinkType;
};

type NormalColumn = {
  teaser: false;
  title?: string;
  link: LinkType[];
};

export type FooterColumn = TeaserColumn | NormalColumn;

const fetchFooter = async ([region, language, url]: [string, string, string]) =>
  fetch(`/${region}/${language}/${url}`)
    .then((resp) => resp.text())
    .then((data) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const bodyContent = Array.from(doc.body.children);
      const [main, meta] = bodyContent;

      const columns = Array.from(main.querySelectorAll("& > ul > li")).map((column) => {
        if (column.innerHTML.includes("footer-teaser")) {
          const [title, content, link] = column.querySelectorAll("p, h2, h3, h4, h5");
          return {
            teaser: true,
            title: parseString(title?.textContent),
            content: content.innerHTML,
            link: parseAnchor(link.querySelector("a"), true),
          } as const;
        }

        return {
          teaser: false,
          title: parseString(column.querySelector("p")?.textContent),
          link: Array.from(column.querySelectorAll("a")).map((anchor) => parseAnchor(anchor, true)),
        } as const;
      });

      const links = Array.from(meta.querySelectorAll("li")).map((a) => {
        if (a.querySelector("img")) {
          return {
            link: parseAnchor(a.querySelector("a"), true),
            icon: parsePicture(a.querySelector("picture")),
          };
        } else if (a.querySelector("a")) {
          return parseAnchor(a.querySelector("a"));
        } else {
          return parseString(a.textContent);
        }
      });

      return {
        columns,
        links,
      };
    });

function MetaFooter(props: { links: (LinkType | LinkIcon | string)[] }) {
  const links = props.links.filter((link) => !isLinkIcon(link)) as (LinkType | string)[];
  const socialIcons = props.links.filter((link) => isLinkIcon(link)) as LinkIcon[];

  return (
    <div className="bg-white border-b-4 border-yellow py-6">
      <div className="fluid flex flex-col md:items-center md:flex-row justify-between gap-6">
        <Suspense
          fallback={
            <div className="flex text-nowrap gap-3 items-center order-1 mb-2 md:mb-0">
              <Earth />
              Global (EN)
            </div>
          }
        >
          <LazyCountrySelectionSheet
            renderTrigger={(country, language) => (
              <div className="flex text-nowrap gap-3 items-center order-1 mb-2 md:mb-0">
                <Earth />
                {country} ({language.toUpperCase()})
              </div>
            )}
          />
        </Suspense>
        <div className="order-2 md:order-3 flex md:items-center gap-6">
          {socialIcons?.map((linkImage: LinkIcon) => (
            <a
              key={linkImage.link?.value}
              href={linkImage.link?.href ?? "#"}
              aria-label={linkImage.link?.title}
              target="_blank"
            >
              <img
                src={linkImage.icon?.image.src}
                alt={linkImage.icon?.image.alt ?? linkImage.link?.title}
                className="w-10 h-10"
              />
            </a>
          ))}
        </div>
        <div className="order-3 md:order-2 flex flex-col md:flex-row md:items-center gap-4 md:gap-x-10 flex-wrap text-sm">
          {links.map((link) => {
            if (typeof link === "string") {
              return <p key={link}>{link}</p>;
            }

            return (
              <SimpleLink key={link.value} {...link}>
                {link.value}
              </SimpleLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FooterMain({ columns }: { columns: FooterColumn[] }) {
  return (
    <div className="fluid md:columns-4 gap-10 *:mb-10">
      {columns.map((column) => {
        if (column.teaser) {
          return (
            <div key={column.title} className="space-y-6 break-inside-avoid">
              <p className="text-h5">{column.title}</p>
              <Interweave className="text-justify" tagName="p" content={column.content} />
              <Link
                className="w-full"
                href={column.link.href}
                title={column.link.title}
                variant="primary"
              >
                {column.link.value}
              </Link>
            </div>
          );
        }

        return (
          <div key={column.title} className="space-y-6 break-inside-avoid">
            <p className="text-h5">{column.title}</p>
            <ul className="space-y-4 text-sm text-black">
              {column.link.map((link) => (
                <li key={link.href}>
                  <SimpleLink key={link.value} {...link}>
                    {link.value}
                    {isExternalLink(link.href) ? <ExternalLink className="size-3" /> : null}
                  </SimpleLink>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export function Footer() {
  const region = new URL(location.href).pathname.split("/")[1];
  const language = new URL(location.href).pathname.split("/")[2];
  const { data } = useSWR([region, language, "footer.plain.html"], fetchFooter);

  if (!data) {
    return null;
  }
  const { columns, links } = data;

  return (
    <>
      <div className="bg-gray-4 py-10 md:py-24">
        <FooterMain columns={columns} />
      </div>
      <MetaFooter links={links} />
    </>
  );
}
