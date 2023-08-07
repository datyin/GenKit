import { expect, test } from "vitest";
import { toJSON } from "./index";
import type { ToJSONOptions } from "./index";

const cases: [unknown, ToJSONOptions, string][] = [
  [undefined, { spaces: 0 }, "{\"__genkit_meta_type__\":\"undefined\"}"],
  [null, { spaces: 0 }, "null"],
  [true, { spaces: 0 }, "true"],
  [false, { spaces: 0 }, "false"],
  [0, { spaces: 0 }, "0"],
  [1, { spaces: 0 }, "1"],
  [Number.NaN, { spaces: 0 }, "{\"__genkit_meta_type__\":\"NaN\"}"],
  [Number.POSITIVE_INFINITY, { spaces: 0 }, "{\"__genkit_meta_type__\":\"Infinity\"}"],
  [Number.NEGATIVE_INFINITY, { spaces: 0 }, "{\"__genkit_meta_type__\":\"-Infinity\"}"],
  ["", { spaces: 0 }, "\"\""],
  ["abc", { spaces: 0 }, "\"abc\""],
  [[], { spaces: 0 }, "[]"],
  [[1, 2, 3], { spaces: 0 }, "[1,2,3]"],
  [new Map([["a", 1], ["b", 2], ["c", 3]]), { spaces: 0 }, "{\"__genkit_meta_type__\":\"Map\",\"__genkit_meta_value__\":[[\"a\",1],[\"b\",2],[\"c\",3]]}"],
  [new Set([1, 2, 3]), { spaces: 0 }, "{\"__genkit_meta_type__\":\"Set\",\"__genkit_meta_value__\":[1,2,3]}"],
  [new RegExp("abc", "gi"), { spaces: 0 }, "{\"__genkit_meta_type__\":\"RegExp\",\"__genkit_meta_source__\":\"abc\",\"__genkit_meta_flags__\":\"gi\"}"],
  [new RegExp("abc"), { spaces: 0 }, "{\"__genkit_meta_type__\":\"RegExp\",\"__genkit_meta_source__\":\"abc\",\"__genkit_meta_flags__\":\"\"}"],
  [/^abc$/g, { spaces: 0 }, "{\"__genkit_meta_type__\":\"RegExp\",\"__genkit_meta_source__\":\"^abc$\",\"__genkit_meta_flags__\":\"g\"}"],
  [{ a: 1, b: 2, c: 3 }, { spaces: 0 }, "{\"a\":1,\"b\":2,\"c\":3}"],
  [Symbol("abc"), { spaces: 0 }, "{\"__genkit_meta_type__\":\"Symbol\",\"__genkit_meta_description__\":\"abc\"}"],
  [{ [Symbol("foo")]: "foo" }, { spaces: 0 }, "{}"], // Symbols as keys are not supported
  [() => { return 1; }, { spaces: 0 }, "{\"__genkit_meta_type__\":\"function\",\"__genkit_meta_source__\":\"() => { return 1; }\"}"],
  [async (a: unknown, b: unknown) => console.log(a, b), { spaces: 0 }, "{\"__genkit_meta_type__\":\"function\",\"__genkit_meta_source__\":\"async (a, b) => console.log(a, b)\"}"]
];

test.each(cases)("toJSON(%s, %s) -> %s", (input, options, expected) => {
  const results = toJSON(input as any, options as any).replace(/\s+/g, " ").replace(/\\n/g, "");

  expect(results).toStrictEqual(expected);
});
