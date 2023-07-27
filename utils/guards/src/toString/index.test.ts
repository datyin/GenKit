import { expect, test } from "vitest";
import { toString } from "./index";
import type { ToStringOptions } from "./index";

const cases: [unknown, ToStringOptions | undefined, unknown][] = [
  [undefined, {}, ""],
  [null, {}, ""],
  [true, {}, "true"],
  [false, {}, "false"],
  [0, {}, "0"],
  [1, {}, "1"],
  ["", {}, ""],
  ["hello", {}, "hello"],
  [{}, {}, ""],
  [{ a: 1 }, {}, "a: 1"],
  [[], {}, ""],
  [[1, 2, 3], {}, "1, 2, 3"],
  [[1, "2", 3], {}, "1, 2, 3"],
  [[1, "2", 3], { default: "hello" }, "1, 2, 3"],
  [[1, "2", 3], { default: "hello", separator: " " }, "1 2 3"],
  [new Set([1, 2, 3]), {}, "1, 2, 3"],
  [new Set([1, "2", 3]), {}, "1, 2, 3"],
  [new Map([["a", 1], ["b", 2], ["c", 3]]), {}, "a: 1, b: 2, c: 3"]
];

test.each(cases)("toString(%s, %s) -> %s", (input, options, expected) => {
  const results = toString(input as any, options as any);

  expect(results).toStrictEqual(expected);
});
