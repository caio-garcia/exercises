export function fibonacciCalculator(element: number): number {
  if (element === 1) {
    return 0;
  }

  if (element <= 3) {
    return 1;
  }
  return fibonacciCalculator(element - 1) + fibonacciCalculator(element - 2);
}

export function fibonacciSequence(element: number): number[] {
  if (element === 1) {
    return [0];
  }
  let sequenceResult: number[] = [0, 1];
  while (sequenceResult.length < element) {
    const nextValue = sequenceResult[sequenceResult.length - 1] + sequenceResult[sequenceResult.length - 2];
    sequenceResult.push(nextValue);
  }
  return sequenceResult;
}
