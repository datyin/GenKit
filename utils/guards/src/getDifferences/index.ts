import { toJSON, isArray, isObject, toString } from "../index";

interface GetDifferenceItem {
  path: string;
  from: string;
  into: string;
}

/**
 * Get the differences between two items.
 * @param original The original item.
 * @param modified The modified item.
 * @returns An array of differences.
 *
 * @category Getters
 * @example
 * ```ts
 * getDifferences({ a: 1, b: 2 }, { a: 1, b: 3 }); // [{ path: "b", from: "2", into: "3" }]
 * getDifferences({ a: 1, b: 2 }, { a: 1, b: 2 }); // []
 * getDifferences({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }); // [{ path: "c", from: undefined, into: "3" }]
 * getDifferences("123", 456); // [{ path: "", from: "123", into: "456" }]
 */
function getDifferences(original: unknown, modified: unknown): GetDifferenceItem[] {
  const differences: GetDifferenceItem[] = [];

  if ((isObject(original) && isObject(modified)) || (isArray(original) && isArray(modified))) {
    for (const key in original) {
      if (toJSON(original[key]) !== toJSON(modified[key])) {
        differences.push({ path: key, from: toString(original[key]), into: toString(modified[key]) });
      }
    }

    for (const key in modified) {
      const alreadyMapped = differences.find((difference) => difference.path === key);

      if (alreadyMapped) {
        continue;
      }

      if (toJSON(modified[key]) !== toJSON(original[key])) {
        differences.push({ path: key, from: toString(original[key]), into: toString(modified[key]) });
      }
    }
  }
  else {
    if (toJSON(original) !== toJSON(modified)) {
      differences.push({ path: "", from: toString(original), into: toString(modified) });
    }
  }

  return differences;
}

export { getDifferences };
export type { GetDifferenceItem };
