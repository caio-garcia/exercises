export function factorial(element: number): number {
  if (element === 0) {
    return 1;
  }
  return element * factorial(element - 1);
}
