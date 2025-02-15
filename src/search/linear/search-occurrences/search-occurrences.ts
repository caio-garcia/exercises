export function searchOccurrences<T>(elements: T[], target: any): number[]{
    let arrayOfIndexes: number[] = []
    elements.map((element, index)=> {if(element === target){ arrayOfIndexes.push(index)}})
    return arrayOfIndexes
}