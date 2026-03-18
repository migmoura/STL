import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "@/components/ui/link";

const meta: Meta<typeof Link> = {
  title: "Component/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Default Link",
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://example.com",
    children: "External Link",
  },
};

export const FileLink: Story = {
  args: {
    href: "/files/document.pdf",
    children: "Download File",
  },
};

export const CustomClass: Story = {
  args: {
    href: "#",
    className: "text-pressed",
    children: "Custom Styled Link",
  },
};
