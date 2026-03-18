import {
  clearSelectedDocumentPathsAtom,
  isDocumentSelectedAtom,
  isDownloadingSelectedDocumentsAtom,
  selectedDocumentPathsAtom,
  toggleSelectedDocumentPathAtom,
} from "../state/selection.ts";
import { useAtomValue } from "jotai";
import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { fetchAsArrayBuffer, filenameFromPath } from "../utils.ts";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export const useDocumentsDownload = () => {
  const selectedSet = useAtomValue(selectedDocumentPathsAtom);

  const togglePath = useSetAtom(toggleSelectedDocumentPathAtom);
  const clear = useSetAtom(clearSelectedDocumentPathsAtom);

  const downloading = useAtomValue(isDownloadingSelectedDocumentsAtom);
  const setDownloading = useSetAtom(isDownloadingSelectedDocumentsAtom);
  const isSelected = useAtomValue(isDocumentSelectedAtom);

  const toggle = useCallback(
    (path: string | undefined) => {
      if (!path) {
        return;
      }

      togglePath(path);
    },
    [togglePath],
  );

  const download = useCallback(async () => {
    const paths = Array.from(selectedSet).filter(Boolean);
    if (paths.length === 0) {
      return;
    }

    setDownloading(true);
    try {
      const zip = new JSZip();

      const downloads = await Promise.all(
        paths.map(async (path) => {
          const buf = await fetchAsArrayBuffer(path);
          return { name: filenameFromPath(path), buf };
        }),
      );

      for (const { name, buf } of downloads) {
        zip.file(name, buf);
      }

      const blob = await zip.generateAsync({ type: "blob" });
      saveAs(blob, `continental-${paths.length}-documents.zip`);
      clear();
    } finally {
      setDownloading(false);
    }
  }, [selectedSet, setDownloading]);

  return {
    downloading,
    count: selectedSet.size,
    selected: Array.from(selectedSet),
    clear,
    download,
    toggle,
    isSelected,
  };
};
