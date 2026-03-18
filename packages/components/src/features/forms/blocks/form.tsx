import { SubmitHandler, useForm } from "react-hook-form";
import { Headline } from "@/components/ui/headline.tsx";
import { ComponentProps } from "react";
import { Picture } from "@/components/ui/picture.tsx";
import { DynamicField as DynamicFieldType } from "../types.ts";
import { DynamicField } from "../components/dynamic-field.tsx";
import * as z from "zod/mini";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { compileExpression } from "filtrex";
import { Form as PrimitiveForm } from "@/components/ui/form.tsx";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { createDefaults, createDynamicSchema } from "@/features/forms/utils.ts";

type FormProps = {
  postUrl: string;
  recaptcha: boolean;
  picture: ComponentProps<typeof Picture>;
  description?: string | undefined;
  fields: DynamicFieldType[];
} & ComponentProps<typeof Headline>;

export function Form({
  headline,
  subHeadline,
  link,
  picture,
  description,
  postUrl,
  fields,
  recaptcha,
}: FormProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const formSchema = createDynamicSchema(fields);
  const defaultValues = createDefaults(fields);

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: standardSchemaResolver(formSchema),
    defaultValues,
  });

  const formValues = form.watch();

  const onSubmit: SubmitHandler<unknown> = async (data: unknown) => {
    if (!postUrl) {
      return;
    }

    try {
      const res = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(data as object),
          recaptchaToken: recaptcha ? await executeRecaptcha?.("submit_form") : undefined,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        form.setError("root", {
          type: "server",
          message: error?.message || "Submission failed",
        });
        return;
      }

      form.reset();
      return res.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        form.setError("root", {
          type: "server",
          message: error?.message || "Submission failed",
        });
      }
    }
  };

  return (
    <PrimitiveForm {...form}>
      <div className="space-y-8">
        <div className="space-y-20">
          <Headline headline={headline} subHeadline={subHeadline} link={link} />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:mx-[150px]">
            <p className="text-h5 text-gray-1">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:mx-[150px]">
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {fields.map((field) => {
              let show = true;
              if (field.constraint) {
                const filter = compileExpression(field.constraint.replaceAll("'", '"'));
                show = filter(formValues);
              }

              return <DynamicField key={field.name} form={form} show={show} {...field} />;
            })}
          </form>
          {picture && <Picture {...picture} className="hidden xl:block ml-auto" />}
        </div>
      </div>
      <div id="recaptcha_badge"></div>
    </PrimitiveForm>
  );
}

export type DynamicFormProps = {
  siteKey?: string | null;
} & Omit<FormProps, "recaptcha">;

export function DynamicForm({ siteKey, ...props }: DynamicFormProps) {
  const content = <Form {...props} recaptcha={!!siteKey} />;

  if (!siteKey) {
    return content;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      language="en"
      container={{ element: "recaptcha_badge", parameters: { badge: "bottomleft" } }}
    >
      {content}
    </GoogleReCaptchaProvider>
  );
}
