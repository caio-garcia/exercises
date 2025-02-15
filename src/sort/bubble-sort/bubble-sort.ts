export function bubbleSort(elements: number[]): number[] {
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      if (elements[j] > elements[j + 1]) {
        [elements[j], elements[j + 1]] = [elements[j + 1], elements[j]];
      }
    }
  }
  return elements;
}
