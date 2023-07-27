import { expect, test } from "vitest";
import { getBigInt } from "./index";
import type { GetBigIntOptions } from "./index";

const cases: [unknown, GetBigIntOptions | undefined, unknown][] = [
  [undefined, {}, BigInt(0)],
  [null, {}, BigInt(0)],
  [true, {}, BigInt(0)],
  [false, {}, BigInt(0)],
  [0, {}, BigInt(0)],
  [1, {}, BigInt(0)],
  ["", {}, BigInt(0)],
  ["hello", {}, BigInt(0)],
  [{}, {}, BigInt(0)],
  [[], {}, BigInt(0)],
  [[1, 2, 3], {}, BigInt(0)],
  [[1, "2", 3], {}, BigInt(0)],
  [[1, "2", 3], { default: BigInt(1) }, BigInt(1)],
  [1n, {}, 1n],
  [1n, { default: 2n }, 1n],
  [55, { default: 2n }, 2n]
];

test.each(cases)("getBigInt(%s, %s) -> %s", (input, options, expected) => {
  const results = getBigInt(input as any, options as any);

  expect(results).toStrictEqual(expected);
});
