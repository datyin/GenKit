import { expect, test } from "vitest";
import { isArrayNotEmpty } from "./index";

const cases: [unknown, unknown, unknown][] = [
  [undefined, undefined, false],
  [null, undefined, false],
  [true, undefined, false],
  [false, undefined, false],
  [0, undefined, false],
  [1, undefined, false],
  [Number.NaN, undefined, false],
  ["", undefined, false],
  ["test", undefined, false],
  ["0", undefined, false],
  ["1", undefined, false],
  ["NaN", undefined, false],
  ["Infinity", undefined, false],
  ["-Infinity", undefined, false],
  [[], undefined, false],
  [[1, 2, 3], undefined, true],
  [[undefined], undefined, true],
  [new Set(), undefined, false],
  [new Set([undefined]), undefined, false],
  [new Map(), undefined, false],
  [new Map([[undefined, undefined]]), undefined, false]
];

test.each(cases)("isArrayNotEmpty(%s, %s) -> %s", (input, options, expected) => {
  const results = isArrayNotEmpty(input as any, options as any);

  expect(results).toStrictEqual(expected);
});
