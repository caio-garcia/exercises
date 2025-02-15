import { binarySearch } from './simple-binary-search';

describe('binarySearch', () => {
  it('should successfully return existing element', () => {
    expect(binarySearch([2, 3, 5, 6, 12, 32], 2)).toEqual(0);
    expect(binarySearch([2, 3, 5, 6, 12, 32], 3)).toEqual(1);
    expect(binarySearch([2, 3, 5, 6, 12, 32], 5)).toEqual(2);
  });

  it('should return -1 for non-existing element', () => {
    expect(binarySearch([2, 3, 5, 6, 12, 32], 99)).toEqual(-1);
  });
});
