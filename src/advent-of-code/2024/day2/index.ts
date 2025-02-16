/*

1) The levels are either all increasing or all decreasing.
2) Any two adjacent levels differ by at least one and at most three.
*/

function sanitiseReports(input: string): string[][] {
  const reports = input.split('\n');
  return reports.map((element) => {
    return element.split(' ');
  });
}

function isSorted(diff: number[]): boolean {
  const ascendingSorted = diff.map((number) => (number > 0 ? 1 : 0));
  console.log('ASC', ascendingSorted);
  return true;
}

function isWithinSafetyLevels(report: number[]): boolean {
  return true;
}

function safetyCalculator(report: string[]): boolean {
  const numericalReport = report.map((element) => Number(element));
  console.log(numericalReport);
  let differences: number[] = [];
  for (let i = 0; i < numericalReport.length - 1; i++) {
    differences.push(numericalReport[i] - numericalReport[i + 1]);
  }
  console.log('DIFF', differences);
  return isSorted(numericalReport) || isWithinSafetyLevels(numericalReport);
}

export function safeReportsEvaluator(input: string): number {
  const reports = sanitiseReports(input);
  let reportsSafe: boolean[] = [];
  console.log(reports.forEach((report) => safetyCalculator(report)));

  return 0;
}
