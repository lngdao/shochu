import shochu from '../index';

const stringFn = shochu.stringFn;

test('string/repeat', () => {
  expect(stringFn.repeat('a', 3)).toBe('aaa');
});

test('string/rmDicretics', () => {
  expect(stringFn.rmDicretics('ĥĕŀŀő ŵőrŀd')).toBe('hello world');
});

test('string/scut', () => {
  expect(stringFn.scut('Hhello hWorld', 'h')).toBe('Hello World');
});

test('string/truncate', () => {
  expect(stringFn.truncate('Lorem Ipsum is simply dummy text', 11)).toBe(
    'Lorem Ipsum...'
  );
});
