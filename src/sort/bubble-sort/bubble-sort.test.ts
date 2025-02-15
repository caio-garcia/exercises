import { bubbleSort } from './bubble-sort';

describe('bubbleSort', () => {
  it('should successfully sort an array', () => {
    expect(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(bubbleSort([0, 1, -1])).toEqual([-1, 0, 1]);
  });
});
