import type { ButtonVariant } from "@/types/base.d.ts";

export type TextFieldType = "input" | "textarea";

export type DynamicField = {
  name: string;
  constraint?: string;
  autofill?: "true" | "false" | "";
} & (
  | {
      type: TextFieldType;
      value?: string;
      label?: string;
      required?: "true" | "false" | "";
      validation?: string;
      message?: string;
    }
  | {
      type: "checkbox";
      value?: boolean;
      label?: string;
      required?: "true" | "false" | "";
      message?: string;
    }
  | {
      type: "select";
      value?: string;
      label?: string;
      required?: "true" | "false" | "";
      message?: string;
      options: { value: string; label: string }[] | string;
    }
  | {
      type: "hidden";
      value: string;
    }
  | {
      type: "error";
      message: string;
    }
  | {
      type: "submiterror";
      message: string;
    }
  | {
      type: "success";
      message: string;
    }
  | {
      type: "submit";
      label?: string;
      variant?: ButtonVariant;
    }
);
