/**
 * Function that returns an array of numbers from start to end with a step
 *
 * @param {number} start - The start of the range
 * @param {number} end - The end of the range
 * @param {number} step - The step of the range
 */
export function range(start: number, end: number, step: number = 1): number[] {
  const result: number[] = []
  for (let i = start; i < end; i += step) {
    result.push(i)
  }
  return result
}

/**
 * Function that accepts a string and returns a string with the spaces replaced with dashes and all lowercase
 *
 * @param {string} str - The string to be transformed
 * @returns {string} The transformed string
 */
export function slugify(str: string): string {
  return str.toLowerCase().replace(/ /g, '-')
}
