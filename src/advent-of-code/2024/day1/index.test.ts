import { locationDifferenceCalculator, similarityScore } from '.';
import * as fs from 'fs';

const sampleInput = fs.readFileSync('src/advent-of-code/2024/day1/input-sample.txt', 'utf8');
const realInput = fs.readFileSync('src/advent-of-code/2024/day1/input.txt', 'utf8');

describe('locationDifferenceCalculator', () => {
  it('should successfully return the sum of all different locations', () => {
    expect(locationDifferenceCalculator(sampleInput)).toEqual(11);
    expect(locationDifferenceCalculator(realInput)).toEqual(2344935);
  });

  it('should correctly get the locations similarity scores', () => {
    expect(similarityScore(sampleInput)).toBe(31);
    expect(similarityScore(realInput)).toBe(27647262);
  });
});
