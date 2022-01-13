import index from '../index';

it('expect printAndUpper("hello") to return "HELLO"', () => {
  expect(index.printAndUpper('hello')).toBe('HELLO');
});
