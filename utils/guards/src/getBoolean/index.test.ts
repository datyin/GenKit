import { expect, test } from "vitest";
import { getBoolean } from "./index";
import type { GetBooleanOptions } from "./index";

const cases: [unknown, GetBooleanOptions | undefined, unknown][] = [
  [undefined, {}, false],
  [null, {}, false],
  [true, {}, true],
  [false, {}, false],
  [0, {}, false],
  [1, {}, false],
  ["", {}, false],
  ["hello", {}, false],
  [{}, {}, false],
  [[], {}, false],
  [[1, 2, 3], {}, false],
  [[1, "2", 3], {}, false],
  [[1, "2", 3], { default: true }, true]
];

test.each(cases)("getBoolean(%s, %s) -> %s", (input, options, expected) => {
  const results = getBoolean(input as any, options as any);

  expect(results).toStrictEqual(expected);
});
