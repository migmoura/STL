import { cn, transformWithLink } from "@/lib/utils.tsx";
import { Heading } from "@/components/ui/heading.tsx";
import { Picture } from "../../../components/ui/picture.tsx";
import type { CallToAction } from "@/types/base.d.ts";
import { useIntersectionObserver } from "usehooks-ts";
import { Link } from "@/components/ui/link.tsx";
import { Interweave } from "interweave";

export interface MediaSource {
  src: string;
  type?: string;
  srcset?: string;
  media?: string;
}

export interface Media {
  type: undefined | "image" | "video";
  sources: MediaSource[];
  image: undefined | { image: any; alt?: string; src?: string };
  poster?: string;
}

export const IMAGE_RIGHT = "right";
export const IMAGE_LEFT = "left";

export const TEXT_BLACK = "text-black";
export const TEXT_WHITE = "text-white";

export interface TextImageProps {
  heading?: any;
  subHeading?: string;
  content?: string;
  items: CallToAction[];
  position?: string;
  ratio?: string;
  textColor?: string;
  media?: Media;
}

export function TextImage({
  position = IMAGE_RIGHT,
  heading,
  subHeading,
  content,
  media,
  items,
  ratio = "aspect-square",
  textColor = TEXT_BLACK,
}: Readonly<TextImageProps>) {
  const { isIntersecting: isVisible, ref } = useIntersectionObserver({
    freezeOnceVisible: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "grid md:grid-cols-2 gap-10 items-center",
        isVisible ? "animate-fade-y" : "opacity-0",
      )}
    >
      <div className={cn("space-y-8", textColor)}>
        <div className="space-y-4">
          {subHeading ? <p>{subHeading}</p> : null}
          {heading && <Heading {...heading}>{heading.value}</Heading>}
        </div>
        <div>
          <Interweave className="prose" content={content} transform={transformWithLink} />
        </div>
        <div className="flex gap-8">
          {items
            .filter((item) => item.link?.href && item.link?.value)
            .map((item) => (
              <Link key={item.link?.href} {...item.link} variant={item.variant}>
                {item.link?.value}
              </Link>
            ))}
        </div>
      </div>
      {media ? renderMedia(media, ratio, position) : null}
    </div>
  );
}

function renderMedia(
  media: {
    type: undefined | "image" | "video";
    sources: { src: string; type?: string }[];
    poster?: string;
  },
  ratio: string,
  position: string,
) {
  const { type, sources, poster } = media;

  const containerClassName = cn(
    "md:size-auto md:flex order-first",
    position === IMAGE_RIGHT ? "md:order-last" : "",
  );

  const renderContent = () => {
    if (type === "image") {
      return (
        <Picture
          {...media}
          className="w-full"
          imageClassName={cn("w-full object-cover object-center", ratio)}
        />
      );
    }

    if (type === "video") {
      return (
        <div className="relative w-full">
          <video poster={poster} controls className="w-full">
            <track kind="captions" />
            {sources.map((source, index) => (
              <source key={index} src={source.src} type={source.type} />
            ))}
          </video>
        </div>
      );
    }

    return null;
  };

  return <div className={containerClassName}>{renderContent()}</div>;
}
