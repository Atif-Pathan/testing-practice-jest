const { calculator } = require('./testFunctions');

test('add function exists', () => {
    expect(calculator.add).toBeDefined();
})
  
test('subtract function exists', () => {
    expect(calculator.subtract).toBeDefined();
})
  
test('divide function exists', () => {
    expect(calculator.divide).toBeDefined();
})
  
test('multiply function exists', () => {
    expect(calculator.multiply).toBeDefined();
})

test('add two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test('add two numbers negative and positive', () => {
    expect(calculator.add(2, -3)).toBe(-1);
})

test('add two decimal numbers', () => {
    expect(calculator.add(1.5, 2.5)).toBe(4);
}) 

test('add very large numbers', () => {
    expect(calculator.add(1e20, 1e20)).toBe(2e20);
})

test('add zero to a number', () => {
    expect(calculator.add(5, 0)).toBe(5);
})

test('subtract two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
})

test('subtract two numbers negative and positive', () => {
    expect(calculator.subtract(2, -3)).toBe(5);
})

test('subtract two decimal numbers', () => {
    expect(calculator.subtract(5.5, 2.5)).toBe(3);
})
  

test('divide two numbers', () => {
    expect(calculator.divide(12, 4)).toBe(3);
})

test('divide two numbers negative and positive', () => {
    expect(calculator.divide(3, -3)).toBe(-1);
})

test('divide two numbers not whole division', () => {
    expect(calculator.divide(10, 3)).toBe(3.33333);
})

test('divide two numbers not whole division 2', () => {
    expect(calculator.divide(1, 8)).toBe(0.125);
})

test('divide 0 by x', () => {
    expect(calculator.divide(0, 20)).toBe(0);
})

test('divide by 0', () => {
    expect(calculator.divide(10, 0)).toBe(Infinity);
})

test('divide by -0', () => {
    expect(calculator.divide(10, -0)).toBe(-Infinity);
})

test('divide two decimals', () => {
    expect(calculator.divide(2.5, 0.5)).toBe(5);
})

test('multiply two numbers', () => {
    expect(calculator.multiply(12, 4)).toBe(48);
})

test('multiply negative and positive number', () => {
    expect(calculator.multiply(-2, 4)).toBe(-8);
})

test('multiply two negative numbers', () => {
    expect(calculator.multiply(-10, -3)).toBe(30);
})

test('multiply by 0', () => {
    expect(calculator.multiply(12, 0)).toBe(0);
})

test('multiply by one', () => {
    expect(calculator.multiply(5, 1)).toBe(5);
})

test('multiply decimal', () => {
    expect(calculator.multiply(2.5, 4)).toBe(10);
})

test('multiply decimal with decimal', () => {
    expect(calculator.multiply(2.25, 4.155247)).toBe(9.34931);
})

test('multiply very small numbers', () => {
    expect(calculator.multiply(0.0001, 0.0001)).toBe(0);
})