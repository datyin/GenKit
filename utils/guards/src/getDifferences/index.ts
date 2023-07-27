import { isArray } from "../isArray";
import { isObject } from "../isObject";

interface GetDifferenceItem {
  path: string;
  from: string;
  into: string;
}

function getDifferences(original: unknown, modified: unknown): GetDifferenceItem[] {
  const differences: GetDifferenceItem[] = [];

  if ((isObject(original) && isObject(modified)) || (isArray(original) && isArray(modified))) {
    for (const key in original) {
      if (JSON.stringify(original[key]) !== JSON.stringify(modified[key])) {
        differences.push({
          path: key,
          from: JSON.stringify(original[key], undefined, 2),
          into: JSON.stringify(modified[key], undefined, 2)
        });
      }
    }

    for (const key in modified) {
      const alreadyMapped = differences.find((difference) => difference.path === key);

      if (alreadyMapped) {
        continue;
      }

      if (JSON.stringify(modified[key]) !== JSON.stringify(original[key])) {
        differences.push({
          path: key,
          from: JSON.stringify(original[key], undefined, 2),
          into: JSON.stringify(modified[key], undefined, 2)
        });
      }
    }
  }
  else {
    if (JSON.stringify(original) !== JSON.stringify(modified)) {
      differences.push({
        path: "",
        from: JSON.stringify(original, undefined, 2),
        into: JSON.stringify(modified, undefined, 2)
      });
    }
  }

  return differences;
}

export { getDifferences };
export type { GetDifferenceItem };
