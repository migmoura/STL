import { createElement, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof heading>;

export const heading = cva("", {
  variants: {
    weight: {
      "1": "text-h1",
      "2": "text-h2",
      "3": "text-h3",
      "4": "text-h4",
      "5": "text-h5",
    },
    display: {
      true: "text-display!",
    },
    strong: {
      true: "font-bold",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline",
    },
  },
});

function Heading({
  weight = "2",
  id = "",
  display = false,
  strong = false,
  italic = false,
  underline = false,
  className,
  ...props
}: HeadingProps) {
  if (!weight) {
    return null;
  }
  const Tag = `h${weight}`;

  return createElement(
    Tag,
    {
      id,
      className: heading({
        weight: className?.includes("h") ? undefined : weight,
        display,
        strong,
        italic,
        underline,
        className,
      }),
      ...props,
    },
    props.children,
  );
}

Heading.displayName = "Heading";

export { Heading };
