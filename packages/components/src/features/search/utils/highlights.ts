import {
  AnyDocument,
  AnyOrama,
  InternalTypedDocument,
  search,
  SearchParamsFullText,
  TypedDocument,
} from "@orama/orama";
import {
  OramaWithHighlight,
  Position,
  ResultWithPositions,
  SearchResultWithHighlight,
} from "@orama/plugin-match-highlight";
import { boundedLevenshtein } from "@orama/orama/internals";
import type { OramaIndexPage } from "@/types/entities";
import { Highlighted, HighlightedField } from "@/features/search/hooks/use-search.ts";
import { entriesFromObject } from "@/lib/utils.tsx";

const MAX_MATCHES_PER_FIELD = 2;
const MAX_HIGHLIGHT_LENGTH = 150;
const HIGHLIGHT_TAG_OPEN = '<b class="text-black font-extrabold">';
const HIGHLIGHT_TAG_CLOSE = "</b>";
type HighlightedSearchResult<T extends {}> = SearchResultWithHighlight<InternalTypedDocument<T>>;

export function highlightAfterInsert<T extends AnyOrama>(orama: T, id: string): void {
  if (!("positions" in orama.data)) {
    Object.assign(orama.data, { positions: {} });
  }

  recursivePositionInsertion(
    orama as OramaWithHighlight<T>,
    orama.documentsStore.get(orama.data.docs, id)!,
    id,
  );
}

