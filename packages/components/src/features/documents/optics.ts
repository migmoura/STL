import { Teaser } from "@/components/ui/teaser.tsx";
import { Picture } from "@/types/base";
import {
  DocumentIndex,
  DocumentMetadataItem,
  LanguagesResponse,
} from "@/features/documents/types.ts";
import { getUnixTime } from "date-fns";

export function documentToTeaser(linkLabel: string) {
  return (item: DocumentIndex): Teaser => ({
    title: item.title,
    description: item.description,
    tags: item.categories,
    type: item.type,
    image: item.thumbnail,
    link: item.path
      ? {
          href: item.path,
          title: item.title,
          value: linkLabel,
        }
      : undefined,
  });
}

export const mapDocumentToIndex =
  (languages: LanguagesResponse["data"]) => (document: DocumentMetadataItem) => {
    const languageCodes = languages.map((locale) => locale.value);
    const {
      _path,
      document: { _publishUrl },
      _metadata: { stringMetadata, calendarMetadata },
      categories,
      regions,
      topics,
    } = document;

    function extractLanguageFromPath(path: string): string | undefined {
      const segments = path.split("/").filter(Boolean);
      const value = segments.find((segment) => languageCodes.includes(segment.toLowerCase()));

      return languages.find((locale) => locale.value.toLowerCase() === value?.toLowerCase())?.label;
    }
    const locale = extractLanguageFromPath(_path);

    const thumbnail: Picture = {
      image: {
        sources: [
          {
            srcset: `${_publishUrl}/jcr%3Acontent/renditions/cq5dam.thumbnail.319.319.png`,
            sizes: "(min-width: 640px)",
          },
        ],
        src: `${_publishUrl}/jcr%3Acontent/renditions/cq5dam.web.1280.1280.jpeg`,
      },
    };

    const titleValue = stringMetadata.find((meta) => meta.name === "title")?.value || "";

    return {
      title: titleValue.replace(/[^a-zA-Z0-9\s]+/gi, " "),
      description: stringMetadata.find((meta) => meta.name === "description")?.value || "",
      path: _publishUrl,
      locale: locale ? locale : "English",
      type: _publishUrl?.split(".").pop() || "unknown",
      publishedAt: getUnixTime(
        calendarMetadata.find((item) => item.name === "cq:lastModified")?.value ?? 0,
      ),
      topics: topics ?? [],
      regions: regions.map((reg) => reg.name),
      categories: categories.map((cat) => cat.label),
      thumbnail,
    };
  };
