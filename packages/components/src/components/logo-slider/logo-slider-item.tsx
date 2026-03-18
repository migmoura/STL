import { Picture } from "@/components/ui/picture.tsx";
import { ComponentProps } from "react";

export function LogoSliderItem(props: ComponentProps<typeof Picture>) {
  return (
    <div className="h-12 flex items-center">
      <Picture {...props} />
    </div>
  );
}
