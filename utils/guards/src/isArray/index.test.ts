import { expect, test } from "vitest";
import { isArray } from "./index";
import type { IsArrayOptions } from "./index";

const cases: [unknown, IsArrayOptions | undefined, boolean][] = [
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
  [[], undefined, true],
  [[undefined], undefined, true],
  [new Set(), undefined, false],
  [new Set([undefined]), undefined, false],
  [new Map(), undefined, false],
  [new Map([[undefined, undefined]]), undefined, false],
  [{}, undefined, false],
  [{ test: undefined }, undefined, false],
  [new ArrayBuffer(0), undefined, false]
];

test.each(cases)("isArray(%s, %s) -> %s", (input, options, expected) => {
  const results = isArray(input as any, options as any);

  expect(results).toStrictEqual(expected);
});
