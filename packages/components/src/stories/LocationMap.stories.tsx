import type { Meta, StoryObj } from "@storybook/react-vite";
import { LocationMapProvider } from "@/features/maps/blocks/location-map.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LocationMapProvider> = {
  title: "Block/LocationMap",
  component: LocationMapProvider,
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
    locationsUrl: "http://localhost:3000/forms/countries.json",
    headline: {
      value: "Sales & Service Locations",
      weight: "2",
      strong: false,
      italic: false,
      underline: false,
    },
    subHeadline: "Worlds leading industry specialist",
    description:
      "As one of the world’s leading industry specialists, Continental Industry is represented in more than 40 countries and offers its clients safe, environment-friendly and connected solutions – whether it’s for off-highway applications, on rails and roads, in the air, under and above the ground, in industrial environments, for the food sector or the furniture industry.",
  },
};
