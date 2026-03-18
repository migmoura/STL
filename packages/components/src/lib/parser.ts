import type {
  ButtonVariant,
  CallToAction,
  Headline,
  Link,
  NavigationNode,
  Picture as PictureType,
  Picture,
} from "@/types/base.d.ts";
import type { UniversalEditor, WithUniversalEditor } from "@/types/universal-editor.d.ts";
import DOMPurify from "dompurify";
import { localizeLink } from "@/lib/utils.tsx";

export function parseUniversalEditor(element: Element) {
  return Array.from(element.attributes).reduce((acc, attr) => {
    acc[attr.name as keyof UniversalEditor] = attr.value;
    return acc;
  }, {} as UniversalEditor);
}

export function extractMetadataWhenKeyValue<T>(el: Element) {
  const title = el?.querySelector(".section-metadata")?.children;
  return Array.from(title || []).reduce((acc, currentValue) => {
    const nodeListOf = currentValue.querySelectorAll("div");
    if (nodeListOf?.length <= 1) {
      return acc;
    }

    const [key, value] = nodeListOf;
    const keyToString = parseOptionalString(key?.textContent);

    if (!keyToString) {
      return acc;
    }
    if (keyToString === "title") {
      return {
        ...acc,
        [keyToString]: parseHeading(value.querySelector("h1, h2, h3, h4, h5")),
      };
    }

    return {
      ...acc,
      [keyToString]: DOMPurify.sanitize(value?.innerHTML),
    };
  }, {} as T);
}

export function parseOptionalString(str: string | null | undefined) {
  if (!str) {
    return undefined;
  }

  const doc = new DOMParser().parseFromString(str, "text/html");
  return doc.documentElement.textContent?.trim();
}

export function parseString(str: string | null | undefined) {
  if (!str) {
    throw new Error("String is not valid");
  }

  const doc = new DOMParser().parseFromString(str, "text/html");
  return doc.documentElement.textContent?.trim() ?? "";
}

export function parseVariant(str: string | null | undefined) {
  const string = parseString(str);
  if (!string) {
    throw "primary";
  }

  return ["primary", "link", "secondary", "tertiary"].includes(string)
    ? (string as ButtonVariant)
    : "primary";
}

function parseImage(image: HTMLImageElement | null) {
  if (!image?.src) {
    throw new Error("Image has no src attribute");
  }

  return {
    src: image?.src,
    alt: image?.alt,
  };
}

export function parseMedia(
  mediaElement: HTMLElement | null,
  altText: string | undefined = undefined,
): any | undefined {
  if (!mediaElement) {
    return undefined;
  }

  const link = mediaElement.querySelector(
    'a[href$=".mp4"], a[href$=".webm"]',
  ) as HTMLAnchorElement | null;
  if (link?.href) {
    return {
      type: "video",
      sources: [{ src: link.href }],
      poster: mediaElement.querySelector("picture")?.querySelector("img")?.getAttribute("src"),
    };
  }

  if (mediaElement.querySelector("picture")) {
    const parsedPicture = parsePicture(mediaElement as HTMLPictureElement);
    if (!parsedPicture) {
      return undefined;
    }

    return {
      type: "image",
      ...parsedPicture,
      image: { ...parsedPicture.image, altText: altText },
    };
  }

  return undefined;
}

export function parsePicture(picture: HTMLPictureElement | null): PictureType | undefined {
  if (!picture || picture?.innerHTML === "") {
    return undefined;
  }

  const image = picture.querySelector("img");
  const sources = Array.from(picture.querySelectorAll("source")).map((source) => {
    return {
      srcset: source.getAttribute("srcset") ?? undefined,
      type: source.getAttribute("type") ?? undefined,
      media: source.getAttribute("media") ?? undefined,
    };
  });

  return {
    image: parseImage(image),
    sources,
  };
}

