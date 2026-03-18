import type { Meta, StoryObj } from "@storybook/react-vite";
import { NoticeBanner } from "@/components/ui/notice-banner.tsx";
import { Button } from "@/components/ui/button.tsx";

const meta: Meta<typeof NoticeBanner> = {
  title: "Component/NoticeBanner",
  component: NoticeBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "This is an important notice for all site visitors.",
  },
};

export const WithPrimaryAction: Story = {
  args: {
    message: "New updates are available for your account.",
    primaryAction: <Button variant="secondary">Update Now</Button>,
  },
};

export const WithBothActions: Story = {
  args: {
    message: "We use cookies to improve your experience on our site.",
    primaryAction: <Button variant="secondary">Accept</Button>,
    secondaryAction: <Button variant="secondary">Continue</Button>,
  },
};

export const WithPersistence: Story = {
  args: {
    message: "This notice will remember if you dismiss it (check localStorage).",
    persistKey: "storybook-notice-banner-test",
    primaryAction: <Button variant="secondary">Got it</Button>,
  },
};

export const LongMessage: Story = {
  args: {
    message:
      "This is a longer notice message that demonstrates how the component handles more extensive content. It should wrap appropriately and maintain good readability across different screen sizes.",
    primaryAction: <Button variant="secondary">Action</Button>,
    secondaryAction: <Button variant="secondary">Continue</Button>,
  },
};

export const CustomAriaLabel: Story = {
  args: {
    message: "Important security update available.",
    ariaLabel: "Security notification banner",
    primaryAction: <Button variant="secondary">Update</Button>,
  },
};

export const ErrorVariant: Story = {
  args: {
    variant: "error",
    message: "An error occurred while processing your request.",
    primaryAction: <Button variant="secondary">Retry</Button>,
  },
};

export const ErrorWithActions: Story = {
  args: {
    variant: "error",
    message: "Your session has expired. Please log in again to continue.",
    primaryAction: <Button variant="secondary">Log In</Button>,
    secondaryAction: <Button variant="secondary">Continue</Button>,
  },
};
