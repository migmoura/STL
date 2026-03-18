import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel.tsx";
import { cva, type VariantProps } from "class-variance-authority";

const paginationVariants = cva("p-1 flex items-center", {
  variants: {
    elevated: {
      true: "shadow-lg",
      false: null,
    },
    inverted: {
      true: "gap-4 border-1 border-white/50 bg-white/10 backdrop-blur-lg",
      false: "gap-8 bg-white",
    },
  },
  defaultVariants: {
    elevated: false,
    inverted: false,
  },
});

const dotsVariants = cva(
  "rounded-full transition-colors disabled:bg-gray-4/10 disabled:cursor-not-allowed",
  {
    variants: {
      inverted: {
        true: null,
        false: null,
      },
      selected: {
        true: "size-3",
        false: "bg-gray-4/50 size-2",
      },
    },
    compoundVariants: [
      {
        inverted: true,
        selected: true,
        className: "bg-white",
      },
      {
        inverted: false,
        selected: true,
        className: "bg-yellow",
      },
    ],
    defaultVariants: {
      inverted: false,
      selected: false,
    },
  },
);

type PaginationProps = Readonly<
  VariantProps<typeof paginationVariants> & {
    current: number;
    total: number;
    scrollTo: ((index: number) => void) | undefined;
  }
>;

/**
 * The Pagination component enables users to navigate carousels, it can be used in several situations
 * and provides a inverted and elevated variant.
 *
 * It offers two interaction modes:
 * - Arrow-based navigation for horizontally sliding through carousels items.
 * - Dot navigation for specific item navigation.
 *
 * Currently, pagination functionality is implemented only for Carousel components, and needs to be inside one for it to work.
 *
 * For more information, refer to the related Jira ticket: [CIW-61](https://jira.diconium.com/browse/CIW-61)
 */

export function CarouselPagination({ current, scrollTo, total, ...variants }: PaginationProps) {
  const dots = Array.from({ length: total });

  return (
    <div className={paginationVariants(variants)}>
      <CarouselPrevious
        variant={variants.inverted ? "tertiary" : "primary"}
        dark={variants.inverted}
      />
      <div className="flex gap-4 items-center">
        {dots.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo?.(index)}
            aria-label={`Go to slide ${index + 1}${current === index ? " (current)" : ""}`}
            className={dotsVariants({
              inverted: variants.inverted,
              selected: current === index, // this line is important
            })}
          />
        ))}
      </div>
      <CarouselNext variant={variants.inverted ? "tertiary" : "primary"} dark={variants.inverted} />
    </div>
  );
}
