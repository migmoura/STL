export type Nullable<T> = { [K in keyof T]: T[K] | null };
export type OnlyObject<T> = T extends (...args: any[]) => any ? never : T;
