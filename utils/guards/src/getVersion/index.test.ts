import { expect, test } from "vitest";
import { getVersion } from "./index";
import type { GetVersionOptions } from "./index";

const cases: [unknown, GetVersionOptions, unknown][] = [
  [undefined, {}, { major: 0, minor: 0, patch: 0, build: 0, string: "0.0.0", fullString: "0.0.0.0" }],
  [null, {}, { major: 0, minor: 0, patch: 0, build: 0, string: "0.0.0", fullString: "0.0.0.0" }],
  [1, {}, { major: 1, minor: 0, patch: 0, build: 0, string: "1.0.0", fullString: "1.0.0.0" }],
  [1.5, {}, { major: 1, minor: 5, patch: 0, build: 0, string: "1.5.0", fullString: "1.5.0.0" }],
  ["1.0.0.0.5", {}, { major: 1, minor: 0, patch: 0, build: 0, string: "1.0.0", fullString: "1.0.0.0" }],
  ["001.000.000.005", {}, { major: 1, minor: 0, patch: 0, build: 5, string: "1.0.0", fullString: "1.0.0.5" }],
  ["001.000.002.005", {}, { major: 1, minor: 0, patch: 2, build: 5, string: "1.0.2", fullString: "1.0.2.5" }]
];

test.each(cases)("getVersion(%s, %s) -> %s", (input, options, expected) => {
  const results = getVersion(input as any, options as any);

  expect(results).toStrictEqual(expected);
});
