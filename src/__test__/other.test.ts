import shochu from '../index';

const other = shochu.otherFn;

test('other/pick', () => {
  expect(other.pick({ foo: 'bar', bar: 'foo' }, 'bar')).toStrictEqual({
    bar: 'foo',
  });
});

test('other/omit', () => {
  expect(
    other.omit({ foo: 'bar', bar: 'foo', baa: 'foz' }, 'baa')
  ).toStrictEqual({
    foo: 'bar',
    bar: 'foo',
  });
});
