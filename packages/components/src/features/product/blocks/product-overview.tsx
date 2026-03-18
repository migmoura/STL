import type { CallToAction, Heading } from "@/types/base.d.ts";
import { Heading as HeadingComponent } from "../../../components/ui/heading.tsx";
import { useState } from "react";
import { clsx } from "clsx";
import { Media } from "@/features/content/blocks/text-image.tsx";
import { Link } from "@/components/ui/link.tsx";

export type ProductOverviewType = {
  heading?: Heading;
  content?: string;
  technicalLabel?: string;
  technicalText?: string;
  ctaLink?: CallToAction | null;
  secondaryCtaLink?: CallToAction | null;
  pictures?: Media[];
};

export function ProductOverview({
  heading,
  content,
  technicalLabel,
  technicalText,
  pictures,
  ctaLink,
  secondaryCtaLink,
}: ProductOverviewType) {
  const [selectedPictureIndex, setSelectedPictureIndex] = useState<number>(0);

  const getMedia = () => {
    const selectedPicture = pictures?.[selectedPictureIndex];

    if (selectedPicture?.type === "video") {
      const { poster, sources } = selectedPicture;
      return (
        <video
          poster={poster}
          controls
          className="object-cover object-center w-full aspect-3/2 max-h-[440px]"
        >
          <track kind="captions" />
          {sources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
        </video>
      );
    }

    return (
      <picture>
        {selectedPicture?.sources?.map((source) => (
          <source
            key={`icon-${source.srcset}`}
            type={source.type ?? ""}
            srcSet={source.srcset ?? ""}
            media={source.media ?? ""}
          />
        ))}
        <img
          loading="lazy"
          className={"object-cover object-center w-full aspect-3/2 max-h-[440px]"}
          alt={selectedPicture?.image?.alt}
          src={selectedPicture?.image?.src ?? ""}
        />
      </picture>
    );
  };

  const getThumbnail = (media: Media, index: number, selectedPictureIndex: number) => {
    let img = (
      <img
        loading="lazy"
        className={"w-full h-full object-contain"}
        alt={media?.image?.alt}
        src={media?.image?.src ?? ""}
      />
    );

    if (media?.type === "video") {
      const { poster } = media;
      img = (
        <img
          loading="lazy"
          className={"h-full w-full object-contain"}
          alt={media?.image?.alt}
          src={poster ?? ""}
        />
      );
    }

    return (
      <picture
        className={clsx("flex flex-col w-12 md:w-24 h-12 md:h-24", {
          "border-b-yellow border-b-2": index === selectedPictureIndex,
        })}
      >
        {img}
      </picture>
    );
  };
  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 gap-20"}>
      <div>
        <div className={"flex flex-col space-y-2"}>
          <div className={"w-full h-full"}>{getMedia()}</div>
          <div className={"flex gap-2 mx-auto"}>
            {pictures?.map((picture, index) => (
              <button onClick={() => setSelectedPictureIndex(index)} key={index}>
                {getThumbnail(picture, index, selectedPictureIndex)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={"flex flex-col space-y-10"}>
          <HeadingComponent {...heading}>{heading?.value}</HeadingComponent>
          <div
            className={"prose text-justify text-gray-1"}
            dangerouslySetInnerHTML={{
              __html: content ?? "",
            }}
          />
          <h5 className={"text-h5 font-bold leading-7 text-gray-1"}>{technicalLabel}</h5>

          <div
            dangerouslySetInnerHTML={{ __html: technicalText ?? "" }}
            className={
              "[&>ul]:list-disc [&>ul]:list-inside [&>ul]:columns-2 [&>ul]:space-y-2 text-start text-gray-1 "
            }
          />

          <div className={"flex flex-row gap-4"}>
            {ctaLink?.link && (
              <Link
                href={ctaLink.link.href}
                title={ctaLink.link.title}
                className="w-full"
                variant="primary"
              >
                {ctaLink.link.title}
              </Link>
            )}
            {secondaryCtaLink?.link && (
              <Link
                href={secondaryCtaLink.link.href}
                title={secondaryCtaLink.link.title}
                className="w-full"
                variant="secondary"
              >
                {secondaryCtaLink.link.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
