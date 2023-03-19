import {
  EMPTY_STRING,
  WHITE_SPACE,
  THREE_DOT,
  DIACRITICS_MAP,
} from '../config';
import { isValid } from './common';

if (process.env.NODE_ENV == 'dev')
  console.log('============ shochu/string ============');

/**
 * Remove all chars in string.
 * @since 1.0.0
 * @param str Input string.
 * @param chars target string will be remove.
 */
export function scut(str: string, chars?: string): string {
  return isValid(chars) ? str.trim().split(chars!).join('') : str.trim();
}

/**
 * Convert string with accents or something related to basic latin letters.
 * @since 1.0.0
 * @param str The string need to be remove dicretics.
 * @example
 *
 * ```js
 * rmDicretics("ĥĕŀŀő ŵőrŀd") // output: "hello world"
 * ```
 *
 */
export function rmDicretics(str: string): string {
  return str.replace(/[^\u0000-\u007E]/g, function (weirdo) {
    return DIACRITICS_MAP[weirdo] || weirdo;
  });
}

/**
 * Repeat string.
 * @since 1.0.0
 * @param str The string need to be repeated.
 * @param n Number of repetitions.
 */
export function repeat(str: string, n: number): string {
  return new Array(n + 1).join(str);
}

/**
 * Limit number of chars.
 * @since 1.0.0
 * @param str The string need to be limited.
 * @param maxChars Maximum number of characters in string.
 * @param trailing The end of the string after limiting (begin if set fromStart is false).
 * @param fromStart
 */
export function truncate(
  str: string,
  maxChars: number,
  /**
   * @default THREE_DOT "..."
   */
  trailing: string = THREE_DOT,
  /**
   * @default true
   */
  fromStart: boolean = true
): string {
  str = str.trim();
  if (str.length <= maxChars) {
    return str;
  }

  str = fromStart
    ? str.substring(0, maxChars)
    : str.substring(str.length - maxChars, str.length);

  return fromStart ? str + trailing : trailing + str;
}

export default {
  scut,
  repeat,
  truncate,
  rmDicretics,
};
