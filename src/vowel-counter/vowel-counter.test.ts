import { vowelCounter } from './vowel-counter';

describe('vowelCounter', () => {
  it('should successfully count the number of vowels - a,e,i,o,u - of a word', () => {
    expect(vowelCounter('car')).toBe(1);
    expect(vowelCounter('house')).toBe(3);
    expect(vowelCounter('pass')).toBe(1);
    expect(vowelCounter('Caio')).toBe(3);
    expect(vowelCounter('CAIO')).toBe(3);
    expect(vowelCounter('Brn')).toBe(0);
  });
});
