import { create, insertMultiple, Orama } from "@orama/orama";
import { getDocuments, getLanguages } from "@/features/documents/service.ts";
import { mapDocumentToIndex } from "@/features/documents/optics.ts";

export const documentSchema = {
  title: "string",
  description: "string",
  path: "string",
  type: "enum",
  locale: "enum",
  regions: "enum[]",
  categories: "enum[]",
  topics: "enum[]",
  publishedAt: "number",
} as const;

export type DocumentsEngine = Orama<typeof documentSchema>;

export async function createDocumentsEngine(
  url: Parameters<typeof getDocuments>[0],
  localeUrl: Parameters<typeof getLanguages>[0],
  { documentFilters }: { documentFilters: Parameters<typeof getDocuments>[1] },
): Promise<DocumentsEngine> {
  const db = create({
    schema: documentSchema,
  });
  const rawProducts = await getDocuments(url, documentFilters);
  const rawLanguages = await getLanguages(localeUrl);
  console.log(rawLanguages);

  const indexedProducts = rawProducts.data.documentMetadataList.items.map(
    mapDocumentToIndex(rawLanguages.data),
  );
  await insertMultiple(db, indexedProducts);

  return db;
}
