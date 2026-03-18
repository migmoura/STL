import { atom } from "jotai";

export const isGateEnabled = atom(false);
export const isConsentOpen = atom(false);
export const pendingSet = atom<Set<string>>(new Set<string>());

export const setIsConsentOpen = atom(null, (_get, set, value: boolean) => {
  set(isConsentOpen, value);
});
