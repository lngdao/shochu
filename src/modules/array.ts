import { NestedArray } from './types/array.type';

/**
 * Removes falsy
 * @since 1.0.0
 * @param arr
 */
export function removeFalsy<T>(arr: Array<T>): Array<T> {
  return arr.filter(Boolean);
}

/**
 * Shuffle items in array.
 * @since 1.0.0
 * @param arr input array.
 */
export function shuffle<T>(arr: Array<T>): Array<T> {
  return arr
    .map((val) => ({ id: Math.random(), value: val }))
    .sort((a, b) => a.id - b.id)
    .map((val) => val.value);
}

/**
 *
 * @since 1.0.0
 * @param arr
 */
export function hasDuplicate<T>(arr: Array<T>): boolean {
  return new Set(arr).size !== arr.length;
}

/**
 * Remove duplicate item in array.
 * @since 1.0.0
 * @param arr
 */
export function rmDuplicate<T>(arr: Array<T>): Array<T> {
  return Array.from(new Set(arr));
}

/**
 * Flatten an array.
 * @since 1.0.0
 * @param arr
 * @example
 *
 * ```js
 * flatten([1, 2, [3, 4, [5, 6, [9]]]]) === [1, 2, 3, 4, 5, 6, 9]
 * ```
 *
 */
export function flatten<T>(arr: NestedArray<T>, acc: T[] = []): T[] {
  return arr.reduce((_: T[], current) => {
    if (Array.isArray(current)) return flatten(current, acc);
    acc.push(current);
    return acc;
  }, []);
}

export default { removeFalsy, shuffle, hasDuplicate, rmDuplicate, flatten };
