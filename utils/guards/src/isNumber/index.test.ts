import { expect, test } from "vitest";
import { isNumber } from "./index";
import type { IsNumberOptions } from "./index";

const cases: [unknown, IsNumberOptions, unknown][] = [
  [0, {}, true],
  [1, {}, true],
  [-1, {}, true],
  [1.1, {}, true],
  [1e1, {}, true],
  [Number.MIN_SAFE_INTEGER - 1, { unsafe: true }, true],
  [Number.MAX_SAFE_INTEGER + 1, { unsafe: true }, true],
  [Number.MAX_SAFE_INTEGER, {}, true],
  [Number.MIN_SAFE_INTEGER, {}, true],
  [Number.MAX_SAFE_INTEGER + 1, {}, false],
  [Number.MIN_SAFE_INTEGER - 1, {}, false],
  [Number.POSITIVE_INFINITY, {}, false],
  [Number.NEGATIVE_INFINITY, {}, false],
  [Number.NEGATIVE_INFINITY, { unsafe: true }, false],
  [Number.NaN, {}, false],
  [Number.NaN, { unsafe: true }, false],
  [null, {}, false],
  [undefined, {}, false],
  [true, {}, false],
  [false, {}, false],
  ["", {}, false],
  ["0", {}, false],
  ["1", {}, false],
  ["1.1", {}, false],
  ["1e1", {}, false]
];

test.each(cases)("isNumber(%s, %s) -> %s", (input, options, expected) => {
  const results = isNumber(input, options);

  expect(results).toStrictEqual(expected);
});
