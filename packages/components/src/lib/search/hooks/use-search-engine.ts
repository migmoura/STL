import { useSearchContext } from "@/lib/search/context/search-context.ts";
import { SearchEngineRegistry } from "@/lib/search/context/search-context.ts";

export function useSearchEngine<
  TRegistry extends SearchEngineRegistry,
  TKey extends keyof TRegistry,
>(engineKey: TKey) {
  const context = useSearchContext();
  return context.getEngine(engineKey) as TRegistry[TKey];
}
