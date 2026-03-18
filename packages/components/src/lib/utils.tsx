import { type ClassValue, clsx } from "clsx";
import { HighlightedField } from "@/features/search/hooks/use-search.ts";
import { Node } from "interweave";
import { ReactNode } from "react";
import { Link as LinkType, LinkIcon } from "@/types/base";
import { Link } from "@/components/ui/link";

export function cn(...inputs: ClassValue[]) {
  // Tailwind Merge is a utility that merges Tailwind CSS classes intelligently, and is here by default
  // however due to the size of the library, it is not included in the default build.
  return clsx(inputs);
}

export function chunkArray<T>(array: T[], size: number): T[][] {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

type supportedSchemes = "mailto:" | "tel:";
export function hasCommunicationSchema(
  href: string | undefined,
  schema: supportedSchemes,
): boolean {
  if (!href) {
    return false;
  }

  try {
    const url = new URL(href, window.location.origin);
    return schema === url.protocol;
  } catch {
    return false;
  }
}

export function localizeLink(href: string): string {
  const locale = window.location.pathname.split("/").slice(1, 3).join("/");

  if (href && locale !== "global/en") {
    return href.replace("global/en", locale);
  }

  return href;
}

export function isExternalLink(href: string | undefined): boolean {
  if (!href) {
    return false;
  }

  try {
    const url = new URL(href);
    return ["http:", "https:"].includes(url.protocol) && url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

export function isFileLink(href: string | undefined): boolean {
  if (!href) {
    return false;
  }

  const fileExtensions = [
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "jpg",
    "jpeg",
    "png",
    "gif",
    "svg",
    "mp4",
    "zip",
    "rar",
    "txt",
  ];
  const regex = new RegExp(`\\.(${fileExtensions.join("|")})$`, "i");
  return regex.test(href);
}

export function parseSearchParams(
  search: string,
  filter: (value: [string, string]) => boolean = () => true,
) {
  const searchParams = new URLSearchParams(search);
  return Object.fromEntries(
    Array.from(searchParams.entries())
      .filter(filter)
      .map(([key, value]) => {
        if (!isNaN(Number(value))) {
          return [key, Number(value)];
        }
        if (value === "true") {
          return [key, true];
        }
        if (value === "false") {
          return [key, false];
        }
        return [key, value];
      }),
  );
}

export function stringifySearchParams(search: Record<string, string | number | boolean>) {
  const params = Object.fromEntries(
    entriesFromObject(search).map(([key, value]) => {
      return [key, String(value)];
    }),
  );

  return new URLSearchParams(params);
}

export function getValueFromHighlightedField(item: HighlightedField | string | undefined | null) {
  return typeof item === "string" ? item : (item?.value ?? "");
}

export function getHighlightFromHighlightedField(
  item: HighlightedField | string | undefined | null,
) {
  return typeof item === "string" ? item : (item?.highlight ?? "");
}

export function entriesFromObject<T extends object>(obj: T | undefined): [keyof T, T[keyof T]][] {
  if (!obj) {
    return [];
  }
  return Object.entries(obj).map(([k, v]: [keyof T, T[keyof T]]) => {
    const num = Number(k);
    const key = String(num) === k ? (num as unknown as keyof T) : (k as unknown as keyof T);
    return [key, v as T[keyof T]];
  });
}

export function valuesFromObject<T extends object>(obj: T | undefined): T[keyof T][] {
  if (!obj) {
    return [];
  }
  return Object.values(obj).map((v: T[keyof T]) => {
    return v as T[keyof T];
  });
}

export function transformWithLink(node: HTMLElement, children: Node[]): ReactNode {
  if (node.tagName === "A") {
    return <Link href={node.getAttribute("href") ?? "#"}>{children}</Link>;
  }
}

export function transformWithSlimLink(node: HTMLElement, children: Node[]): ReactNode {
  if (node.tagName === "A") {
    return (
      <Link size="slim" href={node.getAttribute("href") ?? "#"}>
        {children}
      </Link>
    );
  }
}

export function addProtocol(url: string): string {
  const hasProtocol = /^https?:\/\//i.test(url);
  return hasProtocol ? url : `https://${url}`;
}

export function isLinkIcon(
  link:
    | LinkType
    | LinkIcon
    | string
    | (LinkType & { image: unknown })
    | (LinkIcon & {
        image: unknown;
      }),
) {
  return typeof link === "object" && "icon" in link && "link" in link;
}

export const nonDescriptiveLinkTexts = new Set([
  "click here",
  "click this",
  "go",
  "here",
  "information",
  "learn more",
  "more",
  "more info",
  "more information",
  "right here",
  "read more",
  "see more",
  "start",
  "this",
]);

export function keyBy<T, K extends keyof T>(
  array: T[] | undefined,
  key: K | ((item: T) => string | number),
): Record<string | number, T> | undefined {
  return array?.reduce(
    (acc, item) => {
      const value = typeof key === "function" ? key(item) : (item[key] as string | number);
      acc[value] = item;
      return acc;
    },
    {} as Record<string | number, T>,
  );
}

export function groupBy<T, K extends keyof T>(
  array: T[] | undefined,
  key: K | ((item: T) => string | number),
): Record<string | number, T[]> | undefined {
  return array?.reduce(
    (acc, item) => {
      const value = typeof key === "function" ? key(item) : (item[key] as string | number);
      if (!acc[value]) {
        acc[value] = [];
      }
      acc[value].push(item);
      return acc;
    },
    {} as Record<string | number, T[]>,
  );
}

export function equalIgnoreCase(a: string, b: string) {
  return a.localeCompare(b, undefined, { sensitivity: "accent" }) === 0;
}
