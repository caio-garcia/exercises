import { isPalindrome } from './palindrome';

describe('isPalindrome', () => {
  it('should successfully identify a palindrome word', () => {
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
    expect(isPalindrome('rotor')).toBe(true);
    expect(isPalindrome('kayak')).toBe(true);
    expect(isPalindrome('arara')).toBe(true);
    expect(isPalindrome('ababa')).toBe(true);
  });

  it('should successfully identify a word as not a palindrome', () => {
    expect(isPalindrome('car')).toBe(false);
    expect(isPalindrome('shop')).toBe(false);
    expect(isPalindrome('hour')).toBe(false);
    expect(isPalindrome('state')).toBe(false);
    expect(isPalindrome('javascript')).toBe(false);
    expect(isPalindrome('bababa')).toBe(false);
  });
});
