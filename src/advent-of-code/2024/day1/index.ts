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

function similarityScoreCalculator(element: number, list: number[]): number {
  let counter: number = 0;

  list.forEach((location) => {
    if (location === element) {
      counter++;
    }
  });
  return counter * element;
}

export function locationDifferenceCalculator(lists: string): number {
  const { listA, listB } = sanitiseLists(lists);
  const locationDifferences = differenceCalculator(listA, listB);
  return locationDifferences.reduce((a, b) => a + b, 0);
}

export function similarityScore(lists: string): number {
  const { listA, listB } = sanitiseLists(lists);

  const counters = listA.map((location) => {
    return similarityScoreCalculator(location, listB);
  });

  return counters.reduce((counterA, counterB) => counterA + counterB);
}
