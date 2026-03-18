import type { ComponentProps } from "react";
import { Picture } from "@/components/ui/picture";
import type { Link, Picture as PictureType } from "@/types/base";
import { cn } from "@/lib/utils.tsx";

type SimpleImageProps = {
  picture?: PictureType;
  watermark?: string;
  caption?: string;
  link?: Link;
};

function ImageStack({
  watermark,
  children,
  ...props
}: ComponentProps<"div"> & { watermark?: string }) {
  return (
    <div {...props} className={cn("grid grid-areas-stack w-full h-full", props.className)}>
      {children}
      {watermark && (
        <p className="p-2 area-stack text-xs flex items-end justify-end">{watermark}</p>
      )}
    </div>
  );
}

export function SimpleImage({ picture, watermark, caption, link }: SimpleImageProps) {
  if (!picture) {
    return null;
  }

  const content = (
    <ImageStack watermark={watermark}>
      <Picture
        {...picture}
        className="area-stack overflow-hidden block w-full h-full object-cover"
        imageClassName="w-full h-full object-cover object-top"
      />
    </ImageStack>
  );

  return (
    <div
      className={cn(
        "image-full:w-full image-lg:w-3/4 image-md:w-1/2 image-sm:w-1/4",
        "image-center:mx-auto image-right:ml-auto",
      )}
    >
      <div
        className={cn(
          "ratio-1-1:aspect-square ratio-1-2:aspect-1/2 ratio-2-1:aspect-2/1",
          "ratio-4-3:aspect-4/3 ratio-3-4:aspect-3/4",
          "ratio-16-9:aspect-16/9 ratio-9-16:aspect-9/16",
          "overflow-hidden",
        )}
      >
        {link ? (
          <a href={link.href} title={link.title} className="block w-full h-full">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
      {caption && <p className="mt-2 text-left text-gray-1 text-sm">{caption}</p>}
    </div>
  );
}
