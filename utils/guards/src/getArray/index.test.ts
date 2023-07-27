import { expect, test } from "vitest";
import { getArray } from "./index";
import { isInteger } from "../isInteger/index";
import type { GetArrayOptions } from "./index";

const cases: [unknown, GetArrayOptions | undefined, unknown][] = [
  [undefined, {}, []],
  [null, {}, []],
  [true, {}, []],
  [false, {}, []],
  [0, {}, []],
  [1, {}, []],
  ["", {}, []],
  ["hello", {}, []],
  [{}, {}, []],
  [[], {}, []],
  [[1, 2, 3], {}, [1, 2, 3]],
  [[1, "2", 3], { filter: (input: unknown): input is number => typeof input === "number" }, [1, 3]],
  [[1, "2", 3], { filter: (input: unknown): input is string => typeof input === "string" }, ["2"]],
  [[1, "2", 3], { filter: (input: unknown): input is boolean => typeof input === "boolean" }, []],
  [[1, "2", 3, 4.5], { filter: isInteger }, [1, 3]]
];

test.each(cases)("getArray(%s, %s) -> %s", (input, fallback, expected) => {
  const results = getArray(input as any, fallback as any);

  expect(results).toStrictEqual(expected);
});
