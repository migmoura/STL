import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Label } from "@/components/ui/label.tsx";
import { useState } from "react";

const meta: Meta = {
  title: "Component/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[280px]">
          <span className="peer w-full flex" data-placeholder={!value}>
            <SelectValue />
          </span>
          <Label>Select a timezone</Label>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("option1");

    return (
      <Select disabled value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[280px]">
          <span className="peer w-full flex" data-placeholder={!value}>
            <SelectValue />
          </span>
          <Label>Select a timezone</Label>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};
