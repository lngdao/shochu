if (process.env.NODE_ENV == 'dev')
  console.log('============ shochu/common ============');

/**
 * Determines whether the value is number type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if number.
 */
export function isNumber(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Number]';
}

/**
 * Determines whether the value is string type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if string.
 */
export function isString(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object String]';
}

/**
 * Check for a string consisting of only numbers.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if number string.
 */
export function isNumberString(val: any): boolean {
  return isString(val) && /^[0-9]+$/.test(val);
}

/**
 * Determines whether the value is string type.
 * @since 1.0.0
 * @param {*} val The value to normalize.
 * @returns 0 if NaN, else number of val.
 */
export function normalizeNumber(val: any): number {
  return Number.isNaN(val) ? 0 : Number(val);
}

/**
 * Determines whether the value is array type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if array.
 */
export function isArray(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Array]';
}

/**
 * Determines whether the value is object type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if object.
 */
export function isObj(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Object]';
}

/**
 * Determines whether the value is boolean.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if boolean.
 */
export function isBool(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Boolean]';
}

/**
 * Determines whether the value is function.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if function.
 */
export function isFunc(val: any): boolean {
  return ['[object Function]', '[object GeneratorFunction]'].includes(
    Object.prototype.toString.call(val)
  );
}

/**
 * Determines whether the value is null type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if null.
 */
export function isNull(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Null]';
}

/**
 * Determines whether the value is undefined type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if undefined.
 */
export function isUndefined(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Undefined]';
}

/**
 * Determines whether the value is date type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if Date.
 */
export function isDate(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Date]';
}

/**
 * Determines whether the value is RegExp type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if RegExp.
 */
export function isRegex(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object RegExp]';
}

/**
 * Determines whether the value is promise type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if promise.
 */
export function isPromise(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Promise]';
}

/**
 * Determines whether the value is set type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if set.
 */
export function isSet(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Set]';
}

/**
 * Determines whether the value is map type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if map.
 */
export function isMap(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Map]';
}

/**
 * Determines whether the value is symbol type.
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if symbol.
 */
export function isSymbol(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Symbol]';
}

/**
 * Make sure the value is valid and not empty (for some data types)
 * @since 1.0.0
 * @param {*} val The value to check.
 * @returns true if value is valid & not empty, else false.
 */
export function isValid(val: any): boolean {
  if (isNumber(val)) return true;
  if (isString(val)) return Boolean(val.length);
  if (isArray(val)) return Boolean(val.length);
  if (isObj(val)) {
    for (const key in val) {
      if (Object.prototype.hasOwnProperty.call(val, key)) return true;
    }
  }
  if (isSet(val) || isMap(val)) return Boolean(val.size);

  return false;
}

export default {
  isNumber,
  isString,
  normalizeNumber,
  isNumberString,
  isArray,
  isObj,
  isFunc,
  isBool,
  isDate,
  isPromise,
  isRegex,
  isMap,
  isSet,
  isNull,
  isUndefined,
  isSymbol,
  isValid,
};
