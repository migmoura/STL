import type { Meta, StoryObj } from "@storybook/react-vite";
import { DynamicForm } from "@/features/forms/blocks/form.tsx";
import { DynamicField } from "@/features/forms/types.ts";

const meta: Meta<typeof DynamicForm> = {
  title: "Block/DynamicForm",
  component: DynamicForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const contactFormFields: DynamicField[] = [
  {
    name: "name",
    type: "input",
    label: "Your name",
    required: "true",
  },
  {
    name: "company",
    type: "input",
    label: "Company",
    required: "true",
  },
  {
    name: "country",
    type: "select",
    label: "Country",
    required: "true",
    options: [
      { value: "DE", label: "Germany" },
      { value: "US", label: "United States" },
      { value: "FR", label: "France" },
      { value: "IT", label: "Italy" },
      { value: "ES", label: "Spain" },
      { value: "GB", label: "United Kingdom" },
      { value: "PL", label: "Poland" },
      { value: "NL", label: "Netherlands" },
      { value: "CA", label: "Canada" },
    ],
  },
  {
    name: "email",
    type: "input",
    label: "Email",
    required: "true",
  },
  {
    name: "phone",
    type: "input",
    label: "Phone",
    required: "true",
  },
  {
    name: "request",
    type: "textarea",
    label: "Your request",
    required: "true",
  },
  {
    name: "error",
    type: "error",
    message: "Please fill out all required fields.",
  },
  {
    name: "consent",
    type: "checkbox",
    label:
      "I hereby declare my consent to the processing of the personal data provided by me as described in the data protection notice for the purpose of establishing contact with me.",
    required: "true",
  },
];

export const Default: Story = {
  args: {
    fields: contactFormFields,
    postUrl: "https://example.com/api/submit",
    headline: {
      value: "Find a Distributor",
      weight: "2",
      strong: false,
      italic: false,
      underline: false,
    },
    subHeadline: "Enter your location to find the nearest distributor.",
    link: {
      href: "https://example.com",
      title: "Distributors",
      value: "Learn more",
    },
    description:
      "Do you have any questions about our products and solutions or any of our services? Get in touch with us and we’ll take care of your request as soon as possible!",
    picture: {
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
  },
};
