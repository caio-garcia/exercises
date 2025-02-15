export function binarySearch(elements: number[], target: number): number {
  let lowEnd = 0;
  let highEnd = elements.length - 1;

  while (lowEnd <= highEnd) {
    const mid = Math.floor((lowEnd + highEnd) / 2);

    if (elements[mid] === target) {
      return mid;
    } else if (elements[mid] < target) {
      lowEnd = mid + 1;
    } else {
      highEnd = mid - 1;
    }
  }
  return -1;
}
