import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "@/components/ui/tag";
import { CircleX } from "lucide-react";

const meta: Meta<typeof Tag> = {
  title: "Component/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Label",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Label",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    asChild: true,
    children: <button disabled>Disabled Label</button>,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    asChild: true,
    children: <button disabled>Disabled Label</button>,
  },
};

export const TertiaryDisabled: Story = {
  args: {
    variant: "tertiary",
    asChild: true,
    children: <button disabled>Disabled Label</button>,
  },
};

export const TagWithIcon: Story = {
  args: {
    asChild: true,
    children: (
      <button disabled>
        Disabled Label
        <CircleX />
      </button>
    ),
  },
};
