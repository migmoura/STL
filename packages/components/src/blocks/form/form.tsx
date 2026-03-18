import { ComponentProps } from "react";
import { parseHeadline, parseOptionalString, parsePicture, parseString } from "@/lib/parser.ts";
import { createRoot } from "react-dom/client";
import { DynamicForm } from "@/features/forms/blocks/form.tsx";

async function parseHTML(block: HTMLElement): Promise<ComponentProps<typeof DynamicForm>> {
  const [headline, subheadline, link, description, picture, postUrl, fields, siteKey] = Array.from(
    block.children,
  );
  const [, type, schema] = Array.from(fields.children);

  return {
    ...parseHeadline(
      headline.querySelector("h1, h2, h3, h4, h5, h6"),
      subheadline.textContent,
      link.querySelector("a"),
    ),
    description: parseString(description.textContent),
    picture: parsePicture(picture.querySelector("picture")),
    postUrl: parseString(postUrl.textContent),
    siteKey: parseOptionalString(siteKey?.textContent),
    fields:
      parseString(type.textContent) === "object"
        ? JSON.parse(schema?.textContent ?? "[]")
        : await fetch(schema?.textContent ?? "").then(async (resp) => {
            const body = (await resp.json()) as unknown as {
              data: ComponentProps<typeof DynamicForm>["fields"];
            };
            return body.data;
          }),
  };
}

export default async function decorate(block: HTMLElement) {
  const props = await parseHTML(block);

  const root = createRoot(block);
  root.render(<DynamicForm {...props} />);
}
