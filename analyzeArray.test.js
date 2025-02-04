const { analyzeArray } = require('./testFunctions');

test('analyzeArray function exists', () => {
    expect(analyzeArray).toBeDefined();
});

test('analyzeArray returns an object', () => {
    expect(typeof analyzeArray([1, 2, 3])).toBe('object');
});

test('analyzeArray returns correct length', () => {
    expect(analyzeArray([1, 2, 3]).length).toBe(3);
});
  
test('analyzeArray returns correct min', () => {
    expect(analyzeArray([1, 2, 3]).min).toBe(1);
});
  
test('analyzeArray returns correct max', () => {
    expect(analyzeArray([1, 2, 3]).max).toBe(3);
});
  
test('analyzeArray returns correct average', () => {
    expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

test('simple array, same as example', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
});

test('simple array 2', () => {
    expect(analyzeArray([3,12,32,11,5,9])).toEqual({
        average: 12,
        min: 3,
        max: 32,
        length: 6
     });
});

test('analyzeArray works with negative numbers', () => {
    const result = analyzeArray([-1, -2, -3]);
    expect(result).toEqual({
      average: -2,
      min: -3,
      max: -1,
      length: 3,
    });
});
  
test('analyzeArray works with decimals', () => {
    const result = analyzeArray([1.5, 2.5, 3.5]);
    expect(result).toEqual({
      average: 2.5,
      min: 1.5,
      max: 3.5,
      length: 3,
    });
});
  
test('analyzeArray works with single number', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
});
  
test('analyzeArray works with empty array', () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0,
    });
});
  
test('analyzeArray works with mixed positive and negative numbers', () => {
    const result = analyzeArray([-1, 2, -3, 4]);
    expect(result).toEqual({
      average: 0.5,
      min: -3,
      max: 4,
      length: 4,
    });
});
  
test('analyzeArray works with large numbers', () => {
    const result = analyzeArray([1000000, 2000000, 3000000]);
    expect(result).toEqual({
      average: 2000000,
      min: 1000000,
      max: 3000000,
      length: 3,
    });
});

test('analyzeArray rounds average to 3 decimal places', () => {
    const result = analyzeArray([1.23456, 2.34567, 3.45678]);
    expect(result.average).toBe(2.34567); // Rounded to 5 decimal places
});

test('analyzeArray works with very small decimals', () => {
    const result = analyzeArray([0.0001, 0.0002, 0.0003]);
    expect(result).toEqual({
      average: 0.0002,
      min: 0.0001,
      max: 0.0003,
      length: 3,
    });
});
  
test('analyzeArray works with identical numbers', () => {
    const result = analyzeArray([5, 5, 5, 5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 4,
    });
});

test('analyzeArray works with mixed large and small numbers', () => {
    const result = analyzeArray([1000000, 0.0001, 2000000]);
    expect(result).toEqual({
      average: 1000000.00003,
      min: 0.0001,
      max: 2000000,
      length: 3,
    });
});

test('analyzeArray rounds non-integer decimals correctly', () => {
    const result = analyzeArray([1.11111, 2.22222, 3.33333]);
    expect(result).toEqual({
      average: 2.22222,
      min: 1.11111,
      max: 3.33333,
      length: 3,
    });
});
  