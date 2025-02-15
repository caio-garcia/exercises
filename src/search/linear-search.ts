/**
 * A linear search function that takes an array of numbers and a target number as input.
 * The function should return the index of the target number if found, and -1 otherwise.
 * @param elements - An array of any type
 * @param target - The element to be found.
 * @returns - The index of the found target or -1 if not found.
 */
export function linearSearch<T>(elements: T[], target: any ): number {
    return elements.findIndex((element) => element === target)
}
