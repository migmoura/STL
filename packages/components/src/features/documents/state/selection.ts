import { atom } from "jotai";

export const selectedDocumentPathsAtom = atom<Set<string>>(new Set<string>());
export const isDownloadingSelectedDocumentsAtom = atom(false);

export const toggleSelectedDocumentPathAtom = atom(null, (get, set, path: string) => {
  const current = get(selectedDocumentPathsAtom);
  const next = new Set(current);

  next.has(path) ? next.delete(path) : next.add(path);

  set(selectedDocumentPathsAtom, next);
});

export const clearSelectedDocumentPathsAtom = atom(null, (_get, set) => {
  set(selectedDocumentPathsAtom, new Set());
});

export const isDocumentSelectedAtom = atom((get) => (path: string | undefined) => {
  if (path === undefined) {
    return false;
  }
  return get(selectedDocumentPathsAtom).has(path);
});
