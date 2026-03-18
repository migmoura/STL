import type { Meta, StoryObj } from "@storybook/react-vite";
import { Teaser } from "@/components/ui/teaser";

const meta: Meta<typeof Teaser> = {
  title: "Component/Teaser",
  component: Teaser,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Teaser",
    description: "This is a default teaser description.",
    image: {
      sources: [
        {
          srcset:
            "https://main--contitech--diconium.aem.page/media_15845d39a926e20fcb5393b8fc926864d96e22a12.jpg?width=2000&format=webply&optimize=medium",
          type: "image/webp",
          media: "(min-width: 600px)",
        },
        {
          srcset:
            "https://main--contitech--diconium.aem.page/media_15845d39a926e20fcb5393b8fc926864d96e22a12.jpg?width=2000&format=jpg&optimize=medium",
          type: "image/jpeg",
          media: "(min-width: 600px)",
        },
      ],
      image: {
        src: "https://main--contitech--diconium.aem.page/media_15845d39a926e20fcb5393b8fc926864d96e22a12.jpg?width=750&format=jpg&optimize=medium",
        alt: "Hydraulic Hoses",
      },
    },
    link: {
      href: "#",
      title: "Learn More",
      value: "Read More",
    },
    aspectRatio: "aspect-4/3",
  },
};

export const FileTeaser: Story = {
  args: {
    title: "File Teaser",
    description: "This teaser links to a file.",
    link: {
      href: "/files/document.pdf",
      title: "Download File",
      value: "Read More",
    },
    aspectRatio: "aspect-2/1",
  },
};

export const TeaserWithPills: Story = {
  args: {
    title: "File Teaser",
    description: "This teaser links to a file.",
    image: {
      sources: [
        {
          srcset:
            "https://main--contitech--diconium.aem.page/media_15845d39a926e20fcb5393b8fc926864d96e22a12.jpg?width=2000&format=webply&optimize=medium",
          type: "image/webp",
          media: "(min-width: 600px)",
        },
        {
          srcset:
            "https://main--contitech--diconium.aem.page/media_15845d39a926e20fcb5393b8fc926864d96e22a12.jpg?width=2000&format=jpg&optimize=medium",
          type: "image/jpeg",
          media: "(min-width: 600px)",
        },
      ],
      image: {
        src: "https://main--contitech--diconium.aem.page/media_15845d39a926e20fcb5393b8fc926864d96e22a12.jpg?width=750&format=jpg&optimize=medium",
        alt: "Hydraulic Hoses",
      },
    },
    link: {
      href: "/files/document.pdf",
      title: "Download File",
      value: "Read More",
    },
    tags: ["Hydraulic", "Hoses"],
    hint: "New York",
    aspectRatio: "aspect-2/1",
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Teaser Without Image",
    description: "This teaser does not include an image.",
    link: {
      href: "#",
      title: "Read More",
      value: "Read More",
    },
    aspectRatio: "aspect-3/4",
  },
};
