import { expect, test } from "vitest";
import { isBIC } from "./index";

const cases: [unknown, boolean][] = [
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
  ["DEUTDEFF", true],
  ["DEUTDEFF500", true],
  ["DEUTDEFF5000", false],
  ["DEUTDEFF50000", false]
];

test.each(cases)("isBIC(%s) -> %s", (input, expected) => {
  const results = isBIC(input);

  expect(results).toStrictEqual(expected);
});
