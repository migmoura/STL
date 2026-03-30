import type { Link } from "@/types/base.d.ts";
import { Button } from "@/components/ui/button.tsx";

export type TextBlockType = {
  heading?: HTMLElement | string;
  text?: HTMLElement | string;
  primaryCta?: Link;
  secondaryCta?: Link;
  variant?: "horizontal" | "vertical" | string;
};

export function TextBlock({
  heading = "",
  text = "",
  variant,
  primaryCta,
  secondaryCta,
}: TextBlockType) {
  const isHorizontal = variant === "horizontal";

  return (
    <section className={`w-full text-justify ${isHorizontal ? "md:flex md:space-x-20" : ""}`}>
      <div className={`${isHorizontal ? "md:w-1/2" : ""} mb-6`}>
        <div className={"prose text-md"} dangerouslySetInnerHTML={{ __html: heading }} />
      </div>
      <div className={`${isHorizontal ? "md:w-1/2" : ""}`}>
        <div className={"flex flex-col gap-y-6"}>
          <div className={"prose text-md"} dangerouslySetInnerHTML={{ __html: text }} />
          <div className={"flex flex-col md:flex-row gap-4"}>
            {primaryCta && (
              <Button className="size-fit" asChild variant={"primary"}>
                <a href={primaryCta.href} title={primaryCta.title}>
                  {primaryCta.value}
                </a>
              </Button>
            )}
            {secondaryCta && (
              <Button asChild className="size-fit" variant="secondary">
                <a href={secondaryCta.href} title={secondaryCta.title}>
                  {secondaryCta.value}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
