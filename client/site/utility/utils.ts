export type MapFunc<T = unknown> = (
  val: T,
  index?: number,
  arr?: readonly T[]
) => string;

/**
 * Groups the array by object key or a function
 */
export const groupBy = <T, S extends string>(
  arr: readonly T[],
  fn: MapFunc<T> | string
): Record<S, T[]> =>
  arr
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map(typeof fn === "string" ? (val: any) => val[fn] : fn)
    .reduce((acc: Record<string, T[]>, val: string, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});

/**
 * Immutably capitalizes the first letter of the string
 *
 * @param str - The string to capitalize
 * @returns - The capitalized string or unchanged string if @str is empty
 */
export const capitalizeFirstLetterOfEachWord = (str: string): string => {
  return str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

/**
 * Makes a display value pretty.
 * From This_ugly in This Pretty
 * @param str
 */
export const prettifyDisplayValue = (str: string | number): string | number => {
  return typeof str === "string"
    ? str
        .toLowerCase()
        .split("_")
        .map((word) => capitalizeFirstLetterOfEachWord(word))
        .join(" ")
    : str;
};

/**
 * Bool to check if current environment is "development"
 */
export const __DEV__ = process.env.NODE_ENV === "development";

/**
 * Bool to check if we are in SSR
 */
export const IS_SSR = typeof window === "undefined";

export function sum(numbers: number[]) {
  return numbers.reduce((v, p) => v + p, 0);
}

/**
 * Retrieve a fixed number of elements from an array, evenly distributed but
 * always including the first and last elements.
 *
 * For example, if we have 16 elements and we want an array where the 2nd element
 * is the first one and the 15th is the last one, and then we want 4 values
 * distributed the evenly between the first and the last elements:
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 * would give us
 * [2, 4, 7, 10, 13, 15]
 *
 * @param   {Array} items - The array to operate on.
 * @param   {number} n - The number of elements to extract.
 * @param   {number} startOffset - The index of our first element.
 * @param   {number} endOffset - The index of our last element counting from the end.
 * @returns {Array}
 */
export function distributedCopy<T>(
  items: T[],
  n: number,
  startOffset = 0,
  endOffset = 0
) {
  endOffset += 1; // this will be used to substract to get the index
  const elements = [items[startOffset]];
  const slicedItems = items.slice(startOffset, items.length - endOffset);
  const interval = Math.ceil(slicedItems.length / (n - 1));
  for (let i = 1; i < n - 1; i++) {
    elements.push(slicedItems[i * interval - 1]);
  }
  elements.push(items[items.length - endOffset]);
  return elements;
}

export function getUserAgent() {
  return typeof window !== "undefined" ? window.navigator.userAgent : null;
}

export function roundToNearestHour(date = new Date()) {
  const minutes = 60;
  const ms = 1000 * 60 * minutes;
  return new Date(Math.floor(date.getTime() / ms) * ms);
}
