import type { Link as LinkType, Picture as PictureType } from "@/types/base.d.ts";
import { cn, nonDescriptiveLinkTexts, transformWithLink } from "@/lib/utils.tsx";
import { Picture } from "./picture";
import { Link } from "./link";
import { Tag } from "./tag";
import { Interweave } from "interweave";
import { ComponentProps, useId, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export type Teaser = {
  className?: string;
  image?: PictureType | undefined | null;
  defaultSrc?: string | undefined | null;
  link?: (LinkType & Pick<ComponentProps<"a">, "onClick">) | undefined | null;
  title?: string | undefined | null;
  hint?: string | undefined | null;
  description?: string | undefined | null;
  tags?: string[] | undefined | null;
  aspectRatio?:
    | "aspect-2/1"
    | "aspect-1/2"
    | "aspect-3/2"
    | "aspect-2/3"
    | "aspect-4/3"
    | "aspect-3/4"
    | "aspect-16/9"
    | "aspect-9/16"
    | "aspect-1/1";
  TitleElement?: "p" | "h2" | "h3" | "h4" | "h5";
  type?: string;
  showDescription?: boolean;
};

export function Teaser({
  image,
  defaultSrc,
  link,
  aspectRatio,
  title,
  description,
  hint,
  tags,
  className,
  TitleElement = "h3",
  showDescription = true,
}: Readonly<Teaser>) {
  const id = useId();
  const titleId = `${title?.replaceAll(" ", "-").toLowerCase()}-${id}`;

  const nonDescriptive = useMemo(
    () => nonDescriptiveLinkTexts.has(link?.value.toLowerCase() ?? ""),
    [link?.value],
  );

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {image ? (
        <a
          aria-labelledby={!image.image.alt ? titleId : undefined}
          aria-label={image.image.alt}
          {...link}
          className="overflow-hidden"
        >
          <Picture
            imageClassName={cn(
              "object-cover w-full object-top duration-300 ease-in-out hover:scale-110",
              aspectRatio,
            )}
            defaultSrc={defaultSrc}
            {...image}
          />
        </a>
      ) : null}
      {hint || (tags?.length && tags?.length > 0) ? (
        <div className="flex flex-wrap items-center gap-1 px-6 pt-4">
          {hint ? <p className="text-sm leading-label mr-auto">{hint}</p> : null}
          {tags?.length && tags?.length > 0
            ? tags.map((tag) => (
                <Tag key={tag} variant="secondary" className="pointer-events-none">
                  {tag}
                </Tag>
              ))
            : null}
        </div>
      ) : null}
      <div className="flex flex-col px-6 pt-6 space-y-4">
        {title ? (
          <TitleElement id={titleId} className="text-h5">
            <Interweave content={title} />
          </TitleElement>
        ) : null}
        {description && showDescription ? (
          <Interweave
            className="text-base text-gray-1 prose"
            content={description}
            transform={transformWithLink}
          />
        ) : null}
        {link ? (
          <div className="flex flex-row items-center">
            <Link aria-labelledby={link.title === link.value ? titleId : undefined} {...link}>
              {nonDescriptive ? <span className="sr-only">{title}</span> : null}
              <span aria-hidden={nonDescriptive}>{link.value}</span>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function DocumentTeaser({
  image,
  defaultSrc,
  link,
  aspectRatio,
  title,
  description,
  hint,
  tags,
  className,
  TitleElement = "h3",
  type,
}: Readonly<Teaser>) {
  const id = useId();
  const titleId = `${title?.replaceAll(" ", "-").toLowerCase()}-${id}`;

  const nonDescriptive = useMemo(
    () => nonDescriptiveLinkTexts.has(link?.value.toLowerCase() ?? ""),
    [link?.value],
  );

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {image ? (
        <a
          aria-labelledby={!image.image.alt ? titleId : undefined}
          aria-label={image.image.alt}
          target="_blank"
          download="filename"
          {...link}
          className="overflow-hidden"
        >
          <Picture
            imageClassName={cn(
              "object-cover w-full object-top duration-300 ease-in-out hover:scale-110",
              aspectRatio,
            )}
            defaultSrc={defaultSrc}
            {...image}
          />
        </a>
      ) : (
        <a
          aria-labelledby={titleId}
          download="filename"
          target="_blank"
          {...link}
          className={cn(
            "flex items-center justify-center bg-gray-200 text-black text-h4 bg-gray-4",
            aspectRatio,
          )}
        >
          <p className="text-lg font-bold">{type}</p>
        </a>
      )}
      {hint || (tags?.length && tags?.length > 0) ? (
        <div className="flex flex-wrap items-center gap-1 px-6 pt-4">
          {tags?.length && tags?.length > 0
            ? tags.map((tag) => (
                <Tag key={tag} variant="secondary" className="pointer-events-none">
                  {tag}
                </Tag>
              ))
            : null}
          {hint ? <p className="text-sm leading-label ml-auto">{hint}</p> : null}
        </div>
      ) : null}
      <div className="flex flex-col px-6 pt-6 space-y-4">
        {title ? (
          <TitleElement id={titleId} className="text-h5">
            <Interweave content={title.replaceAll("_", " ").replaceAll("-", " ")} />
          </TitleElement>
        ) : null}
        {description ? (
          <Interweave
            className="text-base text-gray-1 prose"
            content={description}
            transform={transformWithLink}
          />
        ) : null}
        {link ? (
          <div className="flex flex-row items-center">
            <Link
              download="filename"
              aria-labelledby={link.title === link.value ? titleId : undefined}
              {...link}
            >
              {nonDescriptive ? <span className="sr-only">{title}</span> : null}
              <span aria-hidden={nonDescriptive}>{link.value}</span>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

type TeaserSkeletonProps = {
  className?: string;
  showDescription?: boolean;
  showTags?: boolean;
  showHint?: boolean;
};

export function TeaserSkeleton({
  className,
  showDescription = true,
  showTags = true,
  showHint = true,
}: TeaserSkeletonProps) {
  return (
    <div className={cn("flex flex-col h-full animate-in fade-in", className)}>
      {/* Image skeleton */}
      <div className="relative overflow-hidden">
        <Skeleton className="w-full aspect-[16/9] rounded-none" />
      </div>

      {/* Tags + hint row */}
      {(showTags || showHint) && (
        <div className="flex flex-wrap items-center gap-2 px-6 pt-4">
          {showTags && (
            <>
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </>
          )}
          {showHint && <Skeleton className="h-4 w-12 ml-auto" />}
        </div>
      )}

      {/* Text content */}
      <div className="flex flex-col px-6 pt-6 space-y-4">
        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Description */}
        {showDescription && (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        )}

        {/* Link button or text */}
        <div className="pt-2">
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
}