export function parseAnchor(
  anchor: HTMLAnchorElement | undefined | null,
  localize: boolean = false,
): Link {
  if (!anchor?.getAttribute("href")) {
    throw new Error("Anchor element has no link content");
  }

  const href = anchor.getAttribute("href")!;

  return {
    href: localize ? localizeLink(href) : href,
    title: anchor.getAttribute("title") ?? undefined,
    value: parseString(anchor.innerHTML)!,
    strong: anchor.parentElement?.tagName === "STRONG",
    italic: anchor.parentElement?.tagName === "EM",
    underline: anchor.parentElement?.tagName === "U",
  };
}

export const parseHeading = (heading: HTMLHeadingElement | null) => {
  const paragraph = parseParagraph(heading);

  return {
    id: heading?.id,
    weight: heading?.tagName.replace("H", "") as "1" | "2" | "3" | "4" | "5" | undefined,
    ...paragraph,
  };
};

export const parseParagraph = (paragraph: HTMLElement | null | undefined) => {
  return {
    value: parseOptionalString(paragraph?.innerHTML)!,
    strong: !!paragraph?.querySelector("strong"),
    italic: !!paragraph?.querySelector("em"),
    underline: !!paragraph?.querySelector("u"),
  };
};

export const parseCallToAction = (element: Element) => {
  const [link, variant] = Array.from(element.children);
  const anchor = link.querySelector("a");
  try {
    return {
      variant: variant.innerHTML ? (parseString(variant.innerHTML) as ButtonVariant) : "primary",
      link: anchor ? parseAnchor(anchor) : null,
      universalEditor: parseUniversalEditor(element),
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("Element has no anchor element.");
    }
  }
  return null;
};

export const parseCallToActionList = (list: Element[]) => {
  return list
    .map((el) => parseCallToAction(el))
    .filter(Boolean) as WithUniversalEditor<CallToAction>[];
};

export const parseAnchorList = (list: Element[]) => {
  return list
    .map((li) => {
      const anchor = li.querySelector("a");
      try {
        return parseAnchor(anchor);
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error("List item has no anchor element.");
        }
      }
      return null;
    })
    .filter(Boolean) as Link[];
};

export const parseAnchorListRecursive: (list: Element[], localize?: boolean) => NavigationNode[] = (
  list: Element[],
  localize: boolean = false,
) => {
  return list
    .map((li) => {
      let anchor = li.querySelector("a");
      const children = li.querySelectorAll(":scope > ul > li");
      li.querySelector("table")?.deleteRow(0);

      try {
        return {
          link: parseAnchor(anchor, localize),
          teaser: parseSimpleTeaser(li.querySelector("tbody")),
          children: parseAnchorListRecursive(Array.from(children), localize),
        };
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error("List item has no anchor element.");
        }
      }
      return null;
    })
    .filter(Boolean) as NavigationNode[];
};

export const parseSocialsList = (list: Element[]) => {
  return list
    .map((li) => {
      const picture = li.querySelector("picture");
      const anchor = li.querySelector("a");
      try {
        return {
          link: parseAnchor(anchor),
          picture: parsePicture(picture),
        };
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error("Socials has an issue: ", e.message);
        }
      }
      return null;
    })
    .filter(Boolean) as { link: Link; picture: Picture }[];
};

export const parseBigImageList = (list: Element[]) => {
  return list.map((li) => {
    const [heading, copy] = li.querySelectorAll("p");
    const picture = li.querySelector("picture");
    const anchor = li.querySelector("a");

    let link: Link | undefined;
    try {
      link = parseAnchor(anchor);
    } catch (e) {
      link = undefined;
    }

    try {
      return {
        link,
        picture: parsePicture(picture),
        heading: parseOptionalString(heading?.innerHTML),
        copy: parseOptionalString(copy?.innerHTML),
        universalEditor: parseUniversalEditor(li),
      };
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error("Big Image Item has an issue: ", e.message);
      }
    }
    return {
      universalEditor: parseUniversalEditor(li),
    };
  });
};

