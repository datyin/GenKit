import { expect, test } from "vitest";
import { getDifferences } from "./index";

const cases: [unknown, unknown, unknown][] = [
  [undefined, undefined, []],
  [null, null, []],
  [{ a: 1, b: 2 }, { a: 1, b: 2 }, []],
  [{ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }, [{ path: "c", from: "", into: "3" }]],
  [{ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 4 }, [{ path: "c", from: "3", into: "4" }]]
];

test.each(cases)("getDifferences(%s, %s) -> %s", (input, options, expected) => {
  const results = getDifferences(input as any, options as any);

  expect(results).toStrictEqual(expected);
});
