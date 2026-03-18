import type { Meta, StoryObj } from "@storybook/react-vite";
import { CarouselPagination } from "@/components/ui/carousel-pagination.tsx";
import { action } from "storybook/actions";
import { CarouselContext } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const meta: Meta<typeof CarouselPagination> = {
  title: "Component/Pagination",
  component: CarouselPagination,
  decorators: [
    (Story) => {
      const [carouselRef] = useEmblaCarousel();

      return (
        <CarouselContext.Provider
          value={{
            carouselRef,
            api: undefined,
            scrollPrev: action("Scroll previous"),
            scrollNext: action("Scroll next"),
            canScrollPrev: false,
            canScrollNext: true,
          }}
        >
          <Story />
        </CarouselContext.Provider>
      );
    },
  ],
  parameters: {
    layout: "centered",
  },
  globals: {
    backgrounds: { value: "light" },
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    current: 1,
    total: 4,
    scrollTo: (index: number) => action(`Page changed: ${index}`),
  },
};

export const Elevated: Story = {
  args: {
    elevated: true,
    current: 1,
    total: 4,
    scrollTo: (index: number) => action(`Page changed: ${index}`),
  },
};

export const Inverted: Story = {
  args: {
    inverted: true,
    current: 1,
    total: 4,
    scrollTo: (index: number) => action(`Page changed: ${index}`),
  },
  globals: {
    backgrounds: { value: "black" },
  },
};

export const MiddlePage: Story = {
  args: {
    current: 2,
    total: 4,
    scrollTo: (index: number) => action(`Page changed: ${index}`),
  },
};

export const LastPage: Story = {
  args: {
    current: 4,
    total: 4,
    scrollTo: (index: number) => action(`Page changed: ${index}`),
  },
};