export const parseIconTeaserList = (list: Element[]) => {
  return list
    .map((li) => {
      const [icon, heading, copy] = Array.from(li.children);
      const picture = icon.querySelector("picture");

      try {
        return {
          title: parseString(heading.textContent),
          description: copy.innerHTML,
          icon: parsePicture(picture),
        };
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error("Icon Teaser has an issue: ", e.message);
        }
      }
      return null;
    })
    .filter(Boolean) as {
    title: string;
    description: string;
    icon: Picture;
    universalEditor: Record<string, string>;
  }[];
};

export function parseSimpleTeaser(li: Element | null | undefined) {
  if (!li) {
    return undefined;
  }

  const paragraphs = Array.from(li.children);
  const picture = paragraphs[0]?.querySelector("picture");
  const linkField = paragraphs[3]?.querySelector("a");

  const link = linkField ? parseAnchor(linkField) : undefined;
  const cta = parseOptionalString(linkField?.textContent);

  try {
    return {
      image: picture ? parsePicture(picture) : null,
      title: parseOptionalString(paragraphs[1]?.textContent),
      description: paragraphs[2]?.innerHTML,
      link,
      cta,
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("Icon Teaser has an issue: ", e.message);
    }
  }
  return undefined;
}

export const parseSimpleTeaserList = (list: Element[]) => {
  return list
    .map((li) => {
      return parseSimpleTeaser(li);
    })
    .filter(Boolean) as {
    image: Picture;
    title: string;
    description: string;
    link: Link;
    cta: string;
    universalEditor: Record<string, string>;
  }[];
};

export const parseTeaserList = (list: Element[]) => {
  return list
    .map((li) => {
      const picture = li.querySelector("picture");
      const paragraphs = li.querySelectorAll("p");
      const anchor = li.querySelector("a");
      try {
        return {
          title: paragraphs[0]?.textContent,
          description: paragraphs[1]?.textContent,
          image: parsePicture(picture),
          imageAlt: paragraphs[2]?.textContent,
          link: anchor?.href,
          cta: anchor?.textContent,
          universalEditor: parseUniversalEditor(li),
        };
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error("Icon Teaser has an issue: ", e.message);
        }
      }
      return null;
    })
    .filter(Boolean) as {
    title: string;
    description: string;
    image: Picture;
    imageAlt: string;
    universalEditor: Record<string, string>;
  }[];
};

export function parseHeadline(
  headline: HTMLHeadingElement | null,
  subHeadline: string | null | undefined,
  link: HTMLAnchorElement | null | undefined,
): Headline {
  try {
    return {
      headline: parseHeading(headline),
      subHeadline: subHeadline ? parseString(subHeadline) : undefined,
      link: link ? parseAnchor(link) : undefined,
    };
  } catch {
    return {
      headline: undefined,
    };
  }
}

export function parseNavigationLink(block: HTMLElement | Element): {
  link?: Link;
  asButton?: boolean;
  icon?: Picture;
} {
  const children = Array.from(block.children) || [];

  return children?.reduce(
    (previousValue, currentValue) => {
      const nodeListOf = currentValue.querySelectorAll("div");
      if (nodeListOf?.length <= 1) {
        return previousValue;
      }

      const [key, value] = nodeListOf;
      const keyToString = parseOptionalString(key?.textContent);
      if (!keyToString) {
        return previousValue;
      }

      switch (keyToString) {
        case "link": {
          return {
            ...previousValue,
            link: parseAnchor(value.querySelector("a")),
          };
        }
        case "icon": {
          return {
            ...previousValue,
            icon: parsePicture(value),
          };
        }
        case "asButton": {
          return {
            ...previousValue,
            asButton: value.textContent === "true",
          };
        }
        default:
          return {
            ...previousValue,
            [keyToString]: parseOptionalString(value?.textContent),
          };
      }
    },
    {} as { link?: Link; asButton?: boolean; icon?: Picture },
  );
}
