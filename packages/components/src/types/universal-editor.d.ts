export type UniversalEditor = {
  "data-aue-resource": string;
  "data-aue-type": string;
  "data-aue-behavior": string;
  "data-aue-model": string;
  "data-aue-label": string;
  "data-aue-filter": string;
};

export type WithUniversalEditor<T> = T & {
  universalEditor: UniversalEditor;
};