const wordRegEx = /[\p{L}0-9_'-]+/gimu;

function recursivePositionInsertion<T extends AnyOrama, ResultDocument = TypedDocument<T>>(
  orama: OramaWithHighlight<T>,
  doc: ResultDocument,
  id: string,
  prefix = "",
  schema: T["schema"] = orama.schema,
): void {
  orama.data.positions[id] = Object.create(null);
  for (const key of Object.keys(doc as object) as Array<keyof ResultDocument>) {
    const isNested = typeof doc[key] === "object";
    const isSchemaNested = typeof schema[key] === "object";
    const propName = `${prefix}${String(key)}`;
    if (isNested && key in schema && isSchemaNested) {
      recursivePositionInsertion(orama, doc[key], id, propName + ".", schema[key]);
    }
    if (!(typeof doc[key] === "string" && key in schema && !isSchemaNested)) {
      continue;
    }
    orama.data.positions[id][propName] = Object.create(null);
    const text = doc[key] as string;
    let regExResult: RegExpExecArray | null;
    while ((regExResult = wordRegEx.exec(text)) !== null) {
      const word = regExResult[0].toLowerCase();
      const key = `${orama.tokenizer.language}:${word}`;
      let token: string;
      if (orama.tokenizer.normalizationCache.has(key)) {
        token = orama.tokenizer.normalizationCache.get(key)!;
      } else {
        [token] = orama.tokenizer.tokenize(word);
        orama.tokenizer.normalizationCache.set(key, token);
      }
      if (!Array.isArray(orama.data.positions[id][propName][token])) {
        orama.data.positions[id][propName][token] = [];
      }
      const start = regExResult.index;
      const length = regExResult[0].length;
      orama.data.positions[id][propName][token].push({ start, length });
    }
  }
}

export function sanitizeTags(tags: any): string[] {
  if (!tags) {
    return [];
  }
  return Array.isArray(tags) ? tags : [];
}

function buildHighlightString(value: string, matches: Position[]): string {
  if (!matches || matches.length === 0) {
    return value.length <= MAX_HIGHLIGHT_LENGTH
      ? value
      : value.slice(0, MAX_HIGHLIGHT_LENGTH) + "...";
  }

  matches = [...matches].sort((a, b) => a.start - b.start);

  const CHAR_GAP_MERGE_THRESHOLD = 30;
  const merged: Position[] = [];

  for (const m of matches) {
    const last = merged[merged.length - 1];

    if (!last) {
      merged.push({ ...m });
      continue;
    }

    const lastEnd = last.start + last.length;
    if (m.start <= lastEnd + CHAR_GAP_MERGE_THRESHOLD) {
      const newEnd = Math.max(lastEnd, m.start + m.length);
      last.length = newEnd - last.start;
    } else {
      merged.push({ ...m });
    }
  }

  return merged
    .map(({ start, length }) => {
      const end = start + length;

      const beforeStart = Math.max(0, start - 30);
      const afterEnd = Math.min(value.length, end + 30);

      const before = value.slice(beforeStart, start);
      const match = value.slice(start, end);
      const after = value.slice(end, afterEnd);

      const prefix = beforeStart > 0 ? "..." : "";
      const suffix = afterEnd < value.length ? "..." : "";

      return `${prefix}${before}${HIGHLIGHT_TAG_OPEN}${match}${HIGHLIGHT_TAG_CLOSE}${after}${suffix}`;
    })
    .join(" ");
}

function bestMatch<T>(document: T, fields: (keyof T)[]): string {
  const defaultHighlight = document[fields[0]] as HighlightedField | string;
  let bestHighlight =
    typeof defaultHighlight === "string" ? defaultHighlight : defaultHighlight.highlight;
  let maxMatches = 0;

  fields.forEach((field) => {
    const fieldData = document[field as keyof T] as any;
    if (fieldData && typeof fieldData === "object" && Array.isArray(fieldData.matches)) {
      if (fieldData.matches.length > maxMatches) {
        maxMatches = fieldData.matches.length;
        bestHighlight = fieldData.highlight;
      }
    }
  });

  return bestHighlight;
}

export function highlightResults<T extends Partial<OramaIndexPage>, K extends keyof OramaIndexPage>(
  results: HighlightedSearchResult<T>,
  query?: string,
  fields?: readonly K[],
) {
  const { hits } = results;
  if (!query) {
    return hits.map(({ document }) => ({ ...document, highlight: "" })) as Highlighted<
      OramaIndexPage,
      K
    >[];
  }

  const map = hits.reduce<Record<string, Highlighted<OramaIndexPage, K>>>(
    (acc, { document, positions, id }) => {
      const existing = acc[id] || { ...document };

      fields?.forEach((field) => {
        const value = document[field] as string;
        const match = positions[field];
        const matches = entriesFromObject(match)
          .sort((a, b) => b[0].length - a[0].length)
          .map(([_, positions]) => positions)
          .flat()
          .slice(0, MAX_MATCHES_PER_FIELD);

        const highlight = buildHighlightString(value, matches);

        (existing as any)[field] = {
          value,
          matches,
          highlight,
        };
      });

      acc[id] = existing;
      return acc;
    },
    {},
  );

  return Object.values(map).map((doc) => ({
    ...doc,
    highlight: bestMatch(doc, ["content", "description"] as K[]),
  }));
}

export async function searchWithHighlight<T extends AnyOrama, ResultDocument = TypedDocument<T>>(
  orama: T,
  params: SearchParamsFullText<T, ResultDocument>,
): Promise<SearchResultWithHighlight<ResultDocument>> {
  const result = await search(orama, params);
  const queryTokens: string[] = orama.tokenizer.tokenize(params.term ?? "");

  const hitsWithPosition: ResultWithPositions<ResultDocument>[] = [];
  for (const hit of result.hits) {
    const hitPositions = entriesFromObject<any>(
      (orama as OramaWithHighlight<T>).data.positions[hit.id],
    );

    const hits: AnyDocument[] = [];
    for (const [propName, tokens] of hitPositions) {
      const matchWithSearchTokens: [string, unknown][] = [];

      const tokenEntries = entriesFromObject(tokens) as [string, any][];
      for (const tokenEntry of tokenEntries) {
        let [token] = tokenEntry;
        token += "";
        for (const queryToken of queryTokens) {
          if (params.tolerance) {
            const distance = boundedLevenshtein(token as string, queryToken, params.tolerance);
            if (distance.isBounded) {
              matchWithSearchTokens.push(tokenEntry);
              break;
            }
          } else if (token.startsWith(queryToken)) {
            matchWithSearchTokens.push(tokenEntry);
            break;
          }
        }
      }
      hits.push([propName, Object.fromEntries(matchWithSearchTokens)]);
    }

    hitsWithPosition.push(Object.assign(hit, { positions: Object.fromEntries(hits) }));
  }

  result.hits = hitsWithPosition;

  return result as SearchResultWithHighlight<ResultDocument>;
}
