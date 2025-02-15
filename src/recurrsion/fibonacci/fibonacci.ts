export function fibonacciCalculator(element: number): number {
  if (element === 1) {
    return 0;
  }

  if (element <= 3) {
    return 1;
  }
  return fibonacciCalculator(element - 1) + fibonacciCalculator(element - 2);
}
