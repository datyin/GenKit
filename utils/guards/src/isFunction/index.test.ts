import { expect, test } from "vitest";
import { isFunction } from "./index";

class TestClass {
  constructor() {}
}

const testClass = new TestClass();

const cases: [unknown, unknown][] = [
  [() => {}, true],
  [function () {}, true],
  [async () => {}, true],
  [async function () {}, true],
  [class {}, false],
  [testClass, false],
  [TestClass, false],
  [undefined, false],
  [null, false]
];

test.each(cases)("isFunction(%s, %s) -> %s", (input, expected) => {
  const results = isFunction(input as any);

  expect(results).toStrictEqual(expected);
});
