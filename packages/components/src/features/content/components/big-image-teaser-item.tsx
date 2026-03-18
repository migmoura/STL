import type { Link, Picture as PictureType } from "@/types/base.d.ts";
import { Button } from "@/components/ui/button.tsx";
import { Picture } from "@/components/ui/picture.tsx";
import type { WithUniversalEditor } from "@/types/universal-editor.d.ts";

type HeroItemProps = {
  link?: Link;
  picture?: PictureType;
  heading?: string;
  copy?: string;
};

export function BigImageTeaserItem({
  heading,
  copy,
  picture,
  link,
  universalEditor,
}: WithUniversalEditor<HeroItemProps>) {
  return (
    <div
      className="h-[500px] rounded-3xl overflow-hidden grid grid-areas-stack items-end drop-shadow-sm"
      {...universalEditor}
    >
      {picture ? (
        <Picture
          className="area-stack h-full"
          imageClassName="h-[500px] w-full object-cover object-center"
          {...picture}
        />
      ) : null}
      <div className="area-stack size-full bg-gradient-to-tr from-black to-70% to-transparent"></div>
      <div className="area-stack px-6 py-14 md:p-14 md:max-w-[484px] text-white">
        <p className="mb-2 font-bold text-lg">{heading}</p>
        <p className="mb-8">{copy}</p>
        {link ? (
          <Button asChild variant="secondary" className="text-white bg-white/10">
            <a {...link}>{link.value}</a>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
