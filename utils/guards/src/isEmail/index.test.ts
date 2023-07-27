import { expect, test } from "vitest";
import { isEmail } from "./index";

const cases: [unknown, unknown][] = [
  ["test@test.com", true],
  ["test@test.test", true],
  ["test@test", false],
  ["@test", false],
  ["@test.com", false],
  ["test", false]
];

test.each(cases)("isEmail(%s) -> %s", (input, expected) => {
  const results = isEmail(input as any);

  expect(results).toStrictEqual(expected);
});
