import { create, insert, Orama } from "@orama/orama";
import { highlightAfterInsert } from "@/features/search/utils/highlights.ts";
import type { IndexPage } from "@/types/entities";

export function createSearchDB(): Orama<{
  title: "string";
  description: "string";
  content: "string";
  path: "string";
  lastModified: "number";
  tags: "string[]";
}> {
  return create({
    schema: {
      title: "string",
      description: "string",
      content: "string",
      path: "string",
      lastModified: "number",
      tags: "string[]",
    },
    components: {
      tokenizer: {
        stemming: true,
        stemmerSkipProperties: ["tags"],
      },
    },
    plugins: [
      {
        name: "highlight",
        afterInsert: highlightAfterInsert,
      },
    ],
  });
}

export function insertDocuments(db: Orama<any>, pages: IndexPage[]) {
  for (const page of pages) {
    insert(db, page);
  }
}

export const fetchIndex = async (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((d) => d.data);

export const fetchIndexes = async (urls: string[]) =>
  Promise.all(urls.map(fetchIndex)).then((res) => res.flat() || []);
