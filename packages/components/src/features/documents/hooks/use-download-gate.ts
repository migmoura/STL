import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  isConsentOpen,
  isGateEnabled,
  pendingSet,
  setIsConsentOpen,
} from "@/features/documents/state/consent.ts";
import { useEffect } from "react";

export function useDownloadGate(enabled?: boolean) {
  const [_enabled, setEnabled] = useAtom(isGateEnabled);
  const pending = useAtomValue(pendingSet);
  const open = useAtomValue(isConsentOpen);
  const setOpen = useSetAtom(setIsConsentOpen);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    setEnabled(enabled);
  }, [enabled]);

  function confirm() {
    pending.clear();
    setOpen(false);
  }

  function cancel() {
    pending.clear();
    setOpen(false);
  }

  function requestDownload(path: string | string[] | undefined) {
    if (!path) {
      return;
    }

    if (typeof path === "string") {
      pending.add(path);
    }

    if (Array.isArray(path)) {
      path.forEach((p) => pending.add(p));
    }

    setOpen(true);
  }

  return {
    enabled: _enabled,
    open,
    pending: pending.size,
    path: pending.size === 1 ? Array.from(pending)[0] : Array.from(pending),
    requestDownload,
    confirm,
    cancel,
  };
}
