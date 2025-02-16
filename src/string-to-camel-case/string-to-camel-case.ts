export function stringToCamelCase(str: string): string {
  let words = str.split(/[-_]/);
  const treatedWord = words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.substring(1, word.length);
      }
    })
    .join('');

  return treatedWord;
}
