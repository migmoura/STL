import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopTeaser, TopTeaserProps } from "@/features/content/blocks/top-teaser.tsx";

const items: TopTeaserProps["items"] = [
  {
    image: {
      image: {
        src: "https://main--contitech--diconium.aem.page/media_1a2cd1cbc2d7c0209f480d31179e947eabe03cf29.png?width=2000&format=webply&optimize=medium",
        alt: "Teaser 1",
      },
      sources: [],
    },
    heading: {
      value: "Innovative Solutions for a Connected World",
      weight: "1",
    },
    eyebrow: "Continental Industry",
    ctaButton: {
      link: {
        href: "#",
        title: "Continental Industry",
        value: "Learn More",
      },
    },
  },
  {
    image: {
      image: {
        src: "https://main--contitech--diconium.aem.page/media_1a2cd1cbc2d7c0209f480d31179e947eabe03cf29.png?width=2000&format=webply&optimize=medium",
        alt: "Teaser 1",
      },
      sources: [],
    },
    heading: {
      value: "Innovative Solutions for a Connected World",
      weight: "1",
    },
    eyebrow: "Continental Industry",
    ctaButton: {
      link: {
        href: "#",
        title: "Continental Industry",
        value: "Learn More",
      },
    },
  },
];

const meta: Meta<typeof TopTeaser> = {
  title: "Block/TopTeaser",
  component: TopTeaser,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items,
  },
};
