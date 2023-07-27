import { expect, test } from "vitest";
import { getDate } from "./index";
import type { GetDateOptions } from "./index";

const now = new Date();

/**
 * { default } is not required but nice to have because of the milliseconds.
 */
const cases: [unknown, GetDateOptions | undefined, unknown][] = [
  [undefined, { default: now }, now],
  [null, { default: now }, now],
  [true, { default: now }, now],
  [false, { default: now }, now],
  [0, { default: now }, now],
  [1, { default: now }, now],
  ["", { default: now }, now],
  ["hello", { default: now }, now],
  [{ default: now }, { default: now }, now],
  [[], { default: now }, now],
  [[1, 2, 3], { default: now }, now],
  [[1, "2", 3], { default: now }, now]
];

test.each(cases)("getDate(%s, %s) -> %s", (input, options, expected) => {
  const results = getDate(input as any, options as any);

  expect(results).toStrictEqual(expected);
});
