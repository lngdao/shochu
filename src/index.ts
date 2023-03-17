import { default as commonFn } from './modules/common';
import { default as arrayFn } from './modules/array';
import { default as stringFn } from './modules/string';
import { default as otherFn } from './modules/other';

export * from './modules/common';
export * from './modules/array';
export * from './modules/other';
export * from './modules/string';

export { commonFn, arrayFn, stringFn, otherFn };
export default { commonFn, arrayFn, stringFn, otherFn };