import shochu from '../index';

const arrayFn = shochu.arrayFn;

test('array/removeFalsy', () => {
  expect(
    arrayFn.removeFalsy([undefined, 1, null, 'hello world'])
  ).toStrictEqual([1, 'hello world']);
});

test('array/hasDuplicate', () => {
  expect(arrayFn.hasDuplicate([1, 2, 2, 3])).toBeTruthy();
});

test('array/rmDuplicate', () => {
  expect(arrayFn.rmDuplicate([1, 2, 2, 3])).toStrictEqual([1, 2, 3]);
});

test('array/flatten', () => {
  expect(arrayFn.flatten([1, [2, [3]]])).toStrictEqual([1, 2, 3]);
});
