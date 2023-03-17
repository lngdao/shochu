import shochu from '../index';

const common = shochu.commonFn;

test('common/isNumber', () => {
  expect(common.isNumber(1)).toBeTruthy();
});

test('common/isString', () => {
  expect(common.isString('hello world')).toBeTruthy();
});

test('common/normalizeNumber', () => {
  expect(common.normalizeNumber(NaN)).toBe(0);
});

test('common/isNumberString', () => {
  expect(common.isNumberString('1234569')).toBeTruthy();
});

test('common/isArray', () => {
  expect(common.isArray([1])).toBeTruthy();
});

test('common/isObj', () => {
  expect(common.isObj({})).toBeTruthy();
});

test('common/isFunc', () => {
  expect(common.isFunc(() => {})).toBeTruthy();
});

test('common/isBool', () => {
  expect(common.isBool(true)).toBeTruthy();
});

test('common/isDate', () => {
  expect(common.isDate(new Date())).toBeTruthy();
});

test('common/isPromise', () => {
  expect(common.isPromise(Promise.resolve(1))).toBeTruthy();
});

test('common/isRegex', () => {
  expect(common.isRegex(/\./)).toBeTruthy();
});

test('common/isMap', () => {
  expect(common.isMap(new Map())).toBeTruthy();
});

test('common/isSet', () => {
  expect(common.isSet(new Set())).toBeTruthy();
});

test('common/isNull', () => {
  expect(common.isNull(null)).toBeTruthy();
});

test('common/isUndefined', () => {
  expect(common.isUndefined(undefined)).toBeTruthy();
});

test('common/isSymbol', () => {
  expect(common.isSymbol(Symbol())).toBeTruthy();
});

test('common/isNumber', () => {
  expect(common.isValid(1)).toBeTruthy();
});
