import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/button.tsx";
import { MoveRight } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "More about us",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: "More about us",
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "More about us",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    children: "More about us",
    disabled: true,
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "More about us",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: <MoveRight />,
  },
};

export const DarkIconTertiary: Story = {
  args: {
    variant: "tertiary",
    size: "icon",
    dark: true,
    children: <MoveRight />,
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};

export const DarkIconSecondary: Story = {
  args: {
    variant: "secondary",
    size: "icon",
    dark: true,
    children: <MoveRight />,
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
