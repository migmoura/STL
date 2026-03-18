import { DynamicField as DynamicFieldType } from "@/features/forms/types.ts";
import { compileExpression } from "filtrex";
import * as z from "zod/mini";

export function getQueryObject(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}

function getMetaDefaults(prefix = "form:"): Record<string, string> {
  const metas = document.querySelectorAll<HTMLMetaElement>(`meta[property^="${prefix}"]`);
  return Array.from(metas).reduce(
    (acc, meta) => {
      const property = meta.getAttribute("property");
      if (!property) {
        return acc;
      }

      const key = property?.replace(prefix, "").toLowerCase();
      acc[key] = meta.content;
      return acc;
    },
    {} as Record<string, string>,
  );
}

export function createDynamicSchema(fields: DynamicFieldType[]) {
  const schema = z.object(
    fields.reduce((schema, field) => {
      if (field.type === "error") {
        return schema;
      }

      const validator = (() => {
        switch (field.type) {
          case "select":
          case "input":
          case "textarea":
            let stringValidator: z.ZodMiniType<string> | z.ZodMiniOptional = z.string();
            if (field.required === "true") {
              stringValidator = stringValidator.check(z.minLength(2, "This field is required."));
            } else {
              stringValidator = z.optional(stringValidator);
            }
            if (field.type !== "select" && field.validation) {
              stringValidator = stringValidator.check(
                z.regex(new RegExp(field.validation), field.message ?? "Invalid format."),
              );
            }
            return stringValidator;

          case "checkbox":
            return field.required === "true"
              ? z.literal(true, {
                  error: () => ({ message: field.message ?? "This field is required" }),
                })
              : z.optional(z.boolean());
          default:
            return z.optional(z.any());
        }
      })();

      return { ...schema, [field.name]: validator };
    }, {}),
  );

  return schema.check((ctx) => {
    ctx.issues = ctx.issues.filter((issue) => {
      const path = issue.path?.[0] as string;
      const dynamicField = fields.find((field) => field.name === path);

      if (!dynamicField?.constraint) {
        return true;
      }

      return compileExpression(dynamicField.constraint)(ctx.value);
    });
  });
}

export function createDefaults(fields: DynamicFieldType[]) {
  const metaDefaults = getMetaDefaults();
  const queryDefaults = getQueryObject();
  const [, countryCode, languageCode] = new URL(location.href).pathname.split("/");

  return fields.reduce<any>(
    (defaults, field) => {
      if (
        field.type === "error" ||
        field.type === "submiterror" ||
        field.type === "submit" ||
        field.type === "success"
      ) {
        return defaults;
      }

      const useExternal = field.autofill !== "false";
      const fieldNameLower = field.name.toLowerCase();
      return {
        ...defaults,
        [field.name]:
          (useExternal ? defaults[field.name] : undefined) ||
          (useExternal ? metaDefaults[fieldNameLower] : undefined) ||
          (useExternal ? queryDefaults[field.name] : undefined) ||
          field.value ||
          (field.type === "checkbox" ? false : ""),
      };
    },
    {
      countryCode: countryCode !== "global" ? countryCode : undefined,
      languageCode,
    },
  );
}
