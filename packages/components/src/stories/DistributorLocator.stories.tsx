import type { Meta, StoryObj } from "@storybook/react-vite";
import { DistributorLocator } from "@/features/maps/blocks/distributor-locator.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DistributorLocator> = {
  title: "Block/DistributorLocator",
  component: DistributorLocator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    apiKey: "AIzaSyA9Xb0SU8M8VSaV9o6bn0R78lhZ_rwIm1s",
    units: "km",
    headline: {
      value: "Find a Distributor",
      weight: "2",
      strong: false,
      italic: false,
      underline: false,
    },
    subHeadline: "Enter your location to find the nearest distributor.",
  },
};
