import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion.tsx";

const meta: Meta<typeof Accordion> = {
  title: "Component/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[860px]" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Accordion Item</AccordionTrigger>
        <AccordionContent>
          This is the content for the first accordion item. This is the content for the first
          accordion item. This is the content for the first accordion item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Accordion Item</AccordionTrigger>
        <AccordionContent>This is the content for the second accordion item.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[860px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Accordion Item</AccordionTrigger>
        <AccordionContent>
          This is the content for the first accordion item. This is the content for the first
          accordion item. This is the content for the first accordion item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Accordion Item</AccordionTrigger>
        <AccordionContent>This is the content for the second accordion item.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[860px]">
      <AccordionItem value="item-1" disabled>
        <AccordionTrigger>First Accordion Item</AccordionTrigger>
        <AccordionContent>
          This is the content for the first accordion item. This is the content for the first
          accordion item. This is the content for the first accordion item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Accordion Item</AccordionTrigger>
        <AccordionContent>This is the content for the second accordion item.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
