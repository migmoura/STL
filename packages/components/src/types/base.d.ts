import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button.tsx";
import { ComponentProps } from "react";
import { Teaser } from "@/components/ui/teaser.tsx";
import type { SortByParams, CustomSorterFunction } from "@orama/orama";
import { IndexPage } from "@/types/entities";

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

export interface Paragraph {
  value: string;
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface Link extends Paragraph {
  href: string;
  title?: string;
}

export interface Heading extends Paragraph {
  weight?: "1" | "2" | "3" | "4" | "5";
}

export interface Image {
  src: string;
  alt: string | undefined;
}

export interface Picture {
  image: any;
  sources?: {
    srcset: string | undefined;
    type: string | undefined;
    media: string | undefined;
  }[];
}

export interface CallToAction {
  variant: ButtonVariant;
  link: Link | null;
}

export interface Headline {
  headline: Heading | undefined;
  subHeadline?: string | undefined;
  link?: Link | undefined;
}

export type WithChildren<T, C> = T & { children?: C[] };
export type Sort =
  | (SortByParams<IndexPage> & {
      label: {
        short: string;
        long: string;
      };
    })
  | {
      label: {
        short: string;
        long: string;
      };
      sortFn: CustomSorterFunction<IndexPage>;
    };

export type LinkIcon = {
  link?: Link;
  icon?: Picture;
};

export type LinkWithTeaser = { link: Link; teaser?: ComponentProps<typeof Teaser> };
export type NavigationNode = WithChildren<
  LinkWithTeaser,
  WithChildren<LinkWithTeaser, LinkWithTeaser>
>;
export type NavigationRoot = WithChildren<
  {
    title: Paragraph | undefined;
    teaser?: ComponentProps<typeof Teaser>;
  },
  NavigationNode
>;
