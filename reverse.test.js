const { reverseString } = require('./testFunctions');

test('reverse normal word', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('reverse word with whitespaces', () => {
  expect(reverseString('  hello  ')).toEqual('  olleh  ');
});

test('reverse string with only whitespace', () => {
  expect(reverseString('   ')).toBe('   ');
  expect(reverseString('\t\n')).toBe('\n\t');
});

test('reverse word with trailing whitespaces', () => {
  expect(reverseString('hello  ')).toEqual('  olleh');
});

test('reverse word with leading whitespaces', () => {
  expect(reverseString('    hello')).toEqual('olleh    ');
});

test('reverse two words', () => {
  expect(reverseString('hello World')).toEqual('dlroW olleh');
});

test('reverse empty string', () => {
  expect(reverseString('')).toEqual('');
});

test('reverse string with numbers', () => {
  expect(reverseString('123Hellos')).toEqual('solleH321');
});

test('reverse string with special characters', () => {
  expect(reverseString('hello!')).toBe('!olleh');
});

test('reverse string with one character', () => {
  expect(reverseString('a')).toBe('a');
});