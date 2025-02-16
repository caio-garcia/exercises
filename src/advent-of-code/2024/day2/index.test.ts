import { safeReportsEvaluator, dampenerSafeReportEvaluator } from '.';
import * as fs from 'fs';

const sampleInput = fs.readFileSync('src/advent-of-code/2024/day2/input-sample.txt', 'utf8');
const realInput = fs.readFileSync('src/advent-of-code/2024/day2/input.txt', 'utf8');

describe('safeReportsEvaluator', () => {
  it('should successfully count how many reports are safe', () => {
    expect(safeReportsEvaluator(sampleInput)).toEqual(2);
    expect(safeReportsEvaluator(realInput)).toEqual(564);
  });

  it.only('should successfully count how many reports are safe in the dampener context', () => {
    expect(dampenerSafeReportEvaluator(sampleInput)).toEqual(4);
    // expect(dampenerSafeReportEvaluator(realInput)).toEqual(564);
  });
});
