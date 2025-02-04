const { caesarCipher } = require('./testFunctions');


test('caesarCipher function exists', () => {
    expect(caesarCipher).toBeDefined();
});

test('simple string with small shift', () => {
    expect(caesarCipher('abc', 1)).toEqual('bcd');
});

test('short string with medium shift', () => {
    expect(caesarCipher('abc', 10)).toEqual('klm');
});

test('short string with medium shift upper and lowercase', () => {
    expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
});

test('short string spread out with medium shift upper and lowercase', () => {
    expect(caesarCipher('aLgoriThM', 5)).toEqual('fQltwnYmR');
});

test('test string with wrap around due to high shift', () => {
    expect(caesarCipher('xyz', 15)).toEqual('mno');
});

test('test string with wrap around due to low shift', () => {
    expect(caesarCipher('xyz', 3)).toEqual('abc');
});

test('test string with wrap around with different case', () => {
    expect(caesarCipher('HelloWorld', 15)).toEqual('WtaadLdgas');
});

test('test 2 words with space', () => {
    expect(caesarCipher('hello world', 15)).toEqual('wtaad ldgas');
});

test('test 2 words with whitespace trailing and leading and in middle', () => {
    expect(caesarCipher('   hello world ', 15)).toEqual('   wtaad ldgas ');
});

test('test with punctuation', () => {
    expect(caesarCipher('hey!', 20)).toEqual('bys!');
});

test('test with punctuation and space and multiple words and mix case', () => {
    expect(caesarCipher('  Hey! How are yOu??', 17)).toEqual('  Yvp! Yfn riv pFl??');
});

test('test with numbers', () => {
    expect(caesarCipher('1234', 17)).toEqual('1234');
});

test('test with no shift', () => {
    expect(caesarCipher('no shift hehe', 0)).toEqual('no shift hehe');
});

test('test with negative shift', () => {
    expect(caesarCipher('abc', -1)).toEqual('zab');
});

test('test string with large negative shift', () => {
    expect(caesarCipher('abc', -30)).toEqual('wxy');
});

test('test mixed case with negative shift', () => {
    expect(caesarCipher('HeLLo', -3)).toEqual('EbIIl');
});

test('test string with only non-alphabetic characters', () => {
    expect(caesarCipher('123!@#   ', 5)).toEqual('123!@#   ');
});

test('test empty string', () => {
    expect(caesarCipher('', 5)).toEqual('');
});

test('test string with shift greater than 26', () => {
    expect(caesarCipher('abc', 30)).toEqual('efg');
});

test('test string with shift equal to 26', () => {
    expect(caesarCipher('abc', 26)).toEqual('abc');
});

test('test string with shift equal to -26', () => {
    expect(caesarCipher('abc', -26)).toEqual('abc');
});

test('test mixed case with large shift', () => {
    expect(caesarCipher('HeLLo', 30)).toEqual('LiPPs');
});

test('test mixed case with large negative shift', () => {
    expect(caesarCipher('HeLLo', -30)).toEqual('DaHHk');
});