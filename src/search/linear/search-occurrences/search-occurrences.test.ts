import { searchOccurrences } from './search-occurrences';

describe('searchOccurrences', () => {
  it('should successfully return an array of indexes for each occurrence', () => {
    expect(searchOccurrences([2, 3, 5, 6, 12, 32], 2)).toEqual([0]);
    expect(searchOccurrences([2, 2, 5, 6, 12, 32], 2)).toEqual([0, 1]);
    expect(searchOccurrences([2, 2, 5, 6, 2, 32], 2)).toEqual([0, 1, 4]);
    expect(searchOccurrences(['Charlie', 'Charlie', 5, 6, 'Charlie', 'Charlie'], 'Charlie')).toEqual([0, 1, 4, 5]);
  });
  it('should return an empty array if occurrence is not found', () => {
    expect(searchOccurrences([2, 3, 5, 6, 12, 32], 'Charlie')).toEqual([]);
    expect(searchOccurrences([2, 3, 5, 6, 12, 32], undefined)).toEqual([]);
  });
});
