import { expect, test } from "vitest";
import { isArrayEmpty } from "./index";

const cases: [unknown, unknown][] = [
  [undefined, false],
  [null, false],
  [true, false],
  [false, false],
  [0, false],
  [1, false],
  [Number.NaN, false],
  ["", false],
  ["test", false],
  ["0", false],
  ["1", false],
  ["NaN", false],
  ["Infinity", false],
  ["-Infinity", false],
  [[], true],
  [[undefined], false],
  [new Set(), false],
  [new Set([undefined]), false],
  [new Map(), false],
  [new Map([[undefined, undefined]]), false],
  [{}, false],
  [{ test: undefined }, false]
];

test.each(cases)("isArrayEmpty(%s) -> %s", (input, expected) => {
  const results = isArrayEmpty(input as any);

  expect(results).toStrictEqual(expected);
});
