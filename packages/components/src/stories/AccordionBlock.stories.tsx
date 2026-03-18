import { Accordion } from "@/components/accordion/accordion";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Accordion> = {
  title: "Block/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    headline: {
      value: "Accordion Block Headline",
      weight: "2",
    },
    subHeadline: "This is a subheadline for the accordion block.",
    link: { href: "#", value: "Learn more" },
    type: "single",
    items: [
      { id: "item1", value: "Content for item 1", label: "Item 1" },
      { id: "item2", value: "Content for item 2", label: "Item 2" },
      { id: "item3", value: "Content for item 3", label: "Item 3" },
      { id: "item4", value: "Content for item 4", label: "Item 4" },
    ],
  },
};

export const Multiple: Story = {
  args: {
    headline: {
      value: "Accordion Block Headline",
      weight: "2",
    },
    subHeadline: "This is a subheadline for the accordion block.",
    link: { href: "#", value: "Learn more" },
    type: "multiple",
    items: [
      { id: "item1", value: "Content for item 1", label: "Item 1", open: true },
      { id: "item2", value: "Content for item 2", label: "Item 2", open: true },
      { id: "item3", value: "Content for item 3", label: "Item 3", open: false },
      { id: "item4", value: "Content for item 4", label: "Item 4", open: false },
    ],
  },
};
