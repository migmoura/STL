import type { Headline as HeadlineType } from "@/types/base.d.ts";
import { Heading } from "@/components/ui/heading.tsx";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.tsx";

type HeadlineProps = { block?: boolean; className?: string } & Readonly<HeadlineType>;

/**
 * The Headline component allows content managers to add structured headings to any page.
 *
 * It supports multiple levels (H1, H2, H3...) to fit various content hierarchy needs.
 * Both a primary headline and a sub-headline can be defined.
 * An optional link can be added to the headline, which will be rendered as a Standalone Link.
 * This component should be present in all block types in the system.
 *
 * For more details, see the related Jira ticket: [CIW-68](https://jira.diconium.com/browse/CIW-68)
 */
export function Headline({ headline, subHeadline, link, className, block = true }: HeadlineProps) {
  if (!headline || !headline.value) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row flex-wrap justify-between items-start align-bottom",
        { "lg:mx-[150px]": block },
        className,
      )}
    >
      <div className="space-y-5">
        {subHeadline ? <p>{subHeadline}</p> : null}
        <Heading {...headline}>{headline.value}</Heading>
      </div>
      {link ? (
        <Button asChild className="ml-auto" variant="link">
          <a href={link.href} title={link.title}>
            {link.value}
          </a>
        </Button>
      ) : null}
    </div>
  );
}
