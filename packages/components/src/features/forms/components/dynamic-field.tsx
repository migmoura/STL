import {
  FormControl,
  FormErrorMessage,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSuccessMessage,
} from "@/components/ui/form.tsx";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { DynamicField as DynamicFieldType } from "@/features/forms/types.ts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Label } from "@/components/ui/label.tsx";
import useSWR from "swr";
import { Button } from "@/components/ui/button.tsx";
import { ReactNode, useEffect } from "react";
import { Spinner } from "@/components/ui/spinner.tsx";
import { cn, transformWithSlimLink } from "@/lib/utils.tsx";
import { Interweave } from "interweave";

type DynamicFieldProps = {
  form: UseFormReturn<any>;
  show: boolean;
} & DynamicFieldType;

const fetchOptions = async (url: string) =>
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => data.data);

function RemoteSelectItems({ url, children }: { url: string; children?: ReactNode }) {
  const { data: options } = useSWR(url, fetchOptions);

  return (
    <>
      {children}
      {Array.isArray(options)
        ? options.map((option) => (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          ))
        : null}
    </>
  );
}

export function DynamicField({ form, show, ...dynamicField }: DynamicFieldProps) {
  const required = "required" in dynamicField && dynamicField?.required === "true";

  useEffect(() => {
    if (!show) {
      form.resetField(dynamicField.name);
    }
  }, [show, form]);

  if (!show) {
    return null;
  }

  switch (dynamicField.type) {
    case "submiterror":
      return <FormErrorMessage type="server">{dynamicField.message}</FormErrorMessage>;
    case "error":
      return <FormErrorMessage>{dynamicField.message}</FormErrorMessage>;
    case "success":
      return <FormSuccessMessage>{dynamicField.message}</FormSuccessMessage>;
    case "submit":
      return (
        <Button
          variant={dynamicField.variant}
          type="submit"
          disabled={form.formState.isSubmitting}
          className="relative w-fit min-w-50"
        >
          <span className="transition-transform duration-500">
            {dynamicField.label ?? "Submit"}
          </span>
          <Spinner
            className={cn(
              "transition-all duration-500 disabled:text-gray-3",
              form.formState.isSubmitting ? "opacity-100" : "opacity-0 w-0",
            )}
          />
        </Button>
      );
    default:
      return (
        <FormField
          key={dynamicField.name}
          control={form.control}
          name={dynamicField.name}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {(() => {
                  switch (dynamicField.type) {
                    case "input":
                      return (
                        <Input placeholder=" " {...field} required={false}>
                          <FormLabel>
                            {dynamicField.label}
                            {required ? "*" : ""}
                          </FormLabel>
                        </Input>
                      );
                    case "textarea":
                      return (
                        <Textarea placeholder=" " {...field} required={false}>
                          <FormLabel>
                            {dynamicField.label}
                            {required ? "*" : ""}
                          </FormLabel>
                        </Textarea>
                      );
                    case "hidden":
                      return <Input hidden {...field} required={false} />;
                    case "select":
                      return (
                        <Select
                          value={field.value}
                          onValueChange={(e) => {
                            if (e === "empty") {
                              form.resetField(field.name);
                            } else {
                              field.onChange(e);
                            }
                          }}
                        >
                          <SelectTrigger
                            id={field.name}
                            aria-invalid={!!form.formState.errors[field.name]}
                            className="w-full"
                          >
                            <span className="peer flex" data-placeholder={!field.value}>
                              <SelectValue />
                            </span>
                            <Label htmlFor={field.name}>
                              {dynamicField.label}
                              {required ? "*" : ""}
                            </Label>
                          </SelectTrigger>
                          <SelectContent>
                            {typeof dynamicField.options === "string" ? (
                              <RemoteSelectItems url={dynamicField.options}>
                                {!required ? (
                                  <SelectItem value="empty">-- Empty --</SelectItem>
                                ) : null}
                              </RemoteSelectItems>
                            ) : null}
                          </SelectContent>
                        </Select>
                      );
                    case "checkbox":
                      return (
                        <label className="flex gap-4 md:w-2/3">
                          <Checkbox
                            aria-invalid={!!form.formState.errors[field.name]}
                            value={field.value}
                            onCheckedChange={(checked) => field.onChange(checked)}
                          />
                          <Interweave
                            className="text-gray-1"
                            tagName="span"
                            transform={transformWithSlimLink}
                            content={`${required ? "*" : ""}${dynamicField.label}`}
                          />
                        </label>
                      );
                    default:
                      return null;
                  }
                })()}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
  }
}
