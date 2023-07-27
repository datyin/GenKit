import { expect, test } from "vitest";
import { getNumeric } from "./index";
import type { GetNumericOptions } from "./index";

const cases: [unknown, GetNumericOptions | undefined, unknown][] = [
  [undefined, undefined, "0"],
  [null, undefined, "0"],
  [true, undefined, "1"],
  [false, undefined, "0"],
  [0, undefined, "0"],
  [1, undefined, "1"],
  ["2,000.00", undefined, "2000"],
  ["2,000.00", { decimals: 5 }, "2000.00000"],
  ["2,000.0001", { decimals: 1 }, "2000.0"],
  ["2,000.0001", { decimals: 0 }, "2000"],
  ["2,000.0001", { decimals: -1 }, "2000.0001"],
  ["2,000.0001", undefined, "2000.0001"],
  ["$ 50.55", undefined, "50.55"],
  ["$ 50.55", { decimals: 2 }, "50.55"],
  ["$ 50.99", { decimals: 1 }, "50.9"]
];

test.each(cases)("getNumeric(%s, %s) -> %s", (input, options, expected) => {
  const results = getNumeric(input as any, options as any);

  expect(results).toStrictEqual(expected);
});
