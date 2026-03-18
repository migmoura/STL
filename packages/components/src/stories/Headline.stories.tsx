import type { Meta, StoryObj } from "@storybook/react-vite";
import { Headline } from "@/components/ui/headline.tsx";

const meta: Meta<typeof Headline> = {
  title: "Component/Headline",
  component: Headline,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: {
      value: "Main Headline",
      weight: "2",
      strong: false,
      italic: false,
      underline: false,
    },
    subHeadline: "This is a subheadline providing additional context.",
    link: {
      href: "#",
      title: "Learn More",
      value: "Learn More",
    },
  },
};

export const NoLink: Story = {
  args: {
    headline: {
      value: "Main Headline",
      weight: "2",
      strong: false,
      italic: false,
      underline: false,
    },
    subHeadline: "This is a subheadline providing additional context.",
  },
};

export const NoSubHeadline: Story = {
  args: {
    headline: {
      value: "Main Headline",
      weight: "2",
      strong: false,
      italic: false,
      underline: false,
    },
  },
};

export const CustomStyles: Story = {
  args: {
    headline: {
      value: "Custom Styled Headline",
      weight: "3",
      strong: false,
      italic: true,
      underline: true,
    },
    subHeadline: "A subheadline with custom styles.",
    link: {
      href: "#",
      title: "Explore",
      value: "Explore",
    },
  },
};
