type PromiseState<T> = {
  status: "pending" | "fulfilled" | "rejected";
  value?: T;
  error?: unknown;
};

const promiseCache = new WeakMap<Promise<unknown>, PromiseState<unknown>>();

function getPromiseState<T>(promise: Promise<T>): PromiseState<T> {
  let state = promiseCache.get(promise) as PromiseState<T> | undefined;

  if (!state) {
    state = { status: "pending" };
    promiseCache.set(promise, state);

    promise.then(
      (value) => {
        state!.status = "fulfilled";
        state!.value = value;
      },
      (error) => {
        state!.status = "rejected";
        state!.error = error;
      },
    );
  }

  return state;
}

export function useEnginesFactorySuspense<TResult>(factory: Promise<TResult>): TResult {
  const state = getPromiseState(factory);

  if (state.status === "pending") {
    throw factory;
  }

  if (state.status === "rejected") {
    throw state.error;
  }

  return state.value as TResult;
}
