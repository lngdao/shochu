import {
  AnyFunc,
  LastFnReturnType,
  OmitObject,
  PickObject,
  PipeArgs,
} from './types/other.type';

/**
 * Compose function from left to right.
 * @since 1.0.0
 * @param arg Argument of first function.
 * @param ...fns Spread of functions.
 * @example
 *
 * ```js
 * const lowercase = (str) => str.toLowerCase();
 * const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
 * const reverse = (str) => str.split('').reverse().join('');
 *
 * pipe("Hello World", lowercase, capitalize, reverse) === "dlrow olleH"
 * ```
 *
 * @thanks ecyrbe https://github.com/ecyrbe
 */
export function pipe<FirstFn extends AnyFunc, F extends AnyFunc[]>(
  arg: Parameters<FirstFn>[0],
  firstFn: FirstFn,
  ...fns: PipeArgs<F> extends F ? F : PipeArgs<F>
): LastFnReturnType<F, ReturnType<FirstFn>> {
  return (fns as AnyFunc[]).reduce((acc, fn) => fn(acc), firstFn(arg));
}

/**
 *
 * @since 1.0.0
 * @param fn
 * @param delay
 */
export function debounce<Fn extends AnyFunc>(fn: Fn, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: Parameters<Fn>) {
    const context = this;

    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, args), delay);
  };
}

/**
 *
 * @since 1.0.0
 * @param fn
 * @param delay
 */
export function throttle<Fn extends AnyFunc, T extends any[]>(
  fn: Fn,
  delay: number
) {
  let isThrottled = false;
  let args: T | null = null;

  function throttled(this: unknown, ...rest: T) {
    // Runs during the first run timeout when triggering on subsequent runs
    if (isThrottled) {
      args = rest;
      return;
    }

    isThrottled = true;
    fn.apply(this, rest);

    setTimeout(() => {
      isThrottled = false;
      if (args) {
        throttled.apply(this, args);
        args = null;
      }
    }, delay);
  }

  return throttled;
}

/**
 *
 * @since 1.0.0
 * @param fn
 */
export function once<Fn extends AnyFunc>(fn: Fn) {
  let ran = false;
  let result: ReturnType<typeof fn>;

  return function (this: any, ...args: Parameters<typeof fn>) {
    if (ran) return result;
    result = fn.apply(this, args);
    ran = true;

    return result;
  };
}

/**
 *
 * @since 1.0.0
 * @param fn
 */
export function memoize<Fn extends AnyFunc>(fn: Fn) {
  const cache = new Map();

  return function (this: any, ...args: Parameters<typeof fn>) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const reuslt = fn.apply(this, args);
    cache.set(key, reuslt);

    return reuslt;
  };
}

/**
 *
 * @since 1.0.0
 * @param obj
 * @param keys
 */
export function pick<T, K extends keyof T>(
  obj: T,
  ...keys: K[]
): PickObject<T, K> {
  const result = {} as PickObject<T, K>;

  keys.forEach((key) => {
    if ((obj as object).hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  });

  return result;
}

/**
 *
 * @since 1.0.0
 * @param obj
 * @param keys
 */
export function omit<T, K extends keyof T>(
  obj: T,
  ...keys: K[]
): OmitObject<T, K> {
  let reuslt = obj as OmitObject<T, K>;

  keys.forEach((key) => {
    delete reuslt[key];
  });

  return reuslt;
}

/**
 *
 * @since 1.0.0
 * @param delay
 */
export function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export default { pipe, debounce, throttle, once, memoize, pick, omit, wait };
