export function vowelCounter(word: string): number {
  const vowelRegex = /[aeiou]/g;
  const matches = word.toLowerCase().match(vowelRegex);
  return matches ? matches.length : 0;
}
