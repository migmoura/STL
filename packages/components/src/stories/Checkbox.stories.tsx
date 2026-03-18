import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@/components/ui/checkbox.tsx";

const meta: Meta<typeof Checkbox> = {
  title: "Component/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Default Checkbox",
  },
};

export const Checked: Story = {
  args: {
    "aria-label": "Checked Checkbox",
    checked: true,
  },
};

export const Error: Story = {
  args: {
    "aria-label": "Checked Checkbox",
    "aria-invalid": true,
  },
};

export const Disabled: Story = {
  args: {
    "aria-label": "Disabled Checkbox",
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    "aria-label": "Checked Disabled Checkbox",
    checked: true,
    disabled: true,
  },
};

export const CheckboxWithText: Story = {
  args: {
    className: "2xl:my-1",
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex gap-4">
          <Story id="checkbox-with-text" />
          <label htmlFor="checkbox-with-text" className="text-gray-1">
            I hereby declare my consent to the processing of the personal data provided by me as
            described in the data protection notice for the purpose of establishing contact with me.
          </label>
        </div>
      );
    },
  ],
};
