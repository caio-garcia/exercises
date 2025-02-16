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

function isSorted(report: number[]): boolean {
  const initialTrend = report[1] - report[0];

  for (let i = 1; i < report.length; i++) {
    const currenTrend = report[i + 1] - report[i];

    if (initialTrend > 0) {
      if (currenTrend < 0) {
        return false;
      }
    } else if (initialTrend < 0) {
      if (currenTrend > 0) {
        return false;
      }
    } else {
      if (currenTrend !== 0) {
        return false;
      }
    }
  }
  return true;
}

function isWithinSafetyLevels(report: number[]): boolean {
  let differences: number[] = [];
  let isSafe = true;

  for (let i = 0; i < report.length - 1; i++) {
    differences.push(report[i] - report[i + 1]);
  }

  differences.forEach((value) => {
    if (value < -3 || value > 3 || value === 0) {
      isSafe = false;
    }
  });

  return isSafe;
}

function isWithinDampenerSafetyLevels(report: number[]): boolean {
  let differences: number[] = [];
  let isSafe = true;

  for (let i = 0; i < report.length - 1; i++) {
    differences.push(report[i] - report[i + 1]);
  }
  console.log('REPORT', report);
  console.log('ORIG DIFF', differences);

  const indexOfDampenerValue = differences.findIndex((value) => value < -3 || value > 3 || value === 0);

  if (indexOfDampenerValue !== -1) {
    // TODO - the level needs to be removed not the difference
    const dampenerDifferences = [
      ...differences.slice(0, indexOfDampenerValue),
      ...differences.slice(indexOfDampenerValue + 1),
    ];
    console.log('INDEX', indexOfDampenerValue);
    console.log('DAMP DIFF', dampenerDifferences);

    dampenerDifferences.forEach((value) => {
      if (value < -3 || value > 3 || value === 0) {
        isSafe = false;
      }
    });
  }

  return isSafe;
}

function safetyCalculator(report: string[]): boolean {
  const numericalReport = report.map((element) => Number(element));

  return isSorted(numericalReport) && isWithinSafetyLevels(numericalReport);
}

function dampenerSafetyCalculator(report: string[]): boolean {
  const numericalReport = report.map((element) => Number(element));

  return isSorted(numericalReport) && isWithinDampenerSafetyLevels(numericalReport);
}

export function safeReportsEvaluator(input: string): number {
  const reports = sanitiseReports(input);
  let safeReportsCounter = 0;

  reports.forEach((report) => {
    if (safetyCalculator(report)) {
      safeReportsCounter++;
    }
  });

  return safeReportsCounter;
}

export function dampenerSafeReportEvaluator(input: string): number {
  const reports = sanitiseReports(input);
  let safeReportsCounter = 0;

  reports.forEach((report) => {
    console.log('REPORT 1', report);
    if (dampenerSafetyCalculator(report)) {
      console.log('REPORT SAFE', report);
      safeReportsCounter++;
    }
  });

  return safeReportsCounter;
}
