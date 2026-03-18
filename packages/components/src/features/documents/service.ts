import wretch from "wretch";
import {
  Filter,
  FilterBuilder,
  DocumentResponse,
  LanguagesResponse,
} from "@/features/documents/types.ts";

export function createFilterBuilder(): FilterBuilder {
  const filter: Filter = {};

  return {
    withPaths(paths) {
      if (paths && paths?.length > 0) {
        filter._path = {
          _logOp: "OR",
          _expressions: paths.map((path) => ({
            _operator: "STARTS_WITH",
            value: path,
          })),
        };
      }
      return this;
    },

    withTags(categories) {
      if (categories && categories.length > 0) {
        filter._tags = {
          _logOp: "OR",
          _expressions: categories.map((cat) => ({
            _operator: "EQUALS",
            value: cat,
          })),
        };
      }
      return this;
    },

    build() {
      return `%3Bfilter%3D${encodeURI(JSON.stringify(filter))}`;
    },
  };
}

export const getDocuments = async (
  url: string,
  builder: FilterBuilder,
): Promise<DocumentResponse> => {
  const filter = builder.build();

  return wretch()
    .url(`${url}${filter}`)
    .get()
    .notFound(() => {
      return {
        data: {
          documentMetadataList: {
            items: [],
          },
        },
      };
    })
    .json();
};

export const getLanguages = async (url: string): Promise<LanguagesResponse> => {
  return await wretch()
    .url(url)
    .get()
    .notFound(() => {
      return {
        data: {
          languages: [],
        },
      };
    })
    .json<LanguagesResponse>();
};
