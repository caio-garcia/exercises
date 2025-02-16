import { safeReportsEvaluator } from '.';
import * as fs from 'fs';

const sampleInput = fs.readFileSync('src/advent-of-code/2024/day2/input-sample.txt', 'utf8');
const realInput = fs.readFileSync('src/advent-of-code/2024/day2/input.txt', 'utf8');

describe('safeReportsEvaluator', () => {
  it('should successfully count how many reports are safe', () => {
    expect(safeReportsEvaluator(sampleInput)).toEqual(2);
  });
});
