import { linearSearch } from './linear-search';

describe('linearSearch', () => {
  it('should successfully return existing element', () => {
    expect(linearSearch([2, 3, 5, 6, 12, 32], 2)).toEqual(0);
    expect(linearSearch([2, 3, 5, 6, 12, 32], 3)).toEqual(1);
    expect(linearSearch([2, 3, 5, 6, 12, 32], 5)).toEqual(2);
    expect(linearSearch([2, 'Charlie', 5, 'Anderson', 12, 32], 'Charlie')).toEqual(1);
  });

  it('should return -1 for non-existing element', () => {
    expect(linearSearch([2, 3, 5, 6, 12, 32], 'Charlie')).toEqual(-1);
    expect(linearSearch([2, 3, 5, 6, 12, 32], true)).toEqual(-1);
    expect(linearSearch([2, 3, 5, 6, 12, 32], null)).toEqual(-1);
    expect(linearSearch([2, 3, 5, 6, 12, 32], undefined)).toEqual(-1);
    expect(linearSearch([2, 3, 5, 6, 12, 32], -2)).toEqual(-1);
    expect(linearSearch([2, 3, 5, 6, 12, 32], false)).toEqual(-1);
  });
});
