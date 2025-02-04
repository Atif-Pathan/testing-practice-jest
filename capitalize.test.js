const { capitalize } = require('./testFunctions');

test('capitalize single non-capitalized word', () => {
  expect(capitalize('hello')).toEqual('Hello');
});

test('capitalize double non-capitalized words', () => {
  expect(capitalize('hello world')).toEqual('Hello world');
});

test('capitalize single character', () => {
  expect(capitalize('a')).toEqual('A');
});

test('capitalize no word', () => {
  expect(capitalize()).toEqual('');
});

test('capitalize empty word', () => {
  expect(capitalize('')).toEqual('');
});

test('capitalize whitespaces', () => {
  expect(capitalize('   ')).toEqual('   ');
});

test('already capitalized word', () => {
  expect(capitalize('Capital')).toEqual('Capital');
});

test('capitalize string with trailing whitespace', () => {
  expect(capitalize('hello  ')).toBe('Hello  ');
});

test('capitalize string with leading whitespace', () => {
  expect(capitalize('  hello')).toBe('  Hello');
});

test('capitalize string with mixed whitespace', () => {
  expect(capitalize(' \t\nhello')).toBe(' \t\nHello');
});

test('capitalize string with non-alphabetic first character', () => {
  expect(capitalize('123hello')).toBe('123hello');
  expect(capitalize('!hello')).toBe('!hello');
});

test('capitalize string with one non-whitespace character', () => {
  expect(capitalize('  a  ')).toBe('  A  ');
});

test('capitalize string with multiple words and whitespace', () => {
  expect(capitalize('  hello   world  ')).toBe('  Hello   world  ');
});