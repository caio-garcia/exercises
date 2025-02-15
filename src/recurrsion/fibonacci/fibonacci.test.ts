import { fibonacciCalculator } from './fibonacci';

describe('fibonacciCalculator', () => {
  it('should successfully calculate the Fibonacci number given the nth element', () => {
    expect(fibonacciCalculator(1)).toEqual(0);
    expect(fibonacciCalculator(2)).toEqual(1);
    expect(fibonacciCalculator(3)).toEqual(1);
    expect(fibonacciCalculator(4)).toEqual(2);
    expect(fibonacciCalculator(5)).toEqual(3);
    expect(fibonacciCalculator(14)).toEqual(233);
    expect(fibonacciCalculator(15)).toEqual(377);
  });
});
