import * as fs from 'fs';
/*
Data: 2 lists of unsorted numbers
Actions:
- sort lists individually
- take difference between the smallest on the left to the smallest on the right
- sum the differences
*/

type sanitesedLists = {
  listA: number[];
  listB: number[];
};

function sanitiseLists(lists: string): sanitesedLists {
  let listA: number[] = [];
  let listB: number[] = [];
  const pairs = lists.split('\n');

  pairs.forEach((elem) => {
    elem
      .trim()
      .split(/\s+/)
      .map((number, index) => {
        if (index === 0) {
          listA.push(Number(number));
        } else {
          listB.push(Number(number));
        }
      });
  });

  return { listA, listB };
}

function differenceCalculator(listA: number[], listB: number[]): number[] {
  let differences: number[] = [];
  const sortedListA = listA.sort();
  const sortedListB = listB.sort();

  sortedListA.map((location, index) => {
    const difference = location - sortedListB[index];
    differences.push(difference < 0 ? difference * -1 : difference);
  });
  return differences;
}

export function locationDifferenceCalculator(lists: string): number {
  const { listA, listB } = sanitiseLists(lists);
  const locationDifferences = differenceCalculator(listA, listB);
  return locationDifferences.reduce((a, b) => a + b, 0);
}
