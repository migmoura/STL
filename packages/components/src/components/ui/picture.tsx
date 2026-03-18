import type { Picture as PictureType } from "@/types/base.d.ts";
import { HTMLAttributes, useState } from "react";

export function Picture({
  sources,
  image,
  imageClassName,
  defaultSrc,
  ...props
}:
  | (PictureType &
      HTMLAttributes<HTMLPictureElement> & { imageClassName?: string; defaultSrc?: string })
  | any) {
  const [imgSrc, setImgSrc] = useState(image.src);

  return (
    <picture {...props}>
      {sources?.map((source: any) => (
        <source
          key={source.srcset}
          type={source.type}
          srcSet={source.srcset}
          media={source.media}
        />
      ))}
      <img
        className={imageClassName}
        loading="lazy"
        alt={image.alt}
        src={imgSrc}
        onError={() => setImgSrc(defaultSrc)}
      />
    </picture>
  );
}
